// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListGatewayClusterAssociationsRequest, ListGatewayClusterAssociationsResponse } from "../models/models_0";
import { ListGatewayClusterAssociations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListGatewayClusterAssociationsCommand}.
 */
export interface ListGatewayClusterAssociationsCommandInput extends ListGatewayClusterAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link ListGatewayClusterAssociationsCommand}.
 */
export interface ListGatewayClusterAssociationsCommandOutput extends ListGatewayClusterAssociationsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of the associations between gateways and clusters. You can filter the results by gateway, cluster, and status. The results are paginated. We recommend that you use pagination to ensure that the operation returns quickly and successfully.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, ListGatewayClusterAssociationsCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, ListGatewayClusterAssociationsCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * // import type { ECSClientConfig } from "@aws-sdk/client-ecs";
 * const config = {}; // type is ECSClientConfig
 * const client = new ECSClient(config);
 * const input = { // ListGatewayClusterAssociationsRequest
 *   gateway: "STRING_VALUE",
 *   cluster: "STRING_VALUE",
 *   status: [ // GatewayClusterAssociationStatusList
 *     "ACTIVE" || "DISASSOCIATING" || "INACTIVE",
 *   ],
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListGatewayClusterAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // ListGatewayClusterAssociationsResponse
 * //   gatewayClusterAssociations: [ // GatewayClusterAssociationSummaryList
 * //     { // GatewayClusterAssociationSummary
 * //       gatewayArn: "STRING_VALUE",
 * //       clusterArn: "STRING_VALUE",
 * //       status: "ACTIVE" || "DISASSOCIATING" || "INACTIVE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListGatewayClusterAssociationsCommandInput - {@link ListGatewayClusterAssociationsCommandInput}
 * @returns {@link ListGatewayClusterAssociationsCommandOutput}
 * @see {@link ListGatewayClusterAssociationsCommandInput} for command's `input` shape.
 * @see {@link ListGatewayClusterAssociationsCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for ECSClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have authorization to perform the requested action.</p>
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action. This client action might be using an action or resource on behalf of a user that doesn't have permissions to use the action or resource. Or, it might be specifying an identifier that isn't valid.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter isn't valid. Review the available parameters for the API request.</p> <p>For more information about service event errors, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-event-messages-list.html">Amazon ECS service event messages</a>. </p>
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
 * @example To list the clusters associated with a gateway
 * ```javascript
 * // This example lists the clusters that are associated with the gateway named my-gateway.
 * const input = {
 *   gateway: "my-gateway"
 * };
 * const command = new ListGatewayClusterAssociationsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   gatewayClusterAssociations: [
 *     {
 *       clusterArn: "arn:aws:ecs:us-east-1:123456789012:cluster/my-cluster",
 *       gatewayArn: "arn:aws:ecs:us-east-1:123456789012:gateway/my-gateway/a1b2c3d4e5f6478890abcdef12345678",
 *       status: "ACTIVE"
 *     },
 *     {
 *       clusterArn: "arn:aws:ecs:us-east-1:123456789012:cluster/my-staging-cluster",
 *       gatewayArn: "arn:aws:ecs:us-east-1:123456789012:gateway/my-gateway/a1b2c3d4e5f6478890abcdef12345678",
 *       status: "ACTIVE"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListGatewayClusterAssociationsCommand extends command<ListGatewayClusterAssociationsCommandInput, ListGatewayClusterAssociationsCommandOutput>(
  _ep0,
  _mw0,
  "ListGatewayClusterAssociations",
  ListGatewayClusterAssociations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListGatewayClusterAssociationsRequest;
      output: ListGatewayClusterAssociationsResponse;
    };
    sdk: {
      input: ListGatewayClusterAssociationsCommandInput;
      output: ListGatewayClusterAssociationsCommandOutput;
    };
  };
}
