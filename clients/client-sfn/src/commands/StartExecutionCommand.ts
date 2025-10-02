// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { StartExecutionInput, StartExecutionInputFilterSensitiveLog, StartExecutionOutput } from "../models/models_0";
import { de_StartExecutionCommand, se_StartExecutionCommand } from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, SFNClientResolvedConfig } from "../SFNClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Starts a state machine execution.</p>
 *          <p>A qualified state machine ARN can either refer to a <i>Distributed Map state</i> defined within a state machine, a version ARN, or an alias ARN.</p>
 *          <p>The following are some examples of qualified and unqualified state machine ARNs:</p>
 *          <ul>
 *             <li>
 *                <p>The following qualified state machine ARN refers to a <i>Distributed Map state</i> with a label <code>mapStateLabel</code> in a state machine named <code>myStateMachine</code>.</p>
 *                <p>
 *                   <code>arn:partition:states:region:account-id:stateMachine:myStateMachine/mapStateLabel</code>
 *                </p>
 *                <note>
 *                   <p>If you provide a qualified state machine ARN that refers to a <i>Distributed Map state</i>, the request fails with <code>ValidationException</code>.</p>
 *                </note>
 *             </li>
 *             <li>
 *                <p>The following qualified state machine ARN refers to an alias named <code>PROD</code>.</p>
 *                <p>
 *                   <code>arn:<partition>:states:<region>:<account-id>:stateMachine:<myStateMachine:PROD></code>
 *                </p>
 *                <note>
 *                   <p>If you provide a qualified state machine ARN that refers to a version ARN or an alias ARN, the request starts execution for that version or alias.</p>
 *                </note>
 *             </li>
 *             <li>
 *                <p>The following unqualified state machine ARN refers to a state machine named <code>myStateMachine</code>.</p>
 *                <p>
 *                   <code>arn:<partition>:states:<region>:<account-id>:stateMachine:<myStateMachine></code>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>If you start an execution with an unqualified state machine ARN, Step Functions uses the latest revision of the state machine for the execution.</p>
 *          <p>To start executions of a state machine <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-version.html">version</a>, call
 *         <code>StartExecution</code> and provide the version ARN or the ARN of an <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-alias.html">alias</a> that points to the version.</p>
 *          <note>
 *             <p>
 *                <code>StartExecution</code> is idempotent for <code>STANDARD</code> workflows. For a
 *           <code>STANDARD</code> workflow, if you call <code>StartExecution</code> with the same name
 *         and input as a running execution, the call succeeds and return the same response as the
 *         original request. If the execution is closed or if the input is different, it returns a
 *           <code>400 ExecutionAlreadyExists</code> error. You can reuse names after 90 days. </p>
 *             <p>
 *                <code>StartExecution</code> isn't idempotent for <code>EXPRESS</code> workflows. </p>
 *          </note>
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
 *  <p>The execution has the same <code>name</code> as another execution (but a different
 *         <code>input</code>).</p>
 *          <note>
 *             <p>Executions with the same <code>name</code> and <code>input</code> are considered
 *         idempotent.</p>
 *          </note>
 *
 * @throws {@link ExecutionLimitExceeded} (client fault)
 *  <p>The maximum number of running executions has been reached. Running executions must end or
 *       be stopped before a new execution can be started.</p>
 *
 * @throws {@link InvalidArn} (client fault)
 *  <p>The provided Amazon Resource Name (ARN) is not valid.</p>
 *
 * @throws {@link InvalidExecutionInput} (client fault)
 *  <p>The provided JSON input data is not valid.</p>
 *
 * @throws {@link InvalidName} (client fault)
 *  <p>The provided name is not valid.</p>
 *
 * @throws {@link KmsAccessDeniedException} (client fault)
 *  <p>Either your KMS key policy or API caller does not have the required permissions.</p>
 *
 * @throws {@link KmsInvalidStateException} (client fault)
 *  <p>The KMS key is not in valid state, for example: Disabled or Deleted.</p>
 *
 * @throws {@link KmsThrottlingException} (client fault)
 *  <p>Received when KMS returns <code>ThrottlingException</code> for a KMS call that Step Functions makes on behalf of the caller.</p>
 *
 * @throws {@link StateMachineDeleting} (client fault)
 *  <p>The specified state machine is being deleted.</p>
 *
 * @throws {@link StateMachineDoesNotExist} (client fault)
 *  <p>The specified state machine does not exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input does not satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link SFNServiceException}
 * <p>Base exception class for all service exceptions from SFN service.</p>
 *
 *
 * @public
 */
export class StartExecutionCommand extends $Command
  .classBuilder<
    StartExecutionCommandInput,
    StartExecutionCommandOutput,
    SFNClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SFNClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSStepFunctions", "StartExecution", {})
  .n("SFNClient", "StartExecutionCommand")
  .f(StartExecutionInputFilterSensitiveLog, void 0)
  .ser(se_StartExecutionCommand)
  .de(de_StartExecutionCommand)
  .build() {
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
