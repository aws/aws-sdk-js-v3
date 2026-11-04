// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GetVoiceConnectorStreamingConfigurationRequest,
  GetVoiceConnectorStreamingConfigurationResponse,
} from "../models/models_0";
import { GetVoiceConnectorStreamingConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetVoiceConnectorStreamingConfigurationCommand}.
 */
export interface GetVoiceConnectorStreamingConfigurationCommandInput extends GetVoiceConnectorStreamingConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetVoiceConnectorStreamingConfigurationCommand}.
 */
export interface GetVoiceConnectorStreamingConfigurationCommandOutput extends GetVoiceConnectorStreamingConfigurationResponse, __MetadataBearer {}

/**
 * Retrieves the streaming configuration details for the specified Amazon Chime SDK Voice Connector. Shows whether media streaming is enabled for sending to Amazon Kinesis. It also shows the retention period, in hours, for the Amazon Kinesis data.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, GetVoiceConnectorStreamingConfigurationCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, GetVoiceConnectorStreamingConfigurationCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
 * // import type { ChimeSDKVoiceClientConfig } from "@aws-sdk/client-chime-sdk-voice";
 * const config = {}; // type is ChimeSDKVoiceClientConfig
 * const client = new ChimeSDKVoiceClient(config);
 * const input = { // GetVoiceConnectorStreamingConfigurationRequest
 *   VoiceConnectorId: "STRING_VALUE", // required
 * };
 * const command = new GetVoiceConnectorStreamingConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetVoiceConnectorStreamingConfigurationResponse
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
 * @param GetVoiceConnectorStreamingConfigurationCommandInput - {@link GetVoiceConnectorStreamingConfigurationCommandInput}
 * @returns {@link GetVoiceConnectorStreamingConfigurationCommandOutput}
 * @see {@link GetVoiceConnectorStreamingConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetVoiceConnectorStreamingConfigurationCommandOutput} for command's `response` shape.
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
export class GetVoiceConnectorStreamingConfigurationCommand extends command<GetVoiceConnectorStreamingConfigurationCommandInput, GetVoiceConnectorStreamingConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "GetVoiceConnectorStreamingConfiguration",
  GetVoiceConnectorStreamingConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetVoiceConnectorStreamingConfigurationRequest;
      output: GetVoiceConnectorStreamingConfigurationResponse;
    };
    sdk: {
      input: GetVoiceConnectorStreamingConfigurationCommandInput;
      output: GetVoiceConnectorStreamingConfigurationCommandOutput;
    };
  };
}
