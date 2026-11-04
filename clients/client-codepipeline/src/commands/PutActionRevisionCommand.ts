// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutActionRevisionInput, PutActionRevisionOutput } from "../models/models_0";
import { PutActionRevision$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Provides information to CodePipeline about new revisions to a source.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, PutActionRevisionCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, PutActionRevisionCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * // import type { CodePipelineClientConfig } from "@aws-sdk/client-codepipeline";
 * const config = {}; // type is CodePipelineClientConfig
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
 *
 * The specified action cannot be found.
 *
 * @throws {@link ConcurrentPipelineExecutionsLimitExceededException} (client fault)
 *
 * The pipeline has reached the limit for concurrent pipeline executions.
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
export class PutActionRevisionCommand extends command<PutActionRevisionCommandInput, PutActionRevisionCommandOutput>(
  _ep0,
  _mw0,
  "PutActionRevision",
  PutActionRevision$
) {
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
