// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import {
  CreateMembersRequest,
  CreateMembersRequestFilterSensitiveLog,
  CreateMembersResponse,
} from "../models/models_0";
import { de_CreateMembersCommand, se_CreateMembersCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateMembersCommand}.
 */
export interface CreateMembersCommandInput extends CreateMembersRequest {}
/**
 * @public
 *
 * The output of {@link CreateMembersCommand}.
 */
export interface CreateMembersCommandOutput extends CreateMembersResponse, __MetadataBearer {}

/**
 * <p>Creates member accounts of the current Amazon Web Services account by specifying a list of Amazon Web Services account
 *       IDs. This step is a prerequisite for managing the associated member accounts either by
 *       invitation or through an organization.</p>
 *          <p>As a delegated administrator, using <code>CreateMembers</code> will enable GuardDuty in
 *       the added member accounts, with the exception of the
 *       organization delegated administrator account. A delegated administrator must enable GuardDuty
 *       prior to being added as a member.</p>
 *          <p>When you use CreateMembers as an Organizations delegated
 *       administrator, GuardDuty applies your organization's auto-enable settings to the member
 *       accounts in this request, irrespective of the accounts being new or existing members. For
 *       more information about the existing auto-enable settings for your organization, see
 *       <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_DescribeOrganizationConfiguration.html">DescribeOrganizationConfiguration</a>.</p>
 *          <p>If you disassociate a member account that was added by invitation, the member account details
 *       obtained from this API, including the associated email addresses, will be retained.
 *       This is done so that the delegated administrator can invoke the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_InviteMembers.html">InviteMembers</a> API without the need to invoke the CreateMembers API again. To
 *       remove the details associated with a member account, the delegated administrator must invoke the
 *       <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_DeleteMembers.html">DeleteMembers</a> API. </p>
 *          <p>When the member accounts added through Organizations are later disassociated, you (administrator)
 *       can't invite them by calling the InviteMembers API. You can create an association with these
 *       member accounts again only by calling the CreateMembers API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, CreateMembersCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, CreateMembersCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const input = { // CreateMembersRequest
 *   DetectorId: "STRING_VALUE", // required
 *   AccountDetails: [ // AccountDetails // required
 *     { // AccountDetail
 *       AccountId: "STRING_VALUE", // required
 *       Email: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateMembersCommand(input);
 * const response = await client.send(command);
 * // { // CreateMembersResponse
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
 * @param CreateMembersCommandInput - {@link CreateMembersCommandInput}
 * @returns {@link CreateMembersCommandOutput}
 * @see {@link CreateMembersCommandInput} for command's `input` shape.
 * @see {@link CreateMembersCommandOutput} for command's `response` shape.
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
export class CreateMembersCommand extends $Command
  .classBuilder<
    CreateMembersCommandInput,
    CreateMembersCommandOutput,
    GuardDutyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GuardDutyClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("GuardDutyAPIService", "CreateMembers", {})
  .n("GuardDutyClient", "CreateMembersCommand")
  .f(CreateMembersRequestFilterSensitiveLog, void 0)
  .ser(se_CreateMembersCommand)
  .de(de_CreateMembersCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateMembersRequest;
      output: CreateMembersResponse;
    };
    sdk: {
      input: CreateMembersCommandInput;
      output: CreateMembersCommandOutput;
    };
  };
}
