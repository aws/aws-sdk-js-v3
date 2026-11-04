// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartPipelineExecutionInput, StartPipelineExecutionOutput } from "../models/models_0";
import { StartPipelineExecution$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartPipelineExecutionCommand}.
 */
export interface StartPipelineExecutionCommandInput extends StartPipelineExecutionInput {}
/**
 * @public
 *
 * The output of {@link StartPipelineExecutionCommand}.
 */
export interface StartPipelineExecutionCommandOutput extends StartPipelineExecutionOutput, __MetadataBearer {}

/**
 * Starts the specified pipeline. Specifically, it begins processing the latest commit to the source location specified as part of the pipeline.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, StartPipelineExecutionCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, StartPipelineExecutionCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * // import type { CodePipelineClientConfig } from "@aws-sdk/client-codepipeline";
 * const config = {}; // type is CodePipelineClientConfig
 * const client = new CodePipelineClient(config);
 * const input = { // StartPipelineExecutionInput
 *   name: "STRING_VALUE", // required
 *   variables: [ // PipelineVariableList
 *     { // PipelineVariable
 *       name: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 *   clientRequestToken: "STRING_VALUE",
 *   sourceRevisions: [ // SourceRevisionOverrideList
 *     { // SourceRevisionOverride
 *       actionName: "STRING_VALUE", // required
 *       revisionType: "COMMIT_ID" || "IMAGE_DIGEST" || "S3_OBJECT_VERSION_ID" || "S3_OBJECT_KEY", // required
 *       revisionValue: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new StartPipelineExecutionCommand(input);
 * const response = await client.send(command);
 * // { // StartPipelineExecutionOutput
 * //   pipelineExecutionId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartPipelineExecutionCommandInput - {@link StartPipelineExecutionCommandInput}
 * @returns {@link StartPipelineExecutionCommandOutput}
 * @see {@link StartPipelineExecutionCommandInput} for command's `input` shape.
 * @see {@link StartPipelineExecutionCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for CodePipelineClient's `config` shape.
 *
 * @throws {@link ConcurrentPipelineExecutionsLimitExceededException} (client fault)
 *
 * The pipeline has reached the limit for concurrent pipeline executions.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Your request cannot be handled because the pipeline is busy handling ongoing activities. Try again later.
 *
 * @throws {@link PipelineNotFoundException} (client fault)
 *
 * The pipeline was specified in an invalid format or cannot be found.
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
export class StartPipelineExecutionCommand extends command<StartPipelineExecutionCommandInput, StartPipelineExecutionCommandOutput>(
  _ep0,
  _mw0,
  "StartPipelineExecution",
  StartPipelineExecution$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartPipelineExecutionInput;
      output: StartPipelineExecutionOutput;
    };
    sdk: {
      input: StartPipelineExecutionCommandInput;
      output: StartPipelineExecutionCommandOutput;
    };
  };
}
