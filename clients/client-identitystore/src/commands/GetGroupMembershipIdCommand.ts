// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetGroupMembershipIdRequest, GetGroupMembershipIdResponse } from "../models/models_0";
import { GetGroupMembershipId$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetGroupMembershipIdCommand}.
 */
export interface GetGroupMembershipIdCommandInput extends GetGroupMembershipIdRequest {}
/**
 * @public
 *
 * The output of {@link GetGroupMembershipIdCommand}.
 */
export interface GetGroupMembershipIdCommandOutput extends GetGroupMembershipIdResponse, __MetadataBearer {}

/**
 * Retrieves the `MembershipId` in an identity store.
 *
 * > **Note:** If you have access to a member account, you can use this API operation from the member account. For more information, see [Limiting access to the identity store from member accounts](https://docs.aws.amazon.com/singlesignon/latest/userguide/manage-your-accounts.html#limiting-access-from-member-accounts) in the *IAM Identity Center User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IdentitystoreClient, GetGroupMembershipIdCommand } from "@aws-sdk/client-identitystore"; // ES Modules import
 * // const { IdentitystoreClient, GetGroupMembershipIdCommand } = require("@aws-sdk/client-identitystore"); // CommonJS import
 * // import type { IdentitystoreClientConfig } from "@aws-sdk/client-identitystore";
 * const config = {}; // type is IdentitystoreClientConfig
 * const client = new IdentitystoreClient(config);
 * const input = { // GetGroupMembershipIdRequest
 *   IdentityStoreId: "STRING_VALUE", // required
 *   GroupId: "STRING_VALUE", // required
 *   MemberId: { // MemberId Union: only one key present
 *     UserId: "STRING_VALUE",
 *   },
 * };
 * const command = new GetGroupMembershipIdCommand(input);
 * const response = await client.send(command);
 * // { // GetGroupMembershipIdResponse
 * //   IdentityStoreId: "STRING_VALUE", // required
 * //   MembershipId: "STRING_VALUE", // required
 * //   MembershipArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param GetGroupMembershipIdCommandInput - {@link GetGroupMembershipIdCommandInput}
 * @returns {@link GetGroupMembershipIdCommandOutput}
 * @see {@link GetGroupMembershipIdCommandInput} for command's `input` shape.
 * @see {@link GetGroupMembershipIdCommandOutput} for command's `response` shape.
 * @see {@link IdentitystoreClientResolvedConfig | config} for IdentitystoreClient's `config` shape.
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
export class GetGroupMembershipIdCommand extends command<GetGroupMembershipIdCommandInput, GetGroupMembershipIdCommandOutput>(
  _ep0,
  _mw0,
  "GetGroupMembershipId",
  GetGroupMembershipId$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetGroupMembershipIdRequest;
      output: GetGroupMembershipIdResponse;
    };
    sdk: {
      input: GetGroupMembershipIdCommandInput;
      output: GetGroupMembershipIdCommandOutput;
    };
  };
}
