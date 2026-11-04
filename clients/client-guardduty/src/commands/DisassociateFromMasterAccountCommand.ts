// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DisassociateFromMasterAccountRequest, DisassociateFromMasterAccountResponse } from "../models/models_0";
import { DisassociateFromMasterAccount$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DisassociateFromMasterAccountCommand}.
 */
export interface DisassociateFromMasterAccountCommandInput extends DisassociateFromMasterAccountRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateFromMasterAccountCommand}.
 */
export interface DisassociateFromMasterAccountCommandOutput extends DisassociateFromMasterAccountResponse, __MetadataBearer {}

/**
 * Disassociates the current GuardDuty member account from its administrator account.
 *
 * When you disassociate an invited member from a GuardDuty delegated administrator, the member account details obtained from the [CreateMembers](https://docs.aws.amazon.com/guardduty/latest/APIReference/API_CreateMembers.html) API, including the associated email addresses, are retained. This is done so that the delegated administrator can invoke the [InviteMembers](https://docs.aws.amazon.com/guardduty/latest/APIReference/API_InviteMembers.html) API without the need to invoke the CreateMembers API again. To remove the details associated with a member account, the delegated administrator must invoke the [DeleteMembers](https://docs.aws.amazon.com/guardduty/latest/APIReference/API_DeleteMembers.html) API.
 *
 * @deprecated This operation is deprecated, use DisassociateFromAdministratorAccount instead.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, DisassociateFromMasterAccountCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, DisassociateFromMasterAccountCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * // import type { GuardDutyClientConfig } from "@aws-sdk/client-guardduty";
 * const config = {}; // type is GuardDutyClientConfig
 * const client = new GuardDutyClient(config);
 * const input = { // DisassociateFromMasterAccountRequest
 *   DetectorId: "STRING_VALUE", // required
 * };
 * const command = new DisassociateFromMasterAccountCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateFromMasterAccountCommandInput - {@link DisassociateFromMasterAccountCommandInput}
 * @returns {@link DisassociateFromMasterAccountCommandOutput}
 * @see {@link DisassociateFromMasterAccountCommandInput} for command's `input` shape.
 * @see {@link DisassociateFromMasterAccountCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for GuardDutyClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * A bad request exception object.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *
 * An internal server error exception object.
 *
 * @throws {@link GuardDutyServiceException}
 *
 * Base exception class for all service exceptions from GuardDuty service.
 *
 * @public
 */
export class DisassociateFromMasterAccountCommand extends command<DisassociateFromMasterAccountCommandInput, DisassociateFromMasterAccountCommandOutput>(
  _ep0,
  _mw0,
  "DisassociateFromMasterAccount",
  DisassociateFromMasterAccount$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateFromMasterAccountRequest;
      output: {};
    };
    sdk: {
      input: DisassociateFromMasterAccountCommandInput;
      output: DisassociateFromMasterAccountCommandOutput;
    };
  };
}
