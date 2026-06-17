// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  BedrockAgentCoreControlClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../BedrockAgentCoreControlClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetPolicySummaryRequest, GetPolicySummaryResponse } from "../models/models_1";
import { GetPolicySummary$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetPolicySummaryCommand}.
 */
export interface GetPolicySummaryCommandInput extends GetPolicySummaryRequest {}
/**
 * @public
 *
 * The output of {@link GetPolicySummaryCommand}.
 */
export interface GetPolicySummaryCommandOutput extends GetPolicySummaryResponse, __MetadataBearer {}

/**
 * <p>Retrieves a metadata-only summary of a specific policy without decrypting customer content. This lightweight read operation returns resource identifiers, status, and timestamps, but does not include the policy definition, description, or status reasons. Because this operation does not require access to the customer's KMS key, it is suitable for resource discovery, inventory, and integration scenarios where only metadata is needed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, GetPolicySummaryCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, GetPolicySummaryCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // GetPolicySummaryRequest
 *   policyEngineId: "STRING_VALUE", // required
 *   policyId: "STRING_VALUE", // required
 * };
 * const command = new GetPolicySummaryCommand(input);
 * const response = await client.send(command);
 * // { // GetPolicySummaryResponse
 * //   policyId: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   policyEngineId: "STRING_VALUE", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * //   policyArn: "STRING_VALUE", // required
 * //   status: "CREATING" || "ACTIVE" || "UPDATING" || "DELETING" || "CREATE_FAILED" || "UPDATE_FAILED" || "DELETE_FAILED", // required
 * //   enforcementMode: "ACTIVE" || "LOG_ONLY",
 * // };
 *
 * ```
 *
 * @param GetPolicySummaryCommandInput - {@link GetPolicySummaryCommandInput}
 * @returns {@link GetPolicySummaryCommandOutput}
 * @see {@link GetPolicySummaryCommandInput} for command's `input` shape.
 * @see {@link GetPolicySummaryCommandOutput} for command's `response` shape.
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
export class GetPolicySummaryCommand extends $Command
  .classBuilder<
    GetPolicySummaryCommandInput,
    GetPolicySummaryCommandOutput,
    BedrockAgentCoreControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreControlClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCoreControl", "GetPolicySummary", {})
  .n("BedrockAgentCoreControlClient", "GetPolicySummaryCommand")
  .sc(GetPolicySummary$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetPolicySummaryRequest;
      output: GetPolicySummaryResponse;
    };
    sdk: {
      input: GetPolicySummaryCommandInput;
      output: GetPolicySummaryCommandOutput;
    };
  };
}
