// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SearchAgreementsInput, SearchAgreementsOutput } from "../models/models_0";
import { SearchAgreements$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * <p>Searches across all agreements that a proposer or an acceptor has in AWS Marketplace. The search returns a list of agreements with basic agreement information.</p>
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
 * //       lastUpdateTime: new Date("TIMESTAMP"),
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
 * //       entitlements: [ // EntitlementList
 * //         { // Entitlement
 * //           licenseArn: "STRING_VALUE",
 * //         },
 * //       ],
 * //       initialAgreementId: "STRING_VALUE",
 * //       endTimeBehaviorType: "RENEW" || "REPLACE" || "EXPIRE",
 * //       endTimeBehaviorReasonCode: "PROPOSER_RENEW_OPTED_OUT" || "ACCEPTOR_RENEW_OPTED_OUT" || "NO_RENEWAL_TERM" || "RENEWAL_LIMIT_EXHAUSTED",
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
export class SearchAgreementsCommand extends command<SearchAgreementsCommandInput, SearchAgreementsCommandOutput>(
  _ep0,
  _mw0,
  "SearchAgreements",
  SearchAgreements$
) {
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
