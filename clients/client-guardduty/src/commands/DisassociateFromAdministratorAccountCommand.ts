// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import {
  DisassociateFromAdministratorAccountRequest,
  DisassociateFromAdministratorAccountResponse,
} from "../models/models_0";
import { DisassociateFromAdministratorAccount } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateFromAdministratorAccountCommand}.
 */
export interface DisassociateFromAdministratorAccountCommandInput extends DisassociateFromAdministratorAccountRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateFromAdministratorAccountCommand}.
 */
export interface DisassociateFromAdministratorAccountCommandOutput
  extends DisassociateFromAdministratorAccountResponse,
    __MetadataBearer {}

/**
 * <p>Disassociates the current GuardDuty member account from its administrator account.</p>
 *          <p>When you
 *       disassociate an invited member from a GuardDuty delegated administrator, the member account details
 *       obtained from the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_CreateMembers.html">CreateMembers</a> API, including the associated email addresses, are retained. This is
 *       done so that the delegated administrator can invoke the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_InviteMembers.html">InviteMembers</a> API without the need to invoke the CreateMembers API again. To
 *       remove the details associated with a member account, the delegated administrator must invoke the
 *       <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_DeleteMembers.html">DeleteMembers</a> API. </p>
 *          <p>With <code>autoEnableOrganizationMembers</code> configuration for your organization set to
 *         <code>ALL</code>, you'll receive an error if you attempt to disable GuardDuty in a member
 *       account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, DisassociateFromAdministratorAccountCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, DisassociateFromAdministratorAccountCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * // import type { GuardDutyClientConfig } from "@aws-sdk/client-guardduty";
 * const config = {}; // type is GuardDutyClientConfig
 * const client = new GuardDutyClient(config);
 * const input = { // DisassociateFromAdministratorAccountRequest
 *   DetectorId: "STRING_VALUE", // required
 * };
 * const command = new DisassociateFromAdministratorAccountCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateFromAdministratorAccountCommandInput - {@link DisassociateFromAdministratorAccountCommandInput}
 * @returns {@link DisassociateFromAdministratorAccountCommandOutput}
 * @see {@link DisassociateFromAdministratorAccountCommandInput} for command's `input` shape.
 * @see {@link DisassociateFromAdministratorAccountCommandOutput} for command's `response` shape.
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
export class DisassociateFromAdministratorAccountCommand extends $Command
  .classBuilder<
    DisassociateFromAdministratorAccountCommandInput,
    DisassociateFromAdministratorAccountCommandOutput,
    GuardDutyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GuardDutyClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GuardDutyAPIService", "DisassociateFromAdministratorAccount", {})
  .n("GuardDutyClient", "DisassociateFromAdministratorAccountCommand")
  .sc(DisassociateFromAdministratorAccount)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateFromAdministratorAccountRequest;
      output: {};
    };
    sdk: {
      input: DisassociateFromAdministratorAccountCommandInput;
      output: DisassociateFromAdministratorAccountCommandOutput;
    };
  };
}
