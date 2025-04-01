// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DocDBElasticClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DocDBElasticClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateClusterInput, UpdateClusterInputFilterSensitiveLog, UpdateClusterOutput } from "../models/models_0";
import { de_UpdateClusterCommand, se_UpdateClusterCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateClusterCommand}.
 */
export interface UpdateClusterCommandInput extends UpdateClusterInput {}
/**
 * @public
 *
 * The output of {@link UpdateClusterCommand}.
 */
export interface UpdateClusterCommandOutput extends UpdateClusterOutput, __MetadataBearer {}

/**
 * <p>Modifies an elastic cluster. This includes updating admin-username/password,
 *     upgrading the API version, and setting up a backup window and maintenance window</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DocDBElasticClient, UpdateClusterCommand } from "@aws-sdk/client-docdb-elastic"; // ES Modules import
 * // const { DocDBElasticClient, UpdateClusterCommand } = require("@aws-sdk/client-docdb-elastic"); // CommonJS import
 * const client = new DocDBElasticClient(config);
 * const input = { // UpdateClusterInput
 *   clusterArn: "STRING_VALUE", // required
 *   authType: "STRING_VALUE",
 *   shardCapacity: Number("int"),
 *   shardCount: Number("int"),
 *   vpcSecurityGroupIds: [ // StringList
 *     "STRING_VALUE",
 *   ],
 *   subnetIds: [
 *     "STRING_VALUE",
 *   ],
 *   adminUserPassword: "STRING_VALUE",
 *   clientToken: "STRING_VALUE",
 *   preferredMaintenanceWindow: "STRING_VALUE",
 *   backupRetentionPeriod: Number("int"),
 *   preferredBackupWindow: "STRING_VALUE",
 *   shardInstanceCount: Number("int"),
 * };
 * const command = new UpdateClusterCommand(input);
 * const response = await client.send(command);
 * // { // UpdateClusterOutput
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
 * @param UpdateClusterCommandInput - {@link UpdateClusterCommandInput}
 * @returns {@link UpdateClusterCommandOutput}
 * @see {@link UpdateClusterCommandInput} for command's `input` shape.
 * @see {@link UpdateClusterCommandOutput} for command's `response` shape.
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
export class UpdateClusterCommand extends $Command
  .classBuilder<
    UpdateClusterCommandInput,
    UpdateClusterCommandOutput,
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
  .s("ChimeraDbLionfishServiceLambda", "UpdateCluster", {})
  .n("DocDBElasticClient", "UpdateClusterCommand")
  .f(UpdateClusterInputFilterSensitiveLog, void 0)
  .ser(se_UpdateClusterCommand)
  .de(de_UpdateClusterCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateClusterInput;
      output: UpdateClusterOutput;
    };
    sdk: {
      input: UpdateClusterCommandInput;
      output: UpdateClusterCommandOutput;
    };
  };
}
