// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import { DisableOrganizationAdminAccountRequest, DisableOrganizationAdminAccountResponse } from "../models/models_0";
import {
  de_DisableOrganizationAdminAccountCommand,
  se_DisableOrganizationAdminAccountCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisableOrganizationAdminAccountCommand}.
 */
export interface DisableOrganizationAdminAccountCommandInput extends DisableOrganizationAdminAccountRequest {}
/**
 * @public
 *
 * The output of {@link DisableOrganizationAdminAccountCommand}.
 */
export interface DisableOrganizationAdminAccountCommandOutput
  extends DisableOrganizationAdminAccountResponse,
    __MetadataBearer {}

/**
 * <p>Removes the existing GuardDuty delegated
 *     administrator of the organization. Only the organization's management account can run this
 *       API operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, DisableOrganizationAdminAccountCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, DisableOrganizationAdminAccountCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const input = { // DisableOrganizationAdminAccountRequest
 *   AdminAccountId: "STRING_VALUE", // required
 * };
 * const command = new DisableOrganizationAdminAccountCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisableOrganizationAdminAccountCommandInput - {@link DisableOrganizationAdminAccountCommandInput}
 * @returns {@link DisableOrganizationAdminAccountCommandOutput}
 * @see {@link DisableOrganizationAdminAccountCommandInput} for command's `input` shape.
 * @see {@link DisableOrganizationAdminAccountCommandOutput} for command's `response` shape.
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
 * @public
 */
export class DisableOrganizationAdminAccountCommand extends $Command
  .classBuilder<
    DisableOrganizationAdminAccountCommandInput,
    DisableOrganizationAdminAccountCommandOutput,
    GuardDutyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: GuardDutyClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("GuardDutyAPIService", "DisableOrganizationAdminAccount", {})
  .n("GuardDutyClient", "DisableOrganizationAdminAccountCommand")
  .f(void 0, void 0)
  .ser(se_DisableOrganizationAdminAccountCommand)
  .de(de_DisableOrganizationAdminAccountCommand)
  .build() {}
