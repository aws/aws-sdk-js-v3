// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RestoreClusterFromSnapshotInput, RestoreClusterFromSnapshotOutput } from "../models/models_0";
import { RestoreClusterFromSnapshot$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RestoreClusterFromSnapshotCommand}.
 */
export interface RestoreClusterFromSnapshotCommandInput extends RestoreClusterFromSnapshotInput {}
/**
 * @public
 *
 * The output of {@link RestoreClusterFromSnapshotCommand}.
 */
export interface RestoreClusterFromSnapshotCommandOutput extends RestoreClusterFromSnapshotOutput, __MetadataBearer {}

/**
 * Restores an elastic cluster from a snapshot.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DocDBElasticClient, RestoreClusterFromSnapshotCommand } from "@aws-sdk/client-docdb-elastic"; // ES Modules import
 * // const { DocDBElasticClient, RestoreClusterFromSnapshotCommand } = require("@aws-sdk/client-docdb-elastic"); // CommonJS import
 * // import type { DocDBElasticClientConfig } from "@aws-sdk/client-docdb-elastic";
 * const config = {}; // type is DocDBElasticClientConfig
 * const client = new DocDBElasticClient(config);
 * const input = { // RestoreClusterFromSnapshotInput
 *   clusterName: "STRING_VALUE", // required
 *   snapshotArn: "STRING_VALUE", // required
 *   vpcSecurityGroupIds: [ // StringList
 *     "STRING_VALUE",
 *   ],
 *   subnetIds: [
 *     "STRING_VALUE",
 *   ],
 *   kmsKeyId: "STRING_VALUE",
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   shardCapacity: Number("int"),
 *   shardInstanceCount: Number("int"),
 * };
 * const command = new RestoreClusterFromSnapshotCommand(input);
 * const response = await client.send(command);
 * // { // RestoreClusterFromSnapshotOutput
 * //   cluster: { // Cluster
 * //     clusterName: "STRING_VALUE", // required
 * //     clusterArn: "STRING_VALUE", // required
 * //     status: "STRING_VALUE", // required
 * //     clusterEndpoint: "STRING_VALUE", // required
 * //     createTime: "STRING_VALUE", // required
 * //     adminUserName: "STRING_VALUE", // required
 * //     authType: "STRING_VALUE", // required
 * //     shardCapacity: Number("int"), // required
 * //     shardCount: Number("int"), // required
 * //     vpcSecurityGroupIds: [ // StringList // required
 * //       "STRING_VALUE",
 * //     ],
 * //     subnetIds: [ // required
 * //       "STRING_VALUE",
 * //     ],
 * //     preferredMaintenanceWindow: "STRING_VALUE", // required
 * //     kmsKeyId: "STRING_VALUE", // required
 * //     shards: [ // ShardList
 * //       { // Shard
 * //         shardId: "STRING_VALUE", // required
 * //         createTime: "STRING_VALUE", // required
 * //         status: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     backupRetentionPeriod: Number("int"),
 * //     preferredBackupWindow: "STRING_VALUE",
 * //     shardInstanceCount: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param RestoreClusterFromSnapshotCommandInput - {@link RestoreClusterFromSnapshotCommandInput}
 * @returns {@link RestoreClusterFromSnapshotCommandOutput}
 * @see {@link RestoreClusterFromSnapshotCommandInput} for command's `input` shape.
 * @see {@link RestoreClusterFromSnapshotCommandOutput} for command's `response` shape.
 * @see {@link DocDBElasticClientResolvedConfig | config} for DocDBElasticClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * An exception that occurs when there are not sufficient permissions to perform an action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * There was an access conflict.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * There was an internal server error.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource could not be located.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The service quota for the action was exceeded.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * ThrottlingException will be thrown when request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * A structure defining a validation exception.
 *
 * @throws {@link DocDBElasticServiceException}
 *
 * Base exception class for all service exceptions from DocDBElastic service.
 *
 * @public
 */
export class RestoreClusterFromSnapshotCommand extends command<RestoreClusterFromSnapshotCommandInput, RestoreClusterFromSnapshotCommandOutput>(
  _ep0,
  _mw0,
  "RestoreClusterFromSnapshot",
  RestoreClusterFromSnapshot$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RestoreClusterFromSnapshotInput;
      output: RestoreClusterFromSnapshotOutput;
    };
    sdk: {
      input: RestoreClusterFromSnapshotCommandInput;
      output: RestoreClusterFromSnapshotCommandOutput;
    };
  };
}
