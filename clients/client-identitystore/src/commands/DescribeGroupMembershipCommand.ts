// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IdentitystoreClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IdentitystoreClient";
import { DescribeGroupMembershipRequest, DescribeGroupMembershipResponse } from "../models/models_0";
import { DescribeGroupMembership } from "../schemas/schemas_5_Group";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeGroupMembershipCommand}.
 */
export interface DescribeGroupMembershipCommandInput extends DescribeGroupMembershipRequest {}
/**
 * @public
 *
 * The output of {@link DescribeGroupMembershipCommand}.
 */
export interface DescribeGroupMembershipCommandOutput extends DescribeGroupMembershipResponse, __MetadataBearer {}

/**
 * <p>Retrieves membership metadata and attributes from <code>MembershipId</code> in an identity store.</p>
 *          <note>
 *             <p>If you have administrator access to a member account, you can use this API from the member account.
 *          Read about <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_access.html">member accounts</a> in the
 *          <i>Organizations User Guide</i>. </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IdentitystoreClient, DescribeGroupMembershipCommand } from "@aws-sdk/client-identitystore"; // ES Modules import
 * // const { IdentitystoreClient, DescribeGroupMembershipCommand } = require("@aws-sdk/client-identitystore"); // CommonJS import
 * // import type { IdentitystoreClientConfig } from "@aws-sdk/client-identitystore";
 * const config = {}; // type is IdentitystoreClientConfig
 * const client = new IdentitystoreClient(config);
 * const input = { // DescribeGroupMembershipRequest
 *   IdentityStoreId: "STRING_VALUE", // required
 *   MembershipId: "STRING_VALUE", // required
 * };
 * const command = new DescribeGroupMembershipCommand(input);
 * const response = await client.send(command);
 * // { // DescribeGroupMembershipResponse
 * //   IdentityStoreId: "STRING_VALUE", // required
 * //   MembershipId: "STRING_VALUE", // required
 * //   GroupId: "STRING_VALUE", // required
 * //   MemberId: { // MemberId Union: only one key present
 * //     UserId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeGroupMembershipCommandInput - {@link DescribeGroupMembershipCommandInput}
 * @returns {@link DescribeGroupMembershipCommandOutput}
 * @see {@link DescribeGroupMembershipCommandInput} for command's `input` shape.
 * @see {@link DescribeGroupMembershipCommandOutput} for command's `response` shape.
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
export class DescribeGroupMembershipCommand extends $Command
  .classBuilder<
    DescribeGroupMembershipCommandInput,
    DescribeGroupMembershipCommandOutput,
    IdentitystoreClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IdentitystoreClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIdentityStore", "DescribeGroupMembership", {})
  .n("IdentitystoreClient", "DescribeGroupMembershipCommand")
  .sc(DescribeGroupMembership)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeGroupMembershipRequest;
      output: DescribeGroupMembershipResponse;
    };
    sdk: {
      input: DescribeGroupMembershipCommandInput;
      output: DescribeGroupMembershipCommandOutput;
    };
  };
}
