// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteConnectionAliasRequest, DeleteConnectionAliasResult } from "../models/models_0";
import { DeleteConnectionAlias } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteConnectionAliasCommand}.
 */
export interface DeleteConnectionAliasCommandInput extends DeleteConnectionAliasRequest {}
/**
 * @public
 *
 * The output of {@link DeleteConnectionAliasCommand}.
 */
export interface DeleteConnectionAliasCommandOutput extends DeleteConnectionAliasResult, __MetadataBearer {}

/**
 * <p>Deletes the specified connection alias. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html">
 *             Cross-Region Redirection for Amazon WorkSpaces</a>.</p>
 *          <important>
 *             <p>
 *                <b>If you will no longer be using a fully qualified domain name
 *                (FQDN) as the registration code for your WorkSpaces users, you must take certain
 *                precautions to prevent potential security issues.</b> For more information,
 *             see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html#cross-region-redirection-security-considerations"> Security Considerations if You Stop Using Cross-Region Redirection</a>.</p>
 *          </important>
 *          <note>
 *             <p>To delete a connection alias that has been shared, the shared account must first
 *             disassociate the connection alias from any directories it has been associated with. Then
 *             you must unshare the connection alias from the account it has been shared with. You can
 *             delete a connection alias only after it is no longer shared with any accounts or
 *             associated with any directories.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, DeleteConnectionAliasCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, DeleteConnectionAliasCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * // import type { WorkSpacesClientConfig } from "@aws-sdk/client-workspaces";
 * const config = {}; // type is WorkSpacesClientConfig
 * const client = new WorkSpacesClient(config);
 * const input = { // DeleteConnectionAliasRequest
 *   AliasId: "STRING_VALUE", // required
 * };
 * const command = new DeleteConnectionAliasCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteConnectionAliasCommandInput - {@link DeleteConnectionAliasCommandInput}
 * @returns {@link DeleteConnectionAliasCommandOutput}
 * @see {@link DeleteConnectionAliasCommandInput} for command's `input` shape.
 * @see {@link DeleteConnectionAliasCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link WorkSpacesServiceException}
 * <p>Base exception class for all service exceptions from WorkSpaces service.</p>
 *
 *
 * @public
 */
export class DeleteConnectionAliasCommand extends $Command
  .classBuilder<
    DeleteConnectionAliasCommandInput,
    DeleteConnectionAliasCommandOutput,
    WorkSpacesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WorkspacesService", "DeleteConnectionAlias", {})
  .n("WorkSpacesClient", "DeleteConnectionAliasCommand")
  .sc(DeleteConnectionAlias)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteConnectionAliasRequest;
      output: {};
    };
    sdk: {
      input: DeleteConnectionAliasCommandInput;
      output: DeleteConnectionAliasCommandOutput;
    };
  };
}
