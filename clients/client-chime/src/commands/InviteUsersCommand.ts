// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  InviteUsersRequest,
  InviteUsersRequestFilterSensitiveLog,
  InviteUsersResponse,
  InviteUsersResponseFilterSensitiveLog,
} from "../models/models_1";
import { de_InviteUsersCommand, se_InviteUsersCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link InviteUsersCommand}.
 */
export interface InviteUsersCommandInput extends InviteUsersRequest {}
/**
 * @public
 *
 * The output of {@link InviteUsersCommand}.
 */
export interface InviteUsersCommandOutput extends InviteUsersResponse, __MetadataBearer {}

/**
 * <p>Sends email to a maximum of 50 users, inviting them to the specified Amazon Chime
 *                 <code>Team</code> account. Only <code>Team</code> account types are currently
 *             supported for this action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, InviteUsersCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, InviteUsersCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const input = { // InviteUsersRequest
 *   AccountId: "STRING_VALUE", // required
 *   UserEmailList: [ // UserEmailList // required
 *     "STRING_VALUE",
 *   ],
 *   UserType: "PrivateUser" || "SharedDevice",
 * };
 * const command = new InviteUsersCommand(input);
 * const response = await client.send(command);
 * // { // InviteUsersResponse
 * //   Invites: [ // InviteList
 * //     { // Invite
 * //       InviteId: "STRING_VALUE",
 * //       Status: "Pending" || "Accepted" || "Failed",
 * //       EmailAddress: "STRING_VALUE",
 * //       EmailStatus: "NotSent" || "Sent" || "Failed",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param InviteUsersCommandInput - {@link InviteUsersCommandInput}
 * @returns {@link InviteUsersCommandOutput}
 * @see {@link InviteUsersCommandInput} for command's `input` shape.
 * @see {@link InviteUsersCommandOutput} for command's `response` shape.
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
 * @public
 */
export class InviteUsersCommand extends $Command
  .classBuilder<
    InviteUsersCommandInput,
    InviteUsersCommandOutput,
    ChimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ChimeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("UCBuzzConsoleService", "InviteUsers", {})
  .n("ChimeClient", "InviteUsersCommand")
  .f(InviteUsersRequestFilterSensitiveLog, InviteUsersResponseFilterSensitiveLog)
  .ser(se_InviteUsersCommand)
  .de(de_InviteUsersCommand)
  .build() {}
