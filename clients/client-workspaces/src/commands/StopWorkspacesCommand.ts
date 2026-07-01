// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StopWorkspacesRequest, StopWorkspacesResult } from "../models/models_0";
import { StopWorkspaces$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export class StopWorkspacesCommand extends command<StopWorkspacesCommandInput, StopWorkspacesCommandOutput>(
  _ep0,
  _mw0,
  "StopWorkspaces",
  StopWorkspaces$
) {
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
