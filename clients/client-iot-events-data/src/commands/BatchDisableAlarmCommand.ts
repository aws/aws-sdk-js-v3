// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTEventsDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTEventsDataClient";
import { BatchDisableAlarmRequest, BatchDisableAlarmResponse } from "../models/models_0";
import { BatchDisableAlarm } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchDisableAlarmCommand}.
 */
export interface BatchDisableAlarmCommandInput extends BatchDisableAlarmRequest {}
/**
 * @public
 *
 * The output of {@link BatchDisableAlarmCommand}.
 */
export interface BatchDisableAlarmCommandOutput extends BatchDisableAlarmResponse, __MetadataBearer {}

/**
 * <p>Disables one or more alarms. The alarms change to the <code>DISABLED</code> state after
 *       you disable them.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsDataClient, BatchDisableAlarmCommand } from "@aws-sdk/client-iot-events-data"; // ES Modules import
 * // const { IoTEventsDataClient, BatchDisableAlarmCommand } = require("@aws-sdk/client-iot-events-data"); // CommonJS import
 * // import type { IoTEventsDataClientConfig } from "@aws-sdk/client-iot-events-data";
 * const config = {}; // type is IoTEventsDataClientConfig
 * const client = new IoTEventsDataClient(config);
 * const input = { // BatchDisableAlarmRequest
 *   disableActionRequests: [ // DisableAlarmActionRequests // required
 *     { // DisableAlarmActionRequest
 *       requestId: "STRING_VALUE", // required
 *       alarmModelName: "STRING_VALUE", // required
 *       keyValue: "STRING_VALUE",
 *       note: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new BatchDisableAlarmCommand(input);
 * const response = await client.send(command);
 * // { // BatchDisableAlarmResponse
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
 * @param BatchDisableAlarmCommandInput - {@link BatchDisableAlarmCommandInput}
 * @returns {@link BatchDisableAlarmCommandOutput}
 * @see {@link BatchDisableAlarmCommandInput} for command's `input` shape.
 * @see {@link BatchDisableAlarmCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class BatchDisableAlarmCommand extends $Command
  .classBuilder<
    BatchDisableAlarmCommandInput,
    BatchDisableAlarmCommandOutput,
    IoTEventsDataClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTEventsDataClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("IotColumboDataService", "BatchDisableAlarm", {})
  .n("IoTEventsDataClient", "BatchDisableAlarmCommand")
  .sc(BatchDisableAlarm)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchDisableAlarmRequest;
      output: BatchDisableAlarmResponse;
    };
    sdk: {
      input: BatchDisableAlarmCommandInput;
      output: BatchDisableAlarmCommandOutput;
    };
  };
}
