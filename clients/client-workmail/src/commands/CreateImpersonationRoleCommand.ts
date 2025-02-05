// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateImpersonationRoleRequest, CreateImpersonationRoleResponse } from "../models/models_0";
import { de_CreateImpersonationRoleCommand, se_CreateImpersonationRoleCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateImpersonationRoleCommand}.
 */
export interface CreateImpersonationRoleCommandInput extends CreateImpersonationRoleRequest {}
/**
 * @public
 *
 * The output of {@link CreateImpersonationRoleCommand}.
 */
export interface CreateImpersonationRoleCommandOutput extends CreateImpersonationRoleResponse, __MetadataBearer {}

/**
 * <p>Creates an impersonation role for the given WorkMail organization.</p>
 *          <p>
 *             <i>Idempotency</i> ensures that an API request completes no more than one
 *          time. With an idempotent request, if the original request completes successfully, any
 *          subsequent retries also complete successfully without performing any further
 *          actions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, CreateImpersonationRoleCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, CreateImpersonationRoleCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new WorkMailClient(config);
 * const input = { // CreateImpersonationRoleRequest
 *   ClientToken: "STRING_VALUE",
 *   OrganizationId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   Type: "FULL_ACCESS" || "READ_ONLY", // required
 *   Description: "STRING_VALUE",
 *   Rules: [ // ImpersonationRuleList // required
 *     { // ImpersonationRule
 *       ImpersonationRuleId: "STRING_VALUE", // required
 *       Name: "STRING_VALUE",
 *       Description: "STRING_VALUE",
 *       Effect: "ALLOW" || "DENY", // required
 *       TargetUsers: [ // TargetUsers
 *         "STRING_VALUE",
 *       ],
 *       NotTargetUsers: [
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new CreateImpersonationRoleCommand(input);
 * const response = await client.send(command);
 * // { // CreateImpersonationRoleResponse
 * //   ImpersonationRoleId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateImpersonationRoleCommandInput - {@link CreateImpersonationRoleCommandInput}
 * @returns {@link CreateImpersonationRoleCommandOutput}
 * @see {@link CreateImpersonationRoleCommandInput} for command's `input` shape.
 * @see {@link CreateImpersonationRoleCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for WorkMailClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>The identifier supplied for the user, group, or resource does not exist in your
 *          organization.</p>
 *
 * @throws {@link EntityStateException} (client fault)
 *  <p>You are performing an operation on a user, group, or resource that isn't in the
 *          expected state, such as trying to delete an active user.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request exceeds the limit of the resource.</p>
 *
 * @throws {@link OrganizationNotFoundException} (client fault)
 *  <p>An operation received a valid organization identifier that either doesn't belong or
 *          exist in the system.</p>
 *
 * @throws {@link OrganizationStateException} (client fault)
 *  <p>The organization must have a valid state to perform certain
 *          operations on the organization or its members.</p>
 *
 * @throws {@link WorkMailServiceException}
 * <p>Base exception class for all service exceptions from WorkMail service.</p>
 *
 * @public
 */
export class CreateImpersonationRoleCommand extends $Command
  .classBuilder<
    CreateImpersonationRoleCommandInput,
    CreateImpersonationRoleCommandOutput,
    WorkMailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkMailClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WorkMailService", "CreateImpersonationRole", {})
  .n("WorkMailClient", "CreateImpersonationRoleCommand")
  .f(void 0, void 0)
  .ser(se_CreateImpersonationRoleCommand)
  .de(de_CreateImpersonationRoleCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateImpersonationRoleRequest;
      output: CreateImpersonationRoleResponse;
    };
    sdk: {
      input: CreateImpersonationRoleCommandInput;
      output: CreateImpersonationRoleCommandOutput;
    };
  };
}
