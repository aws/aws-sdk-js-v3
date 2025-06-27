// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ChimeSDKMediaPipelinesClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ChimeSDKMediaPipelinesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListMediaPipelineKinesisVideoStreamPoolsRequest,
  ListMediaPipelineKinesisVideoStreamPoolsResponse,
  ListMediaPipelineKinesisVideoStreamPoolsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  de_ListMediaPipelineKinesisVideoStreamPoolsCommand,
  se_ListMediaPipelineKinesisVideoStreamPoolsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListMediaPipelineKinesisVideoStreamPoolsCommand}.
 */
export interface ListMediaPipelineKinesisVideoStreamPoolsCommandInput
  extends ListMediaPipelineKinesisVideoStreamPoolsRequest {}
/**
 * @public
 *
 * The output of {@link ListMediaPipelineKinesisVideoStreamPoolsCommand}.
 */
export interface ListMediaPipelineKinesisVideoStreamPoolsCommandOutput
  extends ListMediaPipelineKinesisVideoStreamPoolsResponse,
    __MetadataBearer {}

/**
 * <p>Lists the video stream pools in the media pipeline.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMediaPipelinesClient, ListMediaPipelineKinesisVideoStreamPoolsCommand } from "@aws-sdk/client-chime-sdk-media-pipelines"; // ES Modules import
 * // const { ChimeSDKMediaPipelinesClient, ListMediaPipelineKinesisVideoStreamPoolsCommand } = require("@aws-sdk/client-chime-sdk-media-pipelines"); // CommonJS import
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
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *  <p>The request exceeds the resource limit.</p>
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
export class ListMediaPipelineKinesisVideoStreamPoolsCommand extends $Command
  .classBuilder<
    ListMediaPipelineKinesisVideoStreamPoolsCommandInput,
    ListMediaPipelineKinesisVideoStreamPoolsCommandOutput,
    ChimeSDKMediaPipelinesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeSDKMediaPipelinesClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ChimeSDKMediaPipelinesService", "ListMediaPipelineKinesisVideoStreamPools", {})
  .n("ChimeSDKMediaPipelinesClient", "ListMediaPipelineKinesisVideoStreamPoolsCommand")
  .f(void 0, ListMediaPipelineKinesisVideoStreamPoolsResponseFilterSensitiveLog)
  .ser(se_ListMediaPipelineKinesisVideoStreamPoolsCommand)
  .de(de_ListMediaPipelineKinesisVideoStreamPoolsCommand)
  .build() {
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
