// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeUserGroupsMessage, DescribeUserGroupsResult } from "../models/models_0";
import { DescribeUserGroups } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeUserGroupsCommand}.
 */
export interface DescribeUserGroupsCommandInput extends DescribeUserGroupsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeUserGroupsCommand}.
 */
export interface DescribeUserGroupsCommandOutput extends DescribeUserGroupsResult, __MetadataBearer {}

/**
 * <p>Returns a list of user groups.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, DescribeUserGroupsCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, DescribeUserGroupsCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * // import type { ElastiCacheClientConfig } from "@aws-sdk/client-elasticache";
 * const config = {}; // type is ElastiCacheClientConfig
 * const client = new ElastiCacheClient(config);
 * const input = { // DescribeUserGroupsMessage
 *   UserGroupId: "STRING_VALUE",
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new DescribeUserGroupsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeUserGroupsResult
 * //   UserGroups: [ // UserGroupList
 * //     { // UserGroup
 * //       UserGroupId: "STRING_VALUE",
 * //       Status: "STRING_VALUE",
 * //       Engine: "STRING_VALUE",
 * //       UserIds: [ // UserIdList
 * //         "STRING_VALUE",
 * //       ],
 * //       MinimumEngineVersion: "STRING_VALUE",
 * //       PendingChanges: { // UserGroupPendingChanges
 * //         UserIdsToRemove: [
 * //           "STRING_VALUE",
 * //         ],
 * //         UserIdsToAdd: [
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       ReplicationGroups: [ // UGReplicationGroupIdList
 * //         "STRING_VALUE",
 * //       ],
 * //       ServerlessCaches: [ // UGServerlessCacheIdList
 * //         "STRING_VALUE",
 * //       ],
 * //       ARN: "STRING_VALUE",
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeUserGroupsCommandInput - {@link DescribeUserGroupsCommandInput}
 * @returns {@link DescribeUserGroupsCommandOutput}
 * @see {@link DescribeUserGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribeUserGroupsCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p>Two or more incompatible parameters were specified.</p>
 *
 * @throws {@link ServiceLinkedRoleNotFoundFault} (client fault)
 *  <p>The specified service linked role (SLR) was not found.</p>
 *
 * @throws {@link UserGroupNotFoundFault} (client fault)
 *  <p>The user group was not found or does not exist</p>
 *
 * @throws {@link ElastiCacheServiceException}
 * <p>Base exception class for all service exceptions from ElastiCache service.</p>
 *
 *
 * @public
 */
export class DescribeUserGroupsCommand extends $Command
  .classBuilder<
    DescribeUserGroupsCommandInput,
    DescribeUserGroupsCommandOutput,
    ElastiCacheClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElastiCacheClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonElastiCacheV9", "DescribeUserGroups", {})
  .n("ElastiCacheClient", "DescribeUserGroupsCommand")
  .sc(DescribeUserGroups)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeUserGroupsMessage;
      output: DescribeUserGroupsResult;
    };
    sdk: {
      input: DescribeUserGroupsCommandInput;
      output: DescribeUserGroupsCommandOutput;
    };
  };
}
