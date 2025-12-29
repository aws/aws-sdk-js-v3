// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { SuspendContactRecordingRequest, SuspendContactRecordingResponse } from "../models/models_3";
import { SuspendContactRecording$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SuspendContactRecordingCommand}.
 */
export interface SuspendContactRecordingCommandInput extends SuspendContactRecordingRequest {}
/**
 * @public
 *
 * The output of {@link SuspendContactRecordingCommand}.
 */
export interface SuspendContactRecordingCommandOutput extends SuspendContactRecordingResponse, __MetadataBearer {}

/**
 * <p>When a contact is being recorded, this API suspends recording whatever is selected in the flow configuration:
 *    call (IVR or agent), screen, or both. If only call recording or only screen recording is enabled, then it would be
 *    suspended. For example, you might suspend the screen recording while collecting sensitive information, such as a
 *    credit card number. Then use <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_ResumeContactRecording.html">ResumeContactRecording</a> to restart
 *    recording the screen.</p>
 *          <p>The period of time that the recording is suspended is filled with silence in the final recording. </p>
 *          <p> Voice (IVR, agent) and screen recordings are supported.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, SuspendContactRecordingCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, SuspendContactRecordingCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // SuspendContactRecordingRequest
 *   InstanceId: "STRING_VALUE", // required
 *   ContactId: "STRING_VALUE", // required
 *   InitialContactId: "STRING_VALUE", // required
 *   ContactRecordingType: "AGENT" || "IVR" || "SCREEN",
 * };
 * const command = new SuspendContactRecordingCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SuspendContactRecordingCommandInput - {@link SuspendContactRecordingCommandInput}
 * @returns {@link SuspendContactRecordingCommandOutput}
 * @see {@link SuspendContactRecordingCommandInput} for command's `input` shape.
 * @see {@link SuspendContactRecordingCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidActiveRegionException} (client fault)
 *  <p>This exception occurs when an API request is made to a non-active region in an Amazon Connect instance configured with Amazon Connect Global Resiliency. For example, if the active region is US West (Oregon) and a request is made to US East (N. Virginia), the exception will be returned.</p>
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
export class SuspendContactRecordingCommand extends $Command
  .classBuilder<
    SuspendContactRecordingCommandInput,
    SuspendContactRecordingCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "SuspendContactRecording", {})
  .n("ConnectClient", "SuspendContactRecordingCommand")
  .sc(SuspendContactRecording$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SuspendContactRecordingRequest;
      output: {};
    };
    sdk: {
      input: SuspendContactRecordingCommandInput;
      output: SuspendContactRecordingCommandOutput;
    };
  };
}
