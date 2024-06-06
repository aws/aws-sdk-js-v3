// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  PutVoiceConnectorEmergencyCallingConfigurationRequest,
  PutVoiceConnectorEmergencyCallingConfigurationRequestFilterSensitiveLog,
  PutVoiceConnectorEmergencyCallingConfigurationResponse,
  PutVoiceConnectorEmergencyCallingConfigurationResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  de_PutVoiceConnectorEmergencyCallingConfigurationCommand,
  se_PutVoiceConnectorEmergencyCallingConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutVoiceConnectorEmergencyCallingConfigurationCommand}.
 */
export interface PutVoiceConnectorEmergencyCallingConfigurationCommandInput
  extends PutVoiceConnectorEmergencyCallingConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link PutVoiceConnectorEmergencyCallingConfigurationCommand}.
 */
export interface PutVoiceConnectorEmergencyCallingConfigurationCommandOutput
  extends PutVoiceConnectorEmergencyCallingConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Puts emergency calling configuration details to the specified Amazon Chime Voice Connector, such as emergency phone numbers and calling countries. Origination and termination settings must be enabled for
 *     the Amazon Chime Voice Connector before emergency calling can be configured.</p>
 *          <important>
 *             <p>
 *                <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_PutVoiceConnectorEmergencyCallingConfiguration.html">PutVoiceConnectorEmergencyCallingConfiguration</a>, in the Amazon Chime SDK.</p>
 *             <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to
 *             <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the
 *             <i>Amazon Chime SDK Developer Guide</i>.</p>
 *          </important>
 *
 * @deprecated Replaced by PutVoiceConnectorEmergencyCallingConfiguration in the Amazon Chime SDK Voice Namespace
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, PutVoiceConnectorEmergencyCallingConfigurationCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, PutVoiceConnectorEmergencyCallingConfigurationCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const input = { // PutVoiceConnectorEmergencyCallingConfigurationRequest
 *   VoiceConnectorId: "STRING_VALUE", // required
 *   EmergencyCallingConfiguration: { // EmergencyCallingConfiguration
 *     DNIS: [ // DNISEmergencyCallingConfigurationList
 *       { // DNISEmergencyCallingConfiguration
 *         EmergencyPhoneNumber: "STRING_VALUE", // required
 *         TestPhoneNumber: "STRING_VALUE",
 *         CallingCountry: "STRING_VALUE", // required
 *       },
 *     ],
 *   },
 * };
 * const command = new PutVoiceConnectorEmergencyCallingConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // PutVoiceConnectorEmergencyCallingConfigurationResponse
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
 * @param PutVoiceConnectorEmergencyCallingConfigurationCommandInput - {@link PutVoiceConnectorEmergencyCallingConfigurationCommandInput}
 * @returns {@link PutVoiceConnectorEmergencyCallingConfigurationCommandOutput}
 * @see {@link PutVoiceConnectorEmergencyCallingConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutVoiceConnectorEmergencyCallingConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>One or more of the resources in the request does not exist in the system.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The service encountered an unexpected error.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ThrottledClientException} (client fault)
 *  <p>The client exceeded its request rate limit.</p>
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *  <p>The client is not currently authorized to make the request.</p>
 *
 * @throws {@link ChimeServiceException}
 * <p>Base exception class for all service exceptions from Chime service.</p>
 *
 * @public
 */
export class PutVoiceConnectorEmergencyCallingConfigurationCommand extends $Command
  .classBuilder<
    PutVoiceConnectorEmergencyCallingConfigurationCommandInput,
    PutVoiceConnectorEmergencyCallingConfigurationCommandOutput,
    ChimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ChimeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("UCBuzzConsoleService", "PutVoiceConnectorEmergencyCallingConfiguration", {})
  .n("ChimeClient", "PutVoiceConnectorEmergencyCallingConfigurationCommand")
  .f(
    PutVoiceConnectorEmergencyCallingConfigurationRequestFilterSensitiveLog,
    PutVoiceConnectorEmergencyCallingConfigurationResponseFilterSensitiveLog
  )
  .ser(se_PutVoiceConnectorEmergencyCallingConfigurationCommand)
  .de(de_PutVoiceConnectorEmergencyCallingConfigurationCommand)
  .build() {}
