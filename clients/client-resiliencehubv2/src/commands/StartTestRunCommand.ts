// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartTestRunRequest, StartTestRunResponse } from "../models/models_0";
import { StartTestRun$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartTestRunCommand}.
 */
export interface StartTestRunCommandInput extends StartTestRunRequest {}
/**
 * @public
 *
 * The output of {@link StartTestRunCommand}.
 */
export interface StartTestRunCommandOutput extends StartTestRunResponse, __MetadataBearer {}

/**
 * <p>Starts a run of a test. Each run scopes to the current resources in the service and produces a pass or fail outcome.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Resiliencehubv2Client, StartTestRunCommand } from "@aws-sdk/client-resiliencehubv2"; // ES Modules import
 * // const { Resiliencehubv2Client, StartTestRunCommand } = require("@aws-sdk/client-resiliencehubv2"); // CommonJS import
 * // import type { Resiliencehubv2ClientConfig } from "@aws-sdk/client-resiliencehubv2";
 * const config = {}; // type is Resiliencehubv2ClientConfig
 * const client = new Resiliencehubv2Client(config);
 * const input = { // StartTestRunRequest
 *   testId: "STRING_VALUE", // required
 *   serviceArn: "STRING_VALUE", // required
 * };
 * const command = new StartTestRunCommand(input);
 * const response = await client.send(command);
 * // { // StartTestRunResponse
 * //   testRunId: "STRING_VALUE", // required
 * //   status: "INITIALIZING" || "RUNNING" || "STOPPING" || "PASSED" || "FAILED" || "STOPPED" || "ERROR", // required
 * //   experimentArns: [ // ExperimentArnList // required
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param StartTestRunCommandInput - {@link StartTestRunCommandInput}
 * @returns {@link StartTestRunCommandOutput}
 * @see {@link StartTestRunCommandInput} for command's `input` shape.
 * @see {@link StartTestRunCommandOutput} for command's `response` shape.
 * @see {@link Resiliencehubv2ClientResolvedConfig | config} for Resiliencehubv2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access denied — caller lacks required permissions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Conflict — resource already exists.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal service error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validation error — invalid input parameters.</p>
 *
 * @throws {@link Resiliencehubv2ServiceException}
 * <p>Base exception class for all service exceptions from Resiliencehubv2 service.</p>
 *
 *
 * @public
 */
export class StartTestRunCommand extends command<StartTestRunCommandInput, StartTestRunCommandOutput>(
  _ep0,
  _mw0,
  "StartTestRun",
  StartTestRun$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartTestRunRequest;
      output: StartTestRunResponse;
    };
    sdk: {
      input: StartTestRunCommandInput;
      output: StartTestRunCommandOutput;
    };
  };
}
