// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ChimeSDKVoiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKVoiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  GetVoiceConnectorStreamingConfigurationRequest,
  GetVoiceConnectorStreamingConfigurationResponse,
} from "../models/models_0";
import { GetVoiceConnectorStreamingConfiguration } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetVoiceConnectorStreamingConfigurationCommand}.
 */
export interface GetVoiceConnectorStreamingConfigurationCommandInput
  extends GetVoiceConnectorStreamingConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetVoiceConnectorStreamingConfigurationCommand}.
 */
export interface GetVoiceConnectorStreamingConfigurationCommandOutput
  extends GetVoiceConnectorStreamingConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves the streaming configuration details for the specified Amazon Chime SDK
 *          Voice Connector. Shows whether media streaming is enabled for sending to Amazon
 *          Kinesis. It also shows the retention period, in hours, for the Amazon Kinesis data.</p>
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
 *
 * @public
 */
export class GetVoiceConnectorStreamingConfigurationCommand extends $Command
  .classBuilder<
    GetVoiceConnectorStreamingConfigurationCommandInput,
    GetVoiceConnectorStreamingConfigurationCommandOutput,
    ChimeSDKVoiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeSDKVoiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ChimeSDKTelephonyService", "GetVoiceConnectorStreamingConfiguration", {})
  .n("ChimeSDKVoiceClient", "GetVoiceConnectorStreamingConfigurationCommand")
  .sc(GetVoiceConnectorStreamingConfiguration)
  .build() {
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
