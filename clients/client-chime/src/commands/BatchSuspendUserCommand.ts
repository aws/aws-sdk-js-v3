// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { BatchSuspendUserRequest, BatchSuspendUserResponse } from "../models/models_0";
import { BatchSuspendUser$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link BatchSuspendUserCommand}.
 */
export interface BatchSuspendUserCommandInput extends BatchSuspendUserRequest {}
/**
 * @public
 *
 * The output of {@link BatchSuspendUserCommand}.
 */
export interface BatchSuspendUserCommandOutput extends BatchSuspendUserResponse, __MetadataBearer {}

/**
 * Suspends up to 50 users from a `Team` or `EnterpriseLWA` Amazon Chime account. For more information about different account types, see [Managing Your Amazon Chime Accounts](https://docs.aws.amazon.com/chime/latest/ag/manage-chime-account.html) in the *Amazon Chime Administration Guide*.
 *
 * Users suspended from a `Team` account are disassociated from the account,but they can continue to use Amazon Chime as free users. To remove the suspension from suspended `Team` account users, invite them to the `Team` account again. You can use the InviteUsers action to do so.
 *
 * Users suspended from an `EnterpriseLWA` account are immediately signed out of Amazon Chime and can no longer sign in. To remove the suspension from suspended `EnterpriseLWA` account users, use the BatchUnsuspendUser action.
 *
 * To sign out users without suspending them, use the LogoutUser action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, BatchSuspendUserCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, BatchSuspendUserCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * // import type { ChimeClientConfig } from "@aws-sdk/client-chime";
 * const config = {}; // type is ChimeClientConfig
 * const client = new ChimeClient(config);
 * const input = { // BatchSuspendUserRequest
 *   AccountId: "STRING_VALUE", // required
 *   UserIdList: [ // UserIdList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchSuspendUserCommand(input);
 * const response = await client.send(command);
 * // { // BatchSuspendUserResponse
 * //   UserErrors: [ // UserErrorList
 * //     { // UserError
 * //       UserId: "STRING_VALUE",
 * //       ErrorCode: "BadRequest" || "Conflict" || "Forbidden" || "NotFound" || "PreconditionFailed" || "ResourceLimitExceeded" || "ServiceFailure" || "AccessDenied" || "ServiceUnavailable" || "Throttled" || "Throttling" || "Unauthorized" || "Unprocessable" || "VoiceConnectorGroupAssociationsExist" || "PhoneNumberAssociationsExist",
 * //       ErrorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchSuspendUserCommandInput - {@link BatchSuspendUserCommandInput}
 * @returns {@link BatchSuspendUserCommandOutput}
 * @see {@link BatchSuspendUserCommandInput} for command's `input` shape.
 * @see {@link BatchSuspendUserCommandOutput} for command's `response` shape.
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
export class BatchSuspendUserCommand extends command<BatchSuspendUserCommandInput, BatchSuspendUserCommandOutput>(
  _ep0,
  _mw0,
  "BatchSuspendUser",
  BatchSuspendUser$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchSuspendUserRequest;
      output: BatchSuspendUserResponse;
    };
    sdk: {
      input: BatchSuspendUserCommandInput;
      output: BatchSuspendUserCommandOutput;
    };
  };
}
