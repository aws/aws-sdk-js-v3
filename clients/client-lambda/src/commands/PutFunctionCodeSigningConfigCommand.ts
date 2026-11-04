// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutFunctionCodeSigningConfigRequest, PutFunctionCodeSigningConfigResponse } from "../models/models_0";
import { PutFunctionCodeSigningConfig$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutFunctionCodeSigningConfigCommand}.
 */
export interface PutFunctionCodeSigningConfigCommandInput extends PutFunctionCodeSigningConfigRequest {}
/**
 * @public
 *
 * The output of {@link PutFunctionCodeSigningConfigCommand}.
 */
export interface PutFunctionCodeSigningConfigCommandOutput extends PutFunctionCodeSigningConfigResponse, __MetadataBearer {}

/**
 * Update the code signing configuration for the function. Changes to the code signing configuration take effect the next time a user tries to deploy a code package to the function.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, PutFunctionCodeSigningConfigCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, PutFunctionCodeSigningConfigCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * // import type { LambdaClientConfig } from "@aws-sdk/client-lambda";
 * const config = {}; // type is LambdaClientConfig
 * const client = new LambdaClient(config);
 * const input = { // PutFunctionCodeSigningConfigRequest
 *   CodeSigningConfigArn: "STRING_VALUE", // required
 *   FunctionName: "STRING_VALUE", // required
 * };
 * const command = new PutFunctionCodeSigningConfigCommand(input);
 * const response = await client.send(command);
 * // { // PutFunctionCodeSigningConfigResponse
 * //   CodeSigningConfigArn: "STRING_VALUE", // required
 * //   FunctionName: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param PutFunctionCodeSigningConfigCommandInput - {@link PutFunctionCodeSigningConfigCommandInput}
 * @returns {@link PutFunctionCodeSigningConfigCommandOutput}
 * @see {@link PutFunctionCodeSigningConfigCommandInput} for command's `input` shape.
 * @see {@link PutFunctionCodeSigningConfigCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceConflictException} (client fault)
 *
 * The resource already exists, or another operation is in progress.
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
export class PutFunctionCodeSigningConfigCommand extends command<PutFunctionCodeSigningConfigCommandInput, PutFunctionCodeSigningConfigCommandOutput>(
  _ep0,
  _mw0,
  "PutFunctionCodeSigningConfig",
  PutFunctionCodeSigningConfig$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutFunctionCodeSigningConfigRequest;
      output: PutFunctionCodeSigningConfigResponse;
    };
    sdk: {
      input: PutFunctionCodeSigningConfigCommandInput;
      output: PutFunctionCodeSigningConfigCommandOutput;
    };
  };
}
