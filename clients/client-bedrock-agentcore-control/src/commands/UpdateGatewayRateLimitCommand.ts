// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateGatewayRateLimitRequest, UpdateGatewayRateLimitResponse } from "../models/models_0";
import { UpdateGatewayRateLimit$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateGatewayRateLimitCommand}.
 */
export interface UpdateGatewayRateLimitCommandInput extends UpdateGatewayRateLimitRequest {}
/**
 * @public
 *
 * The output of {@link UpdateGatewayRateLimitCommand}.
 */
export interface UpdateGatewayRateLimitCommandOutput extends UpdateGatewayRateLimitResponse, __MetadataBearer {}

/**
 * <p>Updates the entries of a gateway rate limit. The dimension keys are immutable after creation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, UpdateGatewayRateLimitCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, UpdateGatewayRateLimitCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // UpdateGatewayRateLimitRequest
 *   gatewayIdentifier: "STRING_VALUE", // required
 *   rateLimitId: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   entries: [ // LimitEntries // required
 *     { // LimitEntry
 *       dimensions: { // Dimensions // required
 *         "<keys>": "STRING_VALUE",
 *       },
 *       requests: [ // RateConfigs
 *         { // RateConfig
 *           rate: Number("double"), // required
 *           period: "second" || "minute", // required
 *         },
 *       ],
 *       tokens: [
 *         {
 *           rate: Number("double"), // required
 *           period: "second" || "minute", // required
 *         },
 *       ],
 *       connections: [
 *         {
 *           rate: Number("double"), // required
 *           period: "second" || "minute", // required
 *         },
 *       ],
 *     },
 *   ],
 * };
 * const command = new UpdateGatewayRateLimitCommand(input);
 * const response = await client.send(command);
 * // { // UpdateGatewayRateLimitResponse
 * //   rateLimitId: "STRING_VALUE", // required
 * //   gatewayIdentifier: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   dimensionKeys: [ // DimensionKeys // required
 * //     "STRING_VALUE",
 * //   ],
 * //   entries: [ // LimitEntries // required
 * //     { // LimitEntry
 * //       dimensions: { // Dimensions // required
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       requests: [ // RateConfigs
 * //         { // RateConfig
 * //           rate: Number("double"), // required
 * //           period: "second" || "minute", // required
 * //         },
 * //       ],
 * //       tokens: [
 * //         {
 * //           rate: Number("double"), // required
 * //           period: "second" || "minute", // required
 * //         },
 * //       ],
 * //       connections: [
 * //         {
 * //           rate: Number("double"), // required
 * //           period: "second" || "minute", // required
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   status: "CREATING" || "ACTIVE" || "UPDATING" || "DELETING", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param UpdateGatewayRateLimitCommandInput - {@link UpdateGatewayRateLimitCommandInput}
 * @returns {@link UpdateGatewayRateLimitCommandOutput}
 * @see {@link UpdateGatewayRateLimitCommandInput} for command's `input` shape.
 * @see {@link UpdateGatewayRateLimitCommandOutput} for command's `response` shape.
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
export class UpdateGatewayRateLimitCommand extends command<UpdateGatewayRateLimitCommandInput, UpdateGatewayRateLimitCommandOutput>(
  _ep0,
  _mw0,
  "UpdateGatewayRateLimit",
  UpdateGatewayRateLimit$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateGatewayRateLimitRequest;
      output: UpdateGatewayRateLimitResponse;
    };
    sdk: {
      input: UpdateGatewayRateLimitCommandInput;
      output: UpdateGatewayRateLimitCommandOutput;
    };
  };
}
