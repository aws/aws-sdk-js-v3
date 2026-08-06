// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { BatchPutGatewayRateLimitsRequest, BatchPutGatewayRateLimitsResponse } from "../models/models_0";
import { BatchPutGatewayRateLimits$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link BatchPutGatewayRateLimitsCommand}.
 */
export interface BatchPutGatewayRateLimitsCommandInput extends BatchPutGatewayRateLimitsRequest {}
/**
 * @public
 *
 * The output of {@link BatchPutGatewayRateLimitsCommand}.
 */
export interface BatchPutGatewayRateLimitsCommandOutput extends BatchPutGatewayRateLimitsResponse, __MetadataBearer {}

/**
 * <p>Atomically creates or updates multiple rate limits for a gateway. The operation updates existing limits with matching keys and creates new limits for new keys. If the operation fails, the service applies no changes. Retry the request after resolving the issue.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, BatchPutGatewayRateLimitsCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, BatchPutGatewayRateLimitsCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // BatchPutGatewayRateLimitsRequest
 *   gatewayIdentifier: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 *   rateLimits: [ // BatchPutLimitEntries // required
 *     { // BatchPutLimitEntry
 *       rateLimitId: "STRING_VALUE",
 *       description: "STRING_VALUE",
 *       dimensionKeys: [ // DimensionKeys // required
 *         "STRING_VALUE",
 *       ],
 *       entries: [ // LimitEntries // required
 *         { // LimitEntry
 *           dimensions: { // Dimensions // required
 *             "<keys>": "STRING_VALUE",
 *           },
 *           requests: [ // RateConfigs
 *             { // RateConfig
 *               rate: Number("double"), // required
 *               period: "second" || "minute", // required
 *             },
 *           ],
 *           tokens: [
 *             {
 *               rate: Number("double"), // required
 *               period: "second" || "minute", // required
 *             },
 *           ],
 *           connections: [
 *             {
 *               rate: Number("double"), // required
 *               period: "second" || "minute", // required
 *             },
 *           ],
 *         },
 *       ],
 *     },
 *   ],
 * };
 * const command = new BatchPutGatewayRateLimitsCommand(input);
 * const response = await client.send(command);
 * // { // BatchPutGatewayRateLimitsResponse
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
 * // };
 *
 * ```
 *
 * @param BatchPutGatewayRateLimitsCommandInput - {@link BatchPutGatewayRateLimitsCommandInput}
 * @returns {@link BatchPutGatewayRateLimitsCommandOutput}
 * @see {@link BatchPutGatewayRateLimitsCommandInput} for command's `input` shape.
 * @see {@link BatchPutGatewayRateLimitsCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentCoreControlClientResolvedConfig | config} for BedrockAgentCoreControlClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>This exception is thrown when a request is denied per access permissions</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This exception is thrown when there is a conflict performing an operation</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception is thrown if there was an unexpected error during processing of request</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception is thrown when a resource referenced by the operation does not exist</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>This exception is thrown when a request is made beyond the service quota</p>
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
export class BatchPutGatewayRateLimitsCommand extends command<BatchPutGatewayRateLimitsCommandInput, BatchPutGatewayRateLimitsCommandOutput>(
  _ep0,
  _mw0,
  "BatchPutGatewayRateLimits",
  BatchPutGatewayRateLimits$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchPutGatewayRateLimitsRequest;
      output: BatchPutGatewayRateLimitsResponse;
    };
    sdk: {
      input: BatchPutGatewayRateLimitsCommandInput;
      output: BatchPutGatewayRateLimitsCommandOutput;
    };
  };
}
