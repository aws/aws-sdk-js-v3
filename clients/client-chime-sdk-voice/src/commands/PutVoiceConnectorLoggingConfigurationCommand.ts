// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChimeSDKVoiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKVoiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  PutVoiceConnectorLoggingConfigurationRequest,
  PutVoiceConnectorLoggingConfigurationResponse,
} from "../models/models_0";
import {
  de_PutVoiceConnectorLoggingConfigurationCommand,
  se_PutVoiceConnectorLoggingConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutVoiceConnectorLoggingConfigurationCommand}.
 */
export interface PutVoiceConnectorLoggingConfigurationCommandInput
  extends PutVoiceConnectorLoggingConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link PutVoiceConnectorLoggingConfigurationCommand}.
 */
export interface PutVoiceConnectorLoggingConfigurationCommandOutput
  extends PutVoiceConnectorLoggingConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Updates a Voice Connector's logging configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, PutVoiceConnectorLoggingConfigurationCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, PutVoiceConnectorLoggingConfigurationCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
 * const client = new ChimeSDKVoiceClient(config);
 * const input = { // PutVoiceConnectorLoggingConfigurationRequest
 *   VoiceConnectorId: "STRING_VALUE", // required
 *   LoggingConfiguration: { // LoggingConfiguration
 *     EnableSIPLogs: true || false,
 *     EnableMediaMetricLogs: true || false,
 *   },
 * };
 * const command = new PutVoiceConnectorLoggingConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // PutVoiceConnectorLoggingConfigurationResponse
 * //   LoggingConfiguration: { // LoggingConfiguration
 * //     EnableSIPLogs: true || false,
 * //     EnableMediaMetricLogs: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param PutVoiceConnectorLoggingConfigurationCommandInput - {@link PutVoiceConnectorLoggingConfigurationCommandInput}
 * @returns {@link PutVoiceConnectorLoggingConfigurationCommandOutput}
 * @see {@link PutVoiceConnectorLoggingConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutVoiceConnectorLoggingConfigurationCommandOutput} for command's `response` shape.
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
 * @public
 */
export class PutVoiceConnectorLoggingConfigurationCommand extends $Command
  .classBuilder<
    PutVoiceConnectorLoggingConfigurationCommandInput,
    PutVoiceConnectorLoggingConfigurationCommandOutput,
    ChimeSDKVoiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ChimeSDKVoiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ChimeSDKTelephonyService", "PutVoiceConnectorLoggingConfiguration", {})
  .n("ChimeSDKVoiceClient", "PutVoiceConnectorLoggingConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_PutVoiceConnectorLoggingConfigurationCommand)
  .de(de_PutVoiceConnectorLoggingConfigurationCommand)
  .build() {}
