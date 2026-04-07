// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  BedrockAgentCoreClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../BedrockAgentCoreClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { InvokeBrowserRequest, InvokeBrowserResponse } from "../models/models_0";
import { InvokeBrowser$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link InvokeBrowserCommand}.
 */
export interface InvokeBrowserCommandInput extends InvokeBrowserRequest {}
/**
 * @public
 *
 * The output of {@link InvokeBrowserCommand}.
 */
export interface InvokeBrowserCommandOutput extends InvokeBrowserResponse, __MetadataBearer {}

/**
 * <p>Invokes an operating system-level action on a browser session in Amazon Bedrock AgentCore. This operation provides direct OS-level control over browser sessions, enabling mouse actions, keyboard input, and screenshots that the WebSocket-based Chrome DevTools Protocol (CDP) cannot handle — such as interacting with print dialogs, context menus, and JavaScript alerts.</p> <p>You send a request with exactly one action in the <code>BrowserAction</code> union, and receive a corresponding result in the <code>BrowserActionResult</code> union.</p> <p>The following operations are related to <code>InvokeBrowser</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/bedrock-agentcore/latest/APIReference/API_StartBrowserSession.html">StartBrowserSession</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/bedrock-agentcore/latest/APIReference/API_GetBrowserSession.html">GetBrowserSession</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/bedrock-agentcore/latest/APIReference/API_StopBrowserSession.html">StopBrowserSession</a> </p> </li> </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreClient, InvokeBrowserCommand } from "@aws-sdk/client-bedrock-agentcore"; // ES Modules import
 * // const { BedrockAgentCoreClient, InvokeBrowserCommand } = require("@aws-sdk/client-bedrock-agentcore"); // CommonJS import
 * // import type { BedrockAgentCoreClientConfig } from "@aws-sdk/client-bedrock-agentcore";
 * const config = {}; // type is BedrockAgentCoreClientConfig
 * const client = new BedrockAgentCoreClient(config);
 * const input = { // InvokeBrowserRequest
 *   browserIdentifier: "STRING_VALUE", // required
 *   sessionId: "STRING_VALUE", // required
 *   action: { // BrowserAction Union: only one key present
 *     mouseClick: { // MouseClickArguments
 *       x: Number("int"), // required
 *       y: Number("int"), // required
 *       button: "LEFT" || "RIGHT" || "MIDDLE",
 *       clickCount: Number("int"),
 *     },
 *     mouseMove: { // MouseMoveArguments
 *       x: Number("int"), // required
 *       y: Number("int"), // required
 *     },
 *     mouseDrag: { // MouseDragArguments
 *       endX: Number("int"), // required
 *       endY: Number("int"), // required
 *       startX: Number("int"), // required
 *       startY: Number("int"), // required
 *       button: "LEFT" || "RIGHT" || "MIDDLE",
 *     },
 *     mouseScroll: { // MouseScrollArguments
 *       x: Number("int"), // required
 *       y: Number("int"), // required
 *       deltaX: Number("int"),
 *       deltaY: Number("int"),
 *     },
 *     keyType: { // KeyTypeArguments
 *       text: "STRING_VALUE", // required
 *     },
 *     keyPress: { // KeyPressArguments
 *       key: "STRING_VALUE", // required
 *       presses: Number("int"),
 *     },
 *     keyShortcut: { // KeyShortcutArguments
 *       keys: [ // KeyList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *     screenshot: { // ScreenshotArguments
 *       format: "PNG",
 *     },
 *   },
 * };
 * const command = new InvokeBrowserCommand(input);
 * const response = await client.send(command);
 * // { // InvokeBrowserResponse
 * //   result: { // BrowserActionResult Union: only one key present
 * //     mouseClick: { // MouseClickResult
 * //       status: "SUCCESS" || "FAILED", // required
 * //       error: "STRING_VALUE",
 * //     },
 * //     mouseMove: { // MouseMoveResult
 * //       status: "SUCCESS" || "FAILED", // required
 * //       error: "STRING_VALUE",
 * //     },
 * //     mouseDrag: { // MouseDragResult
 * //       status: "SUCCESS" || "FAILED", // required
 * //       error: "STRING_VALUE",
 * //     },
 * //     mouseScroll: { // MouseScrollResult
 * //       status: "SUCCESS" || "FAILED", // required
 * //       error: "STRING_VALUE",
 * //     },
 * //     keyType: { // KeyTypeResult
 * //       status: "SUCCESS" || "FAILED", // required
 * //       error: "STRING_VALUE",
 * //     },
 * //     keyPress: { // KeyPressResult
 * //       status: "SUCCESS" || "FAILED", // required
 * //       error: "STRING_VALUE",
 * //     },
 * //     keyShortcut: { // KeyShortcutResult
 * //       status: "SUCCESS" || "FAILED", // required
 * //       error: "STRING_VALUE",
 * //     },
 * //     screenshot: { // ScreenshotResult
 * //       status: "SUCCESS" || "FAILED", // required
 * //       error: "STRING_VALUE",
 * //       data: new Uint8Array(),
 * //     },
 * //   },
 * //   sessionId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param InvokeBrowserCommandInput - {@link InvokeBrowserCommandInput}
 * @returns {@link InvokeBrowserCommandOutput}
 * @see {@link InvokeBrowserCommandInput} for command's `input` shape.
 * @see {@link InvokeBrowserCommandOutput} for command's `response` shape.
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
export class InvokeBrowserCommand extends $Command
  .classBuilder<
    InvokeBrowserCommandInput,
    InvokeBrowserCommandOutput,
    BedrockAgentCoreClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCore", "InvokeBrowser", {})
  .n("BedrockAgentCoreClient", "InvokeBrowserCommand")
  .sc(InvokeBrowser$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: InvokeBrowserRequest;
      output: InvokeBrowserResponse;
    };
    sdk: {
      input: InvokeBrowserCommandInput;
      output: InvokeBrowserCommandOutput;
    };
  };
}
