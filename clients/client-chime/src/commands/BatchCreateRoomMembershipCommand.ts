// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { BatchCreateRoomMembershipRequest, BatchCreateRoomMembershipResponse } from "../models/models_0";
import { de_BatchCreateRoomMembershipCommand, se_BatchCreateRoomMembershipCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchCreateRoomMembershipCommand}.
 */
export interface BatchCreateRoomMembershipCommandInput extends BatchCreateRoomMembershipRequest {}
/**
 * @public
 *
 * The output of {@link BatchCreateRoomMembershipCommand}.
 */
export interface BatchCreateRoomMembershipCommandOutput extends BatchCreateRoomMembershipResponse, __MetadataBearer {}

/**
 * <p>Adds up to 50 members to a chat room in an Amazon Chime Enterprise account. Members can be users or bots. The member role designates whether the member is a
 *     chat room administrator or a general chat room member.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, BatchCreateRoomMembershipCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, BatchCreateRoomMembershipCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const input = { // BatchCreateRoomMembershipRequest
 *   AccountId: "STRING_VALUE", // required
 *   RoomId: "STRING_VALUE", // required
 *   MembershipItemList: [ // MembershipItemList // required
 *     { // MembershipItem
 *       MemberId: "STRING_VALUE",
 *       Role: "Administrator" || "Member",
 *     },
 *   ],
 * };
 * const command = new BatchCreateRoomMembershipCommand(input);
 * const response = await client.send(command);
 * // { // BatchCreateRoomMembershipResponse
 * //   Errors: [ // MemberErrorList
 * //     { // MemberError
 * //       MemberId: "STRING_VALUE",
 * //       ErrorCode: "BadRequest" || "Conflict" || "Forbidden" || "NotFound" || "PreconditionFailed" || "ResourceLimitExceeded" || "ServiceFailure" || "AccessDenied" || "ServiceUnavailable" || "Throttled" || "Throttling" || "Unauthorized" || "Unprocessable" || "VoiceConnectorGroupAssociationsExist" || "PhoneNumberAssociationsExist",
 * //       ErrorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchCreateRoomMembershipCommandInput - {@link BatchCreateRoomMembershipCommandInput}
 * @returns {@link BatchCreateRoomMembershipCommandOutput}
 * @see {@link BatchCreateRoomMembershipCommandInput} for command's `input` shape.
 * @see {@link BatchCreateRoomMembershipCommandOutput} for command's `response` shape.
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
export class BatchCreateRoomMembershipCommand extends $Command
  .classBuilder<
    BatchCreateRoomMembershipCommandInput,
    BatchCreateRoomMembershipCommandOutput,
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
  .s("UCBuzzConsoleService", "BatchCreateRoomMembership", {})
  .n("ChimeClient", "BatchCreateRoomMembershipCommand")
  .f(void 0, void 0)
  .ser(se_BatchCreateRoomMembershipCommand)
  .de(de_BatchCreateRoomMembershipCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchCreateRoomMembershipRequest;
      output: BatchCreateRoomMembershipResponse;
    };
    sdk: {
      input: BatchCreateRoomMembershipCommandInput;
      output: BatchCreateRoomMembershipCommandOutput;
    };
  };
}
