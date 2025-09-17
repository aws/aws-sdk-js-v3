// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockAgentCoreClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockAgentCoreClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StopBrowserSessionRequest, StopBrowserSessionResponse } from "../models/models_0";
import { de_StopBrowserSessionCommand, se_StopBrowserSessionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopBrowserSessionCommand}.
 */
export interface StopBrowserSessionCommandInput extends StopBrowserSessionRequest {}
/**
 * @public
 *
 * The output of {@link StopBrowserSessionCommand}.
 */
export interface StopBrowserSessionCommandOutput extends StopBrowserSessionResponse, __MetadataBearer {}

/**
 * <p>Terminates an active browser session in Amazon Bedrock. This operation stops the session, releases associated resources, and makes the session unavailable for further use.</p> <p>To stop a browser session, you must specify both the browser identifier and the session ID. Once stopped, a session cannot be restarted; you must create a new session using <code>StartBrowserSession</code>.</p> <p>The following operations are related to <code>StopBrowserSession</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/API_StartBrowserSession.html">StartBrowserSession</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/API_GetBrowserSession.html">GetBrowserSession</a> </p> </li> </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreClient, StopBrowserSessionCommand } from "@aws-sdk/client-bedrock-agentcore"; // ES Modules import
 * // const { BedrockAgentCoreClient, StopBrowserSessionCommand } = require("@aws-sdk/client-bedrock-agentcore"); // CommonJS import
 * // import type { BedrockAgentCoreClientConfig } from "@aws-sdk/client-bedrock-agentcore";
 * const config = {}; // type is BedrockAgentCoreClientConfig
 * const client = new BedrockAgentCoreClient(config);
 * const input = { // StopBrowserSessionRequest
 *   browserIdentifier: "STRING_VALUE", // required
 *   sessionId: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new StopBrowserSessionCommand(input);
 * const response = await client.send(command);
 * // { // StopBrowserSessionResponse
 * //   browserIdentifier: "STRING_VALUE", // required
 * //   sessionId: "STRING_VALUE", // required
 * //   lastUpdatedAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param StopBrowserSessionCommandInput - {@link StopBrowserSessionCommandInput}
 * @returns {@link StopBrowserSessionCommandOutput}
 * @see {@link StopBrowserSessionCommandInput} for command's `input` shape.
 * @see {@link StopBrowserSessionCommandOutput} for command's `response` shape.
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
export class StopBrowserSessionCommand extends $Command
  .classBuilder<
    StopBrowserSessionCommandInput,
    StopBrowserSessionCommandOutput,
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
  .s("AmazonBedrockAgentCore", "StopBrowserSession", {})
  .n("BedrockAgentCoreClient", "StopBrowserSessionCommand")
  .f(void 0, void 0)
  .ser(se_StopBrowserSessionCommand)
  .de(de_StopBrowserSessionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopBrowserSessionRequest;
      output: StopBrowserSessionResponse;
    };
    sdk: {
      input: StopBrowserSessionCommandInput;
      output: StopBrowserSessionCommandOutput;
    };
  };
}
