// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { TerminateWorkspacesRequest, TerminateWorkspacesResult } from "../models/models_1";
import { TerminateWorkspaces } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link TerminateWorkspacesCommand}.
 */
export interface TerminateWorkspacesCommandInput extends TerminateWorkspacesRequest {}
/**
 * @public
 *
 * The output of {@link TerminateWorkspacesCommand}.
 */
export interface TerminateWorkspacesCommandOutput extends TerminateWorkspacesResult, __MetadataBearer {}

/**
 * <p>Terminates the specified WorkSpaces.</p>
 *          <important>
 *             <p>Terminating a WorkSpace is a permanent action and cannot be undone. The user's data
 *             is destroyed. If you need to archive any user data, contact Amazon Web ServicesSupport before
 *             terminating the WorkSpace.</p>
 *          </important>
 *          <p>You can terminate a WorkSpace that is in any state except <code>SUSPENDED</code>.</p>
 *          <p>This operation is asynchronous and returns before the WorkSpaces have been completely
 *          terminated. After a WorkSpace is terminated, the <code>TERMINATED</code> state is returned
 *          only briefly before the WorkSpace directory metadata is cleaned up, so this state is rarely
 *          returned. To confirm that a WorkSpace is terminated, check for the WorkSpace ID by using
 *             <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaces.html">
 *             DescribeWorkSpaces</a>. If the WorkSpace ID isn't returned, then the WorkSpace has
 *          been successfully terminated.</p>
 *          <note>
 *             <p>Simple AD and AD Connector are made available to you free of charge to use with
 *             WorkSpaces. If there are no WorkSpaces being used with your Simple AD or AD Connector
 *             directory for 30 consecutive days, this directory will be automatically deregistered for
 *             use with Amazon WorkSpaces, and you will be charged for this directory as per the <a href="http://aws.amazon.com/directoryservice/pricing/">Directory Service pricing
 *                terms</a>.</p>
 *             <p>To delete empty directories, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/delete-workspaces-directory.html"> Delete the
 *                Directory for Your WorkSpaces</a>. If you delete your Simple AD or AD Connector
 *             directory, you can always create a new one when you want to start using WorkSpaces
 *             again.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, TerminateWorkspacesCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, TerminateWorkspacesCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * // import type { WorkSpacesClientConfig } from "@aws-sdk/client-workspaces";
 * const config = {}; // type is WorkSpacesClientConfig
 * const client = new WorkSpacesClient(config);
 * const input = { // TerminateWorkspacesRequest
 *   TerminateWorkspaceRequests: [ // TerminateWorkspaceRequests // required
 *     { // TerminateRequest
 *       WorkspaceId: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new TerminateWorkspacesCommand(input);
 * const response = await client.send(command);
 * // { // TerminateWorkspacesResult
 * //   FailedRequests: [ // FailedTerminateWorkspaceRequests
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
 * @param TerminateWorkspacesCommandInput - {@link TerminateWorkspacesCommandInput}
 * @returns {@link TerminateWorkspacesCommandOutput}
 * @see {@link TerminateWorkspacesCommandInput} for command's `input` shape.
 * @see {@link TerminateWorkspacesCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for WorkSpacesClient's `config` shape.
 *
 * @throws {@link WorkSpacesServiceException}
 * <p>Base exception class for all service exceptions from WorkSpaces service.</p>
 *
 *
 * @public
 */
export class TerminateWorkspacesCommand extends $Command
  .classBuilder<
    TerminateWorkspacesCommandInput,
    TerminateWorkspacesCommandOutput,
    WorkSpacesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WorkspacesService", "TerminateWorkspaces", {})
  .n("WorkSpacesClient", "TerminateWorkspacesCommand")
  .sc(TerminateWorkspaces)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: TerminateWorkspacesRequest;
      output: TerminateWorkspacesResult;
    };
    sdk: {
      input: TerminateWorkspacesCommandInput;
      output: TerminateWorkspacesCommandOutput;
    };
  };
}
