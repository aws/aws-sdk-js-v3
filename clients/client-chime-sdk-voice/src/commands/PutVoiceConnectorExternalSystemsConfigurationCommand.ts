// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChimeSDKVoiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKVoiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  PutVoiceConnectorExternalSystemsConfigurationRequest,
  PutVoiceConnectorExternalSystemsConfigurationResponse,
} from "../models/models_0";
import {
  de_PutVoiceConnectorExternalSystemsConfigurationCommand,
  se_PutVoiceConnectorExternalSystemsConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutVoiceConnectorExternalSystemsConfigurationCommand}.
 */
export interface PutVoiceConnectorExternalSystemsConfigurationCommandInput
  extends PutVoiceConnectorExternalSystemsConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link PutVoiceConnectorExternalSystemsConfigurationCommand}.
 */
export interface PutVoiceConnectorExternalSystemsConfigurationCommandOutput
  extends PutVoiceConnectorExternalSystemsConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Adds an external systems configuration to a Voice Connector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, PutVoiceConnectorExternalSystemsConfigurationCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, PutVoiceConnectorExternalSystemsConfigurationCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
 * // import type { ChimeSDKVoiceClientConfig } from "@aws-sdk/client-chime-sdk-voice";
 * const config = {}; // type is ChimeSDKVoiceClientConfig
 * const client = new ChimeSDKVoiceClient(config);
 * const input = { // PutVoiceConnectorExternalSystemsConfigurationRequest
 *   VoiceConnectorId: "STRING_VALUE", // required
 *   SessionBorderControllerTypes: [ // SessionBorderControllerTypeList
 *     "RIBBON_SBC" || "ORACLE_ACME_PACKET_SBC" || "AVAYA_SBCE" || "CISCO_UNIFIED_BORDER_ELEMENT" || "AUDIOCODES_MEDIANT_SBC",
 *   ],
 *   ContactCenterSystemTypes: [ // ContactCenterSystemTypeList
 *     "GENESYS_ENGAGE_ON_PREMISES" || "AVAYA_AURA_CALL_CENTER_ELITE" || "AVAYA_AURA_CONTACT_CENTER" || "CISCO_UNIFIED_CONTACT_CENTER_ENTERPRISE",
 *   ],
 * };
 * const command = new PutVoiceConnectorExternalSystemsConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // PutVoiceConnectorExternalSystemsConfigurationResponse
 * //   ExternalSystemsConfiguration: { // ExternalSystemsConfiguration
 * //     SessionBorderControllerTypes: [ // SessionBorderControllerTypeList
 * //       "RIBBON_SBC" || "ORACLE_ACME_PACKET_SBC" || "AVAYA_SBCE" || "CISCO_UNIFIED_BORDER_ELEMENT" || "AUDIOCODES_MEDIANT_SBC",
 * //     ],
 * //     ContactCenterSystemTypes: [ // ContactCenterSystemTypeList
 * //       "GENESYS_ENGAGE_ON_PREMISES" || "AVAYA_AURA_CALL_CENTER_ELITE" || "AVAYA_AURA_CONTACT_CENTER" || "CISCO_UNIFIED_CONTACT_CENTER_ENTERPRISE",
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param PutVoiceConnectorExternalSystemsConfigurationCommandInput - {@link PutVoiceConnectorExternalSystemsConfigurationCommandInput}
 * @returns {@link PutVoiceConnectorExternalSystemsConfigurationCommandOutput}
 * @see {@link PutVoiceConnectorExternalSystemsConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutVoiceConnectorExternalSystemsConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKVoiceClientResolvedConfig | config} for ChimeSDKVoiceClient's `config` shape.
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
export class PutVoiceConnectorExternalSystemsConfigurationCommand extends $Command
  .classBuilder<
    PutVoiceConnectorExternalSystemsConfigurationCommandInput,
    PutVoiceConnectorExternalSystemsConfigurationCommandOutput,
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
  .s("ChimeSDKTelephonyService", "PutVoiceConnectorExternalSystemsConfiguration", {})
  .n("ChimeSDKVoiceClient", "PutVoiceConnectorExternalSystemsConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_PutVoiceConnectorExternalSystemsConfigurationCommand)
  .de(de_PutVoiceConnectorExternalSystemsConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutVoiceConnectorExternalSystemsConfigurationRequest;
      output: PutVoiceConnectorExternalSystemsConfigurationResponse;
    };
    sdk: {
      input: PutVoiceConnectorExternalSystemsConfigurationCommandInput;
      output: PutVoiceConnectorExternalSystemsConfigurationCommandOutput;
    };
  };
}
