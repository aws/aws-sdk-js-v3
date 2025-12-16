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
import type {
  GetMediaPipelineKinesisVideoStreamPoolRequest,
  GetMediaPipelineKinesisVideoStreamPoolResponse,
} from "../models/models_0";
import { GetMediaPipelineKinesisVideoStreamPool$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetMediaPipelineKinesisVideoStreamPoolCommand}.
 */
export interface GetMediaPipelineKinesisVideoStreamPoolCommandInput
  extends GetMediaPipelineKinesisVideoStreamPoolRequest {}
/**
 * @public
 *
 * The output of {@link GetMediaPipelineKinesisVideoStreamPoolCommand}.
 */
export interface GetMediaPipelineKinesisVideoStreamPoolCommandOutput
  extends GetMediaPipelineKinesisVideoStreamPoolResponse,
    __MetadataBearer {}

/**
 * <p>Gets an Kinesis video stream pool.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMediaPipelinesClient, GetMediaPipelineKinesisVideoStreamPoolCommand } from "@aws-sdk/client-chime-sdk-media-pipelines"; // ES Modules import
 * // const { ChimeSDKMediaPipelinesClient, GetMediaPipelineKinesisVideoStreamPoolCommand } = require("@aws-sdk/client-chime-sdk-media-pipelines"); // CommonJS import
 * // import type { ChimeSDKMediaPipelinesClientConfig } from "@aws-sdk/client-chime-sdk-media-pipelines";
 * const config = {}; // type is ChimeSDKMediaPipelinesClientConfig
 * const client = new ChimeSDKMediaPipelinesClient(config);
 * const input = { // GetMediaPipelineKinesisVideoStreamPoolRequest
 *   Identifier: "STRING_VALUE", // required
 * };
 * const command = new GetMediaPipelineKinesisVideoStreamPoolCommand(input);
 * const response = await client.send(command);
 * // { // GetMediaPipelineKinesisVideoStreamPoolResponse
 * //   KinesisVideoStreamPoolConfiguration: { // KinesisVideoStreamPoolConfiguration
 * //     PoolArn: "STRING_VALUE",
 * //     PoolName: "STRING_VALUE",
 * //     PoolId: "STRING_VALUE",
 * //     PoolStatus: "CREATING" || "ACTIVE" || "UPDATING" || "DELETING" || "FAILED",
 * //     PoolSize: Number("int"),
 * //     StreamConfiguration: { // KinesisVideoStreamConfiguration
 * //       Region: "STRING_VALUE", // required
 * //       DataRetentionInHours: Number("int"),
 * //     },
 * //     CreatedTimestamp: new Date("TIMESTAMP"),
 * //     UpdatedTimestamp: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetMediaPipelineKinesisVideoStreamPoolCommandInput - {@link GetMediaPipelineKinesisVideoStreamPoolCommandInput}
 * @returns {@link GetMediaPipelineKinesisVideoStreamPoolCommandOutput}
 * @see {@link GetMediaPipelineKinesisVideoStreamPoolCommandInput} for command's `input` shape.
 * @see {@link GetMediaPipelineKinesisVideoStreamPoolCommandOutput} for command's `response` shape.
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
export class GetMediaPipelineKinesisVideoStreamPoolCommand extends $Command
  .classBuilder<
    GetMediaPipelineKinesisVideoStreamPoolCommandInput,
    GetMediaPipelineKinesisVideoStreamPoolCommandOutput,
    ChimeSDKMediaPipelinesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeSDKMediaPipelinesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ChimeSDKMediaPipelinesService", "GetMediaPipelineKinesisVideoStreamPool", {})
  .n("ChimeSDKMediaPipelinesClient", "GetMediaPipelineKinesisVideoStreamPoolCommand")
  .sc(GetMediaPipelineKinesisVideoStreamPool$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetMediaPipelineKinesisVideoStreamPoolRequest;
      output: GetMediaPipelineKinesisVideoStreamPoolResponse;
    };
    sdk: {
      input: GetMediaPipelineKinesisVideoStreamPoolCommandInput;
      output: GetMediaPipelineKinesisVideoStreamPoolCommandOutput;
    };
  };
}
