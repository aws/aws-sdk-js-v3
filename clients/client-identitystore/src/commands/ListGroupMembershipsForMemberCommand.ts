// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IdentitystoreClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IdentitystoreClient";
import { ListGroupMembershipsForMemberRequest, ListGroupMembershipsForMemberResponse } from "../models/models_0";
import {
  de_ListGroupMembershipsForMemberCommand,
  se_ListGroupMembershipsForMemberCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListGroupMembershipsForMemberCommand}.
 */
export interface ListGroupMembershipsForMemberCommandInput extends ListGroupMembershipsForMemberRequest {}
/**
 * @public
 *
 * The output of {@link ListGroupMembershipsForMemberCommand}.
 */
export interface ListGroupMembershipsForMemberCommandOutput
  extends ListGroupMembershipsForMemberResponse,
    __MetadataBearer {}

/**
 * <p>For the specified member in the specified identity store, returns the list of all <code>GroupMembership</code> objects and returns results in paginated form.</p>
 *          <note>
 *             <p>If you have administrator access to a member account, you can use this API from the member account.
 *          Read about <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_access.html">member accounts</a> in the
 *          <i>Organizations User Guide</i>. </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IdentitystoreClient, ListGroupMembershipsForMemberCommand } from "@aws-sdk/client-identitystore"; // ES Modules import
 * // const { IdentitystoreClient, ListGroupMembershipsForMemberCommand } = require("@aws-sdk/client-identitystore"); // CommonJS import
 * const client = new IdentitystoreClient(config);
 * const input = { // ListGroupMembershipsForMemberRequest
 *   IdentityStoreId: "STRING_VALUE", // required
 *   MemberId: { // MemberId Union: only one key present
 *     UserId: "STRING_VALUE",
 *   },
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListGroupMembershipsForMemberCommand(input);
 * const response = await client.send(command);
 * // { // ListGroupMembershipsForMemberResponse
 * //   GroupMemberships: [ // GroupMemberships // required
 * //     { // GroupMembership
 * //       IdentityStoreId: "STRING_VALUE", // required
 * //       MembershipId: "STRING_VALUE",
 * //       GroupId: "STRING_VALUE",
 * //       MemberId: { // MemberId Union: only one key present
 * //         UserId: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListGroupMembershipsForMemberCommandInput - {@link ListGroupMembershipsForMemberCommandInput}
 * @returns {@link ListGroupMembershipsForMemberCommandOutput}
 * @see {@link ListGroupMembershipsForMemberCommandInput} for command's `input` shape.
 * @see {@link ListGroupMembershipsForMemberCommandOutput} for command's `response` shape.
 * @see {@link IdentitystoreClientResolvedConfig | config} for IdentitystoreClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Indicates that a requested resource is not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed because it contains a syntax error.</p>
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure with an internal server.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Indicates that the principal has crossed the throttling limits of the API operations.</p>
 *
 * @throws {@link IdentitystoreServiceException}
 * <p>Base exception class for all service exceptions from Identitystore service.</p>
 *
 * @public
 */
export class ListGroupMembershipsForMemberCommand extends $Command
  .classBuilder<
    ListGroupMembershipsForMemberCommandInput,
    ListGroupMembershipsForMemberCommandOutput,
    IdentitystoreClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: IdentitystoreClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIdentityStore", "ListGroupMembershipsForMember", {})
  .n("IdentitystoreClient", "ListGroupMembershipsForMemberCommand")
  .f(void 0, void 0)
  .ser(se_ListGroupMembershipsForMemberCommand)
  .de(de_ListGroupMembershipsForMemberCommand)
  .build() {}
