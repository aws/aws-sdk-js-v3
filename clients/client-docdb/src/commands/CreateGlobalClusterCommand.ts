// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DocDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DocDBClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateGlobalClusterMessage, CreateGlobalClusterResult } from "../models/models_0";
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
 * <p>Creates an Amazon DocumentDB global cluster that can span multiple multiple Amazon Web Services Regions.
 *             The global cluster contains one primary cluster with read-write capability, and up-to 10 read-only secondary clusters. Global clusters uses storage-based fast replication across regions with latencies less than one second, using dedicated infrastructure with no impact to your workload’s performance.</p>
 *          <p></p>
 *          <p>You can create a global cluster that is initially empty, and then add a primary and a secondary to it.
 *             Or you can specify an existing cluster during the create operation, and this cluster becomes the primary of the global cluster. </p>
 *          <note>
 *             <p>This action only applies to Amazon DocumentDB clusters.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DocDBClient, CreateGlobalClusterCommand } from "@aws-sdk/client-docdb"; // ES Modules import
 * // const { DocDBClient, CreateGlobalClusterCommand } = require("@aws-sdk/client-docdb"); // CommonJS import
 * // import type { DocDBClientConfig } from "@aws-sdk/client-docdb";
 * const config = {}; // type is DocDBClientConfig
 * const client = new DocDBClient(config);
 * const input = { // CreateGlobalClusterMessage
 *   GlobalClusterIdentifier: "STRING_VALUE", // required
 *   SourceDBClusterIdentifier: "STRING_VALUE",
 *   Engine: "STRING_VALUE",
 *   EngineVersion: "STRING_VALUE",
 *   DeletionProtection: true || false,
 *   DatabaseName: "STRING_VALUE",
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
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateGlobalClusterCommandInput - {@link CreateGlobalClusterCommandInput}
 * @returns {@link CreateGlobalClusterCommandOutput}
 * @see {@link CreateGlobalClusterCommandInput} for command's `input` shape.
 * @see {@link CreateGlobalClusterCommandOutput} for command's `response` shape.
 * @see {@link DocDBClientResolvedConfig | config} for DocDBClient's `config` shape.
 *
 * @throws {@link DBClusterNotFoundFault} (client fault)
 *  <p>
 *             <code>DBClusterIdentifier</code> doesn't refer to an existing cluster. </p>
 *
 * @throws {@link GlobalClusterAlreadyExistsFault} (client fault)
 *  <p>The <code>GlobalClusterIdentifier</code> already exists. Choose a new global cluster identifier (unique name) to create a new global cluster. </p>
 *
 * @throws {@link GlobalClusterQuotaExceededFault} (client fault)
 *  <p>The number of global  clusters for this account is already at the maximum allowed.</p>
 *
 * @throws {@link InvalidDBClusterStateFault} (client fault)
 *  <p>The cluster isn't in a valid state.</p>
 *
 * @throws {@link DocDBServiceException}
 * <p>Base exception class for all service exceptions from DocDB service.</p>
 *
 *
 * @public
 */
export class CreateGlobalClusterCommand extends $Command
  .classBuilder<
    CreateGlobalClusterCommandInput,
    CreateGlobalClusterCommandOutput,
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
  .s("AmazonRDSv19", "CreateGlobalCluster", {})
  .n("DocDBClient", "CreateGlobalClusterCommand")
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
