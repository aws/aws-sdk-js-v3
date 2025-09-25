// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteWorkspaceImageRequest, DeleteWorkspaceImageResult } from "../models/models_0";
import { DeleteWorkspaceImage } from "../schemas/schemas_23_Delete";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteWorkspaceImageCommand}.
 */
export interface DeleteWorkspaceImageCommandInput extends DeleteWorkspaceImageRequest {}
/**
 * @public
 *
 * The output of {@link DeleteWorkspaceImageCommand}.
 */
export interface DeleteWorkspaceImageCommandOutput extends DeleteWorkspaceImageResult, __MetadataBearer {}

/**
 * <p>Deletes the specified image from your account. To delete an image, you must first delete
 *          any bundles that are associated with the image and unshare the image if it is shared with
 *          other accounts. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, DeleteWorkspaceImageCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, DeleteWorkspaceImageCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * // import type { WorkSpacesClientConfig } from "@aws-sdk/client-workspaces";
 * const config = {}; // type is WorkSpacesClientConfig
 * const client = new WorkSpacesClient(config);
 * const input = { // DeleteWorkspaceImageRequest
 *   ImageId: "STRING_VALUE", // required
 * };
 * const command = new DeleteWorkspaceImageCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteWorkspaceImageCommandInput - {@link DeleteWorkspaceImageCommandInput}
 * @returns {@link DeleteWorkspaceImageCommandOutput}
 * @see {@link DeleteWorkspaceImageCommandInput} for command's `input` shape.
 * @see {@link DeleteWorkspaceImageCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for WorkSpacesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The user is not authorized to access a resource.</p>
 *
 * @throws {@link InvalidResourceStateException} (client fault)
 *  <p>The state of the resource is not valid for this operation.</p>
 *
 * @throws {@link ResourceAssociatedException} (client fault)
 *  <p>The resource is associated with a directory.</p>
 *
 * @throws {@link WorkSpacesServiceException}
 * <p>Base exception class for all service exceptions from WorkSpaces service.</p>
 *
 *
 * @public
 */
export class DeleteWorkspaceImageCommand extends $Command
  .classBuilder<
    DeleteWorkspaceImageCommandInput,
    DeleteWorkspaceImageCommandOutput,
    WorkSpacesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WorkspacesService", "DeleteWorkspaceImage", {})
  .n("WorkSpacesClient", "DeleteWorkspaceImageCommand")
  .sc(DeleteWorkspaceImage)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteWorkspaceImageRequest;
      output: {};
    };
    sdk: {
      input: DeleteWorkspaceImageCommandInput;
      output: DeleteWorkspaceImageCommandOutput;
    };
  };
}
