// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { UpdateLogLevelsByResourceTypesRequest, UpdateLogLevelsByResourceTypesResponse } from "../models/models_1";
import {
  de_UpdateLogLevelsByResourceTypesCommand,
  se_UpdateLogLevelsByResourceTypesCommand,
} from "../protocols/Aws_restJson1";

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
 *             device log options or wireless gateways log options and is used to control the log
 *             messages that'll be displayed in CloudWatch.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, UpdateLogLevelsByResourceTypesCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, UpdateLogLevelsByResourceTypesCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("iotwireless", "UpdateLogLevelsByResourceTypes", {})
  .n("IoTWirelessClient", "UpdateLogLevelsByResourceTypesCommand")
  .f(void 0, void 0)
  .ser(se_UpdateLogLevelsByResourceTypesCommand)
  .de(de_UpdateLogLevelsByResourceTypesCommand)
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
