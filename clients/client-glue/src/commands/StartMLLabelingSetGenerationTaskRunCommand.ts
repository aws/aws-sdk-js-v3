// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import {
  StartMLLabelingSetGenerationTaskRunRequest,
  StartMLLabelingSetGenerationTaskRunResponse,
} from "../models/models_3";
import { StartMLLabelingSetGenerationTaskRun } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartMLLabelingSetGenerationTaskRunCommand}.
 */
export interface StartMLLabelingSetGenerationTaskRunCommandInput extends StartMLLabelingSetGenerationTaskRunRequest {}
/**
 * @public
 *
 * The output of {@link StartMLLabelingSetGenerationTaskRunCommand}.
 */
export interface StartMLLabelingSetGenerationTaskRunCommandOutput
  extends StartMLLabelingSetGenerationTaskRunResponse,
    __MetadataBearer {}

/**
 * <p>Starts the active learning workflow for your machine learning transform to improve the
 *       transform's quality by generating label sets and adding labels.</p>
 *          <p>When the <code>StartMLLabelingSetGenerationTaskRun</code> finishes, Glue will have
 *       generated a "labeling set" or a set of questions for humans to answer.</p>
 *          <p>In the case of the <code>FindMatches</code> transform, these questions are of the form,
 *       “What is the correct way to group these rows together into groups composed entirely of
 *       matching records?” </p>
 *          <p>After the labeling process is finished, you can upload your labels with a call to
 *         <code>StartImportLabelsTaskRun</code>. After <code>StartImportLabelsTaskRun</code> finishes,
 *       all future runs of the machine learning transform will use the new and improved labels and
 *       perform a higher-quality transformation.</p>
 *          <p>Note: The role used to write the generated labeling set to the <code>OutputS3Path</code> is the role
 *           associated with the Machine Learning Transform, specified in the <code>CreateMLTransform</code> API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, StartMLLabelingSetGenerationTaskRunCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, StartMLLabelingSetGenerationTaskRunCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // StartMLLabelingSetGenerationTaskRunRequest
 *   TransformId: "STRING_VALUE", // required
 *   OutputS3Path: "STRING_VALUE", // required
 * };
 * const command = new StartMLLabelingSetGenerationTaskRunCommand(input);
 * const response = await client.send(command);
 * // { // StartMLLabelingSetGenerationTaskRunResponse
 * //   TaskRunId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartMLLabelingSetGenerationTaskRunCommandInput - {@link StartMLLabelingSetGenerationTaskRunCommandInput}
 * @returns {@link StartMLLabelingSetGenerationTaskRunCommandOutput}
 * @see {@link StartMLLabelingSetGenerationTaskRunCommandInput} for command's `input` shape.
 * @see {@link StartMLLabelingSetGenerationTaskRunCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link ConcurrentRunsExceededException} (client fault)
 *  <p>Too many jobs are being run concurrently.</p>
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
export class StartMLLabelingSetGenerationTaskRunCommand extends $Command
  .classBuilder<
    StartMLLabelingSetGenerationTaskRunCommandInput,
    StartMLLabelingSetGenerationTaskRunCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "StartMLLabelingSetGenerationTaskRun", {})
  .n("GlueClient", "StartMLLabelingSetGenerationTaskRunCommand")
  .sc(StartMLLabelingSetGenerationTaskRun)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartMLLabelingSetGenerationTaskRunRequest;
      output: StartMLLabelingSetGenerationTaskRunResponse;
    };
    sdk: {
      input: StartMLLabelingSetGenerationTaskRunCommandInput;
      output: StartMLLabelingSetGenerationTaskRunCommandOutput;
    };
  };
}
