// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListConnectionsRequest, ListConnectionsResponse } from "../models/models_0";
import type {
  PartnerCentralAccountClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PartnerCentralAccountClient";
import { ListConnections } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListConnectionsCommand}.
 */
export interface ListConnectionsCommandInput extends ListConnectionsRequest {}
/**
 * @public
 *
 * The output of {@link ListConnectionsCommand}.
 */
export interface ListConnectionsCommandOutput extends ListConnectionsResponse, __MetadataBearer {}

/**
 * <p>Lists active connections for the partner account, with optional filtering by connection type and participant.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralAccountClient, ListConnectionsCommand } from "@aws-sdk/client-partnercentral-account"; // ES Modules import
 * // const { PartnerCentralAccountClient, ListConnectionsCommand } = require("@aws-sdk/client-partnercentral-account"); // CommonJS import
 * // import type { PartnerCentralAccountClientConfig } from "@aws-sdk/client-partnercentral-account";
 * const config = {}; // type is PartnerCentralAccountClientConfig
 * const client = new PartnerCentralAccountClient(config);
 * const input = { // ListConnectionsRequest
 *   Catalog: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   ConnectionType: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   OtherParticipantIdentifiers: [ // ParticipantIdentifierList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new ListConnectionsCommand(input);
 * const response = await client.send(command);
 * // { // ListConnectionsResponse
 * //   ConnectionSummaries: [ // ConnectionSummaryList // required
 * //     { // ConnectionSummary
 * //       Catalog: "STRING_VALUE", // required
 * //       Id: "STRING_VALUE", // required
 * //       Arn: "STRING_VALUE", // required
 * //       OtherParticipantAccountId: "STRING_VALUE", // required
 * //       UpdatedAt: new Date("TIMESTAMP"), // required
 * //       ConnectionTypes: { // ConnectionTypeSummaryMap // required
 * //         "<keys>": { // ConnectionTypeSummary
 * //           Status: "ACTIVE" || "CANCELED", // required
 * //           OtherParticipant: { // Participant Union: only one key present
 * //             PartnerProfile: { // PartnerProfileSummary
 * //               Id: "STRING_VALUE", // required
 * //               Name: "STRING_VALUE", // required
 * //             },
 * //             SellerProfile: { // SellerProfileSummary
 * //               Id: "STRING_VALUE", // required
 * //               Name: "STRING_VALUE", // required
 * //             },
 * //             Account: { // AccountSummary
 * //               Name: "STRING_VALUE", // required
 * //             },
 * //           },
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListConnectionsCommandInput - {@link ListConnectionsCommandInput}
 * @returns {@link ListConnectionsCommandOutput}
 * @see {@link ListConnectionsCommandInput} for command's `input` shape.
 * @see {@link ListConnectionsCommandOutput} for command's `response` shape.
 * @see {@link PartnerCentralAccountClientResolvedConfig | config} for PartnerCentralAccountClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied due to insufficient permissions. The caller does not have the required permissions to perform this operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred while processing the request. This is typically a temporary condition and the request may be retried.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled due to too many requests being sent in a short period of time. The client should implement exponential backoff and retry the request.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed validation. One or more input parameters are invalid, missing, or do not meet the required format or constraints.</p>
 *
 * @throws {@link PartnerCentralAccountServiceException}
 * <p>Base exception class for all service exceptions from PartnerCentralAccount service.</p>
 *
 *
 * @public
 */
export class ListConnectionsCommand extends $Command
  .classBuilder<
    ListConnectionsCommandInput,
    ListConnectionsCommandOutput,
    PartnerCentralAccountClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PartnerCentralAccountClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PartnerCentralAccount", "ListConnections", {})
  .n("PartnerCentralAccountClient", "ListConnectionsCommand")
  .sc(ListConnections)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListConnectionsRequest;
      output: ListConnectionsResponse;
    };
    sdk: {
      input: ListConnectionsCommandInput;
      output: ListConnectionsCommandOutput;
    };
  };
}
