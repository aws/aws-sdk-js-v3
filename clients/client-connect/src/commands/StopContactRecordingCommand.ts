// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StopContactRecordingRequest, StopContactRecordingResponse } from "../models/models_3";
import { StopContactRecording } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopContactRecordingCommand}.
 */
export interface StopContactRecordingCommandInput extends StopContactRecordingRequest {}
/**
 * @public
 *
 * The output of {@link StopContactRecordingCommand}.
 */
export interface StopContactRecordingCommandOutput extends StopContactRecordingResponse, __MetadataBearer {}

/**
 * <p>Stops recording a call when a contact is being recorded. StopContactRecording is a one-time action. If you use
 *    StopContactRecording to stop recording an ongoing call, you can't use StartContactRecording to restart it. For
 *    scenarios where the recording has started and you want to suspend it for sensitive information (for example, to
 *    collect a credit card number), and then restart it, use SuspendContactRecording and ResumeContactRecording.</p>
 *          <p>Only voice recordings are supported at this time.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, StopContactRecordingCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, StopContactRecordingCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // StopContactRecordingRequest
 *   InstanceId: "STRING_VALUE", // required
 *   ContactId: "STRING_VALUE", // required
 *   InitialContactId: "STRING_VALUE", // required
 *   ContactRecordingType: "AGENT" || "IVR" || "SCREEN",
 * };
 * const command = new StopContactRecordingCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopContactRecordingCommandInput - {@link StopContactRecordingCommandInput}
 * @returns {@link StopContactRecordingCommandOutput}
 * @see {@link StopContactRecordingCommandInput} for command's `input` shape.
 * @see {@link StopContactRecordingCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class StopContactRecordingCommand extends $Command
  .classBuilder<
    StopContactRecordingCommandInput,
    StopContactRecordingCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "StopContactRecording", {})
  .n("ConnectClient", "StopContactRecordingCommand")
  .sc(StopContactRecording)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopContactRecordingRequest;
      output: {};
    };
    sdk: {
      input: StopContactRecordingCommandInput;
      output: StopContactRecordingCommandOutput;
    };
  };
}
