// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListMeetingsRequest, ListMeetingsResponse, ListMeetingsResponseFilterSensitiveLog } from "../models/models_1";
import { de_ListMeetingsCommand, se_ListMeetingsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListMeetingsCommand}.
 */
export interface ListMeetingsCommandInput extends ListMeetingsRequest {}
/**
 * @public
 *
 * The output of {@link ListMeetingsCommand}.
 */
export interface ListMeetingsCommandOutput extends ListMeetingsResponse, __MetadataBearer {}

/**
 * <p>Lists up to 100 active Amazon Chime SDK meetings.</p>
 *          <important>
 *             <p>ListMeetings is not supported in the Amazon Chime SDK Meetings Namespace. Update your application to remove calls to this API.</p>
 *          </important>
 *          <p>For more information about the Amazon Chime SDK, see
 *         <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a>
 *         in the <i>Amazon Chime SDK Developer Guide</i>.</p>
 *
 * @deprecated ListMeetings is not supported in the Amazon Chime SDK Meetings Namespace. Update your application to remove calls to this API.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, ListMeetingsCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, ListMeetingsCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ChimeClient(config);
 * const input = { // ListMeetingsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListMeetingsCommand(input);
 * const response = await client.send(command);
 * // { // ListMeetingsResponse
 * //   Meetings: [ // MeetingList
 * //     { // Meeting
 * //       MeetingId: "STRING_VALUE",
 * //       ExternalMeetingId: "STRING_VALUE",
 * //       MediaPlacement: { // MediaPlacement
 * //         AudioHostUrl: "STRING_VALUE",
 * //         AudioFallbackUrl: "STRING_VALUE",
 * //         ScreenDataUrl: "STRING_VALUE",
 * //         ScreenSharingUrl: "STRING_VALUE",
 * //         ScreenViewingUrl: "STRING_VALUE",
 * //         SignalingUrl: "STRING_VALUE",
 * //         TurnControlUrl: "STRING_VALUE",
 * //         EventIngestionUrl: "STRING_VALUE",
 * //       },
 * //       MediaRegion: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListMeetingsCommandInput - {@link ListMeetingsCommandInput}
 * @returns {@link ListMeetingsCommandOutput}
 * @see {@link ListMeetingsCommandInput} for command's `input` shape.
 * @see {@link ListMeetingsCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
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
export class ListMeetingsCommand extends $Command
  .classBuilder<
    ListMeetingsCommandInput,
    ListMeetingsCommandOutput,
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
  .s("UCBuzzConsoleService", "ListMeetings", {})
  .n("ChimeClient", "ListMeetingsCommand")
  .f(void 0, ListMeetingsResponseFilterSensitiveLog)
  .ser(se_ListMeetingsCommand)
  .de(de_ListMeetingsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListMeetingsRequest;
      output: ListMeetingsResponse;
    };
    sdk: {
      input: ListMeetingsCommandInput;
      output: ListMeetingsCommandOutput;
    };
  };
}
