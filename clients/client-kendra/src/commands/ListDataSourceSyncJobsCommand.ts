// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KendraClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KendraClient";
import { ListDataSourceSyncJobsRequest, ListDataSourceSyncJobsResponse } from "../models/models_0";
import { de_ListDataSourceSyncJobsCommand, se_ListDataSourceSyncJobsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDataSourceSyncJobsCommand}.
 */
export interface ListDataSourceSyncJobsCommandInput extends ListDataSourceSyncJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListDataSourceSyncJobsCommand}.
 */
export interface ListDataSourceSyncJobsCommandOutput extends ListDataSourceSyncJobsResponse, __MetadataBearer {}

/**
 * <p>Gets statistics about synchronizing a data source connector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, ListDataSourceSyncJobsCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, ListDataSourceSyncJobsCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const input = { // ListDataSourceSyncJobsRequest
 *   Id: "STRING_VALUE", // required
 *   IndexId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   StartTimeFilter: { // TimeRange
 *     StartTime: new Date("TIMESTAMP"),
 *     EndTime: new Date("TIMESTAMP"),
 *   },
 *   StatusFilter: "FAILED" || "SUCCEEDED" || "SYNCING" || "INCOMPLETE" || "STOPPING" || "ABORTED" || "SYNCING_INDEXING",
 * };
 * const command = new ListDataSourceSyncJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListDataSourceSyncJobsResponse
 * //   History: [ // DataSourceSyncJobHistoryList
 * //     { // DataSourceSyncJob
 * //       ExecutionId: "STRING_VALUE",
 * //       StartTime: new Date("TIMESTAMP"),
 * //       EndTime: new Date("TIMESTAMP"),
 * //       Status: "FAILED" || "SUCCEEDED" || "SYNCING" || "INCOMPLETE" || "STOPPING" || "ABORTED" || "SYNCING_INDEXING",
 * //       ErrorMessage: "STRING_VALUE",
 * //       ErrorCode: "InternalError" || "InvalidRequest",
 * //       DataSourceErrorCode: "STRING_VALUE",
 * //       Metrics: { // DataSourceSyncJobMetrics
 * //         DocumentsAdded: "STRING_VALUE",
 * //         DocumentsModified: "STRING_VALUE",
 * //         DocumentsDeleted: "STRING_VALUE",
 * //         DocumentsFailed: "STRING_VALUE",
 * //         DocumentsScanned: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDataSourceSyncJobsCommandInput - {@link ListDataSourceSyncJobsCommandInput}
 * @returns {@link ListDataSourceSyncJobsCommandOutput}
 * @see {@link ListDataSourceSyncJobsCommandInput} for command's `input` shape.
 * @see {@link ListDataSourceSyncJobsCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for KendraClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action. Please ensure you have the
 *             required permission policies and user accounts and try again.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A conflict occurred with the request. Please fix any inconsistences with your
 *             resources and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An issue occurred with the internal server used for your Amazon Kendra service.
 *             Please wait a few minutes and try again, or contact <a href="http://aws.amazon.com/contact-us/">Support</a> for help.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource you want to use doesn’t exist. Please check you have provided the correct
 *             resource and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling. Please reduce the number of requests
 *             and try again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints set by the Amazon Kendra service.
 *             Please provide the correct input and try again.</p>
 *
 * @throws {@link KendraServiceException}
 * <p>Base exception class for all service exceptions from Kendra service.</p>
 *
 * @public
 */
export class ListDataSourceSyncJobsCommand extends $Command
  .classBuilder<
    ListDataSourceSyncJobsCommandInput,
    ListDataSourceSyncJobsCommandOutput,
    KendraClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: KendraClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSKendraFrontendService", "ListDataSourceSyncJobs", {})
  .n("KendraClient", "ListDataSourceSyncJobsCommand")
  .f(void 0, void 0)
  .ser(se_ListDataSourceSyncJobsCommand)
  .de(de_ListDataSourceSyncJobsCommand)
  .build() {}
