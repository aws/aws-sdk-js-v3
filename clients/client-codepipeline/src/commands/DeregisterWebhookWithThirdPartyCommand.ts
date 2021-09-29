import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { DeregisterWebhookWithThirdPartyInput, DeregisterWebhookWithThirdPartyOutput } from "../models/models_0";
import {
  deserializeAws_json1_1DeregisterWebhookWithThirdPartyCommand,
  serializeAws_json1_1DeregisterWebhookWithThirdPartyCommand,
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

export interface DeregisterWebhookWithThirdPartyCommandInput extends DeregisterWebhookWithThirdPartyInput {}
export interface DeregisterWebhookWithThirdPartyCommandOutput
  extends DeregisterWebhookWithThirdPartyOutput,
    __MetadataBearer {}

/**
 * <p>Removes the connection between the webhook that was created by CodePipeline and the
 *             external tool with events to be detected. Currently supported only for webhooks that
 *             target an action type of GitHub.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, DeregisterWebhookWithThirdPartyCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, DeregisterWebhookWithThirdPartyCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const command = new DeregisterWebhookWithThirdPartyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeregisterWebhookWithThirdPartyCommandInput} for command's `input` shape.
 * @see {@link DeregisterWebhookWithThirdPartyCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeregisterWebhookWithThirdPartyCommand extends $Command<
  DeregisterWebhookWithThirdPartyCommandInput,
  DeregisterWebhookWithThirdPartyCommandOutput,
  CodePipelineClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeregisterWebhookWithThirdPartyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodePipelineClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeregisterWebhookWithThirdPartyCommandInput, DeregisterWebhookWithThirdPartyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodePipelineClient";
    const commandName = "DeregisterWebhookWithThirdPartyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeregisterWebhookWithThirdPartyInput.filterSensitiveLog,
      outputFilterSensitiveLog: DeregisterWebhookWithThirdPartyOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeregisterWebhookWithThirdPartyCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DeregisterWebhookWithThirdPartyCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeregisterWebhookWithThirdPartyCommandOutput> {
    return deserializeAws_json1_1DeregisterWebhookWithThirdPartyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
