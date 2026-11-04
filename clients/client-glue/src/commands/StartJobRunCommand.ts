// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartJobRunRequest, StartJobRunResponse } from "../models/models_3";
import { StartJobRun$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Starts a job run using a job definition.
 *
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
 *   WorkerType: "Standard" || "G.1X" || "G.2X" || "G.4X" || "G.8X" || "G.025X" || "Z.2X" || "G.12X" || "G.16X" || "R.1X" || "R.2X" || "R.4X" || "R.8X",
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
 *
 * Too many jobs are being run concurrently.
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
 * @throws {@link ResourceNumberLimitExceededException} (client fault)
 *
 * A resource numerical limit was exceeded.
 *
 * @throws {@link GlueServiceException}
 *
 * Base exception class for all service exceptions from Glue service.
 *
 * @public
 */
export class StartJobRunCommand extends command<StartJobRunCommandInput, StartJobRunCommandOutput>(
  _ep0,
  _mw0,
  "StartJobRun",
  StartJobRun$
) {
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
