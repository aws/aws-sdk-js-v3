// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CancelMLTaskRunRequest, CancelMLTaskRunResponse } from "../models/models_0";
import { CancelMLTaskRun$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CancelMLTaskRunCommand}.
 */
export interface CancelMLTaskRunCommandInput extends CancelMLTaskRunRequest {}
/**
 * @public
 *
 * The output of {@link CancelMLTaskRunCommand}.
 */
export interface CancelMLTaskRunCommandOutput extends CancelMLTaskRunResponse, __MetadataBearer {}

/**
 * Cancels (stops) a task run. Machine learning task runs are asynchronous tasks that Glue runs on your behalf as part of various machine learning workflows. You can cancel a machine learning task run at any time by calling `CancelMLTaskRun` with a task run's parent transform's `TransformID` and the task run's `TaskRunId`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, CancelMLTaskRunCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, CancelMLTaskRunCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // CancelMLTaskRunRequest
 *   TransformId: "STRING_VALUE", // required
 *   TaskRunId: "STRING_VALUE", // required
 * };
 * const command = new CancelMLTaskRunCommand(input);
 * const response = await client.send(command);
 * // { // CancelMLTaskRunResponse
 * //   TransformId: "STRING_VALUE",
 * //   TaskRunId: "STRING_VALUE",
 * //   Status: "STARTING" || "RUNNING" || "STOPPING" || "STOPPED" || "SUCCEEDED" || "FAILED" || "TIMEOUT",
 * // };
 *
 * ```
 *
 * @param CancelMLTaskRunCommandInput - {@link CancelMLTaskRunCommandInput}
 * @returns {@link CancelMLTaskRunCommandOutput}
 * @see {@link CancelMLTaskRunCommandInput} for command's `input` shape.
 * @see {@link CancelMLTaskRunCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *
 * A specified entity does not exist
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * An internal service error occurred.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * The input provided was not valid.
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *
 * The operation timed out.
 *
 * @throws {@link GlueServiceException}
 *
 * Base exception class for all service exceptions from Glue service.
 *
 * @public
 */
export class CancelMLTaskRunCommand extends command<CancelMLTaskRunCommandInput, CancelMLTaskRunCommandOutput>(
  _ep0,
  _mw0,
  "CancelMLTaskRun",
  CancelMLTaskRun$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelMLTaskRunRequest;
      output: CancelMLTaskRunResponse;
    };
    sdk: {
      input: CancelMLTaskRunCommandInput;
      output: CancelMLTaskRunCommandOutput;
    };
  };
}
