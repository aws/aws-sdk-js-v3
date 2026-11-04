// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SendEventRequest, SendEventResponse } from "../models/models_0";
import { SendEvent$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link SendEventCommand}.
 */
export interface SendEventCommandInput extends SendEventRequest {}
/**
 * @public
 *
 * The output of {@link SendEventCommand}.
 */
export interface SendEventCommandOutput extends SendEventResponse, __MetadataBearer {}

/**
 * Sends an event to a room. Use this within your application’s business logic to send events to clients of a room; e.g., to notify clients to change the way the chat UI is rendered.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IvschatClient, SendEventCommand } from "@aws-sdk/client-ivschat"; // ES Modules import
 * // const { IvschatClient, SendEventCommand } = require("@aws-sdk/client-ivschat"); // CommonJS import
 * // import type { IvschatClientConfig } from "@aws-sdk/client-ivschat";
 * const config = {}; // type is IvschatClientConfig
 * const client = new IvschatClient(config);
 * const input = { // SendEventRequest
 *   roomIdentifier: "STRING_VALUE", // required
 *   eventName: "STRING_VALUE", // required
 *   attributes: { // EventAttributes
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new SendEventCommand(input);
 * const response = await client.send(command);
 * // { // SendEventResponse
 * //   id: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SendEventCommandInput - {@link SendEventCommandInput}
 * @returns {@link SendEventCommandOutput}
 * @see {@link SendEventCommandInput} for command's `input` shape.
 * @see {@link SendEventCommandOutput} for command's `response` shape.
 * @see {@link IvschatClientResolvedConfig | config} for IvschatClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * @throws {@link PendingVerification} (client fault)
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * @throws {@link ValidationException} (client fault)
 *
 * @throws {@link IvschatServiceException}
 *
 * Base exception class for all service exceptions from Ivschat service.
 *
 * @public
 */
export class SendEventCommand extends command<SendEventCommandInput, SendEventCommandOutput>(
  _ep0,
  _mw0,
  "SendEvent",
  SendEvent$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SendEventRequest;
      output: SendEventResponse;
    };
    sdk: {
      input: SendEventCommandInput;
      output: SendEventCommandOutput;
    };
  };
}
