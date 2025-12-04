// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  MarketplaceAgreementClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MarketplaceAgreementClient";
import type { SearchAgreementsInput, SearchAgreementsOutput } from "../models/models_0";
import { SearchAgreements } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SearchAgreementsCommand}.
 */
export interface SearchAgreementsCommandInput extends SearchAgreementsInput {}
/**
 * @public
 *
 * The output of {@link SearchAgreementsCommand}.
 */
export interface SearchAgreementsCommandOutput extends SearchAgreementsOutput, __MetadataBearer {}

/**
 * <p>Searches across all agreements that a proposer has in AWS Marketplace. The search returns a list of agreements with basic agreement information.</p> <p>The following filter combinations are supported when the <code>PartyType</code> is <code>Proposer</code>:</p> <ul> <li> <p> <code>AgreementType</code> </p> </li> <li> <p> <code>AgreementType</code> + <code>EndTime</code> </p> </li> <li> <p> <code>AgreementType</code> + <code>ResourceType</code> </p> </li> <li> <p> <code>AgreementType</code> + <code>ResourceType</code> + <code>EndTime</code> </p> </li> <li> <p> <code>AgreementType</code> + <code>ResourceType</code> + <code>Status</code> </p> </li> <li> <p> <code>AgreementType</code> + <code>ResourceType</code> + <code>Status</code> + <code>EndTime</code> </p> </li> <li> <p> <code>AgreementType</code> + <code>ResourceId</code> </p> </li> <li> <p> <code>AgreementType</code> + <code>ResourceId</code> + <code>EndTime</code> </p> </li> <li> <p> <code>AgreementType</code> + <code>ResourceId</code> + <code>Status</code> </p> </li> <li> <p> <code>AgreementType</code> + <code>ResourceId</code> + <code>Status</code> + <code>EndTime</code> </p> </li> <li> <p> <code>AgreementType</code> + <code>AcceptorAccountId</code> </p> </li> <li> <p> <code>AgreementType</code> + <code>AcceptorAccountId</code> + <code>EndTime</code> </p> </li> <li> <p> <code>AgreementType</code> + <code>AcceptorAccountId</code> + <code>Status</code> </p> </li> <li> <p> <code>AgreementType</code> + <code>AcceptorAccountId</code> + <code>Status</code> + <code>EndTime</code> </p> </li> <li> <p> <code>AgreementType</code> + <code>AcceptorAccountId</code> + <code>OfferId</code> </p> </li> <li> <p> <code>AgreementType</code> + <code>AcceptorAccountId</code> + <code>OfferId</code> + <code>Status</code> </p> </li> <li> <p> <code>AgreementType</code> + <code>AcceptorAccountId</code> + <code>OfferId</code> + <code>EndTime</code> </p> </li> <li> <p> <code>AgreementType</code> + <code>AcceptorAccountId</code> + <code>OfferId</code> + <code>Status</code> + <code>EndTime</code> </p> </li> <li> <p> <code>AgreementType</code> + <code>AcceptorAccountId</code> + <code>ResourceId</code> </p> </li> <li> <p> <code>AgreementType</code> + <code>AcceptorAccountId</code> + <code>ResourceId</code> + <code>Status</code> </p> </li> <li> <p> <code>AgreementType</code> + <code>AcceptorAccountId</code> + <code>ResourceId</code> + <code>EndTime</code> </p> </li> <li> <p> <code>AgreementType</code> + <code>AcceptorAccountId</code> + <code>ResourceId</code> + <code>Status</code> + <code>EndTime</code> </p> </li> <li> <p> <code>AgreementType</code> + <code>AcceptorAccountId</code> + <code>ResourceType</code> </p> </li> <li> <p> <code>AgreementType</code> + <code>AcceptorAccountId</code> + <code>ResourceType</code> + <code>EndTime</code> </p> </li> <li> <p> <code>AgreementType</code> + <code>AcceptorAccountId</code> + <code>ResourceType</code> + <code>Status</code> </p> </li> <li> <p> <code>AgreementType</code> + <code>AcceptorAccountId</code> + <code>ResourceType</code> + <code>Status</code> + <code>EndTime</code> </p> </li> <li> <p> <code>AgreementType</code> + <code>Status</code> </p> </li> <li> <p> <code>AgreementType</code> + <code>Status</code> + <code>EndTime</code> </p> </li> <li> <p> <code>AgreementType</code> + <code>OfferId</code> </p> </li> <li> <p> <code>AgreementType</code> + <code>OfferId</code> + <code>EndTime</code> </p> </li> <li> <p> <code>AgreementType</code> + <code>OfferId</code> + <code>Status</code> </p> </li> <li> <p> <code>AgreementType</code> + <code>OfferId</code> + <code>Status</code> + <code>EndTime</code> </p> </li> <li> <p> <code>AgreementType</code> + <code>OfferSetId</code> </p> </li> <li> <p> <code>AgreementType</code> + <code>OfferSetId</code> + <code>EndTime</code> </p> </li> <li> <p> <code>AgreementType</code> + <code>OfferSetId</code> + <code>Status</code> </p> </li> <li> <p> <code>AgreementType</code> + <code>OfferSetId</code> + <code>Status</code> + <code>EndTime</code> </p> </li> </ul> <note> <p> To filter by <code>EndTime</code>, you can use either <code>BeforeEndTime</code> or <code>AfterEndTime</code>. Only <code>EndTime</code> is supported for sorting.</p> </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceAgreementClient, SearchAgreementsCommand } from "@aws-sdk/client-marketplace-agreement"; // ES Modules import
 * // const { MarketplaceAgreementClient, SearchAgreementsCommand } = require("@aws-sdk/client-marketplace-agreement"); // CommonJS import
 * // import type { MarketplaceAgreementClientConfig } from "@aws-sdk/client-marketplace-agreement";
 * const config = {}; // type is MarketplaceAgreementClientConfig
 * const client = new MarketplaceAgreementClient(config);
 * const input = { // SearchAgreementsInput
 *   catalog: "STRING_VALUE",
 *   filters: [ // FilterList
 *     { // Filter
 *       name: "STRING_VALUE",
 *       values: [ // FilterValueList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   sort: { // Sort
 *     sortBy: "STRING_VALUE",
 *     sortOrder: "ASCENDING" || "DESCENDING",
 *   },
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new SearchAgreementsCommand(input);
 * const response = await client.send(command);
 * // { // SearchAgreementsOutput
 * //   agreementViewSummaries: [ // AgreementViewSummaryList
 * //     { // AgreementViewSummary
 * //       agreementId: "STRING_VALUE",
 * //       acceptanceTime: new Date("TIMESTAMP"),
 * //       startTime: new Date("TIMESTAMP"),
 * //       endTime: new Date("TIMESTAMP"),
 * //       agreementType: "STRING_VALUE",
 * //       acceptor: { // Acceptor
 * //         accountId: "STRING_VALUE",
 * //       },
 * //       proposer: { // Proposer
 * //         accountId: "STRING_VALUE",
 * //       },
 * //       proposalSummary: { // ProposalSummary
 * //         resources: [ // Resources
 * //           { // Resource
 * //             id: "STRING_VALUE",
 * //             type: "STRING_VALUE",
 * //           },
 * //         ],
 * //         offerId: "STRING_VALUE",
 * //         offerSetId: "STRING_VALUE",
 * //       },
 * //       status: "ACTIVE" || "ARCHIVED" || "CANCELLED" || "EXPIRED" || "RENEWED" || "REPLACED" || "ROLLED_BACK" || "SUPERSEDED" || "TERMINATED",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SearchAgreementsCommandInput - {@link SearchAgreementsCommandInput}
 * @returns {@link SearchAgreementsCommandOutput}
 * @see {@link SearchAgreementsCommandInput} for command's `input` shape.
 * @see {@link SearchAgreementsCommandOutput} for command's `response` shape.
 * @see {@link MarketplaceAgreementClientResolvedConfig | config} for MarketplaceAgreementClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the service.</p>
 *
 * @throws {@link MarketplaceAgreementServiceException}
 * <p>Base exception class for all service exceptions from MarketplaceAgreement service.</p>
 *
 *
 * @public
 */
export class SearchAgreementsCommand extends $Command
  .classBuilder<
    SearchAgreementsCommandInput,
    SearchAgreementsCommandOutput,
    MarketplaceAgreementClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MarketplaceAgreementClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSMPCommerceService_v20200301", "SearchAgreements", {})
  .n("MarketplaceAgreementClient", "SearchAgreementsCommand")
  .sc(SearchAgreements)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchAgreementsInput;
      output: SearchAgreementsOutput;
    };
    sdk: {
      input: SearchAgreementsCommandInput;
      output: SearchAgreementsCommandOutput;
    };
  };
}
