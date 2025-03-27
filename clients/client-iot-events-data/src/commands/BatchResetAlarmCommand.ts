// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTEventsDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTEventsDataClient";
import { BatchResetAlarmRequest, BatchResetAlarmResponse } from "../models/models_0";
import { de_BatchResetAlarmCommand, se_BatchResetAlarmCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchResetAlarmCommand}.
 */
export interface BatchResetAlarmCommandInput extends BatchResetAlarmRequest {}
/**
 * @public
 *
 * The output of {@link BatchResetAlarmCommand}.
 */
export interface BatchResetAlarmCommandOutput extends BatchResetAlarmResponse, __MetadataBearer {}

/**
 * <p>Resets one or more alarms. The alarms return to the <code>NORMAL</code> state after you
 *       reset them.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsDataClient, BatchResetAlarmCommand } from "@aws-sdk/client-iot-events-data"; // ES Modules import
 * // const { IoTEventsDataClient, BatchResetAlarmCommand } = require("@aws-sdk/client-iot-events-data"); // CommonJS import
 * const client = new IoTEventsDataClient(config);
 * const input = { // BatchResetAlarmRequest
 *   resetActionRequests: [ // ResetAlarmActionRequests // required
 *     { // ResetAlarmActionRequest
 *       requestId: "STRING_VALUE", // required
 *       alarmModelName: "STRING_VALUE", // required
 *       keyValue: "STRING_VALUE",
 *       note: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new BatchResetAlarmCommand(input);
 * const response = await client.send(command);
 * // { // BatchResetAlarmResponse
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
 * @param BatchResetAlarmCommandInput - {@link BatchResetAlarmCommandInput}
 * @returns {@link BatchResetAlarmCommandOutput}
 * @see {@link BatchResetAlarmCommandInput} for command's `input` shape.
 * @see {@link BatchResetAlarmCommandOutput} for command's `response` shape.
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
export class BatchResetAlarmCommand extends $Command
  .classBuilder<
    BatchResetAlarmCommandInput,
    BatchResetAlarmCommandOutput,
    IoTEventsDataClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTEventsDataClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("IotColumboDataService", "BatchResetAlarm", {})
  .n("IoTEventsDataClient", "BatchResetAlarmCommand")
  .f(void 0, void 0)
  .ser(se_BatchResetAlarmCommand)
  .de(de_BatchResetAlarmCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchResetAlarmRequest;
      output: BatchResetAlarmResponse;
    };
    sdk: {
      input: BatchResetAlarmCommandInput;
      output: BatchResetAlarmCommandOutput;
    };
  };
}
