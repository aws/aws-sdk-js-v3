// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListDeviceEventsRequest, ListDeviceEventsResponse } from "../models/models_0";
import { de_ListDeviceEventsCommand, se_ListDeviceEventsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * <p>Lists the device event history, including device connection status, for up to 30
 *          days.</p>
 *
 * @deprecated Alexa For Business is no longer supported
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, ListDeviceEventsCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, ListDeviceEventsCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const input = { // ListDeviceEventsRequest
 *   DeviceArn: "STRING_VALUE", // required
 *   EventType: "CONNECTION_STATUS" || "DEVICE_STATUS",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListDeviceEventsCommand(input);
 * const response = await client.send(command);
 * // { // ListDeviceEventsResponse
 * //   DeviceEvents: [ // DeviceEventList
 * //     { // DeviceEvent
 * //       Type: "CONNECTION_STATUS" || "DEVICE_STATUS",
 * //       Value: "STRING_VALUE",
 * //       Timestamp: new Date("TIMESTAMP"),
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
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for AlexaForBusinessClient's `config` shape.
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource is not found.</p>
 *
 * @throws {@link AlexaForBusinessServiceException}
 * <p>Base exception class for all service exceptions from AlexaForBusiness service.</p>
 *
 * @public
 */
export class ListDeviceEventsCommand extends $Command
  .classBuilder<
    ListDeviceEventsCommandInput,
    ListDeviceEventsCommandOutput,
    AlexaForBusinessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: AlexaForBusinessClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AlexaForBusiness", "ListDeviceEvents", {})
  .n("AlexaForBusinessClient", "ListDeviceEventsCommand")
  .f(void 0, void 0)
  .ser(se_ListDeviceEventsCommand)
  .de(de_ListDeviceEventsCommand)
  .build() {}
