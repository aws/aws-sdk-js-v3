// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteThemeForStackRequest, DeleteThemeForStackResult } from "../models/models_0";
import { DeleteThemeForStack } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteThemeForStackCommand}.
 */
export interface DeleteThemeForStackCommandInput extends DeleteThemeForStackRequest {}
/**
 * @public
 *
 * The output of {@link DeleteThemeForStackCommand}.
 */
export interface DeleteThemeForStackCommandOutput extends DeleteThemeForStackResult, __MetadataBearer {}

/**
 * <p>Deletes custom branding that customizes the appearance of the streaming application catalog page.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, DeleteThemeForStackCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, DeleteThemeForStackCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * // import type { AppStreamClientConfig } from "@aws-sdk/client-appstream";
 * const config = {}; // type is AppStreamClientConfig
 * const client = new AppStreamClient(config);
 * const input = { // DeleteThemeForStackRequest
 *   StackName: "STRING_VALUE", // required
 * };
 * const command = new DeleteThemeForStackCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteThemeForStackCommandInput - {@link DeleteThemeForStackCommandInput}
 * @returns {@link DeleteThemeForStackCommandOutput}
 * @see {@link DeleteThemeForStackCommandInput} for command's `input` shape.
 * @see {@link DeleteThemeForStackCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for AppStreamClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>An API error occurred. Wait a few minutes and try again.</p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>The attempted operation is not permitted.</p>
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
export class DeleteThemeForStackCommand extends $Command
  .classBuilder<
    DeleteThemeForStackCommandInput,
    DeleteThemeForStackCommandOutput,
    AppStreamClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppStreamClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PhotonAdminProxyService", "DeleteThemeForStack", {})
  .n("AppStreamClient", "DeleteThemeForStackCommand")
  .sc(DeleteThemeForStack)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteThemeForStackRequest;
      output: {};
    };
    sdk: {
      input: DeleteThemeForStackCommandInput;
      output: DeleteThemeForStackCommandOutput;
    };
  };
}
