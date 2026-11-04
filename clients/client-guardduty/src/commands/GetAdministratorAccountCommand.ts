// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetAdministratorAccountRequest, GetAdministratorAccountResponse } from "../models/models_0";
import { GetAdministratorAccount$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetAdministratorAccountCommand}.
 */
export interface GetAdministratorAccountCommandInput extends GetAdministratorAccountRequest {}
/**
 * @public
 *
 * The output of {@link GetAdministratorAccountCommand}.
 */
export interface GetAdministratorAccountCommandOutput extends GetAdministratorAccountResponse, __MetadataBearer {}

/**
 * Provides the details of the GuardDuty administrator account associated with the current GuardDuty member account.
 *
 * Based on the type of account that runs this API, the following list shows how the API behavior varies:
 *
 * - When the GuardDuty administrator account runs this API, it will return success (`HTTP 200`) but no content.
 * - When a member account runs this API, it will return the details of the GuardDuty administrator account that is associated with this calling member account.
 * - When an individual account (not associated with an organization) runs this API, it will return success (`HTTP 200`) but no content.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, GetAdministratorAccountCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, GetAdministratorAccountCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * // import type { GuardDutyClientConfig } from "@aws-sdk/client-guardduty";
 * const config = {}; // type is GuardDutyClientConfig
 * const client = new GuardDutyClient(config);
 * const input = { // GetAdministratorAccountRequest
 *   DetectorId: "STRING_VALUE", // required
 * };
 * const command = new GetAdministratorAccountCommand(input);
 * const response = await client.send(command);
 * // { // GetAdministratorAccountResponse
 * //   Administrator: { // Administrator
 * //     AccountId: "STRING_VALUE",
 * //     InvitationId: "STRING_VALUE",
 * //     RelationshipStatus: "STRING_VALUE",
 * //     InvitedAt: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetAdministratorAccountCommandInput - {@link GetAdministratorAccountCommandInput}
 * @returns {@link GetAdministratorAccountCommandOutput}
 * @see {@link GetAdministratorAccountCommandInput} for command's `input` shape.
 * @see {@link GetAdministratorAccountCommandOutput} for command's `response` shape.
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
export class GetAdministratorAccountCommand extends command<GetAdministratorAccountCommandInput, GetAdministratorAccountCommandOutput>(
  _ep0,
  _mw0,
  "GetAdministratorAccount",
  GetAdministratorAccount$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAdministratorAccountRequest;
      output: GetAdministratorAccountResponse;
    };
    sdk: {
      input: GetAdministratorAccountCommandInput;
      output: GetAdministratorAccountCommandOutput;
    };
  };
}
