// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetFunctionCodeSigningConfigRequest, GetFunctionCodeSigningConfigResponse } from "../models/models_0";
import { GetFunctionCodeSigningConfig$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetFunctionCodeSigningConfigCommand}.
 */
export interface GetFunctionCodeSigningConfigCommandInput extends GetFunctionCodeSigningConfigRequest {}
/**
 * @public
 *
 * The output of {@link GetFunctionCodeSigningConfigCommand}.
 */
export interface GetFunctionCodeSigningConfigCommandOutput extends GetFunctionCodeSigningConfigResponse, __MetadataBearer {}

/**
 * Returns the code signing configuration for the specified function.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, GetFunctionCodeSigningConfigCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, GetFunctionCodeSigningConfigCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * // import type { LambdaClientConfig } from "@aws-sdk/client-lambda";
 * const config = {}; // type is LambdaClientConfig
 * const client = new LambdaClient(config);
 * const input = { // GetFunctionCodeSigningConfigRequest
 *   FunctionName: "STRING_VALUE", // required
 * };
 * const command = new GetFunctionCodeSigningConfigCommand(input);
 * const response = await client.send(command);
 * // { // GetFunctionCodeSigningConfigResponse
 * //   CodeSigningConfigArn: "STRING_VALUE", // required
 * //   FunctionName: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param GetFunctionCodeSigningConfigCommandInput - {@link GetFunctionCodeSigningConfigCommandInput}
 * @returns {@link GetFunctionCodeSigningConfigCommandOutput}
 * @see {@link GetFunctionCodeSigningConfigCommandInput} for command's `input` shape.
 * @see {@link GetFunctionCodeSigningConfigCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for LambdaClient's `config` shape.
 *
 * @throws {@link CodeSigningConfigNotFoundException} (client fault)
 *
 * The specified code signing configuration does not exist.
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
export class GetFunctionCodeSigningConfigCommand extends command<GetFunctionCodeSigningConfigCommandInput, GetFunctionCodeSigningConfigCommandOutput>(
  _ep0,
  _mw0,
  "GetFunctionCodeSigningConfig",
  GetFunctionCodeSigningConfig$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetFunctionCodeSigningConfigRequest;
      output: GetFunctionCodeSigningConfigResponse;
    };
    sdk: {
      input: GetFunctionCodeSigningConfigCommandInput;
      output: GetFunctionCodeSigningConfigCommandOutput;
    };
  };
}
