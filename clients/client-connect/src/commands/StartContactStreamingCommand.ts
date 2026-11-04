// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartContactStreamingRequest, StartContactStreamingResponse } from "../models/models_3";
import { StartContactStreaming$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Initiates real-time message streaming for a new chat contact.
 *
 * For more information about message streaming, see [Enable real-time chat message streaming](https://docs.aws.amazon.com/connect/latest/adminguide/chat-message-streaming.html) in the *Connect Customer Administrator Guide*.
 *
 * For more information about chat, see the following topics in the *Connect Customer Administrator Guide*:
 *
 * - [Concepts: Web and mobile messaging capabilities in Connect Customer](https://docs.aws.amazon.com/connect/latest/adminguide/web-and-mobile-chat.html)
 * - [Connect Customer Chat security best practices](https://docs.aws.amazon.com/connect/latest/adminguide/security-best-practices.html#bp-security-chat)
 *
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
 *
 * Request processing failed because of an error or failure with the service.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more of the specified parameters are not valid.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The allowed limit for the resource has been exceeded.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link ConnectServiceException}
 *
 * Base exception class for all service exceptions from Connect service.
 *
 * @public
 */
export class StartContactStreamingCommand extends command<StartContactStreamingCommandInput, StartContactStreamingCommandOutput>(
  _ep0,
  _mw0,
  "StartContactStreaming",
  StartContactStreaming$
) {
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
