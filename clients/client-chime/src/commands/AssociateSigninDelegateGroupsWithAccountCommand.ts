// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  AssociateSigninDelegateGroupsWithAccountRequest,
  AssociateSigninDelegateGroupsWithAccountResponse,
} from "../models/models_0";
import { AssociateSigninDelegateGroupsWithAccount$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AssociateSigninDelegateGroupsWithAccountCommand}.
 */
export interface AssociateSigninDelegateGroupsWithAccountCommandInput extends AssociateSigninDelegateGroupsWithAccountRequest {}
/**
 * @public
 *
 * The output of {@link AssociateSigninDelegateGroupsWithAccountCommand}.
 */
export interface AssociateSigninDelegateGroupsWithAccountCommandOutput extends AssociateSigninDelegateGroupsWithAccountResponse, __MetadataBearer {}

/**
 * Associates the specified sign-in delegate groups with the specified Amazon Chime account.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, AssociateSigninDelegateGroupsWithAccountCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, AssociateSigninDelegateGroupsWithAccountCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * // import type { ChimeClientConfig } from "@aws-sdk/client-chime";
 * const config = {}; // type is ChimeClientConfig
 * const client = new ChimeClient(config);
 * const input = { // AssociateSigninDelegateGroupsWithAccountRequest
 *   AccountId: "STRING_VALUE", // required
 *   SigninDelegateGroups: [ // SigninDelegateGroupList // required
 *     { // SigninDelegateGroup
 *       GroupName: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new AssociateSigninDelegateGroupsWithAccountCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssociateSigninDelegateGroupsWithAccountCommandInput - {@link AssociateSigninDelegateGroupsWithAccountCommandInput}
 * @returns {@link AssociateSigninDelegateGroupsWithAccountCommandOutput}
 * @see {@link AssociateSigninDelegateGroupsWithAccountCommandInput} for command's `input` shape.
 * @see {@link AssociateSigninDelegateGroupsWithAccountCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The input parameters don't match the service's restrictions.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * The client is permanently forbidden from making the request.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * One or more of the resources in the request does not exist in the system.
 *
 * @throws {@link ServiceFailureException} (server fault)
 *
 * The service encountered an unexpected error.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service is currently unavailable.
 *
 * @throws {@link ThrottledClientException} (client fault)
 *
 * The client exceeded its request rate limit.
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *
 * The client is not currently authorized to make the request.
 *
 * @throws {@link ChimeServiceException}
 *
 * Base exception class for all service exceptions from Chime service.
 *
 * @public
 */
export class AssociateSigninDelegateGroupsWithAccountCommand extends command<AssociateSigninDelegateGroupsWithAccountCommandInput, AssociateSigninDelegateGroupsWithAccountCommandOutput>(
  _ep0,
  _mw0,
  "AssociateSigninDelegateGroupsWithAccount",
  AssociateSigninDelegateGroupsWithAccount$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateSigninDelegateGroupsWithAccountRequest;
      output: {};
    };
    sdk: {
      input: AssociateSigninDelegateGroupsWithAccountCommandInput;
      output: AssociateSigninDelegateGroupsWithAccountCommandOutput;
    };
  };
}
