// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeBundleAssociationsRequest, DescribeBundleAssociationsResult } from "../models/models_0";
import { DescribeBundleAssociations } from "../schemas/schemas_9_Workspace";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeBundleAssociationsCommand}.
 */
export interface DescribeBundleAssociationsCommandInput extends DescribeBundleAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeBundleAssociationsCommand}.
 */
export interface DescribeBundleAssociationsCommandOutput extends DescribeBundleAssociationsResult, __MetadataBearer {}

/**
 * <p>Describes the associations between the applications and the specified bundle.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, DescribeBundleAssociationsCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, DescribeBundleAssociationsCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * // import type { WorkSpacesClientConfig } from "@aws-sdk/client-workspaces";
 * const config = {}; // type is WorkSpacesClientConfig
 * const client = new WorkSpacesClient(config);
 * const input = { // DescribeBundleAssociationsRequest
 *   BundleId: "STRING_VALUE", // required
 *   AssociatedResourceTypes: [ // BundleAssociatedResourceTypeList // required
 *     "APPLICATION",
 *   ],
 * };
 * const command = new DescribeBundleAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeBundleAssociationsResult
 * //   Associations: [ // BundleResourceAssociationList
 * //     { // BundleResourceAssociation
 * //       AssociatedResourceId: "STRING_VALUE",
 * //       AssociatedResourceType: "APPLICATION",
 * //       BundleId: "STRING_VALUE",
 * //       Created: new Date("TIMESTAMP"),
 * //       LastUpdatedTime: new Date("TIMESTAMP"),
 * //       State: "PENDING_INSTALL" || "PENDING_INSTALL_DEPLOYMENT" || "PENDING_UNINSTALL" || "PENDING_UNINSTALL_DEPLOYMENT" || "INSTALLING" || "UNINSTALLING" || "ERROR" || "COMPLETED" || "REMOVED",
 * //       StateReason: { // AssociationStateReason
 * //         ErrorCode: "ValidationError.InsufficientDiskSpace" || "ValidationError.InsufficientMemory" || "ValidationError.UnsupportedOperatingSystem" || "DeploymentError.InternalServerError" || "DeploymentError.WorkspaceUnreachable",
 * //         ErrorMessage: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeBundleAssociationsCommandInput - {@link DescribeBundleAssociationsCommandInput}
 * @returns {@link DescribeBundleAssociationsCommandOutput}
 * @see {@link DescribeBundleAssociationsCommandInput} for command's `input` shape.
 * @see {@link DescribeBundleAssociationsCommandOutput} for command's `response` shape.
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
export class DescribeBundleAssociationsCommand extends $Command
  .classBuilder<
    DescribeBundleAssociationsCommandInput,
    DescribeBundleAssociationsCommandOutput,
    WorkSpacesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WorkspacesService", "DescribeBundleAssociations", {})
  .n("WorkSpacesClient", "DescribeBundleAssociationsCommand")
  .sc(DescribeBundleAssociations)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeBundleAssociationsRequest;
      output: DescribeBundleAssociationsResult;
    };
    sdk: {
      input: DescribeBundleAssociationsCommandInput;
      output: DescribeBundleAssociationsCommandOutput;
    };
  };
}
