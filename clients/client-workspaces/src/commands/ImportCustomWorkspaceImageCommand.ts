// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ImportCustomWorkspaceImageRequest, ImportCustomWorkspaceImageResult } from "../models/models_0";
import { ImportCustomWorkspaceImage$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Imports the specified Windows 10 or 11 Bring Your Own License (BYOL) image into Amazon WorkSpaces using EC2 Image Builder. The image must be an already licensed image that is in your Amazon Web Services account, and you must own the image. For more information about creating BYOL images, see [Bring Your Own Windows Desktop Licenses](https://docs.aws.amazon.com/workspaces/latest/adminguide/byol-windows-images.html).
 *
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
 *   ComputeType: "BASE" || "GRAPHICS_G4DN" || "GRAPHICS_G6" || "GRAPHICS_G7", // required
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
 *   ImageValidationMode: "CUSTOMER_MANAGED" || "SERVICE_MANAGED",
 * };
 * const command = new ImportCustomWorkspaceImageCommand(input);
 * const response = await client.send(command);
 * // { // ImportCustomWorkspaceImageResult
 * //   ImageId: "STRING_VALUE",
 * //   State: "PENDING" || "IN_PROGRESS" || "PROCESSING_SOURCE_IMAGE" || "IMAGE_TESTING_START" || "UPDATING_OPERATING_SYSTEM" || "IMAGE_COMPATIBILITY_CHECKING" || "IMAGE_TESTING_GENERALIZATION" || "CREATING_TEST_INSTANCE" || "INSTALLING_COMPONENTS" || "GENERALIZING" || "VALIDATING" || "PUBLISHING" || "COMPLETED" || "ERROR",
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
 *
 * The user is not authorized to access a resource.
 *
 * @throws {@link InvalidParameterValuesException} (client fault)
 *
 * One or more parameter values are not valid.
 *
 * @throws {@link OperationNotSupportedException} (client fault)
 *
 * This operation is not supported.
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *
 * The specified resource already exists.
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *
 * Your resource limits have been exceeded.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource could not be found.
 *
 * @throws {@link WorkSpacesServiceException}
 *
 * Base exception class for all service exceptions from WorkSpaces service.
 *
 * @public
 */
export class ImportCustomWorkspaceImageCommand extends command<ImportCustomWorkspaceImageCommandInput, ImportCustomWorkspaceImageCommandOutput>(
  _ep0,
  _mw0,
  "ImportCustomWorkspaceImage",
  ImportCustomWorkspaceImage$
) {
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
