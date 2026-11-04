// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ResumeContactRecordingRequest, ResumeContactRecordingResponse } from "../models/models_3";
import { ResumeContactRecording$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * When a contact is being recorded, and the recording has been suspended using SuspendContactRecording, this API resumes recording whatever recording is selected in the flow configuration: call, screen, or both. If only call recording or only screen recording is enabled, then it would resume.
 *
 * Voice and screen recordings are supported.
 *
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
 *
 * Request processing failed because of an error or failure with the service.
 *
 * @throws {@link InvalidActiveRegionException} (client fault)
 *
 * This exception occurs when an API request is made to a non-active region in an Amazon Connect instance configured with Amazon Connect Global Resiliency. For example, if the active region is US West (Oregon) and a request is made to US East (N. Virginia), the exception will be returned.
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
export class ResumeContactRecordingCommand extends command<ResumeContactRecordingCommandInput, ResumeContactRecordingCommandOutput>(
  _ep0,
  _mw0,
  "ResumeContactRecording",
  ResumeContactRecording$
) {
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
