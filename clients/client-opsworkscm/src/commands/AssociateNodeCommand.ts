// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  AssociateNodeRequest,
  AssociateNodeRequestFilterSensitiveLog,
  AssociateNodeResponse,
} from "../models/models_0";
import { OpsWorksCMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksCMClient";
import { de_AssociateNodeCommand, se_AssociateNodeCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateNodeCommand}.
 */
export interface AssociateNodeCommandInput extends AssociateNodeRequest {}
/**
 * @public
 *
 * The output of {@link AssociateNodeCommand}.
 */
export interface AssociateNodeCommandOutput extends AssociateNodeResponse, __MetadataBearer {}

/**
 * <p> Associates a new node with the server. For more information about how to disassociate a node, see <a>DisassociateNode</a>.</p>
 *          <p>
 *       On a Chef server: This command is an alternative to  <code>knife bootstrap</code>.</p>
 *          <p>
 *         Example (Chef): <code>aws opsworks-cm associate-node --server-name <i>MyServer</i> --node-name <i>MyManagedNode</i> --engine-attributes "Name=<i>CHEF_ORGANIZATION</i>,Value=default" "Name=<i>CHEF_AUTOMATE_NODE_PUBLIC_KEY</i>,Value=<i>public-key-pem</i>"</code>
 *          </p>
 *          <p>
 *       On a Puppet server, this command is an alternative to the <code>puppet cert sign</code> command that signs a Puppet node CSR.
 *     </p>
 *          <p>
 *         Example (Puppet): <code>aws opsworks-cm associate-node --server-name <i>MyServer</i> --node-name <i>MyManagedNode</i> --engine-attributes "Name=<i>PUPPET_NODE_CSR</i>,Value=<i>csr-pem</i>"</code>
 *          </p>
 *          <p>
 *       A node can can only be associated with servers that are in a <code>HEALTHY</code> state. Otherwise, an <code>InvalidStateException</code> is thrown.
 *       A <code>ResourceNotFoundException</code> is thrown when the server does not exist. A <code>ValidationException</code> is raised when parameters of the request are not valid.
 *       The AssociateNode API call can be integrated into Auto Scaling configurations, CloudFormation templates, or the user data
 *       of a server's instance.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksCMClient, AssociateNodeCommand } from "@aws-sdk/client-opsworkscm"; // ES Modules import
 * // const { OpsWorksCMClient, AssociateNodeCommand } = require("@aws-sdk/client-opsworkscm"); // CommonJS import
 * const client = new OpsWorksCMClient(config);
 * const input = { // AssociateNodeRequest
 *   ServerName: "STRING_VALUE", // required
 *   NodeName: "STRING_VALUE", // required
 *   EngineAttributes: [ // EngineAttributes // required
 *     { // EngineAttribute
 *       Name: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new AssociateNodeCommand(input);
 * const response = await client.send(command);
 * // { // AssociateNodeResponse
 * //   NodeAssociationStatusToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AssociateNodeCommandInput - {@link AssociateNodeCommandInput}
 * @returns {@link AssociateNodeCommandOutput}
 * @see {@link AssociateNodeCommandInput} for command's `input` shape.
 * @see {@link AssociateNodeCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksCMClientResolvedConfig | config} for OpsWorksCMClient's `config` shape.
 *
 * @throws {@link InvalidStateException} (client fault)
 *  <p>The resource is in a state that does not allow you to perform a specified action.
 *     </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource does not exist, or access was denied.
 *     </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One or more of the provided request parameters are not valid.
 *     </p>
 *
 * @throws {@link OpsWorksCMServiceException}
 * <p>Base exception class for all service exceptions from OpsWorksCM service.</p>
 *
 *
 * @public
 */
export class AssociateNodeCommand extends $Command
  .classBuilder<
    AssociateNodeCommandInput,
    AssociateNodeCommandOutput,
    OpsWorksCMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OpsWorksCMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("OpsWorksCM_V2016_11_01", "AssociateNode", {})
  .n("OpsWorksCMClient", "AssociateNodeCommand")
  .f(AssociateNodeRequestFilterSensitiveLog, void 0)
  .ser(se_AssociateNodeCommand)
  .de(de_AssociateNodeCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateNodeRequest;
      output: AssociateNodeResponse;
    };
    sdk: {
      input: AssociateNodeCommandInput;
      output: AssociateNodeCommandOutput;
    };
  };
}
