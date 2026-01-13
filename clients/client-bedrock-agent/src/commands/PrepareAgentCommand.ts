// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { BedrockAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockAgentClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { PrepareAgentRequest, PrepareAgentResponse } from "../models/models_0";
import { PrepareAgent$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PrepareAgentCommand}.
 */
export interface PrepareAgentCommandInput extends PrepareAgentRequest {}
/**
 * @public
 *
 * The output of {@link PrepareAgentCommand}.
 */
export interface PrepareAgentCommandOutput extends PrepareAgentResponse, __MetadataBearer {}

/**
 * <p>Creates a <code>DRAFT</code> version of the agent that can be used for internal testing.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentClient, PrepareAgentCommand } from "@aws-sdk/client-bedrock-agent"; // ES Modules import
 * // const { BedrockAgentClient, PrepareAgentCommand } = require("@aws-sdk/client-bedrock-agent"); // CommonJS import
 * // import type { BedrockAgentClientConfig } from "@aws-sdk/client-bedrock-agent";
 * const config = {}; // type is BedrockAgentClientConfig
 * const client = new BedrockAgentClient(config);
 * const input = { // PrepareAgentRequest
 *   agentId: "STRING_VALUE", // required
 * };
 * const command = new PrepareAgentCommand(input);
 * const response = await client.send(command);
 * // { // PrepareAgentResponse
 * //   agentId: "STRING_VALUE", // required
 * //   agentStatus: "CREATING" || "PREPARING" || "PREPARED" || "NOT_PREPARED" || "DELETING" || "FAILED" || "VERSIONING" || "UPDATING", // required
 * //   agentVersion: "STRING_VALUE", // required
 * //   preparedAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param PrepareAgentCommandInput - {@link PrepareAgentCommandInput}
 * @returns {@link PrepareAgentCommandOutput}
 * @see {@link PrepareAgentCommandInput} for command's `input` shape.
 * @see {@link PrepareAgentCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The number of requests exceeds the service quota. Resubmit your request later.</p>
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
export class PrepareAgentCommand extends $Command
  .classBuilder<
    PrepareAgentCommandInput,
    PrepareAgentCommandOutput,
    BedrockAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentBuildTimeLambda", "PrepareAgent", {})
  .n("BedrockAgentClient", "PrepareAgentCommand")
  .sc(PrepareAgent$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PrepareAgentRequest;
      output: PrepareAgentResponse;
    };
    sdk: {
      input: PrepareAgentCommandInput;
      output: PrepareAgentCommandOutput;
    };
  };
}
