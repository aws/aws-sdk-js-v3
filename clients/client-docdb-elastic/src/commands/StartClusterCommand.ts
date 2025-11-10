// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DocDBElasticClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DocDBElasticClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StartClusterInput, StartClusterOutput } from "../models/models_0";
import { StartCluster } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartClusterCommand}.
 */
export interface StartClusterCommandInput extends StartClusterInput {}
/**
 * @public
 *
 * The output of {@link StartClusterCommand}.
 */
export interface StartClusterCommandOutput extends StartClusterOutput, __MetadataBearer {}

/**
 * <p>Restarts the stopped elastic cluster that is specified by <code>clusterARN</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DocDBElasticClient, StartClusterCommand } from "@aws-sdk/client-docdb-elastic"; // ES Modules import
 * // const { DocDBElasticClient, StartClusterCommand } = require("@aws-sdk/client-docdb-elastic"); // CommonJS import
 * // import type { DocDBElasticClientConfig } from "@aws-sdk/client-docdb-elastic";
 * const config = {}; // type is DocDBElasticClientConfig
 * const client = new DocDBElasticClient(config);
 * const input = { // StartClusterInput
 *   clusterArn: "STRING_VALUE", // required
 * };
 * const command = new StartClusterCommand(input);
 * const response = await client.send(command);
 * // { // StartClusterOutput
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
 * @param StartClusterCommandInput - {@link StartClusterCommandInput}
 * @returns {@link StartClusterCommandOutput}
 * @see {@link StartClusterCommandInput} for command's `input` shape.
 * @see {@link StartClusterCommandOutput} for command's `response` shape.
 * @see {@link DocDBElasticClientResolvedConfig | config} for DocDBElasticClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>An exception that occurs when there are not sufficient permissions to perform an action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There was an internal server error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be located.</p>
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
 * @example Basic Start Cluster Example
 * ```javascript
 * // update applied
 * const input = {
 *   clusterArn: "arn:aws:docdb-elastic:us-east-1:$AWS_ACCOUNT_ID:cluster/$CLUSTER_ID"
 * };
 * const command = new StartClusterCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   cluster: {
 *     adminUserName: "sampleAdminUser",
 *     authType: "PLAIN_TEXT",
 *     backupRetentionPeriod: 1,
 *     clusterArn: "arn:aws:docdb-elastic:us-east-1:$AWS_ACCOUNT_ID:cluster/$CLUSTER_ID",
 *     clusterEndpoint: "sampleClusterName.us-east-1.docdb-elastic.amazonaws.com",
 *     clusterName: "sampleClusterName",
 *     createTime: "2000-01-01T00:00:00.000Z",
 *     kmsKeyId: "AWS_OWNED_KMS_KEY",
 *     preferredBackupWindow: "01:00-01:30",
 *     preferredMaintenanceWindow: "mon:00:00-mon:00:30",
 *     shardCapacity: 2,
 *     shardCount: 2,
 *     shardInstanceCount: 1,
 *     shards:     [],
 *     status: "STARTING",
 *     subnetIds: [
 *       "subnetId1",
 *       "subnetId2"
 *     ],
 *     vpcSecurityGroupIds: [
 *       "vpcSgId1, vpcSgId2"
 *     ]
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class StartClusterCommand extends $Command
  .classBuilder<
    StartClusterCommandInput,
    StartClusterCommandOutput,
    DocDBElasticClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DocDBElasticClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ChimeraDbLionfishServiceLambda", "StartCluster", {})
  .n("DocDBElasticClient", "StartClusterCommand")
  .sc(StartCluster)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartClusterInput;
      output: StartClusterOutput;
    };
    sdk: {
      input: StartClusterCommandInput;
      output: StartClusterCommandOutput;
    };
  };
}
