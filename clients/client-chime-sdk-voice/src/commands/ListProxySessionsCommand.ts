// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListProxySessionsRequest, ListProxySessionsResponse } from "../models/models_0";
import { ListProxySessions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListProxySessionsCommand}.
 */
export interface ListProxySessionsCommandInput extends ListProxySessionsRequest {}
/**
 * @public
 *
 * The output of {@link ListProxySessionsCommand}.
 */
export interface ListProxySessionsCommandOutput extends ListProxySessionsResponse, __MetadataBearer {}

/**
 * Lists the proxy sessions for the specified Amazon Chime SDK Voice Connector.
 *
 * > **Important:** End of support notice: On April 7, 2026, AWS will end support for Amazon Chime SDK proxy sessions.
 *
 * @deprecated (since 2026-04-07) End of support notice: On April 7, 2026, AWS ended support for Amazon Chime SDK proxy sessions. For more information, refer to https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_ListProxySessions.html.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, ListProxySessionsCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, ListProxySessionsCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
 * // import type { ChimeSDKVoiceClientConfig } from "@aws-sdk/client-chime-sdk-voice";
 * const config = {}; // type is ChimeSDKVoiceClientConfig
 * const client = new ChimeSDKVoiceClient(config);
 * const input = { // ListProxySessionsRequest
 *   VoiceConnectorId: "STRING_VALUE", // required
 *   Status: "Open" || "InProgress" || "Closed",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListProxySessionsCommand(input);
 * const response = await client.send(command);
 * // { // ListProxySessionsResponse
 * //   ProxySessions: [ // ProxySessions
 * //     { // ProxySession
 * //       VoiceConnectorId: "STRING_VALUE",
 * //       ProxySessionId: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Status: "Open" || "InProgress" || "Closed",
 * //       ExpiryMinutes: Number("int"),
 * //       Capabilities: [ // CapabilityList
 * //         "Voice" || "SMS",
 * //       ],
 * //       CreatedTimestamp: new Date("TIMESTAMP"),
 * //       UpdatedTimestamp: new Date("TIMESTAMP"),
 * //       EndedTimestamp: new Date("TIMESTAMP"),
 * //       Participants: [ // Participants
 * //         { // Participant
 * //           PhoneNumber: "STRING_VALUE",
 * //           ProxyPhoneNumber: "STRING_VALUE",
 * //         },
 * //       ],
 * //       NumberSelectionBehavior: "PreferSticky" || "AvoidSticky",
 * //       GeoMatchLevel: "Country" || "AreaCode",
 * //       GeoMatchParams: { // GeoMatchParams
 * //         Country: "STRING_VALUE", // required
 * //         AreaCode: "STRING_VALUE", // required
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListProxySessionsCommandInput - {@link ListProxySessionsCommandInput}
 * @returns {@link ListProxySessionsCommandOutput}
 * @see {@link ListProxySessionsCommandInput} for command's `input` shape.
 * @see {@link ListProxySessionsCommandOutput} for command's `response` shape.
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
export class ListProxySessionsCommand extends command<ListProxySessionsCommandInput, ListProxySessionsCommandOutput>(
  _ep0,
  _mw0,
  "ListProxySessions",
  ListProxySessions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListProxySessionsRequest;
      output: ListProxySessionsResponse;
    };
    sdk: {
      input: ListProxySessionsCommandInput;
      output: ListProxySessionsCommandOutput;
    };
  };
}
