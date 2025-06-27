// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChimeSDKVoiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKVoiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
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
export type { __MetadataBearer };
export { $Command };
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
 *
 * @public
 */
export class PutVoiceConnectorStreamingConfigurationCommand extends $Command
  .classBuilder<
    PutVoiceConnectorStreamingConfigurationCommandInput,
    PutVoiceConnectorStreamingConfigurationCommandOutput,
    ChimeSDKVoiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeSDKVoiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ChimeSDKTelephonyService", "PutVoiceConnectorStreamingConfiguration", {})
  .n("ChimeSDKVoiceClient", "PutVoiceConnectorStreamingConfigurationCommand")
  .f(
    PutVoiceConnectorStreamingConfigurationRequestFilterSensitiveLog,
    PutVoiceConnectorStreamingConfigurationResponseFilterSensitiveLog
  )
  .ser(se_PutVoiceConnectorStreamingConfigurationCommand)
  .de(de_PutVoiceConnectorStreamingConfigurationCommand)
  .build() {
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
