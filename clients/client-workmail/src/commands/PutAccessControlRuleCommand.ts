// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { PutAccessControlRuleRequest, PutAccessControlRuleResponse } from "../models/models_0";
import { PutAccessControlRule } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutAccessControlRuleCommand}.
 */
export interface PutAccessControlRuleCommandInput extends PutAccessControlRuleRequest {}
/**
 * @public
 *
 * The output of {@link PutAccessControlRuleCommand}.
 */
export interface PutAccessControlRuleCommandOutput extends PutAccessControlRuleResponse, __MetadataBearer {}

/**
 * <p>Adds a new access control rule for the specified organization. The rule allows or
 *          denies access to the organization for the specified IPv4 addresses, access protocol
 *          actions, user IDs and impersonation IDs. Adding a new rule with the same name as an existing rule replaces
 *          the older rule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, PutAccessControlRuleCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, PutAccessControlRuleCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * // import type { WorkMailClientConfig } from "@aws-sdk/client-workmail";
 * const config = {}; // type is WorkMailClientConfig
 * const client = new WorkMailClient(config);
 * const input = { // PutAccessControlRuleRequest
 *   Name: "STRING_VALUE", // required
 *   Effect: "ALLOW" || "DENY", // required
 *   Description: "STRING_VALUE", // required
 *   IpRanges: [ // IpRangeList
 *     "STRING_VALUE",
 *   ],
 *   NotIpRanges: [
 *     "STRING_VALUE",
 *   ],
 *   Actions: [ // ActionsList
 *     "STRING_VALUE",
 *   ],
 *   NotActions: [
 *     "STRING_VALUE",
 *   ],
 *   UserIds: [ // UserIdList
 *     "STRING_VALUE",
 *   ],
 *   NotUserIds: [
 *     "STRING_VALUE",
 *   ],
 *   OrganizationId: "STRING_VALUE", // required
 *   ImpersonationRoleIds: [ // ImpersonationRoleIdList
 *     "STRING_VALUE",
 *   ],
 *   NotImpersonationRoleIds: [
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new PutAccessControlRuleCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutAccessControlRuleCommandInput - {@link PutAccessControlRuleCommandInput}
 * @returns {@link PutAccessControlRuleCommandOutput}
 * @see {@link PutAccessControlRuleCommandInput} for command's `input` shape.
 * @see {@link PutAccessControlRuleCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for WorkMailClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>The identifier supplied for the user, group, or resource does not exist in your
 *          organization.</p>
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource cannot be found.</p>
 *
 * @throws {@link WorkMailServiceException}
 * <p>Base exception class for all service exceptions from WorkMail service.</p>
 *
 *
 * @public
 */
export class PutAccessControlRuleCommand extends $Command
  .classBuilder<
    PutAccessControlRuleCommandInput,
    PutAccessControlRuleCommandOutput,
    WorkMailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkMailClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WorkMailService", "PutAccessControlRule", {})
  .n("WorkMailClient", "PutAccessControlRuleCommand")
  .sc(PutAccessControlRule)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutAccessControlRuleRequest;
      output: {};
    };
    sdk: {
      input: PutAccessControlRuleCommandInput;
      output: PutAccessControlRuleCommandOutput;
    };
  };
}
