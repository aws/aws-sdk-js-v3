// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { ChimeSDKVoiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKVoiceClient";
import {
  PutVoiceConnectorStreamingConfigurationRequest,
  PutVoiceConnectorStreamingConfigurationRequestFilterSensitiveLog,
  PutVoiceConnectorStreamingConfigurationResponse,
  PutVoiceConnectorStreamingConfigurationResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  de_PutVoiceConnectorStreamingConfigurationCommand,
  se_PutVoiceConnectorStreamingConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutVoiceConnectorStreamingConfigurationCommand}.
 */
export interface PutVoiceConnectorStreamingConfigurationCommandInput
  extends PutVoiceConnectorStreamingConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link PutVoiceConnectorStreamingConfigurationCommand}.
 */
export interface PutVoiceConnectorStreamingConfigurationCommandOutput
  extends PutVoiceConnectorStreamingConfigurationResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Updates a Voice Connector's streaming configuration settings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, PutVoiceConnectorStreamingConfigurationCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, PutVoiceConnectorStreamingConfigurationCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
 * const client = new ChimeSDKVoiceClient(config);
 * const input = { // PutVoiceConnectorStreamingConfigurationRequest
 *   VoiceConnectorId: "STRING_VALUE", // required
 *   StreamingConfiguration: { // StreamingConfiguration
 *     DataRetentionInHours: Number("int"), // required
 *     Disabled: true || false, // required
 *     StreamingNotificationTargets: [ // StreamingNotificationTargetList
 *       { // StreamingNotificationTarget
 *         NotificationTarget: "EventBridge" || "SNS" || "SQS",
 *       },
 *     ],
 *     MediaInsightsConfiguration: { // MediaInsightsConfiguration
 *       Disabled: true || false,
 *       ConfigurationArn: "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new PutVoiceConnectorStreamingConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // PutVoiceConnectorStreamingConfigurationResponse
 * //   StreamingConfiguration: { // StreamingConfiguration
 * //     DataRetentionInHours: Number("int"), // required
 * //     Disabled: true || false, // required
 * //     StreamingNotificationTargets: [ // StreamingNotificationTargetList
 * //       { // StreamingNotificationTarget
 * //         NotificationTarget: "EventBridge" || "SNS" || "SQS",
 * //       },
 * //     ],
 * //     MediaInsightsConfiguration: { // MediaInsightsConfiguration
 * //       Disabled: true || false,
 * //       ConfigurationArn: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param PutVoiceConnectorStreamingConfigurationCommandInput - {@link PutVoiceConnectorStreamingConfigurationCommandInput}
 * @returns {@link PutVoiceConnectorStreamingConfigurationCommandOutput}
 * @see {@link PutVoiceConnectorStreamingConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutVoiceConnectorStreamingConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKVoiceClientResolvedConfig | config} for ChimeSDKVoiceClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The requested resource couldn't be found.</p>
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
 * @throws {@link ChimeSDKVoiceServiceException}
 * <p>Base exception class for all service exceptions from ChimeSDKVoice service.</p>
 *
 */
export class PutVoiceConnectorStreamingConfigurationCommand extends $Command<
  PutVoiceConnectorStreamingConfigurationCommandInput,
  PutVoiceConnectorStreamingConfigurationCommandOutput,
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
  constructor(readonly input: PutVoiceConnectorStreamingConfigurationCommandInput) {
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
  ): Handler<
    PutVoiceConnectorStreamingConfigurationCommandInput,
    PutVoiceConnectorStreamingConfigurationCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        PutVoiceConnectorStreamingConfigurationCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeSDKVoiceClient";
    const commandName = "PutVoiceConnectorStreamingConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutVoiceConnectorStreamingConfigurationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: PutVoiceConnectorStreamingConfigurationResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "ChimeSDKTelephonyService",
        operation: "PutVoiceConnectorStreamingConfiguration",
      },
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
  private serialize(
    input: PutVoiceConnectorStreamingConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_PutVoiceConnectorStreamingConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutVoiceConnectorStreamingConfigurationCommandOutput> {
    return de_PutVoiceConnectorStreamingConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
