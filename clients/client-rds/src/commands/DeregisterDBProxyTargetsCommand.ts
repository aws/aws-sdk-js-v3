// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeregisterDBProxyTargetsRequest, DeregisterDBProxyTargetsResponse } from "../models/models_1";
import { de_DeregisterDBProxyTargetsCommand, se_DeregisterDBProxyTargetsCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeregisterDBProxyTargetsCommand}.
 */
export interface DeregisterDBProxyTargetsCommandInput extends DeregisterDBProxyTargetsRequest {}
/**
 * @public
 *
 * The output of {@link DeregisterDBProxyTargetsCommand}.
 */
export interface DeregisterDBProxyTargetsCommandOutput extends DeregisterDBProxyTargetsResponse, __MetadataBearer {}

/**
 * <p>Remove the association between one or more <code>DBProxyTarget</code> data structures and a <code>DBProxyTargetGroup</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DeregisterDBProxyTargetsCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DeregisterDBProxyTargetsCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // import type { RDSClientConfig } from "@aws-sdk/client-rds";
 * const config = {}; // type is RDSClientConfig
 * const client = new RDSClient(config);
 * const input = { // DeregisterDBProxyTargetsRequest
 *   DBProxyName: "STRING_VALUE", // required
 *   TargetGroupName: "STRING_VALUE",
 *   DBInstanceIdentifiers: [ // StringList
 *     "STRING_VALUE",
 *   ],
 *   DBClusterIdentifiers: [
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DeregisterDBProxyTargetsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeregisterDBProxyTargetsCommandInput - {@link DeregisterDBProxyTargetsCommandInput}
 * @returns {@link DeregisterDBProxyTargetsCommandOutput}
 * @see {@link DeregisterDBProxyTargetsCommandInput} for command's `input` shape.
 * @see {@link DeregisterDBProxyTargetsCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBProxyNotFoundFault} (client fault)
 *  <p>The specified proxy name doesn't correspond to a proxy owned by your Amazon Web Services account in the specified Amazon Web Services Region.</p>
 *
 * @throws {@link DBProxyTargetGroupNotFoundFault} (client fault)
 *  <p>The specified target group isn't available for a proxy owned by your Amazon Web Services account in the specified Amazon Web Services Region.</p>
 *
 * @throws {@link DBProxyTargetNotFoundFault} (client fault)
 *  <p>The specified RDS DB instance or Aurora DB cluster isn't available for a proxy owned by your Amazon Web Services account in the specified Amazon Web Services Region.</p>
 *
 * @throws {@link InvalidDBProxyStateFault} (client fault)
 *  <p>The requested operation can't be performed while the proxy is in this state.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 *
 * @public
 */
export class DeregisterDBProxyTargetsCommand extends $Command
  .classBuilder<
    DeregisterDBProxyTargetsCommandInput,
    DeregisterDBProxyTargetsCommandOutput,
    RDSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RDSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonRDSv19", "DeregisterDBProxyTargets", {})
  .n("RDSClient", "DeregisterDBProxyTargetsCommand")
  .f(void 0, void 0)
  .ser(se_DeregisterDBProxyTargetsCommand)
  .de(de_DeregisterDBProxyTargetsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeregisterDBProxyTargetsRequest;
      output: {};
    };
    sdk: {
      input: DeregisterDBProxyTargetsCommandInput;
      output: DeregisterDBProxyTargetsCommandOutput;
    };
  };
}
