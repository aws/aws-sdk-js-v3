// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GetVoiceConnectorExternalSystemsConfigurationRequest,
  GetVoiceConnectorExternalSystemsConfigurationResponse,
} from "../models/models_0";
import { GetVoiceConnectorExternalSystemsConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Gets information about an external systems configuration for a Voice Connector.
 *
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
export class GetVoiceConnectorExternalSystemsConfigurationCommand extends command<GetVoiceConnectorExternalSystemsConfigurationCommandInput, GetVoiceConnectorExternalSystemsConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "GetVoiceConnectorExternalSystemsConfiguration",
  GetVoiceConnectorExternalSystemsConfiguration$
) {
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
