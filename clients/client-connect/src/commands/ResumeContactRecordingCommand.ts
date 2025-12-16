// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ResumeContactRecordingRequest, ResumeContactRecordingResponse } from "../models/models_2";
import { ResumeContactRecording$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ResumeContactRecordingCommand}.
 */
export interface ResumeContactRecordingCommandInput extends ResumeContactRecordingRequest {}
/**
 * @public
 *
 * The output of {@link ResumeContactRecordingCommand}.
 */
export interface ResumeContactRecordingCommandOutput extends ResumeContactRecordingResponse, __MetadataBearer {}

/**
 * <p>When a contact is being recorded, and the recording has been suspended using SuspendContactRecording, this API
 *    resumes recording whatever recording is selected in the flow configuration: call, screen, or both. If only call
 *    recording or only screen recording is enabled, then it would resume.</p>
 *          <p>Voice and screen recordings are supported.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ResumeContactRecordingCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ResumeContactRecordingCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // ResumeContactRecordingRequest
 *   InstanceId: "STRING_VALUE", // required
 *   ContactId: "STRING_VALUE", // required
 *   InitialContactId: "STRING_VALUE", // required
 *   ContactRecordingType: "AGENT" || "IVR" || "SCREEN",
 * };
 * const command = new ResumeContactRecordingCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ResumeContactRecordingCommandInput - {@link ResumeContactRecordingCommandInput}
 * @returns {@link ResumeContactRecordingCommandOutput}
 * @see {@link ResumeContactRecordingCommandInput} for command's `input` shape.
 * @see {@link ResumeContactRecordingCommandOutput} for command's `response` shape.
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
export class ResumeContactRecordingCommand extends $Command
  .classBuilder<
    ResumeContactRecordingCommandInput,
    ResumeContactRecordingCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "ResumeContactRecording", {})
  .n("ConnectClient", "ResumeContactRecordingCommand")
  .sc(ResumeContactRecording$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ResumeContactRecordingRequest;
      output: {};
    };
    sdk: {
      input: ResumeContactRecordingCommandInput;
      output: ResumeContactRecordingCommandOutput;
    };
  };
}
