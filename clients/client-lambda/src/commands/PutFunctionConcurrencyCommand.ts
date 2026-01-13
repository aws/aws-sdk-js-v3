// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import type { Concurrency, PutFunctionConcurrencyRequest } from "../models/models_0";
import { PutFunctionConcurrency$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutFunctionConcurrencyCommand}.
 */
export interface PutFunctionConcurrencyCommandInput extends PutFunctionConcurrencyRequest {}
/**
 * @public
 *
 * The output of {@link PutFunctionConcurrencyCommand}.
 */
export interface PutFunctionConcurrencyCommandOutput extends Concurrency, __MetadataBearer {}

/**
 * <p>Sets the maximum number of simultaneous executions for a function, and reserves capacity for that concurrency level.</p> <p>Concurrency settings apply to the function as a whole, including all published versions and the unpublished version. Reserving concurrency both ensures that your function has capacity to process the specified number of events simultaneously, and prevents it from scaling beyond that level. Use <a>GetFunction</a> to see the current setting for a function.</p> <p>Use <a>GetAccountSettings</a> to see your Regional concurrency limit. You can reserve concurrency for as many functions as you like, as long as you leave at least 100 simultaneous executions unreserved for functions that aren't configured with a per-function limit. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-scaling.html">Lambda function scaling</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, PutFunctionConcurrencyCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, PutFunctionConcurrencyCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * // import type { LambdaClientConfig } from "@aws-sdk/client-lambda";
 * const config = {}; // type is LambdaClientConfig
 * const client = new LambdaClient(config);
 * const input = { // PutFunctionConcurrencyRequest
 *   FunctionName: "STRING_VALUE", // required
 *   ReservedConcurrentExecutions: Number("int"), // required
 * };
 * const command = new PutFunctionConcurrencyCommand(input);
 * const response = await client.send(command);
 * // { // Concurrency
 * //   ReservedConcurrentExecutions: Number("int"),
 * // };
 *
 * ```
 *
 * @param PutFunctionConcurrencyCommandInput - {@link PutFunctionConcurrencyCommandInput}
 * @returns {@link PutFunctionConcurrencyCommandOutput}
 * @see {@link PutFunctionConcurrencyCommandInput} for command's `input` shape.
 * @see {@link PutFunctionConcurrencyCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for LambdaClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One of the parameters in the request is not valid.</p>
 *
 * @throws {@link ResourceConflictException} (client fault)
 *  <p>The resource already exists, or another operation is in progress.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource specified in the request does not exist.</p>
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
 * @example To configure a reserved concurrency limit for a function
 * ```javascript
 * // The following example configures 100 reserved concurrent executions for the my-function function.
 * const input = {
 *   FunctionName: "my-function",
 *   ReservedConcurrentExecutions: 100
 * };
 * const command = new PutFunctionConcurrencyCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ReservedConcurrentExecutions: 100
 * }
 * *\/
 * ```
 *
 * @public
 */
export class PutFunctionConcurrencyCommand extends $Command
  .classBuilder<
    PutFunctionConcurrencyCommandInput,
    PutFunctionConcurrencyCommandOutput,
    LambdaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LambdaClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGirApiService", "PutFunctionConcurrency", {})
  .n("LambdaClient", "PutFunctionConcurrencyCommand")
  .sc(PutFunctionConcurrency$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutFunctionConcurrencyRequest;
      output: Concurrency;
    };
    sdk: {
      input: PutFunctionConcurrencyCommandInput;
      output: PutFunctionConcurrencyCommandOutput;
    };
  };
}
