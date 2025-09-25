// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppConfigClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppConfigClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteEnvironmentRequest } from "../models/models_0";
import { DeleteEnvironment } from "../schemas/schemas_14_Extension";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteEnvironmentCommand}.
 */
export interface DeleteEnvironmentCommandInput extends DeleteEnvironmentRequest {}
/**
 * @public
 *
 * The output of {@link DeleteEnvironmentCommand}.
 */
export interface DeleteEnvironmentCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes an environment.</p>
 *          <p>To prevent users from unintentionally deleting actively-used environments, enable <a href="https://docs.aws.amazon.com/appconfig/latest/userguide/deletion-protection.html">deletion
 *             protection</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppConfigClient, DeleteEnvironmentCommand } from "@aws-sdk/client-appconfig"; // ES Modules import
 * // const { AppConfigClient, DeleteEnvironmentCommand } = require("@aws-sdk/client-appconfig"); // CommonJS import
 * // import type { AppConfigClientConfig } from "@aws-sdk/client-appconfig";
 * const config = {}; // type is AppConfigClientConfig
 * const client = new AppConfigClient(config);
 * const input = { // DeleteEnvironmentRequest
 *   EnvironmentId: "STRING_VALUE", // required
 *   ApplicationId: "STRING_VALUE", // required
 *   DeletionProtectionCheck: "ACCOUNT_DEFAULT" || "APPLY" || "BYPASS",
 * };
 * const command = new DeleteEnvironmentCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteEnvironmentCommandInput - {@link DeleteEnvironmentCommandInput}
 * @returns {@link DeleteEnvironmentCommandOutput}
 * @see {@link DeleteEnvironmentCommandInput} for command's `input` shape.
 * @see {@link DeleteEnvironmentCommandOutput} for command's `response` shape.
 * @see {@link AppConfigClientResolvedConfig | config} for AppConfigClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be processed because of conflict in the current state of the
 *          resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There was an internal failure in the AppConfig service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource could not be found.</p>
 *
 * @throws {@link AppConfigServiceException}
 * <p>Base exception class for all service exceptions from AppConfig service.</p>
 *
 *
 * @example To delete an environment
 * ```javascript
 * // The following delete-environment example deletes the specified application environment.
 * const input = {
 *   ApplicationId: "339ohji",
 *   EnvironmentId: "54j1r29"
 * };
 * const command = new DeleteEnvironmentCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteEnvironmentCommand extends $Command
  .classBuilder<
    DeleteEnvironmentCommandInput,
    DeleteEnvironmentCommandOutput,
    AppConfigClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppConfigClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonAppConfig", "DeleteEnvironment", {})
  .n("AppConfigClient", "DeleteEnvironmentCommand")
  .sc(DeleteEnvironment)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteEnvironmentRequest;
      output: {};
    };
    sdk: {
      input: DeleteEnvironmentCommandInput;
      output: DeleteEnvironmentCommandOutput;
    };
  };
}
