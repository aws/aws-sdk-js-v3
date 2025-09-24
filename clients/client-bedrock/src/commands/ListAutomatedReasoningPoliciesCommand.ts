// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListAutomatedReasoningPoliciesRequest, ListAutomatedReasoningPoliciesResponse } from "../models/models_0";
import { ListAutomatedReasoningPolicies } from "../schemas/schemas_35_Automated";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAutomatedReasoningPoliciesCommand}.
 */
export interface ListAutomatedReasoningPoliciesCommandInput extends ListAutomatedReasoningPoliciesRequest {}
/**
 * @public
 *
 * The output of {@link ListAutomatedReasoningPoliciesCommand}.
 */
export interface ListAutomatedReasoningPoliciesCommandOutput
  extends ListAutomatedReasoningPoliciesResponse,
    __MetadataBearer {}

/**
 * <p>Lists all Automated Reasoning policies in your account, with optional filtering by policy ARN. This helps you manage and discover existing policies.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, ListAutomatedReasoningPoliciesCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, ListAutomatedReasoningPoliciesCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * // import type { BedrockClientConfig } from "@aws-sdk/client-bedrock";
 * const config = {}; // type is BedrockClientConfig
 * const client = new BedrockClient(config);
 * const input = { // ListAutomatedReasoningPoliciesRequest
 *   policyArn: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListAutomatedReasoningPoliciesCommand(input);
 * const response = await client.send(command);
 * // { // ListAutomatedReasoningPoliciesResponse
 * //   automatedReasoningPolicySummaries: [ // AutomatedReasoningPolicySummaries // required
 * //     { // AutomatedReasoningPolicySummary
 * //       policyArn: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       version: "STRING_VALUE", // required
 * //       policyId: "STRING_VALUE", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAutomatedReasoningPoliciesCommandInput - {@link ListAutomatedReasoningPoliciesCommandInput}
 * @returns {@link ListAutomatedReasoningPoliciesCommandOutput}
 * @see {@link ListAutomatedReasoningPoliciesCommandInput} for command's `input` shape.
 * @see {@link ListAutomatedReasoningPoliciesCommandOutput} for command's `response` shape.
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
export class ListAutomatedReasoningPoliciesCommand extends $Command
  .classBuilder<
    ListAutomatedReasoningPoliciesCommandInput,
    ListAutomatedReasoningPoliciesCommandOutput,
    BedrockClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockControlPlaneService", "ListAutomatedReasoningPolicies", {})
  .n("BedrockClient", "ListAutomatedReasoningPoliciesCommand")
  .sc(ListAutomatedReasoningPolicies)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAutomatedReasoningPoliciesRequest;
      output: ListAutomatedReasoningPoliciesResponse;
    };
    sdk: {
      input: ListAutomatedReasoningPoliciesCommandInput;
      output: ListAutomatedReasoningPoliciesCommandOutput;
    };
  };
}
