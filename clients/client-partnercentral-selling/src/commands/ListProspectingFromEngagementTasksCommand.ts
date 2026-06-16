// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  ListProspectingFromEngagementTasksRequest,
  ListProspectingFromEngagementTasksResponse,
} from "../models/models_0";
import type {
  PartnerCentralSellingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PartnerCentralSellingClient";
import { ListProspectingFromEngagementTasks$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListProspectingFromEngagementTasksCommand}.
 */
export interface ListProspectingFromEngagementTasksCommandInput extends ListProspectingFromEngagementTasksRequest {}
/**
 * @public
 *
 * The output of {@link ListProspectingFromEngagementTasksCommand}.
 */
export interface ListProspectingFromEngagementTasksCommandOutput extends ListProspectingFromEngagementTasksResponse, __MetadataBearer {}

/**
 * <p>Lists all prospecting tasks initiated by the caller's account. Supports optional filters by task identifier, task name, or start time range. Results can be sorted using configurable options. The response is paginated. Use the <code>NextToken</code> value from each response to retrieve subsequent pages.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralSellingClient, ListProspectingFromEngagementTasksCommand } from "@aws-sdk/client-partnercentral-selling"; // ES Modules import
 * // const { PartnerCentralSellingClient, ListProspectingFromEngagementTasksCommand } = require("@aws-sdk/client-partnercentral-selling"); // CommonJS import
 * // import type { PartnerCentralSellingClientConfig } from "@aws-sdk/client-partnercentral-selling";
 * const config = {}; // type is PartnerCentralSellingClientConfig
 * const client = new PartnerCentralSellingClient(config);
 * const input = { // ListProspectingFromEngagementTasksRequest
 *   Catalog: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   TaskIdentifier: [ // TaskIdentifierList
 *     "STRING_VALUE",
 *   ],
 *   TaskName: [ // TaskNameList
 *     "STRING_VALUE",
 *   ],
 *   StartAfter: new Date("TIMESTAMP"),
 *   StartBefore: new Date("TIMESTAMP"),
 *   Sort: { // ProspectingFromEngagementTaskSort
 *     SortOrder: "ASCENDING" || "DESCENDING", // required
 *     SortBy: "StartTime" || "TaskName" || "FailedEngagementCount", // required
 *   },
 * };
 * const command = new ListProspectingFromEngagementTasksCommand(input);
 * const response = await client.send(command);
 * // { // ListProspectingFromEngagementTasksResponse
 * //   NextToken: "STRING_VALUE",
 * //   TaskSummaries: [ // ProspectingTaskSummaryList // required
 * //     { // ProspectingTaskSummary
 * //       TaskId: "STRING_VALUE", // required
 * //       TaskArn: "STRING_VALUE", // required
 * //       TaskName: "STRING_VALUE", // required
 * //       StartTime: new Date("TIMESTAMP"), // required
 * //       EndTime: new Date("TIMESTAMP"),
 * //       TotalEngagementCount: Number("int"), // required
 * //       CompletedEngagementCount: Number("int"), // required
 * //       FailedEngagementCount: Number("int"), // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListProspectingFromEngagementTasksCommandInput - {@link ListProspectingFromEngagementTasksCommandInput}
 * @returns {@link ListProspectingFromEngagementTasksCommandOutput}
 * @see {@link ListProspectingFromEngagementTasksCommandInput} for command's `input` shape.
 * @see {@link ListProspectingFromEngagementTasksCommandOutput} for command's `response` shape.
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
export class ListProspectingFromEngagementTasksCommand extends $Command
  .classBuilder<
    ListProspectingFromEngagementTasksCommandInput,
    ListProspectingFromEngagementTasksCommandOutput,
    PartnerCentralSellingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PartnerCentralSellingClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSPartnerCentralSelling", "ListProspectingFromEngagementTasks", {})
  .n("PartnerCentralSellingClient", "ListProspectingFromEngagementTasksCommand")
  .sc(ListProspectingFromEngagementTasks$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListProspectingFromEngagementTasksRequest;
      output: ListProspectingFromEngagementTasksResponse;
    };
    sdk: {
      input: ListProspectingFromEngagementTasksCommandInput;
      output: ListProspectingFromEngagementTasksCommandOutput;
    };
  };
}
