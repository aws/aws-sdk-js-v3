// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockAgentCoreClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockAgentCoreClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StartBrowserSessionRequest, StartBrowserSessionResponse } from "../models/models_0";
import { StartBrowserSession } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartBrowserSessionCommand}.
 */
export interface StartBrowserSessionCommandInput extends StartBrowserSessionRequest {}
/**
 * @public
 *
 * The output of {@link StartBrowserSessionCommand}.
 */
export interface StartBrowserSessionCommandOutput extends StartBrowserSessionResponse, __MetadataBearer {}

/**
 * <p>Creates and initializes a browser session in Amazon Bedrock. The session enables agents to navigate and interact with web content, extract information from websites, and perform web-based tasks as part of their response generation.</p> <p>To create a session, you must specify a browser identifier and a name. You can also configure the viewport dimensions to control the visible area of web content. The session remains active until it times out or you explicitly stop it using the <code>StopBrowserSession</code> operation.</p> <p>The following operations are related to <code>StartBrowserSession</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/API_GetBrowserSession.html">GetBrowserSession</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/API_UpdateBrowserStream.html">UpdateBrowserStream</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/API_StopBrowserSession.html">StopBrowserSession</a> </p> </li> </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreClient, StartBrowserSessionCommand } from "@aws-sdk/client-bedrock-agentcore"; // ES Modules import
 * // const { BedrockAgentCoreClient, StartBrowserSessionCommand } = require("@aws-sdk/client-bedrock-agentcore"); // CommonJS import
 * // import type { BedrockAgentCoreClientConfig } from "@aws-sdk/client-bedrock-agentcore";
 * const config = {}; // type is BedrockAgentCoreClientConfig
 * const client = new BedrockAgentCoreClient(config);
 * const input = { // StartBrowserSessionRequest
 *   traceId: "STRING_VALUE",
 *   traceParent: "STRING_VALUE",
 *   browserIdentifier: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   sessionTimeoutSeconds: Number("int"),
 *   viewPort: { // ViewPort
 *     width: Number("int"), // required
 *     height: Number("int"), // required
 *   },
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new StartBrowserSessionCommand(input);
 * const response = await client.send(command);
 * // { // StartBrowserSessionResponse
 * //   browserIdentifier: "STRING_VALUE", // required
 * //   sessionId: "STRING_VALUE", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   streams: { // BrowserSessionStream
 * //     automationStream: { // AutomationStream
 * //       streamEndpoint: "STRING_VALUE", // required
 * //       streamStatus: "ENABLED" || "DISABLED", // required
 * //     },
 * //     liveViewStream: { // LiveViewStream
 * //       streamEndpoint: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param StartBrowserSessionCommandInput - {@link StartBrowserSessionCommandInput}
 * @returns {@link StartBrowserSessionCommandOutput}
 * @see {@link StartBrowserSessionCommandInput} for command's `input` shape.
 * @see {@link StartBrowserSessionCommandOutput} for command's `response` shape.
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
export class StartBrowserSessionCommand extends $Command
  .classBuilder<
    StartBrowserSessionCommandInput,
    StartBrowserSessionCommandOutput,
    BedrockAgentCoreClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCore", "StartBrowserSession", {})
  .n("BedrockAgentCoreClient", "StartBrowserSessionCommand")
  .sc(StartBrowserSession)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartBrowserSessionRequest;
      output: StartBrowserSessionResponse;
    };
    sdk: {
      input: StartBrowserSessionCommandInput;
      output: StartBrowserSessionCommandOutput;
    };
  };
}
