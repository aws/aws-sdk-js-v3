import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { ListGroupsForUserRequest, ListGroupsForUserResponse } from "../models/models_0";
import {
  deserializeAws_queryListGroupsForUserCommand,
  serializeAws_queryListGroupsForUserCommand,
} from "../protocols/Aws_query";
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

export interface ListGroupsForUserCommandInput extends ListGroupsForUserRequest {}
export interface ListGroupsForUserCommandOutput extends ListGroupsForUserResponse, __MetadataBearer {}

/**
 * <p>Lists the IAM groups that the specified IAM user belongs to.</p>
 *         <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
 *             parameters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListGroupsForUserCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListGroupsForUserCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new ListGroupsForUserCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListGroupsForUserCommandInput} for command's `input` shape.
 * @see {@link ListGroupsForUserCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListGroupsForUserCommand extends $Command<
  ListGroupsForUserCommandInput,
  ListGroupsForUserCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListGroupsForUserCommandInput) {
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
  ): Handler<ListGroupsForUserCommandInput, ListGroupsForUserCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "ListGroupsForUserCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListGroupsForUserRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListGroupsForUserResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListGroupsForUserCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryListGroupsForUserCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListGroupsForUserCommandOutput> {
    return deserializeAws_queryListGroupsForUserCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
