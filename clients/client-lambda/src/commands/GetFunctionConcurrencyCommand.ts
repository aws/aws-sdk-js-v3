// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import { GetFunctionConcurrencyRequest, GetFunctionConcurrencyResponse } from "../models/models_0";
import { de_GetFunctionConcurrencyCommand, se_GetFunctionConcurrencyCommand } from "../protocols/Aws_restJson1";

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
 * <p>Returns details about the reserved concurrency configuration for a function. To set a concurrency limit for a
 *       function, use <a>PutFunctionConcurrency</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, GetFunctionConcurrencyCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, GetFunctionConcurrencyCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
 * @public
 * @example To get the reserved concurrency setting for a function
 * ```javascript
 * // The following example returns the reserved concurrency setting for a function named my-function.
 * const input = {
 *   "FunctionName": "my-function"
 * };
 * const command = new GetFunctionConcurrencyCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ReservedConcurrentExecutions": 250
 * }
 * *\/
 * // example id: to-get-the-reserved-concurrency-setting-for-a-function-1586481279992
 * ```
 *
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGirApiService", "GetFunctionConcurrency", {})
  .n("LambdaClient", "GetFunctionConcurrencyCommand")
  .f(void 0, void 0)
  .ser(se_GetFunctionConcurrencyCommand)
  .de(de_GetFunctionConcurrencyCommand)
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
