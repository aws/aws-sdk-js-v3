// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { StartJobRunRequest, StartJobRunResponse } from "../models/models_3";
import { StartJobRun } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartJobRunCommand}.
 */
export interface StartJobRunCommandInput extends StartJobRunRequest {}
/**
 * @public
 *
 * The output of {@link StartJobRunCommand}.
 */
export interface StartJobRunCommandOutput extends StartJobRunResponse, __MetadataBearer {}

/**
 * <p>Starts a job run using a job definition.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, StartJobRunCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, StartJobRunCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // StartJobRunRequest
 *   JobName: "STRING_VALUE", // required
 *   JobRunQueuingEnabled: true || false,
 *   JobRunId: "STRING_VALUE",
 *   Arguments: { // GenericMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   AllocatedCapacity: Number("int"),
 *   Timeout: Number("int"),
 *   MaxCapacity: Number("double"),
 *   SecurityConfiguration: "STRING_VALUE",
 *   NotificationProperty: { // NotificationProperty
 *     NotifyDelayAfter: Number("int"),
 *   },
 *   WorkerType: "Standard" || "G.1X" || "G.2X" || "G.025X" || "G.4X" || "G.8X" || "Z.2X",
 *   NumberOfWorkers: Number("int"),
 *   ExecutionClass: "FLEX" || "STANDARD",
 *   ExecutionRoleSessionPolicy: "STRING_VALUE",
 * };
 * const command = new StartJobRunCommand(input);
 * const response = await client.send(command);
 * // { // StartJobRunResponse
 * //   JobRunId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartJobRunCommandInput - {@link StartJobRunCommandInput}
 * @returns {@link StartJobRunCommandOutput}
 * @see {@link StartJobRunCommandInput} for command's `input` shape.
 * @see {@link StartJobRunCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNumberLimitExceededException} (client fault)
 *  <p>A resource numerical limit was exceeded.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class StartJobRunCommand extends $Command
  .classBuilder<
    StartJobRunCommandInput,
    StartJobRunCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "StartJobRun", {})
  .n("GlueClient", "StartJobRunCommand")
  .sc(StartJobRun)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartJobRunRequest;
      output: StartJobRunResponse;
    };
    sdk: {
      input: StartJobRunCommandInput;
      output: StartJobRunCommandOutput;
    };
  };
}
