// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetMembersRequest, GetMembersResponse } from "../models/models_2";
import { de_GetMembersCommand, se_GetMembersCommand } from "../protocols/Aws_restJson1";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

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
 * <p>Returns the details for the Security Hub member accounts for the specified account IDs.</p>
 *          <p>An administrator account can be either the delegated Security Hub administrator account for an
 *          organization or an administrator account that enabled Security Hub manually.</p>
 *          <p>The results include both member accounts that are managed using Organizations and accounts that
 *          were invited manually.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, GetMembersCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, GetMembersCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const input = { // GetMembersRequest
 *   AccountIds: [ // AccountIdList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new GetMembersCommand(input);
 * const response = await client.send(command);
 * // { // GetMembersResponse
 * //   Members: [ // MemberList
 * //     { // Member
 * //       AccountId: "STRING_VALUE",
 * //       Email: "STRING_VALUE",
 * //       MasterId: "STRING_VALUE",
 * //       AdministratorId: "STRING_VALUE",
 * //       MemberStatus: "STRING_VALUE",
 * //       InvitedAt: new Date("TIMESTAMP"),
 * //       UpdatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   UnprocessedAccounts: [ // ResultList
 * //     { // Result
 * //       AccountId: "STRING_VALUE",
 * //       ProcessingResult: "STRING_VALUE",
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
 * @see {@link SecurityHubClientResolvedConfig | config} for SecurityHubClient's `config` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request was rejected because we can't find the specified resource.</p>
 *
 * @throws {@link SecurityHubServiceException}
 * <p>Base exception class for all service exceptions from SecurityHub service.</p>
 *
 * @public
 * @example To get member account details
 * ```javascript
 * // The following example returns details for the Security Hub member accounts with the specified AWS account IDs. An administrator account may be the delegated Security Hub administrator account for an organization or an administrator account that enabled Security Hub manually. The Security Hub administrator must call this operation.
 * const input = {
 *   "AccountIds": [
 *     "444455556666",
 *     "777788889999"
 *   ]
 * };
 * const command = new GetMembersCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Members": [
 *     {
 *       "AccountId": "444455556666",
 *       "AdministratorId": "123456789012",
 *       "InvitedAt": "2020-06-01T20:15:15.289000+00:00",
 *       "MasterId": "123456789012",
 *       "MemberStatus": "ASSOCIATED",
 *       "UpdatedAt": "2020-06-01T20:15:15.289000+00:00"
 *     },
 *     {
 *       "AccountId": "777788889999",
 *       "AdministratorId": "123456789012",
 *       "InvitedAt": "2020-06-01T20:15:15.289000+00:00",
 *       "MasterId": "123456789012",
 *       "MemberStatus": "ASSOCIATED",
 *       "UpdatedAt": "2020-06-01T20:15:15.289000+00:00"
 *     }
 *   ],
 *   "UnprocessedAccounts": []
 * }
 * *\/
 * // example id: to-get-member-account-details-1677774956489
 * ```
 *
 */
export class GetMembersCommand extends $Command
  .classBuilder<
    GetMembersCommandInput,
    GetMembersCommandOutput,
    SecurityHubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SecurityHubClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SecurityHubAPIService", "GetMembers", {})
  .n("SecurityHubClient", "GetMembersCommand")
  .f(void 0, void 0)
  .ser(se_GetMembersCommand)
  .de(de_GetMembersCommand)
  .build() {}
