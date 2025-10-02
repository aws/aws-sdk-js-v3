// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeployWorkspaceApplicationsRequest, DeployWorkspaceApplicationsResult } from "../models/models_0";
import { de_DeployWorkspaceApplicationsCommand, se_DeployWorkspaceApplicationsCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeployWorkspaceApplicationsCommand}.
 */
export interface DeployWorkspaceApplicationsCommandInput extends DeployWorkspaceApplicationsRequest {}
/**
 * @public
 *
 * The output of {@link DeployWorkspaceApplicationsCommand}.
 */
export interface DeployWorkspaceApplicationsCommandOutput extends DeployWorkspaceApplicationsResult, __MetadataBearer {}

/**
 * <p>Deploys associated applications to the specified WorkSpace</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, DeployWorkspaceApplicationsCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, DeployWorkspaceApplicationsCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * // import type { WorkSpacesClientConfig } from "@aws-sdk/client-workspaces";
 * const config = {}; // type is WorkSpacesClientConfig
 * const client = new WorkSpacesClient(config);
 * const input = { // DeployWorkspaceApplicationsRequest
 *   WorkspaceId: "STRING_VALUE", // required
 *   Force: true || false,
 * };
 * const command = new DeployWorkspaceApplicationsCommand(input);
 * const response = await client.send(command);
 * // { // DeployWorkspaceApplicationsResult
 * //   Deployment: { // WorkSpaceApplicationDeployment
 * //     Associations: [ // WorkspaceResourceAssociationList
 * //       { // WorkspaceResourceAssociation
 * //         AssociatedResourceId: "STRING_VALUE",
 * //         AssociatedResourceType: "APPLICATION",
 * //         Created: new Date("TIMESTAMP"),
 * //         LastUpdatedTime: new Date("TIMESTAMP"),
 * //         State: "PENDING_INSTALL" || "PENDING_INSTALL_DEPLOYMENT" || "PENDING_UNINSTALL" || "PENDING_UNINSTALL_DEPLOYMENT" || "INSTALLING" || "UNINSTALLING" || "ERROR" || "COMPLETED" || "REMOVED",
 * //         StateReason: { // AssociationStateReason
 * //           ErrorCode: "ValidationError.InsufficientDiskSpace" || "ValidationError.InsufficientMemory" || "ValidationError.UnsupportedOperatingSystem" || "DeploymentError.InternalServerError" || "DeploymentError.WorkspaceUnreachable",
 * //           ErrorMessage: "STRING_VALUE",
 * //         },
 * //         WorkspaceId: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DeployWorkspaceApplicationsCommandInput - {@link DeployWorkspaceApplicationsCommandInput}
 * @returns {@link DeployWorkspaceApplicationsCommandOutput}
 * @see {@link DeployWorkspaceApplicationsCommandInput} for command's `input` shape.
 * @see {@link DeployWorkspaceApplicationsCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for WorkSpacesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The user is not authorized to access a resource.</p>
 *
 * @throws {@link IncompatibleApplicationsException} (client fault)
 *  <p>The specified application is not compatible with the resource.</p>
 *
 * @throws {@link InvalidParameterValuesException} (client fault)
 *  <p>One or more parameter values are not valid.</p>
 *
 * @throws {@link OperationNotSupportedException} (client fault)
 *  <p>This operation is not supported.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The specified resource is currently in use.</p>
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
export class DeployWorkspaceApplicationsCommand extends $Command
  .classBuilder<
    DeployWorkspaceApplicationsCommandInput,
    DeployWorkspaceApplicationsCommandOutput,
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
  .s("WorkspacesService", "DeployWorkspaceApplications", {})
  .n("WorkSpacesClient", "DeployWorkspaceApplicationsCommand")
  .f(void 0, void 0)
  .ser(se_DeployWorkspaceApplicationsCommand)
  .de(de_DeployWorkspaceApplicationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeployWorkspaceApplicationsRequest;
      output: DeployWorkspaceApplicationsResult;
    };
    sdk: {
      input: DeployWorkspaceApplicationsCommandInput;
      output: DeployWorkspaceApplicationsCommandOutput;
    };
  };
}
