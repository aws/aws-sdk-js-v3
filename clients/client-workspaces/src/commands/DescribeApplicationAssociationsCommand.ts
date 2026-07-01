// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeApplicationAssociationsRequest, DescribeApplicationAssociationsResult } from "../models/models_0";
import { DescribeApplicationAssociations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeApplicationAssociationsCommand}.
 */
export interface DescribeApplicationAssociationsCommandInput extends DescribeApplicationAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeApplicationAssociationsCommand}.
 */
export interface DescribeApplicationAssociationsCommandOutput extends DescribeApplicationAssociationsResult, __MetadataBearer {}

/**
 * <p>Describes the associations between the application and the specified associated resources.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, DescribeApplicationAssociationsCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, DescribeApplicationAssociationsCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * // import type { WorkSpacesClientConfig } from "@aws-sdk/client-workspaces";
 * const config = {}; // type is WorkSpacesClientConfig
 * const client = new WorkSpacesClient(config);
 * const input = { // DescribeApplicationAssociationsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   ApplicationId: "STRING_VALUE", // required
 *   AssociatedResourceTypes: [ // ApplicationAssociatedResourceTypeList // required
 *     "WORKSPACE" || "BUNDLE" || "IMAGE",
 *   ],
 * };
 * const command = new DescribeApplicationAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeApplicationAssociationsResult
 * //   Associations: [ // ApplicationResourceAssociationList
 * //     { // ApplicationResourceAssociation
 * //       ApplicationId: "STRING_VALUE",
 * //       AssociatedResourceId: "STRING_VALUE",
 * //       AssociatedResourceType: "WORKSPACE" || "BUNDLE" || "IMAGE",
 * //       Created: new Date("TIMESTAMP"),
 * //       LastUpdatedTime: new Date("TIMESTAMP"),
 * //       State: "PENDING_INSTALL" || "PENDING_INSTALL_DEPLOYMENT" || "PENDING_UNINSTALL" || "PENDING_UNINSTALL_DEPLOYMENT" || "INSTALLING" || "UNINSTALLING" || "ERROR" || "COMPLETED" || "REMOVED",
 * //       StateReason: { // AssociationStateReason
 * //         ErrorCode: "ValidationError.InsufficientDiskSpace" || "ValidationError.InsufficientMemory" || "ValidationError.UnsupportedOperatingSystem" || "DeploymentError.InternalServerError" || "DeploymentError.WorkspaceUnreachable" || "ValidationError.ApplicationOldVersionExists",
 * //         ErrorMessage: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeApplicationAssociationsCommandInput - {@link DescribeApplicationAssociationsCommandInput}
 * @returns {@link DescribeApplicationAssociationsCommandOutput}
 * @see {@link DescribeApplicationAssociationsCommandInput} for command's `input` shape.
 * @see {@link DescribeApplicationAssociationsCommandOutput} for command's `response` shape.
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
export class DescribeApplicationAssociationsCommand extends command<DescribeApplicationAssociationsCommandInput, DescribeApplicationAssociationsCommandOutput>(
  _ep0,
  _mw0,
  "DescribeApplicationAssociations",
  DescribeApplicationAssociations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeApplicationAssociationsRequest;
      output: DescribeApplicationAssociationsResult;
    };
    sdk: {
      input: DescribeApplicationAssociationsCommandInput;
      output: DescribeApplicationAssociationsCommandOutput;
    };
  };
}
