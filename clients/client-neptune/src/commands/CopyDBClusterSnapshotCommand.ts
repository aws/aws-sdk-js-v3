// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw1, command } from "../commandBuilder";
import type { CopyDBClusterSnapshotMessage, CopyDBClusterSnapshotResult } from "../models/models_0";
import { CopyDBClusterSnapshot$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Copies a snapshot of a DB cluster.
 *
 * To copy a DB cluster snapshot from a shared manual DB cluster snapshot, `SourceDBClusterSnapshotIdentifier` must be the Amazon Resource Name (ARN) of the shared DB cluster snapshot.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, CopyDBClusterSnapshotCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, CopyDBClusterSnapshotCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * // import type { NeptuneClientConfig } from "@aws-sdk/client-neptune";
 * const config = {}; // type is NeptuneClientConfig
 * const client = new NeptuneClient(config);
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
 * //     AllocatedStorage: Number("int"),
 * //     Status: "STRING_VALUE",
 * //     Port: Number("int"),
 * //     VpcId: "STRING_VALUE",
 * //     ClusterCreateTime: new Date("TIMESTAMP"),
 * //     MasterUsername: "STRING_VALUE",
 * //     EngineVersion: "STRING_VALUE",
 * //     LicenseModel: "STRING_VALUE",
 * //     SnapshotType: "STRING_VALUE",
 * //     PercentProgress: Number("int"),
 * //     StorageEncrypted: true || false,
 * //     KmsKeyId: "STRING_VALUE",
 * //     DBClusterSnapshotArn: "STRING_VALUE",
 * //     SourceDBClusterSnapshotArn: "STRING_VALUE",
 * //     IAMDatabaseAuthenticationEnabled: true || false,
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
 * @see {@link NeptuneClientResolvedConfig | config} for NeptuneClient's `config` shape.
 *
 * @throws {@link DBClusterSnapshotAlreadyExistsFault} (client fault)
 *
 * User already has a DB cluster snapshot with the given identifier.
 *
 * @throws {@link DBClusterSnapshotNotFoundFault} (client fault)
 *
 * *DBClusterSnapshotIdentifier* does not refer to an existing DB cluster snapshot.
 *
 * @throws {@link InvalidDBClusterSnapshotStateFault} (client fault)
 *
 * The supplied value is not a valid DB cluster snapshot state.
 *
 * @throws {@link InvalidDBClusterStateFault} (client fault)
 *
 * The DB cluster is not in a valid state.
 *
 * @throws {@link KMSKeyNotAccessibleFault} (client fault)
 *
 * Error accessing KMS key.
 *
 * @throws {@link SnapshotQuotaExceededFault} (client fault)
 *
 * Request would result in user exceeding the allowed number of DB snapshots.
 *
 * @throws {@link NeptuneServiceException}
 *
 * Base exception class for all service exceptions from Neptune service.
 *
 * @public
 */
export class CopyDBClusterSnapshotCommand extends command<CopyDBClusterSnapshotCommandInput, CopyDBClusterSnapshotCommandOutput>(
  _ep0,
  _mw1,
  "CopyDBClusterSnapshot",
  CopyDBClusterSnapshot$
) {
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
