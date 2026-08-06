// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteGatewayRateLimitRequest, DeleteGatewayRateLimitResponse } from "../models/models_0";
import { DeleteGatewayRateLimit$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteGatewayRateLimitCommand}.
 */
export interface DeleteGatewayRateLimitCommandInput extends DeleteGatewayRateLimitRequest {}
/**
 * @public
 *
 * The output of {@link DeleteGatewayRateLimitCommand}.
 */
export interface DeleteGatewayRateLimitCommandOutput extends DeleteGatewayRateLimitResponse, __MetadataBearer {}

/**
 * <p>Deletes a gateway rate limit.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, DeleteGatewayRateLimitCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, DeleteGatewayRateLimitCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // DeleteGatewayRateLimitRequest
 *   gatewayIdentifier: "STRING_VALUE", // required
 *   rateLimitId: "STRING_VALUE", // required
 * };
 * const command = new DeleteGatewayRateLimitCommand(input);
 * const response = await client.send(command);
 * // { // DeleteGatewayRateLimitResponse
 * //   rateLimitId: "STRING_VALUE", // required
 * //   status: "CREATING" || "ACTIVE" || "UPDATING" || "DELETING", // required
 * // };
 *
 * ```
 *
 * @param DeleteGatewayRateLimitCommandInput - {@link DeleteGatewayRateLimitCommandInput}
 * @returns {@link DeleteGatewayRateLimitCommandOutput}
 * @see {@link DeleteGatewayRateLimitCommandInput} for command's `input` shape.
 * @see {@link DeleteGatewayRateLimitCommandOutput} for command's `response` shape.
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
export class DeleteGatewayRateLimitCommand extends command<DeleteGatewayRateLimitCommandInput, DeleteGatewayRateLimitCommandOutput>(
  _ep0,
  _mw0,
  "DeleteGatewayRateLimit",
  DeleteGatewayRateLimit$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteGatewayRateLimitRequest;
      output: DeleteGatewayRateLimitResponse;
    };
    sdk: {
      input: DeleteGatewayRateLimitCommandInput;
      output: DeleteGatewayRateLimitCommandOutput;
    };
  };
}
