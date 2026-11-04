// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateEndpointAccessMessage, EndpointAccess } from "../models/models_0";
import { CreateEndpointAccess$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateEndpointAccessCommand}.
 */
export interface CreateEndpointAccessCommandInput extends CreateEndpointAccessMessage {}
/**
 * @public
 *
 * The output of {@link CreateEndpointAccessCommand}.
 */
export interface CreateEndpointAccessCommandOutput extends EndpointAccess, __MetadataBearer {}

/**
 * Creates a Redshift-managed VPC endpoint.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, CreateEndpointAccessCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, CreateEndpointAccessCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * // import type { RedshiftClientConfig } from "@aws-sdk/client-redshift";
 * const config = {}; // type is RedshiftClientConfig
 * const client = new RedshiftClient(config);
 * const input = { // CreateEndpointAccessMessage
 *   ClusterIdentifier: "STRING_VALUE",
 *   ResourceOwner: "STRING_VALUE",
 *   EndpointName: "STRING_VALUE", // required
 *   SubnetGroupName: "STRING_VALUE", // required
 *   VpcSecurityGroupIds: [ // VpcSecurityGroupIdList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new CreateEndpointAccessCommand(input);
 * const response = await client.send(command);
 * // { // EndpointAccess
 * //   ClusterIdentifier: "STRING_VALUE",
 * //   ResourceOwner: "STRING_VALUE",
 * //   SubnetGroupName: "STRING_VALUE",
 * //   EndpointStatus: "STRING_VALUE",
 * //   EndpointName: "STRING_VALUE",
 * //   EndpointCreateTime: new Date("TIMESTAMP"),
 * //   Port: Number("int"),
 * //   Address: "STRING_VALUE",
 * //   VpcSecurityGroups: [ // VpcSecurityGroupMembershipList
 * //     { // VpcSecurityGroupMembership
 * //       VpcSecurityGroupId: "STRING_VALUE",
 * //       Status: "STRING_VALUE",
 * //     },
 * //   ],
 * //   VpcEndpoint: { // VpcEndpoint
 * //     VpcEndpointId: "STRING_VALUE",
 * //     VpcId: "STRING_VALUE",
 * //     NetworkInterfaces: [ // NetworkInterfaceList
 * //       { // NetworkInterface
 * //         NetworkInterfaceId: "STRING_VALUE",
 * //         SubnetId: "STRING_VALUE",
 * //         PrivateIpAddress: "STRING_VALUE",
 * //         AvailabilityZone: "STRING_VALUE",
 * //         Ipv6Address: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateEndpointAccessCommandInput - {@link CreateEndpointAccessCommandInput}
 * @returns {@link CreateEndpointAccessCommandOutput}
 * @see {@link CreateEndpointAccessCommandInput} for command's `input` shape.
 * @see {@link CreateEndpointAccessCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link AccessToClusterDeniedFault} (client fault)
 *
 * You are not authorized to access the cluster.
 *
 * @throws {@link ClusterNotFoundFault} (client fault)
 *
 * The `ClusterIdentifier` parameter does not refer to an existing cluster.
 *
 * @throws {@link ClusterSubnetGroupNotFoundFault} (client fault)
 *
 * The cluster subnet group name does not refer to an existing cluster subnet group.
 *
 * @throws {@link EndpointAlreadyExistsFault} (client fault)
 *
 * The account already has a Redshift-managed VPC endpoint with the given identifier.
 *
 * @throws {@link EndpointsPerAuthorizationLimitExceededFault} (client fault)
 *
 * The number of Redshift-managed VPC endpoints per authorization has exceeded its limit.
 *
 * @throws {@link EndpointsPerClusterLimitExceededFault} (client fault)
 *
 * The number of Redshift-managed VPC endpoints per cluster has exceeded its limit.
 *
 * @throws {@link InvalidClusterSecurityGroupStateFault} (client fault)
 *
 * The state of the cluster security group is not `available`.
 *
 * @throws {@link InvalidClusterStateFault} (client fault)
 *
 * The specified cluster is not in the `available` state.
 *
 * @throws {@link UnauthorizedOperation} (client fault)
 *
 * Your account is not authorized to perform the requested operation.
 *
 * @throws {@link UnsupportedOperationFault} (client fault)
 *
 * The requested operation isn't supported.
 *
 * @throws {@link RedshiftServiceException}
 *
 * Base exception class for all service exceptions from Redshift service.
 *
 * @public
 */
export class CreateEndpointAccessCommand extends command<CreateEndpointAccessCommandInput, CreateEndpointAccessCommandOutput>(
  _ep0,
  _mw0,
  "CreateEndpointAccess",
  CreateEndpointAccess$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateEndpointAccessMessage;
      output: EndpointAccess;
    };
    sdk: {
      input: CreateEndpointAccessCommandInput;
      output: CreateEndpointAccessCommandOutput;
    };
  };
}
