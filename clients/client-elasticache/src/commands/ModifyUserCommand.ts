// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyUserMessage, User } from "../models/models_0";
import { de_ModifyUserCommand, se_ModifyUserCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyUserCommand}.
 */
export interface ModifyUserCommandInput extends ModifyUserMessage {}
/**
 * @public
 *
 * The output of {@link ModifyUserCommand}.
 */
export interface ModifyUserCommandOutput extends User, __MetadataBearer {}

/**
 * <p>Changes user password(s) and/or access string.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, ModifyUserCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, ModifyUserCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const input = { // ModifyUserMessage
 *   UserId: "STRING_VALUE", // required
 *   AccessString: "STRING_VALUE",
 *   AppendAccessString: "STRING_VALUE",
 *   Passwords: [ // PasswordListInput
 *     "STRING_VALUE",
 *   ],
 *   NoPasswordRequired: true || false,
 *   AuthenticationMode: { // AuthenticationMode
 *     Type: "password" || "no-password-required" || "iam",
 *     Passwords: [
 *       "STRING_VALUE",
 *     ],
 *   },
 *   Engine: "STRING_VALUE",
 * };
 * const command = new ModifyUserCommand(input);
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
 * @param ModifyUserCommandInput - {@link ModifyUserCommandInput}
 * @returns {@link ModifyUserCommandOutput}
 * @see {@link ModifyUserCommandInput} for command's `input` shape.
 * @see {@link ModifyUserCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p>Two or more incompatible parameters were specified.</p>
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
export class ModifyUserCommand extends $Command
  .classBuilder<
    ModifyUserCommandInput,
    ModifyUserCommandOutput,
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
  .s("AmazonElastiCacheV9", "ModifyUser", {})
  .n("ElastiCacheClient", "ModifyUserCommand")
  .f(void 0, void 0)
  .ser(se_ModifyUserCommand)
  .de(de_ModifyUserCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyUserMessage;
      output: User;
    };
    sdk: {
      input: ModifyUserCommandInput;
      output: ModifyUserCommandOutput;
    };
  };
}
