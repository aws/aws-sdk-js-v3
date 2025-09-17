// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppFabricClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppFabricClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteAppBundleRequest, DeleteAppBundleResponse } from "../models/models_0";
import { de_DeleteAppBundleCommand, se_DeleteAppBundleCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteAppBundleCommand}.
 */
export interface DeleteAppBundleCommandInput extends DeleteAppBundleRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAppBundleCommand}.
 */
export interface DeleteAppBundleCommandOutput extends DeleteAppBundleResponse, __MetadataBearer {}

/**
 * <p>Deletes an app bundle. You must delete all associated app authorizations before you can
 *          delete an app bundle.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppFabricClient, DeleteAppBundleCommand } from "@aws-sdk/client-appfabric"; // ES Modules import
 * // const { AppFabricClient, DeleteAppBundleCommand } = require("@aws-sdk/client-appfabric"); // CommonJS import
 * // import type { AppFabricClientConfig } from "@aws-sdk/client-appfabric";
 * const config = {}; // type is AppFabricClientConfig
 * const client = new AppFabricClient(config);
 * const input = { // DeleteAppBundleRequest
 *   appBundleIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteAppBundleCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAppBundleCommandInput - {@link DeleteAppBundleCommandInput}
 * @returns {@link DeleteAppBundleCommandOutput}
 * @see {@link DeleteAppBundleCommandInput} for command's `input` shape.
 * @see {@link DeleteAppBundleCommandOutput} for command's `response` shape.
 * @see {@link AppFabricClientResolvedConfig | config} for AppFabricClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to perform this operation.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request has created a conflict. Check the request parameters and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure
 *          with an internal server.</p>
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
 *
 * @public
 */
export class DeleteAppBundleCommand extends $Command
  .classBuilder<
    DeleteAppBundleCommandInput,
    DeleteAppBundleCommandOutput,
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
  .s("FabricFrontEndService", "DeleteAppBundle", {})
  .n("AppFabricClient", "DeleteAppBundleCommand")
  .f(void 0, void 0)
  .ser(se_DeleteAppBundleCommand)
  .de(de_DeleteAppBundleCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAppBundleRequest;
      output: {};
    };
    sdk: {
      input: DeleteAppBundleCommandInput;
      output: DeleteAppBundleCommandOutput;
    };
  };
}
