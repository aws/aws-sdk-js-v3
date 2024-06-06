// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StartContactStreamingRequest, StartContactStreamingResponse } from "../models/models_2";
import { de_StartContactStreamingCommand, se_StartContactStreamingCommand } from "../protocols/Aws_restJson1";

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
 *          <p> For more information about message streaming, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/chat-message-streaming.html">Enable real-time chat message
 *     streaming</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, StartContactStreamingCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, StartContactStreamingCommand } = require("@aws-sdk/client-connect"); // CommonJS import
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
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonConnectService", "StartContactStreaming", {})
  .n("ConnectClient", "StartContactStreamingCommand")
  .f(void 0, void 0)
  .ser(se_StartContactStreamingCommand)
  .de(de_StartContactStreamingCommand)
  .build() {}
