// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartExecutionInput, StartExecutionOutput } from "../models/models_0";
import { StartExecution$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartExecutionCommand}.
 */
export interface StartExecutionCommandInput extends StartExecutionInput {}
/**
 * @public
 *
 * The output of {@link StartExecutionCommand}.
 */
export interface StartExecutionCommandOutput extends StartExecutionOutput, __MetadataBearer {}

/**
 * Starts a state machine execution.
 *
 * A qualified state machine ARN can either refer to a *Distributed Map state* defined within a state machine, a version ARN, or an alias ARN.
 *
 * The following are some examples of qualified and unqualified state machine ARNs:
 *
 * - The following qualified state machine ARN refers to a *Distributed Map state* with a label `mapStateLabel` in a state machine named `myStateMachine`.
 *
 *   `arn:partition:states:region:account-id:stateMachine:myStateMachine/mapStateLabel`
 *
 *   > **Note:** If you provide a qualified state machine ARN that refers to a *Distributed Map state*, the request fails with `ValidationException`.
 * - The following qualified state machine ARN refers to an alias named `PROD`.
 *
 *   `arn:<partition>:states:<region>:<account-id>:stateMachine:<myStateMachine:PROD>`
 *
 *   > **Note:** If you provide a qualified state machine ARN that refers to a version ARN or an alias ARN, the request starts execution for that version or alias.
 * - The following unqualified state machine ARN refers to a state machine named `myStateMachine`.
 *
 *   `arn:<partition>:states:<region>:<account-id>:stateMachine:<myStateMachine>`
 *
 * If you start an execution with an unqualified state machine ARN, Step Functions uses the latest revision of the state machine for the execution.
 *
 * To start executions of a state machine [version](https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-version.html), call `StartExecution` and provide the version ARN or the ARN of an [alias](https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-alias.html) that points to the version.
 *
 * > **Note:**
 * >
 * > `StartExecution` is idempotent for `STANDARD` workflows. For a `STANDARD` workflow, if you call `StartExecution` with the same name and input as a running execution, the call succeeds and return the same response as the original request. If the execution is closed or if the input is different, it returns a `400 ExecutionAlreadyExists` error. You can reuse the name 90 days after it closes.
 * >
 * > `StartExecution` isn't idempotent for `EXPRESS` workflows.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SFNClient, StartExecutionCommand } from "@aws-sdk/client-sfn"; // ES Modules import
 * // const { SFNClient, StartExecutionCommand } = require("@aws-sdk/client-sfn"); // CommonJS import
 * // import type { SFNClientConfig } from "@aws-sdk/client-sfn";
 * const config = {}; // type is SFNClientConfig
 * const client = new SFNClient(config);
 * const input = { // StartExecutionInput
 *   stateMachineArn: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   input: "STRING_VALUE",
 *   traceHeader: "STRING_VALUE",
 * };
 * const command = new StartExecutionCommand(input);
 * const response = await client.send(command);
 * // { // StartExecutionOutput
 * //   executionArn: "STRING_VALUE", // required
 * //   startDate: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param StartExecutionCommandInput - {@link StartExecutionCommandInput}
 * @returns {@link StartExecutionCommandOutput}
 * @see {@link StartExecutionCommandInput} for command's `input` shape.
 * @see {@link StartExecutionCommandOutput} for command's `response` shape.
 * @see {@link SFNClientResolvedConfig | config} for SFNClient's `config` shape.
 *
 * @throws {@link ExecutionAlreadyExists} (client fault)
 *
 * The execution has the same `name` as another execution (but a different `input`).
 *
 * > **Note:** Executions with the same `name` and `input` are considered idempotent.
 *
 * @throws {@link ExecutionLimitExceeded} (client fault)
 *
 * The maximum number of running executions has been reached. Running executions must end or be stopped before a new execution can be started.
 *
 * @throws {@link InvalidArn} (client fault)
 *
 * The provided Amazon Resource Name (ARN) is not valid.
 *
 * @throws {@link InvalidExecutionInput} (client fault)
 *
 * The provided JSON input data is not valid.
 *
 * @throws {@link InvalidName} (client fault)
 *
 * The provided name is not valid.
 *
 * @throws {@link KmsAccessDeniedException} (client fault)
 *
 * Either your KMS key policy or API caller does not have the required permissions.
 *
 * @throws {@link KmsInvalidStateException} (client fault)
 *
 * The KMS key is not in valid state, for example: Disabled or Deleted.
 *
 * @throws {@link KmsThrottlingException} (client fault)
 *
 * Received when KMS returns `ThrottlingException` for a KMS call that Step Functions makes on behalf of the caller.
 *
 * @throws {@link StateMachineDeleting} (client fault)
 *
 * The specified state machine is being deleted.
 *
 * @throws {@link StateMachineDoesNotExist} (client fault)
 *
 * The specified state machine does not exist.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input does not satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link SFNServiceException}
 *
 * Base exception class for all service exceptions from SFN service.
 *
 * @public
 */
export class StartExecutionCommand extends command<StartExecutionCommandInput, StartExecutionCommandOutput>(
  _ep0,
  _mw0,
  "StartExecution",
  StartExecution$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartExecutionInput;
      output: StartExecutionOutput;
    };
    sdk: {
      input: StartExecutionCommandInput;
      output: StartExecutionCommandOutput;
    };
  };
}
