// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTEventsClient";
import { ListAlarmModelVersionsRequest, ListAlarmModelVersionsResponse } from "../models/models_0";
import { de_ListAlarmModelVersionsCommand, se_ListAlarmModelVersionsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAlarmModelVersionsCommand}.
 */
export interface ListAlarmModelVersionsCommandInput extends ListAlarmModelVersionsRequest {}
/**
 * @public
 *
 * The output of {@link ListAlarmModelVersionsCommand}.
 */
export interface ListAlarmModelVersionsCommandOutput extends ListAlarmModelVersionsResponse, __MetadataBearer {}

/**
 * <p>Lists all the versions of an alarm model. The operation returns only the metadata
 *       associated with each alarm model version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsClient, ListAlarmModelVersionsCommand } from "@aws-sdk/client-iot-events"; // ES Modules import
 * // const { IoTEventsClient, ListAlarmModelVersionsCommand } = require("@aws-sdk/client-iot-events"); // CommonJS import
 * const client = new IoTEventsClient(config);
 * const input = { // ListAlarmModelVersionsRequest
 *   alarmModelName: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListAlarmModelVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListAlarmModelVersionsResponse
 * //   alarmModelVersionSummaries: [ // AlarmModelVersionSummaries
 * //     { // AlarmModelVersionSummary
 * //       alarmModelName: "STRING_VALUE",
 * //       alarmModelArn: "STRING_VALUE",
 * //       alarmModelVersion: "STRING_VALUE",
 * //       roleArn: "STRING_VALUE",
 * //       creationTime: new Date("TIMESTAMP"),
 * //       lastUpdateTime: new Date("TIMESTAMP"),
 * //       status: "ACTIVE" || "ACTIVATING" || "INACTIVE" || "FAILED",
 * //       statusMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAlarmModelVersionsCommandInput - {@link ListAlarmModelVersionsCommandInput}
 * @returns {@link ListAlarmModelVersionsCommandOutput}
 * @see {@link ListAlarmModelVersionsCommandInput} for command's `input` shape.
 * @see {@link ListAlarmModelVersionsCommandOutput} for command's `response` shape.
 * @see {@link IoTEventsClientResolvedConfig | config} for IoTEventsClient's `config` shape.
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
 * @throws {@link IoTEventsServiceException}
 * <p>Base exception class for all service exceptions from IoTEvents service.</p>
 *
 *
 * @public
 */
export class ListAlarmModelVersionsCommand extends $Command
  .classBuilder<
    ListAlarmModelVersionsCommandInput,
    ListAlarmModelVersionsCommandOutput,
    IoTEventsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTEventsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("IotColumboService", "ListAlarmModelVersions", {})
  .n("IoTEventsClient", "ListAlarmModelVersionsCommand")
  .f(void 0, void 0)
  .ser(se_ListAlarmModelVersionsCommand)
  .de(de_ListAlarmModelVersionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAlarmModelVersionsRequest;
      output: ListAlarmModelVersionsResponse;
    };
    sdk: {
      input: ListAlarmModelVersionsCommandInput;
      output: ListAlarmModelVersionsCommandOutput;
    };
  };
}
