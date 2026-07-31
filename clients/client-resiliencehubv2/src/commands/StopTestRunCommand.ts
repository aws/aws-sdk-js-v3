// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StopTestRunRequest, StopTestRunResponse } from "../models/models_0";
import { StopTestRun$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StopTestRunCommand}.
 */
export interface StopTestRunCommandInput extends StopTestRunRequest {}
/**
 * @public
 *
 * The output of {@link StopTestRunCommand}.
 */
export interface StopTestRunCommandOutput extends StopTestRunResponse, __MetadataBearer {}

/**
 * <p>Stops an in-progress test run.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Resiliencehubv2Client, StopTestRunCommand } from "@aws-sdk/client-resiliencehubv2"; // ES Modules import
 * // const { Resiliencehubv2Client, StopTestRunCommand } = require("@aws-sdk/client-resiliencehubv2"); // CommonJS import
 * // import type { Resiliencehubv2ClientConfig } from "@aws-sdk/client-resiliencehubv2";
 * const config = {}; // type is Resiliencehubv2ClientConfig
 * const client = new Resiliencehubv2Client(config);
 * const input = { // StopTestRunRequest
 *   testRunId: "STRING_VALUE", // required
 *   serviceArn: "STRING_VALUE", // required
 * };
 * const command = new StopTestRunCommand(input);
 * const response = await client.send(command);
 * // { // StopTestRunResponse
 * //   testRunId: "STRING_VALUE", // required
 * //   status: "INITIALIZING" || "RUNNING" || "STOPPING" || "PASSED" || "FAILED" || "STOPPED" || "ERROR", // required
 * // };
 *
 * ```
 *
 * @param StopTestRunCommandInput - {@link StopTestRunCommandInput}
 * @returns {@link StopTestRunCommandOutput}
 * @see {@link StopTestRunCommandInput} for command's `input` shape.
 * @see {@link StopTestRunCommandOutput} for command's `response` shape.
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
export class StopTestRunCommand extends command<StopTestRunCommandInput, StopTestRunCommandOutput>(
  _ep0,
  _mw0,
  "StopTestRun",
  StopTestRun$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopTestRunRequest;
      output: StopTestRunResponse;
    };
    sdk: {
      input: StopTestRunCommandInput;
      output: StopTestRunCommandOutput;
    };
  };
}
