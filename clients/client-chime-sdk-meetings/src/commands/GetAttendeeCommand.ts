// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChimeSDKMeetingsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKMeetingsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetAttendeeRequest, GetAttendeeResponse, GetAttendeeResponseFilterSensitiveLog } from "../models/models_0";
import { de_GetAttendeeCommand, se_GetAttendeeCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAttendeeCommand}.
 */
export interface GetAttendeeCommandInput extends GetAttendeeRequest {}
/**
 * @public
 *
 * The output of {@link GetAttendeeCommand}.
 */
export interface GetAttendeeCommandOutput extends GetAttendeeResponse, __MetadataBearer {}

/**
 * <p>
 *             Gets the Amazon Chime SDK attendee details for a specified meeting ID and attendee ID. For more information about the Amazon Chime SDK, see
 *             <a href="https://docs.aws.amazon.com/chime/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a>
 *             in the <i>Amazon Chime Developer Guide</i>.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMeetingsClient, GetAttendeeCommand } from "@aws-sdk/client-chime-sdk-meetings"; // ES Modules import
 * // const { ChimeSDKMeetingsClient, GetAttendeeCommand } = require("@aws-sdk/client-chime-sdk-meetings"); // CommonJS import
 * // import type { ChimeSDKMeetingsClientConfig } from "@aws-sdk/client-chime-sdk-meetings";
 * const config = {}; // type is ChimeSDKMeetingsClientConfig
 * const client = new ChimeSDKMeetingsClient(config);
 * const input = { // GetAttendeeRequest
 *   MeetingId: "STRING_VALUE", // required
 *   AttendeeId: "STRING_VALUE", // required
 * };
 * const command = new GetAttendeeCommand(input);
 * const response = await client.send(command);
 * // { // GetAttendeeResponse
 * //   Attendee: { // Attendee
 * //     ExternalUserId: "STRING_VALUE",
 * //     AttendeeId: "STRING_VALUE",
 * //     JoinToken: "STRING_VALUE",
 * //     Capabilities: { // AttendeeCapabilities
 * //       Audio: "SendReceive" || "Send" || "Receive" || "None", // required
 * //       Video: "SendReceive" || "Send" || "Receive" || "None", // required
 * //       Content: "SendReceive" || "Send" || "Receive" || "None", // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetAttendeeCommandInput - {@link GetAttendeeCommandInput}
 * @returns {@link GetAttendeeCommandOutput}
 * @see {@link GetAttendeeCommandInput} for command's `input` shape.
 * @see {@link GetAttendeeCommandOutput} for command's `response` shape.
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
export class GetAttendeeCommand extends $Command
  .classBuilder<
    GetAttendeeCommandInput,
    GetAttendeeCommandOutput,
    ChimeSDKMeetingsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeSDKMeetingsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ChimeMeetingsSDKService", "GetAttendee", {})
  .n("ChimeSDKMeetingsClient", "GetAttendeeCommand")
  .f(void 0, GetAttendeeResponseFilterSensitiveLog)
  .ser(se_GetAttendeeCommand)
  .de(de_GetAttendeeCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAttendeeRequest;
      output: GetAttendeeResponse;
    };
    sdk: {
      input: GetAttendeeCommandInput;
      output: GetAttendeeCommandOutput;
    };
  };
}
