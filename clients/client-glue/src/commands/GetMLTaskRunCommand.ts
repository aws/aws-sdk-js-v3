// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import type { GetMLTaskRunRequest, GetMLTaskRunResponse } from "../models/models_1";
import { GetMLTaskRun$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetMLTaskRunCommand}.
 */
export interface GetMLTaskRunCommandInput extends GetMLTaskRunRequest {}
/**
 * @public
 *
 * The output of {@link GetMLTaskRunCommand}.
 */
export interface GetMLTaskRunCommandOutput extends GetMLTaskRunResponse, __MetadataBearer {}

/**
 * <p>Gets details for a specific task run on a machine learning transform. Machine learning
 *       task runs are asynchronous tasks that Glue runs on your behalf as part of various machine
 *       learning workflows. You can check the stats of any task run by calling
 *         <code>GetMLTaskRun</code> with the <code>TaskRunID</code> and its parent transform's
 *         <code>TransformID</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetMLTaskRunCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetMLTaskRunCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // GetMLTaskRunRequest
 *   TransformId: "STRING_VALUE", // required
 *   TaskRunId: "STRING_VALUE", // required
 * };
 * const command = new GetMLTaskRunCommand(input);
 * const response = await client.send(command);
 * // { // GetMLTaskRunResponse
 * //   TransformId: "STRING_VALUE",
 * //   TaskRunId: "STRING_VALUE",
 * //   Status: "STARTING" || "RUNNING" || "STOPPING" || "STOPPED" || "SUCCEEDED" || "FAILED" || "TIMEOUT",
 * //   LogGroupName: "STRING_VALUE",
 * //   Properties: { // TaskRunProperties
 * //     TaskType: "EVALUATION" || "LABELING_SET_GENERATION" || "IMPORT_LABELS" || "EXPORT_LABELS" || "FIND_MATCHES",
 * //     ImportLabelsTaskRunProperties: { // ImportLabelsTaskRunProperties
 * //       InputS3Path: "STRING_VALUE",
 * //       Replace: true || false,
 * //     },
 * //     ExportLabelsTaskRunProperties: { // ExportLabelsTaskRunProperties
 * //       OutputS3Path: "STRING_VALUE",
 * //     },
 * //     LabelingSetGenerationTaskRunProperties: { // LabelingSetGenerationTaskRunProperties
 * //       OutputS3Path: "STRING_VALUE",
 * //     },
 * //     FindMatchesTaskRunProperties: { // FindMatchesTaskRunProperties
 * //       JobId: "STRING_VALUE",
 * //       JobName: "STRING_VALUE",
 * //       JobRunId: "STRING_VALUE",
 * //     },
 * //   },
 * //   ErrorString: "STRING_VALUE",
 * //   StartedOn: new Date("TIMESTAMP"),
 * //   LastModifiedOn: new Date("TIMESTAMP"),
 * //   CompletedOn: new Date("TIMESTAMP"),
 * //   ExecutionTime: Number("int"),
 * // };
 *
 * ```
 *
 * @param GetMLTaskRunCommandInput - {@link GetMLTaskRunCommandInput}
 * @returns {@link GetMLTaskRunCommandOutput}
 * @see {@link GetMLTaskRunCommandInput} for command's `input` shape.
 * @see {@link GetMLTaskRunCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class GetMLTaskRunCommand extends $Command
  .classBuilder<
    GetMLTaskRunCommandInput,
    GetMLTaskRunCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "GetMLTaskRun", {})
  .n("GlueClient", "GetMLTaskRunCommand")
  .sc(GetMLTaskRun$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetMLTaskRunRequest;
      output: GetMLTaskRunResponse;
    };
    sdk: {
      input: GetMLTaskRunCommandInput;
      output: GetMLTaskRunCommandOutput;
    };
  };
}
