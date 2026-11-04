// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  AuthorizeCacheSecurityGroupIngressMessage,
  AuthorizeCacheSecurityGroupIngressResult,
} from "../models/models_0";
import { AuthorizeCacheSecurityGroupIngress$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AuthorizeCacheSecurityGroupIngressCommand}.
 */
export interface AuthorizeCacheSecurityGroupIngressCommandInput extends AuthorizeCacheSecurityGroupIngressMessage {}
/**
 * @public
 *
 * The output of {@link AuthorizeCacheSecurityGroupIngressCommand}.
 */
export interface AuthorizeCacheSecurityGroupIngressCommandOutput extends AuthorizeCacheSecurityGroupIngressResult, __MetadataBearer {}

/**
 * Allows network ingress to a cache security group. Applications using ElastiCache must be running on Amazon EC2, and Amazon EC2 security groups are used as the authorization mechanism.
 *
 * > **Note:** You cannot authorize ingress from an Amazon EC2 security group in one region to an ElastiCache cluster in another region.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, AuthorizeCacheSecurityGroupIngressCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, AuthorizeCacheSecurityGroupIngressCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * // import type { ElastiCacheClientConfig } from "@aws-sdk/client-elasticache";
 * const config = {}; // type is ElastiCacheClientConfig
 * const client = new ElastiCacheClient(config);
 * const input = { // AuthorizeCacheSecurityGroupIngressMessage
 *   CacheSecurityGroupName: "STRING_VALUE", // required
 *   EC2SecurityGroupName: "STRING_VALUE", // required
 *   EC2SecurityGroupOwnerId: "STRING_VALUE", // required
 * };
 * const command = new AuthorizeCacheSecurityGroupIngressCommand(input);
 * const response = await client.send(command);
 * // { // AuthorizeCacheSecurityGroupIngressResult
 * //   CacheSecurityGroup: { // CacheSecurityGroup
 * //     OwnerId: "STRING_VALUE",
 * //     CacheSecurityGroupName: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     EC2SecurityGroups: [ // EC2SecurityGroupList
 * //       { // EC2SecurityGroup
 * //         Status: "STRING_VALUE",
 * //         EC2SecurityGroupName: "STRING_VALUE",
 * //         EC2SecurityGroupOwnerId: "STRING_VALUE",
 * //       },
 * //     ],
 * //     ARN: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param AuthorizeCacheSecurityGroupIngressCommandInput - {@link AuthorizeCacheSecurityGroupIngressCommandInput}
 * @returns {@link AuthorizeCacheSecurityGroupIngressCommandOutput}
 * @see {@link AuthorizeCacheSecurityGroupIngressCommandInput} for command's `input` shape.
 * @see {@link AuthorizeCacheSecurityGroupIngressCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
 *
 * @throws {@link AuthorizationAlreadyExistsFault} (client fault)
 *
 * The specified Amazon EC2 security group is already authorized for the specified cache security group.
 *
 * @throws {@link CacheSecurityGroupNotFoundFault} (client fault)
 *
 * The requested cache security group name does not refer to an existing cache security group.
 *
 * @throws {@link InvalidCacheSecurityGroupStateFault} (client fault)
 *
 * The current state of the cache security group does not allow deletion.
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *
 * Two or more incompatible parameters were specified.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * The value for a parameter is invalid.
 *
 * @throws {@link ElastiCacheServiceException}
 *
 * Base exception class for all service exceptions from ElastiCache service.
 *
 * @example AuthorizeCacheCacheSecurityGroupIngress
 * ```javascript
 * // Allows network ingress to a cache security group. Applications using ElastiCache must be running on Amazon EC2. Amazon EC2 security groups are used as the authorization mechanism.
 * const input = {
 *   CacheSecurityGroupName: "my-sec-grp",
 *   EC2SecurityGroupName: "my-ec2-sec-grp",
 *   EC2SecurityGroupOwnerId: "1234567890"
 * };
 * const command = new AuthorizeCacheSecurityGroupIngressCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class AuthorizeCacheSecurityGroupIngressCommand extends command<AuthorizeCacheSecurityGroupIngressCommandInput, AuthorizeCacheSecurityGroupIngressCommandOutput>(
  _ep0,
  _mw0,
  "AuthorizeCacheSecurityGroupIngress",
  AuthorizeCacheSecurityGroupIngress$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AuthorizeCacheSecurityGroupIngressMessage;
      output: AuthorizeCacheSecurityGroupIngressResult;
    };
    sdk: {
      input: AuthorizeCacheSecurityGroupIngressCommandInput;
      output: AuthorizeCacheSecurityGroupIngressCommandOutput;
    };
  };
}
