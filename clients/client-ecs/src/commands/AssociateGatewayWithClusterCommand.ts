// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AssociateGatewayWithClusterRequest, AssociateGatewayWithClusterResponse } from "../models/models_0";
import { AssociateGatewayWithCluster$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AssociateGatewayWithClusterCommand}.
 */
export interface AssociateGatewayWithClusterCommandInput extends AssociateGatewayWithClusterRequest {}
/**
 * @public
 *
 * The output of {@link AssociateGatewayWithClusterCommand}.
 */
export interface AssociateGatewayWithClusterCommandOutput extends AssociateGatewayWithClusterResponse, __MetadataBearer {}

/**
 * Associates a gateway with an Amazon ECS cluster. After a cluster is associated with a gateway, services in that cluster can use the gateway for ingress. No changes take effect until you update a service in the cluster to use the gateway. A single cluster can be associated with up to 5 gateways.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, AssociateGatewayWithClusterCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, AssociateGatewayWithClusterCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * // import type { ECSClientConfig } from "@aws-sdk/client-ecs";
 * const config = {}; // type is ECSClientConfig
 * const client = new ECSClient(config);
 * const input = { // AssociateGatewayWithClusterRequest
 *   gateway: "STRING_VALUE", // required
 *   cluster: "STRING_VALUE", // required
 * };
 * const command = new AssociateGatewayWithClusterCommand(input);
 * const response = await client.send(command);
 * // { // AssociateGatewayWithClusterResponse
 * //   gatewayArn: "STRING_VALUE",
 * //   clusterArn: "STRING_VALUE",
 * //   status: "ACTIVE" || "DISASSOCIATING" || "INACTIVE",
 * // };
 *
 * ```
 *
 * @param AssociateGatewayWithClusterCommandInput - {@link AssociateGatewayWithClusterCommandInput}
 * @returns {@link AssociateGatewayWithClusterCommandOutput}
 * @see {@link AssociateGatewayWithClusterCommandInput} for command's `input` shape.
 * @see {@link AssociateGatewayWithClusterCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for ECSClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have authorization to perform the requested action.
 *
 * @throws {@link ClientException} (client fault)
 *
 * These errors are usually caused by a client action. This client action might be using an action or resource on behalf of a user that doesn't have permissions to use the action or resource. Or, it might be specifying an identifier that isn't valid.
 *
 * @throws {@link ClusterNotFoundException} (client fault)
 *
 * The specified cluster wasn't found. You can view your available clusters with [ListClusters](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListClusters.html). Amazon ECS clusters are Region specific.
 *
 * @throws {@link GatewayNotFoundException} (client fault)
 *
 * The specified gateway wasn't found. Check that the gateway name or ARN is correct and that the gateway exists in your account and Region.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * The specified parameter isn't valid. Review the available parameters for the API request.
 *
 * For more information about service event errors, see [Amazon ECS service event messages](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-event-messages-list.html).
 *
 * @throws {@link ServerException} (server fault)
 *
 * These errors are usually caused by a server issue.
 *
 * @throws {@link UnsupportedFeatureException} (client fault)
 *
 * The specified task isn't supported in this Region.
 *
 * @throws {@link ECSServiceException}
 *
 * Base exception class for all service exceptions from ECS service.
 *
 * @example To associate a gateway with a cluster
 * ```javascript
 * // This example associates the gateway named my-gateway with the cluster named my-cluster so that services in the cluster can use the gateway for ingress.
 * const input = {
 *   cluster: "my-cluster",
 *   gateway: "my-gateway"
 * };
 * const command = new AssociateGatewayWithClusterCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   clusterArn: "arn:aws:ecs:us-east-1:123456789012:cluster/my-cluster",
 *   gatewayArn: "arn:aws:ecs:us-east-1:123456789012:gateway/my-gateway/a1b2c3d4e5f6478890abcdef12345678",
 *   status: "ACTIVE"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class AssociateGatewayWithClusterCommand extends command<AssociateGatewayWithClusterCommandInput, AssociateGatewayWithClusterCommandOutput>(
  _ep0,
  _mw0,
  "AssociateGatewayWithCluster",
  AssociateGatewayWithCluster$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateGatewayWithClusterRequest;
      output: AssociateGatewayWithClusterResponse;
    };
    sdk: {
      input: AssociateGatewayWithClusterCommandInput;
      output: AssociateGatewayWithClusterCommandOutput;
    };
  };
}
