// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChimeSDKVoiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKVoiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StopVoiceToneAnalysisTaskRequest } from "../models/models_0";
import { de_StopVoiceToneAnalysisTaskCommand, se_StopVoiceToneAnalysisTaskCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopVoiceToneAnalysisTaskCommand}.
 */
export interface StopVoiceToneAnalysisTaskCommandInput extends StopVoiceToneAnalysisTaskRequest {}
/**
 * @public
 *
 * The output of {@link StopVoiceToneAnalysisTaskCommand}.
 */
export interface StopVoiceToneAnalysisTaskCommandOutput extends __MetadataBearer {}

/**
 * <p>Stops a voice tone analysis task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, StopVoiceToneAnalysisTaskCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, StopVoiceToneAnalysisTaskCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
 * const client = new ChimeSDKVoiceClient(config);
 * const input = { // StopVoiceToneAnalysisTaskRequest
 *   VoiceConnectorId: "STRING_VALUE", // required
 *   VoiceToneAnalysisTaskId: "STRING_VALUE", // required
 * };
 * const command = new StopVoiceToneAnalysisTaskCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopVoiceToneAnalysisTaskCommandInput - {@link StopVoiceToneAnalysisTaskCommandInput}
 * @returns {@link StopVoiceToneAnalysisTaskCommandOutput}
 * @see {@link StopVoiceToneAnalysisTaskCommandInput} for command's `input` shape.
 * @see {@link StopVoiceToneAnalysisTaskCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKVoiceClientResolvedConfig | config} for ChimeSDKVoiceClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have the permissions needed to run this action.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Multiple instances of the same request were made simultaneously.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The requested resource couldn't be found.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The service encountered an unexpected error.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ThrottledClientException} (client fault)
 *  <p>The number of customer requests exceeds the request rate limit.</p>
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *  <p>The client isn't authorized to request a resource.</p>
 *
 * @throws {@link UnprocessableEntityException} (client fault)
 *  <p>A well-formed request couldn't be followed due to semantic errors.</p>
 *
 * @throws {@link ChimeSDKVoiceServiceException}
 * <p>Base exception class for all service exceptions from ChimeSDKVoice service.</p>
 *
 *
 * @public
 */
export class StopVoiceToneAnalysisTaskCommand extends $Command
  .classBuilder<
    StopVoiceToneAnalysisTaskCommandInput,
    StopVoiceToneAnalysisTaskCommandOutput,
    ChimeSDKVoiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeSDKVoiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ChimeSDKTelephonyService", "StopVoiceToneAnalysisTask", {})
  .n("ChimeSDKVoiceClient", "StopVoiceToneAnalysisTaskCommand")
  .f(void 0, void 0)
  .ser(se_StopVoiceToneAnalysisTaskCommand)
  .de(de_StopVoiceToneAnalysisTaskCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopVoiceToneAnalysisTaskRequest;
      output: {};
    };
    sdk: {
      input: StopVoiceToneAnalysisTaskCommandInput;
      output: StopVoiceToneAnalysisTaskCommandOutput;
    };
  };
}
