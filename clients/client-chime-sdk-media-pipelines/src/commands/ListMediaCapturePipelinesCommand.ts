// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListMediaCapturePipelinesRequest, ListMediaCapturePipelinesResponse } from "../models/models_0";
import { ListMediaCapturePipelines$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListMediaCapturePipelinesCommand}.
 */
export interface ListMediaCapturePipelinesCommandInput extends ListMediaCapturePipelinesRequest {}
/**
 * @public
 *
 * The output of {@link ListMediaCapturePipelinesCommand}.
 */
export interface ListMediaCapturePipelinesCommandOutput extends ListMediaCapturePipelinesResponse, __MetadataBearer {}

/**
 * Returns a list of media pipelines.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMediaPipelinesClient, ListMediaCapturePipelinesCommand } from "@aws-sdk/client-chime-sdk-media-pipelines"; // ES Modules import
 * // const { ChimeSDKMediaPipelinesClient, ListMediaCapturePipelinesCommand } = require("@aws-sdk/client-chime-sdk-media-pipelines"); // CommonJS import
 * // import type { ChimeSDKMediaPipelinesClientConfig } from "@aws-sdk/client-chime-sdk-media-pipelines";
 * const config = {}; // type is ChimeSDKMediaPipelinesClientConfig
 * const client = new ChimeSDKMediaPipelinesClient(config);
 * const input = { // ListMediaCapturePipelinesRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListMediaCapturePipelinesCommand(input);
 * const response = await client.send(command);
 * // { // ListMediaCapturePipelinesResponse
 * //   MediaCapturePipelines: [ // MediaCapturePipelineSummaryList
 * //     { // MediaCapturePipelineSummary
 * //       MediaPipelineId: "STRING_VALUE",
 * //       MediaPipelineArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListMediaCapturePipelinesCommandInput - {@link ListMediaCapturePipelinesCommandInput}
 * @returns {@link ListMediaCapturePipelinesCommandOutput}
 * @see {@link ListMediaCapturePipelinesCommandInput} for command's `input` shape.
 * @see {@link ListMediaCapturePipelinesCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceLimitExceededException} (client fault)
 *
 * The request exceeds the resource limit.
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
export class ListMediaCapturePipelinesCommand extends command<ListMediaCapturePipelinesCommandInput, ListMediaCapturePipelinesCommandOutput>(
  _ep0,
  _mw0,
  "ListMediaCapturePipelines",
  ListMediaCapturePipelines$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListMediaCapturePipelinesRequest;
      output: ListMediaCapturePipelinesResponse;
    };
    sdk: {
      input: ListMediaCapturePipelinesCommandInput;
      output: ListMediaCapturePipelinesCommandOutput;
    };
  };
}
