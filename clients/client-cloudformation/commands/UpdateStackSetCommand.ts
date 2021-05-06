import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { UpdateStackSetInput, UpdateStackSetOutput } from "../models/models_0";
import {
  deserializeAws_queryUpdateStackSetCommand,
  serializeAws_queryUpdateStackSetCommand,
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

export interface UpdateStackSetCommandInput extends UpdateStackSetInput {}
export interface UpdateStackSetCommandOutput extends UpdateStackSetOutput, __MetadataBearer {}

/**
 * <p>Updates the stack set, and associated stack instances in the specified accounts and
 *          Regions.</p>
 *          <p>Even if the stack set operation created by updating the stack set fails (completely
 *          or partially, below or above a specified failure tolerance), the stack set is updated with
 *          your changes. Subsequent <a>CreateStackInstances</a> calls on the specified
 *          stack set use the updated stack set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, UpdateStackSetCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, UpdateStackSetCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new UpdateStackSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateStackSetCommandInput} for command's `input` shape.
 * @see {@link UpdateStackSetCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateStackSetCommand extends $Command<
  UpdateStackSetCommandInput,
  UpdateStackSetCommandOutput,
  CloudFormationClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateStackSetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateStackSetCommandInput, UpdateStackSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFormationClient";
    const commandName = "UpdateStackSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateStackSetInput.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateStackSetOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateStackSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryUpdateStackSetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateStackSetCommandOutput> {
    return deserializeAws_queryUpdateStackSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
