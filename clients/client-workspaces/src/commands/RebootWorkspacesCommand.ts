// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { RebootWorkspacesRequest, RebootWorkspacesResult } from "../models/models_0";
import { de_RebootWorkspacesCommand, se_RebootWorkspacesCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * @public
 * <p>Reboots the specified WorkSpaces.</p>
 *          <p>You cannot reboot a WorkSpace unless its state is <code>AVAILABLE</code> or
 *             <code>UNHEALTHY</code>.</p>
 *          <p>This operation is asynchronous and returns before the WorkSpaces have rebooted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, RebootWorkspacesCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, RebootWorkspacesCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
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
 */
export class RebootWorkspacesCommand extends $Command
  .classBuilder<
    RebootWorkspacesCommandInput,
    RebootWorkspacesCommandOutput,
    WorkSpacesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any /*Command*/, Command: any /*static*/, config: WorkSpacesClientResolvedConfig) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WorkspacesService", "RebootWorkspaces", {})
  .n("WorkSpacesClient", "RebootWorkspacesCommand")
  .f(void 0, void 0)
  .ser(se_RebootWorkspacesCommand)
  .de(de_RebootWorkspacesCommand)
  .build() {}
