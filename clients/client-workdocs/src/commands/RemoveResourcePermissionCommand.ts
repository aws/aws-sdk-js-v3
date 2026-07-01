// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RemoveResourcePermissionRequest } from "../models/models_0";
import { RemoveResourcePermission$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RemoveResourcePermissionCommand}.
 */
export interface RemoveResourcePermissionCommandInput extends RemoveResourcePermissionRequest {}
/**
 * @public
 *
 * The output of {@link RemoveResourcePermissionCommand}.
 */
export interface RemoveResourcePermissionCommandOutput extends __MetadataBearer {}

/**
 * <p>Removes the permission for the specified principal from the specified
 *             resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, RemoveResourcePermissionCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, RemoveResourcePermissionCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * // import type { WorkDocsClientConfig } from "@aws-sdk/client-workdocs";
 * const config = {}; // type is WorkDocsClientConfig
 * const client = new WorkDocsClient(config);
 * const input = { // RemoveResourcePermissionRequest
 *   AuthenticationToken: "STRING_VALUE",
 *   ResourceId: "STRING_VALUE", // required
 *   PrincipalId: "STRING_VALUE", // required
 *   PrincipalType: "USER" || "GROUP" || "INVITE" || "ANONYMOUS" || "ORGANIZATION",
 * };
 * const command = new RemoveResourcePermissionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RemoveResourcePermissionCommandInput - {@link RemoveResourcePermissionCommandInput}
 * @returns {@link RemoveResourcePermissionCommandOutput}
 * @see {@link RemoveResourcePermissionCommandInput} for command's `input` shape.
 * @see {@link RemoveResourcePermissionCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for WorkDocsClient's `config` shape.
 *
 * @throws {@link FailedDependencyException} (client fault)
 *  <p>The Directory Service cannot reach an on-premises instance. Or a dependency
 *             under the control of the organization is failing, such as a connected Active
 *             Directory.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>One or more of the dependencies is unavailable.</p>
 *
 * @throws {@link UnauthorizedOperationException} (client fault)
 *  <p>The operation is not permitted.</p>
 *
 * @throws {@link UnauthorizedResourceAccessException} (client fault)
 *  <p>The caller does not have access to perform the action on the resource.</p>
 *
 * @throws {@link WorkDocsServiceException}
 * <p>Base exception class for all service exceptions from WorkDocs service.</p>
 *
 *
 * @public
 */
export class RemoveResourcePermissionCommand extends command<RemoveResourcePermissionCommandInput, RemoveResourcePermissionCommandOutput>(
  _ep0,
  _mw0,
  "RemoveResourcePermission",
  RemoveResourcePermission$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RemoveResourcePermissionRequest;
      output: {};
    };
    sdk: {
      input: RemoveResourcePermissionCommandInput;
      output: RemoveResourcePermissionCommandOutput;
    };
  };
}
