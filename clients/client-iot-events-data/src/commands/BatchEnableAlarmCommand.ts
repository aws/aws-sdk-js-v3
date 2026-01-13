// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTEventsDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTEventsDataClient";
import type { BatchEnableAlarmRequest, BatchEnableAlarmResponse } from "../models/models_0";
import { BatchEnableAlarm$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchEnableAlarmCommand}.
 */
export interface BatchEnableAlarmCommandInput extends BatchEnableAlarmRequest {}
/**
 * @public
 *
 * The output of {@link BatchEnableAlarmCommand}.
 */
export interface BatchEnableAlarmCommandOutput extends BatchEnableAlarmResponse, __MetadataBearer {}

/**
 * <p>Enables one or more alarms. The alarms change to the <code>NORMAL</code> state after you
 *       enable them.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsDataClient, BatchEnableAlarmCommand } from "@aws-sdk/client-iot-events-data"; // ES Modules import
 * // const { IoTEventsDataClient, BatchEnableAlarmCommand } = require("@aws-sdk/client-iot-events-data"); // CommonJS import
 * // import type { IoTEventsDataClientConfig } from "@aws-sdk/client-iot-events-data";
 * const config = {}; // type is IoTEventsDataClientConfig
 * const client = new IoTEventsDataClient(config);
 * const input = { // BatchEnableAlarmRequest
 *   enableActionRequests: [ // EnableAlarmActionRequests // required
 *     { // EnableAlarmActionRequest
 *       requestId: "STRING_VALUE", // required
 *       alarmModelName: "STRING_VALUE", // required
 *       keyValue: "STRING_VALUE",
 *       note: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new BatchEnableAlarmCommand(input);
 * const response = await client.send(command);
 * // { // BatchEnableAlarmResponse
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
 * @param BatchEnableAlarmCommandInput - {@link BatchEnableAlarmCommandInput}
 * @returns {@link BatchEnableAlarmCommandOutput}
 * @see {@link BatchEnableAlarmCommandInput} for command's `input` shape.
 * @see {@link BatchEnableAlarmCommandOutput} for command's `response` shape.
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
export class BatchEnableAlarmCommand extends $Command
  .classBuilder<
    BatchEnableAlarmCommandInput,
    BatchEnableAlarmCommandOutput,
    IoTEventsDataClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTEventsDataClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("IotColumboDataService", "BatchEnableAlarm", {})
  .n("IoTEventsDataClient", "BatchEnableAlarmCommand")
  .sc(BatchEnableAlarm$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchEnableAlarmRequest;
      output: BatchEnableAlarmResponse;
    };
    sdk: {
      input: BatchEnableAlarmCommandInput;
      output: BatchEnableAlarmCommandOutput;
    };
  };
}
