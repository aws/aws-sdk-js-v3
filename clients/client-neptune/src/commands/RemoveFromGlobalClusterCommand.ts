// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { RemoveFromGlobalClusterMessage, RemoveFromGlobalClusterResult } from "../models/models_0";
import { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import { de_RemoveFromGlobalClusterCommand, se_RemoveFromGlobalClusterCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RemoveFromGlobalClusterCommand}.
 */
export interface RemoveFromGlobalClusterCommandInput extends RemoveFromGlobalClusterMessage {}
/**
 * @public
 *
 * The output of {@link RemoveFromGlobalClusterCommand}.
 */
export interface RemoveFromGlobalClusterCommandOutput extends RemoveFromGlobalClusterResult, __MetadataBearer {}

/**
 * <p>Detaches a Neptune DB cluster from a Neptune global database. A secondary
 *       cluster becomes a normal standalone cluster with read-write capability
 *       instead of being read-only, and no longer receives data from a the
 *       primary cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, RemoveFromGlobalClusterCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, RemoveFromGlobalClusterCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * const client = new NeptuneClient(config);
 * const input = { // RemoveFromGlobalClusterMessage
 *   GlobalClusterIdentifier: "STRING_VALUE", // required
 *   DbClusterIdentifier: "STRING_VALUE", // required
 * };
 * const command = new RemoveFromGlobalClusterCommand(input);
 * const response = await client.send(command);
 * // { // RemoveFromGlobalClusterResult
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
 * //   },
 * // };
 *
 * ```
 *
 * @param RemoveFromGlobalClusterCommandInput - {@link RemoveFromGlobalClusterCommandInput}
 * @returns {@link RemoveFromGlobalClusterCommandOutput}
 * @see {@link RemoveFromGlobalClusterCommandInput} for command's `input` shape.
 * @see {@link RemoveFromGlobalClusterCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for NeptuneClient's `config` shape.
 *
 * @throws {@link DBClusterNotFoundFault} (client fault)
 *  <p>
 *             <i>DBClusterIdentifier</i> does not refer to an existing DB cluster.</p>
 *
 * @throws {@link GlobalClusterNotFoundFault} (client fault)
 *  <p>The <code>GlobalClusterIdentifier</code> doesn't refer to an existing global database cluster. </p>
 *
 * @throws {@link InvalidGlobalClusterStateFault} (client fault)
 *  <p>The global cluster is in an invalid state and can't perform the requested operation. </p>
 *
 * @throws {@link NeptuneServiceException}
 * <p>Base exception class for all service exceptions from Neptune service.</p>
 *
 * @public
 */
export class RemoveFromGlobalClusterCommand extends $Command
  .classBuilder<
    RemoveFromGlobalClusterCommandInput,
    RemoveFromGlobalClusterCommandOutput,
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
  .s("AmazonRDSv19", "RemoveFromGlobalCluster", {})
  .n("NeptuneClient", "RemoveFromGlobalClusterCommand")
  .f(void 0, void 0)
  .ser(se_RemoveFromGlobalClusterCommand)
  .de(de_RemoveFromGlobalClusterCommand)
  .build() {}
