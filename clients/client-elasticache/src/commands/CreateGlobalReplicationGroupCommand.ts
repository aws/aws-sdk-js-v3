// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateGlobalReplicationGroupMessage, CreateGlobalReplicationGroupResult } from "../models/models_0";
import { de_CreateGlobalReplicationGroupCommand, se_CreateGlobalReplicationGroupCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateGlobalReplicationGroupCommand}.
 */
export interface CreateGlobalReplicationGroupCommandInput extends CreateGlobalReplicationGroupMessage {}
/**
 * @public
 *
 * The output of {@link CreateGlobalReplicationGroupCommand}.
 */
export interface CreateGlobalReplicationGroupCommandOutput
  extends CreateGlobalReplicationGroupResult,
    __MetadataBearer {}

/**
 * <p>Global Datastore offers fully managed, fast, reliable and secure
 *             cross-region replication. Using Global Datastore with Valkey or Redis OSS, you can create cross-region
 *             read replica clusters for ElastiCache to enable low-latency reads and disaster
 *             recovery across regions. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/Redis-Global-Datastore.html">Replication
 *                 Across Regions Using Global Datastore</a>. </p>
 *          <ul>
 *             <li>
 *                <p>The <b>GlobalReplicationGroupIdSuffix</b> is the
 *                     name of the Global datastore.</p>
 *             </li>
 *             <li>
 *                <p>The <b>PrimaryReplicationGroupId</b> represents the
 *                     name of the primary cluster that accepts writes and will replicate updates to
 *                     the secondary cluster.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, CreateGlobalReplicationGroupCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, CreateGlobalReplicationGroupCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ElastiCacheClient(config);
 * const input = { // CreateGlobalReplicationGroupMessage
 *   GlobalReplicationGroupIdSuffix: "STRING_VALUE", // required
 *   GlobalReplicationGroupDescription: "STRING_VALUE",
 *   PrimaryReplicationGroupId: "STRING_VALUE", // required
 * };
 * const command = new CreateGlobalReplicationGroupCommand(input);
 * const response = await client.send(command);
 * // { // CreateGlobalReplicationGroupResult
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
 * @param CreateGlobalReplicationGroupCommandInput - {@link CreateGlobalReplicationGroupCommandInput}
 * @returns {@link CreateGlobalReplicationGroupCommandOutput}
 * @see {@link CreateGlobalReplicationGroupCommandInput} for command's `input` shape.
 * @see {@link CreateGlobalReplicationGroupCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
 *
 * @throws {@link GlobalReplicationGroupAlreadyExistsFault} (client fault)
 *  <p>The Global datastore name already exists.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value for a parameter is invalid.</p>
 *
 * @throws {@link InvalidReplicationGroupStateFault} (client fault)
 *  <p>The requested replication group is not in the <code>available</code> state.</p>
 *
 * @throws {@link ReplicationGroupNotFoundFault} (client fault)
 *  <p>The specified replication group does not exist.</p>
 *
 * @throws {@link ServiceLinkedRoleNotFoundFault} (client fault)
 *  <p>The specified service linked role (SLR) was not found.</p>
 *
 * @throws {@link ElastiCacheServiceException}
 * <p>Base exception class for all service exceptions from ElastiCache service.</p>
 *
 * @public
 */
export class CreateGlobalReplicationGroupCommand extends $Command
  .classBuilder<
    CreateGlobalReplicationGroupCommandInput,
    CreateGlobalReplicationGroupCommandOutput,
    ElastiCacheClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElastiCacheClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonElastiCacheV9", "CreateGlobalReplicationGroup", {})
  .n("ElastiCacheClient", "CreateGlobalReplicationGroupCommand")
  .f(void 0, void 0)
  .ser(se_CreateGlobalReplicationGroupCommand)
  .de(de_CreateGlobalReplicationGroupCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateGlobalReplicationGroupMessage;
      output: CreateGlobalReplicationGroupResult;
    };
    sdk: {
      input: CreateGlobalReplicationGroupCommandInput;
      output: CreateGlobalReplicationGroupCommandOutput;
    };
  };
}
