// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChimeSDKVoiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKVoiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  UpdateProxySessionRequest,
  UpdateProxySessionResponse,
  UpdateProxySessionResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_UpdateProxySessionCommand, se_UpdateProxySessionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateProxySessionCommand}.
 */
export interface UpdateProxySessionCommandInput extends UpdateProxySessionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateProxySessionCommand}.
 */
export interface UpdateProxySessionCommandOutput extends UpdateProxySessionResponse, __MetadataBearer {}

/**
 * <p>Updates the specified proxy session details, such as voice or SMS capabilities.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, UpdateProxySessionCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, UpdateProxySessionCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
 * const client = new ChimeSDKVoiceClient(config);
 * const input = { // UpdateProxySessionRequest
 *   VoiceConnectorId: "STRING_VALUE", // required
 *   ProxySessionId: "STRING_VALUE", // required
 *   Capabilities: [ // CapabilityList // required
 *     "Voice" || "SMS",
 *   ],
 *   ExpiryMinutes: Number("int"),
 * };
 * const command = new UpdateProxySessionCommand(input);
 * const response = await client.send(command);
 * // { // UpdateProxySessionResponse
 * //   ProxySession: { // ProxySession
 * //     VoiceConnectorId: "STRING_VALUE",
 * //     ProxySessionId: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Status: "Open" || "InProgress" || "Closed",
 * //     ExpiryMinutes: Number("int"),
 * //     Capabilities: [ // CapabilityList
 * //       "Voice" || "SMS",
 * //     ],
 * //     CreatedTimestamp: new Date("TIMESTAMP"),
 * //     UpdatedTimestamp: new Date("TIMESTAMP"),
 * //     EndedTimestamp: new Date("TIMESTAMP"),
 * //     Participants: [ // Participants
 * //       { // Participant
 * //         PhoneNumber: "STRING_VALUE",
 * //         ProxyPhoneNumber: "STRING_VALUE",
 * //       },
 * //     ],
 * //     NumberSelectionBehavior: "PreferSticky" || "AvoidSticky",
 * //     GeoMatchLevel: "Country" || "AreaCode",
 * //     GeoMatchParams: { // GeoMatchParams
 * //       Country: "STRING_VALUE", // required
 * //       AreaCode: "STRING_VALUE", // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateProxySessionCommandInput - {@link UpdateProxySessionCommandInput}
 * @returns {@link UpdateProxySessionCommandOutput}
 * @see {@link UpdateProxySessionCommandInput} for command's `input` shape.
 * @see {@link UpdateProxySessionCommandOutput} for command's `response` shape.
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
export class UpdateProxySessionCommand extends $Command
  .classBuilder<
    UpdateProxySessionCommandInput,
    UpdateProxySessionCommandOutput,
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
  .s("ChimeSDKTelephonyService", "UpdateProxySession", {})
  .n("ChimeSDKVoiceClient", "UpdateProxySessionCommand")
  .f(void 0, UpdateProxySessionResponseFilterSensitiveLog)
  .ser(se_UpdateProxySessionCommand)
  .de(de_UpdateProxySessionCommand)
  .build() {}
