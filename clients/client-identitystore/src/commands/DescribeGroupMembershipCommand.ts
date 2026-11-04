// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeGroupMembershipRequest, DescribeGroupMembershipResponse } from "../models/models_0";
import { DescribeGroupMembership$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Retrieves membership metadata and attributes from `MembershipId` in an identity store.
 *
 * > **Note:** If you have access to a member account, you can use this API operation from the member account. For more information, see [Limiting access to the identity store from member accounts](https://docs.aws.amazon.com/singlesignon/latest/userguide/manage-your-accounts.html#limiting-access-from-member-accounts) in the *IAM Identity Center User Guide*.
 *
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
 * //   MembershipArn: "STRING_VALUE", // required
 * //   GroupId: "STRING_VALUE", // required
 * //   MemberId: { // MemberId Union: only one key present
 * //     UserId: "STRING_VALUE",
 * //   },
 * //   CreatedAt: new Date("TIMESTAMP"),
 * //   UpdatedAt: new Date("TIMESTAMP"),
 * //   CreatedBy: "STRING_VALUE",
 * //   UpdatedBy: "STRING_VALUE",
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
export class DescribeGroupMembershipCommand extends command<DescribeGroupMembershipCommandInput, DescribeGroupMembershipCommandOutput>(
  _ep0,
  _mw0,
  "DescribeGroupMembership",
  DescribeGroupMembership$
) {
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
