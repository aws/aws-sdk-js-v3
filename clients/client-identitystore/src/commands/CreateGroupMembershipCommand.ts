// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IdentitystoreClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IdentitystoreClient";
import type { CreateGroupMembershipRequest, CreateGroupMembershipResponse } from "../models/models_0";
import { CreateGroupMembership$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateGroupMembershipCommand}.
 */
export interface CreateGroupMembershipCommandInput extends CreateGroupMembershipRequest {}
/**
 * @public
 *
 * The output of {@link CreateGroupMembershipCommand}.
 */
export interface CreateGroupMembershipCommandOutput extends CreateGroupMembershipResponse, __MetadataBearer {}

/**
 * <p>Creates a relationship between a member and a group. The following identifiers must be specified: <code>GroupId</code>, <code>IdentityStoreId</code>, and <code>MemberId</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IdentitystoreClient, CreateGroupMembershipCommand } from "@aws-sdk/client-identitystore"; // ES Modules import
 * // const { IdentitystoreClient, CreateGroupMembershipCommand } = require("@aws-sdk/client-identitystore"); // CommonJS import
 * // import type { IdentitystoreClientConfig } from "@aws-sdk/client-identitystore";
 * const config = {}; // type is IdentitystoreClientConfig
 * const client = new IdentitystoreClient(config);
 * const input = { // CreateGroupMembershipRequest
 *   IdentityStoreId: "STRING_VALUE", // required
 *   GroupId: "STRING_VALUE", // required
 *   MemberId: { // MemberId Union: only one key present
 *     UserId: "STRING_VALUE",
 *   },
 * };
 * const command = new CreateGroupMembershipCommand(input);
 * const response = await client.send(command);
 * // { // CreateGroupMembershipResponse
 * //   MembershipId: "STRING_VALUE", // required
 * //   IdentityStoreId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateGroupMembershipCommandInput - {@link CreateGroupMembershipCommandInput}
 * @returns {@link CreateGroupMembershipCommandOutput}
 * @see {@link CreateGroupMembershipCommandInput} for command's `input` shape.
 * @see {@link CreateGroupMembershipCommandOutput} for command's `response` shape.
 * @see {@link IdentitystoreClientResolvedConfig | config} for IdentitystoreClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This request cannot be completed for one of the following reasons:</p> <ul> <li> <p>Performing the requested operation would violate an existing uniqueness claim in the identity store. Resolve the conflict before retrying this request.</p> </li> <li> <p>The requested resource was being concurrently modified by another request.</p> </li> </ul>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Indicates that a requested resource is not found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would cause the number of users or groups in the identity store to exceed the maximum allowed.</p>
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
export class CreateGroupMembershipCommand extends $Command
  .classBuilder<
    CreateGroupMembershipCommandInput,
    CreateGroupMembershipCommandOutput,
    IdentitystoreClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IdentitystoreClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIdentityStore", "CreateGroupMembership", {})
  .n("IdentitystoreClient", "CreateGroupMembershipCommand")
  .sc(CreateGroupMembership$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateGroupMembershipRequest;
      output: CreateGroupMembershipResponse;
    };
    sdk: {
      input: CreateGroupMembershipCommandInput;
      output: CreateGroupMembershipCommandOutput;
    };
  };
}
