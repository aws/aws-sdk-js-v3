// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListCustomerAccountBulkJobResultsRequest,
  ListCustomerAccountBulkJobResultsResponse,
} from "../models/models_0";
import { ListCustomerAccountBulkJobResults$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListCustomerAccountBulkJobResultsCommand}.
 */
export interface ListCustomerAccountBulkJobResultsCommandInput extends ListCustomerAccountBulkJobResultsRequest {}
/**
 * @public
 *
 * The output of {@link ListCustomerAccountBulkJobResultsCommand}.
 */
export interface ListCustomerAccountBulkJobResultsCommandOutput extends ListCustomerAccountBulkJobResultsResponse, __MetadataBearer {}

/**
 * <p>Use <code>ListCustomerAccountBulkJobResults</code> to list the outcome of each record in a bulk job. You can filter the results to records that succeeded or failed. A job that failed before it processed any records returns an empty list.</p> <p>Results are paginated. Use <code>NextToken</code> to retrieve additional results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralSellingClient, ListCustomerAccountBulkJobResultsCommand } from "@aws-sdk/client-partnercentral-selling"; // ES Modules import
 * // const { PartnerCentralSellingClient, ListCustomerAccountBulkJobResultsCommand } = require("@aws-sdk/client-partnercentral-selling"); // CommonJS import
 * // import type { PartnerCentralSellingClientConfig } from "@aws-sdk/client-partnercentral-selling";
 * const config = {}; // type is PartnerCentralSellingClientConfig
 * const client = new PartnerCentralSellingClient(config);
 * const input = { // ListCustomerAccountBulkJobResultsRequest
 *   Catalog: "STRING_VALUE", // required
 *   Identifier: "STRING_VALUE", // required
 *   Status: "SUCCEEDED" || "FAILED",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListCustomerAccountBulkJobResultsCommand(input);
 * const response = await client.send(command);
 * // { // ListCustomerAccountBulkJobResultsResponse
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
 * @param ListCustomerAccountBulkJobResultsCommandInput - {@link ListCustomerAccountBulkJobResultsCommandInput}
 * @returns {@link ListCustomerAccountBulkJobResultsCommandOutput}
 * @see {@link ListCustomerAccountBulkJobResultsCommandInput} for command's `input` shape.
 * @see {@link ListCustomerAccountBulkJobResultsCommandOutput} for command's `response` shape.
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
export class ListCustomerAccountBulkJobResultsCommand extends command<ListCustomerAccountBulkJobResultsCommandInput, ListCustomerAccountBulkJobResultsCommandOutput>(
  _ep0,
  _mw0,
  "ListCustomerAccountBulkJobResults",
  ListCustomerAccountBulkJobResults$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCustomerAccountBulkJobResultsRequest;
      output: ListCustomerAccountBulkJobResultsResponse;
    };
    sdk: {
      input: ListCustomerAccountBulkJobResultsCommandInput;
      output: ListCustomerAccountBulkJobResultsCommandOutput;
    };
  };
}
