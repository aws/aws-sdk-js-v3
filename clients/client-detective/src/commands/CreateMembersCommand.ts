// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DetectiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DetectiveClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateMembersRequest,
  CreateMembersRequestFilterSensitiveLog,
  CreateMembersResponse,
  CreateMembersResponseFilterSensitiveLog,
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
 * <p>
 *             <code>CreateMembers</code> is used to send invitations to accounts. For the organization
 *          behavior graph, the Detective administrator account uses
 *          <code>CreateMembers</code> to enable organization accounts as member accounts.</p>
 *          <p>For invited accounts, <code>CreateMembers</code> sends a request to invite the specified
 *          Amazon Web Services accounts to be member accounts in the behavior graph. This operation
 *          can only be called by the administrator account for a behavior graph. </p>
 *          <p>
 *             <code>CreateMembers</code> verifies the accounts and then invites the verified accounts.
 *          The administrator can optionally specify to not send invitation emails to the member
 *          accounts. This would be used when the administrator manages their member accounts
 *          centrally.</p>
 *          <p>For organization accounts in the organization behavior graph, <code>CreateMembers</code>
 *          attempts to enable the accounts. The organization accounts do not receive
 *          invitations.</p>
 *          <p>The request provides the behavior graph ARN and the list of accounts to invite or to
 *          enable.</p>
 *          <p>The response separates the requested accounts into two lists:</p>
 *          <ul>
 *             <li>
 *                <p>The accounts that <code>CreateMembers</code> was able to process. For invited
 *                accounts, includes member accounts that are being verified, that have passed
 *                verification and are to be invited, and that have failed verification. For
 *                organization accounts in the organization behavior graph, includes accounts that can
 *                be enabled and that cannot be enabled.</p>
 *             </li>
 *             <li>
 *                <p>The accounts that <code>CreateMembers</code> was unable to process. This list
 *                includes accounts that were already invited to be member accounts in the behavior
 *                graph.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DetectiveClient, CreateMembersCommand } from "@aws-sdk/client-detective"; // ES Modules import
 * // const { DetectiveClient, CreateMembersCommand } = require("@aws-sdk/client-detective"); // CommonJS import
 * const client = new DetectiveClient(config);
 * const input = { // CreateMembersRequest
 *   GraphArn: "STRING_VALUE", // required
 *   Message: "STRING_VALUE",
 *   DisableEmailNotification: true || false,
 *   Accounts: [ // AccountList // required
 *     { // Account
 *       AccountId: "STRING_VALUE", // required
 *       EmailAddress: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateMembersCommand(input);
 * const response = await client.send(command);
 * // { // CreateMembersResponse
 * //   Members: [ // MemberDetailList
 * //     { // MemberDetail
 * //       AccountId: "STRING_VALUE",
 * //       EmailAddress: "STRING_VALUE",
 * //       GraphArn: "STRING_VALUE",
 * //       MasterId: "STRING_VALUE",
 * //       AdministratorId: "STRING_VALUE",
 * //       Status: "INVITED" || "VERIFICATION_IN_PROGRESS" || "VERIFICATION_FAILED" || "ENABLED" || "ACCEPTED_BUT_DISABLED",
 * //       DisabledReason: "VOLUME_TOO_HIGH" || "VOLUME_UNKNOWN",
 * //       InvitedTime: new Date("TIMESTAMP"),
 * //       UpdatedTime: new Date("TIMESTAMP"),
 * //       VolumeUsageInBytes: Number("long"),
 * //       VolumeUsageUpdatedTime: new Date("TIMESTAMP"),
 * //       PercentOfGraphUtilization: Number("double"),
 * //       PercentOfGraphUtilizationUpdatedTime: new Date("TIMESTAMP"),
 * //       InvitationType: "INVITATION" || "ORGANIZATION",
 * //       VolumeUsageByDatasourcePackage: { // VolumeUsageByDatasourcePackage
 * //         "<keys>": { // DatasourcePackageUsageInfo
 * //           VolumeUsageInBytes: Number("long"),
 * //           VolumeUsageUpdateTime: new Date("TIMESTAMP"),
 * //         },
 * //       },
 * //       DatasourcePackageIngestStates: { // DatasourcePackageIngestStates
 * //         "<keys>": "STARTED" || "STOPPED" || "DISABLED",
 * //       },
 * //     },
 * //   ],
 * //   UnprocessedAccounts: [ // UnprocessedAccountList
 * //     { // UnprocessedAccount
 * //       AccountId: "STRING_VALUE",
 * //       Reason: "STRING_VALUE",
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
 * @see {@link DetectiveClientResolvedConfig | config} for DetectiveClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request issuer does not have permission to access this resource or perform this
 *          operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request was valid but failed because of a problem with the service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request refers to a nonexistent resource.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>This request cannot be completed for one of the following reasons.</p>
 *          <ul>
 *             <li>
 *                <p>This request cannot be completed if it would cause the number of member accounts in the
 *             behavior graph to exceed the maximum allowed. A behavior graph cannot have more than 1,200
 *             member accounts.</p>
 *             </li>
 *             <li>
 *                <p>This request cannot be completed if the current volume ingested is above the limit of 10 TB per day. Detective will not allow you to add additional member accounts.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request parameters are invalid.</p>
 *
 * @throws {@link DetectiveServiceException}
 * <p>Base exception class for all service exceptions from Detective service.</p>
 *
 * @public
 */
export class CreateMembersCommand extends $Command
  .classBuilder<
    CreateMembersCommandInput,
    CreateMembersCommandOutput,
    DetectiveClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: DetectiveClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonDetective", "CreateMembers", {})
  .n("DetectiveClient", "CreateMembersCommand")
  .f(CreateMembersRequestFilterSensitiveLog, CreateMembersResponseFilterSensitiveLog)
  .ser(se_CreateMembersCommand)
  .de(de_CreateMembersCommand)
  .build() {}
