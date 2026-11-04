// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartContactRecordingRequest, StartContactRecordingResponse } from "../models/models_3";
import { StartContactRecording$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Starts recording the contact:
 *
 * - If the API is called *before* the agent joins the call, recording starts when the agent joins the call.
 * - If the API is called *after* the agent joins the call, recording starts at the time of the API call.
 *
 * StartContactRecording is a one-time action. For example, if you use StopContactRecording to stop recording an ongoing call, you can't use StartContactRecording to restart it. For scenarios where the recording has started and you want to suspend and resume it, such as when collecting sensitive information (for example, a credit card number), use SuspendContactRecording and ResumeContactRecording.
 *
 * You can use this API to override the recording behavior configured in the [Set recording behavior](https://docs.aws.amazon.com/connect/latest/adminguide/set-recording-behavior.html) block.
 *
 * Only voice recordings are supported at this time.
 *
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
 *
 * Request processing failed because of an error or failure with the service.
 *
 * @throws {@link InvalidActiveRegionException} (client fault)
 *
 * This exception occurs when an API request is made to a non-active region in an Amazon Connect instance configured with Amazon Connect Global Resiliency. For example, if the active region is US West (Oregon) and a request is made to US East (N. Virginia), the exception will be returned.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more of the specified parameters are not valid.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link ConnectServiceException}
 *
 * Base exception class for all service exceptions from Connect service.
 *
 * @public
 */
export class StartContactRecordingCommand extends command<StartContactRecordingCommandInput, StartContactRecordingCommandOutput>(
  _ep0,
  _mw0,
  "StartContactRecording",
  StartContactRecording$
) {
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
