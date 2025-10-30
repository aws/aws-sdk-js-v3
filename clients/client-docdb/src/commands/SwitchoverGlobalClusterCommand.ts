// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DocDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DocDBClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { SwitchoverGlobalClusterMessage, SwitchoverGlobalClusterResult } from "../models/models_0";
import { de_SwitchoverGlobalClusterCommand, se_SwitchoverGlobalClusterCommand } from "../protocols/Aws_query";

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
 * <p>Switches over the specified secondary Amazon DocumentDB cluster to be the new primary Amazon DocumentDB cluster in the global database cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DocDBClient, SwitchoverGlobalClusterCommand } from "@aws-sdk/client-docdb"; // ES Modules import
 * // const { DocDBClient, SwitchoverGlobalClusterCommand } = require("@aws-sdk/client-docdb"); // CommonJS import
 * // import type { DocDBClientConfig } from "@aws-sdk/client-docdb";
 * const config = {}; // type is DocDBClientConfig
 * const client = new DocDBClient(config);
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
 * //     DatabaseName: "STRING_VALUE",
 * //     StorageEncrypted: true || false,
 * //     DeletionProtection: true || false,
 * //     GlobalClusterMembers: [ // GlobalClusterMemberList
 * //       { // GlobalClusterMember
 * //         DBClusterArn: "STRING_VALUE",
 * //         Readers: [ // ReadersArnList
 * //           "STRING_VALUE",
 * //         ],
 * //         IsWriter: true || false,
 * //         SynchronizationStatus: "connected" || "pending-resync",
 * //       },
 * //     ],
 * //     FailoverState: { // FailoverState
 * //       Status: "pending" || "failing-over" || "cancelling",
 * //       FromDbClusterArn: "STRING_VALUE",
 * //       ToDbClusterArn: "STRING_VALUE",
 * //       IsDataLossAllowed: true || false,
 * //     },
 * //     TagList: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param SwitchoverGlobalClusterCommandInput - {@link SwitchoverGlobalClusterCommandInput}
 * @returns {@link SwitchoverGlobalClusterCommandOutput}
 * @see {@link SwitchoverGlobalClusterCommandInput} for command's `input` shape.
 * @see {@link SwitchoverGlobalClusterCommandOutput} for command's `response` shape.
 * @see {@link DocDBClientResolvedConfig | config} for DocDBClient's `config` shape.
 *
 * @throws {@link DBClusterNotFoundFault} (client fault)
 *  <p>
 *             <code>DBClusterIdentifier</code> doesn't refer to an existing cluster. </p>
 *
 * @throws {@link GlobalClusterNotFoundFault} (client fault)
 *  <p>The <code>GlobalClusterIdentifier</code> doesn't refer to an existing global cluster.</p>
 *
 * @throws {@link InvalidDBClusterStateFault} (client fault)
 *  <p>The cluster isn't in a valid state.</p>
 *
 * @throws {@link InvalidGlobalClusterStateFault} (client fault)
 *  <p>The requested operation can't be performed while the cluster is in this state.</p>
 *
 * @throws {@link DocDBServiceException}
 * <p>Base exception class for all service exceptions from DocDB service.</p>
 *
 *
 * @public
 */
export class SwitchoverGlobalClusterCommand extends $Command
  .classBuilder<
    SwitchoverGlobalClusterCommandInput,
    SwitchoverGlobalClusterCommandOutput,
    DocDBClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DocDBClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonRDSv19", "SwitchoverGlobalCluster", {})
  .n("DocDBClient", "SwitchoverGlobalClusterCommand")
  .f(void 0, void 0)
  .ser(se_SwitchoverGlobalClusterCommand)
  .de(de_SwitchoverGlobalClusterCommand)
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
