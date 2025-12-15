// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import type { EnableOrganizationAdminAccountRequest, EnableOrganizationAdminAccountResponse } from "../models/models_0";
import { EnableOrganizationAdminAccount$ } from "../schemas/schemas_0";

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
 * <p>Designates an Amazon Web Services account within the organization as your GuardDuty delegated
 *       administrator. Only the organization's management account can run this
 *     API operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, EnableOrganizationAdminAccountCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, EnableOrganizationAdminAccountCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * // import type { GuardDutyClientConfig } from "@aws-sdk/client-guardduty";
 * const config = {}; // type is GuardDutyClientConfig
 * const client = new GuardDutyClient(config);
 * const input = { // EnableOrganizationAdminAccountRequest
 *   AdminAccountId: "STRING_VALUE", // required
 * };
 * const command = new EnableOrganizationAdminAccountCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param EnableOrganizationAdminAccountCommandInput - {@link EnableOrganizationAdminAccountCommandInput}
 * @returns {@link EnableOrganizationAdminAccountCommandOutput}
 * @see {@link EnableOrganizationAdminAccountCommandInput} for command's `input` shape.
 * @see {@link EnableOrganizationAdminAccountCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for GuardDutyClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>A bad request exception object.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>An internal server error exception object.</p>
 *
 * @throws {@link GuardDutyServiceException}
 * <p>Base exception class for all service exceptions from GuardDuty service.</p>
 *
 *
 * @public
 */
export class EnableOrganizationAdminAccountCommand extends $Command
  .classBuilder<
    EnableOrganizationAdminAccountCommandInput,
    EnableOrganizationAdminAccountCommandOutput,
    GuardDutyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GuardDutyClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GuardDutyAPIService", "EnableOrganizationAdminAccount", {})
  .n("GuardDutyClient", "EnableOrganizationAdminAccountCommand")
  .sc(EnableOrganizationAdminAccount$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: EnableOrganizationAdminAccountRequest;
      output: {};
    };
    sdk: {
      input: EnableOrganizationAdminAccountCommandInput;
      output: EnableOrganizationAdminAccountCommandOutput;
    };
  };
}
