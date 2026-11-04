// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetVoiceToneAnalysisTaskRequest, GetVoiceToneAnalysisTaskResponse } from "../models/models_0";
import { GetVoiceToneAnalysisTask$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetVoiceToneAnalysisTaskCommand}.
 */
export interface GetVoiceToneAnalysisTaskCommandInput extends GetVoiceToneAnalysisTaskRequest {}
/**
 * @public
 *
 * The output of {@link GetVoiceToneAnalysisTaskCommand}.
 */
export interface GetVoiceToneAnalysisTaskCommandOutput extends GetVoiceToneAnalysisTaskResponse, __MetadataBearer {}

/**
 * Retrieves the details of a voice tone analysis task.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMediaPipelinesClient, GetVoiceToneAnalysisTaskCommand } from "@aws-sdk/client-chime-sdk-media-pipelines"; // ES Modules import
 * // const { ChimeSDKMediaPipelinesClient, GetVoiceToneAnalysisTaskCommand } = require("@aws-sdk/client-chime-sdk-media-pipelines"); // CommonJS import
 * // import type { ChimeSDKMediaPipelinesClientConfig } from "@aws-sdk/client-chime-sdk-media-pipelines";
 * const config = {}; // type is ChimeSDKMediaPipelinesClientConfig
 * const client = new ChimeSDKMediaPipelinesClient(config);
 * const input = { // GetVoiceToneAnalysisTaskRequest
 *   Identifier: "STRING_VALUE", // required
 *   VoiceToneAnalysisTaskId: "STRING_VALUE", // required
 * };
 * const command = new GetVoiceToneAnalysisTaskCommand(input);
 * const response = await client.send(command);
 * // { // GetVoiceToneAnalysisTaskResponse
 * //   VoiceToneAnalysisTask: { // VoiceToneAnalysisTask
 * //     VoiceToneAnalysisTaskId: "STRING_VALUE",
 * //     VoiceToneAnalysisTaskStatus: "NotStarted" || "Initializing" || "InProgress" || "Failed" || "Stopping" || "Stopped",
 * //     CreatedTimestamp: new Date("TIMESTAMP"),
 * //     UpdatedTimestamp: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetVoiceToneAnalysisTaskCommandInput - {@link GetVoiceToneAnalysisTaskCommandInput}
 * @returns {@link GetVoiceToneAnalysisTaskCommandOutput}
 * @see {@link GetVoiceToneAnalysisTaskCommandInput} for command's `input` shape.
 * @see {@link GetVoiceToneAnalysisTaskCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKMediaPipelinesClientResolvedConfig | config} for ChimeSDKMediaPipelinesClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The input parameters don't match the service's restrictions.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * The client is permanently forbidden from making the request.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * One or more of the resources in the request does not exist in the system.
 *
 * @throws {@link ServiceFailureException} (server fault)
 *
 * The service encountered an unexpected error.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service is currently unavailable.
 *
 * @throws {@link ThrottledClientException} (client fault)
 *
 * The client exceeded its request rate limit.
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *
 * The client is not currently authorized to make the request.
 *
 * @throws {@link ChimeSDKMediaPipelinesServiceException}
 *
 * Base exception class for all service exceptions from ChimeSDKMediaPipelines service.
 *
 * @public
 */
export class GetVoiceToneAnalysisTaskCommand extends command<GetVoiceToneAnalysisTaskCommandInput, GetVoiceToneAnalysisTaskCommandOutput>(
  _ep0,
  _mw0,
  "GetVoiceToneAnalysisTask",
  GetVoiceToneAnalysisTask$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetVoiceToneAnalysisTaskRequest;
      output: GetVoiceToneAnalysisTaskResponse;
    };
    sdk: {
      input: GetVoiceToneAnalysisTaskCommandInput;
      output: GetVoiceToneAnalysisTaskCommandOutput;
    };
  };
}
