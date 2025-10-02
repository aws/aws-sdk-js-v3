// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateUserGroupMessage, UserGroup } from "../models/models_0";
import { de_CreateUserGroupCommand, se_CreateUserGroupCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateUserGroupCommand}.
 */
export interface CreateUserGroupCommandInput extends CreateUserGroupMessage {}
/**
 * @public
 *
 * The output of {@link CreateUserGroupCommand}.
 */
export interface CreateUserGroupCommandOutput extends UserGroup, __MetadataBearer {}

/**
 * <p>For Valkey engine version 7.2 onwards and Redis OSS 6.0 to 7.1: Creates a user group. For more
 *             information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/dg/Clusters.RBAC.html">Using Role Based Access Control (RBAC)</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, CreateUserGroupCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, CreateUserGroupCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * // import type { ElastiCacheClientConfig } from "@aws-sdk/client-elasticache";
 * const config = {}; // type is ElastiCacheClientConfig
 * const client = new ElastiCacheClient(config);
 * const input = { // CreateUserGroupMessage
 *   UserGroupId: "STRING_VALUE", // required
 *   Engine: "STRING_VALUE", // required
 *   UserIds: [ // UserIdListInput
 *     "STRING_VALUE",
 *   ],
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateUserGroupCommand(input);
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
 * @param CreateUserGroupCommandInput - {@link CreateUserGroupCommandInput}
 * @returns {@link CreateUserGroupCommandOutput}
 * @see {@link CreateUserGroupCommandInput} for command's `input` shape.
 * @see {@link CreateUserGroupCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
 *
 * @throws {@link DefaultUserRequired} (client fault)
 *  <p>You must add default user to a user group.</p>
 *
 * @throws {@link DuplicateUserNameFault} (client fault)
 *  <p>A user with this username already exists.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value for a parameter is invalid.</p>
 *
 * @throws {@link ServiceLinkedRoleNotFoundFault} (client fault)
 *  <p>The specified service linked role (SLR) was not found.</p>
 *
 * @throws {@link TagQuotaPerResourceExceeded} (client fault)
 *  <p>The request cannot be processed because it would cause the resource to have more than
 *             the allowed number of tags. The maximum number of tags permitted on a resource is
 *             50.</p>
 *
 * @throws {@link UserGroupAlreadyExistsFault} (client fault)
 *  <p>The user group with this ID already exists.</p>
 *
 * @throws {@link UserGroupQuotaExceededFault} (client fault)
 *  <p>The number of users exceeds the user group limit.</p>
 *
 * @throws {@link UserNotFoundFault} (client fault)
 *  <p>The user does not exist or could not be found.</p>
 *
 * @throws {@link ElastiCacheServiceException}
 * <p>Base exception class for all service exceptions from ElastiCache service.</p>
 *
 *
 * @public
 */
export class CreateUserGroupCommand extends $Command
  .classBuilder<
    CreateUserGroupCommandInput,
    CreateUserGroupCommandOutput,
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
  .s("AmazonElastiCacheV9", "CreateUserGroup", {})
  .n("ElastiCacheClient", "CreateUserGroupCommand")
  .f(void 0, void 0)
  .ser(se_CreateUserGroupCommand)
  .de(de_CreateUserGroupCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateUserGroupMessage;
      output: UserGroup;
    };
    sdk: {
      input: CreateUserGroupCommandInput;
      output: CreateUserGroupCommandOutput;
    };
  };
}
