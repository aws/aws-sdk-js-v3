// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateConnectionAliasPermissionRequest, UpdateConnectionAliasPermissionResult } from "../models/models_0";
import { UpdateConnectionAliasPermission$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateConnectionAliasPermissionCommand}.
 */
export interface UpdateConnectionAliasPermissionCommandInput extends UpdateConnectionAliasPermissionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateConnectionAliasPermissionCommand}.
 */
export interface UpdateConnectionAliasPermissionCommandOutput
  extends UpdateConnectionAliasPermissionResult,
    __MetadataBearer {}

/**
 * <p>Shares or unshares a connection alias with one account by specifying whether that
 *          account has permission to associate the connection alias with a directory. If the
 *          association permission is granted, the connection alias is shared with that account. If the
 *          association permission is revoked, the connection alias is unshared with the account. For
 *          more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region
 *             Redirection for Amazon WorkSpaces</a>.</p>
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>Before performing this operation, call <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeConnectionAliases.html">
 *                      DescribeConnectionAliases</a> to make sure that the current state of the
 *                   connection alias is <code>CREATED</code>.</p>
 *                </li>
 *                <li>
 *                   <p>To delete a connection alias that has been shared, the shared account must
 *                   first disassociate the connection alias from any directories it has been
 *                   associated with. Then you must unshare the connection alias from the account it
 *                   has been shared with. You can delete a connection alias only after it is no longer
 *                   shared with any accounts or associated with any directories.</p>
 *                </li>
 *             </ul>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, UpdateConnectionAliasPermissionCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, UpdateConnectionAliasPermissionCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * // import type { WorkSpacesClientConfig } from "@aws-sdk/client-workspaces";
 * const config = {}; // type is WorkSpacesClientConfig
 * const client = new WorkSpacesClient(config);
 * const input = { // UpdateConnectionAliasPermissionRequest
 *   AliasId: "STRING_VALUE", // required
 *   ConnectionAliasPermission: { // ConnectionAliasPermission
 *     SharedAccountId: "STRING_VALUE", // required
 *     AllowAssociation: true || false, // required
 *   },
 * };
 * const command = new UpdateConnectionAliasPermissionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateConnectionAliasPermissionCommandInput - {@link UpdateConnectionAliasPermissionCommandInput}
 * @returns {@link UpdateConnectionAliasPermissionCommandOutput}
 * @see {@link UpdateConnectionAliasPermissionCommandInput} for command's `input` shape.
 * @see {@link UpdateConnectionAliasPermissionCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for WorkSpacesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The user is not authorized to access a resource.</p>
 *
 * @throws {@link InvalidParameterValuesException} (client fault)
 *  <p>One or more parameter values are not valid.</p>
 *
 * @throws {@link InvalidResourceStateException} (client fault)
 *  <p>The state of the resource is not valid for this operation.</p>
 *
 * @throws {@link OperationNotSupportedException} (client fault)
 *  <p>This operation is not supported.</p>
 *
 * @throws {@link ResourceAssociatedException} (client fault)
 *  <p>The resource is associated with a directory.</p>
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *  <p>Your resource limits have been exceeded.</p>
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
export class UpdateConnectionAliasPermissionCommand extends $Command
  .classBuilder<
    UpdateConnectionAliasPermissionCommandInput,
    UpdateConnectionAliasPermissionCommandOutput,
    WorkSpacesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WorkspacesService", "UpdateConnectionAliasPermission", {})
  .n("WorkSpacesClient", "UpdateConnectionAliasPermissionCommand")
  .sc(UpdateConnectionAliasPermission$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateConnectionAliasPermissionRequest;
      output: {};
    };
    sdk: {
      input: UpdateConnectionAliasPermissionCommandInput;
      output: UpdateConnectionAliasPermissionCommandOutput;
    };
  };
}
