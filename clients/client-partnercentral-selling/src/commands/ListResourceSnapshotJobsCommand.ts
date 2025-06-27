// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListResourceSnapshotJobsRequest, ListResourceSnapshotJobsResponse } from "../models/models_0";
import {
  PartnerCentralSellingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PartnerCentralSellingClient";
import { de_ListResourceSnapshotJobsCommand, se_ListResourceSnapshotJobsCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListResourceSnapshotJobsCommand}.
 */
export interface ListResourceSnapshotJobsCommandInput extends ListResourceSnapshotJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListResourceSnapshotJobsCommand}.
 */
export interface ListResourceSnapshotJobsCommandOutput extends ListResourceSnapshotJobsResponse, __MetadataBearer {}

/**
 * <p> Lists resource snapshot jobs owned by the customer. This operation supports various filtering scenarios, including listing all jobs owned by the caller, jobs for a specific engagement, jobs with a specific status, or any combination of these filters. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralSellingClient, ListResourceSnapshotJobsCommand } from "@aws-sdk/client-partnercentral-selling"; // ES Modules import
 * // const { PartnerCentralSellingClient, ListResourceSnapshotJobsCommand } = require("@aws-sdk/client-partnercentral-selling"); // CommonJS import
 * const client = new PartnerCentralSellingClient(config);
 * const input = { // ListResourceSnapshotJobsRequest
 *   Catalog: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   EngagementIdentifier: "STRING_VALUE",
 *   Status: "Running" || "Stopped",
 *   Sort: { // SortObject
 *     SortBy: "CreatedDate",
 *     SortOrder: "ASCENDING" || "DESCENDING",
 *   },
 * };
 * const command = new ListResourceSnapshotJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListResourceSnapshotJobsResponse
 * //   ResourceSnapshotJobSummaries: [ // ResourceSnapshotJobSummaryList // required
 * //     { // ResourceSnapshotJobSummary
 * //       Id: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //       EngagementId: "STRING_VALUE",
 * //       Status: "Running" || "Stopped",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListResourceSnapshotJobsCommandInput - {@link ListResourceSnapshotJobsCommandInput}
 * @returns {@link ListResourceSnapshotJobsCommandOutput}
 * @see {@link ListResourceSnapshotJobsCommandInput} for command's `input` shape.
 * @see {@link ListResourceSnapshotJobsCommandOutput} for command's `response` shape.
 * @see {@link PartnerCentralSellingClientResolvedConfig | config} for PartnerCentralSellingClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>This error occurs when you don't have permission to perform the requested action.</p> <p>You don’t have access to this action or resource. Review IAM policies or contact your AWS administrator for assistance.</p>
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
export class ListResourceSnapshotJobsCommand extends $Command
  .classBuilder<
    ListResourceSnapshotJobsCommandInput,
    ListResourceSnapshotJobsCommandOutput,
    PartnerCentralSellingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PartnerCentralSellingClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSPartnerCentralSelling", "ListResourceSnapshotJobs", {})
  .n("PartnerCentralSellingClient", "ListResourceSnapshotJobsCommand")
  .f(void 0, void 0)
  .ser(se_ListResourceSnapshotJobsCommand)
  .de(de_ListResourceSnapshotJobsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListResourceSnapshotJobsRequest;
      output: ListResourceSnapshotJobsResponse;
    };
    sdk: {
      input: ListResourceSnapshotJobsCommandInput;
      output: ListResourceSnapshotJobsCommandOutput;
    };
  };
}
