// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import { DeleteCodeSigningConfigRequest, DeleteCodeSigningConfigResponse } from "../models/models_0";
import { DeleteCodeSigningConfig } from "../schemas/schemas_8_Code";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteCodeSigningConfigCommand}.
 */
export interface DeleteCodeSigningConfigCommandInput extends DeleteCodeSigningConfigRequest {}
/**
 * @public
 *
 * The output of {@link DeleteCodeSigningConfigCommand}.
 */
export interface DeleteCodeSigningConfigCommandOutput extends DeleteCodeSigningConfigResponse, __MetadataBearer {}

/**
 * <p>Deletes the code signing configuration. You can delete the code signing configuration only if no function is using it. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, DeleteCodeSigningConfigCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, DeleteCodeSigningConfigCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * // import type { LambdaClientConfig } from "@aws-sdk/client-lambda";
 * const config = {}; // type is LambdaClientConfig
 * const client = new LambdaClient(config);
 * const input = { // DeleteCodeSigningConfigRequest
 *   CodeSigningConfigArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteCodeSigningConfigCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteCodeSigningConfigCommandInput - {@link DeleteCodeSigningConfigCommandInput}
 * @returns {@link DeleteCodeSigningConfigCommandOutput}
 * @see {@link DeleteCodeSigningConfigCommandInput} for command's `input` shape.
 * @see {@link DeleteCodeSigningConfigCommandOutput} for command's `response` shape.
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
 * @throws {@link LambdaServiceException}
 * <p>Base exception class for all service exceptions from Lambda service.</p>
 *
 *
 * @public
 */
export class DeleteCodeSigningConfigCommand extends $Command
  .classBuilder<
    DeleteCodeSigningConfigCommandInput,
    DeleteCodeSigningConfigCommandOutput,
    LambdaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LambdaClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGirApiService", "DeleteCodeSigningConfig", {})
  .n("LambdaClient", "DeleteCodeSigningConfigCommand")
  .sc(DeleteCodeSigningConfig)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteCodeSigningConfigRequest;
      output: {};
    };
    sdk: {
      input: DeleteCodeSigningConfigCommandInput;
      output: DeleteCodeSigningConfigCommandOutput;
    };
  };
}
