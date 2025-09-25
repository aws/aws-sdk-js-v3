// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockAgentClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteFlowAliasRequest, DeleteFlowAliasResponse } from "../models/models_0";
import { DeleteFlowAlias } from "../schemas/schemas_4_Flow";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteFlowAliasCommand}.
 */
export interface DeleteFlowAliasCommandInput extends DeleteFlowAliasRequest {}
/**
 * @public
 *
 * The output of {@link DeleteFlowAliasCommand}.
 */
export interface DeleteFlowAliasCommandOutput extends DeleteFlowAliasResponse, __MetadataBearer {}

/**
 * <p>Deletes an alias of a flow.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentClient, DeleteFlowAliasCommand } from "@aws-sdk/client-bedrock-agent"; // ES Modules import
 * // const { BedrockAgentClient, DeleteFlowAliasCommand } = require("@aws-sdk/client-bedrock-agent"); // CommonJS import
 * // import type { BedrockAgentClientConfig } from "@aws-sdk/client-bedrock-agent";
 * const config = {}; // type is BedrockAgentClientConfig
 * const client = new BedrockAgentClient(config);
 * const input = { // DeleteFlowAliasRequest
 *   flowIdentifier: "STRING_VALUE", // required
 *   aliasIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteFlowAliasCommand(input);
 * const response = await client.send(command);
 * // { // DeleteFlowAliasResponse
 * //   flowId: "STRING_VALUE", // required
 * //   id: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DeleteFlowAliasCommandInput - {@link DeleteFlowAliasCommandInput}
 * @returns {@link DeleteFlowAliasCommandOutput}
 * @see {@link DeleteFlowAliasCommandInput} for command's `input` shape.
 * @see {@link DeleteFlowAliasCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentClientResolvedConfig | config} for BedrockAgentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request is denied because of missing access permissions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict performing an operation.</p>
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
export class DeleteFlowAliasCommand extends $Command
  .classBuilder<
    DeleteFlowAliasCommandInput,
    DeleteFlowAliasCommandOutput,
    BedrockAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentBuildTimeLambda", "DeleteFlowAlias", {})
  .n("BedrockAgentClient", "DeleteFlowAliasCommand")
  .sc(DeleteFlowAlias)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteFlowAliasRequest;
      output: DeleteFlowAliasResponse;
    };
    sdk: {
      input: DeleteFlowAliasCommandInput;
      output: DeleteFlowAliasCommandOutput;
    };
  };
}
