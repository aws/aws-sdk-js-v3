// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { StopWorkspacesRequest, StopWorkspacesResult } from "../models/models_0";
import { StopWorkspaces$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopWorkspacesCommand}.
 */
export interface StopWorkspacesCommandInput extends StopWorkspacesRequest {}
/**
 * @public
 *
 * The output of {@link StopWorkspacesCommand}.
 */
export interface StopWorkspacesCommandOutput extends StopWorkspacesResult, __MetadataBearer {}

/**
 * <p>Stops the specified WorkSpaces.</p>
 *          <p>You cannot stop a WorkSpace unless it has a running mode of <code>AutoStop</code> or
 *          <code>Manual</code> and a state of <code>AVAILABLE</code>, <code>IMPAIRED</code>,
 *          <code>UNHEALTHY</code>, or <code>ERROR</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, StopWorkspacesCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, StopWorkspacesCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * // import type { WorkSpacesClientConfig } from "@aws-sdk/client-workspaces";
 * const config = {}; // type is WorkSpacesClientConfig
 * const client = new WorkSpacesClient(config);
 * const input = { // StopWorkspacesRequest
 *   StopWorkspaceRequests: [ // StopWorkspaceRequests // required
 *     { // StopRequest
 *       WorkspaceId: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new StopWorkspacesCommand(input);
 * const response = await client.send(command);
 * // { // StopWorkspacesResult
 * //   FailedRequests: [ // FailedStopWorkspaceRequests
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
 * @param StopWorkspacesCommandInput - {@link StopWorkspacesCommandInput}
 * @returns {@link StopWorkspacesCommandOutput}
 * @see {@link StopWorkspacesCommandInput} for command's `input` shape.
 * @see {@link StopWorkspacesCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for WorkSpacesClient's `config` shape.
 *
 * @throws {@link WorkSpacesServiceException}
 * <p>Base exception class for all service exceptions from WorkSpaces service.</p>
 *
 *
 * @public
 */
export class StopWorkspacesCommand extends $Command
  .classBuilder<
    StopWorkspacesCommandInput,
    StopWorkspacesCommandOutput,
    WorkSpacesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WorkspacesService", "StopWorkspaces", {})
  .n("WorkSpacesClient", "StopWorkspacesCommand")
  .sc(StopWorkspaces$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopWorkspacesRequest;
      output: StopWorkspacesResult;
    };
    sdk: {
      input: StopWorkspacesCommandInput;
      output: StopWorkspacesCommandOutput;
    };
  };
}
