// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteStateMachineInput, DeleteStateMachineOutput } from "../models/models_0";
import { DeleteStateMachine$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Deletes a state machine. This is an asynchronous operation. It sets the state machine's status to `DELETING` and begins the deletion process. A state machine is deleted only when all its executions are completed. On the next state transition, the state machine's executions are terminated.
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
 * - The following unqualified state machine ARN refers to a state machine named `myStateMachine`.
 *
 *   `arn:partition:states:region:account-id:stateMachine:myStateMachine`
 *
 * This API action also deletes all [versions](https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-version.html) and [aliases](https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-alias.html) associated with a state machine.
 *
 * > **Note:** For `EXPRESS` state machines, the deletion happens eventually (usually in less than a minute). Running executions may emit logs after `DeleteStateMachine` API is called.
 *
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
 *
 * The provided Amazon Resource Name (ARN) is not valid.
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
export class DeleteStateMachineCommand extends command<DeleteStateMachineCommandInput, DeleteStateMachineCommandOutput>(
  _ep0,
  _mw0,
  "DeleteStateMachine",
  DeleteStateMachine$
) {
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
