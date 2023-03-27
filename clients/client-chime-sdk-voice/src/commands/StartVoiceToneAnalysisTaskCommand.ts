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

import { ChimeSDKVoiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKVoiceClient";
import { StartVoiceToneAnalysisTaskRequest, StartVoiceToneAnalysisTaskResponse } from "../models/models_0";
import {
  deserializeAws_restJson1StartVoiceToneAnalysisTaskCommand,
  serializeAws_restJson1StartVoiceToneAnalysisTaskCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link StartVoiceToneAnalysisTaskCommand}.
 */
export interface StartVoiceToneAnalysisTaskCommandInput extends StartVoiceToneAnalysisTaskRequest {}
/**
 * @public
 *
 * The output of {@link StartVoiceToneAnalysisTaskCommand}.
 */
export interface StartVoiceToneAnalysisTaskCommandOutput extends StartVoiceToneAnalysisTaskResponse, __MetadataBearer {}

/**
 * @public
 * <p>Starts a voice tone analysis task. For more information about voice tone analysis, see
 *          <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/pstn-voice-analytics.html">Using Amazon Chime SDK voice analytics</a>
 *          in the <i>Amazon Chime SDK Developer Guide</i>.</p>
 *          <important>
 *             <p>Before starting any voice tone analysis tasks, you must provide all notices and obtain all consents from the speaker as required under applicable privacy and biometrics laws, and as required under the
 *          <a href="https://aws.amazon.com/service-terms/">AWS service terms</a> for the Amazon Chime SDK.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, StartVoiceToneAnalysisTaskCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, StartVoiceToneAnalysisTaskCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
 * const client = new ChimeSDKVoiceClient(config);
 * const input = { // StartVoiceToneAnalysisTaskRequest
 *   VoiceConnectorId: "STRING_VALUE", // required
 *   TransactionId: "STRING_VALUE", // required
 *   LanguageCode: "en-US", // required
 *   ClientRequestToken: "STRING_VALUE",
 * };
 * const command = new StartVoiceToneAnalysisTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param StartVoiceToneAnalysisTaskCommandInput - {@link StartVoiceToneAnalysisTaskCommandInput}
 * @returns {@link StartVoiceToneAnalysisTaskCommandOutput}
 * @see {@link StartVoiceToneAnalysisTaskCommandInput} for command's `input` shape.
 * @see {@link StartVoiceToneAnalysisTaskCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKVoiceClientResolvedConfig | config} for ChimeSDKVoiceClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have the permissions needed to run this action.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Multiple instances of the same request were made simultaneously.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link GoneException} (client fault)
 *  <p>Access to the target resource is no longer available at the origin server. This condition is likely to be permanent.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The requested resource couldn't be found.</p>
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *  <p>The request exceeds the resource limit.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The service encountered an unexpected error.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ThrottledClientException} (client fault)
 *  <p>The number of customer requests exceeds the request rate limit.</p>
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *  <p>The client isn't authorized to request a resource.</p>
 *
 * @throws {@link UnprocessableEntityException} (client fault)
 *  <p>A well-formed request couldn't be followed due to semantic errors.</p>
 *
 *
 */
export class StartVoiceToneAnalysisTaskCommand extends $Command<
  StartVoiceToneAnalysisTaskCommandInput,
  StartVoiceToneAnalysisTaskCommandOutput,
  ChimeSDKVoiceClientResolvedConfig
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

  /**
   * @public
   */
  constructor(readonly input: StartVoiceToneAnalysisTaskCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeSDKVoiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartVoiceToneAnalysisTaskCommandInput, StartVoiceToneAnalysisTaskCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartVoiceToneAnalysisTaskCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeSDKVoiceClient";
    const commandName = "StartVoiceToneAnalysisTaskCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: StartVoiceToneAnalysisTaskCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1StartVoiceToneAnalysisTaskCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StartVoiceToneAnalysisTaskCommandOutput> {
    return deserializeAws_restJson1StartVoiceToneAnalysisTaskCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
