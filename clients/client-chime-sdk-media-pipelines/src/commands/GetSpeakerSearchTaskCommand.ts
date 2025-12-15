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
import type { GetSpeakerSearchTaskRequest, GetSpeakerSearchTaskResponse } from "../models/models_0";
import { GetSpeakerSearchTask$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSpeakerSearchTaskCommand}.
 */
export interface GetSpeakerSearchTaskCommandInput extends GetSpeakerSearchTaskRequest {}
/**
 * @public
 *
 * The output of {@link GetSpeakerSearchTaskCommand}.
 */
export interface GetSpeakerSearchTaskCommandOutput extends GetSpeakerSearchTaskResponse, __MetadataBearer {}

/**
 * <p>Retrieves the details of the specified speaker search task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMediaPipelinesClient, GetSpeakerSearchTaskCommand } from "@aws-sdk/client-chime-sdk-media-pipelines"; // ES Modules import
 * // const { ChimeSDKMediaPipelinesClient, GetSpeakerSearchTaskCommand } = require("@aws-sdk/client-chime-sdk-media-pipelines"); // CommonJS import
 * // import type { ChimeSDKMediaPipelinesClientConfig } from "@aws-sdk/client-chime-sdk-media-pipelines";
 * const config = {}; // type is ChimeSDKMediaPipelinesClientConfig
 * const client = new ChimeSDKMediaPipelinesClient(config);
 * const input = { // GetSpeakerSearchTaskRequest
 *   Identifier: "STRING_VALUE", // required
 *   SpeakerSearchTaskId: "STRING_VALUE", // required
 * };
 * const command = new GetSpeakerSearchTaskCommand(input);
 * const response = await client.send(command);
 * // { // GetSpeakerSearchTaskResponse
 * //   SpeakerSearchTask: { // SpeakerSearchTask
 * //     SpeakerSearchTaskId: "STRING_VALUE",
 * //     SpeakerSearchTaskStatus: "NotStarted" || "Initializing" || "InProgress" || "Failed" || "Stopping" || "Stopped",
 * //     CreatedTimestamp: new Date("TIMESTAMP"),
 * //     UpdatedTimestamp: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetSpeakerSearchTaskCommandInput - {@link GetSpeakerSearchTaskCommandInput}
 * @returns {@link GetSpeakerSearchTaskCommandOutput}
 * @see {@link GetSpeakerSearchTaskCommandInput} for command's `input` shape.
 * @see {@link GetSpeakerSearchTaskCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKMediaPipelinesClientResolvedConfig | config} for ChimeSDKMediaPipelinesClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
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
export class GetSpeakerSearchTaskCommand extends $Command
  .classBuilder<
    GetSpeakerSearchTaskCommandInput,
    GetSpeakerSearchTaskCommandOutput,
    ChimeSDKMediaPipelinesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeSDKMediaPipelinesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ChimeSDKMediaPipelinesService", "GetSpeakerSearchTask", {})
  .n("ChimeSDKMediaPipelinesClient", "GetSpeakerSearchTaskCommand")
  .sc(GetSpeakerSearchTask$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSpeakerSearchTaskRequest;
      output: GetSpeakerSearchTaskResponse;
    };
    sdk: {
      input: GetSpeakerSearchTaskCommandInput;
      output: GetSpeakerSearchTaskCommandOutput;
    };
  };
}
