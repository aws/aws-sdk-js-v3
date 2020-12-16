import { SSOAdminClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSOAdminClient";
import { ListAccountAssignmentsRequest, ListAccountAssignmentsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListAccountAssignmentsCommand,
  serializeAws_json1_1ListAccountAssignmentsCommand,
} from "../protocols/Aws_json1_1";
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

export type ListAccountAssignmentsCommandInput = ListAccountAssignmentsRequest;
export type ListAccountAssignmentsCommandOutput = ListAccountAssignmentsResponse & __MetadataBearer;

/**
 * <p>Lists the assignee of the specified AWS account with the specified permission
 *        set.</p>
 */
export class ListAccountAssignmentsCommand extends $Command<
  ListAccountAssignmentsCommandInput,
  ListAccountAssignmentsCommandOutput,
  SSOAdminClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListAccountAssignmentsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSOAdminClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAccountAssignmentsCommandInput, ListAccountAssignmentsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSOAdminClient";
    const commandName = "ListAccountAssignmentsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAccountAssignmentsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListAccountAssignmentsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListAccountAssignmentsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListAccountAssignmentsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAccountAssignmentsCommandOutput> {
    return deserializeAws_json1_1ListAccountAssignmentsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
