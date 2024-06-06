// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import { DeleteFunctionCodeSigningConfigRequest } from "../models/models_0";
import {
  de_DeleteFunctionCodeSigningConfigCommand,
  se_DeleteFunctionCodeSigningConfigCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteFunctionCodeSigningConfigCommand}.
 */
export interface DeleteFunctionCodeSigningConfigCommandInput extends DeleteFunctionCodeSigningConfigRequest {}
/**
 * @public
 *
 * The output of {@link DeleteFunctionCodeSigningConfigCommand}.
 */
export interface DeleteFunctionCodeSigningConfigCommandOutput extends __MetadataBearer {}

/**
 * <p>Removes the code signing configuration from the function.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, DeleteFunctionCodeSigningConfigCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, DeleteFunctionCodeSigningConfigCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const input = { // DeleteFunctionCodeSigningConfigRequest
 *   FunctionName: "STRING_VALUE", // required
 * };
 * const command = new DeleteFunctionCodeSigningConfigCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteFunctionCodeSigningConfigCommandInput - {@link DeleteFunctionCodeSigningConfigCommandInput}
 * @returns {@link DeleteFunctionCodeSigningConfigCommandOutput}
 * @see {@link DeleteFunctionCodeSigningConfigCommandInput} for command's `input` shape.
 * @see {@link DeleteFunctionCodeSigningConfigCommandOutput} for command's `response` shape.
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
export class DeleteFunctionCodeSigningConfigCommand extends $Command
  .classBuilder<
    DeleteFunctionCodeSigningConfigCommandInput,
    DeleteFunctionCodeSigningConfigCommandOutput,
    LambdaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: LambdaClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGirApiService", "DeleteFunctionCodeSigningConfig", {})
  .n("LambdaClient", "DeleteFunctionCodeSigningConfigCommand")
  .f(void 0, void 0)
  .ser(se_DeleteFunctionCodeSigningConfigCommand)
  .de(de_DeleteFunctionCodeSigningConfigCommand)
  .build() {}
