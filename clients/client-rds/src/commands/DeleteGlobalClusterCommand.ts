// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteGlobalClusterMessage } from "../models/models_0";
import { DeleteGlobalClusterResult } from "../models/models_1";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DeleteGlobalCluster } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteGlobalClusterCommand}.
 */
export interface DeleteGlobalClusterCommandInput extends DeleteGlobalClusterMessage {}
/**
 * @public
 *
 * The output of {@link DeleteGlobalClusterCommand}.
 */
export interface DeleteGlobalClusterCommandOutput extends DeleteGlobalClusterResult, __MetadataBearer {}

/**
 * <p>Deletes a global database cluster. The primary and secondary clusters must already be detached or
 *         destroyed first.</p>
 *          <note>
 *             <p>This action only applies to Aurora DB clusters.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DeleteGlobalClusterCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DeleteGlobalClusterCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // import type { RDSClientConfig } from "@aws-sdk/client-rds";
 * const config = {}; // type is RDSClientConfig
 * const client = new RDSClient(config);
 * const input = { // DeleteGlobalClusterMessage
 *   GlobalClusterIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteGlobalClusterCommand(input);
 * const response = await client.send(command);
 * // { // DeleteGlobalClusterResult
 * //   GlobalCluster: { // GlobalCluster
 * //     GlobalClusterIdentifier: "STRING_VALUE",
 * //     GlobalClusterResourceId: "STRING_VALUE",
 * //     GlobalClusterArn: "STRING_VALUE",
 * //     Status: "STRING_VALUE",
 * //     Engine: "STRING_VALUE",
 * //     EngineVersion: "STRING_VALUE",
 * //     EngineLifecycleSupport: "STRING_VALUE",
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
 * //         GlobalWriteForwardingStatus: "enabled" || "disabled" || "enabling" || "disabling" || "unknown",
 * //         SynchronizationStatus: "connected" || "pending-resync",
 * //       },
 * //     ],
 * //     Endpoint: "STRING_VALUE",
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
 * @param DeleteGlobalClusterCommandInput - {@link DeleteGlobalClusterCommandInput}
 * @returns {@link DeleteGlobalClusterCommandOutput}
 * @see {@link DeleteGlobalClusterCommandInput} for command's `input` shape.
 * @see {@link DeleteGlobalClusterCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link GlobalClusterNotFoundFault} (client fault)
 *  <p>The <code>GlobalClusterIdentifier</code> doesn't refer to an existing global database cluster.</p>
 *
 * @throws {@link InvalidGlobalClusterStateFault} (client fault)
 *  <p>The global cluster is in an invalid state and can't perform the requested operation.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 *
 * @example To delete a global DB cluster
 * ```javascript
 * // The following example deletes an Aurora MySQL-compatible global DB cluster.
 * const input = {
 *   GlobalClusterIdentifier: "myglobalcluster"
 * };
 * const command = new DeleteGlobalClusterCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   GlobalCluster: {
 *     DeletionProtection: false,
 *     Engine: "aurora-mysql",
 *     EngineVersion: "5.7.mysql_aurora.2.07.2",
 *     GlobalClusterArn: "arn:aws:rds::123456789012:global-cluster:myglobalcluster",
 *     GlobalClusterIdentifier: "myglobalcluster",
 *     GlobalClusterMembers:     [],
 *     GlobalClusterResourceId: "cluster-f0e523bfe07aabb",
 *     Status: "available",
 *     StorageEncrypted: false
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteGlobalClusterCommand extends $Command
  .classBuilder<
    DeleteGlobalClusterCommandInput,
    DeleteGlobalClusterCommandOutput,
    RDSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RDSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonRDSv19", "DeleteGlobalCluster", {})
  .n("RDSClient", "DeleteGlobalClusterCommand")
  .sc(DeleteGlobalCluster)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteGlobalClusterMessage;
      output: DeleteGlobalClusterResult;
    };
    sdk: {
      input: DeleteGlobalClusterCommandInput;
      output: DeleteGlobalClusterCommandOutput;
    };
  };
}
