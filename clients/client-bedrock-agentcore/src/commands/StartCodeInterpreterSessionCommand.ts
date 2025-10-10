// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockAgentCoreClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockAgentCoreClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StartCodeInterpreterSessionRequest, StartCodeInterpreterSessionResponse } from "../models/models_0";
import {
  de_StartCodeInterpreterSessionCommand,
  se_StartCodeInterpreterSessionCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartCodeInterpreterSessionCommand}.
 */
export interface StartCodeInterpreterSessionCommandInput extends StartCodeInterpreterSessionRequest {}
/**
 * @public
 *
 * The output of {@link StartCodeInterpreterSessionCommand}.
 */
export interface StartCodeInterpreterSessionCommandOutput
  extends StartCodeInterpreterSessionResponse,
    __MetadataBearer {}

/**
 * <p>Creates and initializes a code interpreter session in Amazon Bedrock. The session enables agents to execute code as part of their response generation, supporting programming languages such as Python for data analysis, visualization, and computation tasks.</p> <p>To create a session, you must specify a code interpreter identifier and a name. The session remains active until it times out or you explicitly stop it using the <code>StopCodeInterpreterSession</code> operation.</p> <p>The following operations are related to <code>StartCodeInterpreterSession</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/API_InvokeCodeInterpreter.html">InvokeCodeInterpreter</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/API_GetCodeInterpreterSession.html">GetCodeInterpreterSession</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/API_StopCodeInterpreterSession.html">StopCodeInterpreterSession</a> </p> </li> </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreClient, StartCodeInterpreterSessionCommand } from "@aws-sdk/client-bedrock-agentcore"; // ES Modules import
 * // const { BedrockAgentCoreClient, StartCodeInterpreterSessionCommand } = require("@aws-sdk/client-bedrock-agentcore"); // CommonJS import
 * // import type { BedrockAgentCoreClientConfig } from "@aws-sdk/client-bedrock-agentcore";
 * const config = {}; // type is BedrockAgentCoreClientConfig
 * const client = new BedrockAgentCoreClient(config);
 * const input = { // StartCodeInterpreterSessionRequest
 *   traceId: "STRING_VALUE",
 *   traceParent: "STRING_VALUE",
 *   codeInterpreterIdentifier: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   sessionTimeoutSeconds: Number("int"),
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new StartCodeInterpreterSessionCommand(input);
 * const response = await client.send(command);
 * // { // StartCodeInterpreterSessionResponse
 * //   codeInterpreterIdentifier: "STRING_VALUE", // required
 * //   sessionId: "STRING_VALUE", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param StartCodeInterpreterSessionCommandInput - {@link StartCodeInterpreterSessionCommandInput}
 * @returns {@link StartCodeInterpreterSessionCommandOutput}
 * @see {@link StartCodeInterpreterSessionCommandInput} for command's `input` shape.
 * @see {@link StartCodeInterpreterSessionCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentCoreClientResolvedConfig | config} for BedrockAgentCoreClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The exception that occurs when you do not have sufficient permissions to perform an action. Verify that your IAM policy includes the necessary permissions for the operation you are trying to perform.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The exception that occurs when the request conflicts with the current state of the resource. This can happen when trying to modify a resource that is currently being modified by another request, or when trying to create a resource that already exists.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The exception that occurs when the service encounters an unexpected internal error. This is a temporary condition that will resolve itself with retries. We recommend implementing exponential backoff retry logic in your application.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The exception that occurs when the specified resource does not exist. This can happen when using an invalid identifier or when trying to access a resource that has been deleted.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The exception that occurs when the request would cause a service quota to be exceeded. Review your service quotas and either reduce your request rate or request a quota increase.</p>
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
export class StartCodeInterpreterSessionCommand extends $Command
  .classBuilder<
    StartCodeInterpreterSessionCommandInput,
    StartCodeInterpreterSessionCommandOutput,
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
  .s("AmazonBedrockAgentCore", "StartCodeInterpreterSession", {})
  .n("BedrockAgentCoreClient", "StartCodeInterpreterSessionCommand")
  .f(void 0, void 0)
  .ser(se_StartCodeInterpreterSessionCommand)
  .de(de_StartCodeInterpreterSessionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartCodeInterpreterSessionRequest;
      output: StartCodeInterpreterSessionResponse;
    };
    sdk: {
      input: StartCodeInterpreterSessionCommandInput;
      output: StartCodeInterpreterSessionCommandOutput;
    };
  };
}
