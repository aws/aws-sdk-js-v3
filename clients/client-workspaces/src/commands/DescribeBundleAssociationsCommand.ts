// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeBundleAssociationsRequest, DescribeBundleAssociationsResult } from "../models/models_0";
import { DescribeBundleAssociations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Describes the associations between the applications and the specified bundle.
 *
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
 * //         ErrorCode: "ValidationError.InsufficientDiskSpace" || "ValidationError.InsufficientMemory" || "ValidationError.UnsupportedOperatingSystem" || "DeploymentError.InternalServerError" || "DeploymentError.WorkspaceUnreachable" || "ValidationError.ApplicationOldVersionExists",
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
export class DescribeBundleAssociationsCommand extends command<DescribeBundleAssociationsCommandInput, DescribeBundleAssociationsCommandOutput>(
  _ep0,
  _mw0,
  "DescribeBundleAssociations",
  DescribeBundleAssociations$
) {
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
