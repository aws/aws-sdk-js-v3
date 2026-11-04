// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  PutVoiceConnectorExternalSystemsConfigurationRequest,
  PutVoiceConnectorExternalSystemsConfigurationResponse,
} from "../models/models_0";
import { PutVoiceConnectorExternalSystemsConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutVoiceConnectorExternalSystemsConfigurationCommand}.
 */
export interface PutVoiceConnectorExternalSystemsConfigurationCommandInput extends PutVoiceConnectorExternalSystemsConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link PutVoiceConnectorExternalSystemsConfigurationCommand}.
 */
export interface PutVoiceConnectorExternalSystemsConfigurationCommandOutput extends PutVoiceConnectorExternalSystemsConfigurationResponse, __MetadataBearer {}

/**
 * Adds an external systems configuration to a Voice Connector.
 *
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
 *
 * The input parameters don't match the service's restrictions.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Multiple instances of the same request were made simultaneously.
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
export class PutVoiceConnectorExternalSystemsConfigurationCommand extends command<PutVoiceConnectorExternalSystemsConfigurationCommandInput, PutVoiceConnectorExternalSystemsConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "PutVoiceConnectorExternalSystemsConfiguration",
  PutVoiceConnectorExternalSystemsConfiguration$
) {
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
