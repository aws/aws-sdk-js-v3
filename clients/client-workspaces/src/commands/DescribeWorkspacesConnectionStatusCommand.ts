// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DescribeWorkspacesConnectionStatusRequest,
  DescribeWorkspacesConnectionStatusResult,
} from "../models/models_0";
import { DescribeWorkspacesConnectionStatus$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeWorkspacesConnectionStatusCommand}.
 */
export interface DescribeWorkspacesConnectionStatusCommandInput extends DescribeWorkspacesConnectionStatusRequest {}
/**
 * @public
 *
 * The output of {@link DescribeWorkspacesConnectionStatusCommand}.
 */
export interface DescribeWorkspacesConnectionStatusCommandOutput extends DescribeWorkspacesConnectionStatusResult, __MetadataBearer {}

/**
 * <p>Describes the connection status of the specified WorkSpaces.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, DescribeWorkspacesConnectionStatusCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, DescribeWorkspacesConnectionStatusCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * // import type { WorkSpacesClientConfig } from "@aws-sdk/client-workspaces";
 * const config = {}; // type is WorkSpacesClientConfig
 * const client = new WorkSpacesClient(config);
 * const input = { // DescribeWorkspacesConnectionStatusRequest
 *   WorkspaceIds: [ // WorkspaceIdList
 *     "STRING_VALUE",
 *   ],
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeWorkspacesConnectionStatusCommand(input);
 * const response = await client.send(command);
 * // { // DescribeWorkspacesConnectionStatusResult
 * //   WorkspacesConnectionStatus: [ // WorkspaceConnectionStatusList
 * //     { // WorkspaceConnectionStatus
 * //       WorkspaceId: "STRING_VALUE",
 * //       ConnectionState: "CONNECTED" || "DISCONNECTED" || "UNKNOWN",
 * //       ConnectionStateCheckTimestamp: new Date("TIMESTAMP"),
 * //       LastKnownUserConnectionTimestamp: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeWorkspacesConnectionStatusCommandInput - {@link DescribeWorkspacesConnectionStatusCommandInput}
 * @returns {@link DescribeWorkspacesConnectionStatusCommandOutput}
 * @see {@link DescribeWorkspacesConnectionStatusCommandInput} for command's `input` shape.
 * @see {@link DescribeWorkspacesConnectionStatusCommandOutput} for command's `response` shape.
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
export class DescribeWorkspacesConnectionStatusCommand extends command<DescribeWorkspacesConnectionStatusCommandInput, DescribeWorkspacesConnectionStatusCommandOutput>(
  _ep0,
  _mw0,
  "DescribeWorkspacesConnectionStatus",
  DescribeWorkspacesConnectionStatus$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeWorkspacesConnectionStatusRequest;
      output: DescribeWorkspacesConnectionStatusResult;
    };
    sdk: {
      input: DescribeWorkspacesConnectionStatusCommandInput;
      output: DescribeWorkspacesConnectionStatusCommandOutput;
    };
  };
}
