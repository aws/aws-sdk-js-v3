// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetImpersonationRoleRequest, GetImpersonationRoleResponse } from "../models/models_0";
import { de_GetImpersonationRoleCommand, se_GetImpersonationRoleCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetImpersonationRoleCommand}.
 */
export interface GetImpersonationRoleCommandInput extends GetImpersonationRoleRequest {}
/**
 * @public
 *
 * The output of {@link GetImpersonationRoleCommand}.
 */
export interface GetImpersonationRoleCommandOutput extends GetImpersonationRoleResponse, __MetadataBearer {}

/**
 * <p>Gets the impersonation role details for the given WorkMail organization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, GetImpersonationRoleCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, GetImpersonationRoleCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new WorkMailClient(config);
 * const input = { // GetImpersonationRoleRequest
 *   OrganizationId: "STRING_VALUE", // required
 *   ImpersonationRoleId: "STRING_VALUE", // required
 * };
 * const command = new GetImpersonationRoleCommand(input);
 * const response = await client.send(command);
 * // { // GetImpersonationRoleResponse
 * //   ImpersonationRoleId: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   Type: "FULL_ACCESS" || "READ_ONLY",
 * //   Description: "STRING_VALUE",
 * //   Rules: [ // ImpersonationRuleList
 * //     { // ImpersonationRule
 * //       ImpersonationRuleId: "STRING_VALUE", // required
 * //       Name: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       Effect: "ALLOW" || "DENY", // required
 * //       TargetUsers: [ // TargetUsers
 * //         "STRING_VALUE",
 * //       ],
 * //       NotTargetUsers: [
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   DateCreated: new Date("TIMESTAMP"),
 * //   DateModified: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetImpersonationRoleCommandInput - {@link GetImpersonationRoleCommandInput}
 * @returns {@link GetImpersonationRoleCommandOutput}
 * @see {@link GetImpersonationRoleCommandInput} for command's `input` shape.
 * @see {@link GetImpersonationRoleCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for WorkMailClient's `config` shape.
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
export class GetImpersonationRoleCommand extends $Command
  .classBuilder<
    GetImpersonationRoleCommandInput,
    GetImpersonationRoleCommandOutput,
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
  .s("WorkMailService", "GetImpersonationRole", {})
  .n("WorkMailClient", "GetImpersonationRoleCommand")
  .f(void 0, void 0)
  .ser(se_GetImpersonationRoleCommand)
  .de(de_GetImpersonationRoleCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetImpersonationRoleRequest;
      output: GetImpersonationRoleResponse;
    };
    sdk: {
      input: GetImpersonationRoleCommandInput;
      output: GetImpersonationRoleCommandOutput;
    };
  };
}
