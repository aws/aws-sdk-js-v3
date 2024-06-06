// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeEndpointAccessMessage, EndpointAccessList } from "../models/models_1";
import { de_DescribeEndpointAccessCommand, se_DescribeEndpointAccessCommand } from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeEndpointAccessCommand}.
 */
export interface DescribeEndpointAccessCommandInput extends DescribeEndpointAccessMessage {}
/**
 * @public
 *
 * The output of {@link DescribeEndpointAccessCommand}.
 */
export interface DescribeEndpointAccessCommandOutput extends EndpointAccessList, __MetadataBearer {}

/**
 * <p>Describes a Redshift-managed VPC endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeEndpointAccessCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeEndpointAccessCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const input = { // DescribeEndpointAccessMessage
 *   ClusterIdentifier: "STRING_VALUE",
 *   ResourceOwner: "STRING_VALUE",
 *   EndpointName: "STRING_VALUE",
 *   VpcId: "STRING_VALUE",
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new DescribeEndpointAccessCommand(input);
 * const response = await client.send(command);
 * // { // EndpointAccessList
 * //   EndpointAccessList: [ // EndpointAccesses
 * //     { // EndpointAccess
 * //       ClusterIdentifier: "STRING_VALUE",
 * //       ResourceOwner: "STRING_VALUE",
 * //       SubnetGroupName: "STRING_VALUE",
 * //       EndpointStatus: "STRING_VALUE",
 * //       EndpointName: "STRING_VALUE",
 * //       EndpointCreateTime: new Date("TIMESTAMP"),
 * //       Port: Number("int"),
 * //       Address: "STRING_VALUE",
 * //       VpcSecurityGroups: [ // VpcSecurityGroupMembershipList
 * //         { // VpcSecurityGroupMembership
 * //           VpcSecurityGroupId: "STRING_VALUE",
 * //           Status: "STRING_VALUE",
 * //         },
 * //       ],
 * //       VpcEndpoint: { // VpcEndpoint
 * //         VpcEndpointId: "STRING_VALUE",
 * //         VpcId: "STRING_VALUE",
 * //         NetworkInterfaces: [ // NetworkInterfaceList
 * //           { // NetworkInterface
 * //             NetworkInterfaceId: "STRING_VALUE",
 * //             SubnetId: "STRING_VALUE",
 * //             PrivateIpAddress: "STRING_VALUE",
 * //             AvailabilityZone: "STRING_VALUE",
 * //             Ipv6Address: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeEndpointAccessCommandInput - {@link DescribeEndpointAccessCommandInput}
 * @returns {@link DescribeEndpointAccessCommandOutput}
 * @see {@link DescribeEndpointAccessCommandInput} for command's `input` shape.
 * @see {@link DescribeEndpointAccessCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link ClusterNotFoundFault} (client fault)
 *  <p>The <code>ClusterIdentifier</code> parameter does not refer to an existing cluster.
 *         </p>
 *
 * @throws {@link EndpointNotFoundFault} (client fault)
 *  <p>The endpoint name doesn't refer to an existing endpoint.</p>
 *
 * @throws {@link InvalidClusterStateFault} (client fault)
 *  <p>The specified cluster is not in the <code>available</code> state. </p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 * @public
 */
export class DescribeEndpointAccessCommand extends $Command
  .classBuilder<
    DescribeEndpointAccessCommandInput,
    DescribeEndpointAccessCommandOutput,
    RedshiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: RedshiftClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("RedshiftServiceVersion20121201", "DescribeEndpointAccess", {})
  .n("RedshiftClient", "DescribeEndpointAccessCommand")
  .f(void 0, void 0)
  .ser(se_DescribeEndpointAccessCommand)
  .de(de_DescribeEndpointAccessCommand)
  .build() {}
