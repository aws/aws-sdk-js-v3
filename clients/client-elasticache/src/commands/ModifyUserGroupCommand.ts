// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyUserGroupMessage, UserGroup } from "../models/models_0";
import { de_ModifyUserGroupCommand, se_ModifyUserGroupCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyUserGroupCommand}.
 */
export interface ModifyUserGroupCommandInput extends ModifyUserGroupMessage {}
/**
 * @public
 *
 * The output of {@link ModifyUserGroupCommand}.
 */
export interface ModifyUserGroupCommandOutput extends UserGroup, __MetadataBearer {}

/**
 * <p>Changes the list of users that belong to the user group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, ModifyUserGroupCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, ModifyUserGroupCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ElastiCacheClient(config);
 * const input = { // ModifyUserGroupMessage
 *   UserGroupId: "STRING_VALUE", // required
 *   UserIdsToAdd: [ // UserIdListInput
 *     "STRING_VALUE",
 *   ],
 *   UserIdsToRemove: [
 *     "STRING_VALUE",
 *   ],
 *   Engine: "STRING_VALUE",
 * };
 * const command = new ModifyUserGroupCommand(input);
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
 * @param ModifyUserGroupCommandInput - {@link ModifyUserGroupCommandInput}
 * @returns {@link ModifyUserGroupCommandOutput}
 * @see {@link ModifyUserGroupCommandInput} for command's `input` shape.
 * @see {@link ModifyUserGroupCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
 *
 * @throws {@link DefaultUserRequired} (client fault)
 *  <p>You must add default user to a user group.</p>
 *
 * @throws {@link DuplicateUserNameFault} (client fault)
 *  <p>A user with this username already exists.</p>
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p>Two or more incompatible parameters were specified.</p>
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
 * @throws {@link UserNotFoundFault} (client fault)
 *  <p>The user does not exist or could not be found.</p>
 *
 * @throws {@link ElastiCacheServiceException}
 * <p>Base exception class for all service exceptions from ElastiCache service.</p>
 *
 * @public
 */
export class ModifyUserGroupCommand extends $Command
  .classBuilder<
    ModifyUserGroupCommandInput,
    ModifyUserGroupCommandOutput,
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
  .s("AmazonElastiCacheV9", "ModifyUserGroup", {})
  .n("ElastiCacheClient", "ModifyUserGroupCommand")
  .f(void 0, void 0)
  .ser(se_ModifyUserGroupCommand)
  .de(de_ModifyUserGroupCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyUserGroupMessage;
      output: UserGroup;
    };
    sdk: {
      input: ModifyUserGroupCommandInput;
      output: ModifyUserGroupCommandOutput;
    };
  };
}
