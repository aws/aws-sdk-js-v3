// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListEngagementGroupsRequest, ListEngagementGroupsResponse } from "../models/models_0";
import { ListEngagementGroups$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListEngagementGroupsCommand}.
 */
export interface ListEngagementGroupsCommandInput extends ListEngagementGroupsRequest {}
/**
 * @public
 *
 * The output of {@link ListEngagementGroupsCommand}.
 */
export interface ListEngagementGroupsCommandOutput extends ListEngagementGroupsResponse, __MetadataBearer {}

/**
 * <p>Lists the active, fully curated AWS Partner Central engagement groups that are available to you in the specified catalog. An engagement group is a curated set of engagements that share common characteristics, such as customer geography, industry, or solution category. To retrieve the engagements in a group, pass the group <code>Id</code> to <code>SearchEngagements</code> as <code>GroupId</code>, and use <code>NextToken</code> to retrieve additional pages of groups.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralSellingClient, ListEngagementGroupsCommand } from "@aws-sdk/client-partnercentral-selling"; // ES Modules import
 * // const { PartnerCentralSellingClient, ListEngagementGroupsCommand } = require("@aws-sdk/client-partnercentral-selling"); // CommonJS import
 * // import type { PartnerCentralSellingClientConfig } from "@aws-sdk/client-partnercentral-selling";
 * const config = {}; // type is PartnerCentralSellingClientConfig
 * const client = new PartnerCentralSellingClient(config);
 * const input = { // ListEngagementGroupsRequest
 *   Catalog: "STRING_VALUE", // required
 *   ReadinessLevel: "SalesReady" || "MarketingReady" || "LowPotential",
 *   Sort: { // EngagementGroupSort
 *     SortBy: "Count" || "UpdatedAt", // required
 *     SortOrder: "ASCENDING" || "DESCENDING", // required
 *   },
 *   EngagementGroupIdentifiers: [ // EngagementGroupIdentifiers
 *     "STRING_VALUE",
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListEngagementGroupsCommand(input);
 * const response = await client.send(command);
 * // { // ListEngagementGroupsResponse
 * //   EngagementGroupSummaries: [ // EngagementGroupSummaries
 * //     { // EngagementGroupSummary
 * //       Id: "STRING_VALUE", // required
 * //       Arn: "STRING_VALUE",
 * //       Catalog: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       Count: Number("int"),
 * //       ReadinessLevel: "SalesReady" || "MarketingReady" || "LowPotential",
 * //       UpdatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListEngagementGroupsCommandInput - {@link ListEngagementGroupsCommandInput}
 * @returns {@link ListEngagementGroupsCommandOutput}
 * @see {@link ListEngagementGroupsCommandInput} for command's `input` shape.
 * @see {@link ListEngagementGroupsCommandOutput} for command's `response` shape.
 * @see {@link PartnerCentralSellingClientResolvedConfig | config} for PartnerCentralSellingClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>This error occurs when you don't have permission to perform the requested action.</p> <p>You don’t have access to this action or resource. Review IAM policies or contact your AWS administrator for assistance.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This error occurs when the specified resource can’t be found or doesn't exist. Resource ID and type might be incorrect.</p> <p>Suggested action: This is usually a transient error. Retry after the provided retry delay or a short interval. If the problem persists, contact AWS support.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>This error occurs when there are too many requests sent. Review the provided quotas and adapt your usage to avoid throttling.</p> <p>This error occurs when there are too many requests sent. Review the provided <a href="https://docs.aws.amazon.com/partner-central/latest/selling-api/quotas.html">Quotas</a> and retry after the provided delay.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the service or business validation rules.</p> <p>Suggested action: Review the error message, including the failed fields and reasons, to correct the request payload.</p>
 *
 * @throws {@link PartnerCentralSellingServiceException}
 * <p>Base exception class for all service exceptions from PartnerCentralSelling service.</p>
 *
 *
 * @example List sales-ready engagement groups
 * ```javascript
 * // Returns the sales-ready engagement groups available in the AWS catalog, largest first.
 * const input = {
 *   Catalog: "AWS",
 *   MaxResults: 10,
 *   ReadinessLevel: "SalesReady",
 *   Sort: {
 *     SortBy: "Count",
 *     SortOrder: "DESCENDING"
 *   }
 * };
 * const command = new ListEngagementGroupsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   EngagementGroupSummaries: [
 *     {
 *       Arn: "arn:aws:partnercentral:us-east-1::catalog/AWS/engagement-group/eng-grp-0a1b2c3d4e5f6g",
 *       Catalog: "AWS",
 *       Count: 42,
 *       Description: "Retail customers in the United States that are likely to adopt data analytics solutions.",
 *       Id: "eng-grp-0a1b2c3d4e5f6g",
 *       Name: "US retail data analytics",
 *       ReadinessLevel: "SalesReady",
 *       UpdatedAt: "2026-10-22T18:30:00Z"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListEngagementGroupsCommand extends command<ListEngagementGroupsCommandInput, ListEngagementGroupsCommandOutput>(
  _ep0,
  _mw0,
  "ListEngagementGroups",
  ListEngagementGroups$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListEngagementGroupsRequest;
      output: ListEngagementGroupsResponse;
    };
    sdk: {
      input: ListEngagementGroupsCommandInput;
      output: ListEngagementGroupsCommandOutput;
    };
  };
}
