// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteClientBrandingRequest, DeleteClientBrandingResult } from "../models/models_0";
import { de_DeleteClientBrandingCommand, se_DeleteClientBrandingCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteClientBrandingCommand}.
 */
export interface DeleteClientBrandingCommandInput extends DeleteClientBrandingRequest {}
/**
 * @public
 *
 * The output of {@link DeleteClientBrandingCommand}.
 */
export interface DeleteClientBrandingCommandOutput extends DeleteClientBrandingResult, __MetadataBearer {}

/**
 * <p>Deletes customized client branding. Client branding allows you to customize your
 *          WorkSpace's client login portal. You can tailor your login portal company logo, the support
 *          email address, support link, link to reset password, and a custom message for users trying
 *          to sign in.</p>
 *          <p>After you delete your customized client branding, your login portal reverts to the
 *          default client branding.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, DeleteClientBrandingCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, DeleteClientBrandingCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new WorkSpacesClient(config);
 * const input = { // DeleteClientBrandingRequest
 *   ResourceId: "STRING_VALUE", // required
 *   Platforms: [ // ClientDeviceTypeList // required
 *     "DeviceTypeWindows" || "DeviceTypeOsx" || "DeviceTypeAndroid" || "DeviceTypeIos" || "DeviceTypeLinux" || "DeviceTypeWeb",
 *   ],
 * };
 * const command = new DeleteClientBrandingCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteClientBrandingCommandInput - {@link DeleteClientBrandingCommandInput}
 * @returns {@link DeleteClientBrandingCommandOutput}
 * @see {@link DeleteClientBrandingCommandInput} for command's `input` shape.
 * @see {@link DeleteClientBrandingCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for WorkSpacesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The user is not authorized to access a resource.</p>
 *
 * @throws {@link InvalidParameterValuesException} (client fault)
 *  <p>One or more parameter values are not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link WorkSpacesServiceException}
 * <p>Base exception class for all service exceptions from WorkSpaces service.</p>
 *
 * @public
 */
export class DeleteClientBrandingCommand extends $Command
  .classBuilder<
    DeleteClientBrandingCommandInput,
    DeleteClientBrandingCommandOutput,
    WorkSpacesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WorkspacesService", "DeleteClientBranding", {})
  .n("WorkSpacesClient", "DeleteClientBrandingCommand")
  .f(void 0, void 0)
  .ser(se_DeleteClientBrandingCommand)
  .de(de_DeleteClientBrandingCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteClientBrandingRequest;
      output: {};
    };
    sdk: {
      input: DeleteClientBrandingCommandInput;
      output: DeleteClientBrandingCommandOutput;
    };
  };
}
