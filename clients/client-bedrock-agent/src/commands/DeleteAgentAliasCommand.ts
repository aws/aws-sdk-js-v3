// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockAgentClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteAgentAliasRequest, DeleteAgentAliasResponse } from "../models/models_0";
import { DeleteAgentAlias } from "../schemas/schemas_8_Agent";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteAgentAliasCommand}.
 */
export interface DeleteAgentAliasCommandInput extends DeleteAgentAliasRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAgentAliasCommand}.
 */
export interface DeleteAgentAliasCommandOutput extends DeleteAgentAliasResponse, __MetadataBearer {}

/**
 * <p>Deletes an alias of an agent.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentClient, DeleteAgentAliasCommand } from "@aws-sdk/client-bedrock-agent"; // ES Modules import
 * // const { BedrockAgentClient, DeleteAgentAliasCommand } = require("@aws-sdk/client-bedrock-agent"); // CommonJS import
 * // import type { BedrockAgentClientConfig } from "@aws-sdk/client-bedrock-agent";
 * const config = {}; // type is BedrockAgentClientConfig
 * const client = new BedrockAgentClient(config);
 * const input = { // DeleteAgentAliasRequest
 *   agentId: "STRING_VALUE", // required
 *   agentAliasId: "STRING_VALUE", // required
 * };
 * const command = new DeleteAgentAliasCommand(input);
 * const response = await client.send(command);
 * // { // DeleteAgentAliasResponse
 * //   agentId: "STRING_VALUE", // required
 * //   agentAliasId: "STRING_VALUE", // required
 * //   agentAliasStatus: "CREATING" || "PREPARED" || "FAILED" || "UPDATING" || "DELETING" || "DISSOCIATED", // required
 * // };
 *
 * ```
 *
 * @param DeleteAgentAliasCommandInput - {@link DeleteAgentAliasCommandInput}
 * @returns {@link DeleteAgentAliasCommandOutput}
 * @see {@link DeleteAgentAliasCommandInput} for command's `input` shape.
 * @see {@link DeleteAgentAliasCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentClientResolvedConfig | config} for BedrockAgentClient's `config` shape.
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
 * @throws {@link BedrockAgentServiceException}
 * <p>Base exception class for all service exceptions from BedrockAgent service.</p>
 *
 *
 * @public
 */
export class DeleteAgentAliasCommand extends $Command
  .classBuilder<
    DeleteAgentAliasCommandInput,
    DeleteAgentAliasCommandOutput,
    BedrockAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentBuildTimeLambda", "DeleteAgentAlias", {})
  .n("BedrockAgentClient", "DeleteAgentAliasCommand")
  .sc(DeleteAgentAlias)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAgentAliasRequest;
      output: DeleteAgentAliasResponse;
    };
    sdk: {
      input: DeleteAgentAliasCommandInput;
      output: DeleteAgentAliasCommandOutput;
    };
  };
}
