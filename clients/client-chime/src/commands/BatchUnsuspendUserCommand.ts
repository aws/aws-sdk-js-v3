// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { BatchUnsuspendUserRequest, BatchUnsuspendUserResponse } from "../models/models_0";
import { BatchUnsuspendUser$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchUnsuspendUserCommand}.
 */
export interface BatchUnsuspendUserCommandInput extends BatchUnsuspendUserRequest {}
/**
 * @public
 *
 * The output of {@link BatchUnsuspendUserCommand}.
 */
export interface BatchUnsuspendUserCommandOutput extends BatchUnsuspendUserResponse, __MetadataBearer {}

/**
 * <p>Removes the suspension from up to 50 previously suspended users for the specified Amazon
 *             Chime <code>EnterpriseLWA</code> account. Only users on <code>EnterpriseLWA</code>
 *             accounts can be unsuspended using this action. For more information about different account types, see
 *     <a href="https://docs.aws.amazon.com/chime/latest/ag/manage-chime-account.html">
 *         Managing Your Amazon Chime Accounts
 *     </a> in the account types, in the <i>Amazon Chime Administration Guide</i>.
 * </p>
 *          <p>Previously suspended users who are unsuspended using this action are returned to
 * <code>Registered</code>
 * status. Users who are not previously suspended are ignored.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, BatchUnsuspendUserCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, BatchUnsuspendUserCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * // import type { ChimeClientConfig } from "@aws-sdk/client-chime";
 * const config = {}; // type is ChimeClientConfig
 * const client = new ChimeClient(config);
 * const input = { // BatchUnsuspendUserRequest
 *   AccountId: "STRING_VALUE", // required
 *   UserIdList: [ // UserIdList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchUnsuspendUserCommand(input);
 * const response = await client.send(command);
 * // { // BatchUnsuspendUserResponse
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
 * @param BatchUnsuspendUserCommandInput - {@link BatchUnsuspendUserCommandInput}
 * @returns {@link BatchUnsuspendUserCommandOutput}
 * @see {@link BatchUnsuspendUserCommandInput} for command's `input` shape.
 * @see {@link BatchUnsuspendUserCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>One or more of the resources in the request does not exist in the system.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The service encountered an unexpected error.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ThrottledClientException} (client fault)
 *  <p>The client exceeded its request rate limit.</p>
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *  <p>The client is not currently authorized to make the request.</p>
 *
 * @throws {@link ChimeServiceException}
 * <p>Base exception class for all service exceptions from Chime service.</p>
 *
 *
 * @public
 */
export class BatchUnsuspendUserCommand extends $Command
  .classBuilder<
    BatchUnsuspendUserCommandInput,
    BatchUnsuspendUserCommandOutput,
    ChimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("UCBuzzConsoleService", "BatchUnsuspendUser", {})
  .n("ChimeClient", "BatchUnsuspendUserCommand")
  .sc(BatchUnsuspendUser$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchUnsuspendUserRequest;
      output: BatchUnsuspendUserResponse;
    };
    sdk: {
      input: BatchUnsuspendUserCommandInput;
      output: BatchUnsuspendUserCommandOutput;
    };
  };
}
