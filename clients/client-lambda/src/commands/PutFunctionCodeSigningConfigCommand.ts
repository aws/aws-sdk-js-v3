// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import { PutFunctionCodeSigningConfigRequest, PutFunctionCodeSigningConfigResponse } from "../models/models_0";
import { PutFunctionCodeSigningConfig } from "../schemas/com.amazonaws.lambda";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface PutFunctionCodeSigningConfigCommandOutput
  extends PutFunctionCodeSigningConfigResponse,
    __MetadataBearer {}

/**
 * <p>Update the code signing configuration for the function. Changes to the code signing configuration take effect the
 *       next time a user tries to deploy a code package to the function. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, PutFunctionCodeSigningConfigCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, PutFunctionCodeSigningConfigCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
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
 *  <p>The specified code signing configuration does not exist.</p>
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
 * @public
 */
export class PutFunctionCodeSigningConfigCommand extends $Command
  .classBuilder<
    PutFunctionCodeSigningConfigCommandInput,
    PutFunctionCodeSigningConfigCommandOutput,
    LambdaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LambdaClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGirApiService", "PutFunctionCodeSigningConfig", {})
  .n("LambdaClient", "PutFunctionCodeSigningConfigCommand")
  .f(void 0, void 0)
  .sc(PutFunctionCodeSigningConfig)
  .build() {
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
