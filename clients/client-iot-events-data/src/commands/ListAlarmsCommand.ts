// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTEventsDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTEventsDataClient";
import { ListAlarmsRequest, ListAlarmsResponse } from "../models/models_0";
import { ListAlarms } from "../schemas/schemas_1_Batch";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAlarmsCommand}.
 */
export interface ListAlarmsCommandInput extends ListAlarmsRequest {}
/**
 * @public
 *
 * The output of {@link ListAlarmsCommand}.
 */
export interface ListAlarmsCommandOutput extends ListAlarmsResponse, __MetadataBearer {}

/**
 * <p>Lists one or more alarms. The operation returns only the metadata associated with each
 *       alarm.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsDataClient, ListAlarmsCommand } from "@aws-sdk/client-iot-events-data"; // ES Modules import
 * // const { IoTEventsDataClient, ListAlarmsCommand } = require("@aws-sdk/client-iot-events-data"); // CommonJS import
 * // import type { IoTEventsDataClientConfig } from "@aws-sdk/client-iot-events-data";
 * const config = {}; // type is IoTEventsDataClientConfig
 * const client = new IoTEventsDataClient(config);
 * const input = { // ListAlarmsRequest
 *   alarmModelName: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListAlarmsCommand(input);
 * const response = await client.send(command);
 * // { // ListAlarmsResponse
 * //   alarmSummaries: [ // AlarmSummaries
 * //     { // AlarmSummary
 * //       alarmModelName: "STRING_VALUE",
 * //       alarmModelVersion: "STRING_VALUE",
 * //       keyValue: "STRING_VALUE",
 * //       stateName: "DISABLED" || "NORMAL" || "ACTIVE" || "ACKNOWLEDGED" || "SNOOZE_DISABLED" || "LATCHED",
 * //       creationTime: new Date("TIMESTAMP"),
 * //       lastUpdateTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAlarmsCommandInput - {@link ListAlarmsCommandInput}
 * @returns {@link ListAlarmsCommandOutput}
 * @see {@link ListAlarmsCommandInput} for command's `input` shape.
 * @see {@link ListAlarmsCommandOutput} for command's `response` shape.
 * @see {@link IoTEventsDataClientResolvedConfig | config} for IoTEventsDataClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request was invalid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource was not found.</p>
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
 *
 * @public
 */
export class ListAlarmsCommand extends $Command
  .classBuilder<
    ListAlarmsCommandInput,
    ListAlarmsCommandOutput,
    IoTEventsDataClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTEventsDataClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("IotColumboDataService", "ListAlarms", {})
  .n("IoTEventsDataClient", "ListAlarmsCommand")
  .sc(ListAlarms)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAlarmsRequest;
      output: ListAlarmsResponse;
    };
    sdk: {
      input: ListAlarmsCommandInput;
      output: ListAlarmsCommandOutput;
    };
  };
}
