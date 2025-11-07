// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { CancelMLTaskRunRequest, CancelMLTaskRunResponse } from "../models/models_1";
import { CancelMLTaskRun } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Cancels (stops) a task run. Machine learning task runs are asynchronous tasks that Glue runs on your behalf as part of various machine learning workflows. You can cancel a
 *       machine learning task run at any time by calling <code>CancelMLTaskRun</code> with a task
 *       run's parent transform's <code>TransformID</code> and the task run's <code>TaskRunId</code>. </p>
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
export class CancelMLTaskRunCommand extends $Command
  .classBuilder<
    CancelMLTaskRunCommandInput,
    CancelMLTaskRunCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "CancelMLTaskRun", {})
  .n("GlueClient", "CancelMLTaskRunCommand")
  .sc(CancelMLTaskRun)
  .build() {
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
