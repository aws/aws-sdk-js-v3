// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeWorkspaceAssociationsRequest, DescribeWorkspaceAssociationsResult } from "../models/models_0";
import { DescribeWorkspaceAssociations } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeWorkspaceAssociationsCommand}.
 */
export interface DescribeWorkspaceAssociationsCommandInput extends DescribeWorkspaceAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeWorkspaceAssociationsCommand}.
 */
export interface DescribeWorkspaceAssociationsCommandOutput
  extends DescribeWorkspaceAssociationsResult,
    __MetadataBearer {}

/**
 * <p>Describes the associations betweens applications and the specified WorkSpace.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, DescribeWorkspaceAssociationsCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, DescribeWorkspaceAssociationsCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * // import type { WorkSpacesClientConfig } from "@aws-sdk/client-workspaces";
 * const config = {}; // type is WorkSpacesClientConfig
 * const client = new WorkSpacesClient(config);
 * const input = { // DescribeWorkspaceAssociationsRequest
 *   WorkspaceId: "STRING_VALUE", // required
 *   AssociatedResourceTypes: [ // WorkSpaceAssociatedResourceTypeList // required
 *     "APPLICATION",
 *   ],
 * };
 * const command = new DescribeWorkspaceAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeWorkspaceAssociationsResult
 * //   Associations: [ // WorkspaceResourceAssociationList
 * //     { // WorkspaceResourceAssociation
 * //       AssociatedResourceId: "STRING_VALUE",
 * //       AssociatedResourceType: "APPLICATION",
 * //       Created: new Date("TIMESTAMP"),
 * //       LastUpdatedTime: new Date("TIMESTAMP"),
 * //       State: "PENDING_INSTALL" || "PENDING_INSTALL_DEPLOYMENT" || "PENDING_UNINSTALL" || "PENDING_UNINSTALL_DEPLOYMENT" || "INSTALLING" || "UNINSTALLING" || "ERROR" || "COMPLETED" || "REMOVED",
 * //       StateReason: { // AssociationStateReason
 * //         ErrorCode: "ValidationError.InsufficientDiskSpace" || "ValidationError.InsufficientMemory" || "ValidationError.UnsupportedOperatingSystem" || "DeploymentError.InternalServerError" || "DeploymentError.WorkspaceUnreachable",
 * //         ErrorMessage: "STRING_VALUE",
 * //       },
 * //       WorkspaceId: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeWorkspaceAssociationsCommandInput - {@link DescribeWorkspaceAssociationsCommandInput}
 * @returns {@link DescribeWorkspaceAssociationsCommandOutput}
 * @see {@link DescribeWorkspaceAssociationsCommandInput} for command's `input` shape.
 * @see {@link DescribeWorkspaceAssociationsCommandOutput} for command's `response` shape.
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
 * @throws {@link WorkSpacesServiceException}
 * <p>Base exception class for all service exceptions from WorkSpaces service.</p>
 *
 *
 * @public
 */
export class DescribeWorkspaceAssociationsCommand extends $Command
  .classBuilder<
    DescribeWorkspaceAssociationsCommandInput,
    DescribeWorkspaceAssociationsCommandOutput,
    WorkSpacesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WorkspacesService", "DescribeWorkspaceAssociations", {})
  .n("WorkSpacesClient", "DescribeWorkspaceAssociationsCommand")
  .sc(DescribeWorkspaceAssociations)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeWorkspaceAssociationsRequest;
      output: DescribeWorkspaceAssociationsResult;
    };
    sdk: {
      input: DescribeWorkspaceAssociationsCommandInput;
      output: DescribeWorkspaceAssociationsCommandOutput;
    };
  };
}
