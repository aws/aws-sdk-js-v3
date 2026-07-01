// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetPolicyGenerationSummaryRequest, GetPolicyGenerationSummaryResponse } from "../models/models_1";
import { GetPolicyGenerationSummary$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetPolicyGenerationSummaryCommand}.
 */
export interface GetPolicyGenerationSummaryCommandInput extends GetPolicyGenerationSummaryRequest {}
/**
 * @public
 *
 * The output of {@link GetPolicyGenerationSummaryCommand}.
 */
export interface GetPolicyGenerationSummaryCommandOutput extends GetPolicyGenerationSummaryResponse, __MetadataBearer {}

/**
 * <p>Retrieves a metadata-only summary of a specific policy generation request without decrypting customer content. This lightweight read operation returns resource identifiers, status, timestamps, and findings, but does not include status reasons. Because this operation does not require access to the customer's KMS key, it is suitable for resource discovery, inventory, and integration scenarios where only metadata is needed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, GetPolicyGenerationSummaryCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, GetPolicyGenerationSummaryCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // GetPolicyGenerationSummaryRequest
 *   policyGenerationId: "STRING_VALUE", // required
 *   policyEngineId: "STRING_VALUE", // required
 * };
 * const command = new GetPolicyGenerationSummaryCommand(input);
 * const response = await client.send(command);
 * // { // GetPolicyGenerationSummaryResponse
 * //   policyEngineId: "STRING_VALUE", // required
 * //   policyGenerationId: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   policyGenerationArn: "STRING_VALUE", // required
 * //   resource: { // Resource Union: only one key present
 * //     arn: "STRING_VALUE",
 * //   },
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * //   status: "GENERATING" || "GENERATED" || "GENERATE_FAILED" || "DELETE_FAILED", // required
 * //   findings: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetPolicyGenerationSummaryCommandInput - {@link GetPolicyGenerationSummaryCommandInput}
 * @returns {@link GetPolicyGenerationSummaryCommandOutput}
 * @see {@link GetPolicyGenerationSummaryCommandInput} for command's `input` shape.
 * @see {@link GetPolicyGenerationSummaryCommandOutput} for command's `response` shape.
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
export class GetPolicyGenerationSummaryCommand extends command<GetPolicyGenerationSummaryCommandInput, GetPolicyGenerationSummaryCommandOutput>(
  _ep0,
  _mw0,
  "GetPolicyGenerationSummary",
  GetPolicyGenerationSummary$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetPolicyGenerationSummaryRequest;
      output: GetPolicyGenerationSummaryResponse;
    };
    sdk: {
      input: GetPolicyGenerationSummaryCommandInput;
      output: GetPolicyGenerationSummaryCommandOutput;
    };
  };
}
