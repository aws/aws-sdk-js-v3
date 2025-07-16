// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockAgentCoreClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockAgentCoreClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetCodeInterpreterSessionRequest, GetCodeInterpreterSessionResponse } from "../models/models_0";
import { de_GetCodeInterpreterSessionCommand, se_GetCodeInterpreterSessionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetCodeInterpreterSessionCommand}.
 */
export interface GetCodeInterpreterSessionCommandInput extends GetCodeInterpreterSessionRequest {}
/**
 * @public
 *
 * The output of {@link GetCodeInterpreterSessionCommand}.
 */
export interface GetCodeInterpreterSessionCommandOutput extends GetCodeInterpreterSessionResponse, __MetadataBearer {}

/**
 * <p>Retrieves detailed information about a specific code interpreter session in Amazon Bedrock. This operation returns the session's configuration, current status, and metadata.</p> <p>To get a code interpreter session, you must specify both the code interpreter identifier and the session ID. The response includes information about the session's timeout settings and current status.</p> <p>The following operations are related to <code>GetCodeInterpreterSession</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/API_StartCodeInterpreterSession.html">StartCodeInterpreterSession</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/API_ListCodeInterpreterSessions.html">ListCodeInterpreterSessions</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/API_StopCodeInterpreterSession.html">StopCodeInterpreterSession</a> </p> </li> </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreClient, GetCodeInterpreterSessionCommand } from "@aws-sdk/client-bedrock-agentcore"; // ES Modules import
 * // const { BedrockAgentCoreClient, GetCodeInterpreterSessionCommand } = require("@aws-sdk/client-bedrock-agentcore"); // CommonJS import
 * const client = new BedrockAgentCoreClient(config);
 * const input = { // GetCodeInterpreterSessionRequest
 *   codeInterpreterIdentifier: "STRING_VALUE", // required
 *   sessionId: "STRING_VALUE", // required
 * };
 * const command = new GetCodeInterpreterSessionCommand(input);
 * const response = await client.send(command);
 * // { // GetCodeInterpreterSessionResponse
 * //   codeInterpreterIdentifier: "STRING_VALUE", // required
 * //   sessionId: "STRING_VALUE", // required
 * //   name: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   sessionTimeoutSeconds: Number("int"),
 * //   status: "READY" || "TERMINATED",
 * // };
 *
 * ```
 *
 * @param GetCodeInterpreterSessionCommandInput - {@link GetCodeInterpreterSessionCommandInput}
 * @returns {@link GetCodeInterpreterSessionCommandOutput}
 * @see {@link GetCodeInterpreterSessionCommandInput} for command's `input` shape.
 * @see {@link GetCodeInterpreterSessionCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentCoreClientResolvedConfig | config} for BedrockAgentCoreClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The exception that occurs when you do not have sufficient permissions to perform an action. Verify that your IAM policy includes the necessary permissions for the operation you are trying to perform.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The exception that occurs when the service encounters an unexpected internal error. This is a temporary condition that will resolve itself with retries. We recommend implementing exponential backoff retry logic in your application.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The exception that occurs when the specified resource does not exist. This can happen when using an invalid identifier or when trying to access a resource that has been deleted.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The exception that occurs when the request was denied due to request throttling. This happens when you exceed the allowed request rate for an operation. Reduce the frequency of requests or implement exponential backoff retry logic in your application.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The exception that occurs when the input fails to satisfy the constraints specified by the service. Check the error message for details about which input parameter is invalid and correct your request.</p>
 *
 * @throws {@link BedrockAgentCoreServiceException}
 * <p>Base exception class for all service exceptions from BedrockAgentCore service.</p>
 *
 *
 * @public
 */
export class GetCodeInterpreterSessionCommand extends $Command
  .classBuilder<
    GetCodeInterpreterSessionCommandInput,
    GetCodeInterpreterSessionCommandOutput,
    BedrockAgentCoreClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonBedrockAgentCore", "GetCodeInterpreterSession", {})
  .n("BedrockAgentCoreClient", "GetCodeInterpreterSessionCommand")
  .f(void 0, void 0)
  .ser(se_GetCodeInterpreterSessionCommand)
  .de(de_GetCodeInterpreterSessionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCodeInterpreterSessionRequest;
      output: GetCodeInterpreterSessionResponse;
    };
    sdk: {
      input: GetCodeInterpreterSessionCommandInput;
      output: GetCodeInterpreterSessionCommandOutput;
    };
  };
}
