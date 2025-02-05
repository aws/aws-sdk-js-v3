// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { ListQueuedMessagesRequest, ListQueuedMessagesResponse } from "../models/models_1";
import { de_ListQueuedMessagesCommand, se_ListQueuedMessagesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListQueuedMessagesCommand}.
 */
export interface ListQueuedMessagesCommandInput extends ListQueuedMessagesRequest {}
/**
 * @public
 *
 * The output of {@link ListQueuedMessagesCommand}.
 */
export interface ListQueuedMessagesCommandOutput extends ListQueuedMessagesResponse, __MetadataBearer {}

/**
 * <p>List queued messages in the downlink queue.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, ListQueuedMessagesCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, ListQueuedMessagesCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new IoTWirelessClient(config);
 * const input = { // ListQueuedMessagesRequest
 *   Id: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   WirelessDeviceType: "Sidewalk" || "LoRaWAN",
 * };
 * const command = new ListQueuedMessagesCommand(input);
 * const response = await client.send(command);
 * // { // ListQueuedMessagesResponse
 * //   NextToken: "STRING_VALUE",
 * //   DownlinkQueueMessagesList: [ // DownlinkQueueMessagesList
 * //     { // DownlinkQueueMessage
 * //       MessageId: "STRING_VALUE",
 * //       TransmitMode: Number("int"),
 * //       ReceivedAt: "STRING_VALUE",
 * //       LoRaWAN: { // LoRaWANSendDataToDevice
 * //         FPort: Number("int"),
 * //         ParticipatingGateways: { // ParticipatingGateways
 * //           DownlinkMode: "SEQUENTIAL" || "CONCURRENT" || "USING_UPLINK_GATEWAY", // required
 * //           GatewayList: [ // GatewayList // required
 * //             { // GatewayListItem
 * //               GatewayId: "STRING_VALUE", // required
 * //               DownlinkFrequency: Number("int"), // required
 * //             },
 * //           ],
 * //           TransmissionInterval: Number("int"), // required
 * //         },
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListQueuedMessagesCommandInput - {@link ListQueuedMessagesCommandInput}
 * @returns {@link ListQueuedMessagesCommandOutput}
 * @see {@link ListQueuedMessagesCommandInput} for command's `input` shape.
 * @see {@link ListQueuedMessagesCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for IoTWirelessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have permission to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred while processing a request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because it exceeded the allowed API request rate.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input did not meet the specified constraints.</p>
 *
 * @throws {@link IoTWirelessServiceException}
 * <p>Base exception class for all service exceptions from IoTWireless service.</p>
 *
 * @public
 */
export class ListQueuedMessagesCommand extends $Command
  .classBuilder<
    ListQueuedMessagesCommandInput,
    ListQueuedMessagesCommandOutput,
    IoTWirelessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTWirelessClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("iotwireless", "ListQueuedMessages", {})
  .n("IoTWirelessClient", "ListQueuedMessagesCommand")
  .f(void 0, void 0)
  .ser(se_ListQueuedMessagesCommand)
  .de(de_ListQueuedMessagesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListQueuedMessagesRequest;
      output: ListQueuedMessagesResponse;
    };
    sdk: {
      input: ListQueuedMessagesCommandInput;
      output: ListQueuedMessagesCommandOutput;
    };
  };
}
