// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import { GetFunctionConcurrencyRequest, GetFunctionConcurrencyResponse } from "../models/models_0";
import { GetFunctionConcurrency } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetFunctionConcurrencyCommand}.
 */
export interface GetFunctionConcurrencyCommandInput extends GetFunctionConcurrencyRequest {}
/**
 * @public
 *
 * The output of {@link GetFunctionConcurrencyCommand}.
 */
export interface GetFunctionConcurrencyCommandOutput extends GetFunctionConcurrencyResponse, __MetadataBearer {}

/**
 * <p>Returns details about the reserved concurrency configuration for a function. To set a concurrency limit for a function, use <a>PutFunctionConcurrency</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, GetFunctionConcurrencyCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, GetFunctionConcurrencyCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * // import type { LambdaClientConfig } from "@aws-sdk/client-lambda";
 * const config = {}; // type is LambdaClientConfig
 * const client = new LambdaClient(config);
 * const input = { // GetFunctionConcurrencyRequest
 *   FunctionName: "STRING_VALUE", // required
 * };
 * const command = new GetFunctionConcurrencyCommand(input);
 * const response = await client.send(command);
 * // { // GetFunctionConcurrencyResponse
 * //   ReservedConcurrentExecutions: Number("int"),
 * // };
 *
 * ```
 *
 * @param GetFunctionConcurrencyCommandInput - {@link GetFunctionConcurrencyCommandInput}
 * @returns {@link GetFunctionConcurrencyCommandOutput}
 * @see {@link GetFunctionConcurrencyCommandInput} for command's `input` shape.
 * @see {@link GetFunctionConcurrencyCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for LambdaClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One of the parameters in the request is not valid.</p>
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
 * @example To get the reserved concurrency setting for a function
 * ```javascript
 * // The following example returns the reserved concurrency setting for a function named my-function.
 * const input = {
 *   FunctionName: "my-function"
 * };
 * const command = new GetFunctionConcurrencyCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ReservedConcurrentExecutions: 250
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetFunctionConcurrencyCommand extends $Command
  .classBuilder<
    GetFunctionConcurrencyCommandInput,
    GetFunctionConcurrencyCommandOutput,
    LambdaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LambdaClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGirApiService", "GetFunctionConcurrency", {})
  .n("LambdaClient", "GetFunctionConcurrencyCommand")
  .sc(GetFunctionConcurrency)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetFunctionConcurrencyRequest;
      output: GetFunctionConcurrencyResponse;
    };
    sdk: {
      input: GetFunctionConcurrencyCommandInput;
      output: GetFunctionConcurrencyCommandOutput;
    };
  };
}
