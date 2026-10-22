// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListGatewayRoutesRequest, ListGatewayRoutesResponse } from "../models/models_0";
import { ListGatewayRoutes$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListGatewayRoutesCommand}.
 */
export interface ListGatewayRoutesCommandInput extends ListGatewayRoutesRequest {}
/**
 * @public
 *
 * The output of {@link ListGatewayRoutesCommand}.
 */
export interface ListGatewayRoutesCommandOutput extends ListGatewayRoutesResponse, __MetadataBearer {}

/**
 * <p>Returns a list of gateway routes. A gateway route represents the association between a service and a gateway and the service-specific infrastructure the gateway manages for it. You can filter the results by gateway, cluster, service, container port name, and status. The results are paginated. We recommend that you use pagination to ensure that the operation returns quickly and successfully.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, ListGatewayRoutesCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, ListGatewayRoutesCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * // import type { ECSClientConfig } from "@aws-sdk/client-ecs";
 * const config = {}; // type is ECSClientConfig
 * const client = new ECSClient(config);
 * const input = { // ListGatewayRoutesRequest
 *   gateway: "STRING_VALUE",
 *   cluster: "STRING_VALUE",
 *   service: "STRING_VALUE",
 *   serviceContainerPortName: "STRING_VALUE",
 *   status: [ // GatewayRouteStatusList
 *     "ACTIVE" || "CREATE_IN_PROGRESS" || "CREATE_FAILED" || "UPDATE_IN_PROGRESS" || "UPDATE_FAILED" || "DELETE_IN_PROGRESS" || "DELETE_FAILED",
 *   ],
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListGatewayRoutesCommand(input);
 * const response = await client.send(command);
 * // { // ListGatewayRoutesResponse
 * //   gatewayRoutes: [ // GatewayRouteSummaryList
 * //     { // GatewayRouteSummary
 * //       gatewayRouteArn: "STRING_VALUE",
 * //       gatewayArn: "STRING_VALUE",
 * //       clusterArn: "STRING_VALUE",
 * //       serviceArn: "STRING_VALUE",
 * //       serviceContainerPortName: "STRING_VALUE",
 * //       status: "ACTIVE" || "CREATE_IN_PROGRESS" || "CREATE_FAILED" || "UPDATE_IN_PROGRESS" || "UPDATE_FAILED" || "DELETE_IN_PROGRESS" || "DELETE_FAILED",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListGatewayRoutesCommandInput - {@link ListGatewayRoutesCommandInput}
 * @returns {@link ListGatewayRoutesCommandOutput}
 * @see {@link ListGatewayRoutesCommandInput} for command's `input` shape.
 * @see {@link ListGatewayRoutesCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for ECSClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have authorization to perform the requested action.</p>
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action. This client action might be using an action or resource on behalf of a user that doesn't have permissions to use the action or resource. Or, it might be specifying an identifier that isn't valid.</p>
 *
 * @throws {@link GatewayNotFoundException} (client fault)
 *  <p>The specified gateway wasn't found. Check that the gateway name or ARN is correct and that the gateway exists in your account and Region.</p>
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
 * @example To list the gateway routes for a gateway
 * ```javascript
 * // This example lists the gateway routes for the gateway named my-gateway in the cluster named my-cluster.
 * const input = {
 *   cluster: "my-cluster",
 *   gateway: "my-gateway"
 * };
 * const command = new ListGatewayRoutesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   gatewayRoutes: [
 *     {
 *       clusterArn: "arn:aws:ecs:us-east-1:123456789012:cluster/my-cluster",
 *       gatewayArn: "arn:aws:ecs:us-east-1:123456789012:gateway/my-gateway/a1b2c3d4e5f6478890abcdef12345678",
 *       gatewayRouteArn: "arn:aws:ecs:us-east-1:123456789012:gateway-route/my-gateway/a1b2c3d4e5f6478890abcdef12345678/f0e1d2c3b4a5968778695a4b3c2d1e0f",
 *       serviceArn: "arn:aws:ecs:us-east-1:123456789012:service/my-cluster/my-web-service",
 *       serviceContainerPortName: "web",
 *       status: "ACTIVE"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListGatewayRoutesCommand extends command<ListGatewayRoutesCommandInput, ListGatewayRoutesCommandOutput>(
  _ep0,
  _mw0,
  "ListGatewayRoutes",
  ListGatewayRoutes$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListGatewayRoutesRequest;
      output: ListGatewayRoutesResponse;
    };
    sdk: {
      input: ListGatewayRoutesCommandInput;
      output: ListGatewayRoutesCommandOutput;
    };
  };
}
