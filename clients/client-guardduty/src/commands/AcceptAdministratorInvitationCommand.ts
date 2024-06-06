// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import { AcceptAdministratorInvitationRequest, AcceptAdministratorInvitationResponse } from "../models/models_0";
import {
  de_AcceptAdministratorInvitationCommand,
  se_AcceptAdministratorInvitationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AcceptAdministratorInvitationCommand}.
 */
export interface AcceptAdministratorInvitationCommandInput extends AcceptAdministratorInvitationRequest {}
/**
 * @public
 *
 * The output of {@link AcceptAdministratorInvitationCommand}.
 */
export interface AcceptAdministratorInvitationCommandOutput
  extends AcceptAdministratorInvitationResponse,
    __MetadataBearer {}

/**
 * <p>Accepts the invitation to be a member account and get monitored by a GuardDuty
 *       administrator account that sent the invitation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, AcceptAdministratorInvitationCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, AcceptAdministratorInvitationCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const input = { // AcceptAdministratorInvitationRequest
 *   DetectorId: "STRING_VALUE", // required
 *   AdministratorId: "STRING_VALUE", // required
 *   InvitationId: "STRING_VALUE", // required
 * };
 * const command = new AcceptAdministratorInvitationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AcceptAdministratorInvitationCommandInput - {@link AcceptAdministratorInvitationCommandInput}
 * @returns {@link AcceptAdministratorInvitationCommandOutput}
 * @see {@link AcceptAdministratorInvitationCommandInput} for command's `input` shape.
 * @see {@link AcceptAdministratorInvitationCommandOutput} for command's `response` shape.
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
export class AcceptAdministratorInvitationCommand extends $Command
  .classBuilder<
    AcceptAdministratorInvitationCommandInput,
    AcceptAdministratorInvitationCommandOutput,
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
  .s("GuardDutyAPIService", "AcceptAdministratorInvitation", {})
  .n("GuardDutyClient", "AcceptAdministratorInvitationCommand")
  .f(void 0, void 0)
  .ser(se_AcceptAdministratorInvitationCommand)
  .de(de_AcceptAdministratorInvitationCommand)
  .build() {}
