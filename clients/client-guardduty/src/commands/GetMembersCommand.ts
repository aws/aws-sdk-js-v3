// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import { GetMembersRequest, GetMembersResponse } from "../models/models_1";
import { GetMembers } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetMembersCommand}.
 */
export interface GetMembersCommandInput extends GetMembersRequest {}
/**
 * @public
 *
 * The output of {@link GetMembersCommand}.
 */
export interface GetMembersCommandOutput extends GetMembersResponse, __MetadataBearer {}

/**
 * <p>Retrieves GuardDuty member accounts (of the current GuardDuty administrator account)
 *       specified by the account IDs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, GetMembersCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, GetMembersCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * // import type { GuardDutyClientConfig } from "@aws-sdk/client-guardduty";
 * const config = {}; // type is GuardDutyClientConfig
 * const client = new GuardDutyClient(config);
 * const input = { // GetMembersRequest
 *   DetectorId: "STRING_VALUE", // required
 *   AccountIds: [ // AccountIds // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new GetMembersCommand(input);
 * const response = await client.send(command);
 * // { // GetMembersResponse
 * //   Members: [ // Members // required
 * //     { // Member
 * //       AccountId: "STRING_VALUE", // required
 * //       DetectorId: "STRING_VALUE",
 * //       MasterId: "STRING_VALUE", // required
 * //       Email: "STRING_VALUE", // required
 * //       RelationshipStatus: "STRING_VALUE", // required
 * //       InvitedAt: "STRING_VALUE",
 * //       UpdatedAt: "STRING_VALUE", // required
 * //       AdministratorId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   UnprocessedAccounts: [ // UnprocessedAccounts // required
 * //     { // UnprocessedAccount
 * //       AccountId: "STRING_VALUE", // required
 * //       Result: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetMembersCommandInput - {@link GetMembersCommandInput}
 * @returns {@link GetMembersCommandOutput}
 * @see {@link GetMembersCommandInput} for command's `input` shape.
 * @see {@link GetMembersCommandOutput} for command's `response` shape.
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
export class GetMembersCommand extends $Command
  .classBuilder<
    GetMembersCommandInput,
    GetMembersCommandOutput,
    GuardDutyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GuardDutyClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GuardDutyAPIService", "GetMembers", {})
  .n("GuardDutyClient", "GetMembersCommand")
  .sc(GetMembers)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetMembersRequest;
      output: GetMembersResponse;
    };
    sdk: {
      input: GetMembersCommandInput;
      output: GetMembersCommandOutput;
    };
  };
}
