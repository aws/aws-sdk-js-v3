// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteGatewayRuleRequest, DeleteGatewayRuleResponse } from "../models/models_0";
import { DeleteGatewayRule$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteGatewayRuleCommand}.
 */
export interface DeleteGatewayRuleCommandInput extends DeleteGatewayRuleRequest {}
/**
 * @public
 *
 * The output of {@link DeleteGatewayRuleCommand}.
 */
export interface DeleteGatewayRuleCommandOutput extends DeleteGatewayRuleResponse, __MetadataBearer {}

/**
 * Deletes a gateway rule.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, DeleteGatewayRuleCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, DeleteGatewayRuleCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // DeleteGatewayRuleRequest
 *   gatewayIdentifier: "STRING_VALUE", // required
 *   ruleId: "STRING_VALUE", // required
 * };
 * const command = new DeleteGatewayRuleCommand(input);
 * const response = await client.send(command);
 * // { // DeleteGatewayRuleResponse
 * //   ruleId: "STRING_VALUE", // required
 * //   status: "CREATING" || "ACTIVE" || "UPDATING" || "DELETING", // required
 * // };
 *
 * ```
 *
 * @param DeleteGatewayRuleCommandInput - {@link DeleteGatewayRuleCommandInput}
 * @returns {@link DeleteGatewayRuleCommandOutput}
 * @see {@link DeleteGatewayRuleCommandInput} for command's `input` shape.
 * @see {@link DeleteGatewayRuleCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentCoreControlClientResolvedConfig | config} for BedrockAgentCoreControlClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * This exception is thrown when a request is denied per access permissions
 *
 * @throws {@link ConflictException} (client fault)
 *
 * This exception is thrown when there is a conflict performing an operation
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * This exception is thrown if there was an unexpected error during processing of request
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * This exception is thrown when a resource referenced by the operation does not exist
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * This exception is thrown when the number of requests exceeds the limit
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by the service.
 *
 * @throws {@link BedrockAgentCoreControlServiceException}
 *
 * Base exception class for all service exceptions from BedrockAgentCoreControl service.
 *
 * @public
 */
export class DeleteGatewayRuleCommand extends command<DeleteGatewayRuleCommandInput, DeleteGatewayRuleCommandOutput>(
  _ep0,
  _mw0,
  "DeleteGatewayRule",
  DeleteGatewayRule$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteGatewayRuleRequest;
      output: DeleteGatewayRuleResponse;
    };
    sdk: {
      input: DeleteGatewayRuleCommandInput;
      output: DeleteGatewayRuleCommandOutput;
    };
  };
}
