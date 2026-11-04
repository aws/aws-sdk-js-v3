// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  PutVoiceConnectorStreamingConfigurationRequest,
  PutVoiceConnectorStreamingConfigurationResponse,
} from "../models/models_0";
import { PutVoiceConnectorStreamingConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutVoiceConnectorStreamingConfigurationCommand}.
 */
export interface PutVoiceConnectorStreamingConfigurationCommandInput extends PutVoiceConnectorStreamingConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link PutVoiceConnectorStreamingConfigurationCommand}.
 */
export interface PutVoiceConnectorStreamingConfigurationCommandOutput extends PutVoiceConnectorStreamingConfigurationResponse, __MetadataBearer {}

/**
 * Updates a Voice Connector's streaming configuration settings.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, PutVoiceConnectorStreamingConfigurationCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, PutVoiceConnectorStreamingConfigurationCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
 * // import type { ChimeSDKVoiceClientConfig } from "@aws-sdk/client-chime-sdk-voice";
 * const config = {}; // type is ChimeSDKVoiceClientConfig
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
 *
 * The input parameters don't match the service's restrictions.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * The client is permanently forbidden from making the request.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * The requested resource couldn't be found.
 *
 * @throws {@link ServiceFailureException} (server fault)
 *
 * The service encountered an unexpected error.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service is currently unavailable.
 *
 * @throws {@link ThrottledClientException} (client fault)
 *
 * The number of customer requests exceeds the request rate limit.
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *
 * The client isn't authorized to request a resource.
 *
 * @throws {@link ChimeSDKVoiceServiceException}
 *
 * Base exception class for all service exceptions from ChimeSDKVoice service.
 *
 * @public
 */
export class PutVoiceConnectorStreamingConfigurationCommand extends command<PutVoiceConnectorStreamingConfigurationCommandInput, PutVoiceConnectorStreamingConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "PutVoiceConnectorStreamingConfiguration",
  PutVoiceConnectorStreamingConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutVoiceConnectorStreamingConfigurationRequest;
      output: PutVoiceConnectorStreamingConfigurationResponse;
    };
    sdk: {
      input: PutVoiceConnectorStreamingConfigurationCommandInput;
      output: PutVoiceConnectorStreamingConfigurationCommandOutput;
    };
  };
}
