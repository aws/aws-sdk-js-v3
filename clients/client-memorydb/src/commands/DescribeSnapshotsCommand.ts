// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MemoryDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MemoryDBClient";
import { DescribeSnapshotsRequest, DescribeSnapshotsResponse } from "../models/models_0";
import { de_DescribeSnapshotsCommand, se_DescribeSnapshotsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeSnapshotsCommand}.
 */
export interface DescribeSnapshotsCommandInput extends DescribeSnapshotsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeSnapshotsCommand}.
 */
export interface DescribeSnapshotsCommandOutput extends DescribeSnapshotsResponse, __MetadataBearer {}

/**
 * <p>Returns information about cluster snapshots. By default, DescribeSnapshots lists all of your snapshots; it can optionally describe a single snapshot,
 *          or just the snapshots associated with a particular cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MemoryDBClient, DescribeSnapshotsCommand } from "@aws-sdk/client-memorydb"; // ES Modules import
 * // const { MemoryDBClient, DescribeSnapshotsCommand } = require("@aws-sdk/client-memorydb"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new MemoryDBClient(config);
 * const input = { // DescribeSnapshotsRequest
 *   ClusterName: "STRING_VALUE",
 *   SnapshotName: "STRING_VALUE",
 *   Source: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   ShowDetail: true || false,
 * };
 * const command = new DescribeSnapshotsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSnapshotsResponse
 * //   NextToken: "STRING_VALUE",
 * //   Snapshots: [ // SnapshotList
 * //     { // Snapshot
 * //       Name: "STRING_VALUE",
 * //       Status: "STRING_VALUE",
 * //       Source: "STRING_VALUE",
 * //       KmsKeyId: "STRING_VALUE",
 * //       ARN: "STRING_VALUE",
 * //       ClusterConfiguration: { // ClusterConfiguration
 * //         Name: "STRING_VALUE",
 * //         Description: "STRING_VALUE",
 * //         NodeType: "STRING_VALUE",
 * //         Engine: "STRING_VALUE",
 * //         EngineVersion: "STRING_VALUE",
 * //         MaintenanceWindow: "STRING_VALUE",
 * //         TopicArn: "STRING_VALUE",
 * //         Port: Number("int"),
 * //         ParameterGroupName: "STRING_VALUE",
 * //         SubnetGroupName: "STRING_VALUE",
 * //         VpcId: "STRING_VALUE",
 * //         SnapshotRetentionLimit: Number("int"),
 * //         SnapshotWindow: "STRING_VALUE",
 * //         NumShards: Number("int"),
 * //         Shards: [ // ShardDetails
 * //           { // ShardDetail
 * //             Name: "STRING_VALUE",
 * //             Configuration: { // ShardConfiguration
 * //               Slots: "STRING_VALUE",
 * //               ReplicaCount: Number("int"),
 * //             },
 * //             Size: "STRING_VALUE",
 * //             SnapshotCreationTime: new Date("TIMESTAMP"),
 * //           },
 * //         ],
 * //         MultiRegionParameterGroupName: "STRING_VALUE",
 * //         MultiRegionClusterName: "STRING_VALUE",
 * //       },
 * //       DataTiering: "true" || "false",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeSnapshotsCommandInput - {@link DescribeSnapshotsCommandInput}
 * @returns {@link DescribeSnapshotsCommandOutput}
 * @see {@link DescribeSnapshotsCommandInput} for command's `input` shape.
 * @see {@link DescribeSnapshotsCommandOutput} for command's `response` shape.
 * @see {@link MemoryDBClientResolvedConfig | config} for MemoryDBClient's `config` shape.
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p></p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p></p>
 *
 * @throws {@link ServiceLinkedRoleNotFoundFault} (client fault)
 *  <p></p>
 *
 * @throws {@link SnapshotNotFoundFault} (client fault)
 *  <p></p>
 *
 * @throws {@link MemoryDBServiceException}
 * <p>Base exception class for all service exceptions from MemoryDB service.</p>
 *
 * @public
 */
export class DescribeSnapshotsCommand extends $Command
  .classBuilder<
    DescribeSnapshotsCommandInput,
    DescribeSnapshotsCommandOutput,
    MemoryDBClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MemoryDBClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonMemoryDB", "DescribeSnapshots", {})
  .n("MemoryDBClient", "DescribeSnapshotsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeSnapshotsCommand)
  .de(de_DescribeSnapshotsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeSnapshotsRequest;
      output: DescribeSnapshotsResponse;
    };
    sdk: {
      input: DescribeSnapshotsCommandInput;
      output: DescribeSnapshotsCommandOutput;
    };
  };
}
