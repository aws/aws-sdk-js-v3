// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTDataPlaneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTDataPlaneClient";
import { ListRetainedMessagesRequest, ListRetainedMessagesResponse } from "../models/models_0";
import { de_ListRetainedMessagesCommand, se_ListRetainedMessagesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Lists summary information about the retained messages stored for the account.</p>
 *          <p>This action returns only the topic names of the retained messages. It doesn't
 *       return any message payloads. Although this action doesn't return a message payload,
 *       it can still incur messaging costs.</p>
 *          <p>To get the message payload of a retained message, call
 *       <a href="https://docs.aws.amazon.com/iot/latest/apireference/API_iotdata_GetRetainedMessage.html">GetRetainedMessage</a>
 *       with the topic name of the retained message.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html">ListRetainedMessages</a> action.</p>
 *          <p>For more information about messaging costs, see <a href="http://aws.amazon.com/iot-core/pricing/#Messaging">Amazon Web Services IoT Core
 *       pricing - Messaging</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTDataPlaneClient, ListRetainedMessagesCommand } from "@aws-sdk/client-iot-data-plane"; // ES Modules import
 * // const { IoTDataPlaneClient, ListRetainedMessagesCommand } = require("@aws-sdk/client-iot-data-plane"); // CommonJS import
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
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link MethodNotAllowedException} (client fault)
 *  <p>The specified combination of HTTP verb and URI is not supported.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You are not authorized to perform this operation.</p>
 *
 * @throws {@link IoTDataPlaneServiceException}
 * <p>Base exception class for all service exceptions from IoTDataPlane service.</p>
 *
 *
 * @public
 */
export class ListRetainedMessagesCommand extends $Command
  .classBuilder<
    ListRetainedMessagesCommandInput,
    ListRetainedMessagesCommandOutput,
    IoTDataPlaneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTDataPlaneClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("IotMoonrakerService", "ListRetainedMessages", {})
  .n("IoTDataPlaneClient", "ListRetainedMessagesCommand")
  .f(void 0, void 0)
  .ser(se_ListRetainedMessagesCommand)
  .de(de_ListRetainedMessagesCommand)
  .build() {
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
