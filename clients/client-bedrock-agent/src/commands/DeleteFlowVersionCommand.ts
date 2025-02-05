// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockAgentClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteFlowVersionRequest, DeleteFlowVersionResponse } from "../models/models_0";
import { de_DeleteFlowVersionCommand, se_DeleteFlowVersionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteFlowVersionCommand}.
 */
export interface DeleteFlowVersionCommandInput extends DeleteFlowVersionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteFlowVersionCommand}.
 */
export interface DeleteFlowVersionCommandOutput extends DeleteFlowVersionResponse, __MetadataBearer {}

/**
 * <p>Deletes a version of a flow.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentClient, DeleteFlowVersionCommand } from "@aws-sdk/client-bedrock-agent"; // ES Modules import
 * // const { BedrockAgentClient, DeleteFlowVersionCommand } = require("@aws-sdk/client-bedrock-agent"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new BedrockAgentClient(config);
 * const input = { // DeleteFlowVersionRequest
 *   flowIdentifier: "STRING_VALUE", // required
 *   flowVersion: "STRING_VALUE", // required
 *   skipResourceInUseCheck: true || false,
 * };
 * const command = new DeleteFlowVersionCommand(input);
 * const response = await client.send(command);
 * // { // DeleteFlowVersionResponse
 * //   id: "STRING_VALUE", // required
 * //   version: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DeleteFlowVersionCommandInput - {@link DeleteFlowVersionCommandInput}
 * @returns {@link DeleteFlowVersionCommandOutput}
 * @see {@link DeleteFlowVersionCommandInput} for command's `input` shape.
 * @see {@link DeleteFlowVersionCommandOutput} for command's `response` shape.
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
 * @public
 */
export class DeleteFlowVersionCommand extends $Command
  .classBuilder<
    DeleteFlowVersionCommandInput,
    DeleteFlowVersionCommandOutput,
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
  .s("AmazonBedrockAgentBuildTimeLambda", "DeleteFlowVersion", {})
  .n("BedrockAgentClient", "DeleteFlowVersionCommand")
  .f(void 0, void 0)
  .ser(se_DeleteFlowVersionCommand)
  .de(de_DeleteFlowVersionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteFlowVersionRequest;
      output: DeleteFlowVersionResponse;
    };
    sdk: {
      input: DeleteFlowVersionCommandInput;
      output: DeleteFlowVersionCommandOutput;
    };
  };
}
