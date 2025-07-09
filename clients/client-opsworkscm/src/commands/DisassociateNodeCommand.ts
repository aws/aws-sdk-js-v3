// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  DisassociateNodeRequest,
  DisassociateNodeRequestFilterSensitiveLog,
  DisassociateNodeResponse,
} from "../models/models_0";
import { OpsWorksCMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksCMClient";
import { de_DisassociateNodeCommand, se_DisassociateNodeCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateNodeCommand}.
 */
export interface DisassociateNodeCommandInput extends DisassociateNodeRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateNodeCommand}.
 */
export interface DisassociateNodeCommandOutput extends DisassociateNodeResponse, __MetadataBearer {}

/**
 * <p>
 *       Disassociates a node from an OpsWorks CM server, and removes the node from the server's managed nodes. After a node is disassociated,
 *       the node key pair is no longer valid for accessing the configuration manager's API. For more information about how to associate a node, see <a>AssociateNode</a>.
 *     </p>
 *          <p>A node can can only be disassociated from a server that is in a <code>HEALTHY</code> state. Otherwise, an <code>InvalidStateException</code> is thrown.
 *       A <code>ResourceNotFoundException</code> is thrown when the server does not exist.
 *       A <code>ValidationException</code> is raised when parameters of the request are not valid.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksCMClient, DisassociateNodeCommand } from "@aws-sdk/client-opsworkscm"; // ES Modules import
 * // const { OpsWorksCMClient, DisassociateNodeCommand } = require("@aws-sdk/client-opsworkscm"); // CommonJS import
 * const client = new OpsWorksCMClient(config);
 * const input = { // DisassociateNodeRequest
 *   ServerName: "STRING_VALUE", // required
 *   NodeName: "STRING_VALUE", // required
 *   EngineAttributes: [ // EngineAttributes
 *     { // EngineAttribute
 *       Name: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new DisassociateNodeCommand(input);
 * const response = await client.send(command);
 * // { // DisassociateNodeResponse
 * //   NodeAssociationStatusToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DisassociateNodeCommandInput - {@link DisassociateNodeCommandInput}
 * @returns {@link DisassociateNodeCommandOutput}
 * @see {@link DisassociateNodeCommandInput} for command's `input` shape.
 * @see {@link DisassociateNodeCommandOutput} for command's `response` shape.
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
export class DisassociateNodeCommand extends $Command
  .classBuilder<
    DisassociateNodeCommandInput,
    DisassociateNodeCommandOutput,
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
  .s("OpsWorksCM_V2016_11_01", "DisassociateNode", {})
  .n("OpsWorksCMClient", "DisassociateNodeCommand")
  .f(DisassociateNodeRequestFilterSensitiveLog, void 0)
  .ser(se_DisassociateNodeCommand)
  .de(de_DisassociateNodeCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateNodeRequest;
      output: DisassociateNodeResponse;
    };
    sdk: {
      input: DisassociateNodeCommandInput;
      output: DisassociateNodeCommandOutput;
    };
  };
}
