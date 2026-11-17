// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateAgentInsightStoreRequest, UpdateAgentInsightStoreResponse } from "../models/models_0";
import { UpdateAgentInsightStore$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateAgentInsightStoreCommand}.
 */
export interface UpdateAgentInsightStoreCommandInput extends UpdateAgentInsightStoreRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAgentInsightStoreCommand}.
 */
export interface UpdateAgentInsightStoreCommandOutput extends UpdateAgentInsightStoreResponse, __MetadataBearer {}

/**
 * <p>Updates the enablement status or encryption configuration of an Agent Insight Store.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, UpdateAgentInsightStoreCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, UpdateAgentInsightStoreCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // UpdateAgentInsightStoreRequest
 *   clientToken: "STRING_VALUE",
 *   agentInsightStoreId: "STRING_VALUE", // required
 *   enablementStatus: "ENABLED" || "DISABLED",
 *   encryptionConfiguration: { // AgentInsightStoreEncryptionConfiguration
 *     mode: "AWS_OWNED_KMS_KEY" || "CUSTOMER_MANAGED_KMS", // required
 *     kmsKeyArn: "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateAgentInsightStoreCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAgentInsightStoreResponse
 * //   agentInsightStoreArn: "STRING_VALUE", // required
 * //   agentInsightStoreId: "STRING_VALUE", // required
 * //   status: "ACTIVE" || "UPDATING" || "INACTIVE" || "ERROR", // required
 * //   enablementStatus: "ENABLED" || "DISABLED", // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * //   failureReason: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateAgentInsightStoreCommandInput - {@link UpdateAgentInsightStoreCommandInput}
 * @returns {@link UpdateAgentInsightStoreCommandOutput}
 * @see {@link UpdateAgentInsightStoreCommandInput} for command's `input` shape.
 * @see {@link UpdateAgentInsightStoreCommandOutput} for command's `response` shape.
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
export class UpdateAgentInsightStoreCommand extends command<UpdateAgentInsightStoreCommandInput, UpdateAgentInsightStoreCommandOutput>(
  _ep0,
  _mw0,
  "UpdateAgentInsightStore",
  UpdateAgentInsightStore$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAgentInsightStoreRequest;
      output: UpdateAgentInsightStoreResponse;
    };
    sdk: {
      input: UpdateAgentInsightStoreCommandInput;
      output: UpdateAgentInsightStoreCommandOutput;
    };
  };
}
