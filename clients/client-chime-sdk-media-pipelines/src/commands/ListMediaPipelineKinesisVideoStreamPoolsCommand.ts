// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListMediaPipelineKinesisVideoStreamPoolsRequest,
  ListMediaPipelineKinesisVideoStreamPoolsResponse,
} from "../models/models_0";
import { ListMediaPipelineKinesisVideoStreamPools$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListMediaPipelineKinesisVideoStreamPoolsCommand}.
 */
export interface ListMediaPipelineKinesisVideoStreamPoolsCommandInput extends ListMediaPipelineKinesisVideoStreamPoolsRequest {}
/**
 * @public
 *
 * The output of {@link ListMediaPipelineKinesisVideoStreamPoolsCommand}.
 */
export interface ListMediaPipelineKinesisVideoStreamPoolsCommandOutput extends ListMediaPipelineKinesisVideoStreamPoolsResponse, __MetadataBearer {}

/**
 * Lists the video stream pools in the media pipeline.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMediaPipelinesClient, ListMediaPipelineKinesisVideoStreamPoolsCommand } from "@aws-sdk/client-chime-sdk-media-pipelines"; // ES Modules import
 * // const { ChimeSDKMediaPipelinesClient, ListMediaPipelineKinesisVideoStreamPoolsCommand } = require("@aws-sdk/client-chime-sdk-media-pipelines"); // CommonJS import
 * // import type { ChimeSDKMediaPipelinesClientConfig } from "@aws-sdk/client-chime-sdk-media-pipelines";
 * const config = {}; // type is ChimeSDKMediaPipelinesClientConfig
 * const client = new ChimeSDKMediaPipelinesClient(config);
 * const input = { // ListMediaPipelineKinesisVideoStreamPoolsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListMediaPipelineKinesisVideoStreamPoolsCommand(input);
 * const response = await client.send(command);
 * // { // ListMediaPipelineKinesisVideoStreamPoolsResponse
 * //   KinesisVideoStreamPools: [ // KinesisVideoStreamPoolSummaryList
 * //     { // KinesisVideoStreamPoolSummary
 * //       PoolName: "STRING_VALUE",
 * //       PoolId: "STRING_VALUE",
 * //       PoolArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListMediaPipelineKinesisVideoStreamPoolsCommandInput - {@link ListMediaPipelineKinesisVideoStreamPoolsCommandInput}
 * @returns {@link ListMediaPipelineKinesisVideoStreamPoolsCommandOutput}
 * @see {@link ListMediaPipelineKinesisVideoStreamPoolsCommandInput} for command's `input` shape.
 * @see {@link ListMediaPipelineKinesisVideoStreamPoolsCommandOutput} for command's `response` shape.
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
export class ListMediaPipelineKinesisVideoStreamPoolsCommand extends command<ListMediaPipelineKinesisVideoStreamPoolsCommandInput, ListMediaPipelineKinesisVideoStreamPoolsCommandOutput>(
  _ep0,
  _mw0,
  "ListMediaPipelineKinesisVideoStreamPools",
  ListMediaPipelineKinesisVideoStreamPools$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListMediaPipelineKinesisVideoStreamPoolsRequest;
      output: ListMediaPipelineKinesisVideoStreamPoolsResponse;
    };
    sdk: {
      input: ListMediaPipelineKinesisVideoStreamPoolsCommandInput;
      output: ListMediaPipelineKinesisVideoStreamPoolsCommandOutput;
    };
  };
}
