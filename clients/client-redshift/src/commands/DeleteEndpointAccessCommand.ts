// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteEndpointAccessMessage, EndpointAccess } from "../models/models_0";
import type { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { DeleteEndpointAccess } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteEndpointAccessCommand}.
 */
export interface DeleteEndpointAccessCommandInput extends DeleteEndpointAccessMessage {}
/**
 * @public
 *
 * The output of {@link DeleteEndpointAccessCommand}.
 */
export interface DeleteEndpointAccessCommandOutput extends EndpointAccess, __MetadataBearer {}

/**
 * <p>Deletes a Redshift-managed VPC endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DeleteEndpointAccessCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DeleteEndpointAccessCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * // import type { RedshiftClientConfig } from "@aws-sdk/client-redshift";
 * const config = {}; // type is RedshiftClientConfig
 * const client = new RedshiftClient(config);
 * const input = { // DeleteEndpointAccessMessage
 *   EndpointName: "STRING_VALUE", // required
 * };
 * const command = new DeleteEndpointAccessCommand(input);
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
 * @param DeleteEndpointAccessCommandInput - {@link DeleteEndpointAccessCommandInput}
 * @returns {@link DeleteEndpointAccessCommandOutput}
 * @see {@link DeleteEndpointAccessCommandInput} for command's `input` shape.
 * @see {@link DeleteEndpointAccessCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link ClusterNotFoundFault} (client fault)
 *  <p>The <code>ClusterIdentifier</code> parameter does not refer to an existing cluster.
 *         </p>
 *
 * @throws {@link EndpointNotFoundFault} (client fault)
 *  <p>The endpoint name doesn't refer to an existing endpoint.</p>
 *
 * @throws {@link InvalidClusterSecurityGroupStateFault} (client fault)
 *  <p>The state of the cluster security group is not <code>available</code>. </p>
 *
 * @throws {@link InvalidClusterStateFault} (client fault)
 *  <p>The specified cluster is not in the <code>available</code> state. </p>
 *
 * @throws {@link InvalidEndpointStateFault} (client fault)
 *  <p>The status of the endpoint is not valid.</p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 *
 * @public
 */
export class DeleteEndpointAccessCommand extends $Command
  .classBuilder<
    DeleteEndpointAccessCommandInput,
    DeleteEndpointAccessCommandOutput,
    RedshiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RedshiftServiceVersion20121201", "DeleteEndpointAccess", {})
  .n("RedshiftClient", "DeleteEndpointAccessCommand")
  .sc(DeleteEndpointAccess)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteEndpointAccessMessage;
      output: EndpointAccess;
    };
    sdk: {
      input: DeleteEndpointAccessCommandInput;
      output: DeleteEndpointAccessCommandOutput;
    };
  };
}
