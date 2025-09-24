// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaPackageV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaPackageV2Client";
import { CreateHarvestJobRequest, CreateHarvestJobResponse } from "../models/models_0";
import { CreateHarvestJob } from "../schemas/schemas_6_Create";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateHarvestJobCommand}.
 */
export interface CreateHarvestJobCommandInput extends CreateHarvestJobRequest {}
/**
 * @public
 *
 * The output of {@link CreateHarvestJobCommand}.
 */
export interface CreateHarvestJobCommandOutput extends CreateHarvestJobResponse, __MetadataBearer {}

/**
 * <p>Creates a new harvest job to export content from a MediaPackage v2 channel to an S3 bucket.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaPackageV2Client, CreateHarvestJobCommand } from "@aws-sdk/client-mediapackagev2"; // ES Modules import
 * // const { MediaPackageV2Client, CreateHarvestJobCommand } = require("@aws-sdk/client-mediapackagev2"); // CommonJS import
 * // import type { MediaPackageV2ClientConfig } from "@aws-sdk/client-mediapackagev2";
 * const config = {}; // type is MediaPackageV2ClientConfig
 * const client = new MediaPackageV2Client(config);
 * const input = { // CreateHarvestJobRequest
 *   ChannelGroupName: "STRING_VALUE", // required
 *   ChannelName: "STRING_VALUE", // required
 *   OriginEndpointName: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   HarvestedManifests: { // HarvestedManifests
 *     HlsManifests: [ // HarvestedHlsManifestsList
 *       { // HarvestedHlsManifest
 *         ManifestName: "STRING_VALUE", // required
 *       },
 *     ],
 *     DashManifests: [ // HarvestedDashManifestsList
 *       { // HarvestedDashManifest
 *         ManifestName: "STRING_VALUE", // required
 *       },
 *     ],
 *     LowLatencyHlsManifests: [ // HarvestedLowLatencyHlsManifestsList
 *       { // HarvestedLowLatencyHlsManifest
 *         ManifestName: "STRING_VALUE", // required
 *       },
 *     ],
 *   },
 *   ScheduleConfiguration: { // HarvesterScheduleConfiguration
 *     StartTime: new Date("TIMESTAMP"), // required
 *     EndTime: new Date("TIMESTAMP"), // required
 *   },
 *   Destination: { // Destination
 *     S3Destination: { // S3DestinationConfig
 *       BucketName: "STRING_VALUE", // required
 *       DestinationPath: "STRING_VALUE", // required
 *     },
 *   },
 *   ClientToken: "STRING_VALUE",
 *   HarvestJobName: "STRING_VALUE",
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateHarvestJobCommand(input);
 * const response = await client.send(command);
 * // { // CreateHarvestJobResponse
 * //   ChannelGroupName: "STRING_VALUE", // required
 * //   ChannelName: "STRING_VALUE", // required
 * //   OriginEndpointName: "STRING_VALUE", // required
 * //   Destination: { // Destination
 * //     S3Destination: { // S3DestinationConfig
 * //       BucketName: "STRING_VALUE", // required
 * //       DestinationPath: "STRING_VALUE", // required
 * //     },
 * //   },
 * //   HarvestJobName: "STRING_VALUE", // required
 * //   HarvestedManifests: { // HarvestedManifests
 * //     HlsManifests: [ // HarvestedHlsManifestsList
 * //       { // HarvestedHlsManifest
 * //         ManifestName: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     DashManifests: [ // HarvestedDashManifestsList
 * //       { // HarvestedDashManifest
 * //         ManifestName: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     LowLatencyHlsManifests: [ // HarvestedLowLatencyHlsManifestsList
 * //       { // HarvestedLowLatencyHlsManifest
 * //         ManifestName: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * //   Description: "STRING_VALUE",
 * //   ScheduleConfiguration: { // HarvesterScheduleConfiguration
 * //     StartTime: new Date("TIMESTAMP"), // required
 * //     EndTime: new Date("TIMESTAMP"), // required
 * //   },
 * //   Arn: "STRING_VALUE", // required
 * //   CreatedAt: new Date("TIMESTAMP"), // required
 * //   ModifiedAt: new Date("TIMESTAMP"), // required
 * //   Status: "QUEUED" || "IN_PROGRESS" || "CANCELLED" || "COMPLETED" || "FAILED", // required
 * //   ErrorMessage: "STRING_VALUE",
 * //   ETag: "STRING_VALUE",
 * //   Tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateHarvestJobCommandInput - {@link CreateHarvestJobCommandInput}
 * @returns {@link CreateHarvestJobCommandOutput}
 * @see {@link CreateHarvestJobCommandInput} for command's `input` shape.
 * @see {@link CreateHarvestJobCommandOutput} for command's `response` shape.
 * @see {@link MediaPackageV2ClientResolvedConfig | config} for MediaPackageV2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access is denied because either you don't have permissions to perform the requested operation or MediaPackage is getting throttling errors with CDN authorization. The user or role that is making the request must have at least one IAM permissions policy attached that grants the required permissions. For more information, see Access Management in the IAM User Guide. Or, if you're using CDN authorization, you will receive this exception if MediaPackage receives a throttling error from Secrets Manager.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting this resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Indicates that an error from the service occurred while trying to process a request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource doesn't exist.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would cause a service quota to be exceeded.</p>
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
 * @example Creating a Harvest Job
 * ```javascript
 * //
 * const input = {
 *   ChannelGroupName: "exampleChannelGroup",
 *   ChannelName: "exampleChannelName",
 *   Description: "Example HarvestJob description",
 *   Destination: {
 *     S3Destination: {
 *       BucketName: "harvestJobS3DestinationBucket",
 *       DestinationPath: "manifests"
 *     }
 *   },
 *   HarvestedManifests: {
 *     DashManifests: [
 *       {
 *         ManifestName: "DashManifest"
 *       }
 *     ],
 *     HlsManifests: [
 *       {
 *         ManifestName: "HlsManifest"
 *       }
 *     ],
 *     LowLatencyHlsManifests: [
 *       {
 *         ManifestName: "LowLatencyHlsManifest"
 *       }
 *     ]
 *   },
 *   OriginEndpointName: "exampleOriginEndpointName",
 *   ScheduleConfiguration: {
 *     EndTime: "2024-05-28T12:00:00.00Z",
 *     StartTime: "2024-05-28T06:00:00.00Z"
 *   }
 * };
 * const command = new CreateHarvestJobCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Arn: "arn:aws:mediapackagev2:us-west-2:123456789012:channelGroup/exampleChannelGroup/channel/exampleChannelName/originEndpoint/exampleOriginEndpointName/harvestJob/HarvestJobName",
 *   ChannelGroupName: "exampleChannelGroup",
 *   ChannelName: "exampleChannelName",
 *   CreatedAt: "2024-05-28T09:36:00.00Z",
 *   Description: "Example HarvestJob description",
 *   Destination: {
 *     S3Destination: {
 *       BucketName: "harvestJobS3DestinationBucket",
 *       DestinationPath: "manifests"
 *     }
 *   },
 *   ETag: "GlfT+dwAyGIR4wuy8nKWl1RDPwSrjQej9qUutLZxoxk=",
 *   HarvestJobName: "HarvestJobName",
 *   HarvestedManifests: {
 *     DashManifests: [
 *       {
 *         ManifestName: "DashManifest"
 *       }
 *     ],
 *     HlsManifests: [
 *       {
 *         ManifestName: "HlsManifest"
 *       }
 *     ],
 *     LowLatencyHlsManifests: [
 *       {
 *         ManifestName: "LowLatencyHlsManifest"
 *       }
 *     ]
 *   },
 *   ModifiedAt: "2024-05-28T09:36:00.00Z",
 *   OriginEndpointName: "exampleOriginEndpointName",
 *   ScheduleConfiguration: {
 *     EndTime: "2024-05-28T12:00:00.00Z",
 *     StartTime: "2024-05-28T06:00:00.00Z"
 *   },
 *   Status: "QUEUED",
 *   Tags: {
 *     key1: "value1",
 *     key2: "value2"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateHarvestJobCommand extends $Command
  .classBuilder<
    CreateHarvestJobCommandInput,
    CreateHarvestJobCommandOutput,
    MediaPackageV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaPackageV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("mediapackagev2", "CreateHarvestJob", {})
  .n("MediaPackageV2Client", "CreateHarvestJobCommand")
  .sc(CreateHarvestJob)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateHarvestJobRequest;
      output: CreateHarvestJobResponse;
    };
    sdk: {
      input: CreateHarvestJobCommandInput;
      output: CreateHarvestJobCommandOutput;
    };
  };
}
