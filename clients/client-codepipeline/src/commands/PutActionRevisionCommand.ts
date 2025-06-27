// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { PutActionRevisionInput, PutActionRevisionOutput } from "../models/models_0";
import { de_PutActionRevisionCommand, se_PutActionRevisionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutActionRevisionCommand}.
 */
export interface PutActionRevisionCommandInput extends PutActionRevisionInput {}
/**
 * @public
 *
 * The output of {@link PutActionRevisionCommand}.
 */
export interface PutActionRevisionCommandOutput extends PutActionRevisionOutput, __MetadataBearer {}

/**
 * <p>Provides information to CodePipeline about new revisions to a
 *             source.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, PutActionRevisionCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, PutActionRevisionCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const input = { // PutActionRevisionInput
 *   pipelineName: "STRING_VALUE", // required
 *   stageName: "STRING_VALUE", // required
 *   actionName: "STRING_VALUE", // required
 *   actionRevision: { // ActionRevision
 *     revisionId: "STRING_VALUE", // required
 *     revisionChangeId: "STRING_VALUE", // required
 *     created: new Date("TIMESTAMP"), // required
 *   },
 * };
 * const command = new PutActionRevisionCommand(input);
 * const response = await client.send(command);
 * // { // PutActionRevisionOutput
 * //   newRevision: true || false,
 * //   pipelineExecutionId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PutActionRevisionCommandInput - {@link PutActionRevisionCommandInput}
 * @returns {@link PutActionRevisionCommandOutput}
 * @see {@link PutActionRevisionCommandInput} for command's `input` shape.
 * @see {@link PutActionRevisionCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for CodePipelineClient's `config` shape.
 *
 * @throws {@link ActionNotFoundException} (client fault)
 *  <p>The specified action cannot be found.</p>
 *
 * @throws {@link ConcurrentPipelineExecutionsLimitExceededException} (client fault)
 *  <p>The pipeline has reached the limit for concurrent pipeline executions.</p>
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
export class PutActionRevisionCommand extends $Command
  .classBuilder<
    PutActionRevisionCommandInput,
    PutActionRevisionCommandOutput,
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
  .s("CodePipeline_20150709", "PutActionRevision", {})
  .n("CodePipelineClient", "PutActionRevisionCommand")
  .f(void 0, void 0)
  .ser(se_PutActionRevisionCommand)
  .de(de_PutActionRevisionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutActionRevisionInput;
      output: PutActionRevisionOutput;
    };
    sdk: {
      input: PutActionRevisionCommandInput;
      output: PutActionRevisionCommandOutput;
    };
  };
}
