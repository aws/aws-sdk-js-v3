// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetSpeakerSearchTaskRequest, GetSpeakerSearchTaskResponse } from "../models/models_0";
import { GetSpeakerSearchTask$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Retrieves the details of the specified speaker search task.
 *
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
export class GetSpeakerSearchTaskCommand extends command<GetSpeakerSearchTaskCommandInput, GetSpeakerSearchTaskCommandOutput>(
  _ep0,
  _mw0,
  "GetSpeakerSearchTask",
  GetSpeakerSearchTask$
) {
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
