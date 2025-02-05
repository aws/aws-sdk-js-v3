// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockAgentClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { PrepareFlowRequest, PrepareFlowResponse } from "../models/models_0";
import { de_PrepareFlowCommand, se_PrepareFlowCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PrepareFlowCommand}.
 */
export interface PrepareFlowCommandInput extends PrepareFlowRequest {}
/**
 * @public
 *
 * The output of {@link PrepareFlowCommand}.
 */
export interface PrepareFlowCommandOutput extends PrepareFlowResponse, __MetadataBearer {}

/**
 * <p>Prepares the <code>DRAFT</code> version of a flow so that it can be invoked. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/flows-test.html">Test a flow in Amazon Bedrock</a> in the Amazon Bedrock User Guide.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentClient, PrepareFlowCommand } from "@aws-sdk/client-bedrock-agent"; // ES Modules import
 * // const { BedrockAgentClient, PrepareFlowCommand } = require("@aws-sdk/client-bedrock-agent"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new BedrockAgentClient(config);
 * const input = { // PrepareFlowRequest
 *   flowIdentifier: "STRING_VALUE", // required
 * };
 * const command = new PrepareFlowCommand(input);
 * const response = await client.send(command);
 * // { // PrepareFlowResponse
 * //   id: "STRING_VALUE", // required
 * //   status: "Failed" || "Prepared" || "Preparing" || "NotPrepared", // required
 * // };
 *
 * ```
 *
 * @param PrepareFlowCommandInput - {@link PrepareFlowCommandInput}
 * @returns {@link PrepareFlowCommandOutput}
 * @see {@link PrepareFlowCommandInput} for command's `input` shape.
 * @see {@link PrepareFlowCommandOutput} for command's `response` shape.
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
 * @public
 */
export class PrepareFlowCommand extends $Command
  .classBuilder<
    PrepareFlowCommandInput,
    PrepareFlowCommandOutput,
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
  .s("AmazonBedrockAgentBuildTimeLambda", "PrepareFlow", {})
  .n("BedrockAgentClient", "PrepareFlowCommand")
  .f(void 0, void 0)
  .ser(se_PrepareFlowCommand)
  .de(de_PrepareFlowCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PrepareFlowRequest;
      output: PrepareFlowResponse;
    };
    sdk: {
      input: PrepareFlowCommandInput;
      output: PrepareFlowCommandOutput;
    };
  };
}
