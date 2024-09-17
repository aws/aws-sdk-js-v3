// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  IoT1ClickDevicesServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IoT1ClickDevicesServiceClient";
import { ListDeviceEventsRequest, ListDeviceEventsResponse } from "../models/models_0";
import { de_ListDeviceEventsCommand, se_ListDeviceEventsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDeviceEventsCommand}.
 */
export interface ListDeviceEventsCommandInput extends ListDeviceEventsRequest {}
/**
 * @public
 *
 * The output of {@link ListDeviceEventsCommand}.
 */
export interface ListDeviceEventsCommandOutput extends ListDeviceEventsResponse, __MetadataBearer {}

/**
 * <p>Using a device ID, returns a DeviceEventsResponse object containing an
 *  array of events for the device.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoT1ClickDevicesServiceClient, ListDeviceEventsCommand } from "@aws-sdk/client-iot-1click-devices-service"; // ES Modules import
 * // const { IoT1ClickDevicesServiceClient, ListDeviceEventsCommand } = require("@aws-sdk/client-iot-1click-devices-service"); // CommonJS import
 * const client = new IoT1ClickDevicesServiceClient(config);
 * const input = { // ListDeviceEventsRequest
 *   DeviceId: "STRING_VALUE", // required
 *   FromTimeStamp: new Date("TIMESTAMP"), // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   ToTimeStamp: new Date("TIMESTAMP"), // required
 * };
 * const command = new ListDeviceEventsCommand(input);
 * const response = await client.send(command);
 * // { // ListDeviceEventsResponse
 * //   Events: [ // __listOfDeviceEvent
 * //     { // DeviceEvent
 * //       Device: { // Device
 * //         Attributes: {},
 * //         DeviceId: "STRING_VALUE",
 * //         Type: "STRING_VALUE",
 * //       },
 * //       StdEvent: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDeviceEventsCommandInput - {@link ListDeviceEventsCommandInput}
 * @returns {@link ListDeviceEventsCommandOutput}
 * @see {@link ListDeviceEventsCommandInput} for command's `input` shape.
 * @see {@link ListDeviceEventsCommandOutput} for command's `response` shape.
 * @see {@link IoT1ClickDevicesServiceClientResolvedConfig | config} for IoT1ClickDevicesServiceClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * @throws {@link RangeNotSatisfiableException} (client fault)
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * @throws {@link IoT1ClickDevicesServiceServiceException}
 * <p>Base exception class for all service exceptions from IoT1ClickDevicesService service.</p>
 *
 * @public
 */
export class ListDeviceEventsCommand extends $Command
  .classBuilder<
    ListDeviceEventsCommandInput,
    ListDeviceEventsCommandOutput,
    IoT1ClickDevicesServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoT1ClickDevicesServiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("IoT1ClickDevicesService", "ListDeviceEvents", {})
  .n("IoT1ClickDevicesServiceClient", "ListDeviceEventsCommand")
  .f(void 0, void 0)
  .ser(se_ListDeviceEventsCommand)
  .de(de_ListDeviceEventsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDeviceEventsRequest;
      output: ListDeviceEventsResponse;
    };
    sdk: {
      input: ListDeviceEventsCommandInput;
      output: ListDeviceEventsCommandOutput;
    };
  };
}
