// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTEventsDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTEventsDataClient";
import { BatchSnoozeAlarmRequest, BatchSnoozeAlarmResponse } from "../models/models_0";
import { de_BatchSnoozeAlarmCommand, se_BatchSnoozeAlarmCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchSnoozeAlarmCommand}.
 */
export interface BatchSnoozeAlarmCommandInput extends BatchSnoozeAlarmRequest {}
/**
 * @public
 *
 * The output of {@link BatchSnoozeAlarmCommand}.
 */
export interface BatchSnoozeAlarmCommandOutput extends BatchSnoozeAlarmResponse, __MetadataBearer {}

/**
 * <p>Changes one or more alarms to the snooze mode. The alarms change to the
 *         <code>SNOOZE_DISABLED</code> state after you set them to the snooze mode.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsDataClient, BatchSnoozeAlarmCommand } from "@aws-sdk/client-iot-events-data"; // ES Modules import
 * // const { IoTEventsDataClient, BatchSnoozeAlarmCommand } = require("@aws-sdk/client-iot-events-data"); // CommonJS import
 * const client = new IoTEventsDataClient(config);
 * const input = { // BatchSnoozeAlarmRequest
 *   snoozeActionRequests: [ // SnoozeAlarmActionRequests // required
 *     { // SnoozeAlarmActionRequest
 *       requestId: "STRING_VALUE", // required
 *       alarmModelName: "STRING_VALUE", // required
 *       keyValue: "STRING_VALUE",
 *       note: "STRING_VALUE",
 *       snoozeDuration: Number("int"), // required
 *     },
 *   ],
 * };
 * const command = new BatchSnoozeAlarmCommand(input);
 * const response = await client.send(command);
 * // { // BatchSnoozeAlarmResponse
 * //   errorEntries: [ // BatchAlarmActionErrorEntries
 * //     { // BatchAlarmActionErrorEntry
 * //       requestId: "STRING_VALUE",
 * //       errorCode: "ResourceNotFoundException" || "InvalidRequestException" || "InternalFailureException" || "ServiceUnavailableException" || "ThrottlingException",
 * //       errorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchSnoozeAlarmCommandInput - {@link BatchSnoozeAlarmCommandInput}
 * @returns {@link BatchSnoozeAlarmCommandOutput}
 * @see {@link BatchSnoozeAlarmCommandInput} for command's `input` shape.
 * @see {@link BatchSnoozeAlarmCommandOutput} for command's `response` shape.
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
 * @public
 */
export class BatchSnoozeAlarmCommand extends $Command
  .classBuilder<
    BatchSnoozeAlarmCommandInput,
    BatchSnoozeAlarmCommandOutput,
    IoTEventsDataClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: IoTEventsDataClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("IotColumboDataService", "BatchSnoozeAlarm", {})
  .n("IoTEventsDataClient", "BatchSnoozeAlarmCommand")
  .f(void 0, void 0)
  .ser(se_BatchSnoozeAlarmCommand)
  .de(de_BatchSnoozeAlarmCommand)
  .build() {}
