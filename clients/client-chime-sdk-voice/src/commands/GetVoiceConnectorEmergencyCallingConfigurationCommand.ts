// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChimeSDKVoiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKVoiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetVoiceConnectorEmergencyCallingConfigurationRequest,
  GetVoiceConnectorEmergencyCallingConfigurationResponse,
  GetVoiceConnectorEmergencyCallingConfigurationResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  de_GetVoiceConnectorEmergencyCallingConfigurationCommand,
  se_GetVoiceConnectorEmergencyCallingConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetVoiceConnectorEmergencyCallingConfigurationCommand}.
 */
export interface GetVoiceConnectorEmergencyCallingConfigurationCommandInput
  extends GetVoiceConnectorEmergencyCallingConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetVoiceConnectorEmergencyCallingConfigurationCommand}.
 */
export interface GetVoiceConnectorEmergencyCallingConfigurationCommandOutput
  extends GetVoiceConnectorEmergencyCallingConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves the emergency calling configuration details for the specified Voice Connector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, GetVoiceConnectorEmergencyCallingConfigurationCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, GetVoiceConnectorEmergencyCallingConfigurationCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
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
export class GetVoiceConnectorEmergencyCallingConfigurationCommand extends $Command
  .classBuilder<
    GetVoiceConnectorEmergencyCallingConfigurationCommandInput,
    GetVoiceConnectorEmergencyCallingConfigurationCommandOutput,
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
  .s("ChimeSDKTelephonyService", "GetVoiceConnectorEmergencyCallingConfiguration", {})
  .n("ChimeSDKVoiceClient", "GetVoiceConnectorEmergencyCallingConfigurationCommand")
  .f(void 0, GetVoiceConnectorEmergencyCallingConfigurationResponseFilterSensitiveLog)
  .ser(se_GetVoiceConnectorEmergencyCallingConfigurationCommand)
  .de(de_GetVoiceConnectorEmergencyCallingConfigurationCommand)
  .build() {}
