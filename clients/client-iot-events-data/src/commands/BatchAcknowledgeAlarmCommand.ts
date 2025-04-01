// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTEventsDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTEventsDataClient";
import { BatchAcknowledgeAlarmRequest, BatchAcknowledgeAlarmResponse } from "../models/models_0";
import { de_BatchAcknowledgeAlarmCommand, se_BatchAcknowledgeAlarmCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchAcknowledgeAlarmCommand}.
 */
export interface BatchAcknowledgeAlarmCommandInput extends BatchAcknowledgeAlarmRequest {}
/**
 * @public
 *
 * The output of {@link BatchAcknowledgeAlarmCommand}.
 */
export interface BatchAcknowledgeAlarmCommandOutput extends BatchAcknowledgeAlarmResponse, __MetadataBearer {}

/**
 * <p>Acknowledges one or more alarms. The alarms change to the <code>ACKNOWLEDGED</code> state
 *       after you acknowledge them.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsDataClient, BatchAcknowledgeAlarmCommand } from "@aws-sdk/client-iot-events-data"; // ES Modules import
 * // const { IoTEventsDataClient, BatchAcknowledgeAlarmCommand } = require("@aws-sdk/client-iot-events-data"); // CommonJS import
 * const client = new IoTEventsDataClient(config);
 * const input = { // BatchAcknowledgeAlarmRequest
 *   acknowledgeActionRequests: [ // AcknowledgeAlarmActionRequests // required
 *     { // AcknowledgeAlarmActionRequest
 *       requestId: "STRING_VALUE", // required
 *       alarmModelName: "STRING_VALUE", // required
 *       keyValue: "STRING_VALUE",
 *       note: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new BatchAcknowledgeAlarmCommand(input);
 * const response = await client.send(command);
 * // { // BatchAcknowledgeAlarmResponse
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
 * @param BatchAcknowledgeAlarmCommandInput - {@link BatchAcknowledgeAlarmCommandInput}
 * @returns {@link BatchAcknowledgeAlarmCommandOutput}
 * @see {@link BatchAcknowledgeAlarmCommandInput} for command's `input` shape.
 * @see {@link BatchAcknowledgeAlarmCommandOutput} for command's `response` shape.
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
export class BatchAcknowledgeAlarmCommand extends $Command
  .classBuilder<
    BatchAcknowledgeAlarmCommandInput,
    BatchAcknowledgeAlarmCommandOutput,
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
  .s("IotColumboDataService", "BatchAcknowledgeAlarm", {})
  .n("IoTEventsDataClient", "BatchAcknowledgeAlarmCommand")
  .f(void 0, void 0)
  .ser(se_BatchAcknowledgeAlarmCommand)
  .de(de_BatchAcknowledgeAlarmCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchAcknowledgeAlarmRequest;
      output: BatchAcknowledgeAlarmResponse;
    };
    sdk: {
      input: BatchAcknowledgeAlarmCommandInput;
      output: BatchAcknowledgeAlarmCommandOutput;
    };
  };
}
