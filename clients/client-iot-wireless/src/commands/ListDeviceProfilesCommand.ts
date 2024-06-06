// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { ListDeviceProfilesRequest, ListDeviceProfilesResponse } from "../models/models_0";
import { de_ListDeviceProfilesCommand, se_ListDeviceProfilesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDeviceProfilesCommand}.
 */
export interface ListDeviceProfilesCommandInput extends ListDeviceProfilesRequest {}
/**
 * @public
 *
 * The output of {@link ListDeviceProfilesCommand}.
 */
export interface ListDeviceProfilesCommandOutput extends ListDeviceProfilesResponse, __MetadataBearer {}

/**
 * <p>Lists the device profiles registered to your AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, ListDeviceProfilesCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, ListDeviceProfilesCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const input = { // ListDeviceProfilesRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   DeviceProfileType: "Sidewalk" || "LoRaWAN",
 * };
 * const command = new ListDeviceProfilesCommand(input);
 * const response = await client.send(command);
 * // { // ListDeviceProfilesResponse
 * //   NextToken: "STRING_VALUE",
 * //   DeviceProfileList: [ // DeviceProfileList
 * //     { // DeviceProfile
 * //       Arn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Id: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListDeviceProfilesCommandInput - {@link ListDeviceProfilesCommandInput}
 * @returns {@link ListDeviceProfilesCommandOutput}
 * @see {@link ListDeviceProfilesCommandInput} for command's `input` shape.
 * @see {@link ListDeviceProfilesCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for IoTWirelessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have permission to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred while processing a request.</p>
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
export class ListDeviceProfilesCommand extends $Command
  .classBuilder<
    ListDeviceProfilesCommandInput,
    ListDeviceProfilesCommandOutput,
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
  .s("iotwireless", "ListDeviceProfiles", {})
  .n("IoTWirelessClient", "ListDeviceProfilesCommand")
  .f(void 0, void 0)
  .ser(se_ListDeviceProfilesCommand)
  .de(de_ListDeviceProfilesCommand)
  .build() {}
