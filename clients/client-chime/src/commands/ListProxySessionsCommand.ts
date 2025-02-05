// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListProxySessionsRequest,
  ListProxySessionsResponse,
  ListProxySessionsResponseFilterSensitiveLog,
} from "../models/models_1";
import { de_ListProxySessionsCommand, se_ListProxySessionsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Lists the proxy sessions for the specified Amazon Chime Voice Connector.</p>
 *          <important>
 *             <p>
 *                <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_ListProxySessions.html">ListProxySessions</a>, in the Amazon Chime SDK.</p>
 *             <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to
 *             <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the
 *             <i>Amazon Chime SDK Developer Guide</i>.</p>
 *          </important>
 *
 * @deprecated Replaced by ListProxySessions in the Amazon Chime SDK Voice Namespace
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, ListProxySessionsCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, ListProxySessionsCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ChimeClient(config);
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
export class ListProxySessionsCommand extends $Command
  .classBuilder<
    ListProxySessionsCommandInput,
    ListProxySessionsCommandOutput,
    ChimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("UCBuzzConsoleService", "ListProxySessions", {})
  .n("ChimeClient", "ListProxySessionsCommand")
  .f(void 0, ListProxySessionsResponseFilterSensitiveLog)
  .ser(se_ListProxySessionsCommand)
  .de(de_ListProxySessionsCommand)
  .build() {
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
