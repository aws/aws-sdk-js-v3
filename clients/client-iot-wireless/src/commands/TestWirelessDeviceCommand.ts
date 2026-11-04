// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { TestWirelessDeviceRequest, TestWirelessDeviceResponse } from "../models/models_1";
import { TestWirelessDevice$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link TestWirelessDeviceCommand}.
 */
export interface TestWirelessDeviceCommandInput extends TestWirelessDeviceRequest {}
/**
 * @public
 *
 * The output of {@link TestWirelessDeviceCommand}.
 */
export interface TestWirelessDeviceCommandOutput extends TestWirelessDeviceResponse, __MetadataBearer {}

/**
 * Simulates a provisioned device by sending an uplink data payload of `Hello`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, TestWirelessDeviceCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, TestWirelessDeviceCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * // import type { IoTWirelessClientConfig } from "@aws-sdk/client-iot-wireless";
 * const config = {}; // type is IoTWirelessClientConfig
 * const client = new IoTWirelessClient(config);
 * const input = { // TestWirelessDeviceRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new TestWirelessDeviceCommand(input);
 * const response = await client.send(command);
 * // { // TestWirelessDeviceResponse
 * //   Result: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param TestWirelessDeviceCommandInput - {@link TestWirelessDeviceCommandInput}
 * @returns {@link TestWirelessDeviceCommandOutput}
 * @see {@link TestWirelessDeviceCommandInput} for command's `input` shape.
 * @see {@link TestWirelessDeviceCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for IoTWirelessClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected error occurred while processing a request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Resource does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied because it exceeded the allowed API request rate.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input did not meet the specified constraints.
 *
 * @throws {@link IoTWirelessServiceException}
 *
 * Base exception class for all service exceptions from IoTWireless service.
 *
 * @public
 */
export class TestWirelessDeviceCommand extends command<TestWirelessDeviceCommandInput, TestWirelessDeviceCommandOutput>(
  _ep0,
  _mw0,
  "TestWirelessDevice",
  TestWirelessDevice$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: TestWirelessDeviceRequest;
      output: TestWirelessDeviceResponse;
    };
    sdk: {
      input: TestWirelessDeviceCommandInput;
      output: TestWirelessDeviceCommandOutput;
    };
  };
}
