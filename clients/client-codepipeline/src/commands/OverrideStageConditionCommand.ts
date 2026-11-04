// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { OverrideStageConditionInput } from "../models/models_0";
import { OverrideStageCondition$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Used to override a stage condition. For more information about conditions, see [Stage conditions](https://docs.aws.amazon.com/codepipeline/latest/userguide/stage-conditions.html) and [How do stage conditions work?](https://docs.aws.amazon.com/codepipeline/latest/userguide/concepts-how-it-works-conditions.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, OverrideStageConditionCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, OverrideStageConditionCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * // import type { CodePipelineClientConfig } from "@aws-sdk/client-codepipeline";
 * const config = {}; // type is CodePipelineClientConfig
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
 *
 * The pipeline has reached the limit for concurrent pipeline executions.
 *
 * @throws {@link ConditionNotOverridableException} (client fault)
 *
 * Unable to override because the condition does not allow overrides.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Your request cannot be handled because the pipeline is busy handling ongoing activities. Try again later.
 *
 * @throws {@link NotLatestPipelineExecutionException} (client fault)
 *
 * The stage has failed in a later run of the pipeline and the `pipelineExecutionId` associated with the request is out of date.
 *
 * @throws {@link PipelineNotFoundException} (client fault)
 *
 * The pipeline was specified in an invalid format or cannot be found.
 *
 * @throws {@link StageNotFoundException} (client fault)
 *
 * The stage was specified in an invalid format or cannot be found.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The validation was specified in an invalid format.
 *
 * @throws {@link CodePipelineServiceException}
 *
 * Base exception class for all service exceptions from CodePipeline service.
 *
 * @public
 */
export class OverrideStageConditionCommand extends command<OverrideStageConditionCommandInput, OverrideStageConditionCommandOutput>(
  _ep0,
  _mw0,
  "OverrideStageCondition",
  OverrideStageCondition$
) {
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
