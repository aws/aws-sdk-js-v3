// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaPackageV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaPackageV2Client";
import { ListHarvestJobsRequest, ListHarvestJobsResponse } from "../models/models_0";
import { de_ListHarvestJobsCommand, se_ListHarvestJobsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListHarvestJobsCommand}.
 */
export interface ListHarvestJobsCommandInput extends ListHarvestJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListHarvestJobsCommand}.
 */
export interface ListHarvestJobsCommandOutput extends ListHarvestJobsResponse, __MetadataBearer {}

/**
 * <p>Retrieves a list of harvest jobs that match the specified criteria.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaPackageV2Client, ListHarvestJobsCommand } from "@aws-sdk/client-mediapackagev2"; // ES Modules import
 * // const { MediaPackageV2Client, ListHarvestJobsCommand } = require("@aws-sdk/client-mediapackagev2"); // CommonJS import
 * const client = new MediaPackageV2Client(config);
 * const input = { // ListHarvestJobsRequest
 *   ChannelGroupName: "STRING_VALUE", // required
 *   ChannelName: "STRING_VALUE",
 *   OriginEndpointName: "STRING_VALUE",
 *   Status: "QUEUED" || "IN_PROGRESS" || "CANCELLED" || "COMPLETED" || "FAILED",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListHarvestJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListHarvestJobsResponse
 * //   Items: [ // HarvestJobsList
 * //     { // HarvestJob
 * //       ChannelGroupName: "STRING_VALUE", // required
 * //       ChannelName: "STRING_VALUE", // required
 * //       OriginEndpointName: "STRING_VALUE", // required
 * //       Destination: { // Destination
 * //         S3Destination: { // S3DestinationConfig
 * //           BucketName: "STRING_VALUE", // required
 * //           DestinationPath: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       HarvestJobName: "STRING_VALUE", // required
 * //       HarvestedManifests: { // HarvestedManifests
 * //         HlsManifests: [ // HarvestedHlsManifestsList
 * //           { // HarvestedHlsManifest
 * //             ManifestName: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //         DashManifests: [ // HarvestedDashManifestsList
 * //           { // HarvestedDashManifest
 * //             ManifestName: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //         LowLatencyHlsManifests: [ // HarvestedLowLatencyHlsManifestsList
 * //           { // HarvestedLowLatencyHlsManifest
 * //             ManifestName: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //       },
 * //       Description: "STRING_VALUE",
 * //       ScheduleConfiguration: { // HarvesterScheduleConfiguration
 * //         StartTime: new Date("TIMESTAMP"), // required
 * //         EndTime: new Date("TIMESTAMP"), // required
 * //       },
 * //       Arn: "STRING_VALUE", // required
 * //       CreatedAt: new Date("TIMESTAMP"), // required
 * //       ModifiedAt: new Date("TIMESTAMP"), // required
 * //       Status: "QUEUED" || "IN_PROGRESS" || "CANCELLED" || "COMPLETED" || "FAILED", // required
 * //       ErrorMessage: "STRING_VALUE",
 * //       ETag: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListHarvestJobsCommandInput - {@link ListHarvestJobsCommandInput}
 * @returns {@link ListHarvestJobsCommandOutput}
 * @see {@link ListHarvestJobsCommandInput} for command's `input` shape.
 * @see {@link ListHarvestJobsCommandOutput} for command's `response` shape.
 * @see {@link MediaPackageV2ClientResolvedConfig | config} for MediaPackageV2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permissions to perform the requested operation. The user or role that is making the request must have at least one IAM permissions policy attached that grants the required permissions. For more information, see Access Management in the IAM User Guide.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Indicates that an error from the service occurred while trying to process a request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource doesn't exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request throughput limit was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input failed to meet the constraints specified by the AWS service.</p>
 *
 * @throws {@link MediaPackageV2ServiceException}
 * <p>Base exception class for all service exceptions from MediaPackageV2 service.</p>
 *
 *
 * @example ListHarvestJobs: Specify ChannelGroup only
 * ```javascript
 * //
 * const input = {
 *   ChannelGroupName: "exampleChannelGroup"
 * };
 * const command = new ListHarvestJobsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Items: [
 *     {
 *       Arn: "arn:aws:mediapackagev2:us-west-2:123456789012:channelGroup/exampleChannelGroup/channel/exampleChannelName/originEndpoint/exampleOriginEndpointName/harvestJob/HarvestJobName",
 *       ChannelGroupName: "exampleChannelGroup",
 *       ChannelName: "exampleChannelName",
 *       CreatedAt: "2024-05-28T09:36:00.00Z",
 *       Description: "Example HarvestJob description",
 *       Destination: {
 *         S3Destination: {
 *           BucketName: "harvestJobS3DestinationBucket",
 *           DestinationPath: "manifests"
 *         }
 *       },
 *       ETag: "GlfT+dwAyGIR4wuy8nKWl1RDPwSrjQej9qUutLZxoxk=",
 *       HarvestJobName: "HarvestJobName",
 *       HarvestedManifests: {
 *         DashManifests: [
 *           {
 *             ManifestName: "DashManifest"
 *           }
 *         ],
 *         HlsManifests: [
 *           {
 *             ManifestName: "HlsManifest"
 *           }
 *         ],
 *         LowLatencyHlsManifests: [
 *           {
 *             ManifestName: "LowLatencyHlsManifest"
 *           }
 *         ]
 *       },
 *       ModifiedAt: "2024-05-28T09:36:00.00Z",
 *       OriginEndpointName: "exampleOriginEndpointName",
 *       ScheduleConfiguration: {
 *         EndTime: "2024-05-28T12:00:00.00Z",
 *         StartTime: "2024-05-28T06:00:00.00Z"
 *       },
 *       Status: "QUEUED"
 *     },
 *     {
 *       Arn: "arn:aws:mediapackagev2:us-west-2:123456789012:channelGroup/exampleChannelGroup/channel/exampleChannelName2/originEndpoint/exampleOriginEndpointName2/harvestJob/HarvestJobName2",
 *       ChannelGroupName: "exampleChannelGroup",
 *       ChannelName: "exampleChannelName2",
 *       CreatedAt: "2024-05-28T15:30:00.00Z",
 *       Description: "Example HarvestJob2 description",
 *       Destination: {
 *         S3Destination: {
 *           BucketName: "harvestJobS3DestinationBucket",
 *           DestinationPath: "manifests"
 *         }
 *       },
 *       ETag: "GlfT+dwAyGIR4wuy8nKWl1RDPwSrjQej9qUutLZxoxk=",
 *       HarvestJobName: "HarvestJobName2",
 *       HarvestedManifests: {
 *         DashManifests: [
 *           {
 *             ManifestName: "DashManifest"
 *           }
 *         ],
 *         HlsManifests: [
 *           {
 *             ManifestName: "HlsManifest"
 *           }
 *         ],
 *         LowLatencyHlsManifests: [
 *           {
 *             ManifestName: "LowLatencyHlsManifest"
 *           }
 *         ]
 *       },
 *       ModifiedAt: "2024-05-28T15:30:00.00Z",
 *       OriginEndpointName: "exampleOriginEndpointName2",
 *       ScheduleConfiguration: {
 *         EndTime: "2024-05-28T12:00:00.00Z",
 *         StartTime: "2024-05-28T02:00:00.00Z"
 *       },
 *       Status: "IN_PROGRESS"
 *     }
 *   ],
 *   NextToken: "someTokenValue"
 * }
 * *\/
 * ```
 *
 * @example ListHarvestJobs: Specify ChannelGroup, Channel only
 * ```javascript
 * //
 * const input = {
 *   ChannelGroupName: "exampleChannelGroup",
 *   ChannelName: "exampleChannelName"
 * };
 * const command = new ListHarvestJobsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Items: [
 *     {
 *       Arn: "arn:aws:mediapackagev2:us-west-2:123456789012:channelGroup/exampleChannelGroup/channel/exampleChannelName/originEndpoint/exampleOriginEndpointName/harvestJob/HarvestJobName",
 *       ChannelGroupName: "exampleChannelGroup",
 *       ChannelName: "exampleChannelName",
 *       CreatedAt: "2024-05-28T09:36:00.00Z",
 *       Description: "Example HarvestJob description",
 *       Destination: {
 *         S3Destination: {
 *           BucketName: "harvestJobS3DestinationBucket",
 *           DestinationPath: "manifests"
 *         }
 *       },
 *       ETag: "GlfT+dwAyGIR4wuy8nKWl1RDPwSrjQej9qUutLZxoxk=",
 *       HarvestJobName: "HarvestJobName",
 *       HarvestedManifests: {
 *         DashManifests: [
 *           {
 *             ManifestName: "DashManifest"
 *           }
 *         ],
 *         HlsManifests: [
 *           {
 *             ManifestName: "HlsManifest"
 *           }
 *         ],
 *         LowLatencyHlsManifests: [
 *           {
 *             ManifestName: "LowLatencyHlsManifest"
 *           }
 *         ]
 *       },
 *       ModifiedAt: "2024-05-28T09:36:00.00Z",
 *       OriginEndpointName: "exampleOriginEndpointName",
 *       ScheduleConfiguration: {
 *         EndTime: "2024-05-28T12:00:00.00Z",
 *         StartTime: "2024-05-28T06:00:00.00Z"
 *       },
 *       Status: "QUEUED"
 *     },
 *     {
 *       Arn: "arn:aws:mediapackagev2:us-west-2:123456789012:channelGroup/exampleChannelGroup/channel/exampleChannelName/originEndpoint/exampleOriginEndpointName2/harvestJob/HarvestJobName2",
 *       ChannelGroupName: "exampleChannelGroup",
 *       ChannelName: "exampleChannelName",
 *       CreatedAt: "2024-05-28T15:30:00.00Z",
 *       Description: "Example HarvestJob2 description",
 *       Destination: {
 *         S3Destination: {
 *           BucketName: "harvestJobS3DestinationBucket",
 *           DestinationPath: "manifests"
 *         }
 *       },
 *       HarvestJobName: "HarvestJobName2",
 *       HarvestedManifests: {
 *         DashManifests: [
 *           {
 *             ManifestName: "DashManifest"
 *           }
 *         ],
 *         HlsManifests: [
 *           {
 *             ManifestName: "HlsManifest"
 *           }
 *         ],
 *         LowLatencyHlsManifests: [
 *           {
 *             ManifestName: "LowLatencyHlsManifest"
 *           }
 *         ]
 *       },
 *       ModifiedAt: "2024-05-28T15:30:00.00Z",
 *       OriginEndpointName: "exampleOriginEndpointName2",
 *       ScheduleConfiguration: {
 *         EndTime: "2024-05-28T12:00:00.00Z",
 *         StartTime: "2024-05-28T02:00:00.00Z"
 *       },
 *       Status: "IN_PROGRESS"
 *     }
 *   ],
 *   NextToken: "someTokenValue"
 * }
 * *\/
 * ```
 *
 * @example ListHarvestJobs: Specify ChannelGroup, Channel, OriginEndpoint
 * ```javascript
 * //
 * const input = {
 *   ChannelGroupName: "exampleChannelGroup",
 *   ChannelName: "exampleChannelName",
 *   OriginEndpointName: "exampleOriginEndpointName"
 * };
 * const command = new ListHarvestJobsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Items: [
 *     {
 *       Arn: "arn:aws:mediapackagev2:us-west-2:123456789012:channelGroup/exampleChannelGroup/channel/exampleChannelName/originEndpoint/exampleOriginEndpointName/harvestJob/HarvestJobName",
 *       ChannelGroupName: "exampleChannelGroup",
 *       ChannelName: "exampleChannelName",
 *       CreatedAt: "2024-05-28T09:36:00.00Z",
 *       Description: "Example HarvestJob description",
 *       Destination: {
 *         S3Destination: {
 *           BucketName: "harvestJobS3DestinationBucket",
 *           DestinationPath: "manifests"
 *         }
 *       },
 *       ETag: "GlfT+dwAyGIR4wuy8nKWl1RDPwSrjQej9qUutLZxoxk=",
 *       HarvestJobName: "HarvestJobName",
 *       HarvestedManifests: {
 *         DashManifests: [
 *           {
 *             ManifestName: "DashManifest"
 *           }
 *         ],
 *         HlsManifests: [
 *           {
 *             ManifestName: "HlsManifest"
 *           }
 *         ],
 *         LowLatencyHlsManifests: [
 *           {
 *             ManifestName: "LowLatencyHlsManifest"
 *           }
 *         ]
 *       },
 *       ModifiedAt: "2024-05-28T09:36:00.00Z",
 *       OriginEndpointName: "exampleOriginEndpointName",
 *       ScheduleConfiguration: {
 *         EndTime: "2024-05-28T12:00:00.00Z",
 *         StartTime: "2024-05-28T06:00:00.00Z"
 *       },
 *       Status: "QUEUED"
 *     }
 *   ],
 *   NextToken: "someTokenValue"
 * }
 * *\/
 * ```
 *
 * @example ListHarvestJobs: Specify ChannelGroup, Channel, OriginEndpoint + Status filter
 * ```javascript
 * //
 * const input = {
 *   ChannelGroupName: "exampleChannelGroup",
 *   ChannelName: "exampleChannelName",
 *   OriginEndpointName: "exampleOriginEndpointName",
 *   Status: "QUEUED"
 * };
 * const command = new ListHarvestJobsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Items: [
 *     {
 *       Arn: "arn:aws:mediapackagev2:us-west-2:123456789012:channelGroup/exampleChannelGroup/channel/exampleChannelName/originEndpoint/exampleOriginEndpointName/harvestJob/HarvestJobName",
 *       ChannelGroupName: "exampleChannelGroup",
 *       ChannelName: "exampleChannelName",
 *       CreatedAt: "2024-05-28T09:36:00.00Z",
 *       Description: "Example HarvestJob description",
 *       Destination: {
 *         S3Destination: {
 *           BucketName: "harvestJobS3DestinationBucket",
 *           DestinationPath: "manifests"
 *         }
 *       },
 *       ETag: "GlfT+dwAyGIR4wuy8nKWl1RDPwSrjQej9qUutLZxoxk=",
 *       HarvestJobName: "HarvestJobName",
 *       HarvestedManifests: {
 *         DashManifests: [
 *           {
 *             ManifestName: "DashManifest"
 *           }
 *         ],
 *         HlsManifests: [
 *           {
 *             ManifestName: "HlsManifest"
 *           }
 *         ],
 *         LowLatencyHlsManifests: [
 *           {
 *             ManifestName: "LowLatencyHlsManifest"
 *           }
 *         ]
 *       },
 *       ModifiedAt: "2024-05-28T09:36:00.00Z",
 *       OriginEndpointName: "exampleOriginEndpointName",
 *       ScheduleConfiguration: {
 *         EndTime: "2024-05-28T12:00:00.00Z",
 *         StartTime: "2024-05-28T06:00:00.00Z"
 *       },
 *       Status: "QUEUED"
 *     }
 *   ],
 *   NextToken: "someTokenValue"
 * }
 * *\/
 * ```
 *
 * @example ListHarvestJobs: Empty response
 * ```javascript
 * //
 * const input = {
 *   ChannelGroupName: "exampleChannelGroup",
 *   ChannelName: "exampleChannelName",
 *   OriginEndpointName: "exampleOriginEndpointName"
 * };
 * const command = new ListHarvestJobsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class ListHarvestJobsCommand extends $Command
  .classBuilder<
    ListHarvestJobsCommandInput,
    ListHarvestJobsCommandOutput,
    MediaPackageV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaPackageV2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("mediapackagev2", "ListHarvestJobs", {})
  .n("MediaPackageV2Client", "ListHarvestJobsCommand")
  .f(void 0, void 0)
  .ser(se_ListHarvestJobsCommand)
  .de(de_ListHarvestJobsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListHarvestJobsRequest;
      output: ListHarvestJobsResponse;
    };
    sdk: {
      input: ListHarvestJobsCommandInput;
      output: ListHarvestJobsCommandOutput;
    };
  };
}
