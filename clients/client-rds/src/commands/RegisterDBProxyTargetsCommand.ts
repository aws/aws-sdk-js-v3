// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RegisterDBProxyTargetsRequest, RegisterDBProxyTargetsResponse } from "../models/models_1";
import { RegisterDBProxyTargets$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Associate one or more `DBProxyTarget` data structures with a `DBProxyTargetGroup`.
 *
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
 * //         State: "REGISTERING" || "AVAILABLE" || "UNAVAILABLE" || "UNUSED",
 * //         Reason: "UNREACHABLE" || "CONNECTION_FAILED" || "AUTH_FAILURE" || "PENDING_PROXY_CAPACITY" || "INVALID_REPLICATION_STATE" || "PROMOTED",
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
 *
 * `DBClusterIdentifier` doesn't refer to an existing DB cluster.
 *
 * @throws {@link DBInstanceNotFoundFault} (client fault)
 *
 * `DBInstanceIdentifier` doesn't refer to an existing DB instance.
 *
 * @throws {@link DBProxyNotFoundFault} (client fault)
 *
 * The specified proxy name doesn't correspond to a proxy owned by your Amazon Web Services account in the specified Amazon Web Services Region.
 *
 * @throws {@link DBProxyTargetAlreadyRegisteredFault} (client fault)
 *
 * The proxy is already associated with the specified RDS DB instance or Aurora DB cluster.
 *
 * @throws {@link DBProxyTargetGroupNotFoundFault} (client fault)
 *
 * The specified target group isn't available for a proxy owned by your Amazon Web Services account in the specified Amazon Web Services Region.
 *
 * @throws {@link InsufficientAvailableIPsInSubnetFault} (client fault)
 *
 * The requested operation can't be performed because there aren't enough available IP addresses in the proxy's subnets. Add more CIDR blocks to the VPC or remove IP address that aren't required from the subnets.
 *
 * @throws {@link InvalidDBClusterStateFault} (client fault)
 *
 * The requested operation can't be performed while the cluster is in this state.
 *
 * @throws {@link InvalidDBInstanceStateFault} (client fault)
 *
 * The DB instance isn't in a valid state.
 *
 * @throws {@link InvalidDBProxyStateFault} (client fault)
 *
 * The requested operation can't be performed while the proxy is in this state.
 *
 * @throws {@link RDSServiceException}
 *
 * Base exception class for all service exceptions from RDS service.
 *
 * @public
 */
export class RegisterDBProxyTargetsCommand extends command<RegisterDBProxyTargetsCommandInput, RegisterDBProxyTargetsCommandOutput>(
  _ep0,
  _mw0,
  "RegisterDBProxyTargets",
  RegisterDBProxyTargets$
) {
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
