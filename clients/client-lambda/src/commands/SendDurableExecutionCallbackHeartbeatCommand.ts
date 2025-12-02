// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import {
  SendDurableExecutionCallbackHeartbeatRequest,
  SendDurableExecutionCallbackHeartbeatResponse,
} from "../models/models_0";
import { SendDurableExecutionCallbackHeartbeat } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SendDurableExecutionCallbackHeartbeatCommand}.
 */
export interface SendDurableExecutionCallbackHeartbeatCommandInput
  extends SendDurableExecutionCallbackHeartbeatRequest {}
/**
 * @public
 *
 * The output of {@link SendDurableExecutionCallbackHeartbeatCommand}.
 */
export interface SendDurableExecutionCallbackHeartbeatCommandOutput
  extends SendDurableExecutionCallbackHeartbeatResponse,
    __MetadataBearer {}

/**
 * <p>Sends a heartbeat signal for a long-running callback operation to prevent timeout. Use this API to extend the callback timeout period while the external operation is still in progress.</p>
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
 *  <p>The callback ID token has either expired or the callback associated with the token has already been closed.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One of the parameters in the request is not valid.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>The Lambda service encountered an internal error.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The request throughput limit was exceeded. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html#api-requests">Lambda quotas</a>.</p>
 *
 * @throws {@link LambdaServiceException}
 * <p>Base exception class for all service exceptions from Lambda service.</p>
 *
 *
 * @public
 */
export class SendDurableExecutionCallbackHeartbeatCommand extends $Command
  .classBuilder<
    SendDurableExecutionCallbackHeartbeatCommandInput,
    SendDurableExecutionCallbackHeartbeatCommandOutput,
    LambdaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LambdaClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGirApiService", "SendDurableExecutionCallbackHeartbeat", {})
  .n("LambdaClient", "SendDurableExecutionCallbackHeartbeatCommand")
  .sc(SendDurableExecutionCallbackHeartbeat)
  .build() {
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
