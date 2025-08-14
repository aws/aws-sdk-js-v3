// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeCustomWorkspaceImageImportRequest,
  DescribeCustomWorkspaceImageImportResult,
} from "../models/models_0";
import {
  de_DescribeCustomWorkspaceImageImportCommand,
  se_DescribeCustomWorkspaceImageImportCommand,
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
 * The input for {@link DescribeCustomWorkspaceImageImportCommand}.
 */
export interface DescribeCustomWorkspaceImageImportCommandInput extends DescribeCustomWorkspaceImageImportRequest {}
/**
 * @public
 *
 * The output of {@link DescribeCustomWorkspaceImageImportCommand}.
 */
export interface DescribeCustomWorkspaceImageImportCommandOutput
  extends DescribeCustomWorkspaceImageImportResult,
    __MetadataBearer {}

/**
 * <p>Retrieves information about a WorkSpace BYOL image being imported via ImportCustomWorkspaceImage.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, DescribeCustomWorkspaceImageImportCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, DescribeCustomWorkspaceImageImportCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const input = { // DescribeCustomWorkspaceImageImportRequest
 *   ImageId: "STRING_VALUE", // required
 * };
 * const command = new DescribeCustomWorkspaceImageImportCommand(input);
 * const response = await client.send(command);
 * // { // DescribeCustomWorkspaceImageImportResult
 * //   ImageId: "STRING_VALUE",
 * //   InfrastructureConfigurationArn: "STRING_VALUE",
 * //   State: "PENDING" || "IN_PROGRESS" || "COMPLETED" || "ERROR",
 * //   Created: new Date("TIMESTAMP"),
 * //   LastUpdatedTime: new Date("TIMESTAMP"),
 * //   ImageSource: { // ImageSourceIdentifier Union: only one key present
 * //     Ec2ImportTaskId: "STRING_VALUE",
 * //     ImageBuildVersionArn: "STRING_VALUE",
 * //     Ec2ImageId: "STRING_VALUE",
 * //   },
 * //   ImageBuilderInstanceId: "STRING_VALUE",
 * //   ErrorDetails: [ // CustomWorkspaceImageImportErrorDetailsList
 * //     { // CustomWorkspaceImageImportErrorDetails
 * //       ErrorCode: "STRING_VALUE",
 * //       ErrorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeCustomWorkspaceImageImportCommandInput - {@link DescribeCustomWorkspaceImageImportCommandInput}
 * @returns {@link DescribeCustomWorkspaceImageImportCommandOutput}
 * @see {@link DescribeCustomWorkspaceImageImportCommandInput} for command's `input` shape.
 * @see {@link DescribeCustomWorkspaceImageImportCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for WorkSpacesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The user is not authorized to access a resource.</p>
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
export class DescribeCustomWorkspaceImageImportCommand extends $Command
  .classBuilder<
    DescribeCustomWorkspaceImageImportCommandInput,
    DescribeCustomWorkspaceImageImportCommandOutput,
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
  .s("WorkspacesService", "DescribeCustomWorkspaceImageImport", {})
  .n("WorkSpacesClient", "DescribeCustomWorkspaceImageImportCommand")
  .f(void 0, void 0)
  .ser(se_DescribeCustomWorkspaceImageImportCommand)
  .de(de_DescribeCustomWorkspaceImageImportCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeCustomWorkspaceImageImportRequest;
      output: DescribeCustomWorkspaceImageImportResult;
    };
    sdk: {
      input: DescribeCustomWorkspaceImageImportCommandInput;
      output: DescribeCustomWorkspaceImageImportCommandOutput;
    };
  };
}
