// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  UpdateMediaPipelineKinesisVideoStreamPoolRequest,
  UpdateMediaPipelineKinesisVideoStreamPoolResponse,
} from "../models/models_0";
import { UpdateMediaPipelineKinesisVideoStreamPool$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateMediaPipelineKinesisVideoStreamPoolCommand}.
 */
export interface UpdateMediaPipelineKinesisVideoStreamPoolCommandInput extends UpdateMediaPipelineKinesisVideoStreamPoolRequest {}
/**
 * @public
 *
 * The output of {@link UpdateMediaPipelineKinesisVideoStreamPoolCommand}.
 */
export interface UpdateMediaPipelineKinesisVideoStreamPoolCommandOutput extends UpdateMediaPipelineKinesisVideoStreamPoolResponse, __MetadataBearer {}

/**
 * Updates an Amazon Kinesis Video Stream pool in a media pipeline.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMediaPipelinesClient, UpdateMediaPipelineKinesisVideoStreamPoolCommand } from "@aws-sdk/client-chime-sdk-media-pipelines"; // ES Modules import
 * // const { ChimeSDKMediaPipelinesClient, UpdateMediaPipelineKinesisVideoStreamPoolCommand } = require("@aws-sdk/client-chime-sdk-media-pipelines"); // CommonJS import
 * // import type { ChimeSDKMediaPipelinesClientConfig } from "@aws-sdk/client-chime-sdk-media-pipelines";
 * const config = {}; // type is ChimeSDKMediaPipelinesClientConfig
 * const client = new ChimeSDKMediaPipelinesClient(config);
 * const input = { // UpdateMediaPipelineKinesisVideoStreamPoolRequest
 *   Identifier: "STRING_VALUE", // required
 *   StreamConfiguration: { // KinesisVideoStreamConfigurationUpdate
 *     DataRetentionInHours: Number("int"),
 *   },
 * };
 * const command = new UpdateMediaPipelineKinesisVideoStreamPoolCommand(input);
 * const response = await client.send(command);
 * // { // UpdateMediaPipelineKinesisVideoStreamPoolResponse
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
 * @param UpdateMediaPipelineKinesisVideoStreamPoolCommandInput - {@link UpdateMediaPipelineKinesisVideoStreamPoolCommandInput}
 * @returns {@link UpdateMediaPipelineKinesisVideoStreamPoolCommandOutput}
 * @see {@link UpdateMediaPipelineKinesisVideoStreamPoolCommandInput} for command's `input` shape.
 * @see {@link UpdateMediaPipelineKinesisVideoStreamPoolCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKMediaPipelinesClientResolvedConfig | config} for ChimeSDKMediaPipelinesClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The input parameters don't match the service's restrictions.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request could not be processed because of conflict in the current state of the resource.
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
export class UpdateMediaPipelineKinesisVideoStreamPoolCommand extends command<UpdateMediaPipelineKinesisVideoStreamPoolCommandInput, UpdateMediaPipelineKinesisVideoStreamPoolCommandOutput>(
  _ep0,
  _mw0,
  "UpdateMediaPipelineKinesisVideoStreamPool",
  UpdateMediaPipelineKinesisVideoStreamPool$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateMediaPipelineKinesisVideoStreamPoolRequest;
      output: UpdateMediaPipelineKinesisVideoStreamPoolResponse;
    };
    sdk: {
      input: UpdateMediaPipelineKinesisVideoStreamPoolCommandInput;
      output: UpdateMediaPipelineKinesisVideoStreamPoolCommandOutput;
    };
  };
}
