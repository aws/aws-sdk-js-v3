// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateWorkspaceImagePermissionRequest, UpdateWorkspaceImagePermissionResult } from "../models/models_1";
import {
  de_UpdateWorkspaceImagePermissionCommand,
  se_UpdateWorkspaceImagePermissionCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateWorkspaceImagePermissionCommand}.
 */
export interface UpdateWorkspaceImagePermissionCommandInput extends UpdateWorkspaceImagePermissionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateWorkspaceImagePermissionCommand}.
 */
export interface UpdateWorkspaceImagePermissionCommandOutput
  extends UpdateWorkspaceImagePermissionResult,
    __MetadataBearer {}

/**
 * <p>Shares or unshares an image with one account in the same Amazon Web Services Region by
 *          specifying whether that account has permission to copy the image. If the copy image
 *          permission is granted, the image is shared with that account. If the copy image permission
 *          is revoked, the image is unshared with the account.</p>
 *          <p>After an image has been shared, the recipient account can copy the image to other
 *          Regions as needed.</p>
 *          <p>In the China (Ningxia) Region, you can copy images only within the same Region.</p>
 *          <p>In Amazon Web Services GovCloud (US), to copy images to and from other Regions, contact Amazon Web ServicesSupport.</p>
 *          <p>For more information about sharing images, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/share-custom-image.html"> Share or Unshare a Custom
 *             WorkSpaces Image</a>.</p>
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>To delete an image that has been shared, you must unshare the image before you
 *                   delete it.</p>
 *                </li>
 *                <li>
 *                   <p>Sharing Bring Your Own License (BYOL) images across Amazon Web Services accounts
 *                   isn't supported at this time in Amazon Web Services GovCloud (US). To share BYOL images
 *                   across accounts in Amazon Web Services GovCloud (US), contact Amazon Web ServicesSupport.</p>
 *                </li>
 *             </ul>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, UpdateWorkspaceImagePermissionCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, UpdateWorkspaceImagePermissionCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * // import type { WorkSpacesClientConfig } from "@aws-sdk/client-workspaces";
 * const config = {}; // type is WorkSpacesClientConfig
 * const client = new WorkSpacesClient(config);
 * const input = { // UpdateWorkspaceImagePermissionRequest
 *   ImageId: "STRING_VALUE", // required
 *   AllowCopyImage: true || false, // required
 *   SharedAccountId: "STRING_VALUE", // required
 * };
 * const command = new UpdateWorkspaceImagePermissionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateWorkspaceImagePermissionCommandInput - {@link UpdateWorkspaceImagePermissionCommandInput}
 * @returns {@link UpdateWorkspaceImagePermissionCommandOutput}
 * @see {@link UpdateWorkspaceImagePermissionCommandInput} for command's `input` shape.
 * @see {@link UpdateWorkspaceImagePermissionCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for WorkSpacesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The user is not authorized to access a resource.</p>
 *
 * @throws {@link InvalidParameterValuesException} (client fault)
 *  <p>One or more parameter values are not valid.</p>
 *
 * @throws {@link OperationNotSupportedException} (client fault)
 *  <p>This operation is not supported.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link ResourceUnavailableException} (client fault)
 *  <p>The specified resource is not available.</p>
 *
 * @throws {@link WorkSpacesServiceException}
 * <p>Base exception class for all service exceptions from WorkSpaces service.</p>
 *
 *
 * @public
 */
export class UpdateWorkspaceImagePermissionCommand extends $Command
  .classBuilder<
    UpdateWorkspaceImagePermissionCommandInput,
    UpdateWorkspaceImagePermissionCommandOutput,
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
  .s("WorkspacesService", "UpdateWorkspaceImagePermission", {})
  .n("WorkSpacesClient", "UpdateWorkspaceImagePermissionCommand")
  .f(void 0, void 0)
  .ser(se_UpdateWorkspaceImagePermissionCommand)
  .de(de_UpdateWorkspaceImagePermissionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateWorkspaceImagePermissionRequest;
      output: {};
    };
    sdk: {
      input: UpdateWorkspaceImagePermissionCommandInput;
      output: UpdateWorkspaceImagePermissionCommandOutput;
    };
  };
}
