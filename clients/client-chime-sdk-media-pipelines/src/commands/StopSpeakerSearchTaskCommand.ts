// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  ChimeSDKMediaPipelinesClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ChimeSDKMediaPipelinesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { StopSpeakerSearchTaskRequest } from "../models/models_0";
import { StopSpeakerSearchTask$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopSpeakerSearchTaskCommand}.
 */
export interface StopSpeakerSearchTaskCommandInput extends StopSpeakerSearchTaskRequest {}
/**
 * @public
 *
 * The output of {@link StopSpeakerSearchTaskCommand}.
 */
export interface StopSpeakerSearchTaskCommandOutput extends __MetadataBearer {}

/**
 * <p>Stops a speaker search task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMediaPipelinesClient, StopSpeakerSearchTaskCommand } from "@aws-sdk/client-chime-sdk-media-pipelines"; // ES Modules import
 * // const { ChimeSDKMediaPipelinesClient, StopSpeakerSearchTaskCommand } = require("@aws-sdk/client-chime-sdk-media-pipelines"); // CommonJS import
 * // import type { ChimeSDKMediaPipelinesClientConfig } from "@aws-sdk/client-chime-sdk-media-pipelines";
 * const config = {}; // type is ChimeSDKMediaPipelinesClientConfig
 * const client = new ChimeSDKMediaPipelinesClient(config);
 * const input = { // StopSpeakerSearchTaskRequest
 *   Identifier: "STRING_VALUE", // required
 *   SpeakerSearchTaskId: "STRING_VALUE", // required
 * };
 * const command = new StopSpeakerSearchTaskCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopSpeakerSearchTaskCommandInput - {@link StopSpeakerSearchTaskCommandInput}
 * @returns {@link StopSpeakerSearchTaskCommandOutput}
 * @see {@link StopSpeakerSearchTaskCommandInput} for command's `input` shape.
 * @see {@link StopSpeakerSearchTaskCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKMediaPipelinesClientResolvedConfig | config} for ChimeSDKMediaPipelinesClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be processed because of conflict in the current state of the
 *          resource.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>One or more of the resources in the request does not exist in the system.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The service encountered an unexpected error.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ThrottledClientException} (client fault)
 *  <p>The client exceeded its request rate limit.</p>
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *  <p>The client is not currently authorized to make the request.</p>
 *
 * @throws {@link ChimeSDKMediaPipelinesServiceException}
 * <p>Base exception class for all service exceptions from ChimeSDKMediaPipelines service.</p>
 *
 *
 * @public
 */
export class StopSpeakerSearchTaskCommand extends $Command
  .classBuilder<
    StopSpeakerSearchTaskCommandInput,
    StopSpeakerSearchTaskCommandOutput,
    ChimeSDKMediaPipelinesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeSDKMediaPipelinesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ChimeSDKMediaPipelinesService", "StopSpeakerSearchTask", {})
  .n("ChimeSDKMediaPipelinesClient", "StopSpeakerSearchTaskCommand")
  .sc(StopSpeakerSearchTask$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopSpeakerSearchTaskRequest;
      output: {};
    };
    sdk: {
      input: StopSpeakerSearchTaskCommandInput;
      output: StopSpeakerSearchTaskCommandOutput;
    };
  };
}
