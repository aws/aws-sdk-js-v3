// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MemoryDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MemoryDBClient";
import { CopySnapshotRequest, CopySnapshotResponse } from "../models/models_0";
import { CopySnapshot } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CopySnapshotCommand}.
 */
export interface CopySnapshotCommandInput extends CopySnapshotRequest {}
/**
 * @public
 *
 * The output of {@link CopySnapshotCommand}.
 */
export interface CopySnapshotCommandOutput extends CopySnapshotResponse, __MetadataBearer {}

/**
 * <p>Makes a copy of an existing snapshot.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MemoryDBClient, CopySnapshotCommand } from "@aws-sdk/client-memorydb"; // ES Modules import
 * // const { MemoryDBClient, CopySnapshotCommand } = require("@aws-sdk/client-memorydb"); // CommonJS import
 * // import type { MemoryDBClientConfig } from "@aws-sdk/client-memorydb";
 * const config = {}; // type is MemoryDBClientConfig
 * const client = new MemoryDBClient(config);
 * const input = { // CopySnapshotRequest
 *   SourceSnapshotName: "STRING_VALUE", // required
 *   TargetSnapshotName: "STRING_VALUE", // required
 *   TargetBucket: "STRING_VALUE",
 *   KmsKeyId: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CopySnapshotCommand(input);
 * const response = await client.send(command);
 * // { // CopySnapshotResponse
 * //   Snapshot: { // Snapshot
 * //     Name: "STRING_VALUE",
 * //     Status: "STRING_VALUE",
 * //     Source: "STRING_VALUE",
 * //     KmsKeyId: "STRING_VALUE",
 * //     ARN: "STRING_VALUE",
 * //     ClusterConfiguration: { // ClusterConfiguration
 * //       Name: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       NodeType: "STRING_VALUE",
 * //       Engine: "STRING_VALUE",
 * //       EngineVersion: "STRING_VALUE",
 * //       MaintenanceWindow: "STRING_VALUE",
 * //       TopicArn: "STRING_VALUE",
 * //       Port: Number("int"),
 * //       ParameterGroupName: "STRING_VALUE",
 * //       SubnetGroupName: "STRING_VALUE",
 * //       VpcId: "STRING_VALUE",
 * //       SnapshotRetentionLimit: Number("int"),
 * //       SnapshotWindow: "STRING_VALUE",
 * //       NumShards: Number("int"),
 * //       Shards: [ // ShardDetails
 * //         { // ShardDetail
 * //           Name: "STRING_VALUE",
 * //           Configuration: { // ShardConfiguration
 * //             Slots: "STRING_VALUE",
 * //             ReplicaCount: Number("int"),
 * //           },
 * //           Size: "STRING_VALUE",
 * //           SnapshotCreationTime: new Date("TIMESTAMP"),
 * //         },
 * //       ],
 * //       MultiRegionParameterGroupName: "STRING_VALUE",
 * //       MultiRegionClusterName: "STRING_VALUE",
 * //     },
 * //     DataTiering: "true" || "false",
 * //   },
 * // };
 *
 * ```
 *
 * @param CopySnapshotCommandInput - {@link CopySnapshotCommandInput}
 * @returns {@link CopySnapshotCommandOutput}
 * @see {@link CopySnapshotCommandInput} for command's `input` shape.
 * @see {@link CopySnapshotCommandOutput} for command's `response` shape.
 * @see {@link MemoryDBClientResolvedConfig | config} for MemoryDBClient's `config` shape.
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p>The specified parameter combination is not valid.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The specified parameter value is not valid.</p>
 *
 * @throws {@link InvalidSnapshotStateFault} (client fault)
 *  <p>The snapshot is not in a valid state for the requested operation.</p>
 *
 * @throws {@link ServiceLinkedRoleNotFoundFault} (client fault)
 *  <p>The required service-linked role was not found.</p>
 *
 * @throws {@link SnapshotAlreadyExistsFault} (client fault)
 *  <p>A snapshot with the specified name already exists.</p>
 *
 * @throws {@link SnapshotNotFoundFault} (client fault)
 *  <p>The specified snapshot does not exist.</p>
 *
 * @throws {@link SnapshotQuotaExceededFault} (client fault)
 *  <p>The request cannot be processed because it would exceed the maximum number of snapshots allowed.</p>
 *
 * @throws {@link TagQuotaPerResourceExceeded} (client fault)
 *  <p>The request cannot be processed because it would exceed the maximum number of tags allowed per resource.</p>
 *
 * @throws {@link MemoryDBServiceException}
 * <p>Base exception class for all service exceptions from MemoryDB service.</p>
 *
 *
 * @public
 */
export class CopySnapshotCommand extends $Command
  .classBuilder<
    CopySnapshotCommandInput,
    CopySnapshotCommandOutput,
    MemoryDBClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MemoryDBClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonMemoryDB", "CopySnapshot", {})
  .n("MemoryDBClient", "CopySnapshotCommand")
  .sc(CopySnapshot)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CopySnapshotRequest;
      output: CopySnapshotResponse;
    };
    sdk: {
      input: CopySnapshotCommandInput;
      output: CopySnapshotCommandOutput;
    };
  };
}
