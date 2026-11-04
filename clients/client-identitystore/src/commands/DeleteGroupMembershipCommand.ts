// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteGroupMembershipRequest, DeleteGroupMembershipResponse } from "../models/models_0";
import { DeleteGroupMembership$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Delete a membership within a group given `MembershipId`.
 *
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
 *
 * This request cannot be completed for one of the following reasons:
 *
 * - Performing the requested operation would violate an existing uniqueness claim in the identity store. Resolve the conflict before retrying this request.
 * - The requested resource was being concurrently modified by another request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Indicates that a requested resource is not found.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request failed because it contains a syntax error.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception or failure with an internal server.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Indicates that the principal has crossed the throttling limits of the API operations.
 *
 * @throws {@link IdentitystoreServiceException}
 *
 * Base exception class for all service exceptions from Identitystore service.
 *
 * @public
 */
export class DeleteGroupMembershipCommand extends command<DeleteGroupMembershipCommandInput, DeleteGroupMembershipCommandOutput>(
  _ep0,
  _mw0,
  "DeleteGroupMembership",
  DeleteGroupMembership$
) {
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
