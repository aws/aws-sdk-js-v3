// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  ChimeSDKMeetingsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ChimeSDKMeetingsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteAttendeeRequest } from "../models/models_0";
import { DeleteAttendee } from "../schemas/schemas_0";

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
 *            <code>JoinToken</code>. Attendees are automatically deleted when a Amazon Chime SDK meeting is deleted. For more information about the Amazon Chime SDK, see
 *            <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a>
 *            in the <i>Amazon Chime Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMeetingsClient, DeleteAttendeeCommand } from "@aws-sdk/client-chime-sdk-meetings"; // ES Modules import
 * // const { ChimeSDKMeetingsClient, DeleteAttendeeCommand } = require("@aws-sdk/client-chime-sdk-meetings"); // CommonJS import
 * // import type { ChimeSDKMeetingsClientConfig } from "@aws-sdk/client-chime-sdk-meetings";
 * const config = {}; // type is ChimeSDKMeetingsClientConfig
 * const client = new ChimeSDKMeetingsClient(config);
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
 * @see {@link ChimeSDKMeetingsClientResolvedConfig | config} for ChimeSDKMeetingsClient's `config` shape.
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
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The number of customer requests exceeds the request rate limit.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>The user isn't authorized to request a resource.</p>
 *
 * @throws {@link ChimeSDKMeetingsServiceException}
 * <p>Base exception class for all service exceptions from ChimeSDKMeetings service.</p>
 *
 *
 * @public
 */
export class DeleteAttendeeCommand extends $Command
  .classBuilder<
    DeleteAttendeeCommandInput,
    DeleteAttendeeCommandOutput,
    ChimeSDKMeetingsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeSDKMeetingsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ChimeMeetingsSDKService", "DeleteAttendee", {})
  .n("ChimeSDKMeetingsClient", "DeleteAttendeeCommand")
  .sc(DeleteAttendee)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAttendeeRequest;
      output: {};
    };
    sdk: {
      input: DeleteAttendeeCommandInput;
      output: DeleteAttendeeCommandOutput;
    };
  };
}
