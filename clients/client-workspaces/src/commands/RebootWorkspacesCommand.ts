// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { RebootWorkspacesRequest, RebootWorkspacesResult } from "../models/models_0";
import { RebootWorkspaces } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RebootWorkspacesCommand}.
 */
export interface RebootWorkspacesCommandInput extends RebootWorkspacesRequest {}
/**
 * @public
 *
 * The output of {@link RebootWorkspacesCommand}.
 */
export interface RebootWorkspacesCommandOutput extends RebootWorkspacesResult, __MetadataBearer {}

/**
 * <p>Reboots the specified WorkSpaces.</p>
 *          <p>You cannot reboot a WorkSpace unless its state is <code>AVAILABLE</code>,
 *          <code>UNHEALTHY</code>, or <code>REBOOTING</code>. Reboot a WorkSpace in the <code>REBOOTING</code>
 *          state only if your WorkSpace has been stuck in the <code>REBOOTING</code> state for over 20 minutes.</p>
 *          <p>This operation is asynchronous and returns before the WorkSpaces have rebooted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, RebootWorkspacesCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, RebootWorkspacesCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * // import type { WorkSpacesClientConfig } from "@aws-sdk/client-workspaces";
 * const config = {}; // type is WorkSpacesClientConfig
 * const client = new WorkSpacesClient(config);
 * const input = { // RebootWorkspacesRequest
 *   RebootWorkspaceRequests: [ // RebootWorkspaceRequests // required
 *     { // RebootRequest
 *       WorkspaceId: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new RebootWorkspacesCommand(input);
 * const response = await client.send(command);
 * // { // RebootWorkspacesResult
 * //   FailedRequests: [ // FailedRebootWorkspaceRequests
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
 * @param RebootWorkspacesCommandInput - {@link RebootWorkspacesCommandInput}
 * @returns {@link RebootWorkspacesCommandOutput}
 * @see {@link RebootWorkspacesCommandInput} for command's `input` shape.
 * @see {@link RebootWorkspacesCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for WorkSpacesClient's `config` shape.
 *
 * @throws {@link OperationNotSupportedException} (client fault)
 *  <p>This operation is not supported.</p>
 *
 * @throws {@link WorkSpacesServiceException}
 * <p>Base exception class for all service exceptions from WorkSpaces service.</p>
 *
 *
 * @public
 */
export class RebootWorkspacesCommand extends $Command
  .classBuilder<
    RebootWorkspacesCommandInput,
    RebootWorkspacesCommandOutput,
    WorkSpacesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WorkspacesService", "RebootWorkspaces", {})
  .n("WorkSpacesClient", "RebootWorkspacesCommand")
  .sc(RebootWorkspaces)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RebootWorkspacesRequest;
      output: RebootWorkspacesResult;
    };
    sdk: {
      input: RebootWorkspacesCommandInput;
      output: RebootWorkspacesCommandOutput;
    };
  };
}
