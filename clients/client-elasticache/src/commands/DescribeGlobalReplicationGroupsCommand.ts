// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeGlobalReplicationGroupsMessage, DescribeGlobalReplicationGroupsResult } from "../models/models_0";
import { DescribeGlobalReplicationGroups } from "../schemas/schemas_27_Replication";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeGlobalReplicationGroupsCommand}.
 */
export interface DescribeGlobalReplicationGroupsCommandInput extends DescribeGlobalReplicationGroupsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeGlobalReplicationGroupsCommand}.
 */
export interface DescribeGlobalReplicationGroupsCommandOutput
  extends DescribeGlobalReplicationGroupsResult,
    __MetadataBearer {}

/**
 * <p>Returns information about a particular global replication group. If no identifier is
 *             specified, returns information about all Global datastores. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, DescribeGlobalReplicationGroupsCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, DescribeGlobalReplicationGroupsCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * // import type { ElastiCacheClientConfig } from "@aws-sdk/client-elasticache";
 * const config = {}; // type is ElastiCacheClientConfig
 * const client = new ElastiCacheClient(config);
 * const input = { // DescribeGlobalReplicationGroupsMessage
 *   GlobalReplicationGroupId: "STRING_VALUE",
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 *   ShowMemberInfo: true || false,
 * };
 * const command = new DescribeGlobalReplicationGroupsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeGlobalReplicationGroupsResult
 * //   Marker: "STRING_VALUE",
 * //   GlobalReplicationGroups: [ // GlobalReplicationGroupList
 * //     { // GlobalReplicationGroup
 * //       GlobalReplicationGroupId: "STRING_VALUE",
 * //       GlobalReplicationGroupDescription: "STRING_VALUE",
 * //       Status: "STRING_VALUE",
 * //       CacheNodeType: "STRING_VALUE",
 * //       Engine: "STRING_VALUE",
 * //       EngineVersion: "STRING_VALUE",
 * //       Members: [ // GlobalReplicationGroupMemberList
 * //         { // GlobalReplicationGroupMember
 * //           ReplicationGroupId: "STRING_VALUE",
 * //           ReplicationGroupRegion: "STRING_VALUE",
 * //           Role: "STRING_VALUE",
 * //           AutomaticFailover: "enabled" || "disabled" || "enabling" || "disabling",
 * //           Status: "STRING_VALUE",
 * //         },
 * //       ],
 * //       ClusterEnabled: true || false,
 * //       GlobalNodeGroups: [ // GlobalNodeGroupList
 * //         { // GlobalNodeGroup
 * //           GlobalNodeGroupId: "STRING_VALUE",
 * //           Slots: "STRING_VALUE",
 * //         },
 * //       ],
 * //       AuthTokenEnabled: true || false,
 * //       TransitEncryptionEnabled: true || false,
 * //       AtRestEncryptionEnabled: true || false,
 * //       ARN: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeGlobalReplicationGroupsCommandInput - {@link DescribeGlobalReplicationGroupsCommandInput}
 * @returns {@link DescribeGlobalReplicationGroupsCommandOutput}
 * @see {@link DescribeGlobalReplicationGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribeGlobalReplicationGroupsCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
 *
 * @throws {@link GlobalReplicationGroupNotFoundFault} (client fault)
 *  <p>The Global datastore does not exist</p>
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p>Two or more incompatible parameters were specified.</p>
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
export class DescribeGlobalReplicationGroupsCommand extends $Command
  .classBuilder<
    DescribeGlobalReplicationGroupsCommandInput,
    DescribeGlobalReplicationGroupsCommandOutput,
    ElastiCacheClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElastiCacheClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonElastiCacheV9", "DescribeGlobalReplicationGroups", {})
  .n("ElastiCacheClient", "DescribeGlobalReplicationGroupsCommand")
  .sc(DescribeGlobalReplicationGroups)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeGlobalReplicationGroupsMessage;
      output: DescribeGlobalReplicationGroupsResult;
    };
    sdk: {
      input: DescribeGlobalReplicationGroupsCommandInput;
      output: DescribeGlobalReplicationGroupsCommandOutput;
    };
  };
}
