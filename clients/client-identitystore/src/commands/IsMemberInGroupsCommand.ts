// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IdentitystoreClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IdentitystoreClient";
import { IsMemberInGroupsRequest, IsMemberInGroupsResponse } from "../models/models_0";
import { IsMemberInGroups } from "../schemas/schemas_5_Group";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link IsMemberInGroupsCommand}.
 */
export interface IsMemberInGroupsCommandInput extends IsMemberInGroupsRequest {}
/**
 * @public
 *
 * The output of {@link IsMemberInGroupsCommand}.
 */
export interface IsMemberInGroupsCommandOutput extends IsMemberInGroupsResponse, __MetadataBearer {}

/**
 * <p>Checks the user's membership in all requested groups and returns if the member exists in all queried groups.</p>
 *          <note>
 *             <p>If you have administrator access to a member account, you can use this API from the member account.
 *          Read about <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_access.html">member accounts</a> in the
 *          <i>Organizations User Guide</i>. </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IdentitystoreClient, IsMemberInGroupsCommand } from "@aws-sdk/client-identitystore"; // ES Modules import
 * // const { IdentitystoreClient, IsMemberInGroupsCommand } = require("@aws-sdk/client-identitystore"); // CommonJS import
 * // import type { IdentitystoreClientConfig } from "@aws-sdk/client-identitystore";
 * const config = {}; // type is IdentitystoreClientConfig
 * const client = new IdentitystoreClient(config);
 * const input = { // IsMemberInGroupsRequest
 *   IdentityStoreId: "STRING_VALUE", // required
 *   MemberId: { // MemberId Union: only one key present
 *     UserId: "STRING_VALUE",
 *   },
 *   GroupIds: [ // GroupIds // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new IsMemberInGroupsCommand(input);
 * const response = await client.send(command);
 * // { // IsMemberInGroupsResponse
 * //   Results: [ // GroupMembershipExistenceResults // required
 * //     { // GroupMembershipExistenceResult
 * //       GroupId: "STRING_VALUE",
 * //       MemberId: { // MemberId Union: only one key present
 * //         UserId: "STRING_VALUE",
 * //       },
 * //       MembershipExists: true || false,
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param IsMemberInGroupsCommandInput - {@link IsMemberInGroupsCommandInput}
 * @returns {@link IsMemberInGroupsCommandOutput}
 * @see {@link IsMemberInGroupsCommandInput} for command's `input` shape.
 * @see {@link IsMemberInGroupsCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class IsMemberInGroupsCommand extends $Command
  .classBuilder<
    IsMemberInGroupsCommandInput,
    IsMemberInGroupsCommandOutput,
    IdentitystoreClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IdentitystoreClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIdentityStore", "IsMemberInGroups", {})
  .n("IdentitystoreClient", "IsMemberInGroupsCommand")
  .sc(IsMemberInGroups)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: IsMemberInGroupsRequest;
      output: IsMemberInGroupsResponse;
    };
    sdk: {
      input: IsMemberInGroupsCommandInput;
      output: IsMemberInGroupsCommandOutput;
    };
  };
}
