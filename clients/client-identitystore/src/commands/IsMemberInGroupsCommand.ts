// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { IsMemberInGroupsRequest, IsMemberInGroupsResponse } from "../models/models_0";
import { IsMemberInGroups$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Checks the user's membership in all requested groups and returns if the member exists in all queried groups.
 *
 * > **Note:** If you have access to a member account, you can use this API operation from the member account. For more information, see [Limiting access to the identity store from member accounts](https://docs.aws.amazon.com/singlesignon/latest/userguide/manage-your-accounts.html#limiting-access-from-member-accounts) in the *IAM Identity Center User Guide*.
 *
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
export class IsMemberInGroupsCommand extends command<IsMemberInGroupsCommandInput, IsMemberInGroupsCommandOutput>(
  _ep0,
  _mw0,
  "IsMemberInGroups",
  IsMemberInGroups$
) {
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
