// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateUserMessage, User } from "../models/models_0";
import { CreateUser$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * For Valkey engine version 7.2 onwards and Redis OSS 6.0 to 7.1: Creates a user. For more information, see [Using Role Based Access Control (RBAC)](http://docs.aws.amazon.com/AmazonElastiCache/latest/dg/Clusters.RBAC.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, CreateUserCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, CreateUserCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * // import type { ElastiCacheClientConfig } from "@aws-sdk/client-elasticache";
 * const config = {}; // type is ElastiCacheClientConfig
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
 *
 * A user with this username already exists.
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *
 * Two or more incompatible parameters were specified.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * The value for a parameter is invalid.
 *
 * @throws {@link ServiceLinkedRoleNotFoundFault} (client fault)
 *
 * The specified service linked role (SLR) was not found.
 *
 * @throws {@link TagQuotaPerResourceExceeded} (client fault)
 *
 * The request cannot be processed because it would cause the resource to have more than the allowed number of tags. The maximum number of tags permitted on a resource is 50.
 *
 * @throws {@link UserAlreadyExistsFault} (client fault)
 *
 * A user with this ID already exists.
 *
 * @throws {@link UserQuotaExceededFault} (client fault)
 *
 * The quota of users has been exceeded.
 *
 * @throws {@link ElastiCacheServiceException}
 *
 * Base exception class for all service exceptions from ElastiCache service.
 *
 * @public
 */
export class CreateUserCommand extends command<CreateUserCommandInput, CreateUserCommandOutput>(
  _ep0,
  _mw0,
  "CreateUser",
  CreateUser$
) {
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
