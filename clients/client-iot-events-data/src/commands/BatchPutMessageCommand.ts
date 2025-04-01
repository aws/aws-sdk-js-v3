// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTEventsDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTEventsDataClient";
import { BatchPutMessageRequest, BatchPutMessageResponse } from "../models/models_0";
import { de_BatchPutMessageCommand, se_BatchPutMessageCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchPutMessageCommand}.
 */
export interface BatchPutMessageCommandInput extends BatchPutMessageRequest {}
/**
 * @public
 *
 * The output of {@link BatchPutMessageCommand}.
 */
export interface BatchPutMessageCommandOutput extends BatchPutMessageResponse, __MetadataBearer {}

/**
 * <p>Sends a set of messages to the IoT Events system. Each message payload is transformed into
 *       the input you specify (<code>"inputName"</code>) and ingested into any detectors that monitor
 *       that input. If multiple messages are sent, the order in which the messages are processed isn't
 *       guaranteed. To guarantee ordering, you must send messages one at a time and wait for a
 *       successful response.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsDataClient, BatchPutMessageCommand } from "@aws-sdk/client-iot-events-data"; // ES Modules import
 * // const { IoTEventsDataClient, BatchPutMessageCommand } = require("@aws-sdk/client-iot-events-data"); // CommonJS import
 * const client = new IoTEventsDataClient(config);
 * const input = { // BatchPutMessageRequest
 *   messages: [ // Messages // required
 *     { // Message
 *       messageId: "STRING_VALUE", // required
 *       inputName: "STRING_VALUE", // required
 *       payload: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")       // required
 *       timestamp: { // TimestampValue
 *         timeInMillis: Number("long"),
 *       },
 *     },
 *   ],
 * };
 * const command = new BatchPutMessageCommand(input);
 * const response = await client.send(command);
 * // { // BatchPutMessageResponse
 * //   BatchPutMessageErrorEntries: [ // BatchPutMessageErrorEntries
 * //     { // BatchPutMessageErrorEntry
 * //       messageId: "STRING_VALUE",
 * //       errorCode: "ResourceNotFoundException" || "InvalidRequestException" || "InternalFailureException" || "ServiceUnavailableException" || "ThrottlingException",
 * //       errorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchPutMessageCommandInput - {@link BatchPutMessageCommandInput}
 * @returns {@link BatchPutMessageCommandOutput}
 * @see {@link BatchPutMessageCommandInput} for command's `input` shape.
 * @see {@link BatchPutMessageCommandOutput} for command's `response` shape.
 * @see {@link IoTEventsDataClientResolvedConfig | config} for IoTEventsDataClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request was invalid.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request could not be completed due to throttling.</p>
 *
 * @throws {@link IoTEventsDataServiceException}
 * <p>Base exception class for all service exceptions from IoTEventsData service.</p>
 *
 *
 * @public
 */
export class BatchPutMessageCommand extends $Command
  .classBuilder<
    BatchPutMessageCommandInput,
    BatchPutMessageCommandOutput,
    IoTEventsDataClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTEventsDataClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("IotColumboDataService", "BatchPutMessage", {})
  .n("IoTEventsDataClient", "BatchPutMessageCommand")
  .f(void 0, void 0)
  .ser(se_BatchPutMessageCommand)
  .de(de_BatchPutMessageCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchPutMessageRequest;
      output: BatchPutMessageResponse;
    };
    sdk: {
      input: BatchPutMessageCommandInput;
      output: BatchPutMessageCommandOutput;
    };
  };
}
