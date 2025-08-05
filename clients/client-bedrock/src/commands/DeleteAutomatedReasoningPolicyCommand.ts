// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteAutomatedReasoningPolicyRequest, DeleteAutomatedReasoningPolicyResponse } from "../models/models_0";
import {
  de_DeleteAutomatedReasoningPolicyCommand,
  se_DeleteAutomatedReasoningPolicyCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteAutomatedReasoningPolicyCommand}.
 */
export interface DeleteAutomatedReasoningPolicyCommandInput extends DeleteAutomatedReasoningPolicyRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAutomatedReasoningPolicyCommand}.
 */
export interface DeleteAutomatedReasoningPolicyCommandOutput
  extends DeleteAutomatedReasoningPolicyResponse,
    __MetadataBearer {}

/**
 * <p>Deletes an Automated Reasoning policy or policy version. This operation is idempotent. If you delete a policy more than once, each call succeeds. Deleting a policy removes it permanently and cannot be undone.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, DeleteAutomatedReasoningPolicyCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, DeleteAutomatedReasoningPolicyCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * const client = new BedrockClient(config);
 * const input = { // DeleteAutomatedReasoningPolicyRequest
 *   policyArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteAutomatedReasoningPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAutomatedReasoningPolicyCommandInput - {@link DeleteAutomatedReasoningPolicyCommandInput}
 * @returns {@link DeleteAutomatedReasoningPolicyCommandOutput}
 * @see {@link DeleteAutomatedReasoningPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteAutomatedReasoningPolicyCommandOutput} for command's `response` shape.
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
export class DeleteAutomatedReasoningPolicyCommand extends $Command
  .classBuilder<
    DeleteAutomatedReasoningPolicyCommandInput,
    DeleteAutomatedReasoningPolicyCommandOutput,
    BedrockClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonBedrockControlPlaneService", "DeleteAutomatedReasoningPolicy", {})
  .n("BedrockClient", "DeleteAutomatedReasoningPolicyCommand")
  .f(void 0, void 0)
  .ser(se_DeleteAutomatedReasoningPolicyCommand)
  .de(de_DeleteAutomatedReasoningPolicyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAutomatedReasoningPolicyRequest;
      output: {};
    };
    sdk: {
      input: DeleteAutomatedReasoningPolicyCommandInput;
      output: DeleteAutomatedReasoningPolicyCommandOutput;
    };
  };
}
