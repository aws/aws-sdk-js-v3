// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { BatchSuspendUserRequest, BatchSuspendUserResponse } from "../models/models_0";
import { de_BatchSuspendUserCommand, se_BatchSuspendUserCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Suspends up to 50 users from a <code>Team</code> or <code>EnterpriseLWA</code> Amazon Chime
 *             account. For more information about different account types, see <a href="https://docs.aws.amazon.com/chime/latest/ag/manage-chime-account.html">Managing Your Amazon Chime Accounts</a> in the <i>Amazon Chime Administration
 *                 Guide</i>.</p>
 *          <p>Users suspended from a <code>Team</code> account are disassociated from the account,but they
 *             can continue to use Amazon Chime as free users. To remove the suspension from suspended
 *                 <code>Team</code> account users, invite them to the <code>Team</code> account again.
 *             You can use the <a>InviteUsers</a> action to do so.</p>
 *          <p>Users suspended from an <code>EnterpriseLWA</code> account are immediately signed out of
 *             Amazon Chime and can no longer sign in. To remove the suspension from suspended <code>EnterpriseLWA</code> account users, use the
 *     <a>BatchUnsuspendUser</a> action.</p>
 *          <p>
 * To sign out users without suspending them, use the
 * <a>LogoutUser</a> action.</p>
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
export class BatchSuspendUserCommand extends $Command
  .classBuilder<
    BatchSuspendUserCommandInput,
    BatchSuspendUserCommandOutput,
    ChimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("UCBuzzConsoleService", "BatchSuspendUser", {})
  .n("ChimeClient", "BatchSuspendUserCommand")
  .f(void 0, void 0)
  .ser(se_BatchSuspendUserCommand)
  .de(de_BatchSuspendUserCommand)
  .build() {
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
