// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutJobSuccessResultInput } from "../models/models_0";
import { PutJobSuccessResult$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutJobSuccessResultCommand}.
 */
export interface PutJobSuccessResultCommandInput extends PutJobSuccessResultInput {}
/**
 * @public
 *
 * The output of {@link PutJobSuccessResultCommand}.
 */
export interface PutJobSuccessResultCommandOutput extends __MetadataBearer {}

/**
 * Represents the success of a job as returned to the pipeline by a job worker. Used for custom actions only.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, PutJobSuccessResultCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, PutJobSuccessResultCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * // import type { CodePipelineClientConfig } from "@aws-sdk/client-codepipeline";
 * const config = {}; // type is CodePipelineClientConfig
 * const client = new CodePipelineClient(config);
 * const input = { // PutJobSuccessResultInput
 *   jobId: "STRING_VALUE", // required
 *   currentRevision: { // CurrentRevision
 *     revision: "STRING_VALUE", // required
 *     changeIdentifier: "STRING_VALUE", // required
 *     created: new Date("TIMESTAMP"),
 *     revisionSummary: "STRING_VALUE",
 *   },
 *   continuationToken: "STRING_VALUE",
 *   executionDetails: { // ExecutionDetails
 *     summary: "STRING_VALUE",
 *     externalExecutionId: "STRING_VALUE",
 *     percentComplete: Number("int"),
 *   },
 *   outputVariables: { // OutputVariablesMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new PutJobSuccessResultCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutJobSuccessResultCommandInput - {@link PutJobSuccessResultCommandInput}
 * @returns {@link PutJobSuccessResultCommandOutput}
 * @see {@link PutJobSuccessResultCommandInput} for command's `input` shape.
 * @see {@link PutJobSuccessResultCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for CodePipelineClient's `config` shape.
 *
 * @throws {@link InvalidJobStateException} (client fault)
 *
 * The job state was specified in an invalid format.
 *
 * @throws {@link JobNotFoundException} (client fault)
 *
 * The job was specified in an invalid format or cannot be found.
 *
 * @throws {@link OutputVariablesSizeExceededException} (client fault)
 *
 * Exceeded the total size limit for all variables in the pipeline.
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
export class PutJobSuccessResultCommand extends command<PutJobSuccessResultCommandInput, PutJobSuccessResultCommandOutput>(
  _ep0,
  _mw0,
  "PutJobSuccessResult",
  PutJobSuccessResult$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutJobSuccessResultInput;
      output: {};
    };
    sdk: {
      input: PutJobSuccessResultCommandInput;
      output: PutJobSuccessResultCommandOutput;
    };
  };
}
