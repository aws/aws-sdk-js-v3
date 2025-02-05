// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { RebuildWorkspacesRequest, RebuildWorkspacesResult } from "../models/models_0";
import { de_RebuildWorkspacesCommand, se_RebuildWorkspacesCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RebuildWorkspacesCommand}.
 */
export interface RebuildWorkspacesCommandInput extends RebuildWorkspacesRequest {}
/**
 * @public
 *
 * The output of {@link RebuildWorkspacesCommand}.
 */
export interface RebuildWorkspacesCommandOutput extends RebuildWorkspacesResult, __MetadataBearer {}

/**
 * <p>Rebuilds the specified WorkSpace.</p>
 *          <p>You cannot rebuild a WorkSpace unless its state is <code>AVAILABLE</code>,
 *             <code>ERROR</code>, <code>UNHEALTHY</code>, <code>STOPPED</code>, or
 *             <code>REBOOTING</code>.</p>
 *          <p>Rebuilding a WorkSpace is a potentially destructive action that can result in the loss
 *          of data. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/reset-workspace.html">Rebuild a
 *          WorkSpace</a>.</p>
 *          <p>This operation is asynchronous and returns before the WorkSpaces have been completely
 *          rebuilt.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, RebuildWorkspacesCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, RebuildWorkspacesCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new WorkSpacesClient(config);
 * const input = { // RebuildWorkspacesRequest
 *   RebuildWorkspaceRequests: [ // RebuildWorkspaceRequests // required
 *     { // RebuildRequest
 *       WorkspaceId: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new RebuildWorkspacesCommand(input);
 * const response = await client.send(command);
 * // { // RebuildWorkspacesResult
 * //   FailedRequests: [ // FailedRebuildWorkspaceRequests
 * //     { // FailedWorkspaceChangeRequest
 * //       WorkspaceId: "STRING_VALUE",
 * //       ErrorCode: "STRING_VALUE",
 * //       ErrorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param RebuildWorkspacesCommandInput - {@link RebuildWorkspacesCommandInput}
 * @returns {@link RebuildWorkspacesCommandOutput}
 * @see {@link RebuildWorkspacesCommandInput} for command's `input` shape.
 * @see {@link RebuildWorkspacesCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for WorkSpacesClient's `config` shape.
 *
 * @throws {@link OperationNotSupportedException} (client fault)
 *  <p>This operation is not supported.</p>
 *
 * @throws {@link WorkSpacesServiceException}
 * <p>Base exception class for all service exceptions from WorkSpaces service.</p>
 *
 * @public
 */
export class RebuildWorkspacesCommand extends $Command
  .classBuilder<
    RebuildWorkspacesCommandInput,
    RebuildWorkspacesCommandOutput,
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
  .s("WorkspacesService", "RebuildWorkspaces", {})
  .n("WorkSpacesClient", "RebuildWorkspacesCommand")
  .f(void 0, void 0)
  .ser(se_RebuildWorkspacesCommand)
  .de(de_RebuildWorkspacesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RebuildWorkspacesRequest;
      output: RebuildWorkspacesResult;
    };
    sdk: {
      input: RebuildWorkspacesCommandInput;
      output: RebuildWorkspacesCommandOutput;
    };
  };
}
