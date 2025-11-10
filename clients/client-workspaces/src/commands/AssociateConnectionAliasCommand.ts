// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { AssociateConnectionAliasRequest, AssociateConnectionAliasResult } from "../models/models_0";
import { AssociateConnectionAlias } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateConnectionAliasCommand}.
 */
export interface AssociateConnectionAliasCommandInput extends AssociateConnectionAliasRequest {}
/**
 * @public
 *
 * The output of {@link AssociateConnectionAliasCommand}.
 */
export interface AssociateConnectionAliasCommandOutput extends AssociateConnectionAliasResult, __MetadataBearer {}

/**
 * <p>Associates the specified connection alias with the specified directory to enable
 *          cross-Region redirection. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region
 *             Redirection for Amazon WorkSpaces</a>.</p>
 *          <note>
 *             <p>Before performing this operation, call <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeConnectionAliases.html">
 *                DescribeConnectionAliases</a> to make sure that the current state of the
 *             connection alias is <code>CREATED</code>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, AssociateConnectionAliasCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, AssociateConnectionAliasCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * // import type { WorkSpacesClientConfig } from "@aws-sdk/client-workspaces";
 * const config = {}; // type is WorkSpacesClientConfig
 * const client = new WorkSpacesClient(config);
 * const input = { // AssociateConnectionAliasRequest
 *   AliasId: "STRING_VALUE", // required
 *   ResourceId: "STRING_VALUE", // required
 * };
 * const command = new AssociateConnectionAliasCommand(input);
 * const response = await client.send(command);
 * // { // AssociateConnectionAliasResult
 * //   ConnectionIdentifier: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AssociateConnectionAliasCommandInput - {@link AssociateConnectionAliasCommandInput}
 * @returns {@link AssociateConnectionAliasCommandOutput}
 * @see {@link AssociateConnectionAliasCommandInput} for command's `input` shape.
 * @see {@link AssociateConnectionAliasCommandOutput} for command's `response` shape.
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
export class AssociateConnectionAliasCommand extends $Command
  .classBuilder<
    AssociateConnectionAliasCommandInput,
    AssociateConnectionAliasCommandOutput,
    WorkSpacesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WorkspacesService", "AssociateConnectionAlias", {})
  .n("WorkSpacesClient", "AssociateConnectionAliasCommand")
  .sc(AssociateConnectionAlias)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateConnectionAliasRequest;
      output: AssociateConnectionAliasResult;
    };
    sdk: {
      input: AssociateConnectionAliasCommandInput;
      output: AssociateConnectionAliasCommandOutput;
    };
  };
}
