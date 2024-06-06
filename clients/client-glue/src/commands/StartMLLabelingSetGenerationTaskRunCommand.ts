// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import {
  StartMLLabelingSetGenerationTaskRunRequest,
  StartMLLabelingSetGenerationTaskRunResponse,
} from "../models/models_2";
import {
  de_StartMLLabelingSetGenerationTaskRunCommand,
  se_StartMLLabelingSetGenerationTaskRunCommand,
} from "../protocols/Aws_json1_1";

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
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, StartMLLabelingSetGenerationTaskRunCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, StartMLLabelingSetGenerationTaskRunCommand } = require("@aws-sdk/client-glue"); // CommonJS import
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
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGlue", "StartMLLabelingSetGenerationTaskRun", {})
  .n("GlueClient", "StartMLLabelingSetGenerationTaskRunCommand")
  .f(void 0, void 0)
  .ser(se_StartMLLabelingSetGenerationTaskRunCommand)
  .de(de_StartMLLabelingSetGenerationTaskRunCommand)
  .build() {}
