// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { StartWorkspacesRequest, StartWorkspacesResult } from "../models/models_1";
import { de_StartWorkspacesCommand, se_StartWorkspacesCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartWorkspacesCommand}.
 */
export interface StartWorkspacesCommandInput extends StartWorkspacesRequest {}
/**
 * @public
 *
 * The output of {@link StartWorkspacesCommand}.
 */
export interface StartWorkspacesCommandOutput extends StartWorkspacesResult, __MetadataBearer {}

/**
 * <p>Starts the specified WorkSpaces.</p>
 *          <p>You cannot start a WorkSpace unless it has a running mode of <code>AutoStop</code> or
 *          <code>Manual</code> and a state of <code>STOPPED</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, StartWorkspacesCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, StartWorkspacesCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const input = { // StartWorkspacesRequest
 *   StartWorkspaceRequests: [ // StartWorkspaceRequests // required
 *     { // StartRequest
 *       WorkspaceId: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new StartWorkspacesCommand(input);
 * const response = await client.send(command);
 * // { // StartWorkspacesResult
 * //   FailedRequests: [ // FailedStartWorkspaceRequests
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
 * @param StartWorkspacesCommandInput - {@link StartWorkspacesCommandInput}
 * @returns {@link StartWorkspacesCommandOutput}
 * @see {@link StartWorkspacesCommandInput} for command's `input` shape.
 * @see {@link StartWorkspacesCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for WorkSpacesClient's `config` shape.
 *
 * @throws {@link WorkSpacesServiceException}
 * <p>Base exception class for all service exceptions from WorkSpaces service.</p>
 *
 *
 * @public
 */
export class StartWorkspacesCommand extends $Command
  .classBuilder<
    StartWorkspacesCommandInput,
    StartWorkspacesCommandOutput,
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
  .s("WorkspacesService", "StartWorkspaces", {})
  .n("WorkSpacesClient", "StartWorkspacesCommand")
  .f(void 0, void 0)
  .ser(se_StartWorkspacesCommand)
  .de(de_StartWorkspacesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartWorkspacesRequest;
      output: StartWorkspacesResult;
    };
    sdk: {
      input: StartWorkspacesCommandInput;
      output: StartWorkspacesCommandOutput;
    };
  };
}
