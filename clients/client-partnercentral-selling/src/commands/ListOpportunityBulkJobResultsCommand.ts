// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListOpportunityBulkJobResultsRequest, ListOpportunityBulkJobResultsResponse } from "../models/models_0";
import { ListOpportunityBulkJobResults$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListOpportunityBulkJobResultsCommand}.
 */
export interface ListOpportunityBulkJobResultsCommandInput extends ListOpportunityBulkJobResultsRequest {}
/**
 * @public
 *
 * The output of {@link ListOpportunityBulkJobResultsCommand}.
 */
export interface ListOpportunityBulkJobResultsCommandOutput extends ListOpportunityBulkJobResultsResponse, __MetadataBearer {}

/**
 * <p>Lists the outcome of each record in an opportunity bulk job. You can filter the results by record status.</p> <p>Results are paginated. Use <code>NextToken</code> to retrieve additional results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralSellingClient, ListOpportunityBulkJobResultsCommand } from "@aws-sdk/client-partnercentral-selling"; // ES Modules import
 * // const { PartnerCentralSellingClient, ListOpportunityBulkJobResultsCommand } = require("@aws-sdk/client-partnercentral-selling"); // CommonJS import
 * // import type { PartnerCentralSellingClientConfig } from "@aws-sdk/client-partnercentral-selling";
 * const config = {}; // type is PartnerCentralSellingClientConfig
 * const client = new PartnerCentralSellingClient(config);
 * const input = { // ListOpportunityBulkJobResultsRequest
 *   Catalog: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   JobId: "STRING_VALUE", // required
 *   Status: "SUCCEEDED" || "FAILED",
 * };
 * const command = new ListOpportunityBulkJobResultsCommand(input);
 * const response = await client.send(command);
 * // { // ListOpportunityBulkJobResultsResponse
 * //   Results: [ // BulkJobResultList // required
 * //     { // BulkJobResult
 * //       RequestId: "STRING_VALUE", // required
 * //       Status: "SUCCEEDED" || "FAILED", // required
 * //       ResourceIdentifier: "STRING_VALUE",
 * //       ErrorCode: "STRING_VALUE",
 * //       ErrorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListOpportunityBulkJobResultsCommandInput - {@link ListOpportunityBulkJobResultsCommandInput}
 * @returns {@link ListOpportunityBulkJobResultsCommandOutput}
 * @see {@link ListOpportunityBulkJobResultsCommandInput} for command's `input` shape.
 * @see {@link ListOpportunityBulkJobResultsCommandOutput} for command's `response` shape.
 * @see {@link PartnerCentralSellingClientResolvedConfig | config} for PartnerCentralSellingClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>This error occurs when you don't have permission to perform the requested action.</p> <p>You don’t have access to this action or resource. Review IAM policies or contact your AWS administrator for assistance.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This error occurs when the specified resource can’t be found or doesn't exist. Resource ID and type might be incorrect.</p> <p>Suggested action: This is usually a transient error. Retry after the provided retry delay or a short interval. If the problem persists, contact AWS support.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This error occurs when the specified resource can't be found. The resource might not exist, or isn't visible with the current credentials.</p> <p>Suggested action: Verify that the resource ID is correct and the resource is in the expected AWS region. Check IAM permissions for accessing the resource.</p>
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
 * @public
 */
export class ListOpportunityBulkJobResultsCommand extends command<ListOpportunityBulkJobResultsCommandInput, ListOpportunityBulkJobResultsCommandOutput>(
  _ep0,
  _mw0,
  "ListOpportunityBulkJobResults",
  ListOpportunityBulkJobResults$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListOpportunityBulkJobResultsRequest;
      output: ListOpportunityBulkJobResultsResponse;
    };
    sdk: {
      input: ListOpportunityBulkJobResultsCommandInput;
      output: ListOpportunityBulkJobResultsCommandOutput;
    };
  };
}
