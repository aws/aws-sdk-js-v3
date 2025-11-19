// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import { GetAdministratorAccountRequest, GetAdministratorAccountResponse } from "../models/models_0";
import { GetAdministratorAccount } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Provides the details of the GuardDuty administrator account associated with the current
 *       GuardDuty member account.</p>
 *          <p>Based on the type of account that runs this API, the following list shows how the API behavior varies:</p>
 *          <ul>
 *             <li>
 *                <p>When the GuardDuty administrator account runs this API, it will return success (<code>HTTP 200</code>) but no content.</p>
 *             </li>
 *             <li>
 *                <p>When a member account runs this API, it will return the details of the GuardDuty administrator account that is associated
 *         with this calling member account.</p>
 *             </li>
 *             <li>
 *                <p>When an individual account (not associated with an organization) runs this API, it will return success (<code>HTTP 200</code>)
 *         but no content.</p>
 *             </li>
 *          </ul>
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
export class GetAdministratorAccountCommand extends $Command
  .classBuilder<
    GetAdministratorAccountCommandInput,
    GetAdministratorAccountCommandOutput,
    GuardDutyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GuardDutyClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GuardDutyAPIService", "GetAdministratorAccount", {})
  .n("GuardDutyClient", "GetAdministratorAccountCommand")
  .sc(GetAdministratorAccount)
  .build() {
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
