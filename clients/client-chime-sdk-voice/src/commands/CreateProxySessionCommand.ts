// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateProxySessionRequest, CreateProxySessionResponse } from "../models/models_0";
import { CreateProxySession$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates a proxy session for the specified Amazon Chime SDK Voice Connector for the specified participant phone numbers.
 *
 * > **Important:** End of support notice: On April 7, 2026, AWS will end support for Amazon Chime SDK proxy sessions.
 *
 * @deprecated (since 2026-04-07) End of support notice: On April 7, 2026, AWS ended support for Amazon Chime SDK proxy sessions. For more information, refer to https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_CreateProxySession.html.
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
export class CreateProxySessionCommand extends command<CreateProxySessionCommandInput, CreateProxySessionCommandOutput>(
  _ep0,
  _mw0,
  "CreateProxySession",
  CreateProxySession$
) {
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
