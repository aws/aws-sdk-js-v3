// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StartContactRecordingRequest, StartContactRecordingResponse } from "../models/models_2";
import { StartContactRecording } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartContactRecordingCommand}.
 */
export interface StartContactRecordingCommandInput extends StartContactRecordingRequest {}
/**
 * @public
 *
 * The output of {@link StartContactRecordingCommand}.
 */
export interface StartContactRecordingCommandOutput extends StartContactRecordingResponse, __MetadataBearer {}

/**
 * <p>Starts recording the contact: </p>
 *          <ul>
 *             <li>
 *                <p>If the API is called <i>before</i> the agent joins the call, recording
 *      starts when the agent joins the call.</p>
 *             </li>
 *             <li>
 *                <p>If the API is called <i>after</i> the agent joins the call, recording starts
 *      at the time of the API call.</p>
 *             </li>
 *          </ul>
 *          <p>StartContactRecording is a one-time action. For example, if you use StopContactRecording to
 *    stop recording an ongoing call, you can't use StartContactRecording to restart it. For scenarios
 *    where the recording has started and you want to suspend and resume it, such as when collecting
 *    sensitive information (for example, a credit card number), use SuspendContactRecording and
 *    ResumeContactRecording.</p>
 *          <p>You can use this API to override the recording behavior configured in the <a href="https://docs.aws.amazon.com/connect/latest/adminguide/set-recording-behavior.html">Set recording
 *     behavior</a> block.</p>
 *          <p>Only voice recordings are supported at this time.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, StartContactRecordingCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, StartContactRecordingCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // StartContactRecordingRequest
 *   InstanceId: "STRING_VALUE", // required
 *   ContactId: "STRING_VALUE", // required
 *   InitialContactId: "STRING_VALUE", // required
 *   VoiceRecordingConfiguration: { // VoiceRecordingConfiguration
 *     VoiceRecordingTrack: "FROM_AGENT" || "TO_AGENT" || "ALL",
 *     IvrRecordingTrack: "ALL",
 *   },
 * };
 * const command = new StartContactRecordingCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StartContactRecordingCommandInput - {@link StartContactRecordingCommandInput}
 * @returns {@link StartContactRecordingCommandOutput}
 * @see {@link StartContactRecordingCommandInput} for command's `input` shape.
 * @see {@link StartContactRecordingCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class StartContactRecordingCommand extends $Command
  .classBuilder<
    StartContactRecordingCommandInput,
    StartContactRecordingCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "StartContactRecording", {})
  .n("ConnectClient", "StartContactRecordingCommand")
  .sc(StartContactRecording)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartContactRecordingRequest;
      output: {};
    };
    sdk: {
      input: StartContactRecordingCommandInput;
      output: StartContactRecordingCommandOutput;
    };
  };
}
