// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeStorageSystemResourceMetricsRequest,
  DescribeStorageSystemResourceMetricsResponse,
} from "../models/models_0";
import {
  de_DescribeStorageSystemResourceMetricsCommand,
  se_DescribeStorageSystemResourceMetricsCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeStorageSystemResourceMetricsCommand}.
 */
export interface DescribeStorageSystemResourceMetricsCommandInput extends DescribeStorageSystemResourceMetricsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeStorageSystemResourceMetricsCommand}.
 */
export interface DescribeStorageSystemResourceMetricsCommandOutput
  extends DescribeStorageSystemResourceMetricsResponse,
    __MetadataBearer {}

/**
 * <p>Returns information, including performance data and capacity usage, which DataSync Discovery
 *       collects about a specific resource in your-premises storage system.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, DescribeStorageSystemResourceMetricsCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, DescribeStorageSystemResourceMetricsCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new DataSyncClient(config);
 * const input = { // DescribeStorageSystemResourceMetricsRequest
 *   DiscoveryJobArn: "STRING_VALUE", // required
 *   ResourceType: "SVM" || "VOLUME" || "CLUSTER", // required
 *   ResourceId: "STRING_VALUE", // required
 *   StartTime: new Date("TIMESTAMP"),
 *   EndTime: new Date("TIMESTAMP"),
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeStorageSystemResourceMetricsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeStorageSystemResourceMetricsResponse
 * //   Metrics: [ // Metrics
 * //     { // ResourceMetrics
 * //       Timestamp: new Date("TIMESTAMP"),
 * //       P95Metrics: { // P95Metrics
 * //         IOPS: { // IOPS
 * //           Read: Number("double"),
 * //           Write: Number("double"),
 * //           Other: Number("double"),
 * //           Total: Number("double"),
 * //         },
 * //         Throughput: { // Throughput
 * //           Read: Number("double"),
 * //           Write: Number("double"),
 * //           Other: Number("double"),
 * //           Total: Number("double"),
 * //         },
 * //         Latency: { // Latency
 * //           Read: Number("double"),
 * //           Write: Number("double"),
 * //           Other: Number("double"),
 * //         },
 * //       },
 * //       Capacity: { // Capacity
 * //         Used: Number("long"),
 * //         Provisioned: Number("long"),
 * //         LogicalUsed: Number("long"),
 * //         ClusterCloudStorageUsed: Number("long"),
 * //       },
 * //       ResourceId: "STRING_VALUE",
 * //       ResourceType: "SVM" || "VOLUME" || "CLUSTER",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeStorageSystemResourceMetricsCommandInput - {@link DescribeStorageSystemResourceMetricsCommandInput}
 * @returns {@link DescribeStorageSystemResourceMetricsCommandOutput}
 * @see {@link DescribeStorageSystemResourceMetricsCommandInput} for command's `input` shape.
 * @see {@link DescribeStorageSystemResourceMetricsCommandOutput} for command's `response` shape.
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
 * @public
 */
export class DescribeStorageSystemResourceMetricsCommand extends $Command
  .classBuilder<
    DescribeStorageSystemResourceMetricsCommandInput,
    DescribeStorageSystemResourceMetricsCommandOutput,
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
  .s("FmrsService", "DescribeStorageSystemResourceMetrics", {})
  .n("DataSyncClient", "DescribeStorageSystemResourceMetricsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeStorageSystemResourceMetricsCommand)
  .de(de_DescribeStorageSystemResourceMetricsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeStorageSystemResourceMetricsRequest;
      output: DescribeStorageSystemResourceMetricsResponse;
    };
    sdk: {
      input: DescribeStorageSystemResourceMetricsCommandInput;
      output: DescribeStorageSystemResourceMetricsCommandOutput;
    };
  };
}
