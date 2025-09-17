// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateDBClusterSnapshotMessage, CreateDBClusterSnapshotResult } from "../models/models_0";
import { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import { de_CreateDBClusterSnapshotCommand, se_CreateDBClusterSnapshotCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateDBClusterSnapshotCommand}.
 */
export interface CreateDBClusterSnapshotCommandInput extends CreateDBClusterSnapshotMessage {}
/**
 * @public
 *
 * The output of {@link CreateDBClusterSnapshotCommand}.
 */
export interface CreateDBClusterSnapshotCommandOutput extends CreateDBClusterSnapshotResult, __MetadataBearer {}

/**
 * <p>Creates a snapshot of a DB cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, CreateDBClusterSnapshotCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, CreateDBClusterSnapshotCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * // import type { NeptuneClientConfig } from "@aws-sdk/client-neptune";
 * const config = {}; // type is NeptuneClientConfig
 * const client = new NeptuneClient(config);
 * const input = { // CreateDBClusterSnapshotMessage
 *   DBClusterSnapshotIdentifier: "STRING_VALUE", // required
 *   DBClusterIdentifier: "STRING_VALUE", // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateDBClusterSnapshotCommand(input);
 * const response = await client.send(command);
 * // { // CreateDBClusterSnapshotResult
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
 * @param CreateDBClusterSnapshotCommandInput - {@link CreateDBClusterSnapshotCommandInput}
 * @returns {@link CreateDBClusterSnapshotCommandOutput}
 * @see {@link CreateDBClusterSnapshotCommandInput} for command's `input` shape.
 * @see {@link CreateDBClusterSnapshotCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for NeptuneClient's `config` shape.
 *
 * @throws {@link DBClusterNotFoundFault} (client fault)
 *  <p>
 *             <i>DBClusterIdentifier</i> does not refer to an existing DB cluster.</p>
 *
 * @throws {@link DBClusterSnapshotAlreadyExistsFault} (client fault)
 *  <p>User already has a DB cluster snapshot with the given identifier.</p>
 *
 * @throws {@link InvalidDBClusterSnapshotStateFault} (client fault)
 *  <p>The supplied value is not a valid DB cluster snapshot state.</p>
 *
 * @throws {@link InvalidDBClusterStateFault} (client fault)
 *  <p>The DB cluster is not in a valid state.</p>
 *
 * @throws {@link SnapshotQuotaExceededFault} (client fault)
 *  <p>Request would result in user exceeding the allowed number of DB snapshots.</p>
 *
 * @throws {@link NeptuneServiceException}
 * <p>Base exception class for all service exceptions from Neptune service.</p>
 *
 *
 * @public
 */
export class CreateDBClusterSnapshotCommand extends $Command
  .classBuilder<
    CreateDBClusterSnapshotCommandInput,
    CreateDBClusterSnapshotCommandOutput,
    NeptuneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NeptuneClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonRDSv19", "CreateDBClusterSnapshot", {})
  .n("NeptuneClient", "CreateDBClusterSnapshotCommand")
  .f(void 0, void 0)
  .ser(se_CreateDBClusterSnapshotCommand)
  .de(de_CreateDBClusterSnapshotCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDBClusterSnapshotMessage;
      output: CreateDBClusterSnapshotResult;
    };
    sdk: {
      input: CreateDBClusterSnapshotCommandInput;
      output: CreateDBClusterSnapshotCommandOutput;
    };
  };
}
