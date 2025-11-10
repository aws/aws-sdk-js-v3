// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { GetLogLevelsByResourceTypesRequest, GetLogLevelsByResourceTypesResponse } from "../models/models_0";
import { GetLogLevelsByResourceTypes } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetLogLevelsByResourceTypesCommand}.
 */
export interface GetLogLevelsByResourceTypesCommandInput extends GetLogLevelsByResourceTypesRequest {}
/**
 * @public
 *
 * The output of {@link GetLogLevelsByResourceTypesCommand}.
 */
export interface GetLogLevelsByResourceTypesCommandOutput
  extends GetLogLevelsByResourceTypesResponse,
    __MetadataBearer {}

/**
 * <p>Returns current default log levels or log levels by resource types. Based on the
 *             resource type, log levels can be returned for wireless device, wireless gateway, or
 *             FUOTA task log options.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, GetLogLevelsByResourceTypesCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, GetLogLevelsByResourceTypesCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * // import type { IoTWirelessClientConfig } from "@aws-sdk/client-iot-wireless";
 * const config = {}; // type is IoTWirelessClientConfig
 * const client = new IoTWirelessClient(config);
 * const input = {};
 * const command = new GetLogLevelsByResourceTypesCommand(input);
 * const response = await client.send(command);
 * // { // GetLogLevelsByResourceTypesResponse
 * //   DefaultLogLevel: "INFO" || "ERROR" || "DISABLED",
 * //   WirelessGatewayLogOptions: [ // WirelessGatewayLogOptionList
 * //     { // WirelessGatewayLogOption
 * //       Type: "LoRaWAN", // required
 * //       LogLevel: "INFO" || "ERROR" || "DISABLED", // required
 * //       Events: [ // WirelessGatewayEventLogOptionList
 * //         { // WirelessGatewayEventLogOption
 * //           Event: "CUPS_Request" || "Certificate", // required
 * //           LogLevel: "INFO" || "ERROR" || "DISABLED", // required
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   WirelessDeviceLogOptions: [ // WirelessDeviceLogOptionList
 * //     { // WirelessDeviceLogOption
 * //       Type: "Sidewalk" || "LoRaWAN", // required
 * //       LogLevel: "INFO" || "ERROR" || "DISABLED", // required
 * //       Events: [ // WirelessDeviceEventLogOptionList
 * //         { // WirelessDeviceEventLogOption
 * //           Event: "Join" || "Rejoin" || "Uplink_Data" || "Downlink_Data" || "Registration", // required
 * //           LogLevel: "INFO" || "ERROR" || "DISABLED", // required
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   FuotaTaskLogOptions: [ // FuotaTaskLogOptionList
 * //     { // FuotaTaskLogOption
 * //       Type: "LoRaWAN", // required
 * //       LogLevel: "INFO" || "ERROR" || "DISABLED", // required
 * //       Events: [ // FuotaTaskEventLogOptionList
 * //         { // FuotaTaskEventLogOption
 * //           Event: "Fuota", // required
 * //           LogLevel: "INFO" || "ERROR" || "DISABLED", // required
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetLogLevelsByResourceTypesCommandInput - {@link GetLogLevelsByResourceTypesCommandInput}
 * @returns {@link GetLogLevelsByResourceTypesCommandOutput}
 * @see {@link GetLogLevelsByResourceTypesCommandInput} for command's `input` shape.
 * @see {@link GetLogLevelsByResourceTypesCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class GetLogLevelsByResourceTypesCommand extends $Command
  .classBuilder<
    GetLogLevelsByResourceTypesCommandInput,
    GetLogLevelsByResourceTypesCommandOutput,
    IoTWirelessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTWirelessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("iotwireless", "GetLogLevelsByResourceTypes", {})
  .n("IoTWirelessClient", "GetLogLevelsByResourceTypesCommand")
  .sc(GetLogLevelsByResourceTypes)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetLogLevelsByResourceTypesResponse;
    };
    sdk: {
      input: GetLogLevelsByResourceTypesCommandInput;
      output: GetLogLevelsByResourceTypesCommandOutput;
    };
  };
}
