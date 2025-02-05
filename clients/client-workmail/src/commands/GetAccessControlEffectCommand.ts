// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetAccessControlEffectRequest, GetAccessControlEffectResponse } from "../models/models_0";
import { de_GetAccessControlEffectCommand, se_GetAccessControlEffectCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAccessControlEffectCommand}.
 */
export interface GetAccessControlEffectCommandInput extends GetAccessControlEffectRequest {}
/**
 * @public
 *
 * The output of {@link GetAccessControlEffectCommand}.
 */
export interface GetAccessControlEffectCommandOutput extends GetAccessControlEffectResponse, __MetadataBearer {}

/**
 * <p>Gets the effects of an organization's access control rules as they apply to a
 *          specified IPv4 address, access protocol action, and  user ID or impersonation role ID. You must provide either the user ID or impersonation role ID. Impersonation role ID can only be used with Action EWS.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, GetAccessControlEffectCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, GetAccessControlEffectCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new WorkMailClient(config);
 * const input = { // GetAccessControlEffectRequest
 *   OrganizationId: "STRING_VALUE", // required
 *   IpAddress: "STRING_VALUE", // required
 *   Action: "STRING_VALUE", // required
 *   UserId: "STRING_VALUE",
 *   ImpersonationRoleId: "STRING_VALUE",
 * };
 * const command = new GetAccessControlEffectCommand(input);
 * const response = await client.send(command);
 * // { // GetAccessControlEffectResponse
 * //   Effect: "ALLOW" || "DENY",
 * //   MatchedRules: [ // AccessControlRuleNameList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetAccessControlEffectCommandInput - {@link GetAccessControlEffectCommandInput}
 * @returns {@link GetAccessControlEffectCommandOutput}
 * @see {@link GetAccessControlEffectCommandInput} for command's `input` shape.
 * @see {@link GetAccessControlEffectCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for WorkMailClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>The identifier supplied for the user, group, or resource does not exist in your
 *          organization.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the input parameters don't match the service's restrictions.</p>
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
 * @public
 */
export class GetAccessControlEffectCommand extends $Command
  .classBuilder<
    GetAccessControlEffectCommandInput,
    GetAccessControlEffectCommandOutput,
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
  .s("WorkMailService", "GetAccessControlEffect", {})
  .n("WorkMailClient", "GetAccessControlEffectCommand")
  .f(void 0, void 0)
  .ser(se_GetAccessControlEffectCommand)
  .de(de_GetAccessControlEffectCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAccessControlEffectRequest;
      output: GetAccessControlEffectResponse;
    };
    sdk: {
      input: GetAccessControlEffectCommandInput;
      output: GetAccessControlEffectCommandOutput;
    };
  };
}
