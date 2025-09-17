// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { RegisterDBProxyTargetsRequest, RegisterDBProxyTargetsResponse } from "../models/models_1";
import { de_RegisterDBProxyTargetsCommand, se_RegisterDBProxyTargetsCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RegisterDBProxyTargetsCommand}.
 */
export interface RegisterDBProxyTargetsCommandInput extends RegisterDBProxyTargetsRequest {}
/**
 * @public
 *
 * The output of {@link RegisterDBProxyTargetsCommand}.
 */
export interface RegisterDBProxyTargetsCommandOutput extends RegisterDBProxyTargetsResponse, __MetadataBearer {}

/**
 * <p>Associate one or more <code>DBProxyTarget</code> data structures with a <code>DBProxyTargetGroup</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, RegisterDBProxyTargetsCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, RegisterDBProxyTargetsCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // import type { RDSClientConfig } from "@aws-sdk/client-rds";
 * const config = {}; // type is RDSClientConfig
 * const client = new RDSClient(config);
 * const input = { // RegisterDBProxyTargetsRequest
 *   DBProxyName: "STRING_VALUE", // required
 *   TargetGroupName: "STRING_VALUE",
 *   DBInstanceIdentifiers: [ // StringList
 *     "STRING_VALUE",
 *   ],
 *   DBClusterIdentifiers: [
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new RegisterDBProxyTargetsCommand(input);
 * const response = await client.send(command);
 * // { // RegisterDBProxyTargetsResponse
 * //   DBProxyTargets: [ // TargetList
 * //     { // DBProxyTarget
 * //       TargetArn: "STRING_VALUE",
 * //       Endpoint: "STRING_VALUE",
 * //       TrackedClusterId: "STRING_VALUE",
 * //       RdsResourceId: "STRING_VALUE",
 * //       Port: Number("int"),
 * //       Type: "RDS_INSTANCE" || "RDS_SERVERLESS_ENDPOINT" || "TRACKED_CLUSTER",
 * //       Role: "READ_WRITE" || "READ_ONLY" || "UNKNOWN",
 * //       TargetHealth: { // TargetHealth
 * //         State: "REGISTERING" || "AVAILABLE" || "UNAVAILABLE",
 * //         Reason: "UNREACHABLE" || "CONNECTION_FAILED" || "AUTH_FAILURE" || "PENDING_PROXY_CAPACITY" || "INVALID_REPLICATION_STATE",
 * //         Description: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param RegisterDBProxyTargetsCommandInput - {@link RegisterDBProxyTargetsCommandInput}
 * @returns {@link RegisterDBProxyTargetsCommandOutput}
 * @see {@link RegisterDBProxyTargetsCommandInput} for command's `input` shape.
 * @see {@link RegisterDBProxyTargetsCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBClusterNotFoundFault} (client fault)
 *  <p>
 *             <code>DBClusterIdentifier</code> doesn't refer to an existing DB cluster.</p>
 *
 * @throws {@link DBInstanceNotFoundFault} (client fault)
 *  <p>
 *             <code>DBInstanceIdentifier</code> doesn't refer to an existing DB instance.</p>
 *
 * @throws {@link DBProxyNotFoundFault} (client fault)
 *  <p>The specified proxy name doesn't correspond to a proxy owned by your Amazon Web Services account in the specified Amazon Web Services Region.</p>
 *
 * @throws {@link DBProxyTargetAlreadyRegisteredFault} (client fault)
 *  <p>The proxy is already associated with the specified RDS DB instance or Aurora DB cluster.</p>
 *
 * @throws {@link DBProxyTargetGroupNotFoundFault} (client fault)
 *  <p>The specified target group isn't available for a proxy owned by your Amazon Web Services account in the specified Amazon Web Services Region.</p>
 *
 * @throws {@link InsufficientAvailableIPsInSubnetFault} (client fault)
 *  <p>The requested operation can't be performed because there aren't enough available IP addresses
 *            in the proxy's subnets. Add more CIDR blocks to the VPC or remove IP address that aren't required
 *            from the subnets.</p>
 *
 * @throws {@link InvalidDBClusterStateFault} (client fault)
 *  <p>The requested operation can't be performed while the cluster is in this state.</p>
 *
 * @throws {@link InvalidDBInstanceStateFault} (client fault)
 *  <p>The DB instance isn't in a valid state.</p>
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
export class RegisterDBProxyTargetsCommand extends $Command
  .classBuilder<
    RegisterDBProxyTargetsCommandInput,
    RegisterDBProxyTargetsCommandOutput,
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
  .s("AmazonRDSv19", "RegisterDBProxyTargets", {})
  .n("RDSClient", "RegisterDBProxyTargetsCommand")
  .f(void 0, void 0)
  .ser(se_RegisterDBProxyTargetsCommand)
  .de(de_RegisterDBProxyTargetsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RegisterDBProxyTargetsRequest;
      output: RegisterDBProxyTargetsResponse;
    };
    sdk: {
      input: RegisterDBProxyTargetsCommandInput;
      output: RegisterDBProxyTargetsCommandOutput;
    };
  };
}
