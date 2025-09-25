// smithy-typescript generated code
import { getCrossRegionPresignedUrlPlugin } from "@aws-sdk/middleware-sdk-rds";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DocDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DocDBClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CopyDBClusterSnapshotMessage, CopyDBClusterSnapshotResult } from "../models/models_0";
import { CopyDBClusterSnapshot } from "../schemas/schemas_3_BInstance";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CopyDBClusterSnapshotCommand}.
 */
export interface CopyDBClusterSnapshotCommandInput extends CopyDBClusterSnapshotMessage {}
/**
 * @public
 *
 * The output of {@link CopyDBClusterSnapshotCommand}.
 */
export interface CopyDBClusterSnapshotCommandOutput extends CopyDBClusterSnapshotResult, __MetadataBearer {}

/**
 * <p>Copies a snapshot of a cluster.</p>
 *          <p>To copy a cluster snapshot from a shared manual cluster snapshot,
 *             <code>SourceDBClusterSnapshotIdentifier</code> must be the Amazon
 *             Resource Name (ARN) of the shared cluster snapshot. You can only
 *             copy a shared DB cluster snapshot, whether encrypted or not, in the
 *             same Amazon Web Services Region.</p>
 *          <p>To cancel the copy operation after it is in progress, delete the
 *             target cluster snapshot identified by
 *             <code>TargetDBClusterSnapshotIdentifier</code> while that cluster
 *             snapshot is in the <i>copying</i> status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DocDBClient, CopyDBClusterSnapshotCommand } from "@aws-sdk/client-docdb"; // ES Modules import
 * // const { DocDBClient, CopyDBClusterSnapshotCommand } = require("@aws-sdk/client-docdb"); // CommonJS import
 * // import type { DocDBClientConfig } from "@aws-sdk/client-docdb";
 * const config = {}; // type is DocDBClientConfig
 * const client = new DocDBClient(config);
 * const input = { // CopyDBClusterSnapshotMessage
 *   SourceDBClusterSnapshotIdentifier: "STRING_VALUE", // required
 *   TargetDBClusterSnapshotIdentifier: "STRING_VALUE", // required
 *   KmsKeyId: "STRING_VALUE",
 *   PreSignedUrl: "STRING_VALUE",
 *   CopyTags: true || false,
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CopyDBClusterSnapshotCommand(input);
 * const response = await client.send(command);
 * // { // CopyDBClusterSnapshotResult
 * //   DBClusterSnapshot: { // DBClusterSnapshot
 * //     AvailabilityZones: [ // AvailabilityZones
 * //       "STRING_VALUE",
 * //     ],
 * //     DBClusterSnapshotIdentifier: "STRING_VALUE",
 * //     DBClusterIdentifier: "STRING_VALUE",
 * //     SnapshotCreateTime: new Date("TIMESTAMP"),
 * //     Engine: "STRING_VALUE",
 * //     Status: "STRING_VALUE",
 * //     Port: Number("int"),
 * //     VpcId: "STRING_VALUE",
 * //     ClusterCreateTime: new Date("TIMESTAMP"),
 * //     MasterUsername: "STRING_VALUE",
 * //     EngineVersion: "STRING_VALUE",
 * //     SnapshotType: "STRING_VALUE",
 * //     PercentProgress: Number("int"),
 * //     StorageEncrypted: true || false,
 * //     KmsKeyId: "STRING_VALUE",
 * //     DBClusterSnapshotArn: "STRING_VALUE",
 * //     SourceDBClusterSnapshotArn: "STRING_VALUE",
 * //     StorageType: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CopyDBClusterSnapshotCommandInput - {@link CopyDBClusterSnapshotCommandInput}
 * @returns {@link CopyDBClusterSnapshotCommandOutput}
 * @see {@link CopyDBClusterSnapshotCommandInput} for command's `input` shape.
 * @see {@link CopyDBClusterSnapshotCommandOutput} for command's `response` shape.
 * @see {@link DocDBClientResolvedConfig | config} for DocDBClient's `config` shape.
 *
 * @throws {@link DBClusterSnapshotAlreadyExistsFault} (client fault)
 *  <p>You already have a cluster snapshot with the given identifier.</p>
 *
 * @throws {@link DBClusterSnapshotNotFoundFault} (client fault)
 *  <p>
 *             <code>DBClusterSnapshotIdentifier</code> doesn't refer to an existing cluster snapshot. </p>
 *
 * @throws {@link InvalidDBClusterSnapshotStateFault} (client fault)
 *  <p>The provided value isn't a valid cluster snapshot state.</p>
 *
 * @throws {@link InvalidDBClusterStateFault} (client fault)
 *  <p>The cluster isn't in a valid state.</p>
 *
 * @throws {@link KMSKeyNotAccessibleFault} (client fault)
 *  <p>An error occurred when accessing an KMS key.</p>
 *
 * @throws {@link SnapshotQuotaExceededFault} (client fault)
 *  <p>The request would cause you to exceed the allowed number of snapshots.</p>
 *
 * @throws {@link DocDBServiceException}
 * <p>Base exception class for all service exceptions from DocDB service.</p>
 *
 *
 * @public
 */
export class CopyDBClusterSnapshotCommand extends $Command
  .classBuilder<
    CopyDBClusterSnapshotCommandInput,
    CopyDBClusterSnapshotCommandOutput,
    DocDBClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DocDBClientResolvedConfig, o: any) {
    return [
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      getCrossRegionPresignedUrlPlugin(config),
    ];
  })
  .s("AmazonRDSv19", "CopyDBClusterSnapshot", {})
  .n("DocDBClient", "CopyDBClusterSnapshotCommand")
  .sc(CopyDBClusterSnapshot)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CopyDBClusterSnapshotMessage;
      output: CopyDBClusterSnapshotResult;
    };
    sdk: {
      input: CopyDBClusterSnapshotCommandInput;
      output: CopyDBClusterSnapshotCommandOutput;
    };
  };
}
