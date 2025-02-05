// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeWorkspaceSnapshotsRequest, DescribeWorkspaceSnapshotsResult } from "../models/models_0";
import { de_DescribeWorkspaceSnapshotsCommand, se_DescribeWorkspaceSnapshotsCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeWorkspaceSnapshotsCommand}.
 */
export interface DescribeWorkspaceSnapshotsCommandInput extends DescribeWorkspaceSnapshotsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeWorkspaceSnapshotsCommand}.
 */
export interface DescribeWorkspaceSnapshotsCommandOutput extends DescribeWorkspaceSnapshotsResult, __MetadataBearer {}

/**
 * <p>Describes the snapshots for the specified WorkSpace.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, DescribeWorkspaceSnapshotsCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, DescribeWorkspaceSnapshotsCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new WorkSpacesClient(config);
 * const input = { // DescribeWorkspaceSnapshotsRequest
 *   WorkspaceId: "STRING_VALUE", // required
 * };
 * const command = new DescribeWorkspaceSnapshotsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeWorkspaceSnapshotsResult
 * //   RebuildSnapshots: [ // SnapshotList
 * //     { // Snapshot
 * //       SnapshotTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   RestoreSnapshots: [
 * //     {
 * //       SnapshotTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeWorkspaceSnapshotsCommandInput - {@link DescribeWorkspaceSnapshotsCommandInput}
 * @returns {@link DescribeWorkspaceSnapshotsCommandOutput}
 * @see {@link DescribeWorkspaceSnapshotsCommandInput} for command's `input` shape.
 * @see {@link DescribeWorkspaceSnapshotsCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for WorkSpacesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The user is not authorized to access a resource.</p>
 *
 * @throws {@link InvalidParameterValuesException} (client fault)
 *  <p>One or more parameter values are not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link WorkSpacesServiceException}
 * <p>Base exception class for all service exceptions from WorkSpaces service.</p>
 *
 * @public
 */
export class DescribeWorkspaceSnapshotsCommand extends $Command
  .classBuilder<
    DescribeWorkspaceSnapshotsCommandInput,
    DescribeWorkspaceSnapshotsCommandOutput,
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
  .s("WorkspacesService", "DescribeWorkspaceSnapshots", {})
  .n("WorkSpacesClient", "DescribeWorkspaceSnapshotsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeWorkspaceSnapshotsCommand)
  .de(de_DescribeWorkspaceSnapshotsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeWorkspaceSnapshotsRequest;
      output: DescribeWorkspaceSnapshotsResult;
    };
    sdk: {
      input: DescribeWorkspaceSnapshotsCommandInput;
      output: DescribeWorkspaceSnapshotsCommandOutput;
    };
  };
}
