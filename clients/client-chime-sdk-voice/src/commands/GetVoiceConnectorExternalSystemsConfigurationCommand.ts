// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ChimeSDKVoiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKVoiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  GetVoiceConnectorExternalSystemsConfigurationRequest,
  GetVoiceConnectorExternalSystemsConfigurationResponse,
} from "../models/models_0";
import { GetVoiceConnectorExternalSystemsConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetVoiceConnectorExternalSystemsConfigurationCommand}.
 */
export interface GetVoiceConnectorExternalSystemsConfigurationCommandInput extends GetVoiceConnectorExternalSystemsConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetVoiceConnectorExternalSystemsConfigurationCommand}.
 */
export interface GetVoiceConnectorExternalSystemsConfigurationCommandOutput extends GetVoiceConnectorExternalSystemsConfigurationResponse, __MetadataBearer {}

/**
 * <p>Gets information about an external systems configuration for a Voice
 *          Connector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, GetVoiceConnectorExternalSystemsConfigurationCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, GetVoiceConnectorExternalSystemsConfigurationCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
 * // import type { ChimeSDKVoiceClientConfig } from "@aws-sdk/client-chime-sdk-voice";
 * const config = {}; // type is ChimeSDKVoiceClientConfig
 * const client = new ChimeSDKVoiceClient(config);
 * const input = { // GetVoiceConnectorExternalSystemsConfigurationRequest
 *   VoiceConnectorId: "STRING_VALUE", // required
 * };
 * const command = new GetVoiceConnectorExternalSystemsConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetVoiceConnectorExternalSystemsConfigurationResponse
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
 * @param GetVoiceConnectorExternalSystemsConfigurationCommandInput - {@link GetVoiceConnectorExternalSystemsConfigurationCommandInput}
 * @returns {@link GetVoiceConnectorExternalSystemsConfigurationCommandOutput}
 * @see {@link GetVoiceConnectorExternalSystemsConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetVoiceConnectorExternalSystemsConfigurationCommandOutput} for command's `response` shape.
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
export class GetVoiceConnectorExternalSystemsConfigurationCommand extends $Command
  .classBuilder<
    GetVoiceConnectorExternalSystemsConfigurationCommandInput,
    GetVoiceConnectorExternalSystemsConfigurationCommandOutput,
    ChimeSDKVoiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeSDKVoiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ChimeSDKTelephonyService", "GetVoiceConnectorExternalSystemsConfiguration", {})
  .n("ChimeSDKVoiceClient", "GetVoiceConnectorExternalSystemsConfigurationCommand")
  .sc(GetVoiceConnectorExternalSystemsConfiguration$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetVoiceConnectorExternalSystemsConfigurationRequest;
      output: GetVoiceConnectorExternalSystemsConfigurationResponse;
    };
    sdk: {
      input: GetVoiceConnectorExternalSystemsConfigurationCommandInput;
      output: GetVoiceConnectorExternalSystemsConfigurationCommandOutput;
    };
  };
}
