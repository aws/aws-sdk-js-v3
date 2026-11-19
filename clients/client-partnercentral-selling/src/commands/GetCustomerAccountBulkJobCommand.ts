// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetCustomerAccountBulkJobRequest, GetCustomerAccountBulkJobResponse } from "../models/models_0";
import { GetCustomerAccountBulkJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetCustomerAccountBulkJobCommand}.
 */
export interface GetCustomerAccountBulkJobCommandInput extends GetCustomerAccountBulkJobRequest {}
/**
 * @public
 *
 * The output of {@link GetCustomerAccountBulkJobCommand}.
 */
export interface GetCustomerAccountBulkJobCommandOutput extends GetCustomerAccountBulkJobResponse, __MetadataBearer {}

/**
 * <p>Use <code>GetCustomerAccountBulkJob</code> to retrieve the status and record counts of a bulk job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralSellingClient, GetCustomerAccountBulkJobCommand } from "@aws-sdk/client-partnercentral-selling"; // ES Modules import
 * // const { PartnerCentralSellingClient, GetCustomerAccountBulkJobCommand } = require("@aws-sdk/client-partnercentral-selling"); // CommonJS import
 * // import type { PartnerCentralSellingClientConfig } from "@aws-sdk/client-partnercentral-selling";
 * const config = {}; // type is PartnerCentralSellingClientConfig
 * const client = new PartnerCentralSellingClient(config);
 * const input = { // GetCustomerAccountBulkJobRequest
 *   Catalog: "STRING_VALUE", // required
 *   Identifier: "STRING_VALUE", // required
 * };
 * const command = new GetCustomerAccountBulkJobCommand(input);
 * const response = await client.send(command);
 * // { // GetCustomerAccountBulkJobResponse
 * //   Arn: "STRING_VALUE", // required
 * //   Id: "STRING_VALUE", // required
 * //   Status: "SUBMITTED" || "IN_PROGRESS" || "COMPLETED" || "FAILED", // required
 * //   FileName: "STRING_VALUE",
 * //   TotalRecords: Number("int"), // required
 * //   ProcessedRecords: Number("int"), // required
 * //   SuccessCount: Number("int"), // required
 * //   FailureCount: Number("int"), // required
 * //   DeletedCount: Number("int"), // required
 * //   FailureReason: "STRING_VALUE",
 * //   CreatedAt: new Date("TIMESTAMP"), // required
 * //   CompletedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetCustomerAccountBulkJobCommandInput - {@link GetCustomerAccountBulkJobCommandInput}
 * @returns {@link GetCustomerAccountBulkJobCommandOutput}
 * @see {@link GetCustomerAccountBulkJobCommandInput} for command's `input` shape.
 * @see {@link GetCustomerAccountBulkJobCommandOutput} for command's `response` shape.
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
export class GetCustomerAccountBulkJobCommand extends command<GetCustomerAccountBulkJobCommandInput, GetCustomerAccountBulkJobCommandOutput>(
  _ep0,
  _mw0,
  "GetCustomerAccountBulkJob",
  GetCustomerAccountBulkJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCustomerAccountBulkJobRequest;
      output: GetCustomerAccountBulkJobResponse;
    };
    sdk: {
      input: GetCustomerAccountBulkJobCommandInput;
      output: GetCustomerAccountBulkJobCommandOutput;
    };
  };
}
