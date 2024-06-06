// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteAttendeeRequest } from "../models/models_0";
import { de_DeleteAttendeeCommand, se_DeleteAttendeeCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteAttendeeCommand}.
 */
export interface DeleteAttendeeCommandInput extends DeleteAttendeeRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAttendeeCommand}.
 */
export interface DeleteAttendeeCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes an attendee from the specified Amazon Chime SDK meeting and deletes their
 * <code>JoinToken</code>. Attendees are automatically deleted when a Amazon Chime SDK meeting is deleted. For more information about the Amazon Chime SDK, see
 * <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a>
 * in the <i>Amazon Chime SDK Developer Guide</i>.</p>
 *          <important>
 *             <p>
 *                <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_meeting-chime_DeleteAttendee.html">DeleteAttendee</a>, in the Amazon Chime SDK.</p>
 *             <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to
 *             <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the
 *             <i>Amazon Chime SDK Developer Guide</i>.</p>
 *          </important>
 *
 * @deprecated Replaced by DeleteAttendee in the Amazon Chime SDK Meetings Namespace
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, DeleteAttendeeCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, DeleteAttendeeCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const input = { // DeleteAttendeeRequest
 *   MeetingId: "STRING_VALUE", // required
 *   AttendeeId: "STRING_VALUE", // required
 * };
 * const command = new DeleteAttendeeCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAttendeeCommandInput - {@link DeleteAttendeeCommandInput}
 * @returns {@link DeleteAttendeeCommandOutput}
 * @see {@link DeleteAttendeeCommandInput} for command's `input` shape.
 * @see {@link DeleteAttendeeCommandOutput} for command's `response` shape.
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
export class DeleteAttendeeCommand extends $Command
  .classBuilder<
    DeleteAttendeeCommandInput,
    DeleteAttendeeCommandOutput,
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
  .s("UCBuzzConsoleService", "DeleteAttendee", {})
  .n("ChimeClient", "DeleteAttendeeCommand")
  .f(void 0, void 0)
  .ser(se_DeleteAttendeeCommand)
  .de(de_DeleteAttendeeCommand)
  .build() {}
