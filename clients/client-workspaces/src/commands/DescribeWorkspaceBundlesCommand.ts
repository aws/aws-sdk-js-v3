// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeWorkspaceBundlesRequest, DescribeWorkspaceBundlesResult } from "../models/models_0";
import { DescribeWorkspaceBundles } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeWorkspaceBundlesCommand}.
 */
export interface DescribeWorkspaceBundlesCommandInput extends DescribeWorkspaceBundlesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeWorkspaceBundlesCommand}.
 */
export interface DescribeWorkspaceBundlesCommandOutput extends DescribeWorkspaceBundlesResult, __MetadataBearer {}

/**
 * <p>Retrieves a list that describes the available WorkSpace bundles.</p>
 *          <p>You can filter the results using either bundle ID or owner, but not both.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, DescribeWorkspaceBundlesCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, DescribeWorkspaceBundlesCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * // import type { WorkSpacesClientConfig } from "@aws-sdk/client-workspaces";
 * const config = {}; // type is WorkSpacesClientConfig
 * const client = new WorkSpacesClient(config);
 * const input = { // DescribeWorkspaceBundlesRequest
 *   BundleIds: [ // BundleIdList
 *     "STRING_VALUE",
 *   ],
 *   Owner: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeWorkspaceBundlesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeWorkspaceBundlesResult
 * //   Bundles: [ // BundleList
 * //     { // WorkspaceBundle
 * //       BundleId: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Owner: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       ImageId: "STRING_VALUE",
 * //       RootStorage: { // RootStorage
 * //         Capacity: "STRING_VALUE", // required
 * //       },
 * //       UserStorage: { // UserStorage
 * //         Capacity: "STRING_VALUE", // required
 * //       },
 * //       ComputeType: { // ComputeType
 * //         Name: "VALUE" || "STANDARD" || "PERFORMANCE" || "POWER" || "GRAPHICS" || "POWERPRO" || "GENERALPURPOSE_4XLARGE" || "GENERALPURPOSE_8XLARGE" || "GRAPHICSPRO" || "GRAPHICS_G4DN" || "GRAPHICSPRO_G4DN",
 * //       },
 * //       LastUpdatedTime: new Date("TIMESTAMP"),
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       State: "AVAILABLE" || "PENDING" || "ERROR",
 * //       BundleType: "REGULAR" || "STANDBY",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeWorkspaceBundlesCommandInput - {@link DescribeWorkspaceBundlesCommandInput}
 * @returns {@link DescribeWorkspaceBundlesCommandOutput}
 * @see {@link DescribeWorkspaceBundlesCommandInput} for command's `input` shape.
 * @see {@link DescribeWorkspaceBundlesCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for WorkSpacesClient's `config` shape.
 *
 * @throws {@link InvalidParameterValuesException} (client fault)
 *  <p>One or more parameter values are not valid.</p>
 *
 * @throws {@link WorkSpacesServiceException}
 * <p>Base exception class for all service exceptions from WorkSpaces service.</p>
 *
 *
 * @public
 */
export class DescribeWorkspaceBundlesCommand extends $Command
  .classBuilder<
    DescribeWorkspaceBundlesCommandInput,
    DescribeWorkspaceBundlesCommandOutput,
    WorkSpacesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WorkspacesService", "DescribeWorkspaceBundles", {})
  .n("WorkSpacesClient", "DescribeWorkspaceBundlesCommand")
  .sc(DescribeWorkspaceBundles)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeWorkspaceBundlesRequest;
      output: DescribeWorkspaceBundlesResult;
    };
    sdk: {
      input: DescribeWorkspaceBundlesCommandInput;
      output: DescribeWorkspaceBundlesCommandOutput;
    };
  };
}
