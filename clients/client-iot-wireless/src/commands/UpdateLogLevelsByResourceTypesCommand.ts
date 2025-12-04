// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import type { UpdateLogLevelsByResourceTypesRequest, UpdateLogLevelsByResourceTypesResponse } from "../models/models_1";
import { UpdateLogLevelsByResourceTypes } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateLogLevelsByResourceTypesCommand}.
 */
export interface UpdateLogLevelsByResourceTypesCommandInput extends UpdateLogLevelsByResourceTypesRequest {}
/**
 * @public
 *
 * The output of {@link UpdateLogLevelsByResourceTypesCommand}.
 */
export interface UpdateLogLevelsByResourceTypesCommandOutput
  extends UpdateLogLevelsByResourceTypesResponse,
    __MetadataBearer {}

/**
 * <p>Set default log level, or log levels by resource types. This can be for wireless
 *             device, wireless gateway, or FUOTA task log options, and is used to control the log
 *             messages that'll be displayed in CloudWatch.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, UpdateLogLevelsByResourceTypesCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, UpdateLogLevelsByResourceTypesCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * // import type { IoTWirelessClientConfig } from "@aws-sdk/client-iot-wireless";
 * const config = {}; // type is IoTWirelessClientConfig
 * const client = new IoTWirelessClient(config);
 * const input = { // UpdateLogLevelsByResourceTypesRequest
 *   DefaultLogLevel: "INFO" || "ERROR" || "DISABLED",
 *   FuotaTaskLogOptions: [ // FuotaTaskLogOptionList
 *     { // FuotaTaskLogOption
 *       Type: "LoRaWAN", // required
 *       LogLevel: "INFO" || "ERROR" || "DISABLED", // required
 *       Events: [ // FuotaTaskEventLogOptionList
 *         { // FuotaTaskEventLogOption
 *           Event: "Fuota", // required
 *           LogLevel: "INFO" || "ERROR" || "DISABLED", // required
 *         },
 *       ],
 *     },
 *   ],
 *   WirelessDeviceLogOptions: [ // WirelessDeviceLogOptionList
 *     { // WirelessDeviceLogOption
 *       Type: "Sidewalk" || "LoRaWAN", // required
 *       LogLevel: "INFO" || "ERROR" || "DISABLED", // required
 *       Events: [ // WirelessDeviceEventLogOptionList
 *         { // WirelessDeviceEventLogOption
 *           Event: "Join" || "Rejoin" || "Uplink_Data" || "Downlink_Data" || "Registration", // required
 *           LogLevel: "INFO" || "ERROR" || "DISABLED", // required
 *         },
 *       ],
 *     },
 *   ],
 *   WirelessGatewayLogOptions: [ // WirelessGatewayLogOptionList
 *     { // WirelessGatewayLogOption
 *       Type: "LoRaWAN", // required
 *       LogLevel: "INFO" || "ERROR" || "DISABLED", // required
 *       Events: [ // WirelessGatewayEventLogOptionList
 *         { // WirelessGatewayEventLogOption
 *           Event: "CUPS_Request" || "Certificate", // required
 *           LogLevel: "INFO" || "ERROR" || "DISABLED", // required
 *         },
 *       ],
 *     },
 *   ],
 * };
 * const command = new UpdateLogLevelsByResourceTypesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateLogLevelsByResourceTypesCommandInput - {@link UpdateLogLevelsByResourceTypesCommandInput}
 * @returns {@link UpdateLogLevelsByResourceTypesCommandOutput}
 * @see {@link UpdateLogLevelsByResourceTypesCommandInput} for command's `input` shape.
 * @see {@link UpdateLogLevelsByResourceTypesCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for IoTWirelessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have permission to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Adding, updating, or deleting the resource can cause an inconsistent state.</p>
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
export class UpdateLogLevelsByResourceTypesCommand extends $Command
  .classBuilder<
    UpdateLogLevelsByResourceTypesCommandInput,
    UpdateLogLevelsByResourceTypesCommandOutput,
    IoTWirelessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTWirelessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("iotwireless", "UpdateLogLevelsByResourceTypes", {})
  .n("IoTWirelessClient", "UpdateLogLevelsByResourceTypesCommand")
  .sc(UpdateLogLevelsByResourceTypes)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateLogLevelsByResourceTypesRequest;
      output: {};
    };
    sdk: {
      input: UpdateLogLevelsByResourceTypesCommandInput;
      output: UpdateLogLevelsByResourceTypesCommandOutput;
    };
  };
}
