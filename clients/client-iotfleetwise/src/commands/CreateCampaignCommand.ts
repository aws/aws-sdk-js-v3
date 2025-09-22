// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTFleetWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTFleetWiseClient";
import { CreateCampaignRequest, CreateCampaignResponse } from "../models/models_0";
import { CreateCampaign } from "../schemas/schemas_5_Create";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateCampaignCommand}.
 */
export interface CreateCampaignCommandInput extends CreateCampaignRequest {}
/**
 * @public
 *
 * The output of {@link CreateCampaignCommand}.
 */
export interface CreateCampaignCommandOutput extends CreateCampaignResponse, __MetadataBearer {}

/**
 * <p>Creates an orchestration of data collection rules. The Amazon Web Services IoT FleetWise Edge Agent software
 *             running in vehicles uses campaigns to decide how to collect and transfer data to the
 *             cloud. You create campaigns in the cloud. After you or your team approve campaigns,
 *             Amazon Web Services IoT FleetWise automatically deploys them to vehicles. </p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/campaigns.html">Collect and transfer data
 *                 with campaigns</a> in the <i>Amazon Web Services IoT FleetWise Developer Guide</i>.</p>
 *          <important>
 *             <p>Access to certain Amazon Web Services IoT FleetWise features is currently gated. For more information, see <a href="https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/fleetwise-regions.html">Amazon Web Services Region and feature availability</a> in the <i>Amazon Web Services IoT FleetWise Developer Guide</i>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTFleetWiseClient, CreateCampaignCommand } from "@aws-sdk/client-iotfleetwise"; // ES Modules import
 * // const { IoTFleetWiseClient, CreateCampaignCommand } = require("@aws-sdk/client-iotfleetwise"); // CommonJS import
 * // import type { IoTFleetWiseClientConfig } from "@aws-sdk/client-iotfleetwise";
 * const config = {}; // type is IoTFleetWiseClientConfig
 * const client = new IoTFleetWiseClient(config);
 * const input = { // CreateCampaignRequest
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   signalCatalogArn: "STRING_VALUE", // required
 *   targetArn: "STRING_VALUE", // required
 *   startTime: new Date("TIMESTAMP"),
 *   expiryTime: new Date("TIMESTAMP"),
 *   postTriggerCollectionDuration: Number("long"),
 *   diagnosticsMode: "OFF" || "SEND_ACTIVE_DTCS",
 *   spoolingMode: "OFF" || "TO_DISK",
 *   compression: "OFF" || "SNAPPY",
 *   priority: Number("int"),
 *   signalsToCollect: [ // SignalInformationList
 *     { // SignalInformation
 *       name: "STRING_VALUE", // required
 *       maxSampleCount: Number("long"),
 *       minimumSamplingIntervalMs: Number("long"),
 *       dataPartitionId: "STRING_VALUE",
 *     },
 *   ],
 *   collectionScheme: { // CollectionScheme Union: only one key present
 *     timeBasedCollectionScheme: { // TimeBasedCollectionScheme
 *       periodMs: Number("long"), // required
 *     },
 *     conditionBasedCollectionScheme: { // ConditionBasedCollectionScheme
 *       expression: "STRING_VALUE", // required
 *       minimumTriggerIntervalMs: Number("long"),
 *       triggerMode: "ALWAYS" || "RISING_EDGE",
 *       conditionLanguageVersion: Number("int"),
 *     },
 *   },
 *   dataExtraDimensions: [ // DataExtraDimensionNodePathList
 *     "STRING_VALUE",
 *   ],
 *   tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   dataDestinationConfigs: [ // DataDestinationConfigs
 *     { // DataDestinationConfig Union: only one key present
 *       s3Config: { // S3Config
 *         bucketArn: "STRING_VALUE", // required
 *         dataFormat: "JSON" || "PARQUET",
 *         storageCompressionFormat: "NONE" || "GZIP",
 *         prefix: "STRING_VALUE",
 *       },
 *       timestreamConfig: { // TimestreamConfig
 *         timestreamTableArn: "STRING_VALUE", // required
 *         executionRoleArn: "STRING_VALUE", // required
 *       },
 *       mqttTopicConfig: { // MqttTopicConfig
 *         mqttTopicArn: "STRING_VALUE", // required
 *         executionRoleArn: "STRING_VALUE", // required
 *       },
 *     },
 *   ],
 *   dataPartitions: [ // DataPartitions
 *     { // DataPartition
 *       id: "STRING_VALUE", // required
 *       storageOptions: { // DataPartitionStorageOptions
 *         maximumSize: { // StorageMaximumSize
 *           unit: "MB" || "GB" || "TB", // required
 *           value: Number("int"), // required
 *         },
 *         storageLocation: "STRING_VALUE", // required
 *         minimumTimeToLive: { // StorageMinimumTimeToLive
 *           unit: "HOURS" || "DAYS" || "WEEKS", // required
 *           value: Number("int"), // required
 *         },
 *       },
 *       uploadOptions: { // DataPartitionUploadOptions
 *         expression: "STRING_VALUE", // required
 *         conditionLanguageVersion: Number("int"),
 *       },
 *     },
 *   ],
 *   signalsToFetch: [ // SignalFetchInformationList
 *     { // SignalFetchInformation
 *       fullyQualifiedName: "STRING_VALUE", // required
 *       signalFetchConfig: { // SignalFetchConfig Union: only one key present
 *         timeBased: { // TimeBasedSignalFetchConfig
 *           executionFrequencyMs: Number("long"), // required
 *         },
 *         conditionBased: { // ConditionBasedSignalFetchConfig
 *           conditionExpression: "STRING_VALUE", // required
 *           triggerMode: "ALWAYS" || "RISING_EDGE", // required
 *         },
 *       },
 *       conditionLanguageVersion: Number("int"),
 *       actions: [ // EventExpressionList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new CreateCampaignCommand(input);
 * const response = await client.send(command);
 * // { // CreateCampaignResponse
 * //   name: "STRING_VALUE",
 * //   arn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateCampaignCommandInput - {@link CreateCampaignCommandInput}
 * @returns {@link CreateCampaignCommandOutput}
 * @see {@link CreateCampaignCommandInput} for command's `input` shape.
 * @see {@link CreateCampaignCommandOutput} for command's `response` shape.
 * @see {@link IoTFleetWiseClientResolvedConfig | config} for IoTFleetWiseClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permission to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request has conflicting operations. This can occur if you're trying to perform
 *             more than one operation on the same resource at the same time.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A service quota was exceeded. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource wasn't found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request couldn't be completed due to throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request couldn't be completed because the server temporarily failed.</p>
 *
 * @throws {@link IoTFleetWiseServiceException}
 * <p>Base exception class for all service exceptions from IoTFleetWise service.</p>
 *
 *
 * @public
 */
export class CreateCampaignCommand extends $Command
  .classBuilder<
    CreateCampaignCommandInput,
    CreateCampaignCommandOutput,
    IoTFleetWiseClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTFleetWiseClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("IoTAutobahnControlPlane", "CreateCampaign", {})
  .n("IoTFleetWiseClient", "CreateCampaignCommand")
  .sc(CreateCampaign)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateCampaignRequest;
      output: CreateCampaignResponse;
    };
    sdk: {
      input: CreateCampaignCommandInput;
      output: CreateCampaignCommandOutput;
    };
  };
}
