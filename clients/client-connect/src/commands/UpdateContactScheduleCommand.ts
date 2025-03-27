// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateContactScheduleRequest, UpdateContactScheduleResponse } from "../models/models_2";
import { de_UpdateContactScheduleCommand, se_UpdateContactScheduleCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateContactScheduleCommand}.
 */
export interface UpdateContactScheduleCommandInput extends UpdateContactScheduleRequest {}
/**
 * @public
 *
 * The output of {@link UpdateContactScheduleCommand}.
 */
export interface UpdateContactScheduleCommandOutput extends UpdateContactScheduleResponse, __MetadataBearer {}

/**
 * <p>Updates the scheduled time of a task contact that is already scheduled.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateContactScheduleCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateContactScheduleCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // UpdateContactScheduleRequest
 *   InstanceId: "STRING_VALUE", // required
 *   ContactId: "STRING_VALUE", // required
 *   ScheduledTime: new Date("TIMESTAMP"), // required
 * };
 * const command = new UpdateContactScheduleCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateContactScheduleCommandInput - {@link UpdateContactScheduleCommandInput}
 * @returns {@link UpdateContactScheduleCommandOutput}
 * @see {@link UpdateContactScheduleCommandInput} for command's `input` shape.
 * @see {@link UpdateContactScheduleCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The allowed limit for the resource has been exceeded.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class UpdateContactScheduleCommand extends $Command
  .classBuilder<
    UpdateContactScheduleCommandInput,
    UpdateContactScheduleCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonConnectService", "UpdateContactSchedule", {})
  .n("ConnectClient", "UpdateContactScheduleCommand")
  .f(void 0, void 0)
  .ser(se_UpdateContactScheduleCommand)
  .de(de_UpdateContactScheduleCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateContactScheduleRequest;
      output: {};
    };
    sdk: {
      input: UpdateContactScheduleCommandInput;
      output: UpdateContactScheduleCommandOutput;
    };
  };
}
