// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetMLTaskRunsRequest, GetMLTaskRunsResponse } from "../models/models_2";
import { de_GetMLTaskRunsCommand, se_GetMLTaskRunsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetMLTaskRunsCommand}.
 */
export interface GetMLTaskRunsCommandInput extends GetMLTaskRunsRequest {}
/**
 * @public
 *
 * The output of {@link GetMLTaskRunsCommand}.
 */
export interface GetMLTaskRunsCommandOutput extends GetMLTaskRunsResponse, __MetadataBearer {}

/**
 * <p>Gets a list of runs for a machine learning transform. Machine learning task runs are
 *       asynchronous tasks that Glue runs on your behalf as part of various machine learning
 *       workflows. You can get a sortable, filterable list of machine learning task runs by calling
 *         <code>GetMLTaskRuns</code> with their parent transform's <code>TransformID</code> and other
 *       optional parameters as documented in this section.</p>
 *          <p>This operation returns a list of historic runs and must be paginated.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetMLTaskRunsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetMLTaskRunsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new GlueClient(config);
 * const input = { // GetMLTaskRunsRequest
 *   TransformId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   Filter: { // TaskRunFilterCriteria
 *     TaskRunType: "EVALUATION" || "LABELING_SET_GENERATION" || "IMPORT_LABELS" || "EXPORT_LABELS" || "FIND_MATCHES",
 *     Status: "STARTING" || "RUNNING" || "STOPPING" || "STOPPED" || "SUCCEEDED" || "FAILED" || "TIMEOUT",
 *     StartedBefore: new Date("TIMESTAMP"),
 *     StartedAfter: new Date("TIMESTAMP"),
 *   },
 *   Sort: { // TaskRunSortCriteria
 *     Column: "TASK_RUN_TYPE" || "STATUS" || "STARTED", // required
 *     SortDirection: "DESCENDING" || "ASCENDING", // required
 *   },
 * };
 * const command = new GetMLTaskRunsCommand(input);
 * const response = await client.send(command);
 * // { // GetMLTaskRunsResponse
 * //   TaskRuns: [ // TaskRunList
 * //     { // TaskRun
 * //       TransformId: "STRING_VALUE",
 * //       TaskRunId: "STRING_VALUE",
 * //       Status: "STARTING" || "RUNNING" || "STOPPING" || "STOPPED" || "SUCCEEDED" || "FAILED" || "TIMEOUT",
 * //       LogGroupName: "STRING_VALUE",
 * //       Properties: { // TaskRunProperties
 * //         TaskType: "EVALUATION" || "LABELING_SET_GENERATION" || "IMPORT_LABELS" || "EXPORT_LABELS" || "FIND_MATCHES",
 * //         ImportLabelsTaskRunProperties: { // ImportLabelsTaskRunProperties
 * //           InputS3Path: "STRING_VALUE",
 * //           Replace: true || false,
 * //         },
 * //         ExportLabelsTaskRunProperties: { // ExportLabelsTaskRunProperties
 * //           OutputS3Path: "STRING_VALUE",
 * //         },
 * //         LabelingSetGenerationTaskRunProperties: { // LabelingSetGenerationTaskRunProperties
 * //           OutputS3Path: "STRING_VALUE",
 * //         },
 * //         FindMatchesTaskRunProperties: { // FindMatchesTaskRunProperties
 * //           JobId: "STRING_VALUE",
 * //           JobName: "STRING_VALUE",
 * //           JobRunId: "STRING_VALUE",
 * //         },
 * //       },
 * //       ErrorString: "STRING_VALUE",
 * //       StartedOn: new Date("TIMESTAMP"),
 * //       LastModifiedOn: new Date("TIMESTAMP"),
 * //       CompletedOn: new Date("TIMESTAMP"),
 * //       ExecutionTime: Number("int"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetMLTaskRunsCommandInput - {@link GetMLTaskRunsCommandInput}
 * @returns {@link GetMLTaskRunsCommandOutput}
 * @see {@link GetMLTaskRunsCommandInput} for command's `input` shape.
 * @see {@link GetMLTaskRunsCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 * @public
 */
export class GetMLTaskRunsCommand extends $Command
  .classBuilder<
    GetMLTaskRunsCommandInput,
    GetMLTaskRunsCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGlue", "GetMLTaskRuns", {})
  .n("GlueClient", "GetMLTaskRunsCommand")
  .f(void 0, void 0)
  .ser(se_GetMLTaskRunsCommand)
  .de(de_GetMLTaskRunsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetMLTaskRunsRequest;
      output: GetMLTaskRunsResponse;
    };
    sdk: {
      input: GetMLTaskRunsCommandInput;
      output: GetMLTaskRunsCommandOutput;
    };
  };
}
