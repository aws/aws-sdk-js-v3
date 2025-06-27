// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateGlobalClusterMessage, CreateGlobalClusterResult } from "../models/models_0";
import { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import { de_CreateGlobalClusterCommand, se_CreateGlobalClusterCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateGlobalClusterCommand}.
 */
export interface CreateGlobalClusterCommandInput extends CreateGlobalClusterMessage {}
/**
 * @public
 *
 * The output of {@link CreateGlobalClusterCommand}.
 */
export interface CreateGlobalClusterCommandOutput extends CreateGlobalClusterResult, __MetadataBearer {}

/**
 * <p>Creates a Neptune global database spread across multiple Amazon Regions.
 *       The global database contains a single primary cluster with read-write
 *       capability, and read-only secondary clusters that receive data from the
 *       primary cluster through high-speed replication performed by the Neptune
 *       storage subsystem.</p>
 *          <p>You can create a global database that is initially empty, and then
 *       add a primary cluster and secondary clusters to it, or you can specify
 *       an existing Neptune cluster during the create operation to become the
 *       primary cluster of the global database.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, CreateGlobalClusterCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, CreateGlobalClusterCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * const client = new NeptuneClient(config);
 * const input = { // CreateGlobalClusterMessage
 *   GlobalClusterIdentifier: "STRING_VALUE", // required
 *   SourceDBClusterIdentifier: "STRING_VALUE",
 *   Engine: "STRING_VALUE",
 *   EngineVersion: "STRING_VALUE",
 *   DeletionProtection: true || false,
 *   StorageEncrypted: true || false,
 * };
 * const command = new CreateGlobalClusterCommand(input);
 * const response = await client.send(command);
 * // { // CreateGlobalClusterResult
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
 * @param CreateGlobalClusterCommandInput - {@link CreateGlobalClusterCommandInput}
 * @returns {@link CreateGlobalClusterCommandOutput}
 * @see {@link CreateGlobalClusterCommandInput} for command's `input` shape.
 * @see {@link CreateGlobalClusterCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for NeptuneClient's `config` shape.
 *
 * @throws {@link DBClusterNotFoundFault} (client fault)
 *  <p>
 *             <i>DBClusterIdentifier</i> does not refer to an existing DB cluster.</p>
 *
 * @throws {@link GlobalClusterAlreadyExistsFault} (client fault)
 *  <p>The <code>GlobalClusterIdentifier</code> already exists. Choose a new global database identifier (unique name) to create a new global database cluster.</p>
 *
 * @throws {@link GlobalClusterQuotaExceededFault} (client fault)
 *  <p>The number of global database clusters for this account is already at the maximum allowed.</p>
 *
 * @throws {@link InvalidDBClusterStateFault} (client fault)
 *  <p>The DB cluster is not in a valid state.</p>
 *
 * @throws {@link NeptuneServiceException}
 * <p>Base exception class for all service exceptions from Neptune service.</p>
 *
 *
 * @public
 */
export class CreateGlobalClusterCommand extends $Command
  .classBuilder<
    CreateGlobalClusterCommandInput,
    CreateGlobalClusterCommandOutput,
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
  .s("AmazonRDSv19", "CreateGlobalCluster", {})
  .n("NeptuneClient", "CreateGlobalClusterCommand")
  .f(void 0, void 0)
  .ser(se_CreateGlobalClusterCommand)
  .de(de_CreateGlobalClusterCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateGlobalClusterMessage;
      output: CreateGlobalClusterResult;
    };
    sdk: {
      input: CreateGlobalClusterCommandInput;
      output: CreateGlobalClusterCommandOutput;
    };
  };
}
