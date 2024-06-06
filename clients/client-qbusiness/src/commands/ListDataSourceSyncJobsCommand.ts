// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListDataSourceSyncJobsRequest, ListDataSourceSyncJobsResponse } from "../models/models_0";
import { de_ListDataSourceSyncJobsCommand, se_ListDataSourceSyncJobsCommand } from "../protocols/Aws_restJson1";
import { QBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QBusinessClient";

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
 * <p>Get information about an Amazon Q Business data source connector synchronization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QBusinessClient, ListDataSourceSyncJobsCommand } from "@aws-sdk/client-qbusiness"; // ES Modules import
 * // const { QBusinessClient, ListDataSourceSyncJobsCommand } = require("@aws-sdk/client-qbusiness"); // CommonJS import
 * const client = new QBusinessClient(config);
 * const input = { // ListDataSourceSyncJobsRequest
 *   dataSourceId: "STRING_VALUE", // required
 *   applicationId: "STRING_VALUE", // required
 *   indexId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   startTime: new Date("TIMESTAMP"),
 *   endTime: new Date("TIMESTAMP"),
 *   statusFilter: "FAILED" || "SUCCEEDED" || "SYNCING" || "INCOMPLETE" || "STOPPING" || "ABORTED" || "SYNCING_INDEXING",
 * };
 * const command = new ListDataSourceSyncJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListDataSourceSyncJobsResponse
 * //   history: [ // DataSourceSyncJobs
 * //     { // DataSourceSyncJob
 * //       executionId: "STRING_VALUE",
 * //       startTime: new Date("TIMESTAMP"),
 * //       endTime: new Date("TIMESTAMP"),
 * //       status: "FAILED" || "SUCCEEDED" || "SYNCING" || "INCOMPLETE" || "STOPPING" || "ABORTED" || "SYNCING_INDEXING",
 * //       error: { // ErrorDetail
 * //         errorMessage: "STRING_VALUE",
 * //         errorCode: "InternalError" || "InvalidRequest" || "ResourceInactive" || "ResourceNotFound",
 * //       },
 * //       dataSourceErrorCode: "STRING_VALUE",
 * //       metrics: { // DataSourceSyncJobMetrics
 * //         documentsAdded: "STRING_VALUE",
 * //         documentsModified: "STRING_VALUE",
 * //         documentsDeleted: "STRING_VALUE",
 * //         documentsFailed: "STRING_VALUE",
 * //         documentsScanned: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDataSourceSyncJobsCommandInput - {@link ListDataSourceSyncJobsCommandInput}
 * @returns {@link ListDataSourceSyncJobsCommandOutput}
 * @see {@link ListDataSourceSyncJobsCommandInput} for command's `input` shape.
 * @see {@link ListDataSourceSyncJobsCommandOutput} for command's `response` shape.
 * @see {@link QBusinessClientResolvedConfig | config} for QBusinessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> You don't have access to perform this action. Make sure you have the required
 *             permission policies and user accounts and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An issue occurred with the internal server used for your Amazon Q Business service. Wait
 *             some minutes and try again, or contact <a href="http://aws.amazon.com/contact-us/">Support</a> for help.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource you want to use doesn’t exist. Make sure you have provided the correct
 *             resource and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to throttling. Reduce the number of requests and try
 *             again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input doesn't meet the constraints set by the Amazon Q Business service. Provide the
 *             correct input and try again.</p>
 *
 * @throws {@link QBusinessServiceException}
 * <p>Base exception class for all service exceptions from QBusiness service.</p>
 *
 * @public
 */
export class ListDataSourceSyncJobsCommand extends $Command
  .classBuilder<
    ListDataSourceSyncJobsCommandInput,
    ListDataSourceSyncJobsCommandOutput,
    QBusinessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: QBusinessClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ExpertQ", "ListDataSourceSyncJobs", {})
  .n("QBusinessClient", "ListDataSourceSyncJobsCommand")
  .f(void 0, void 0)
  .ser(se_ListDataSourceSyncJobsCommand)
  .de(de_ListDataSourceSyncJobsCommand)
  .build() {}
