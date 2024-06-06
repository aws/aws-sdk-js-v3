// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DBClusterEndpoint } from "../models/models_0";
import { ModifyDBClusterEndpointMessage } from "../models/models_1";
import { de_ModifyDBClusterEndpointCommand, se_ModifyDBClusterEndpointCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyDBClusterEndpointCommand}.
 */
export interface ModifyDBClusterEndpointCommandInput extends ModifyDBClusterEndpointMessage {}
/**
 * @public
 *
 * The output of {@link ModifyDBClusterEndpointCommand}.
 */
export interface ModifyDBClusterEndpointCommandOutput extends DBClusterEndpoint, __MetadataBearer {}

/**
 * <p>Modifies the properties of an endpoint in an Amazon Aurora DB cluster.</p>
 *          <note>
 *             <p>This operation only applies to Aurora DB clusters.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, ModifyDBClusterEndpointCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, ModifyDBClusterEndpointCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // ModifyDBClusterEndpointMessage
 *   DBClusterEndpointIdentifier: "STRING_VALUE", // required
 *   EndpointType: "STRING_VALUE",
 *   StaticMembers: [ // StringList
 *     "STRING_VALUE",
 *   ],
 *   ExcludedMembers: [
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new ModifyDBClusterEndpointCommand(input);
 * const response = await client.send(command);
 * // { // DBClusterEndpoint
 * //   DBClusterEndpointIdentifier: "STRING_VALUE",
 * //   DBClusterIdentifier: "STRING_VALUE",
 * //   DBClusterEndpointResourceIdentifier: "STRING_VALUE",
 * //   Endpoint: "STRING_VALUE",
 * //   Status: "STRING_VALUE",
 * //   EndpointType: "STRING_VALUE",
 * //   CustomEndpointType: "STRING_VALUE",
 * //   StaticMembers: [ // StringList
 * //     "STRING_VALUE",
 * //   ],
 * //   ExcludedMembers: [
 * //     "STRING_VALUE",
 * //   ],
 * //   DBClusterEndpointArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ModifyDBClusterEndpointCommandInput - {@link ModifyDBClusterEndpointCommandInput}
 * @returns {@link ModifyDBClusterEndpointCommandOutput}
 * @see {@link ModifyDBClusterEndpointCommandInput} for command's `input` shape.
 * @see {@link ModifyDBClusterEndpointCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBClusterEndpointNotFoundFault} (client fault)
 *  <p>The specified custom endpoint doesn't exist.</p>
 *
 * @throws {@link DBInstanceNotFoundFault} (client fault)
 *  <p>
 *             <code>DBInstanceIdentifier</code> doesn't refer to an existing DB instance.</p>
 *
 * @throws {@link InvalidDBClusterEndpointStateFault} (client fault)
 *  <p>The requested operation can't be performed on the endpoint while the endpoint is in this state.</p>
 *
 * @throws {@link InvalidDBClusterStateFault} (client fault)
 *  <p>The requested operation can't be performed while the cluster is in this state.</p>
 *
 * @throws {@link InvalidDBInstanceStateFault} (client fault)
 *  <p>The DB instance isn't in a valid state.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 * @public
 * @example To modify a custom DB cluster endpoint
 * ```javascript
 * // The following example modifies the specified custom DB cluster endpoint.
 * const input = {
 *   "DBClusterEndpointIdentifier": "mycustomendpoint",
 *   "StaticMembers": [
 *     "dbinstance1",
 *     "dbinstance2",
 *     "dbinstance3"
 *   ]
 * };
 * const command = new ModifyDBClusterEndpointCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "CustomEndpointType": "READER",
 *   "DBClusterEndpointArn": "arn:aws:rds:us-east-1:123456789012:cluster-endpoint:mycustomendpoint",
 *   "DBClusterEndpointIdentifier": "mycustomendpoint",
 *   "DBClusterEndpointResourceIdentifier": "cluster-endpoint-ANPAJ4AE5446DAEXAMPLE",
 *   "DBClusterIdentifier": "mydbcluster",
 *   "Endpoint": "mycustomendpoint.cluster-custom-cnpexample.us-east-1.rds.amazonaws.com",
 *   "EndpointType": "CUSTOM",
 *   "ExcludedMembers": [],
 *   "StaticMembers": [
 *     "dbinstance1",
 *     "dbinstance2",
 *     "dbinstance3"
 *   ],
 *   "Status": "modifying"
 * }
 * *\/
 * // example id: to-modify-a-custom-db-cluster-endpoint-1680307652958
 * ```
 *
 */
export class ModifyDBClusterEndpointCommand extends $Command
  .classBuilder<
    ModifyDBClusterEndpointCommandInput,
    ModifyDBClusterEndpointCommandOutput,
    RDSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: RDSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonRDSv19", "ModifyDBClusterEndpoint", {})
  .n("RDSClient", "ModifyDBClusterEndpointCommand")
  .f(void 0, void 0)
  .ser(se_ModifyDBClusterEndpointCommand)
  .de(de_ModifyDBClusterEndpointCommand)
  .build() {}
