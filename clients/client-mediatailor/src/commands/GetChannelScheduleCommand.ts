// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaTailorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaTailorClient";
import { GetChannelScheduleRequest, GetChannelScheduleResponse } from "../models/models_0";
import { de_GetChannelScheduleCommand, se_GetChannelScheduleCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetChannelScheduleCommand}.
 */
export interface GetChannelScheduleCommandInput extends GetChannelScheduleRequest {}
/**
 * @public
 *
 * The output of {@link GetChannelScheduleCommand}.
 */
export interface GetChannelScheduleCommandOutput extends GetChannelScheduleResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about your channel's schedule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, GetChannelScheduleCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, GetChannelScheduleCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new MediaTailorClient(config);
 * const input = { // GetChannelScheduleRequest
 *   ChannelName: "STRING_VALUE", // required
 *   DurationMinutes: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   Audience: "STRING_VALUE",
 * };
 * const command = new GetChannelScheduleCommand(input);
 * const response = await client.send(command);
 * // { // GetChannelScheduleResponse
 * //   Items: [ // __listOfScheduleEntry
 * //     { // ScheduleEntry
 * //       ApproximateDurationSeconds: Number("long"),
 * //       ApproximateStartTime: new Date("TIMESTAMP"),
 * //       Arn: "STRING_VALUE", // required
 * //       ChannelName: "STRING_VALUE", // required
 * //       LiveSourceName: "STRING_VALUE",
 * //       ProgramName: "STRING_VALUE", // required
 * //       ScheduleAdBreaks: [ // __listOfScheduleAdBreak
 * //         { // ScheduleAdBreak
 * //           ApproximateDurationSeconds: Number("long"),
 * //           ApproximateStartTime: new Date("TIMESTAMP"),
 * //           SourceLocationName: "STRING_VALUE",
 * //           VodSourceName: "STRING_VALUE",
 * //         },
 * //       ],
 * //       ScheduleEntryType: "PROGRAM" || "FILLER_SLATE" || "ALTERNATE_MEDIA",
 * //       SourceLocationName: "STRING_VALUE", // required
 * //       VodSourceName: "STRING_VALUE",
 * //       Audiences: [ // Audiences
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetChannelScheduleCommandInput - {@link GetChannelScheduleCommandInput}
 * @returns {@link GetChannelScheduleCommandOutput}
 * @see {@link GetChannelScheduleCommandInput} for command's `input` shape.
 * @see {@link GetChannelScheduleCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for MediaTailorClient's `config` shape.
 *
 * @throws {@link MediaTailorServiceException}
 * <p>Base exception class for all service exceptions from MediaTailor service.</p>
 *
 * @public
 */
export class GetChannelScheduleCommand extends $Command
  .classBuilder<
    GetChannelScheduleCommandInput,
    GetChannelScheduleCommandOutput,
    MediaTailorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaTailorClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MediaTailor", "GetChannelSchedule", {})
  .n("MediaTailorClient", "GetChannelScheduleCommand")
  .f(void 0, void 0)
  .ser(se_GetChannelScheduleCommand)
  .de(de_GetChannelScheduleCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetChannelScheduleRequest;
      output: GetChannelScheduleResponse;
    };
    sdk: {
      input: GetChannelScheduleCommandInput;
      output: GetChannelScheduleCommandOutput;
    };
  };
}
