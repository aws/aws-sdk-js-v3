// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SendTaskHeartbeatInput, SendTaskHeartbeatOutput } from "../models/models_0";
import { SendTaskHeartbeat$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link SendTaskHeartbeatCommand}.
 */
export interface SendTaskHeartbeatCommandInput extends SendTaskHeartbeatInput {}
/**
 * @public
 *
 * The output of {@link SendTaskHeartbeatCommand}.
 */
export interface SendTaskHeartbeatCommandOutput extends SendTaskHeartbeatOutput, __MetadataBearer {}

/**
 * Used by activity workers and Task states using the [callback](https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html#connect-wait-token) pattern, and optionally Task states using the [job run](https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html#connect-sync) pattern to report to Step Functions that the task represented by the specified `taskToken` is still making progress. This action resets the `Heartbeat` clock. The `Heartbeat` threshold is specified in the state machine's Amazon States Language definition (`HeartbeatSeconds`). This action does not in itself create an event in the execution history. However, if the task times out, the execution history contains an `ActivityTimedOut` entry for activities, or a `TaskTimedOut` entry for tasks using the [job run](https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html#connect-sync) or [callback](https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html#connect-wait-token) pattern.
 *
 * > **Note:** The `Timeout` of a task, defined in the state machine's Amazon States Language definition, is its maximum allowed duration, regardless of the number of SendTaskHeartbeat requests received. Use `HeartbeatSeconds` to configure the timeout interval for heartbeats.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SFNClient, SendTaskHeartbeatCommand } from "@aws-sdk/client-sfn"; // ES Modules import
 * // const { SFNClient, SendTaskHeartbeatCommand } = require("@aws-sdk/client-sfn"); // CommonJS import
 * // import type { SFNClientConfig } from "@aws-sdk/client-sfn";
 * const config = {}; // type is SFNClientConfig
 * const client = new SFNClient(config);
 * const input = { // SendTaskHeartbeatInput
 *   taskToken: "STRING_VALUE", // required
 * };
 * const command = new SendTaskHeartbeatCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SendTaskHeartbeatCommandInput - {@link SendTaskHeartbeatCommandInput}
 * @returns {@link SendTaskHeartbeatCommandOutput}
 * @see {@link SendTaskHeartbeatCommandInput} for command's `input` shape.
 * @see {@link SendTaskHeartbeatCommandOutput} for command's `response` shape.
 * @see {@link SFNClientResolvedConfig | config} for SFNClient's `config` shape.
 *
 * @throws {@link InvalidToken} (client fault)
 *
 * The provided token is not valid.
 *
 * @throws {@link TaskDoesNotExist} (client fault)
 *
 * The activity does not exist.
 *
 * @throws {@link TaskTimedOut} (client fault)
 *
 * The task token has either expired or the task associated with the token has already been closed.
 *
 * @throws {@link SFNServiceException}
 *
 * Base exception class for all service exceptions from SFN service.
 *
 * @public
 */
export class SendTaskHeartbeatCommand extends command<SendTaskHeartbeatCommandInput, SendTaskHeartbeatCommandOutput>(
  _ep0,
  _mw0,
  "SendTaskHeartbeat",
  SendTaskHeartbeat$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SendTaskHeartbeatInput;
      output: {};
    };
    sdk: {
      input: SendTaskHeartbeatCommandInput;
      output: SendTaskHeartbeatCommandOutput;
    };
  };
}
