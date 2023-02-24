// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import {
  RegisterWebhookWithThirdPartyInput,
  RegisterWebhookWithThirdPartyInputFilterSensitiveLog,
  RegisterWebhookWithThirdPartyOutput,
  RegisterWebhookWithThirdPartyOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1RegisterWebhookWithThirdPartyCommand,
  serializeAws_json1_1RegisterWebhookWithThirdPartyCommand,
} from "../protocols/Aws_json1_1";

export interface RegisterWebhookWithThirdPartyCommandInput extends RegisterWebhookWithThirdPartyInput {}
export interface RegisterWebhookWithThirdPartyCommandOutput
  extends RegisterWebhookWithThirdPartyOutput,
    __MetadataBearer {}

/**
 * <p>Configures a connection between the webhook that was created and the external tool
 *             with events to be detected.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, RegisterWebhookWithThirdPartyCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, RegisterWebhookWithThirdPartyCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const command = new RegisterWebhookWithThirdPartyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterWebhookWithThirdPartyCommandInput} for command's `input` shape.
 * @see {@link RegisterWebhookWithThirdPartyCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for CodePipelineClient's `config` shape.
 *
 */
export class RegisterWebhookWithThirdPartyCommand extends $Command<
  RegisterWebhookWithThirdPartyCommandInput,
  RegisterWebhookWithThirdPartyCommandOutput,
  CodePipelineClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  constructor(readonly input: RegisterWebhookWithThirdPartyCommandInput) {
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
  ): Handler<RegisterWebhookWithThirdPartyCommandInput, RegisterWebhookWithThirdPartyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RegisterWebhookWithThirdPartyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodePipelineClient";
    const commandName = "RegisterWebhookWithThirdPartyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RegisterWebhookWithThirdPartyInputFilterSensitiveLog,
      outputFilterSensitiveLog: RegisterWebhookWithThirdPartyOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RegisterWebhookWithThirdPartyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1RegisterWebhookWithThirdPartyCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RegisterWebhookWithThirdPartyCommandOutput> {
    return deserializeAws_json1_1RegisterWebhookWithThirdPartyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
