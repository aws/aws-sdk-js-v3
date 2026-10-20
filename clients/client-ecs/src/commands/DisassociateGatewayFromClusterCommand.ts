// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DisassociateGatewayFromClusterRequest, DisassociateGatewayFromClusterResponse } from "../models/models_0";
import { DisassociateGatewayFromCluster$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DisassociateGatewayFromClusterCommand}.
 */
export interface DisassociateGatewayFromClusterCommandInput extends DisassociateGatewayFromClusterRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateGatewayFromClusterCommand}.
 */
export interface DisassociateGatewayFromClusterCommandOutput extends DisassociateGatewayFromClusterResponse, __MetadataBearer {}

/**
 * <p>Removes the association between a gateway and an Amazon ECS cluster. The association remains in the <code>DISASSOCIATING</code> state until you remove all of the gateway routes for the cluster by updating the associated services. You can use <code>ListGatewayRoutes</code> with a cluster filter to determine which routes are preventing disassociation. No infrastructure changes are made until the affected services are updated.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, DisassociateGatewayFromClusterCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, DisassociateGatewayFromClusterCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * // import type { ECSClientConfig } from "@aws-sdk/client-ecs";
 * const config = {}; // type is ECSClientConfig
 * const client = new ECSClient(config);
 * const input = { // DisassociateGatewayFromClusterRequest
 *   gateway: "STRING_VALUE", // required
 *   cluster: "STRING_VALUE", // required
 * };
 * const command = new DisassociateGatewayFromClusterCommand(input);
 * const response = await client.send(command);
 * // { // DisassociateGatewayFromClusterResponse
 * //   gatewayArn: "STRING_VALUE",
 * //   clusterArn: "STRING_VALUE",
 * //   status: "ACTIVE" || "DISASSOCIATING" || "INACTIVE",
 * // };
 *
 * ```
 *
 * @param DisassociateGatewayFromClusterCommandInput - {@link DisassociateGatewayFromClusterCommandInput}
 * @returns {@link DisassociateGatewayFromClusterCommandOutput}
 * @see {@link DisassociateGatewayFromClusterCommandInput} for command's `input` shape.
 * @see {@link DisassociateGatewayFromClusterCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for ECSClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have authorization to perform the requested action.</p>
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action. This client action might be using an action or resource on behalf of a user that doesn't have permissions to use the action or resource. Or, it might be specifying an identifier that isn't valid.</p>
 *
 * @throws {@link ClusterNotFoundException} (client fault)
 *  <p>The specified cluster wasn't found. You can view your available clusters with <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListClusters.html">ListClusters</a>. Amazon ECS clusters are Region specific.</p>
 *
 * @throws {@link GatewayNotFoundException} (client fault)
 *  <p>The specified gateway wasn't found. Check that the gateway name or ARN is correct and that the gateway exists in your account and Region.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter isn't valid. Review the available parameters for the API request.</p> <p>For more information about service event errors, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-event-messages-list.html">Amazon ECS service event messages</a>. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource wasn't found.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server issue.</p>
 *
 * @throws {@link UnsupportedFeatureException} (client fault)
 *  <p>The specified task isn't supported in this Region.</p>
 *
 * @throws {@link ECSServiceException}
 * <p>Base exception class for all service exceptions from ECS service.</p>
 *
 *
 * @example To disassociate a gateway from a cluster
 * ```javascript
 * // This example removes the association between the gateway named my-gateway and the cluster named my-cluster. The association remains in the DISASSOCIATING state until all gateway routes for the cluster are removed.
 * const input = {
 *   cluster: "my-cluster",
 *   gateway: "my-gateway"
 * };
 * const command = new DisassociateGatewayFromClusterCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   clusterArn: "arn:aws:ecs:us-east-1:123456789012:cluster/my-cluster",
 *   gatewayArn: "arn:aws:ecs:us-east-1:123456789012:gateway/my-gateway/a1b2c3d4e5f6478890abcdef12345678",
 *   status: "DISASSOCIATING"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DisassociateGatewayFromClusterCommand extends command<DisassociateGatewayFromClusterCommandInput, DisassociateGatewayFromClusterCommandOutput>(
  _ep0,
  _mw0,
  "DisassociateGatewayFromCluster",
  DisassociateGatewayFromCluster$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateGatewayFromClusterRequest;
      output: DisassociateGatewayFromClusterResponse;
    };
    sdk: {
      input: DisassociateGatewayFromClusterCommandInput;
      output: DisassociateGatewayFromClusterCommandOutput;
    };
  };
}
