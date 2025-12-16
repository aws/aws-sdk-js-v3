// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import type {
  SendDurableExecutionCallbackFailureRequest,
  SendDurableExecutionCallbackFailureResponse,
} from "../models/models_0";
import { SendDurableExecutionCallbackFailure$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SendDurableExecutionCallbackFailureCommand}.
 */
export interface SendDurableExecutionCallbackFailureCommandInput extends SendDurableExecutionCallbackFailureRequest {}
/**
 * @public
 *
 * The output of {@link SendDurableExecutionCallbackFailureCommand}.
 */
export interface SendDurableExecutionCallbackFailureCommandOutput
  extends SendDurableExecutionCallbackFailureResponse,
    __MetadataBearer {}

/**
 * <p>Sends a failure response for a callback operation in a durable execution. Use this API when an external system cannot complete a callback operation successfully.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, SendDurableExecutionCallbackFailureCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, SendDurableExecutionCallbackFailureCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * // import type { LambdaClientConfig } from "@aws-sdk/client-lambda";
 * const config = {}; // type is LambdaClientConfig
 * const client = new LambdaClient(config);
 * const input = { // SendDurableExecutionCallbackFailureRequest
 *   CallbackId: "STRING_VALUE", // required
 *   Error: { // ErrorObject
 *     ErrorMessage: "STRING_VALUE",
 *     ErrorType: "STRING_VALUE",
 *     ErrorData: "STRING_VALUE",
 *     StackTrace: [ // StackTraceEntries
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new SendDurableExecutionCallbackFailureCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SendDurableExecutionCallbackFailureCommandInput - {@link SendDurableExecutionCallbackFailureCommandInput}
 * @returns {@link SendDurableExecutionCallbackFailureCommandOutput}
 * @see {@link SendDurableExecutionCallbackFailureCommandInput} for command's `input` shape.
 * @see {@link SendDurableExecutionCallbackFailureCommandOutput} for command's `response` shape.
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
export class SendDurableExecutionCallbackFailureCommand extends $Command
  .classBuilder<
    SendDurableExecutionCallbackFailureCommandInput,
    SendDurableExecutionCallbackFailureCommandOutput,
    LambdaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LambdaClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGirApiService", "SendDurableExecutionCallbackFailure", {})
  .n("LambdaClient", "SendDurableExecutionCallbackFailureCommand")
  .sc(SendDurableExecutionCallbackFailure$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SendDurableExecutionCallbackFailureRequest;
      output: {};
    };
    sdk: {
      input: SendDurableExecutionCallbackFailureCommandInput;
      output: SendDurableExecutionCallbackFailureCommandOutput;
    };
  };
}
