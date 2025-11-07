// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ImportCustomWorkspaceImageRequest, ImportCustomWorkspaceImageResult } from "../models/models_0";
import { ImportCustomWorkspaceImage } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ImportCustomWorkspaceImageCommand}.
 */
export interface ImportCustomWorkspaceImageCommandInput extends ImportCustomWorkspaceImageRequest {}
/**
 * @public
 *
 * The output of {@link ImportCustomWorkspaceImageCommand}.
 */
export interface ImportCustomWorkspaceImageCommandOutput extends ImportCustomWorkspaceImageResult, __MetadataBearer {}

/**
 * <p>Imports the specified Windows 10 or 11 Bring Your Own License (BYOL)
 *          image into Amazon WorkSpaces using EC2 Image Builder. The image must be an already licensed image that is
 *          in your Amazon Web Services account, and you must own the image. For more information about
 *          creating BYOL images, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/byol-windows-images.html"> Bring Your Own Windows
 *             Desktop Licenses</a>.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, ImportCustomWorkspaceImageCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, ImportCustomWorkspaceImageCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * // import type { WorkSpacesClientConfig } from "@aws-sdk/client-workspaces";
 * const config = {}; // type is WorkSpacesClientConfig
 * const client = new WorkSpacesClient(config);
 * const input = { // ImportCustomWorkspaceImageRequest
 *   ImageName: "STRING_VALUE", // required
 *   ImageDescription: "STRING_VALUE", // required
 *   ComputeType: "BASE" || "GRAPHICS_G4DN", // required
 *   Protocol: "PCOIP" || "DCV" || "BYOP", // required
 *   ImageSource: { // ImageSourceIdentifier Union: only one key present
 *     Ec2ImportTaskId: "STRING_VALUE",
 *     ImageBuildVersionArn: "STRING_VALUE",
 *     Ec2ImageId: "STRING_VALUE",
 *   },
 *   InfrastructureConfigurationArn: "STRING_VALUE", // required
 *   Platform: "WINDOWS", // required
 *   OsVersion: "Windows_10" || "Windows_11", // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new ImportCustomWorkspaceImageCommand(input);
 * const response = await client.send(command);
 * // { // ImportCustomWorkspaceImageResult
 * //   ImageId: "STRING_VALUE",
 * //   State: "PENDING" || "IN_PROGRESS" || "COMPLETED" || "ERROR",
 * // };
 *
 * ```
 *
 * @param ImportCustomWorkspaceImageCommandInput - {@link ImportCustomWorkspaceImageCommandInput}
 * @returns {@link ImportCustomWorkspaceImageCommandOutput}
 * @see {@link ImportCustomWorkspaceImageCommandInput} for command's `input` shape.
 * @see {@link ImportCustomWorkspaceImageCommandOutput} for command's `response` shape.
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
export class ImportCustomWorkspaceImageCommand extends $Command
  .classBuilder<
    ImportCustomWorkspaceImageCommandInput,
    ImportCustomWorkspaceImageCommandOutput,
    WorkSpacesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WorkspacesService", "ImportCustomWorkspaceImage", {})
  .n("WorkSpacesClient", "ImportCustomWorkspaceImageCommand")
  .sc(ImportCustomWorkspaceImage)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ImportCustomWorkspaceImageRequest;
      output: ImportCustomWorkspaceImageResult;
    };
    sdk: {
      input: ImportCustomWorkspaceImageCommandInput;
      output: ImportCustomWorkspaceImageCommandOutput;
    };
  };
}
