// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateConnectionAliasPermissionRequest, UpdateConnectionAliasPermissionResult } from "../models/models_0";
import { UpdateConnectionAliasPermission$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface UpdateConnectionAliasPermissionCommandOutput extends UpdateConnectionAliasPermissionResult, __MetadataBearer {}

/**
 * Shares or unshares a connection alias with one account by specifying whether that account has permission to associate the connection alias with a directory. If the association permission is granted, the connection alias is shared with that account. If the association permission is revoked, the connection alias is unshared with the account. For more information, see [Cross-Region Redirection for Amazon WorkSpaces](https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html).
 *
 * > **Note:**
 * >
 * > - Before performing this operation, call [DescribeConnectionAliases](https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeConnectionAliases.html) to make sure that the current state of the connection alias is `CREATED`.
 * > - To delete a connection alias that has been shared, the shared account must first disassociate the connection alias from any directories it has been associated with. Then you must unshare the connection alias from the account it has been shared with. You can delete a connection alias only after it is no longer shared with any accounts or associated with any directories.
 *
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
 *
 * The user is not authorized to access a resource.
 *
 * @throws {@link InvalidParameterValuesException} (client fault)
 *
 * One or more parameter values are not valid.
 *
 * @throws {@link InvalidResourceStateException} (client fault)
 *
 * The state of the resource is not valid for this operation.
 *
 * @throws {@link OperationNotSupportedException} (client fault)
 *
 * This operation is not supported.
 *
 * @throws {@link ResourceAssociatedException} (client fault)
 *
 * The resource is associated with a directory.
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *
 * Your resource limits have been exceeded.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource could not be found.
 *
 * @throws {@link WorkSpacesServiceException}
 *
 * Base exception class for all service exceptions from WorkSpaces service.
 *
 * @public
 */
export class UpdateConnectionAliasPermissionCommand extends command<UpdateConnectionAliasPermissionCommandInput, UpdateConnectionAliasPermissionCommandOutput>(
  _ep0,
  _mw0,
  "UpdateConnectionAliasPermission",
  UpdateConnectionAliasPermission$
) {
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
