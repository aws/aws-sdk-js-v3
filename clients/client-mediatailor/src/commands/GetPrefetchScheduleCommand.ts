// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaTailorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaTailorClient";
import { GetPrefetchScheduleRequest, GetPrefetchScheduleResponse } from "../models/models_0";
import { de_GetPrefetchScheduleCommand, se_GetPrefetchScheduleCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetPrefetchScheduleCommand}.
 */
export interface GetPrefetchScheduleCommandInput extends GetPrefetchScheduleRequest {}
/**
 * @public
 *
 * The output of {@link GetPrefetchScheduleCommand}.
 */
export interface GetPrefetchScheduleCommandOutput extends GetPrefetchScheduleResponse, __MetadataBearer {}

/**
 * <p>Retrieves a prefetch schedule for a playback configuration. A prefetch schedule allows you to tell MediaTailor to fetch and prepare certain ads before an ad break happens. For more information about ad prefetching, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/prefetching-ads.html">Using ad prefetching</a> in the <i>MediaTailor User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, GetPrefetchScheduleCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, GetPrefetchScheduleCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * const client = new MediaTailorClient(config);
 * const input = { // GetPrefetchScheduleRequest
 *   Name: "STRING_VALUE", // required
 *   PlaybackConfigurationName: "STRING_VALUE", // required
 * };
 * const command = new GetPrefetchScheduleCommand(input);
 * const response = await client.send(command);
 * // { // GetPrefetchScheduleResponse
 * //   Arn: "STRING_VALUE",
 * //   Consumption: { // PrefetchConsumption
 * //     AvailMatchingCriteria: [ // __listOfAvailMatchingCriteria
 * //       { // AvailMatchingCriteria
 * //         DynamicVariable: "STRING_VALUE", // required
 * //         Operator: "EQUALS", // required
 * //       },
 * //     ],
 * //     EndTime: new Date("TIMESTAMP"), // required
 * //     StartTime: new Date("TIMESTAMP"),
 * //   },
 * //   Name: "STRING_VALUE",
 * //   PlaybackConfigurationName: "STRING_VALUE",
 * //   Retrieval: { // PrefetchRetrieval
 * //     DynamicVariables: { // __mapOf__string
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     EndTime: new Date("TIMESTAMP"), // required
 * //     StartTime: new Date("TIMESTAMP"),
 * //   },
 * //   StreamId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetPrefetchScheduleCommandInput - {@link GetPrefetchScheduleCommandInput}
 * @returns {@link GetPrefetchScheduleCommandOutput}
 * @see {@link GetPrefetchScheduleCommandInput} for command's `input` shape.
 * @see {@link GetPrefetchScheduleCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for MediaTailorClient's `config` shape.
 *
 * @throws {@link MediaTailorServiceException}
 * <p>Base exception class for all service exceptions from MediaTailor service.</p>
 *
 *
 * @public
 */
export class GetPrefetchScheduleCommand extends $Command
  .classBuilder<
    GetPrefetchScheduleCommandInput,
    GetPrefetchScheduleCommandOutput,
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
  .s("MediaTailor", "GetPrefetchSchedule", {})
  .n("MediaTailorClient", "GetPrefetchScheduleCommand")
  .f(void 0, void 0)
  .ser(se_GetPrefetchScheduleCommand)
  .de(de_GetPrefetchScheduleCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetPrefetchScheduleRequest;
      output: GetPrefetchScheduleResponse;
    };
    sdk: {
      input: GetPrefetchScheduleCommandInput;
      output: GetPrefetchScheduleCommandOutput;
    };
  };
}
