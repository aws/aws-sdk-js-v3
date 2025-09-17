// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockAgentClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteAgentVersionRequest, DeleteAgentVersionResponse } from "../models/models_1";
import { de_DeleteAgentVersionCommand, se_DeleteAgentVersionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteAgentVersionCommand}.
 */
export interface DeleteAgentVersionCommandInput extends DeleteAgentVersionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAgentVersionCommand}.
 */
export interface DeleteAgentVersionCommandOutput extends DeleteAgentVersionResponse, __MetadataBearer {}

/**
 * <p>Deletes a version of an agent.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentClient, DeleteAgentVersionCommand } from "@aws-sdk/client-bedrock-agent"; // ES Modules import
 * // const { BedrockAgentClient, DeleteAgentVersionCommand } = require("@aws-sdk/client-bedrock-agent"); // CommonJS import
 * // import type { BedrockAgentClientConfig } from "@aws-sdk/client-bedrock-agent";
 * const config = {}; // type is BedrockAgentClientConfig
 * const client = new BedrockAgentClient(config);
 * const input = { // DeleteAgentVersionRequest
 *   agentId: "STRING_VALUE", // required
 *   agentVersion: "STRING_VALUE", // required
 *   skipResourceInUseCheck: true || false,
 * };
 * const command = new DeleteAgentVersionCommand(input);
 * const response = await client.send(command);
 * // { // DeleteAgentVersionResponse
 * //   agentId: "STRING_VALUE", // required
 * //   agentVersion: "STRING_VALUE", // required
 * //   agentStatus: "CREATING" || "PREPARING" || "PREPARED" || "NOT_PREPARED" || "DELETING" || "FAILED" || "VERSIONING" || "UPDATING", // required
 * // };
 *
 * ```
 *
 * @param DeleteAgentVersionCommandInput - {@link DeleteAgentVersionCommandInput}
 * @returns {@link DeleteAgentVersionCommandOutput}
 * @see {@link DeleteAgentVersionCommandInput} for command's `input` shape.
 * @see {@link DeleteAgentVersionCommandOutput} for command's `response` shape.
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
export class DeleteAgentVersionCommand extends $Command
  .classBuilder<
    DeleteAgentVersionCommandInput,
    DeleteAgentVersionCommandOutput,
    BedrockAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonBedrockAgentBuildTimeLambda", "DeleteAgentVersion", {})
  .n("BedrockAgentClient", "DeleteAgentVersionCommand")
  .f(void 0, void 0)
  .ser(se_DeleteAgentVersionCommand)
  .de(de_DeleteAgentVersionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAgentVersionRequest;
      output: DeleteAgentVersionResponse;
    };
    sdk: {
      input: DeleteAgentVersionCommandInput;
      output: DeleteAgentVersionCommandOutput;
    };
  };
}
