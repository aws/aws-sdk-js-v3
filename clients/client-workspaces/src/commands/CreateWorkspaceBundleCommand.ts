// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateWorkspaceBundleRequest, CreateWorkspaceBundleResult } from "../models/models_0";
import { CreateWorkspaceBundle$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateWorkspaceBundleCommand}.
 */
export interface CreateWorkspaceBundleCommandInput extends CreateWorkspaceBundleRequest {}
/**
 * @public
 *
 * The output of {@link CreateWorkspaceBundleCommand}.
 */
export interface CreateWorkspaceBundleCommandOutput extends CreateWorkspaceBundleResult, __MetadataBearer {}

/**
 * <p>Creates the specified WorkSpace bundle. For more information about creating WorkSpace bundles, see
 *          <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/create-custom-bundle.html">
 *             Create a Custom WorkSpaces Image and Bundle</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, CreateWorkspaceBundleCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, CreateWorkspaceBundleCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * // import type { WorkSpacesClientConfig } from "@aws-sdk/client-workspaces";
 * const config = {}; // type is WorkSpacesClientConfig
 * const client = new WorkSpacesClient(config);
 * const input = { // CreateWorkspaceBundleRequest
 *   BundleName: "STRING_VALUE", // required
 *   BundleDescription: "STRING_VALUE", // required
 *   ImageId: "STRING_VALUE", // required
 *   ComputeType: { // ComputeType
 *     Name: "VALUE" || "STANDARD" || "PERFORMANCE" || "POWER" || "GRAPHICS" || "POWERPRO" || "GENERALPURPOSE_4XLARGE" || "GENERALPURPOSE_8XLARGE" || "GRAPHICSPRO" || "GRAPHICS_G4DN" || "GRAPHICSPRO_G4DN",
 *   },
 *   UserStorage: { // UserStorage
 *     Capacity: "STRING_VALUE", // required
 *   },
 *   RootStorage: { // RootStorage
 *     Capacity: "STRING_VALUE", // required
 *   },
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateWorkspaceBundleCommand(input);
 * const response = await client.send(command);
 * // { // CreateWorkspaceBundleResult
 * //   WorkspaceBundle: { // WorkspaceBundle
 * //     BundleId: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Owner: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     ImageId: "STRING_VALUE",
 * //     RootStorage: { // RootStorage
 * //       Capacity: "STRING_VALUE", // required
 * //     },
 * //     UserStorage: { // UserStorage
 * //       Capacity: "STRING_VALUE", // required
 * //     },
 * //     ComputeType: { // ComputeType
 * //       Name: "VALUE" || "STANDARD" || "PERFORMANCE" || "POWER" || "GRAPHICS" || "POWERPRO" || "GENERALPURPOSE_4XLARGE" || "GENERALPURPOSE_8XLARGE" || "GRAPHICSPRO" || "GRAPHICS_G4DN" || "GRAPHICSPRO_G4DN",
 * //     },
 * //     LastUpdatedTime: new Date("TIMESTAMP"),
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     State: "AVAILABLE" || "PENDING" || "ERROR",
 * //     BundleType: "REGULAR" || "STANDBY",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateWorkspaceBundleCommandInput - {@link CreateWorkspaceBundleCommandInput}
 * @returns {@link CreateWorkspaceBundleCommandOutput}
 * @see {@link CreateWorkspaceBundleCommandInput} for command's `input` shape.
 * @see {@link CreateWorkspaceBundleCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for WorkSpacesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The user is not authorized to access a resource.</p>
 *
 * @throws {@link InvalidParameterValuesException} (client fault)
 *  <p>One or more parameter values are not valid.</p>
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
 * @throws {@link ResourceUnavailableException} (client fault)
 *  <p>The specified resource is not available.</p>
 *
 * @throws {@link WorkSpacesServiceException}
 * <p>Base exception class for all service exceptions from WorkSpaces service.</p>
 *
 *
 * @public
 */
export class CreateWorkspaceBundleCommand extends $Command
  .classBuilder<
    CreateWorkspaceBundleCommandInput,
    CreateWorkspaceBundleCommandOutput,
    WorkSpacesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WorkspacesService", "CreateWorkspaceBundle", {})
  .n("WorkSpacesClient", "CreateWorkspaceBundleCommand")
  .sc(CreateWorkspaceBundle$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateWorkspaceBundleRequest;
      output: CreateWorkspaceBundleResult;
    };
    sdk: {
      input: CreateWorkspaceBundleCommandInput;
      output: CreateWorkspaceBundleCommandOutput;
    };
  };
}
