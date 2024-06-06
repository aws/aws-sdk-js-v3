// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { GetLogLevelsByResourceTypesRequest, GetLogLevelsByResourceTypesResponse } from "../models/models_0";
import {
  de_GetLogLevelsByResourceTypesCommand,
  se_GetLogLevelsByResourceTypesCommand,
} from "../protocols/Aws_restJson1";

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
 * <p>Returns current default log levels or log levels by resource types. Based on resource
 *             types, log levels can be for wireless device log options or wireless gateway log
 *             options.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, GetLogLevelsByResourceTypesCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, GetLogLevelsByResourceTypesCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
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
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: IoTWirelessClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("iotwireless", "GetLogLevelsByResourceTypes", {})
  .n("IoTWirelessClient", "GetLogLevelsByResourceTypesCommand")
  .f(void 0, void 0)
  .ser(se_GetLogLevelsByResourceTypesCommand)
  .de(de_GetLogLevelsByResourceTypesCommand)
  .build() {}
