// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetAgentInsightStoreRequest, GetAgentInsightStoreResponse } from "../models/models_0";
import { GetAgentInsightStore$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetAgentInsightStoreCommand}.
 */
export interface GetAgentInsightStoreCommandInput extends GetAgentInsightStoreRequest {}
/**
 * @public
 *
 * The output of {@link GetAgentInsightStoreCommand}.
 */
export interface GetAgentInsightStoreCommandOutput extends GetAgentInsightStoreResponse, __MetadataBearer {}

/**
 * Returns the account's service-defined default Agent Insight Store. The
 * logical default exists for every enrolled account; its backing state may be
 * initialized on first access.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, GetAgentInsightStoreCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, GetAgentInsightStoreCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // GetAgentInsightStoreRequest
 *   agentInsightStoreId: "STRING_VALUE", // required
 * };
 * const command = new GetAgentInsightStoreCommand(input);
 * const response = await client.send(command);
 * // { // GetAgentInsightStoreResponse
 * //   agentInsightStoreArn: "STRING_VALUE", // required
 * //   agentInsightStoreId: "STRING_VALUE", // required
 * //   status: "ACTIVE" || "UPDATING" || "INACTIVE" || "ERROR", // required
 * //   enablementStatus: "ENABLED" || "DISABLED", // required
 * //   encryptionConfiguration: { // AgentInsightStoreEncryptionConfiguration
 * //     mode: "AWS_OWNED_KMS_KEY" || "CUSTOMER_MANAGED_KMS", // required
 * //     kmsKeyArn: "STRING_VALUE",
 * //   },
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * //   failureReason: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetAgentInsightStoreCommandInput - {@link GetAgentInsightStoreCommandInput}
 * @returns {@link GetAgentInsightStoreCommandOutput}
 * @see {@link GetAgentInsightStoreCommandInput} for command's `input` shape.
 * @see {@link GetAgentInsightStoreCommandOutput} for command's `response` shape.
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
export class GetAgentInsightStoreCommand extends command<GetAgentInsightStoreCommandInput, GetAgentInsightStoreCommandOutput>(
  _ep0,
  _mw0,
  "GetAgentInsightStore",
  GetAgentInsightStore$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAgentInsightStoreRequest;
      output: GetAgentInsightStoreResponse;
    };
    sdk: {
      input: GetAgentInsightStoreCommandInput;
      output: GetAgentInsightStoreCommandOutput;
    };
  };
}
