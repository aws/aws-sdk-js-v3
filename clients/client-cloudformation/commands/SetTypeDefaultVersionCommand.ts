import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { SetTypeDefaultVersionInput, SetTypeDefaultVersionOutput } from "../models/models_0";
import {
  deserializeAws_querySetTypeDefaultVersionCommand,
  serializeAws_querySetTypeDefaultVersionCommand,
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

export interface SetTypeDefaultVersionCommandInput extends SetTypeDefaultVersionInput {}
export interface SetTypeDefaultVersionCommandOutput extends SetTypeDefaultVersionOutput, __MetadataBearer {}

/**
 * <p>Specify the default version of an extension. The default version of an extension will be used in CloudFormation operations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, SetTypeDefaultVersionCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, SetTypeDefaultVersionCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new SetTypeDefaultVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetTypeDefaultVersionCommandInput} for command's `input` shape.
 * @see {@link SetTypeDefaultVersionCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class SetTypeDefaultVersionCommand extends $Command<
  SetTypeDefaultVersionCommandInput,
  SetTypeDefaultVersionCommandOutput,
  CloudFormationClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SetTypeDefaultVersionCommandInput) {
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
  ): Handler<SetTypeDefaultVersionCommandInput, SetTypeDefaultVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFormationClient";
    const commandName = "SetTypeDefaultVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SetTypeDefaultVersionInput.filterSensitiveLog,
      outputFilterSensitiveLog: SetTypeDefaultVersionOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SetTypeDefaultVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_querySetTypeDefaultVersionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SetTypeDefaultVersionCommandOutput> {
    return deserializeAws_querySetTypeDefaultVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
