// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeAgentsRequest, DescribeAgentsResponse } from "../models/models_0";
import { DescribeAgents$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeAgentsCommand}.
 */
export interface DescribeAgentsCommandInput extends DescribeAgentsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAgentsCommand}.
 */
export interface DescribeAgentsCommandOutput extends DescribeAgentsResponse, __MetadataBearer {}

/**
 * Lists agents or collectors as specified by ID or other filters. All agents/collectors associated with your user can be listed if you call `DescribeAgents` as is without passing any parameters.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationDiscoveryServiceClient, DescribeAgentsCommand } from "@aws-sdk/client-application-discovery-service"; // ES Modules import
 * // const { ApplicationDiscoveryServiceClient, DescribeAgentsCommand } = require("@aws-sdk/client-application-discovery-service"); // CommonJS import
 * // import type { ApplicationDiscoveryServiceClientConfig } from "@aws-sdk/client-application-discovery-service";
 * const config = {}; // type is ApplicationDiscoveryServiceClientConfig
 * const client = new ApplicationDiscoveryServiceClient(config);
 * const input = { // DescribeAgentsRequest
 *   agentIds: [ // AgentIds
 *     "STRING_VALUE",
 *   ],
 *   filters: [ // Filters
 *     { // Filter
 *       name: "STRING_VALUE", // required
 *       values: [ // FilterValues // required
 *         "STRING_VALUE",
 *       ],
 *       condition: "STRING_VALUE", // required
 *     },
 *   ],
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new DescribeAgentsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAgentsResponse
 * //   agentsInfo: [ // AgentsInfo
 * //     { // AgentInfo
 * //       agentId: "STRING_VALUE",
 * //       hostName: "STRING_VALUE",
 * //       agentNetworkInfoList: [ // AgentNetworkInfoList
 * //         { // AgentNetworkInfo
 * //           ipAddress: "STRING_VALUE",
 * //           macAddress: "STRING_VALUE",
 * //         },
 * //       ],
 * //       connectorId: "STRING_VALUE",
 * //       version: "STRING_VALUE",
 * //       health: "HEALTHY" || "UNHEALTHY" || "RUNNING" || "UNKNOWN" || "BLACKLISTED" || "SHUTDOWN",
 * //       lastHealthPingTime: "STRING_VALUE",
 * //       collectionStatus: "STRING_VALUE",
 * //       agentType: "STRING_VALUE",
 * //       registeredTime: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeAgentsCommandInput - {@link DescribeAgentsCommandInput}
 * @returns {@link DescribeAgentsCommandOutput}
 * @see {@link DescribeAgentsCommandInput} for command's `input` shape.
 * @see {@link DescribeAgentsCommandOutput} for command's `response` shape.
 * @see {@link ApplicationDiscoveryServiceClientResolvedConfig | config} for ApplicationDiscoveryServiceClient's `config` shape.
 *
 * @throws {@link AuthorizationErrorException} (client fault)
 *
 * The user does not have permission to perform the action. Check the IAM policy associated with this user.
 *
 * @throws {@link HomeRegionNotSetException} (client fault)
 *
 * The home Region is not set. Set the home Region to continue.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more parameters are not valid. Verify the parameters and try again.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * The value of one or more parameters are either invalid or out of range. Verify the parameter values and try again.
 *
 * @throws {@link ServerInternalErrorException} (server fault)
 *
 * The server experienced an internal error. Try again.
 *
 * @throws {@link ApplicationDiscoveryServiceServiceException}
 *
 * Base exception class for all service exceptions from ApplicationDiscoveryService service.
 *
 * @public
 */
export class DescribeAgentsCommand extends command<DescribeAgentsCommandInput, DescribeAgentsCommandOutput>(
  _ep0,
  _mw0,
  "DescribeAgents",
  DescribeAgents$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAgentsRequest;
      output: DescribeAgentsResponse;
    };
    sdk: {
      input: DescribeAgentsCommandInput;
      output: DescribeAgentsCommandOutput;
    };
  };
}
