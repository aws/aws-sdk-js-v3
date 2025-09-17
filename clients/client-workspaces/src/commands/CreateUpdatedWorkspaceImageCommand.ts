// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateUpdatedWorkspaceImageRequest, CreateUpdatedWorkspaceImageResult } from "../models/models_0";
import { de_CreateUpdatedWorkspaceImageCommand, se_CreateUpdatedWorkspaceImageCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateUpdatedWorkspaceImageCommand}.
 */
export interface CreateUpdatedWorkspaceImageCommandInput extends CreateUpdatedWorkspaceImageRequest {}
/**
 * @public
 *
 * The output of {@link CreateUpdatedWorkspaceImageCommand}.
 */
export interface CreateUpdatedWorkspaceImageCommandOutput extends CreateUpdatedWorkspaceImageResult, __MetadataBearer {}

/**
 * <p>Creates a new updated WorkSpace image based on the specified source image. The new
 *          updated WorkSpace image has the latest drivers and other updates required by the
 *          Amazon WorkSpaces components.</p>
 *          <p>To determine which WorkSpace images need to be updated with the latest Amazon WorkSpaces
 *          requirements, use <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaceImages.html">
 *             DescribeWorkspaceImages</a>.</p>
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>Only Windows 10, Windows Server 2016, and Windows Server 2019 WorkSpace images
 *                   can be programmatically updated at this time.</p>
 *                </li>
 *                <li>
 *                   <p>Microsoft Windows updates and other application updates are not included in the
 *                   update process.</p>
 *                </li>
 *                <li>
 *                   <p>The source WorkSpace image is not deleted. You can delete the source image
 *                   after you've verified your new updated image and created a new bundle. </p>
 *                </li>
 *             </ul>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, CreateUpdatedWorkspaceImageCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, CreateUpdatedWorkspaceImageCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * // import type { WorkSpacesClientConfig } from "@aws-sdk/client-workspaces";
 * const config = {}; // type is WorkSpacesClientConfig
 * const client = new WorkSpacesClient(config);
 * const input = { // CreateUpdatedWorkspaceImageRequest
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE", // required
 *   SourceImageId: "STRING_VALUE", // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateUpdatedWorkspaceImageCommand(input);
 * const response = await client.send(command);
 * // { // CreateUpdatedWorkspaceImageResult
 * //   ImageId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateUpdatedWorkspaceImageCommandInput - {@link CreateUpdatedWorkspaceImageCommandInput}
 * @returns {@link CreateUpdatedWorkspaceImageCommandOutput}
 * @see {@link CreateUpdatedWorkspaceImageCommandInput} for command's `input` shape.
 * @see {@link CreateUpdatedWorkspaceImageCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for WorkSpacesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The user is not authorized to access a resource.</p>
 *
 * @throws {@link InvalidParameterValuesException} (client fault)
 *  <p>One or more parameter values are not valid.</p>
 *
 * @throws {@link InvalidResourceStateException} (client fault)
 *  <p>The state of the resource is not valid for this operation.</p>
 *
 * @throws {@link OperationNotSupportedException} (client fault)
 *  <p>This operation is not supported.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The specified resource already exists.</p>
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *  <p>Your resource limits have been exceeded.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link WorkSpacesServiceException}
 * <p>Base exception class for all service exceptions from WorkSpaces service.</p>
 *
 *
 * @public
 */
export class CreateUpdatedWorkspaceImageCommand extends $Command
  .classBuilder<
    CreateUpdatedWorkspaceImageCommandInput,
    CreateUpdatedWorkspaceImageCommandOutput,
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
  .s("WorkspacesService", "CreateUpdatedWorkspaceImage", {})
  .n("WorkSpacesClient", "CreateUpdatedWorkspaceImageCommand")
  .f(void 0, void 0)
  .ser(se_CreateUpdatedWorkspaceImageCommand)
  .de(de_CreateUpdatedWorkspaceImageCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateUpdatedWorkspaceImageRequest;
      output: CreateUpdatedWorkspaceImageResult;
    };
    sdk: {
      input: CreateUpdatedWorkspaceImageCommandInput;
      output: CreateUpdatedWorkspaceImageCommandOutput;
    };
  };
}
