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
  DeregisterWebhookWithThirdPartyInput,
  DeregisterWebhookWithThirdPartyInputFilterSensitiveLog,
  DeregisterWebhookWithThirdPartyOutput,
  DeregisterWebhookWithThirdPartyOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DeregisterWebhookWithThirdPartyCommand,
  serializeAws_json1_1DeregisterWebhookWithThirdPartyCommand,
} from "../protocols/Aws_json1_1";

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
 * @see {@link CodePipelineClientResolvedConfig | config} for CodePipelineClient's `config` shape.
 *
 */
export class DeregisterWebhookWithThirdPartyCommand extends $Command<
  DeregisterWebhookWithThirdPartyCommandInput,
  DeregisterWebhookWithThirdPartyCommandOutput,
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeregisterWebhookWithThirdPartyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodePipelineClient";
    const commandName = "DeregisterWebhookWithThirdPartyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeregisterWebhookWithThirdPartyInputFilterSensitiveLog,
      outputFilterSensitiveLog: DeregisterWebhookWithThirdPartyOutputFilterSensitiveLog,
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
