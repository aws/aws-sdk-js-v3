// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteUserMessage, User } from "../models/models_0";
import { DeleteUser } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteUserCommand}.
 */
export interface DeleteUserCommandInput extends DeleteUserMessage {}
/**
 * @public
 *
 * The output of {@link DeleteUserCommand}.
 */
export interface DeleteUserCommandOutput extends User, __MetadataBearer {}

/**
 * <p>For Valkey engine version 7.2 onwards and Redis OSS 6.0 onwards: Deletes a user. The user will be removed from
 *             all user groups and in turn removed from all replication groups. For more information,
 *             see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/dg/Clusters.RBAC.html">Using Role Based Access Control (RBAC)</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, DeleteUserCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, DeleteUserCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * // import type { ElastiCacheClientConfig } from "@aws-sdk/client-elasticache";
 * const config = {}; // type is ElastiCacheClientConfig
 * const client = new ElastiCacheClient(config);
 * const input = { // DeleteUserMessage
 *   UserId: "STRING_VALUE", // required
 * };
 * const command = new DeleteUserCommand(input);
 * const response = await client.send(command);
 * // { // User
 * //   UserId: "STRING_VALUE",
 * //   UserName: "STRING_VALUE",
 * //   Status: "STRING_VALUE",
 * //   Engine: "STRING_VALUE",
 * //   MinimumEngineVersion: "STRING_VALUE",
 * //   AccessString: "STRING_VALUE",
 * //   UserGroupIds: [ // UserGroupIdList
 * //     "STRING_VALUE",
 * //   ],
 * //   Authentication: { // Authentication
 * //     Type: "password" || "no-password" || "iam",
 * //     PasswordCount: Number("int"),
 * //   },
 * //   ARN: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteUserCommandInput - {@link DeleteUserCommandInput}
 * @returns {@link DeleteUserCommandOutput}
 * @see {@link DeleteUserCommandInput} for command's `input` shape.
 * @see {@link DeleteUserCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
 *
 * @throws {@link DefaultUserAssociatedToUserGroupFault} (client fault)
 *  <p>The default user assigned to the user group.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value for a parameter is invalid.</p>
 *
 * @throws {@link InvalidUserStateFault} (client fault)
 *  <p>The user is not in active state.</p>
 *
 * @throws {@link ServiceLinkedRoleNotFoundFault} (client fault)
 *  <p>The specified service linked role (SLR) was not found.</p>
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
export class DeleteUserCommand extends $Command
  .classBuilder<
    DeleteUserCommandInput,
    DeleteUserCommandOutput,
    ElastiCacheClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElastiCacheClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonElastiCacheV9", "DeleteUser", {})
  .n("ElastiCacheClient", "DeleteUserCommand")
  .sc(DeleteUser)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteUserMessage;
      output: User;
    };
    sdk: {
      input: DeleteUserCommandInput;
      output: DeleteUserCommandOutput;
    };
  };
}
