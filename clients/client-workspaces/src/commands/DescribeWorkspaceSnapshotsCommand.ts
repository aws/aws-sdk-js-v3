// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeWorkspaceSnapshotsRequest, DescribeWorkspaceSnapshotsResult } from "../models/models_0";
import { DescribeWorkspaceSnapshots$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

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
 * // import type { WorkSpacesClientConfig } from "@aws-sdk/client-workspaces";
 * const config = {}; // type is WorkSpacesClientConfig
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WorkspacesService", "DescribeWorkspaceSnapshots", {})
  .n("WorkSpacesClient", "DescribeWorkspaceSnapshotsCommand")
  .sc(DescribeWorkspaceSnapshots$)
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
