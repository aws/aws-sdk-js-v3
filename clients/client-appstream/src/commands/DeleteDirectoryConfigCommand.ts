// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteDirectoryConfigRequest, DeleteDirectoryConfigResult } from "../models/models_0";
import { de_DeleteDirectoryConfigCommand, se_DeleteDirectoryConfigCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteDirectoryConfigCommand}.
 */
export interface DeleteDirectoryConfigCommandInput extends DeleteDirectoryConfigRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDirectoryConfigCommand}.
 */
export interface DeleteDirectoryConfigCommandOutput extends DeleteDirectoryConfigResult, __MetadataBearer {}

/**
 * <p>Deletes the specified Directory Config object from AppStream 2.0. This object includes the information required to join streaming instances to an Active Directory domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, DeleteDirectoryConfigCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, DeleteDirectoryConfigCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new AppStreamClient(config);
 * const input = { // DeleteDirectoryConfigRequest
 *   DirectoryName: "STRING_VALUE", // required
 * };
 * const command = new DeleteDirectoryConfigCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteDirectoryConfigCommandInput - {@link DeleteDirectoryConfigCommandInput}
 * @returns {@link DeleteDirectoryConfigCommandOutput}
 * @see {@link DeleteDirectoryConfigCommandInput} for command's `input` shape.
 * @see {@link DeleteDirectoryConfigCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for AppStreamClient's `config` shape.
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
 * @public
 */
export class DeleteDirectoryConfigCommand extends $Command
  .classBuilder<
    DeleteDirectoryConfigCommandInput,
    DeleteDirectoryConfigCommandOutput,
    AppStreamClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppStreamClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("PhotonAdminProxyService", "DeleteDirectoryConfig", {})
  .n("AppStreamClient", "DeleteDirectoryConfigCommand")
  .f(void 0, void 0)
  .ser(se_DeleteDirectoryConfigCommand)
  .de(de_DeleteDirectoryConfigCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDirectoryConfigRequest;
      output: {};
    };
    sdk: {
      input: DeleteDirectoryConfigCommandInput;
      output: DeleteDirectoryConfigCommandOutput;
    };
  };
}
