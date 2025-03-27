// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DocDBElasticClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DocDBElasticClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { RestoreClusterFromSnapshotInput, RestoreClusterFromSnapshotOutput } from "../models/models_0";
import { de_RestoreClusterFromSnapshotCommand, se_RestoreClusterFromSnapshotCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Restores an elastic cluster from a snapshot.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DocDBElasticClient, RestoreClusterFromSnapshotCommand } from "@aws-sdk/client-docdb-elastic"; // ES Modules import
 * // const { DocDBElasticClient, RestoreClusterFromSnapshotCommand } = require("@aws-sdk/client-docdb-elastic"); // CommonJS import
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
 *  <p>An exception that occurs when there are not sufficient permissions to perform an action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was an access conflict.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There was an internal server error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be located.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The service quota for the action was exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>ThrottlingException will be thrown when request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A structure defining a validation exception.</p>
 *
 * @throws {@link DocDBElasticServiceException}
 * <p>Base exception class for all service exceptions from DocDBElastic service.</p>
 *
 *
 * @public
 */
export class RestoreClusterFromSnapshotCommand extends $Command
  .classBuilder<
    RestoreClusterFromSnapshotCommandInput,
    RestoreClusterFromSnapshotCommandOutput,
    DocDBElasticClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DocDBElasticClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ChimeraDbLionfishServiceLambda", "RestoreClusterFromSnapshot", {})
  .n("DocDBElasticClient", "RestoreClusterFromSnapshotCommand")
  .f(void 0, void 0)
  .ser(se_RestoreClusterFromSnapshotCommand)
  .de(de_RestoreClusterFromSnapshotCommand)
  .build() {
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
