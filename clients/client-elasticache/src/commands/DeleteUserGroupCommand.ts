// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteUserGroupMessage, UserGroup } from "../models/models_0";
import { de_DeleteUserGroupCommand, se_DeleteUserGroupCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteUserGroupCommand}.
 */
export interface DeleteUserGroupCommandInput extends DeleteUserGroupMessage {}
/**
 * @public
 *
 * The output of {@link DeleteUserGroupCommand}.
 */
export interface DeleteUserGroupCommandOutput extends UserGroup, __MetadataBearer {}

/**
 * <p>For Valkey engine version 7.2 onwards and Redis OSS 6.0 onwards: Deletes a user group. The user group must first
 *             be disassociated from the replication group before it can be deleted. For more
 *             information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/dg/Clusters.RBAC.html">Using Role Based Access Control (RBAC)</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, DeleteUserGroupCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, DeleteUserGroupCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * // import type { ElastiCacheClientConfig } from "@aws-sdk/client-elasticache";
 * const config = {}; // type is ElastiCacheClientConfig
 * const client = new ElastiCacheClient(config);
 * const input = { // DeleteUserGroupMessage
 *   UserGroupId: "STRING_VALUE", // required
 * };
 * const command = new DeleteUserGroupCommand(input);
 * const response = await client.send(command);
 * // { // UserGroup
 * //   UserGroupId: "STRING_VALUE",
 * //   Status: "STRING_VALUE",
 * //   Engine: "STRING_VALUE",
 * //   UserIds: [ // UserIdList
 * //     "STRING_VALUE",
 * //   ],
 * //   MinimumEngineVersion: "STRING_VALUE",
 * //   PendingChanges: { // UserGroupPendingChanges
 * //     UserIdsToRemove: [
 * //       "STRING_VALUE",
 * //     ],
 * //     UserIdsToAdd: [
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * //   ReplicationGroups: [ // UGReplicationGroupIdList
 * //     "STRING_VALUE",
 * //   ],
 * //   ServerlessCaches: [ // UGServerlessCacheIdList
 * //     "STRING_VALUE",
 * //   ],
 * //   ARN: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteUserGroupCommandInput - {@link DeleteUserGroupCommandInput}
 * @returns {@link DeleteUserGroupCommandOutput}
 * @see {@link DeleteUserGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteUserGroupCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value for a parameter is invalid.</p>
 *
 * @throws {@link InvalidUserGroupStateFault} (client fault)
 *  <p>The user group is not in an active state.</p>
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
export class DeleteUserGroupCommand extends $Command
  .classBuilder<
    DeleteUserGroupCommandInput,
    DeleteUserGroupCommandOutput,
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
  .s("AmazonElastiCacheV9", "DeleteUserGroup", {})
  .n("ElastiCacheClient", "DeleteUserGroupCommand")
  .f(void 0, void 0)
  .ser(se_DeleteUserGroupCommand)
  .de(de_DeleteUserGroupCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteUserGroupMessage;
      output: UserGroup;
    };
    sdk: {
      input: DeleteUserGroupCommandInput;
      output: DeleteUserGroupCommandOutput;
    };
  };
}
