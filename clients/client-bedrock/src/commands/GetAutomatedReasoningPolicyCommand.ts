// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetAutomatedReasoningPolicyRequest, GetAutomatedReasoningPolicyResponse } from "../models/models_0";
import { GetAutomatedReasoningPolicy } from "../schemas/schemas_32_Policy";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface GetAutomatedReasoningPolicyCommandOutput
  extends GetAutomatedReasoningPolicyResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves details about an Automated Reasoning policy or policy version. Returns information including the policy definition, metadata, and timestamps.</p>
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
 *  <p>The request is denied because of missing access permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource Amazon Resource Name (ARN) was not found. Check the Amazon Resource Name (ARN) and try your request again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The number of requests exceeds the limit. Resubmit your request later.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Input validation failed. Check your request parameters and retry the request.</p>
 *
 * @throws {@link BedrockServiceException}
 * <p>Base exception class for all service exceptions from Bedrock service.</p>
 *
 *
 * @public
 */
export class GetAutomatedReasoningPolicyCommand extends $Command
  .classBuilder<
    GetAutomatedReasoningPolicyCommandInput,
    GetAutomatedReasoningPolicyCommandOutput,
    BedrockClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockControlPlaneService", "GetAutomatedReasoningPolicy", {})
  .n("BedrockClient", "GetAutomatedReasoningPolicyCommand")
  .sc(GetAutomatedReasoningPolicy)
  .build() {
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
