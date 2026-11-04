// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  SendDurableExecutionCallbackHeartbeatRequest,
  SendDurableExecutionCallbackHeartbeatResponse,
} from "../models/models_0";
import { SendDurableExecutionCallbackHeartbeat$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link SendDurableExecutionCallbackHeartbeatCommand}.
 */
export interface SendDurableExecutionCallbackHeartbeatCommandInput extends SendDurableExecutionCallbackHeartbeatRequest {}
/**
 * @public
 *
 * The output of {@link SendDurableExecutionCallbackHeartbeatCommand}.
 */
export interface SendDurableExecutionCallbackHeartbeatCommandOutput extends SendDurableExecutionCallbackHeartbeatResponse, __MetadataBearer {}

/**
 * Sends a heartbeat signal for a long-running callback operation to prevent timeout. Use this API to extend the callback timeout period while the external operation is still in progress.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, SendDurableExecutionCallbackHeartbeatCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, SendDurableExecutionCallbackHeartbeatCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * // import type { LambdaClientConfig } from "@aws-sdk/client-lambda";
 * const config = {}; // type is LambdaClientConfig
 * const client = new LambdaClient(config);
 * const input = { // SendDurableExecutionCallbackHeartbeatRequest
 *   CallbackId: "STRING_VALUE", // required
 * };
 * const command = new SendDurableExecutionCallbackHeartbeatCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SendDurableExecutionCallbackHeartbeatCommandInput - {@link SendDurableExecutionCallbackHeartbeatCommandInput}
 * @returns {@link SendDurableExecutionCallbackHeartbeatCommandOutput}
 * @see {@link SendDurableExecutionCallbackHeartbeatCommandInput} for command's `input` shape.
 * @see {@link SendDurableExecutionCallbackHeartbeatCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for LambdaClient's `config` shape.
 *
 * @throws {@link CallbackTimeoutException} (client fault)
 *
 * The callback ID token has either expired or the callback associated with the token has already been closed.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * One of the parameters in the request is not valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource specified in the request does not exist.
 *
 * @throws {@link ServiceException} (server fault)
 *
 * The Lambda service encountered an internal error.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * The request throughput limit was exceeded. For more information, see [Lambda quotas](https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html#api-requests).
 *
 * @throws {@link LambdaServiceException}
 *
 * Base exception class for all service exceptions from Lambda service.
 *
 * @public
 */
export class SendDurableExecutionCallbackHeartbeatCommand extends command<SendDurableExecutionCallbackHeartbeatCommandInput, SendDurableExecutionCallbackHeartbeatCommandOutput>(
  _ep0,
  _mw0,
  "SendDurableExecutionCallbackHeartbeat",
  SendDurableExecutionCallbackHeartbeat$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SendDurableExecutionCallbackHeartbeatRequest;
      output: {};
    };
    sdk: {
      input: SendDurableExecutionCallbackHeartbeatCommandInput;
      output: SendDurableExecutionCallbackHeartbeatCommandOutput;
    };
  };
}
