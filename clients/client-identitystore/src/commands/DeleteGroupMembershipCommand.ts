// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IdentitystoreClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IdentitystoreClient";
import { DeleteGroupMembershipRequest, DeleteGroupMembershipResponse } from "../models/models_0";
import { de_DeleteGroupMembershipCommand, se_DeleteGroupMembershipCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteGroupMembershipCommand}.
 */
export interface DeleteGroupMembershipCommandInput extends DeleteGroupMembershipRequest {}
/**
 * @public
 *
 * The output of {@link DeleteGroupMembershipCommand}.
 */
export interface DeleteGroupMembershipCommandOutput extends DeleteGroupMembershipResponse, __MetadataBearer {}

/**
 * <p>Delete a membership within a group given <code>MembershipId</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IdentitystoreClient, DeleteGroupMembershipCommand } from "@aws-sdk/client-identitystore"; // ES Modules import
 * // const { IdentitystoreClient, DeleteGroupMembershipCommand } = require("@aws-sdk/client-identitystore"); // CommonJS import
 * // import type { IdentitystoreClientConfig } from "@aws-sdk/client-identitystore";
 * const config = {}; // type is IdentitystoreClientConfig
 * const client = new IdentitystoreClient(config);
 * const input = { // DeleteGroupMembershipRequest
 *   IdentityStoreId: "STRING_VALUE", // required
 *   MembershipId: "STRING_VALUE", // required
 * };
 * const command = new DeleteGroupMembershipCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteGroupMembershipCommandInput - {@link DeleteGroupMembershipCommandInput}
 * @returns {@link DeleteGroupMembershipCommandOutput}
 * @see {@link DeleteGroupMembershipCommandInput} for command's `input` shape.
 * @see {@link DeleteGroupMembershipCommandOutput} for command's `response` shape.
 * @see {@link IdentitystoreClientResolvedConfig | config} for IdentitystoreClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This request cannot be completed for one of the following reasons:</p> <ul> <li> <p>Performing the requested operation would violate an existing uniqueness claim in the identity store. Resolve the conflict before retrying this request.</p> </li> <li> <p>The requested resource was being concurrently modified by another request.</p> </li> </ul>
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
export class DeleteGroupMembershipCommand extends $Command
  .classBuilder<
    DeleteGroupMembershipCommandInput,
    DeleteGroupMembershipCommandOutput,
    IdentitystoreClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IdentitystoreClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIdentityStore", "DeleteGroupMembership", {})
  .n("IdentitystoreClient", "DeleteGroupMembershipCommand")
  .f(void 0, void 0)
  .ser(se_DeleteGroupMembershipCommand)
  .de(de_DeleteGroupMembershipCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteGroupMembershipRequest;
      output: {};
    };
    sdk: {
      input: DeleteGroupMembershipCommandInput;
      output: DeleteGroupMembershipCommandOutput;
    };
  };
}
