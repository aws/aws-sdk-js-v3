// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListGatewaysRequest, ListGatewaysResponse } from "../models/models_0";
import { ListGateways$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListGatewaysCommand}.
 */
export interface ListGatewaysCommandInput extends ListGatewaysRequest {}
/**
 * @public
 *
 * The output of {@link ListGatewaysCommand}.
 */
export interface ListGatewaysCommandOutput extends ListGatewaysResponse, __MetadataBearer {}

/**
 * <p>Returns a list of gateways in your account. You can filter the results by gateway name and status. The results are paginated. We recommend that you use pagination to ensure that the operation returns quickly and successfully.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, ListGatewaysCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, ListGatewaysCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * // import type { ECSClientConfig } from "@aws-sdk/client-ecs";
 * const config = {}; // type is ECSClientConfig
 * const client = new ECSClient(config);
 * const input = { // ListGatewaysRequest
 *   names: [ // StringList
 *     "STRING_VALUE",
 *   ],
 *   status: [ // GatewayStatusList
 *     "ACTIVE" || "UPDATE_IN_PROGRESS" || "UPDATE_COMPLETE" || "UPDATE_FAILED" || "DELETED",
 *   ],
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListGatewaysCommand(input);
 * const response = await client.send(command);
 * // { // ListGatewaysResponse
 * //   gateways: [ // GatewaySummaryList
 * //     { // GatewaySummary
 * //       gatewayArn: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       status: "ACTIVE" || "UPDATE_IN_PROGRESS" || "UPDATE_COMPLETE" || "UPDATE_FAILED" || "DELETED",
 * //       createdAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListGatewaysCommandInput - {@link ListGatewaysCommandInput}
 * @returns {@link ListGatewaysCommandOutput}
 * @see {@link ListGatewaysCommandInput} for command's `input` shape.
 * @see {@link ListGatewaysCommandOutput} for command's `response` shape.
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
 * @example To list active gateways
 * ```javascript
 * // This example lists the gateways in your account that have a status of ACTIVE.
 * const input = {
 *   status: [
 *     "ACTIVE"
 *   ]
 * };
 * const command = new ListGatewaysCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   gateways: [
 *     {
 *       createdAt: "2026-10-20T12:00:00.000Z",
 *       gatewayArn: "arn:aws:ecs:us-east-1:123456789012:gateway/my-gateway/a1b2c3d4e5f6478890abcdef12345678",
 *       name: "my-gateway",
 *       status: "ACTIVE"
 *     },
 *     {
 *       createdAt: "2026-10-21T09:30:00.000Z",
 *       gatewayArn: "arn:aws:ecs:us-east-1:123456789012:gateway/my-internal-gateway/0f1e2d3c4b5a69788796a5b4c3d2e1f0",
 *       name: "my-internal-gateway",
 *       status: "ACTIVE"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListGatewaysCommand extends command<ListGatewaysCommandInput, ListGatewaysCommandOutput>(
  _ep0,
  _mw0,
  "ListGateways",
  ListGateways$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListGatewaysRequest;
      output: ListGatewaysResponse;
    };
    sdk: {
      input: ListGatewaysCommandInput;
      output: ListGatewaysCommandOutput;
    };
  };
}
