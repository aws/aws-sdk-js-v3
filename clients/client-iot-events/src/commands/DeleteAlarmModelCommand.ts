// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTEventsClient";
import { DeleteAlarmModelRequest, DeleteAlarmModelResponse } from "../models/models_0";
import { de_DeleteAlarmModelCommand, se_DeleteAlarmModelCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteAlarmModelCommand}.
 */
export interface DeleteAlarmModelCommandInput extends DeleteAlarmModelRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAlarmModelCommand}.
 */
export interface DeleteAlarmModelCommandOutput extends DeleteAlarmModelResponse, __MetadataBearer {}

/**
 * <p>Deletes an alarm model. Any alarm instances that were created based on this alarm model
 *       are also deleted. This action can't be undone.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsClient, DeleteAlarmModelCommand } from "@aws-sdk/client-iot-events"; // ES Modules import
 * // const { IoTEventsClient, DeleteAlarmModelCommand } = require("@aws-sdk/client-iot-events"); // CommonJS import
 * const client = new IoTEventsClient(config);
 * const input = { // DeleteAlarmModelRequest
 *   alarmModelName: "STRING_VALUE", // required
 * };
 * const command = new DeleteAlarmModelCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAlarmModelCommandInput - {@link DeleteAlarmModelCommandInput}
 * @returns {@link DeleteAlarmModelCommandOutput}
 * @see {@link DeleteAlarmModelCommandInput} for command's `input` shape.
 * @see {@link DeleteAlarmModelCommandOutput} for command's `response` shape.
 * @see {@link IoTEventsClientResolvedConfig | config} for IoTEventsClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request was invalid.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The resource is in use.</p>
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
 * @public
 */
export class DeleteAlarmModelCommand extends $Command
  .classBuilder<
    DeleteAlarmModelCommandInput,
    DeleteAlarmModelCommandOutput,
    IoTEventsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: IoTEventsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("IotColumboService", "DeleteAlarmModel", {})
  .n("IoTEventsClient", "DeleteAlarmModelCommand")
  .f(void 0, void 0)
  .ser(se_DeleteAlarmModelCommand)
  .de(de_DeleteAlarmModelCommand)
  .build() {}
