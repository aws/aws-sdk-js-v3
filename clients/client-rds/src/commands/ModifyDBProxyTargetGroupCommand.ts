// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyDBProxyTargetGroupRequest, ModifyDBProxyTargetGroupResponse } from "../models/models_1";
import { de_ModifyDBProxyTargetGroupCommand, se_ModifyDBProxyTargetGroupCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyDBProxyTargetGroupCommand}.
 */
export interface ModifyDBProxyTargetGroupCommandInput extends ModifyDBProxyTargetGroupRequest {}
/**
 * @public
 *
 * The output of {@link ModifyDBProxyTargetGroupCommand}.
 */
export interface ModifyDBProxyTargetGroupCommandOutput extends ModifyDBProxyTargetGroupResponse, __MetadataBearer {}

/**
 * <p>Modifies the properties of a <code>DBProxyTargetGroup</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, ModifyDBProxyTargetGroupCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, ModifyDBProxyTargetGroupCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // ModifyDBProxyTargetGroupRequest
 *   TargetGroupName: "STRING_VALUE", // required
 *   DBProxyName: "STRING_VALUE", // required
 *   ConnectionPoolConfig: { // ConnectionPoolConfiguration
 *     MaxConnectionsPercent: Number("int"),
 *     MaxIdleConnectionsPercent: Number("int"),
 *     ConnectionBorrowTimeout: Number("int"),
 *     SessionPinningFilters: [ // StringList
 *       "STRING_VALUE",
 *     ],
 *     InitQuery: "STRING_VALUE",
 *   },
 *   NewName: "STRING_VALUE",
 * };
 * const command = new ModifyDBProxyTargetGroupCommand(input);
 * const response = await client.send(command);
 * // { // ModifyDBProxyTargetGroupResponse
 * //   DBProxyTargetGroup: { // DBProxyTargetGroup
 * //     DBProxyName: "STRING_VALUE",
 * //     TargetGroupName: "STRING_VALUE",
 * //     TargetGroupArn: "STRING_VALUE",
 * //     IsDefault: true || false,
 * //     Status: "STRING_VALUE",
 * //     ConnectionPoolConfig: { // ConnectionPoolConfigurationInfo
 * //       MaxConnectionsPercent: Number("int"),
 * //       MaxIdleConnectionsPercent: Number("int"),
 * //       ConnectionBorrowTimeout: Number("int"),
 * //       SessionPinningFilters: [ // StringList
 * //         "STRING_VALUE",
 * //       ],
 * //       InitQuery: "STRING_VALUE",
 * //     },
 * //     CreatedDate: new Date("TIMESTAMP"),
 * //     UpdatedDate: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param ModifyDBProxyTargetGroupCommandInput - {@link ModifyDBProxyTargetGroupCommandInput}
 * @returns {@link ModifyDBProxyTargetGroupCommandOutput}
 * @see {@link ModifyDBProxyTargetGroupCommandInput} for command's `input` shape.
 * @see {@link ModifyDBProxyTargetGroupCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBProxyNotFoundFault} (client fault)
 *  <p>The specified proxy name doesn't correspond to a proxy owned by your Amazon Web Services account in the specified Amazon Web Services Region.</p>
 *
 * @throws {@link DBProxyTargetGroupNotFoundFault} (client fault)
 *  <p>The specified target group isn't available for a proxy owned by your Amazon Web Services account in the specified Amazon Web Services Region.</p>
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
export class ModifyDBProxyTargetGroupCommand extends $Command
  .classBuilder<
    ModifyDBProxyTargetGroupCommandInput,
    ModifyDBProxyTargetGroupCommandOutput,
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
  .s("AmazonRDSv19", "ModifyDBProxyTargetGroup", {})
  .n("RDSClient", "ModifyDBProxyTargetGroupCommand")
  .f(void 0, void 0)
  .ser(se_ModifyDBProxyTargetGroupCommand)
  .de(de_ModifyDBProxyTargetGroupCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyDBProxyTargetGroupRequest;
      output: ModifyDBProxyTargetGroupResponse;
    };
    sdk: {
      input: ModifyDBProxyTargetGroupCommandInput;
      output: ModifyDBProxyTargetGroupCommandOutput;
    };
  };
}
