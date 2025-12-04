// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { FinspaceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FinspaceClient";
import type { GetKxClusterRequest, GetKxClusterResponse } from "../models/models_0";
import { GetKxCluster } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetKxClusterCommand}.
 */
export interface GetKxClusterCommandInput extends GetKxClusterRequest {}
/**
 * @public
 *
 * The output of {@link GetKxClusterCommand}.
 */
export interface GetKxClusterCommandOutput extends GetKxClusterResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about a kdb cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceClient, GetKxClusterCommand } from "@aws-sdk/client-finspace"; // ES Modules import
 * // const { FinspaceClient, GetKxClusterCommand } = require("@aws-sdk/client-finspace"); // CommonJS import
 * // import type { FinspaceClientConfig } from "@aws-sdk/client-finspace";
 * const config = {}; // type is FinspaceClientConfig
 * const client = new FinspaceClient(config);
 * const input = { // GetKxClusterRequest
 *   environmentId: "STRING_VALUE", // required
 *   clusterName: "STRING_VALUE", // required
 * };
 * const command = new GetKxClusterCommand(input);
 * const response = await client.send(command);
 * // { // GetKxClusterResponse
 * //   status: "PENDING" || "CREATING" || "CREATE_FAILED" || "RUNNING" || "UPDATING" || "DELETING" || "DELETED" || "DELETE_FAILED",
 * //   statusReason: "STRING_VALUE",
 * //   clusterName: "STRING_VALUE",
 * //   clusterType: "HDB" || "RDB" || "GATEWAY" || "GP" || "TICKERPLANT",
 * //   tickerplantLogConfiguration: { // TickerplantLogConfiguration
 * //     tickerplantLogVolumes: [ // TickerplantLogVolumes
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * //   volumes: [ // Volumes
 * //     { // Volume
 * //       volumeName: "STRING_VALUE",
 * //       volumeType: "NAS_1",
 * //     },
 * //   ],
 * //   databases: [ // KxDatabaseConfigurations
 * //     { // KxDatabaseConfiguration
 * //       databaseName: "STRING_VALUE", // required
 * //       cacheConfigurations: [ // KxDatabaseCacheConfigurations
 * //         { // KxDatabaseCacheConfiguration
 * //           cacheType: "STRING_VALUE", // required
 * //           dbPaths: [ // DbPaths // required
 * //             "STRING_VALUE",
 * //           ],
 * //           dataviewName: "STRING_VALUE",
 * //         },
 * //       ],
 * //       changesetId: "STRING_VALUE",
 * //       dataviewName: "STRING_VALUE",
 * //       dataviewConfiguration: { // KxDataviewConfiguration
 * //         dataviewName: "STRING_VALUE",
 * //         dataviewVersionId: "STRING_VALUE",
 * //         changesetId: "STRING_VALUE",
 * //         segmentConfigurations: [ // KxDataviewSegmentConfigurationList
 * //           { // KxDataviewSegmentConfiguration
 * //             dbPaths: [ // SegmentConfigurationDbPathList // required
 * //               "STRING_VALUE",
 * //             ],
 * //             volumeName: "STRING_VALUE", // required
 * //             onDemand: true || false,
 * //           },
 * //         ],
 * //       },
 * //     },
 * //   ],
 * //   cacheStorageConfigurations: [ // KxCacheStorageConfigurations
 * //     { // KxCacheStorageConfiguration
 * //       type: "STRING_VALUE", // required
 * //       size: Number("int"), // required
 * //     },
 * //   ],
 * //   autoScalingConfiguration: { // AutoScalingConfiguration
 * //     minNodeCount: Number("int"),
 * //     maxNodeCount: Number("int"),
 * //     autoScalingMetric: "CPU_UTILIZATION_PERCENTAGE",
 * //     metricTarget: Number("double"),
 * //     scaleInCooldownSeconds: Number("double"),
 * //     scaleOutCooldownSeconds: Number("double"),
 * //   },
 * //   clusterDescription: "STRING_VALUE",
 * //   capacityConfiguration: { // CapacityConfiguration
 * //     nodeType: "STRING_VALUE",
 * //     nodeCount: Number("int"),
 * //   },
 * //   releaseLabel: "STRING_VALUE",
 * //   vpcConfiguration: { // VpcConfiguration
 * //     vpcId: "STRING_VALUE",
 * //     securityGroupIds: [ // SecurityGroupIdList
 * //       "STRING_VALUE",
 * //     ],
 * //     subnetIds: [ // SubnetIdList
 * //       "STRING_VALUE",
 * //     ],
 * //     ipAddressType: "IP_V4",
 * //   },
 * //   initializationScript: "STRING_VALUE",
 * //   commandLineArguments: [ // KxCommandLineArguments
 * //     { // KxCommandLineArgument
 * //       key: "STRING_VALUE",
 * //       value: "STRING_VALUE",
 * //     },
 * //   ],
 * //   code: { // CodeConfiguration
 * //     s3Bucket: "STRING_VALUE",
 * //     s3Key: "STRING_VALUE",
 * //     s3ObjectVersion: "STRING_VALUE",
 * //   },
 * //   executionRole: "STRING_VALUE",
 * //   lastModifiedTimestamp: new Date("TIMESTAMP"),
 * //   savedownStorageConfiguration: { // KxSavedownStorageConfiguration
 * //     type: "SDS01",
 * //     size: Number("int"),
 * //     volumeName: "STRING_VALUE",
 * //   },
 * //   azMode: "SINGLE" || "MULTI",
 * //   availabilityZoneId: "STRING_VALUE",
 * //   createdTimestamp: new Date("TIMESTAMP"),
 * //   scalingGroupConfiguration: { // KxScalingGroupConfiguration
 * //     scalingGroupName: "STRING_VALUE", // required
 * //     memoryLimit: Number("int"),
 * //     memoryReservation: Number("int"), // required
 * //     nodeCount: Number("int"), // required
 * //     cpu: Number("double"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetKxClusterCommandInput - {@link GetKxClusterCommandInput}
 * @returns {@link GetKxClusterCommandOutput}
 * @see {@link GetKxClusterCommandInput} for command's `input` shape.
 * @see {@link GetKxClusterCommandOutput} for command's `response` shape.
 * @see {@link FinspaceClientResolvedConfig | config} for FinspaceClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict with this action, and it could not be completed.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *          failure.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A service limit or quota is exceeded.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link FinspaceServiceException}
 * <p>Base exception class for all service exceptions from Finspace service.</p>
 *
 *
 * @public
 */
export class GetKxClusterCommand extends $Command
  .classBuilder<
    GetKxClusterCommandInput,
    GetKxClusterCommandOutput,
    FinspaceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FinspaceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSHabaneroManagementService", "GetKxCluster", {})
  .n("FinspaceClient", "GetKxClusterCommand")
  .sc(GetKxCluster)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetKxClusterRequest;
      output: GetKxClusterResponse;
    };
    sdk: {
      input: GetKxClusterCommandInput;
      output: GetKxClusterCommandOutput;
    };
  };
}
