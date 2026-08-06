// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListGatewayRateLimitsRequest, ListGatewayRateLimitsResponse } from "../models/models_0";
import { ListGatewayRateLimits$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListGatewayRateLimitsCommand}.
 */
export interface ListGatewayRateLimitsCommandInput extends ListGatewayRateLimitsRequest {}
/**
 * @public
 *
 * The output of {@link ListGatewayRateLimitsCommand}.
 */
export interface ListGatewayRateLimitsCommandOutput extends ListGatewayRateLimitsResponse, __MetadataBearer {}

/**
 * <p>Lists all rate limits for a gateway. Results are paginated. Use the <code>nextToken</code> parameter to retrieve additional results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, ListGatewayRateLimitsCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, ListGatewayRateLimitsCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // ListGatewayRateLimitsRequest
 *   gatewayIdentifier: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListGatewayRateLimitsCommand(input);
 * const response = await client.send(command);
 * // { // ListGatewayRateLimitsResponse
 * //   rateLimits: [ // GatewayRateLimits // required
 * //     { // GatewayRateLimitDetail
 * //       rateLimitId: "STRING_VALUE", // required
 * //       gatewayIdentifier: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       dimensionKeys: [ // DimensionKeys // required
 * //         "STRING_VALUE",
 * //       ],
 * //       entries: [ // LimitEntries // required
 * //         { // LimitEntry
 * //           dimensions: { // Dimensions // required
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //           requests: [ // RateConfigs
 * //             { // RateConfig
 * //               rate: Number("double"), // required
 * //               period: "second" || "minute", // required
 * //             },
 * //           ],
 * //           tokens: [
 * //             {
 * //               rate: Number("double"), // required
 * //               period: "second" || "minute", // required
 * //             },
 * //           ],
 * //           connections: [
 * //             {
 * //               rate: Number("double"), // required
 * //               period: "second" || "minute", // required
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //       status: "CREATING" || "ACTIVE" || "UPDATING" || "DELETING", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListGatewayRateLimitsCommandInput - {@link ListGatewayRateLimitsCommandInput}
 * @returns {@link ListGatewayRateLimitsCommandOutput}
 * @see {@link ListGatewayRateLimitsCommandInput} for command's `input` shape.
 * @see {@link ListGatewayRateLimitsCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentCoreControlClientResolvedConfig | config} for BedrockAgentCoreControlClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>This exception is thrown when a request is denied per access permissions</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception is thrown if there was an unexpected error during processing of request</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception is thrown when a resource referenced by the operation does not exist</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>This exception is thrown when the number of requests exceeds the limit</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the service.</p>
 *
 * @throws {@link BedrockAgentCoreControlServiceException}
 * <p>Base exception class for all service exceptions from BedrockAgentCoreControl service.</p>
 *
 *
 * @public
 */
export class ListGatewayRateLimitsCommand extends command<ListGatewayRateLimitsCommandInput, ListGatewayRateLimitsCommandOutput>(
  _ep0,
  _mw0,
  "ListGatewayRateLimits",
  ListGatewayRateLimits$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListGatewayRateLimitsRequest;
      output: ListGatewayRateLimitsResponse;
    };
    sdk: {
      input: ListGatewayRateLimitsCommandInput;
      output: ListGatewayRateLimitsCommandOutput;
    };
  };
}
