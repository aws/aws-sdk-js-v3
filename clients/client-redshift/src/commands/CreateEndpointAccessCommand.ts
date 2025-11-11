// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateEndpointAccessMessage, EndpointAccess } from "../models/models_0";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { CreateEndpointAccess } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Creates a Redshift-managed VPC endpoint.</p>
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
 *  <p>You are not authorized to access the cluster.</p>
 *
 * @throws {@link ClusterNotFoundFault} (client fault)
 *  <p>The <code>ClusterIdentifier</code> parameter does not refer to an existing cluster.
 *         </p>
 *
 * @throws {@link ClusterSubnetGroupNotFoundFault} (client fault)
 *  <p>The cluster subnet group name does not refer to an existing cluster subnet
 *             group.</p>
 *
 * @throws {@link EndpointAlreadyExistsFault} (client fault)
 *  <p>The account already has a Redshift-managed VPC endpoint with the given identifier.</p>
 *
 * @throws {@link EndpointsPerAuthorizationLimitExceededFault} (client fault)
 *  <p>The number of Redshift-managed VPC endpoints per authorization has exceeded its limit.</p>
 *
 * @throws {@link EndpointsPerClusterLimitExceededFault} (client fault)
 *  <p>The number of Redshift-managed VPC endpoints per cluster has exceeded its limit.</p>
 *
 * @throws {@link InvalidClusterSecurityGroupStateFault} (client fault)
 *  <p>The state of the cluster security group is not <code>available</code>. </p>
 *
 * @throws {@link InvalidClusterStateFault} (client fault)
 *  <p>The specified cluster is not in the <code>available</code> state. </p>
 *
 * @throws {@link UnauthorizedOperation} (client fault)
 *  <p>Your account is not authorized to perform the requested operation.</p>
 *
 * @throws {@link UnsupportedOperationFault} (client fault)
 *  <p>The requested operation isn't supported.</p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 *
 * @public
 */
export class CreateEndpointAccessCommand extends $Command
  .classBuilder<
    CreateEndpointAccessCommandInput,
    CreateEndpointAccessCommandOutput,
    RedshiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RedshiftServiceVersion20121201", "CreateEndpointAccess", {})
  .n("RedshiftClient", "CreateEndpointAccessCommand")
  .sc(CreateEndpointAccess)
  .build() {
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
