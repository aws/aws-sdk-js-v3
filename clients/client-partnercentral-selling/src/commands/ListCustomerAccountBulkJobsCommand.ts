// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListCustomerAccountBulkJobsRequest, ListCustomerAccountBulkJobsResponse } from "../models/models_0";
import { ListCustomerAccountBulkJobs$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListCustomerAccountBulkJobsCommand}.
 */
export interface ListCustomerAccountBulkJobsCommandInput extends ListCustomerAccountBulkJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListCustomerAccountBulkJobsCommand}.
 */
export interface ListCustomerAccountBulkJobsCommandOutput extends ListCustomerAccountBulkJobsResponse, __MetadataBearer {}

/**
 * <p>Use <code>ListCustomerAccountBulkJobs</code> to list the bulk jobs in the specified catalog. You can filter the results by job identifier or status.</p> <p>Results are paginated. Use <code>NextToken</code> to retrieve additional results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralSellingClient, ListCustomerAccountBulkJobsCommand } from "@aws-sdk/client-partnercentral-selling"; // ES Modules import
 * // const { PartnerCentralSellingClient, ListCustomerAccountBulkJobsCommand } = require("@aws-sdk/client-partnercentral-selling"); // CommonJS import
 * // import type { PartnerCentralSellingClientConfig } from "@aws-sdk/client-partnercentral-selling";
 * const config = {}; // type is PartnerCentralSellingClientConfig
 * const client = new PartnerCentralSellingClient(config);
 * const input = { // ListCustomerAccountBulkJobsRequest
 *   Catalog: "STRING_VALUE", // required
 *   Filter: { // CustomerAccountBulkJobFilter
 *     Identifier: "STRING_VALUE",
 *     Status: "SUBMITTED" || "IN_PROGRESS" || "COMPLETED" || "FAILED",
 *   },
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListCustomerAccountBulkJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListCustomerAccountBulkJobsResponse
 * //   items: [ // CustomerAccountBulkJobSummaryList // required
 * //     { // CustomerAccountBulkJobSummary
 * //       Arn: "STRING_VALUE", // required
 * //       Id: "STRING_VALUE", // required
 * //       Status: "SUBMITTED" || "IN_PROGRESS" || "COMPLETED" || "FAILED", // required
 * //       FileName: "STRING_VALUE",
 * //       TotalRecords: Number("int"), // required
 * //       ProcessedRecords: Number("int"), // required
 * //       SuccessCount: Number("int"), // required
 * //       FailureCount: Number("int"), // required
 * //       DeletedCount: Number("int"), // required
 * //       FailureReason: "STRING_VALUE",
 * //       CreatedAt: new Date("TIMESTAMP"), // required
 * //       CompletedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCustomerAccountBulkJobsCommandInput - {@link ListCustomerAccountBulkJobsCommandInput}
 * @returns {@link ListCustomerAccountBulkJobsCommandOutput}
 * @see {@link ListCustomerAccountBulkJobsCommandInput} for command's `input` shape.
 * @see {@link ListCustomerAccountBulkJobsCommandOutput} for command's `response` shape.
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
 * @public
 */
export class ListCustomerAccountBulkJobsCommand extends command<ListCustomerAccountBulkJobsCommandInput, ListCustomerAccountBulkJobsCommandOutput>(
  _ep0,
  _mw0,
  "ListCustomerAccountBulkJobs",
  ListCustomerAccountBulkJobs$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCustomerAccountBulkJobsRequest;
      output: ListCustomerAccountBulkJobsResponse;
    };
    sdk: {
      input: ListCustomerAccountBulkJobsCommandInput;
      output: ListCustomerAccountBulkJobsCommandOutput;
    };
  };
}
