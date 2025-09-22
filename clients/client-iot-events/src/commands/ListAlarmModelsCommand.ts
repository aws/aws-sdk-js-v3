// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTEventsClient";
import { ListAlarmModelsRequest, ListAlarmModelsResponse } from "../models/models_0";
import { ListAlarmModels } from "../schemas/schemas_2_List";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAlarmModelsCommand}.
 */
export interface ListAlarmModelsCommandInput extends ListAlarmModelsRequest {}
/**
 * @public
 *
 * The output of {@link ListAlarmModelsCommand}.
 */
export interface ListAlarmModelsCommandOutput extends ListAlarmModelsResponse, __MetadataBearer {}

/**
 * <p>Lists the alarm models that you created. The operation returns only the metadata
 *       associated with each alarm model.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsClient, ListAlarmModelsCommand } from "@aws-sdk/client-iot-events"; // ES Modules import
 * // const { IoTEventsClient, ListAlarmModelsCommand } = require("@aws-sdk/client-iot-events"); // CommonJS import
 * // import type { IoTEventsClientConfig } from "@aws-sdk/client-iot-events";
 * const config = {}; // type is IoTEventsClientConfig
 * const client = new IoTEventsClient(config);
 * const input = { // ListAlarmModelsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListAlarmModelsCommand(input);
 * const response = await client.send(command);
 * // { // ListAlarmModelsResponse
 * //   alarmModelSummaries: [ // AlarmModelSummaries
 * //     { // AlarmModelSummary
 * //       creationTime: new Date("TIMESTAMP"),
 * //       alarmModelDescription: "STRING_VALUE",
 * //       alarmModelName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAlarmModelsCommandInput - {@link ListAlarmModelsCommandInput}
 * @returns {@link ListAlarmModelsCommandOutput}
 * @see {@link ListAlarmModelsCommandInput} for command's `input` shape.
 * @see {@link ListAlarmModelsCommandOutput} for command's `response` shape.
 * @see {@link IoTEventsClientResolvedConfig | config} for IoTEventsClient's `config` shape.
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
 * @throws {@link IoTEventsServiceException}
 * <p>Base exception class for all service exceptions from IoTEvents service.</p>
 *
 *
 * @public
 */
export class ListAlarmModelsCommand extends $Command
  .classBuilder<
    ListAlarmModelsCommandInput,
    ListAlarmModelsCommandOutput,
    IoTEventsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTEventsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("IotColumboService", "ListAlarmModels", {})
  .n("IoTEventsClient", "ListAlarmModelsCommand")
  .sc(ListAlarmModels)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAlarmModelsRequest;
      output: ListAlarmModelsResponse;
    };
    sdk: {
      input: ListAlarmModelsCommandInput;
      output: ListAlarmModelsCommandOutput;
    };
  };
}
