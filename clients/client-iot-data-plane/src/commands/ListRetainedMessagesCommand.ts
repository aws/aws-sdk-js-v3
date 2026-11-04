// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListRetainedMessagesRequest, ListRetainedMessagesResponse } from "../models/models_0";
import { ListRetainedMessages$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListRetainedMessagesCommand}.
 */
export interface ListRetainedMessagesCommandInput extends ListRetainedMessagesRequest {}
/**
 * @public
 *
 * The output of {@link ListRetainedMessagesCommand}.
 */
export interface ListRetainedMessagesCommandOutput extends ListRetainedMessagesResponse, __MetadataBearer {}

/**
 * Lists summary information about the retained messages stored for the account.
 *
 * This action returns only the topic names of the retained messages. It doesn't return any message payloads. Although this action doesn't return a message payload, it can still incur messaging costs.
 *
 * To get the message payload of a retained message, call [GetRetainedMessage](https://docs.aws.amazon.com/iot/latest/apireference/API_iotdata_GetRetainedMessage.html) with the topic name of the retained message.
 *
 * Requires permission to access the [ListRetainedMessages](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html) action.
 *
 * For more information about messaging costs, see [Amazon Web Services IoT Core pricing - Messaging](http://aws.amazon.com/iot-core/pricing/#Messaging).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTDataPlaneClient, ListRetainedMessagesCommand } from "@aws-sdk/client-iot-data-plane"; // ES Modules import
 * // const { IoTDataPlaneClient, ListRetainedMessagesCommand } = require("@aws-sdk/client-iot-data-plane"); // CommonJS import
 * // import type { IoTDataPlaneClientConfig } from "@aws-sdk/client-iot-data-plane";
 * const config = {}; // type is IoTDataPlaneClientConfig
 * const client = new IoTDataPlaneClient(config);
 * const input = { // ListRetainedMessagesRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListRetainedMessagesCommand(input);
 * const response = await client.send(command);
 * // { // ListRetainedMessagesResponse
 * //   retainedTopics: [ // RetainedMessageList
 * //     { // RetainedMessageSummary
 * //       topic: "STRING_VALUE",
 * //       payloadSize: Number("long"),
 * //       qos: Number("int"),
 * //       lastModifiedTime: Number("long"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRetainedMessagesCommandInput - {@link ListRetainedMessagesCommandInput}
 * @returns {@link ListRetainedMessagesCommandOutput}
 * @see {@link ListRetainedMessagesCommandInput} for command's `input` shape.
 * @see {@link ListRetainedMessagesCommandOutput} for command's `response` shape.
 * @see {@link IoTDataPlaneClientResolvedConfig | config} for IoTDataPlaneClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * An unexpected error has occurred.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link MethodNotAllowedException} (client fault)
 *
 * The specified combination of HTTP verb and URI is not supported.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service is temporarily unavailable.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The rate exceeds the limit.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * You are not authorized to perform this operation.
 *
 * @throws {@link IoTDataPlaneServiceException}
 *
 * Base exception class for all service exceptions from IoTDataPlane service.
 *
 * @public
 */
export class ListRetainedMessagesCommand extends command<ListRetainedMessagesCommandInput, ListRetainedMessagesCommandOutput>(
  _ep0,
  _mw0,
  "ListRetainedMessages",
  ListRetainedMessages$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRetainedMessagesRequest;
      output: ListRetainedMessagesResponse;
    };
    sdk: {
      input: ListRetainedMessagesCommandInput;
      output: ListRetainedMessagesCommandOutput;
    };
  };
}
