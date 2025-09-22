// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { SwitchoverGlobalClusterMessage, SwitchoverGlobalClusterResult } from "../models/models_0";
import { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import { SwitchoverGlobalCluster } from "../schemas/schemas_15_Global";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SwitchoverGlobalClusterCommand}.
 */
export interface SwitchoverGlobalClusterCommandInput extends SwitchoverGlobalClusterMessage {}
/**
 * @public
 *
 * The output of {@link SwitchoverGlobalClusterCommand}.
 */
export interface SwitchoverGlobalClusterCommandOutput extends SwitchoverGlobalClusterResult, __MetadataBearer {}

/**
 * <p>Switches over the specified secondary DB cluster to be the new primary DB cluster in the global
 *       database cluster. Switchover operations were previously called "managed planned failovers."</p>
 *          <p>Promotes the specified secondary cluster to assume full read/write capabilities and demotes the current
 *       primary cluster to a secondary (read-only) cluster, maintaining the original replication topology. All secondary
 *       clusters are synchronized with the primary at the beginning of the process so the new primary continues operations
 *       for the global database without losing any data. Your database is unavailable for a short time while the primary
 *       and selected secondary clusters are assuming their new roles.</p>
 *          <note>
 *             <p>This operation is intended for controlled environments, for operations such as "regional rotation" or
 *       to fall back to the original primary after a global database failover.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, SwitchoverGlobalClusterCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, SwitchoverGlobalClusterCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * // import type { NeptuneClientConfig } from "@aws-sdk/client-neptune";
 * const config = {}; // type is NeptuneClientConfig
 * const client = new NeptuneClient(config);
 * const input = { // SwitchoverGlobalClusterMessage
 *   GlobalClusterIdentifier: "STRING_VALUE", // required
 *   TargetDbClusterIdentifier: "STRING_VALUE", // required
 * };
 * const command = new SwitchoverGlobalClusterCommand(input);
 * const response = await client.send(command);
 * // { // SwitchoverGlobalClusterResult
 * //   GlobalCluster: { // GlobalCluster
 * //     GlobalClusterIdentifier: "STRING_VALUE",
 * //     GlobalClusterResourceId: "STRING_VALUE",
 * //     GlobalClusterArn: "STRING_VALUE",
 * //     Status: "STRING_VALUE",
 * //     Engine: "STRING_VALUE",
 * //     EngineVersion: "STRING_VALUE",
 * //     StorageEncrypted: true || false,
 * //     DeletionProtection: true || false,
 * //     GlobalClusterMembers: [ // GlobalClusterMemberList
 * //       { // GlobalClusterMember
 * //         DBClusterArn: "STRING_VALUE",
 * //         Readers: [ // ReadersArnList
 * //           "STRING_VALUE",
 * //         ],
 * //         IsWriter: true || false,
 * //       },
 * //     ],
 * //     FailoverState: { // FailoverState
 * //       Status: "pending" || "failing-over" || "cancelling",
 * //       FromDbClusterArn: "STRING_VALUE",
 * //       ToDbClusterArn: "STRING_VALUE",
 * //       IsDataLossAllowed: true || false,
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param SwitchoverGlobalClusterCommandInput - {@link SwitchoverGlobalClusterCommandInput}
 * @returns {@link SwitchoverGlobalClusterCommandOutput}
 * @see {@link SwitchoverGlobalClusterCommandInput} for command's `input` shape.
 * @see {@link SwitchoverGlobalClusterCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for NeptuneClient's `config` shape.
 *
 * @throws {@link DBClusterNotFoundFault} (client fault)
 *  <p>
 *             <i>DBClusterIdentifier</i> does not refer to an existing DB cluster.</p>
 *
 * @throws {@link GlobalClusterNotFoundFault} (client fault)
 *  <p>The <code>GlobalClusterIdentifier</code> doesn't refer to an existing global database cluster. </p>
 *
 * @throws {@link InvalidDBClusterStateFault} (client fault)
 *  <p>The DB cluster is not in a valid state.</p>
 *
 * @throws {@link InvalidGlobalClusterStateFault} (client fault)
 *  <p>The global cluster is in an invalid state and can't perform the requested operation. </p>
 *
 * @throws {@link NeptuneServiceException}
 * <p>Base exception class for all service exceptions from Neptune service.</p>
 *
 *
 * @public
 */
export class SwitchoverGlobalClusterCommand extends $Command
  .classBuilder<
    SwitchoverGlobalClusterCommandInput,
    SwitchoverGlobalClusterCommandOutput,
    NeptuneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NeptuneClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonRDSv19", "SwitchoverGlobalCluster", {})
  .n("NeptuneClient", "SwitchoverGlobalClusterCommand")
  .sc(SwitchoverGlobalCluster)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SwitchoverGlobalClusterMessage;
      output: SwitchoverGlobalClusterResult;
    };
    sdk: {
      input: SwitchoverGlobalClusterCommandInput;
      output: SwitchoverGlobalClusterCommandOutput;
    };
  };
}
