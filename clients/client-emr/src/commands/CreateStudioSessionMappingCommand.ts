import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { CreateStudioSessionMappingInput } from "../models/models_0";
import {
  deserializeAws_json1_1CreateStudioSessionMappingCommand,
  serializeAws_json1_1CreateStudioSessionMappingCommand,
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

export interface CreateStudioSessionMappingCommandInput extends CreateStudioSessionMappingInput {}
export interface CreateStudioSessionMappingCommandOutput extends __MetadataBearer {}

/**
 * <p>Maps a user or group to the Amazon EMR Studio specified by <code>StudioId</code>, and
 *          applies a session policy to refine Studio permissions for that user or group. Use <code>CreateStudioSessionMapping</code> to assign users to a Studio when you use Amazon Web Services SSO authentication. For instructions on how to assign users to a Studio when you use IAM authentication, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-studio-manage-users.html#emr-studio-assign-users-groups">Assign a user or group to your EMR Studio</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, CreateStudioSessionMappingCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, CreateStudioSessionMappingCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const command = new CreateStudioSessionMappingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateStudioSessionMappingCommandInput} for command's `input` shape.
 * @see {@link CreateStudioSessionMappingCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateStudioSessionMappingCommand extends $Command<
  CreateStudioSessionMappingCommandInput,
  CreateStudioSessionMappingCommandOutput,
  EMRClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateStudioSessionMappingCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EMRClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateStudioSessionMappingCommandInput, CreateStudioSessionMappingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRClient";
    const commandName = "CreateStudioSessionMappingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateStudioSessionMappingInput.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateStudioSessionMappingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateStudioSessionMappingCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateStudioSessionMappingCommandOutput> {
    return deserializeAws_json1_1CreateStudioSessionMappingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
