import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { ListRolesRequest, ListRolesResponse } from "../models/models_0";
import { deserializeAws_queryListRolesCommand, serializeAws_queryListRolesCommand } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type ListRolesCommandInput = ListRolesRequest;
export type ListRolesCommandOutput = ListRolesResponse & __MetadataBearer;

/**
 * <p>Lists the IAM roles that have the specified path prefix. If there are none, the
 *          operation returns an empty list. For more information about roles, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/WorkingWithRoles.html">Working with
 *             Roles</a>.</p>
 *          <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
 *          parameters.</p>
 */
export class ListRolesCommand extends $Command<ListRolesCommandInput, ListRolesCommandOutput, IAMClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListRolesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListRolesCommandInput, ListRolesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "ListRolesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListRolesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListRolesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListRolesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryListRolesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListRolesCommandOutput> {
    return deserializeAws_queryListRolesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
