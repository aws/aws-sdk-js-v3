// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DisassociateConnectionAliasRequest, DisassociateConnectionAliasResult } from "../models/models_0";
import { de_DisassociateConnectionAliasCommand, se_DisassociateConnectionAliasCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateConnectionAliasCommand}.
 */
export interface DisassociateConnectionAliasCommandInput extends DisassociateConnectionAliasRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateConnectionAliasCommand}.
 */
export interface DisassociateConnectionAliasCommandOutput extends DisassociateConnectionAliasResult, __MetadataBearer {}

/**
 * <p>Disassociates a connection alias from a directory. Disassociating a connection alias
 *          disables cross-Region redirection between two directories in different Regions. For more
 *          information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region
 *             Redirection for Amazon WorkSpaces</a>.</p>
 *          <note>
 *             <p>Before performing this operation, call <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeConnectionAliases.html">
 *                DescribeConnectionAliases</a> to make sure that the current state of the
 *             connection alias is <code>CREATED</code>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, DisassociateConnectionAliasCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, DisassociateConnectionAliasCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new WorkSpacesClient(config);
 * const input = { // DisassociateConnectionAliasRequest
 *   AliasId: "STRING_VALUE", // required
 * };
 * const command = new DisassociateConnectionAliasCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateConnectionAliasCommandInput - {@link DisassociateConnectionAliasCommandInput}
 * @returns {@link DisassociateConnectionAliasCommandOutput}
 * @see {@link DisassociateConnectionAliasCommandInput} for command's `input` shape.
 * @see {@link DisassociateConnectionAliasCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link WorkSpacesServiceException}
 * <p>Base exception class for all service exceptions from WorkSpaces service.</p>
 *
 * @public
 */
export class DisassociateConnectionAliasCommand extends $Command
  .classBuilder<
    DisassociateConnectionAliasCommandInput,
    DisassociateConnectionAliasCommandOutput,
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
  .s("WorkspacesService", "DisassociateConnectionAlias", {})
  .n("WorkSpacesClient", "DisassociateConnectionAliasCommand")
  .f(void 0, void 0)
  .ser(se_DisassociateConnectionAliasCommand)
  .de(de_DisassociateConnectionAliasCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateConnectionAliasRequest;
      output: {};
    };
    sdk: {
      input: DisassociateConnectionAliasCommandInput;
      output: DisassociateConnectionAliasCommandOutput;
    };
  };
}
