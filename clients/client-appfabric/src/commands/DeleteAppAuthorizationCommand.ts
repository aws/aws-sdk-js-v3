// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppFabricClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppFabricClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteAppAuthorizationRequest, DeleteAppAuthorizationResponse } from "../models/models_0";
import { de_DeleteAppAuthorizationCommand, se_DeleteAppAuthorizationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteAppAuthorizationCommand}.
 */
export interface DeleteAppAuthorizationCommandInput extends DeleteAppAuthorizationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAppAuthorizationCommand}.
 */
export interface DeleteAppAuthorizationCommandOutput extends DeleteAppAuthorizationResponse, __MetadataBearer {}

/**
 * <p>Deletes an app authorization. You must delete the associated ingestion before you can
 *          delete an app authorization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppFabricClient, DeleteAppAuthorizationCommand } from "@aws-sdk/client-appfabric"; // ES Modules import
 * // const { AppFabricClient, DeleteAppAuthorizationCommand } = require("@aws-sdk/client-appfabric"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new AppFabricClient(config);
 * const input = { // DeleteAppAuthorizationRequest
 *   appBundleIdentifier: "STRING_VALUE", // required
 *   appAuthorizationIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteAppAuthorizationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAppAuthorizationCommandInput - {@link DeleteAppAuthorizationCommandInput}
 * @returns {@link DeleteAppAuthorizationCommandOutput}
 * @see {@link DeleteAppAuthorizationCommandInput} for command's `input` shape.
 * @see {@link DeleteAppAuthorizationCommandOutput} for command's `response` shape.
 * @see {@link AppFabricClientResolvedConfig | config} for AppFabricClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to perform this operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure
 *          with an internal server.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request rate exceeds the limit.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has invalid or missing parameters.</p>
 *
 * @throws {@link AppFabricServiceException}
 * <p>Base exception class for all service exceptions from AppFabric service.</p>
 *
 * @public
 */
export class DeleteAppAuthorizationCommand extends $Command
  .classBuilder<
    DeleteAppAuthorizationCommandInput,
    DeleteAppAuthorizationCommandOutput,
    AppFabricClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppFabricClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("FabricFrontEndService", "DeleteAppAuthorization", {})
  .n("AppFabricClient", "DeleteAppAuthorizationCommand")
  .f(void 0, void 0)
  .ser(se_DeleteAppAuthorizationCommand)
  .de(de_DeleteAppAuthorizationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAppAuthorizationRequest;
      output: {};
    };
    sdk: {
      input: DeleteAppAuthorizationCommandInput;
      output: DeleteAppAuthorizationCommandOutput;
    };
  };
}
