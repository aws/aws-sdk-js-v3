// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeStorageSystemResourcesRequest, DescribeStorageSystemResourcesResponse } from "../models/models_0";
import {
  de_DescribeStorageSystemResourcesCommand,
  se_DescribeStorageSystemResourcesCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeStorageSystemResourcesCommand}.
 */
export interface DescribeStorageSystemResourcesCommandInput extends DescribeStorageSystemResourcesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeStorageSystemResourcesCommand}.
 */
export interface DescribeStorageSystemResourcesCommandOutput
  extends DescribeStorageSystemResourcesResponse,
    __MetadataBearer {}

/**
 * <p>Returns information that DataSync Discovery collects about resources in your on-premises storage
 *       system.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, DescribeStorageSystemResourcesCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, DescribeStorageSystemResourcesCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const input = { // DescribeStorageSystemResourcesRequest
 *   DiscoveryJobArn: "STRING_VALUE", // required
 *   ResourceType: "SVM" || "VOLUME" || "CLUSTER", // required
 *   ResourceIds: [ // ResourceIds
 *     "STRING_VALUE",
 *   ],
 *   Filter: { // ResourceFilters
 *     "<keys>": [ // FilterMembers
 *       "STRING_VALUE",
 *     ],
 *   },
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeStorageSystemResourcesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeStorageSystemResourcesResponse
 * //   ResourceDetails: { // ResourceDetails
 * //     NetAppONTAPSVMs: [ // NetAppONTAPSVMs
 * //       { // NetAppONTAPSVM
 * //         ClusterUuid: "STRING_VALUE",
 * //         ResourceId: "STRING_VALUE",
 * //         SvmName: "STRING_VALUE",
 * //         CifsShareCount: Number("long"),
 * //         EnabledProtocols: [ // EnabledProtocols
 * //           "STRING_VALUE",
 * //         ],
 * //         TotalCapacityUsed: Number("long"),
 * //         TotalCapacityProvisioned: Number("long"),
 * //         TotalLogicalCapacityUsed: Number("long"),
 * //         MaxP95Performance: { // MaxP95Performance
 * //           IopsRead: Number("double"),
 * //           IopsWrite: Number("double"),
 * //           IopsOther: Number("double"),
 * //           IopsTotal: Number("double"),
 * //           ThroughputRead: Number("double"),
 * //           ThroughputWrite: Number("double"),
 * //           ThroughputOther: Number("double"),
 * //           ThroughputTotal: Number("double"),
 * //           LatencyRead: Number("double"),
 * //           LatencyWrite: Number("double"),
 * //           LatencyOther: Number("double"),
 * //         },
 * //         Recommendations: [ // Recommendations
 * //           { // Recommendation
 * //             StorageType: "STRING_VALUE",
 * //             StorageConfiguration: { // RecommendationsConfigMap
 * //               "<keys>": "STRING_VALUE",
 * //             },
 * //             EstimatedMonthlyStorageCost: "STRING_VALUE",
 * //           },
 * //         ],
 * //         NfsExportedVolumes: Number("long"),
 * //         RecommendationStatus: "NONE" || "IN_PROGRESS" || "COMPLETED" || "FAILED",
 * //         TotalSnapshotCapacityUsed: Number("long"),
 * //         LunCount: Number("long"),
 * //       },
 * //     ],
 * //     NetAppONTAPVolumes: [ // NetAppONTAPVolumes
 * //       { // NetAppONTAPVolume
 * //         VolumeName: "STRING_VALUE",
 * //         ResourceId: "STRING_VALUE",
 * //         CifsShareCount: Number("long"),
 * //         SecurityStyle: "STRING_VALUE",
 * //         SvmUuid: "STRING_VALUE",
 * //         SvmName: "STRING_VALUE",
 * //         CapacityUsed: Number("long"),
 * //         CapacityProvisioned: Number("long"),
 * //         LogicalCapacityUsed: Number("long"),
 * //         NfsExported: true || false,
 * //         SnapshotCapacityUsed: Number("long"),
 * //         MaxP95Performance: {
 * //           IopsRead: Number("double"),
 * //           IopsWrite: Number("double"),
 * //           IopsOther: Number("double"),
 * //           IopsTotal: Number("double"),
 * //           ThroughputRead: Number("double"),
 * //           ThroughputWrite: Number("double"),
 * //           ThroughputOther: Number("double"),
 * //           ThroughputTotal: Number("double"),
 * //           LatencyRead: Number("double"),
 * //           LatencyWrite: Number("double"),
 * //           LatencyOther: Number("double"),
 * //         },
 * //         Recommendations: [
 * //           {
 * //             StorageType: "STRING_VALUE",
 * //             StorageConfiguration: {
 * //               "<keys>": "STRING_VALUE",
 * //             },
 * //             EstimatedMonthlyStorageCost: "STRING_VALUE",
 * //           },
 * //         ],
 * //         RecommendationStatus: "NONE" || "IN_PROGRESS" || "COMPLETED" || "FAILED",
 * //         LunCount: Number("long"),
 * //       },
 * //     ],
 * //     NetAppONTAPClusters: [ // NetAppONTAPClusters
 * //       { // NetAppONTAPCluster
 * //         CifsShareCount: Number("long"),
 * //         NfsExportedVolumes: Number("long"),
 * //         ResourceId: "STRING_VALUE",
 * //         ClusterName: "STRING_VALUE",
 * //         MaxP95Performance: {
 * //           IopsRead: Number("double"),
 * //           IopsWrite: Number("double"),
 * //           IopsOther: Number("double"),
 * //           IopsTotal: Number("double"),
 * //           ThroughputRead: Number("double"),
 * //           ThroughputWrite: Number("double"),
 * //           ThroughputOther: Number("double"),
 * //           ThroughputTotal: Number("double"),
 * //           LatencyRead: Number("double"),
 * //           LatencyWrite: Number("double"),
 * //           LatencyOther: Number("double"),
 * //         },
 * //         ClusterBlockStorageSize: Number("long"),
 * //         ClusterBlockStorageUsed: Number("long"),
 * //         ClusterBlockStorageLogicalUsed: Number("long"),
 * //         Recommendations: [
 * //           {
 * //             StorageType: "STRING_VALUE",
 * //             StorageConfiguration: {
 * //               "<keys>": "STRING_VALUE",
 * //             },
 * //             EstimatedMonthlyStorageCost: "STRING_VALUE",
 * //           },
 * //         ],
 * //         RecommendationStatus: "NONE" || "IN_PROGRESS" || "COMPLETED" || "FAILED",
 * //         LunCount: Number("long"),
 * //         ClusterCloudStorageUsed: Number("long"),
 * //       },
 * //     ],
 * //   },
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeStorageSystemResourcesCommandInput - {@link DescribeStorageSystemResourcesCommandInput}
 * @returns {@link DescribeStorageSystemResourcesCommandOutput}
 * @see {@link DescribeStorageSystemResourcesCommandInput} for command's `input` shape.
 * @see {@link DescribeStorageSystemResourcesCommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for DataSyncClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception is thrown when an error occurs in the DataSync
 *       service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception is thrown when the client submits a malformed request.</p>
 *
 * @throws {@link DataSyncServiceException}
 * <p>Base exception class for all service exceptions from DataSync service.</p>
 *
 *
 * @public
 */
export class DescribeStorageSystemResourcesCommand extends $Command
  .classBuilder<
    DescribeStorageSystemResourcesCommandInput,
    DescribeStorageSystemResourcesCommandOutput,
    DataSyncClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataSyncClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("FmrsService", "DescribeStorageSystemResources", {})
  .n("DataSyncClient", "DescribeStorageSystemResourcesCommand")
  .f(void 0, void 0)
  .ser(se_DescribeStorageSystemResourcesCommand)
  .de(de_DescribeStorageSystemResourcesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeStorageSystemResourcesRequest;
      output: DescribeStorageSystemResourcesResponse;
    };
    sdk: {
      input: DescribeStorageSystemResourcesCommandInput;
      output: DescribeStorageSystemResourcesCommandOutput;
    };
  };
}
