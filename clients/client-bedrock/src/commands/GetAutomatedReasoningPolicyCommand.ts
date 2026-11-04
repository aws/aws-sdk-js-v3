// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetAutomatedReasoningPolicyRequest, GetAutomatedReasoningPolicyResponse } from "../models/models_0";
import { GetAutomatedReasoningPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetAutomatedReasoningPolicyCommand}.
 */
export interface GetAutomatedReasoningPolicyCommandInput extends GetAutomatedReasoningPolicyRequest {}
/**
 * @public
 *
 * The output of {@link GetAutomatedReasoningPolicyCommand}.
 */
export interface GetAutomatedReasoningPolicyCommandOutput extends GetAutomatedReasoningPolicyResponse, __MetadataBearer {}

/**
 * Retrieves details about an Automated Reasoning policy or policy version. Returns information including the policy definition, metadata, and timestamps.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, GetAutomatedReasoningPolicyCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, GetAutomatedReasoningPolicyCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * // import type { BedrockClientConfig } from "@aws-sdk/client-bedrock";
 * const config = {}; // type is BedrockClientConfig
 * const client = new BedrockClient(config);
 * const input = { // GetAutomatedReasoningPolicyRequest
 *   policyArn: "STRING_VALUE", // required
 * };
 * const command = new GetAutomatedReasoningPolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetAutomatedReasoningPolicyResponse
 * //   policyArn: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   version: "STRING_VALUE", // required
 * //   policyId: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   definitionHash: "STRING_VALUE", // required
 * //   kmsKeyArn: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"),
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param GetAutomatedReasoningPolicyCommandInput - {@link GetAutomatedReasoningPolicyCommandInput}
 * @returns {@link GetAutomatedReasoningPolicyCommandOutput}
 * @see {@link GetAutomatedReasoningPolicyCommandInput} for command's `input` shape.
 * @see {@link GetAutomatedReasoningPolicyCommandOutput} for command's `response` shape.
 * @see {@link BedrockClientResolvedConfig | config} for BedrockClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The request is denied because of missing access permissions.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal server error occurred. Retry your request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource Amazon Resource Name (ARN) was not found. Check the Amazon Resource Name (ARN) and try your request again.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The number of requests exceeds the limit. Resubmit your request later.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Input validation failed. Check your request parameters and retry the request.
 *
 * @throws {@link BedrockServiceException}
 *
 * Base exception class for all service exceptions from Bedrock service.
 *
 * @public
 */
export class GetAutomatedReasoningPolicyCommand extends command<GetAutomatedReasoningPolicyCommandInput, GetAutomatedReasoningPolicyCommandOutput>(
  _ep0,
  _mw0,
  "GetAutomatedReasoningPolicy",
  GetAutomatedReasoningPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAutomatedReasoningPolicyRequest;
      output: GetAutomatedReasoningPolicyResponse;
    };
    sdk: {
      input: GetAutomatedReasoningPolicyCommandInput;
      output: GetAutomatedReasoningPolicyCommandOutput;
    };
  };
}
