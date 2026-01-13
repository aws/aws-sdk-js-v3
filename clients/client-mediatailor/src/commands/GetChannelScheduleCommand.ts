// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MediaTailorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaTailorClient";
import type { GetChannelScheduleRequest, GetChannelScheduleResponse } from "../models/models_0";
import { GetChannelSchedule$ } from "../schemas/schemas_0";

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
 * // import type { MediaTailorClientConfig } from "@aws-sdk/client-mediatailor";
 * const config = {}; // type is MediaTailorClientConfig
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MediaTailor", "GetChannelSchedule", {})
  .n("MediaTailorClient", "GetChannelScheduleCommand")
  .sc(GetChannelSchedule$)
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
