// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MemoryDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MemoryDBClient";
import { DeleteSnapshotRequest, DeleteSnapshotResponse } from "../models/models_0";
import { de_DeleteSnapshotCommand, se_DeleteSnapshotCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteSnapshotCommand}.
 */
export interface DeleteSnapshotCommandInput extends DeleteSnapshotRequest {}
/**
 * @public
 *
 * The output of {@link DeleteSnapshotCommand}.
 */
export interface DeleteSnapshotCommandOutput extends DeleteSnapshotResponse, __MetadataBearer {}

/**
 * <p>Deletes an existing snapshot. When you receive a successful response from this operation, MemoryDB immediately begins deleting the snapshot; you cannot cancel or revert this operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MemoryDBClient, DeleteSnapshotCommand } from "@aws-sdk/client-memorydb"; // ES Modules import
 * // const { MemoryDBClient, DeleteSnapshotCommand } = require("@aws-sdk/client-memorydb"); // CommonJS import
 * // import type { MemoryDBClientConfig } from "@aws-sdk/client-memorydb";
 * const config = {}; // type is MemoryDBClientConfig
 * const client = new MemoryDBClient(config);
 * const input = { // DeleteSnapshotRequest
 *   SnapshotName: "STRING_VALUE", // required
 * };
 * const command = new DeleteSnapshotCommand(input);
 * const response = await client.send(command);
 * // { // DeleteSnapshotResponse
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
 * @param DeleteSnapshotCommandInput - {@link DeleteSnapshotCommandInput}
 * @returns {@link DeleteSnapshotCommandOutput}
 * @see {@link DeleteSnapshotCommandInput} for command's `input` shape.
 * @see {@link DeleteSnapshotCommandOutput} for command's `response` shape.
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
 * @throws {@link SnapshotNotFoundFault} (client fault)
 *  <p>The specified snapshot does not exist.</p>
 *
 * @throws {@link MemoryDBServiceException}
 * <p>Base exception class for all service exceptions from MemoryDB service.</p>
 *
 *
 * @public
 */
export class DeleteSnapshotCommand extends $Command
  .classBuilder<
    DeleteSnapshotCommandInput,
    DeleteSnapshotCommandOutput,
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
  .s("AmazonMemoryDB", "DeleteSnapshot", {})
  .n("MemoryDBClient", "DeleteSnapshotCommand")
  .f(void 0, void 0)
  .ser(se_DeleteSnapshotCommand)
  .de(de_DeleteSnapshotCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteSnapshotRequest;
      output: DeleteSnapshotResponse;
    };
    sdk: {
      input: DeleteSnapshotCommandInput;
      output: DeleteSnapshotCommandOutput;
    };
  };
}
