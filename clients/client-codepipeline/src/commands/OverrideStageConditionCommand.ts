// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { OverrideStageConditionInput } from "../models/models_0";
import { de_OverrideStageConditionCommand, se_OverrideStageConditionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link OverrideStageConditionCommand}.
 */
export interface OverrideStageConditionCommandInput extends OverrideStageConditionInput {}
/**
 * @public
 *
 * The output of {@link OverrideStageConditionCommand}.
 */
export interface OverrideStageConditionCommandOutput extends __MetadataBearer {}

/**
 * <p>Used to override a stage condition. For more information about conditions, see <a href="https://docs.aws.amazon.com/codepipeline/latest/userguide/stage-conditions.html">Stage
 *                 conditions</a> and <a href="https://docs.aws.amazon.com/codepipeline/latest/userguide/concepts-how-it-works-conditions.html">How do
 *                 stage conditions work?</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, OverrideStageConditionCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, OverrideStageConditionCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const input = { // OverrideStageConditionInput
 *   pipelineName: "STRING_VALUE", // required
 *   stageName: "STRING_VALUE", // required
 *   pipelineExecutionId: "STRING_VALUE", // required
 *   conditionType: "BEFORE_ENTRY" || "ON_SUCCESS", // required
 * };
 * const command = new OverrideStageConditionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param OverrideStageConditionCommandInput - {@link OverrideStageConditionCommandInput}
 * @returns {@link OverrideStageConditionCommandOutput}
 * @see {@link OverrideStageConditionCommandInput} for command's `input` shape.
 * @see {@link OverrideStageConditionCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for CodePipelineClient's `config` shape.
 *
 * @throws {@link ConcurrentPipelineExecutionsLimitExceededException} (client fault)
 *  <p>The pipeline has reached the limit for concurrent pipeline executions.</p>
 *
 * @throws {@link ConditionNotOverridableException} (client fault)
 *  <p>Unable to override because the condition does not allow overrides.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Your request cannot be handled because the pipeline is busy handling ongoing
 *             activities. Try again later.</p>
 *
 * @throws {@link NotLatestPipelineExecutionException} (client fault)
 *  <p>The stage has failed in a later run of the pipeline and the
 *                 <code>pipelineExecutionId</code> associated with the request is out of
 *             date.</p>
 *
 * @throws {@link PipelineNotFoundException} (client fault)
 *  <p>The pipeline was specified in an invalid format or cannot be found.</p>
 *
 * @throws {@link StageNotFoundException} (client fault)
 *  <p>The stage was specified in an invalid format or cannot be found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The validation was specified in an invalid format.</p>
 *
 * @throws {@link CodePipelineServiceException}
 * <p>Base exception class for all service exceptions from CodePipeline service.</p>
 *
 *
 * @public
 */
export class OverrideStageConditionCommand extends $Command
  .classBuilder<
    OverrideStageConditionCommandInput,
    OverrideStageConditionCommandOutput,
    CodePipelineClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodePipelineClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CodePipeline_20150709", "OverrideStageCondition", {})
  .n("CodePipelineClient", "OverrideStageConditionCommand")
  .f(void 0, void 0)
  .ser(se_OverrideStageConditionCommand)
  .de(de_OverrideStageConditionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: OverrideStageConditionInput;
      output: {};
    };
    sdk: {
      input: OverrideStageConditionCommandInput;
      output: OverrideStageConditionCommandOutput;
    };
  };
}
