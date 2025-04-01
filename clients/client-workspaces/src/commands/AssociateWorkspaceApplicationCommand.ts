// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { AssociateWorkspaceApplicationRequest, AssociateWorkspaceApplicationResult } from "../models/models_0";
import {
  de_AssociateWorkspaceApplicationCommand,
  se_AssociateWorkspaceApplicationCommand,
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
 * The input for {@link AssociateWorkspaceApplicationCommand}.
 */
export interface AssociateWorkspaceApplicationCommandInput extends AssociateWorkspaceApplicationRequest {}
/**
 * @public
 *
 * The output of {@link AssociateWorkspaceApplicationCommand}.
 */
export interface AssociateWorkspaceApplicationCommandOutput
  extends AssociateWorkspaceApplicationResult,
    __MetadataBearer {}

/**
 * <p>Associates the specified application to the specified WorkSpace.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, AssociateWorkspaceApplicationCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, AssociateWorkspaceApplicationCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const input = { // AssociateWorkspaceApplicationRequest
 *   WorkspaceId: "STRING_VALUE", // required
 *   ApplicationId: "STRING_VALUE", // required
 * };
 * const command = new AssociateWorkspaceApplicationCommand(input);
 * const response = await client.send(command);
 * // { // AssociateWorkspaceApplicationResult
 * //   Association: { // WorkspaceResourceAssociation
 * //     AssociatedResourceId: "STRING_VALUE",
 * //     AssociatedResourceType: "APPLICATION",
 * //     Created: new Date("TIMESTAMP"),
 * //     LastUpdatedTime: new Date("TIMESTAMP"),
 * //     State: "PENDING_INSTALL" || "PENDING_INSTALL_DEPLOYMENT" || "PENDING_UNINSTALL" || "PENDING_UNINSTALL_DEPLOYMENT" || "INSTALLING" || "UNINSTALLING" || "ERROR" || "COMPLETED" || "REMOVED",
 * //     StateReason: { // AssociationStateReason
 * //       ErrorCode: "ValidationError.InsufficientDiskSpace" || "ValidationError.InsufficientMemory" || "ValidationError.UnsupportedOperatingSystem" || "DeploymentError.InternalServerError" || "DeploymentError.WorkspaceUnreachable",
 * //       ErrorMessage: "STRING_VALUE",
 * //     },
 * //     WorkspaceId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param AssociateWorkspaceApplicationCommandInput - {@link AssociateWorkspaceApplicationCommandInput}
 * @returns {@link AssociateWorkspaceApplicationCommandOutput}
 * @see {@link AssociateWorkspaceApplicationCommandInput} for command's `input` shape.
 * @see {@link AssociateWorkspaceApplicationCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for WorkSpacesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The user is not authorized to access a resource.</p>
 *
 * @throws {@link ApplicationNotSupportedException} (client fault)
 *  <p>The specified application is not supported.</p>
 *
 * @throws {@link ComputeNotCompatibleException} (client fault)
 *  <p>The compute type of the WorkSpace is not compatible with the application.</p>
 *
 * @throws {@link IncompatibleApplicationsException} (client fault)
 *  <p>The specified application is not compatible with the resource.</p>
 *
 * @throws {@link InvalidParameterValuesException} (client fault)
 *  <p>One or more parameter values are not valid.</p>
 *
 * @throws {@link OperatingSystemNotCompatibleException} (client fault)
 *  <p>The operating system of the WorkSpace is not compatible with the application.</p>
 *
 * @throws {@link OperationNotSupportedException} (client fault)
 *  <p>This operation is not supported.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The specified resource already exists.</p>
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
export class AssociateWorkspaceApplicationCommand extends $Command
  .classBuilder<
    AssociateWorkspaceApplicationCommandInput,
    AssociateWorkspaceApplicationCommandOutput,
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
  .s("WorkspacesService", "AssociateWorkspaceApplication", {})
  .n("WorkSpacesClient", "AssociateWorkspaceApplicationCommand")
  .f(void 0, void 0)
  .ser(se_AssociateWorkspaceApplicationCommand)
  .de(de_AssociateWorkspaceApplicationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateWorkspaceApplicationRequest;
      output: AssociateWorkspaceApplicationResult;
    };
    sdk: {
      input: AssociateWorkspaceApplicationCommandInput;
      output: AssociateWorkspaceApplicationCommandOutput;
    };
  };
}
