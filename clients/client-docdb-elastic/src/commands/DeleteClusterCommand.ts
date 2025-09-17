// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DocDBElasticClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DocDBElasticClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteClusterInput, DeleteClusterOutput } from "../models/models_0";
import { de_DeleteClusterCommand, se_DeleteClusterCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteClusterCommand}.
 */
export interface DeleteClusterCommandInput extends DeleteClusterInput {}
/**
 * @public
 *
 * The output of {@link DeleteClusterCommand}.
 */
export interface DeleteClusterCommandOutput extends DeleteClusterOutput, __MetadataBearer {}

/**
 * <p>Delete an elastic cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DocDBElasticClient, DeleteClusterCommand } from "@aws-sdk/client-docdb-elastic"; // ES Modules import
 * // const { DocDBElasticClient, DeleteClusterCommand } = require("@aws-sdk/client-docdb-elastic"); // CommonJS import
 * // import type { DocDBElasticClientConfig } from "@aws-sdk/client-docdb-elastic";
 * const config = {}; // type is DocDBElasticClientConfig
 * const client = new DocDBElasticClient(config);
 * const input = { // DeleteClusterInput
 *   clusterArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteClusterCommand(input);
 * const response = await client.send(command);
 * // { // DeleteClusterOutput
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
 * @param DeleteClusterCommandInput - {@link DeleteClusterCommandInput}
 * @returns {@link DeleteClusterCommandOutput}
 * @see {@link DeleteClusterCommandInput} for command's `input` shape.
 * @see {@link DeleteClusterCommandOutput} for command's `response` shape.
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
export class DeleteClusterCommand extends $Command
  .classBuilder<
    DeleteClusterCommandInput,
    DeleteClusterCommandOutput,
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
  .s("ChimeraDbLionfishServiceLambda", "DeleteCluster", {})
  .n("DocDBElasticClient", "DeleteClusterCommand")
  .f(void 0, void 0)
  .ser(se_DeleteClusterCommand)
  .de(de_DeleteClusterCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteClusterInput;
      output: DeleteClusterOutput;
    };
    sdk: {
      input: DeleteClusterCommandInput;
      output: DeleteClusterCommandOutput;
    };
  };
}
