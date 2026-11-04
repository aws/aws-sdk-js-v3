// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  CreateMediaPipelineKinesisVideoStreamPoolRequest,
  CreateMediaPipelineKinesisVideoStreamPoolResponse,
} from "../models/models_0";
import { CreateMediaPipelineKinesisVideoStreamPool$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateMediaPipelineKinesisVideoStreamPoolCommand}.
 */
export interface CreateMediaPipelineKinesisVideoStreamPoolCommandInput extends CreateMediaPipelineKinesisVideoStreamPoolRequest {}
/**
 * @public
 *
 * The output of {@link CreateMediaPipelineKinesisVideoStreamPoolCommand}.
 */
export interface CreateMediaPipelineKinesisVideoStreamPoolCommandOutput extends CreateMediaPipelineKinesisVideoStreamPoolResponse, __MetadataBearer {}

/**
 * Creates an Amazon Kinesis Video Stream pool for use with media stream pipelines.
 *
 * > **Note:**
 * >
 * > If a meeting uses an opt-in Region as its [MediaRegion](https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_meeting-chime_CreateMeeting.html#chimesdk-meeting-chime_CreateMeeting-request-MediaRegion), the KVS stream must be in that same Region. For example, if a meeting uses the `af-south-1` Region, the KVS stream must also be in `af-south-1`. However, if the meeting uses a Region that AWS turns on by default, the KVS stream can be in any available Region, including an opt-in Region. For example, if the meeting uses `ca-central-1`, the KVS stream can be in `eu-west-2`, `us-east-1`, `af-south-1`, or any other Region that the Amazon Chime SDK supports.
 * >
 * > To learn which AWS Region a meeting uses, call the [GetMeeting](https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_meeting-chime_GetMeeting.html) API and use the [MediaRegion](https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_meeting-chime_CreateMeeting.html#chimesdk-meeting-chime_CreateMeeting-request-MediaRegion) parameter from the response.
 * >
 * > For more information about opt-in Regions, refer to [Available Regions](https://docs.aws.amazon.com/chime-sdk/latest/dg/sdk-available-regions.html) in the *Amazon Chime SDK Developer Guide*, and [Specify which AWS Regions your account can use](https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-regions.html#rande-manage-enable.html), in the *AWS Account Management Reference Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMediaPipelinesClient, CreateMediaPipelineKinesisVideoStreamPoolCommand } from "@aws-sdk/client-chime-sdk-media-pipelines"; // ES Modules import
 * // const { ChimeSDKMediaPipelinesClient, CreateMediaPipelineKinesisVideoStreamPoolCommand } = require("@aws-sdk/client-chime-sdk-media-pipelines"); // CommonJS import
 * // import type { ChimeSDKMediaPipelinesClientConfig } from "@aws-sdk/client-chime-sdk-media-pipelines";
 * const config = {}; // type is ChimeSDKMediaPipelinesClientConfig
 * const client = new ChimeSDKMediaPipelinesClient(config);
 * const input = { // CreateMediaPipelineKinesisVideoStreamPoolRequest
 *   StreamConfiguration: { // KinesisVideoStreamConfiguration
 *     Region: "STRING_VALUE", // required
 *     DataRetentionInHours: Number("int"),
 *   },
 *   PoolName: "STRING_VALUE", // required
 *   ClientRequestToken: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateMediaPipelineKinesisVideoStreamPoolCommand(input);
 * const response = await client.send(command);
 * // { // CreateMediaPipelineKinesisVideoStreamPoolResponse
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
 * @param CreateMediaPipelineKinesisVideoStreamPoolCommandInput - {@link CreateMediaPipelineKinesisVideoStreamPoolCommandInput}
 * @returns {@link CreateMediaPipelineKinesisVideoStreamPoolCommandOutput}
 * @see {@link CreateMediaPipelineKinesisVideoStreamPoolCommandInput} for command's `input` shape.
 * @see {@link CreateMediaPipelineKinesisVideoStreamPoolCommandOutput} for command's `response` shape.
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
export class CreateMediaPipelineKinesisVideoStreamPoolCommand extends command<CreateMediaPipelineKinesisVideoStreamPoolCommandInput, CreateMediaPipelineKinesisVideoStreamPoolCommandOutput>(
  _ep0,
  _mw0,
  "CreateMediaPipelineKinesisVideoStreamPool",
  CreateMediaPipelineKinesisVideoStreamPool$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateMediaPipelineKinesisVideoStreamPoolRequest;
      output: CreateMediaPipelineKinesisVideoStreamPoolResponse;
    };
    sdk: {
      input: CreateMediaPipelineKinesisVideoStreamPoolCommandInput;
      output: CreateMediaPipelineKinesisVideoStreamPoolCommandOutput;
    };
  };
}
