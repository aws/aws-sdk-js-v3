// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient";
import { ListFlowExecutionMessagesRequest, ListFlowExecutionMessagesResponse } from "../models/models_0";
import { de_ListFlowExecutionMessagesCommand, se_ListFlowExecutionMessagesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListFlowExecutionMessagesCommand}.
 */
export interface ListFlowExecutionMessagesCommandInput extends ListFlowExecutionMessagesRequest {}
/**
 * @public
 *
 * The output of {@link ListFlowExecutionMessagesCommand}.
 */
export interface ListFlowExecutionMessagesCommandOutput extends ListFlowExecutionMessagesResponse, __MetadataBearer {}

/**
 * <p>Returns a list of objects that contain information about events in a flow execution.</p>
 *
 * @deprecated since: 2022-08-30
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTThingsGraphClient, ListFlowExecutionMessagesCommand } from "@aws-sdk/client-iotthingsgraph"; // ES Modules import
 * // const { IoTThingsGraphClient, ListFlowExecutionMessagesCommand } = require("@aws-sdk/client-iotthingsgraph"); // CommonJS import
 * // import type { IoTThingsGraphClientConfig } from "@aws-sdk/client-iotthingsgraph";
 * const config = {}; // type is IoTThingsGraphClientConfig
 * const client = new IoTThingsGraphClient(config);
 * const input = { // ListFlowExecutionMessagesRequest
 *   flowExecutionId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListFlowExecutionMessagesCommand(input);
 * const response = await client.send(command);
 * // { // ListFlowExecutionMessagesResponse
 * //   messages: [ // FlowExecutionMessages
 * //     { // FlowExecutionMessage
 * //       messageId: "STRING_VALUE",
 * //       eventType: "EXECUTION_STARTED" || "EXECUTION_FAILED" || "EXECUTION_ABORTED" || "EXECUTION_SUCCEEDED" || "STEP_STARTED" || "STEP_FAILED" || "STEP_SUCCEEDED" || "ACTIVITY_SCHEDULED" || "ACTIVITY_STARTED" || "ACTIVITY_FAILED" || "ACTIVITY_SUCCEEDED" || "START_FLOW_EXECUTION_TASK" || "SCHEDULE_NEXT_READY_STEPS_TASK" || "THING_ACTION_TASK" || "THING_ACTION_TASK_FAILED" || "THING_ACTION_TASK_SUCCEEDED" || "ACKNOWLEDGE_TASK_MESSAGE",
 * //       timestamp: new Date("TIMESTAMP"),
 * //       payload: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListFlowExecutionMessagesCommandInput - {@link ListFlowExecutionMessagesCommandInput}
 * @returns {@link ListFlowExecutionMessagesCommandOutput}
 * @see {@link ListFlowExecutionMessagesCommandInput} for command's `input` shape.
 * @see {@link ListFlowExecutionMessagesCommandOutput} for command's `response` shape.
 * @see {@link IoTThingsGraphClientResolvedConfig | config} for IoTThingsGraphClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p></p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p></p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p></p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p></p>
 *
 * @throws {@link IoTThingsGraphServiceException}
 * <p>Base exception class for all service exceptions from IoTThingsGraph service.</p>
 *
 *
 * @public
 */
export class ListFlowExecutionMessagesCommand extends $Command
  .classBuilder<
    ListFlowExecutionMessagesCommandInput,
    ListFlowExecutionMessagesCommandOutput,
    IoTThingsGraphClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTThingsGraphClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("IotThingsGraphFrontEndService", "ListFlowExecutionMessages", {})
  .n("IoTThingsGraphClient", "ListFlowExecutionMessagesCommand")
  .f(void 0, void 0)
  .ser(se_ListFlowExecutionMessagesCommand)
  .de(de_ListFlowExecutionMessagesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListFlowExecutionMessagesRequest;
      output: ListFlowExecutionMessagesResponse;
    };
    sdk: {
      input: ListFlowExecutionMessagesCommandInput;
      output: ListFlowExecutionMessagesCommandOutput;
    };
  };
}
