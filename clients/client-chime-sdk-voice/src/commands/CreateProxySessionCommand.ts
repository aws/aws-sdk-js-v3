// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChimeSDKVoiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKVoiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateProxySessionRequest, CreateProxySessionResponse } from "../models/models_0";
import { CreateProxySession } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateProxySessionCommand}.
 */
export interface CreateProxySessionCommandInput extends CreateProxySessionRequest {}
/**
 * @public
 *
 * The output of {@link CreateProxySessionCommand}.
 */
export interface CreateProxySessionCommandOutput extends CreateProxySessionResponse, __MetadataBearer {}

/**
 * <p>Creates a proxy session for the specified Amazon Chime SDK Voice Connector for
 *             the specified participant phone numbers.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, CreateProxySessionCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, CreateProxySessionCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
 * // import type { ChimeSDKVoiceClientConfig } from "@aws-sdk/client-chime-sdk-voice";
 * const config = {}; // type is ChimeSDKVoiceClientConfig
 * const client = new ChimeSDKVoiceClient(config);
 * const input = { // CreateProxySessionRequest
 *   VoiceConnectorId: "STRING_VALUE", // required
 *   ParticipantPhoneNumbers: [ // ParticipantPhoneNumberList // required
 *     "STRING_VALUE",
 *   ],
 *   Name: "STRING_VALUE",
 *   ExpiryMinutes: Number("int"),
 *   Capabilities: [ // CapabilityList // required
 *     "Voice" || "SMS",
 *   ],
 *   NumberSelectionBehavior: "PreferSticky" || "AvoidSticky",
 *   GeoMatchLevel: "Country" || "AreaCode",
 *   GeoMatchParams: { // GeoMatchParams
 *     Country: "STRING_VALUE", // required
 *     AreaCode: "STRING_VALUE", // required
 *   },
 * };
 * const command = new CreateProxySessionCommand(input);
 * const response = await client.send(command);
 * // { // CreateProxySessionResponse
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
 * @param CreateProxySessionCommandInput - {@link CreateProxySessionCommandInput}
 * @returns {@link CreateProxySessionCommandOutput}
 * @see {@link CreateProxySessionCommandInput} for command's `input` shape.
 * @see {@link CreateProxySessionCommandOutput} for command's `response` shape.
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
export class CreateProxySessionCommand extends $Command
  .classBuilder<
    CreateProxySessionCommandInput,
    CreateProxySessionCommandOutput,
    ChimeSDKVoiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeSDKVoiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ChimeSDKTelephonyService", "CreateProxySession", {})
  .n("ChimeSDKVoiceClient", "CreateProxySessionCommand")
  .sc(CreateProxySession)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateProxySessionRequest;
      output: CreateProxySessionResponse;
    };
    sdk: {
      input: CreateProxySessionCommandInput;
      output: CreateProxySessionCommandOutput;
    };
  };
}
