// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteGlobalReplicationGroupMessage, DeleteGlobalReplicationGroupResult } from "../models/models_0";
import { DeleteGlobalReplicationGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteGlobalReplicationGroupCommand}.
 */
export interface DeleteGlobalReplicationGroupCommandInput extends DeleteGlobalReplicationGroupMessage {}
/**
 * @public
 *
 * The output of {@link DeleteGlobalReplicationGroupCommand}.
 */
export interface DeleteGlobalReplicationGroupCommandOutput
  extends DeleteGlobalReplicationGroupResult,
    __MetadataBearer {}

/**
 * <p>Deleting a Global datastore is a two-step process: </p>
 *          <ul>
 *             <li>
 *                <p>First, you must <a>DisassociateGlobalReplicationGroup</a> to remove
 *                     the secondary clusters in the Global datastore.</p>
 *             </li>
 *             <li>
 *                <p>Once the Global datastore contains only the primary cluster, you can use the
 *                         <code>DeleteGlobalReplicationGroup</code> API to delete the Global datastore
 *                     while retainining the primary cluster using
 *                         <code>RetainPrimaryReplicationGroup=true</code>.</p>
 *             </li>
 *          </ul>
 *          <p>Since the Global Datastore has only a primary cluster, you can delete the Global
 *             Datastore while retaining the primary by setting
 *                 <code>RetainPrimaryReplicationGroup=true</code>. The primary cluster is never
 *             deleted when deleting a Global Datastore. It can only be deleted when it no longer is
 *             associated with any Global Datastore.</p>
 *          <p>When you receive a successful response from this operation, Amazon ElastiCache
 *             immediately begins deleting the selected resources; you cannot cancel or revert this
 *             operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, DeleteGlobalReplicationGroupCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, DeleteGlobalReplicationGroupCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * // import type { ElastiCacheClientConfig } from "@aws-sdk/client-elasticache";
 * const config = {}; // type is ElastiCacheClientConfig
 * const client = new ElastiCacheClient(config);
 * const input = { // DeleteGlobalReplicationGroupMessage
 *   GlobalReplicationGroupId: "STRING_VALUE", // required
 *   RetainPrimaryReplicationGroup: true || false, // required
 * };
 * const command = new DeleteGlobalReplicationGroupCommand(input);
 * const response = await client.send(command);
 * // { // DeleteGlobalReplicationGroupResult
 * //   GlobalReplicationGroup: { // GlobalReplicationGroup
 * //     GlobalReplicationGroupId: "STRING_VALUE",
 * //     GlobalReplicationGroupDescription: "STRING_VALUE",
 * //     Status: "STRING_VALUE",
 * //     CacheNodeType: "STRING_VALUE",
 * //     Engine: "STRING_VALUE",
 * //     EngineVersion: "STRING_VALUE",
 * //     Members: [ // GlobalReplicationGroupMemberList
 * //       { // GlobalReplicationGroupMember
 * //         ReplicationGroupId: "STRING_VALUE",
 * //         ReplicationGroupRegion: "STRING_VALUE",
 * //         Role: "STRING_VALUE",
 * //         AutomaticFailover: "enabled" || "disabled" || "enabling" || "disabling",
 * //         Status: "STRING_VALUE",
 * //       },
 * //     ],
 * //     ClusterEnabled: true || false,
 * //     GlobalNodeGroups: [ // GlobalNodeGroupList
 * //       { // GlobalNodeGroup
 * //         GlobalNodeGroupId: "STRING_VALUE",
 * //         Slots: "STRING_VALUE",
 * //       },
 * //     ],
 * //     AuthTokenEnabled: true || false,
 * //     TransitEncryptionEnabled: true || false,
 * //     AtRestEncryptionEnabled: true || false,
 * //     ARN: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteGlobalReplicationGroupCommandInput - {@link DeleteGlobalReplicationGroupCommandInput}
 * @returns {@link DeleteGlobalReplicationGroupCommandOutput}
 * @see {@link DeleteGlobalReplicationGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteGlobalReplicationGroupCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
 *
 * @throws {@link GlobalReplicationGroupNotFoundFault} (client fault)
 *  <p>The Global datastore does not exist</p>
 *
 * @throws {@link InvalidGlobalReplicationGroupStateFault} (client fault)
 *  <p>The Global datastore is not available or in primary-only state.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value for a parameter is invalid.</p>
 *
 * @throws {@link ElastiCacheServiceException}
 * <p>Base exception class for all service exceptions from ElastiCache service.</p>
 *
 *
 * @public
 */
export class DeleteGlobalReplicationGroupCommand extends $Command
  .classBuilder<
    DeleteGlobalReplicationGroupCommandInput,
    DeleteGlobalReplicationGroupCommandOutput,
    ElastiCacheClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElastiCacheClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonElastiCacheV9", "DeleteGlobalReplicationGroup", {})
  .n("ElastiCacheClient", "DeleteGlobalReplicationGroupCommand")
  .sc(DeleteGlobalReplicationGroup$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteGlobalReplicationGroupMessage;
      output: DeleteGlobalReplicationGroupResult;
    };
    sdk: {
      input: DeleteGlobalReplicationGroupCommandInput;
      output: DeleteGlobalReplicationGroupCommandOutput;
    };
  };
}
