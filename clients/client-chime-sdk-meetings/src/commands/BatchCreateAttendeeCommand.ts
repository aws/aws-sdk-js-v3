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
import type { BatchCreateAttendeeRequest, BatchCreateAttendeeResponse } from "../models/models_0";
import { BatchCreateAttendee } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchCreateAttendeeCommand}.
 */
export interface BatchCreateAttendeeCommandInput extends BatchCreateAttendeeRequest {}
/**
 * @public
 *
 * The output of {@link BatchCreateAttendeeCommand}.
 */
export interface BatchCreateAttendeeCommandOutput extends BatchCreateAttendeeResponse, __MetadataBearer {}

/**
 * <p>Creates up to 100 attendees for an active Amazon Chime SDK meeting. For more information about the Amazon Chime SDK, see
 *             <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a> in the <i>Amazon Chime Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMeetingsClient, BatchCreateAttendeeCommand } from "@aws-sdk/client-chime-sdk-meetings"; // ES Modules import
 * // const { ChimeSDKMeetingsClient, BatchCreateAttendeeCommand } = require("@aws-sdk/client-chime-sdk-meetings"); // CommonJS import
 * // import type { ChimeSDKMeetingsClientConfig } from "@aws-sdk/client-chime-sdk-meetings";
 * const config = {}; // type is ChimeSDKMeetingsClientConfig
 * const client = new ChimeSDKMeetingsClient(config);
 * const input = { // BatchCreateAttendeeRequest
 *   MeetingId: "STRING_VALUE", // required
 *   Attendees: [ // CreateAttendeeRequestItemList // required
 *     { // CreateAttendeeRequestItem
 *       ExternalUserId: "STRING_VALUE", // required
 *       Capabilities: { // AttendeeCapabilities
 *         Audio: "SendReceive" || "Send" || "Receive" || "None", // required
 *         Video: "SendReceive" || "Send" || "Receive" || "None", // required
 *         Content: "SendReceive" || "Send" || "Receive" || "None", // required
 *       },
 *     },
 *   ],
 * };
 * const command = new BatchCreateAttendeeCommand(input);
 * const response = await client.send(command);
 * // { // BatchCreateAttendeeResponse
 * //   Attendees: [ // AttendeeList
 * //     { // Attendee
 * //       ExternalUserId: "STRING_VALUE",
 * //       AttendeeId: "STRING_VALUE",
 * //       JoinToken: "STRING_VALUE",
 * //       Capabilities: { // AttendeeCapabilities
 * //         Audio: "SendReceive" || "Send" || "Receive" || "None", // required
 * //         Video: "SendReceive" || "Send" || "Receive" || "None", // required
 * //         Content: "SendReceive" || "Send" || "Receive" || "None", // required
 * //       },
 * //     },
 * //   ],
 * //   Errors: [ // BatchCreateAttendeeErrorList
 * //     { // CreateAttendeeError
 * //       ExternalUserId: "STRING_VALUE",
 * //       ErrorCode: "STRING_VALUE",
 * //       ErrorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchCreateAttendeeCommandInput - {@link BatchCreateAttendeeCommandInput}
 * @returns {@link BatchCreateAttendeeCommandOutput}
 * @see {@link BatchCreateAttendeeCommandInput} for command's `input` shape.
 * @see {@link BatchCreateAttendeeCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKMeetingsClientResolvedConfig | config} for ChimeSDKMeetingsClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request exceeds the resource limit.</p>
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
 * @throws {@link UnprocessableEntityException} (client fault)
 *  <p>The request was well-formed but was unable to be followed due to semantic errors.</p>
 *
 * @throws {@link ChimeSDKMeetingsServiceException}
 * <p>Base exception class for all service exceptions from ChimeSDKMeetings service.</p>
 *
 *
 * @public
 */
export class BatchCreateAttendeeCommand extends $Command
  .classBuilder<
    BatchCreateAttendeeCommandInput,
    BatchCreateAttendeeCommandOutput,
    ChimeSDKMeetingsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeSDKMeetingsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ChimeMeetingsSDKService", "BatchCreateAttendee", {})
  .n("ChimeSDKMeetingsClient", "BatchCreateAttendeeCommand")
  .sc(BatchCreateAttendee)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchCreateAttendeeRequest;
      output: BatchCreateAttendeeResponse;
    };
    sdk: {
      input: BatchCreateAttendeeCommandInput;
      output: BatchCreateAttendeeCommandOutput;
    };
  };
}
