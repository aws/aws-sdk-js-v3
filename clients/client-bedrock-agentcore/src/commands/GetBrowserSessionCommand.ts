// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockAgentCoreClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockAgentCoreClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetBrowserSessionRequest, GetBrowserSessionResponse } from "../models/models_0";
import { de_GetBrowserSessionCommand, se_GetBrowserSessionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetBrowserSessionCommand}.
 */
export interface GetBrowserSessionCommandInput extends GetBrowserSessionRequest {}
/**
 * @public
 *
 * The output of {@link GetBrowserSessionCommand}.
 */
export interface GetBrowserSessionCommandOutput extends GetBrowserSessionResponse, __MetadataBearer {}

/**
 * <p>Retrieves detailed information about a specific browser session in Amazon Bedrock. This operation returns the session's configuration, current status, associated streams, and metadata.</p> <p>To get a browser session, you must specify both the browser identifier and the session ID. The response includes information about the session's viewport configuration, timeout settings, and stream endpoints.</p> <p>The following operations are related to <code>GetBrowserSession</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/API_StartBrowserSession.html">StartBrowserSession</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/API_ListBrowserSessions.html">ListBrowserSessions</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/API_StopBrowserSession.html">StopBrowserSession</a> </p> </li> </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreClient, GetBrowserSessionCommand } from "@aws-sdk/client-bedrock-agentcore"; // ES Modules import
 * // const { BedrockAgentCoreClient, GetBrowserSessionCommand } = require("@aws-sdk/client-bedrock-agentcore"); // CommonJS import
 * const client = new BedrockAgentCoreClient(config);
 * const input = { // GetBrowserSessionRequest
 *   browserIdentifier: "STRING_VALUE", // required
 *   sessionId: "STRING_VALUE", // required
 * };
 * const command = new GetBrowserSessionCommand(input);
 * const response = await client.send(command);
 * // { // GetBrowserSessionResponse
 * //   browserIdentifier: "STRING_VALUE", // required
 * //   sessionId: "STRING_VALUE", // required
 * //   name: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   viewPort: { // ViewPort
 * //     width: Number("int"), // required
 * //     height: Number("int"), // required
 * //   },
 * //   sessionTimeoutSeconds: Number("int"),
 * //   status: "READY" || "TERMINATED",
 * //   streams: { // BrowserSessionStream
 * //     automationStream: { // AutomationStream
 * //       streamEndpoint: "STRING_VALUE", // required
 * //       streamStatus: "ENABLED" || "DISABLED", // required
 * //     },
 * //     liveViewStream: { // LiveViewStream
 * //       streamEndpoint: "STRING_VALUE",
 * //     },
 * //   },
 * //   sessionReplayArtifact: "STRING_VALUE",
 * //   lastUpdatedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetBrowserSessionCommandInput - {@link GetBrowserSessionCommandInput}
 * @returns {@link GetBrowserSessionCommandOutput}
 * @see {@link GetBrowserSessionCommandInput} for command's `input` shape.
 * @see {@link GetBrowserSessionCommandOutput} for command's `response` shape.
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
export class GetBrowserSessionCommand extends $Command
  .classBuilder<
    GetBrowserSessionCommandInput,
    GetBrowserSessionCommandOutput,
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
  .s("AmazonBedrockAgentCore", "GetBrowserSession", {})
  .n("BedrockAgentCoreClient", "GetBrowserSessionCommand")
  .f(void 0, void 0)
  .ser(se_GetBrowserSessionCommand)
  .de(de_GetBrowserSessionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetBrowserSessionRequest;
      output: GetBrowserSessionResponse;
    };
    sdk: {
      input: GetBrowserSessionCommandInput;
      output: GetBrowserSessionCommandOutput;
    };
  };
}
