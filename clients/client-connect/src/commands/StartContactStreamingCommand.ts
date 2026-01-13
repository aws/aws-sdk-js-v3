// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { StartContactStreamingRequest, StartContactStreamingResponse } from "../models/models_2";
import { StartContactStreaming$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartContactStreamingCommand}.
 */
export interface StartContactStreamingCommandInput extends StartContactStreamingRequest {}
/**
 * @public
 *
 * The output of {@link StartContactStreamingCommand}.
 */
export interface StartContactStreamingCommandOutput extends StartContactStreamingResponse, __MetadataBearer {}

/**
 * <p> Initiates real-time message streaming for a new chat contact.</p>
 *          <p> For more information about message streaming, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/chat-message-streaming.html">Enable real-time chat message streaming</a> in the
 *      <i>Amazon Connect Administrator Guide</i>.</p>
 *          <p>For more information about chat, see the following topics in the <i>Amazon Connect
 *    Administrator Guide</i>: </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/connect/latest/adminguide/web-and-mobile-chat.html">Concepts: Web and mobile messaging capabilities in Amazon Connect</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/connect/latest/adminguide/security-best-practices.html#bp-security-chat">Amazon Connect Chat security best practices</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, StartContactStreamingCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, StartContactStreamingCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // StartContactStreamingRequest
 *   InstanceId: "STRING_VALUE", // required
 *   ContactId: "STRING_VALUE", // required
 *   ChatStreamingConfiguration: { // ChatStreamingConfiguration
 *     StreamingEndpointArn: "STRING_VALUE", // required
 *   },
 *   ClientToken: "STRING_VALUE", // required
 * };
 * const command = new StartContactStreamingCommand(input);
 * const response = await client.send(command);
 * // { // StartContactStreamingResponse
 * //   StreamingId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param StartContactStreamingCommandInput - {@link StartContactStreamingCommandInput}
 * @returns {@link StartContactStreamingCommandOutput}
 * @see {@link StartContactStreamingCommandInput} for command's `input` shape.
 * @see {@link StartContactStreamingCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The allowed limit for the resource has been exceeded.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class StartContactStreamingCommand extends $Command
  .classBuilder<
    StartContactStreamingCommandInput,
    StartContactStreamingCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "StartContactStreaming", {})
  .n("ConnectClient", "StartContactStreamingCommand")
  .sc(StartContactStreaming$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartContactStreamingRequest;
      output: StartContactStreamingResponse;
    };
    sdk: {
      input: StartContactStreamingCommandInput;
      output: StartContactStreamingCommandOutput;
    };
  };
}
