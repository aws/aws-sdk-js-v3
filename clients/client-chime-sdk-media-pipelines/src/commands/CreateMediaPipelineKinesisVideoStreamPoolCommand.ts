// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ChimeSDKMediaPipelinesClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ChimeSDKMediaPipelinesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateMediaPipelineKinesisVideoStreamPoolRequest,
  CreateMediaPipelineKinesisVideoStreamPoolResponse,
} from "../models/models_0";
import { CreateMediaPipelineKinesisVideoStreamPool } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateMediaPipelineKinesisVideoStreamPoolCommand}.
 */
export interface CreateMediaPipelineKinesisVideoStreamPoolCommandInput
  extends CreateMediaPipelineKinesisVideoStreamPoolRequest {}
/**
 * @public
 *
 * The output of {@link CreateMediaPipelineKinesisVideoStreamPoolCommand}.
 */
export interface CreateMediaPipelineKinesisVideoStreamPoolCommandOutput
  extends CreateMediaPipelineKinesisVideoStreamPoolResponse,
    __MetadataBearer {}

/**
 * <p>Creates an Amazon Kinesis Video Stream pool for use with media stream
 *          pipelines.</p>
 *          <note>
 *             <p>If a meeting uses an opt-in Region as its
 *          <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_meeting-chime_CreateMeeting.html#chimesdk-meeting-chime_CreateMeeting-request-MediaRegion">MediaRegion</a>,
 *          the KVS stream must be in that same Region. For example, if a meeting uses the <code>af-south-1</code> Region, the KVS stream must also be in <code>af-south-1</code>. However, if the meeting uses a
 *          Region that AWS turns on by default, the KVS stream can be in any available Region, including an opt-in Region. For example, if the meeting uses <code>ca-central-1</code>, the KVS stream can be in
 *          <code>eu-west-2</code>, <code>us-east-1</code>, <code>af-south-1</code>, or any other Region that the Amazon Chime SDK supports.</p>
 *             <p>To learn  which AWS Region a meeting uses, call the <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_meeting-chime_GetMeeting.html">GetMeeting</a> API and
 *             use the <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_meeting-chime_CreateMeeting.html#chimesdk-meeting-chime_CreateMeeting-request-MediaRegion">MediaRegion</a>
 *             parameter from the response.</p>
 *             <p>For more information about opt-in Regions, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/sdk-available-regions.html">Available Regions</a> in the
 *             <i>Amazon Chime SDK Developer Guide</i>, and
 *             <a href="https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-regions.html#rande-manage-enable.html">Specify which AWS Regions your account can use</a>,
 *             in the <i>AWS Account Management Reference Guide</i>.</p>
 *          </note>
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
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be processed because of conflict in the current state of the
 *          resource.</p>
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
export class CreateMediaPipelineKinesisVideoStreamPoolCommand extends $Command
  .classBuilder<
    CreateMediaPipelineKinesisVideoStreamPoolCommandInput,
    CreateMediaPipelineKinesisVideoStreamPoolCommandOutput,
    ChimeSDKMediaPipelinesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeSDKMediaPipelinesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ChimeSDKMediaPipelinesService", "CreateMediaPipelineKinesisVideoStreamPool", {})
  .n("ChimeSDKMediaPipelinesClient", "CreateMediaPipelineKinesisVideoStreamPoolCommand")
  .sc(CreateMediaPipelineKinesisVideoStreamPool)
  .build() {
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
