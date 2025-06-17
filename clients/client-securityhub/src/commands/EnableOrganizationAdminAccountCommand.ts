// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { EnableOrganizationAdminAccountRequest, EnableOrganizationAdminAccountResponse } from "../models/models_2";
import {
  de_EnableOrganizationAdminAccountCommand,
  se_EnableOrganizationAdminAccountCommand,
} from "../protocols/Aws_restJson1";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link EnableOrganizationAdminAccountCommand}.
 */
export interface EnableOrganizationAdminAccountCommandInput extends EnableOrganizationAdminAccountRequest {}
/**
 * @public
 *
 * The output of {@link EnableOrganizationAdminAccountCommand}.
 */
export interface EnableOrganizationAdminAccountCommandOutput
  extends EnableOrganizationAdminAccountResponse,
    __MetadataBearer {}

/**
 * <p>Designates the Security Hub administrator account for an organization. Can only be called by
 *          the organization management account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, EnableOrganizationAdminAccountCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, EnableOrganizationAdminAccountCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const input = { // EnableOrganizationAdminAccountRequest
 *   AdminAccountId: "STRING_VALUE", // required
 *   Feature: "SecurityHub" || "SecurityHubV2",
 * };
 * const command = new EnableOrganizationAdminAccountCommand(input);
 * const response = await client.send(command);
 * // { // EnableOrganizationAdminAccountResponse
 * //   AdminAccountId: "STRING_VALUE",
 * //   Feature: "SecurityHub" || "SecurityHubV2",
 * // };
 *
 * ```
 *
 * @param EnableOrganizationAdminAccountCommandInput - {@link EnableOrganizationAdminAccountCommandInput}
 * @returns {@link EnableOrganizationAdminAccountCommandOutput}
 * @see {@link EnableOrganizationAdminAccountCommandInput} for command's `input` shape.
 * @see {@link EnableOrganizationAdminAccountCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for SecurityHubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform the action specified in the request.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link InvalidAccessException} (client fault)
 *  <p>The account doesn't have permission to perform this action.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because you supplied an invalid or out-of-range value for an
 *          input parameter.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because it attempted to create resources beyond the current Amazon Web Services
 *          account or throttling limits. The error code describes the limit exceeded.</p>
 *
 * @throws {@link SecurityHubServiceException}
 * <p>Base exception class for all service exceptions from SecurityHub service.</p>
 *
 *
 * @example To designate a Security Hub administrator
 * ```javascript
 * // The following example designates the specified account as the Security Hub administrator account. The requesting account must be the organization management account.
 * const input = {
 *   AdminAccountId: "123456789012"
 * };
 * const command = new EnableOrganizationAdminAccountCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class EnableOrganizationAdminAccountCommand extends $Command
  .classBuilder<
    EnableOrganizationAdminAccountCommandInput,
    EnableOrganizationAdminAccountCommandOutput,
    SecurityHubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityHubClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SecurityHubAPIService", "EnableOrganizationAdminAccount", {})
  .n("SecurityHubClient", "EnableOrganizationAdminAccountCommand")
  .f(void 0, void 0)
  .ser(se_EnableOrganizationAdminAccountCommand)
  .de(de_EnableOrganizationAdminAccountCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: EnableOrganizationAdminAccountRequest;
      output: EnableOrganizationAdminAccountResponse;
    };
    sdk: {
      input: EnableOrganizationAdminAccountCommandInput;
      output: EnableOrganizationAdminAccountCommandOutput;
    };
  };
}
