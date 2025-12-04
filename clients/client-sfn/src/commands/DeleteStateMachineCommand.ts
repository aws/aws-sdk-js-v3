// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteStateMachineInput, DeleteStateMachineOutput } from "../models/models_0";
import { DeleteStateMachine } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SFNClientResolvedConfig } from "../SFNClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteStateMachineCommand}.
 */
export interface DeleteStateMachineCommandInput extends DeleteStateMachineInput {}
/**
 * @public
 *
 * The output of {@link DeleteStateMachineCommand}.
 */
export interface DeleteStateMachineCommandOutput extends DeleteStateMachineOutput, __MetadataBearer {}

/**
 * <p>Deletes a state machine. This is an asynchronous operation. It sets the state machine's
 *       status to <code>DELETING</code> and begins the deletion process. A state machine is deleted only when all its executions are completed. On the next state transition, the state machine's executions are terminated.</p>
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
 *                <p>The following unqualified state machine ARN refers to a state machine named <code>myStateMachine</code>.</p>
 *                <p>
 *                   <code>arn:partition:states:region:account-id:stateMachine:myStateMachine</code>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>This API action also deletes all <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-version.html">versions</a> and <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-alias.html">aliases</a> associated with a state machine.</p>
 *          <note>
 *             <p>For <code>EXPRESS</code> state machines, the deletion happens eventually (usually in
 *         less than a minute). Running executions may emit logs after <code>DeleteStateMachine</code>
 *         API is called.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SFNClient, DeleteStateMachineCommand } from "@aws-sdk/client-sfn"; // ES Modules import
 * // const { SFNClient, DeleteStateMachineCommand } = require("@aws-sdk/client-sfn"); // CommonJS import
 * // import type { SFNClientConfig } from "@aws-sdk/client-sfn";
 * const config = {}; // type is SFNClientConfig
 * const client = new SFNClient(config);
 * const input = { // DeleteStateMachineInput
 *   stateMachineArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteStateMachineCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteStateMachineCommandInput - {@link DeleteStateMachineCommandInput}
 * @returns {@link DeleteStateMachineCommandOutput}
 * @see {@link DeleteStateMachineCommandInput} for command's `input` shape.
 * @see {@link DeleteStateMachineCommandOutput} for command's `response` shape.
 * @see {@link SFNClientResolvedConfig | config} for SFNClient's `config` shape.
 *
 * @throws {@link InvalidArn} (client fault)
 *  <p>The provided Amazon Resource Name (ARN) is not valid.</p>
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
export class DeleteStateMachineCommand extends $Command
  .classBuilder<
    DeleteStateMachineCommandInput,
    DeleteStateMachineCommandOutput,
    SFNClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SFNClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSStepFunctions", "DeleteStateMachine", {})
  .n("SFNClient", "DeleteStateMachineCommand")
  .sc(DeleteStateMachine)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteStateMachineInput;
      output: {};
    };
    sdk: {
      input: DeleteStateMachineCommandInput;
      output: DeleteStateMachineCommandOutput;
    };
  };
}
