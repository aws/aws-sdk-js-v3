// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateUserMessage, User } from "../models/models_0";
import { de_CreateUserCommand, se_CreateUserCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateUserCommand}.
 */
export interface CreateUserCommandInput extends CreateUserMessage {}
/**
 * @public
 *
 * The output of {@link CreateUserCommand}.
 */
export interface CreateUserCommandOutput extends User, __MetadataBearer {}

/**
 * <p>For Valkey engine version 7.2 onwards and Redis OSS 6.0 to 7.1: Creates a user. For more information, see
 *                 <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/dg/Clusters.RBAC.html">Using Role Based Access Control (RBAC)</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, CreateUserCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, CreateUserCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const input = { // CreateUserMessage
 *   UserId: "STRING_VALUE", // required
 *   UserName: "STRING_VALUE", // required
 *   Engine: "STRING_VALUE", // required
 *   Passwords: [ // PasswordListInput
 *     "STRING_VALUE",
 *   ],
 *   AccessString: "STRING_VALUE", // required
 *   NoPasswordRequired: true || false,
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   AuthenticationMode: { // AuthenticationMode
 *     Type: "password" || "no-password-required" || "iam",
 *     Passwords: [
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new CreateUserCommand(input);
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
 * @param CreateUserCommandInput - {@link CreateUserCommandInput}
 * @returns {@link CreateUserCommandOutput}
 * @see {@link CreateUserCommandInput} for command's `input` shape.
 * @see {@link CreateUserCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
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
 * @throws {@link ServiceLinkedRoleNotFoundFault} (client fault)
 *  <p>The specified service linked role (SLR) was not found.</p>
 *
 * @throws {@link TagQuotaPerResourceExceeded} (client fault)
 *  <p>The request cannot be processed because it would cause the resource to have more than
 *             the allowed number of tags. The maximum number of tags permitted on a resource is
 *             50.</p>
 *
 * @throws {@link UserAlreadyExistsFault} (client fault)
 *  <p>A user with this ID already exists.</p>
 *
 * @throws {@link UserQuotaExceededFault} (client fault)
 *  <p>The quota of users has been exceeded.</p>
 *
 * @throws {@link ElastiCacheServiceException}
 * <p>Base exception class for all service exceptions from ElastiCache service.</p>
 *
 *
 * @public
 */
export class CreateUserCommand extends $Command
  .classBuilder<
    CreateUserCommandInput,
    CreateUserCommandOutput,
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
  .s("AmazonElastiCacheV9", "CreateUser", {})
  .n("ElastiCacheClient", "CreateUserCommand")
  .f(void 0, void 0)
  .ser(se_CreateUserCommand)
  .de(de_CreateUserCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateUserMessage;
      output: User;
    };
    sdk: {
      input: CreateUserCommandInput;
      output: CreateUserCommandOutput;
    };
  };
}
