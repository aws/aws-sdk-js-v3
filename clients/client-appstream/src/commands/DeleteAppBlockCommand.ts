// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteAppBlockRequest, DeleteAppBlockResult } from "../models/models_0";
import { DeleteAppBlock } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteAppBlockCommand}.
 */
export interface DeleteAppBlockCommandInput extends DeleteAppBlockRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAppBlockCommand}.
 */
export interface DeleteAppBlockCommandOutput extends DeleteAppBlockResult, __MetadataBearer {}

/**
 * <p>Deletes an app block.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, DeleteAppBlockCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, DeleteAppBlockCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * // import type { AppStreamClientConfig } from "@aws-sdk/client-appstream";
 * const config = {}; // type is AppStreamClientConfig
 * const client = new AppStreamClient(config);
 * const input = { // DeleteAppBlockRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new DeleteAppBlockCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAppBlockCommandInput - {@link DeleteAppBlockCommandInput}
 * @returns {@link DeleteAppBlockCommandOutput}
 * @see {@link DeleteAppBlockCommandInput} for command's `input` shape.
 * @see {@link DeleteAppBlockCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for AppStreamClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>An API error occurred. Wait a few minutes and try again.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The specified resource is in use.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link AppStreamServiceException}
 * <p>Base exception class for all service exceptions from AppStream service.</p>
 *
 *
 * @public
 */
export class DeleteAppBlockCommand extends $Command
  .classBuilder<
    DeleteAppBlockCommandInput,
    DeleteAppBlockCommandOutput,
    AppStreamClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppStreamClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PhotonAdminProxyService", "DeleteAppBlock", {})
  .n("AppStreamClient", "DeleteAppBlockCommand")
  .sc(DeleteAppBlock)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAppBlockRequest;
      output: {};
    };
    sdk: {
      input: DeleteAppBlockCommandInput;
      output: DeleteAppBlockCommandOutput;
    };
  };
}
