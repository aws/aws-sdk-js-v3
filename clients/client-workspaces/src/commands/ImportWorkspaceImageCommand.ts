// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ImportWorkspaceImageRequest, ImportWorkspaceImageResult } from "../models/models_0";
import { de_ImportWorkspaceImageCommand, se_ImportWorkspaceImageCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ImportWorkspaceImageCommand}.
 */
export interface ImportWorkspaceImageCommandInput extends ImportWorkspaceImageRequest {}
/**
 * @public
 *
 * The output of {@link ImportWorkspaceImageCommand}.
 */
export interface ImportWorkspaceImageCommandOutput extends ImportWorkspaceImageResult, __MetadataBearer {}

/**
 * <p>Imports the specified Windows 10 or 11 Bring Your Own License (BYOL)
 *          image into Amazon WorkSpaces. The image must be an already licensed Amazon EC2 image that is
 *          in your Amazon Web Services account, and you must own the image. For more information about
 *          creating BYOL images, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/byol-windows-images.html"> Bring Your Own Windows
 *             Desktop Licenses</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, ImportWorkspaceImageCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, ImportWorkspaceImageCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new WorkSpacesClient(config);
 * const input = { // ImportWorkspaceImageRequest
 *   Ec2ImageId: "STRING_VALUE", // required
 *   IngestionProcess: "BYOL_REGULAR" || "BYOL_GRAPHICS" || "BYOL_GRAPHICSPRO" || "BYOL_GRAPHICS_G4DN" || "BYOL_REGULAR_WSP" || "BYOL_GRAPHICS_G4DN_WSP" || "BYOL_REGULAR_BYOP" || "BYOL_GRAPHICS_G4DN_BYOP", // required
 *   ImageName: "STRING_VALUE", // required
 *   ImageDescription: "STRING_VALUE", // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   Applications: [ // ApplicationList
 *     "Microsoft_Office_2016" || "Microsoft_Office_2019",
 *   ],
 * };
 * const command = new ImportWorkspaceImageCommand(input);
 * const response = await client.send(command);
 * // { // ImportWorkspaceImageResult
 * //   ImageId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ImportWorkspaceImageCommandInput - {@link ImportWorkspaceImageCommandInput}
 * @returns {@link ImportWorkspaceImageCommandOutput}
 * @see {@link ImportWorkspaceImageCommandInput} for command's `input` shape.
 * @see {@link ImportWorkspaceImageCommandOutput} for command's `response` shape.
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
 * @public
 */
export class ImportWorkspaceImageCommand extends $Command
  .classBuilder<
    ImportWorkspaceImageCommandInput,
    ImportWorkspaceImageCommandOutput,
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
  .s("WorkspacesService", "ImportWorkspaceImage", {})
  .n("WorkSpacesClient", "ImportWorkspaceImageCommand")
  .f(void 0, void 0)
  .ser(se_ImportWorkspaceImageCommand)
  .de(de_ImportWorkspaceImageCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ImportWorkspaceImageRequest;
      output: ImportWorkspaceImageResult;
    };
    sdk: {
      input: ImportWorkspaceImageCommandInput;
      output: ImportWorkspaceImageCommandOutput;
    };
  };
}
