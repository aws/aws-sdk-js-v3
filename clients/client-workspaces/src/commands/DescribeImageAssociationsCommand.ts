// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeImageAssociationsRequest, DescribeImageAssociationsResult } from "../models/models_0";
import { de_DescribeImageAssociationsCommand, se_DescribeImageAssociationsCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeImageAssociationsCommand}.
 */
export interface DescribeImageAssociationsCommandInput extends DescribeImageAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeImageAssociationsCommand}.
 */
export interface DescribeImageAssociationsCommandOutput extends DescribeImageAssociationsResult, __MetadataBearer {}

/**
 * <p>Describes the associations between the applications and the specified image.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, DescribeImageAssociationsCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, DescribeImageAssociationsCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new WorkSpacesClient(config);
 * const input = { // DescribeImageAssociationsRequest
 *   ImageId: "STRING_VALUE", // required
 *   AssociatedResourceTypes: [ // ImageAssociatedResourceTypeList // required
 *     "APPLICATION",
 *   ],
 * };
 * const command = new DescribeImageAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeImageAssociationsResult
 * //   Associations: [ // ImageResourceAssociationList
 * //     { // ImageResourceAssociation
 * //       AssociatedResourceId: "STRING_VALUE",
 * //       AssociatedResourceType: "APPLICATION",
 * //       Created: new Date("TIMESTAMP"),
 * //       LastUpdatedTime: new Date("TIMESTAMP"),
 * //       ImageId: "STRING_VALUE",
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
 * @param DescribeImageAssociationsCommandInput - {@link DescribeImageAssociationsCommandInput}
 * @returns {@link DescribeImageAssociationsCommandOutput}
 * @see {@link DescribeImageAssociationsCommandInput} for command's `input` shape.
 * @see {@link DescribeImageAssociationsCommandOutput} for command's `response` shape.
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
 * @public
 */
export class DescribeImageAssociationsCommand extends $Command
  .classBuilder<
    DescribeImageAssociationsCommandInput,
    DescribeImageAssociationsCommandOutput,
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
  .s("WorkspacesService", "DescribeImageAssociations", {})
  .n("WorkSpacesClient", "DescribeImageAssociationsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeImageAssociationsCommand)
  .de(de_DescribeImageAssociationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeImageAssociationsRequest;
      output: DescribeImageAssociationsResult;
    };
    sdk: {
      input: DescribeImageAssociationsCommandInput;
      output: DescribeImageAssociationsCommandOutput;
    };
  };
}
