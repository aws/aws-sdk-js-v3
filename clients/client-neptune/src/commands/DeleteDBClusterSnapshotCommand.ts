// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteDBClusterSnapshotMessage, DeleteDBClusterSnapshotResult } from "../models/models_0";
import { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import { de_DeleteDBClusterSnapshotCommand, se_DeleteDBClusterSnapshotCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteDBClusterSnapshotCommand}.
 */
export interface DeleteDBClusterSnapshotCommandInput extends DeleteDBClusterSnapshotMessage {}
/**
 * @public
 *
 * The output of {@link DeleteDBClusterSnapshotCommand}.
 */
export interface DeleteDBClusterSnapshotCommandOutput extends DeleteDBClusterSnapshotResult, __MetadataBearer {}

/**
 * <p>Deletes a DB cluster snapshot. If the snapshot is being copied, the copy operation is
 *       terminated.</p>
 *          <note>
 *             <p>The DB cluster snapshot must be in the <code>available</code> state to be
 *         deleted.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, DeleteDBClusterSnapshotCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, DeleteDBClusterSnapshotCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * const client = new NeptuneClient(config);
 * const input = { // DeleteDBClusterSnapshotMessage
 *   DBClusterSnapshotIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteDBClusterSnapshotCommand(input);
 * const response = await client.send(command);
 * // { // DeleteDBClusterSnapshotResult
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
 * @param DeleteDBClusterSnapshotCommandInput - {@link DeleteDBClusterSnapshotCommandInput}
 * @returns {@link DeleteDBClusterSnapshotCommandOutput}
 * @see {@link DeleteDBClusterSnapshotCommandInput} for command's `input` shape.
 * @see {@link DeleteDBClusterSnapshotCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for NeptuneClient's `config` shape.
 *
 * @throws {@link DBClusterSnapshotNotFoundFault} (client fault)
 *  <p>
 *             <i>DBClusterSnapshotIdentifier</i> does not refer to an existing
 *       DB cluster snapshot.</p>
 *
 * @throws {@link InvalidDBClusterSnapshotStateFault} (client fault)
 *  <p>The supplied value is not a valid DB cluster snapshot state.</p>
 *
 * @throws {@link NeptuneServiceException}
 * <p>Base exception class for all service exceptions from Neptune service.</p>
 *
 * @public
 */
export class DeleteDBClusterSnapshotCommand extends $Command
  .classBuilder<
    DeleteDBClusterSnapshotCommandInput,
    DeleteDBClusterSnapshotCommandOutput,
    NeptuneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: NeptuneClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonRDSv19", "DeleteDBClusterSnapshot", {})
  .n("NeptuneClient", "DeleteDBClusterSnapshotCommand")
  .f(void 0, void 0)
  .ser(se_DeleteDBClusterSnapshotCommand)
  .de(de_DeleteDBClusterSnapshotCommand)
  .build() {}
