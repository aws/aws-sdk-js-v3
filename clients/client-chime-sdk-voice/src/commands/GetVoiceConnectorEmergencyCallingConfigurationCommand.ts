// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GetVoiceConnectorEmergencyCallingConfigurationRequest,
  GetVoiceConnectorEmergencyCallingConfigurationResponse,
} from "../models/models_0";
import { GetVoiceConnectorEmergencyCallingConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetVoiceConnectorEmergencyCallingConfigurationCommand}.
 */
export interface GetVoiceConnectorEmergencyCallingConfigurationCommandInput extends GetVoiceConnectorEmergencyCallingConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetVoiceConnectorEmergencyCallingConfigurationCommand}.
 */
export interface GetVoiceConnectorEmergencyCallingConfigurationCommandOutput extends GetVoiceConnectorEmergencyCallingConfigurationResponse, __MetadataBearer {}

/**
 * Retrieves the emergency calling configuration details for the specified Voice Connector.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, GetVoiceConnectorEmergencyCallingConfigurationCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, GetVoiceConnectorEmergencyCallingConfigurationCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
 * // import type { ChimeSDKVoiceClientConfig } from "@aws-sdk/client-chime-sdk-voice";
 * const config = {}; // type is ChimeSDKVoiceClientConfig
 * const client = new ChimeSDKVoiceClient(config);
 * const input = { // GetVoiceConnectorEmergencyCallingConfigurationRequest
 *   VoiceConnectorId: "STRING_VALUE", // required
 * };
 * const command = new GetVoiceConnectorEmergencyCallingConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetVoiceConnectorEmergencyCallingConfigurationResponse
 * //   EmergencyCallingConfiguration: { // EmergencyCallingConfiguration
 * //     DNIS: [ // DNISEmergencyCallingConfigurationList
 * //       { // DNISEmergencyCallingConfiguration
 * //         EmergencyPhoneNumber: "STRING_VALUE", // required
 * //         TestPhoneNumber: "STRING_VALUE",
 * //         CallingCountry: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetVoiceConnectorEmergencyCallingConfigurationCommandInput - {@link GetVoiceConnectorEmergencyCallingConfigurationCommandInput}
 * @returns {@link GetVoiceConnectorEmergencyCallingConfigurationCommandOutput}
 * @see {@link GetVoiceConnectorEmergencyCallingConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetVoiceConnectorEmergencyCallingConfigurationCommandOutput} for command's `response` shape.
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
export class GetVoiceConnectorEmergencyCallingConfigurationCommand extends command<GetVoiceConnectorEmergencyCallingConfigurationCommandInput, GetVoiceConnectorEmergencyCallingConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "GetVoiceConnectorEmergencyCallingConfiguration",
  GetVoiceConnectorEmergencyCallingConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetVoiceConnectorEmergencyCallingConfigurationRequest;
      output: GetVoiceConnectorEmergencyCallingConfigurationResponse;
    };
    sdk: {
      input: GetVoiceConnectorEmergencyCallingConfigurationCommandInput;
      output: GetVoiceConnectorEmergencyCallingConfigurationCommandOutput;
    };
  };
}
