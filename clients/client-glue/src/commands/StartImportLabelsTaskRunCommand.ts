// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { StartImportLabelsTaskRunRequest, StartImportLabelsTaskRunResponse } from "../models/models_3";
import { de_StartImportLabelsTaskRunCommand, se_StartImportLabelsTaskRunCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartImportLabelsTaskRunCommand}.
 */
export interface StartImportLabelsTaskRunCommandInput extends StartImportLabelsTaskRunRequest {}
/**
 * @public
 *
 * The output of {@link StartImportLabelsTaskRunCommand}.
 */
export interface StartImportLabelsTaskRunCommandOutput extends StartImportLabelsTaskRunResponse, __MetadataBearer {}

/**
 * <p>Enables you to provide additional labels (examples of truth) to be used to teach the
 *       machine learning transform and improve its quality. This API operation is generally used as
 *       part of the active learning workflow that starts with the
 *         <code>StartMLLabelingSetGenerationTaskRun</code> call and that ultimately results in
 *       improving the quality of your machine learning transform. </p>
 *          <p>After the <code>StartMLLabelingSetGenerationTaskRun</code> finishes, Glue machine learning
 *       will have generated a series of questions for humans to answer. (Answering these questions is
 *       often called 'labeling' in the machine learning workflows). In the case of the
 *         <code>FindMatches</code> transform, these questions are of the form, “What is the correct
 *       way to group these rows together into groups composed entirely of matching records?” After the
 *       labeling process is finished, users upload their answers/labels with a call to
 *         <code>StartImportLabelsTaskRun</code>. After <code>StartImportLabelsTaskRun</code> finishes,
 *       all future runs of the machine learning transform use the new and improved labels and perform
 *       a higher-quality transformation.</p>
 *          <p>By default, <code>StartMLLabelingSetGenerationTaskRun</code> continually learns from and
 *       combines all labels that you upload unless you set <code>Replace</code> to true. If you set
 *         <code>Replace</code> to true, <code>StartImportLabelsTaskRun</code> deletes and forgets all
 *       previously uploaded labels and learns only from the exact set that you upload. Replacing
 *       labels can be helpful if you realize that you previously uploaded incorrect labels, and you
 *       believe that they are having a negative effect on your transform quality.</p>
 *          <p>You can check on the status of your task run by calling the <code>GetMLTaskRun</code>
 *       operation. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, StartImportLabelsTaskRunCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, StartImportLabelsTaskRunCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // StartImportLabelsTaskRunRequest
 *   TransformId: "STRING_VALUE", // required
 *   InputS3Path: "STRING_VALUE", // required
 *   ReplaceAllLabels: true || false,
 * };
 * const command = new StartImportLabelsTaskRunCommand(input);
 * const response = await client.send(command);
 * // { // StartImportLabelsTaskRunResponse
 * //   TaskRunId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartImportLabelsTaskRunCommandInput - {@link StartImportLabelsTaskRunCommandInput}
 * @returns {@link StartImportLabelsTaskRunCommandOutput}
 * @see {@link StartImportLabelsTaskRunCommandInput} for command's `input` shape.
 * @see {@link StartImportLabelsTaskRunCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNumberLimitExceededException} (client fault)
 *  <p>A resource numerical limit was exceeded.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 * @public
 */
export class StartImportLabelsTaskRunCommand extends $Command
  .classBuilder<
    StartImportLabelsTaskRunCommandInput,
    StartImportLabelsTaskRunCommandOutput,
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
  .s("AWSGlue", "StartImportLabelsTaskRun", {})
  .n("GlueClient", "StartImportLabelsTaskRunCommand")
  .f(void 0, void 0)
  .ser(se_StartImportLabelsTaskRunCommand)
  .de(de_StartImportLabelsTaskRunCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartImportLabelsTaskRunRequest;
      output: StartImportLabelsTaskRunResponse;
    };
    sdk: {
      input: StartImportLabelsTaskRunCommandInput;
      output: StartImportLabelsTaskRunCommandOutput;
    };
  };
}
