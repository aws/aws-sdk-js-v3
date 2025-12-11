// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DocDBElasticClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DocDBElasticClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CopyClusterSnapshotInput, CopyClusterSnapshotOutput } from "../models/models_0";
import { CopyClusterSnapshot } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CopyClusterSnapshotCommand}.
 */
export interface CopyClusterSnapshotCommandInput extends CopyClusterSnapshotInput {}
/**
 * @public
 *
 * The output of {@link CopyClusterSnapshotCommand}.
 */
export interface CopyClusterSnapshotCommandOutput extends CopyClusterSnapshotOutput, __MetadataBearer {}

/**
 * <p>Copies a snapshot of an elastic cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DocDBElasticClient, CopyClusterSnapshotCommand } from "@aws-sdk/client-docdb-elastic"; // ES Modules import
 * // const { DocDBElasticClient, CopyClusterSnapshotCommand } = require("@aws-sdk/client-docdb-elastic"); // CommonJS import
 * // import type { DocDBElasticClientConfig } from "@aws-sdk/client-docdb-elastic";
 * const config = {}; // type is DocDBElasticClientConfig
 * const client = new DocDBElasticClient(config);
 * const input = { // CopyClusterSnapshotInput
 *   snapshotArn: "STRING_VALUE", // required
 *   targetSnapshotName: "STRING_VALUE", // required
 *   kmsKeyId: "STRING_VALUE",
 *   copyTags: true || false,
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CopyClusterSnapshotCommand(input);
 * const response = await client.send(command);
 * // { // CopyClusterSnapshotOutput
 * //   snapshot: { // ClusterSnapshot
 * //     subnetIds: [ // StringList // required
 * //       "STRING_VALUE",
 * //     ],
 * //     snapshotName: "STRING_VALUE", // required
 * //     snapshotArn: "STRING_VALUE", // required
 * //     snapshotCreationTime: "STRING_VALUE", // required
 * //     clusterArn: "STRING_VALUE", // required
 * //     clusterCreationTime: "STRING_VALUE", // required
 * //     status: "STRING_VALUE", // required
 * //     vpcSecurityGroupIds: [ // required
 * //       "STRING_VALUE",
 * //     ],
 * //     adminUserName: "STRING_VALUE", // required
 * //     kmsKeyId: "STRING_VALUE", // required
 * //     snapshotType: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CopyClusterSnapshotCommandInput - {@link CopyClusterSnapshotCommandInput}
 * @returns {@link CopyClusterSnapshotCommandOutput}
 * @see {@link CopyClusterSnapshotCommandInput} for command's `input` shape.
 * @see {@link CopyClusterSnapshotCommandOutput} for command's `response` shape.
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
 * @example Basic Copy Cluster Snapshot Example
 * ```javascript
 * // update applied
 * const input = {
 *   snapshotArn: "arn:aws:docdb-elastic:us-east-1:$AWS_ACCOUNT_ID:cluster-snapshot/$SOURCE_SNAPSHOT_ID",
 *   targetSnapshotName: "sampleSnapshotName"
 * };
 * const command = new CopyClusterSnapshotCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   snapshot: {
 *     adminUserName: "sampleAdminUser",
 *     clusterArn: "arn:aws:docdb-elastic:us-east-1:$AWS_ACCOUNT_ID:cluster/$CLUSTER_ID",
 *     clusterCreationTime: "2000-01-01T00:00:00.000Z",
 *     kmsKeyId: "AWS_OWNED_KMS_KEY",
 *     snapshotArn: "arn:aws:docdb-elastic:us-east-1:$AWS_ACCOUNT_ID:cluster-snapshot/$TARGET_SNAPSHOT_ID",
 *     snapshotCreationTime: "2000-01-01T00:00:00.000Z",
 *     snapshotName: "sampleSnapshotName",
 *     snapshotType: "MANUAL",
 *     status: "ACTIVE",
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
export class CopyClusterSnapshotCommand extends $Command
  .classBuilder<
    CopyClusterSnapshotCommandInput,
    CopyClusterSnapshotCommandOutput,
    DocDBElasticClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DocDBElasticClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ChimeraDbLionfishServiceLambda", "CopyClusterSnapshot", {})
  .n("DocDBElasticClient", "CopyClusterSnapshotCommand")
  .sc(CopyClusterSnapshot)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CopyClusterSnapshotInput;
      output: CopyClusterSnapshotOutput;
    };
    sdk: {
      input: CopyClusterSnapshotCommandInput;
      output: CopyClusterSnapshotCommandOutput;
    };
  };
}
