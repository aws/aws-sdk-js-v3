// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetFunctionRecursionConfigRequest, GetFunctionRecursionConfigResponse } from "../models/models_0";
import { GetFunctionRecursionConfig$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetFunctionRecursionConfigCommand}.
 */
export interface GetFunctionRecursionConfigCommandInput extends GetFunctionRecursionConfigRequest {}
/**
 * @public
 *
 * The output of {@link GetFunctionRecursionConfigCommand}.
 */
export interface GetFunctionRecursionConfigCommandOutput extends GetFunctionRecursionConfigResponse, __MetadataBearer {}

/**
 * Returns your function's [recursive loop detection](https://docs.aws.amazon.com/lambda/latest/dg/invocation-recursion.html) configuration.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, GetFunctionRecursionConfigCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, GetFunctionRecursionConfigCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * // import type { LambdaClientConfig } from "@aws-sdk/client-lambda";
 * const config = {}; // type is LambdaClientConfig
 * const client = new LambdaClient(config);
 * const input = { // GetFunctionRecursionConfigRequest
 *   FunctionName: "STRING_VALUE", // required
 * };
 * const command = new GetFunctionRecursionConfigCommand(input);
 * const response = await client.send(command);
 * // { // GetFunctionRecursionConfigResponse
 * //   RecursiveLoop: "Allow" || "Terminate",
 * // };
 *
 * ```
 *
 * @param GetFunctionRecursionConfigCommandInput - {@link GetFunctionRecursionConfigCommandInput}
 * @returns {@link GetFunctionRecursionConfigCommandOutput}
 * @see {@link GetFunctionRecursionConfigCommandInput} for command's `input` shape.
 * @see {@link GetFunctionRecursionConfigCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for LambdaClient's `config` shape.
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
export class GetFunctionRecursionConfigCommand extends command<GetFunctionRecursionConfigCommandInput, GetFunctionRecursionConfigCommandOutput>(
  _ep0,
  _mw0,
  "GetFunctionRecursionConfig",
  GetFunctionRecursionConfig$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetFunctionRecursionConfigRequest;
      output: GetFunctionRecursionConfigResponse;
    };
    sdk: {
      input: GetFunctionRecursionConfigCommandInput;
      output: GetFunctionRecursionConfigCommandOutput;
    };
  };
}
