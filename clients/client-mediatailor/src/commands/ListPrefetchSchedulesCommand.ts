// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaTailorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaTailorClient";
import { ListPrefetchSchedulesRequest, ListPrefetchSchedulesResponse } from "../models/models_0";
import { ListPrefetchSchedules } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPrefetchSchedulesCommand}.
 */
export interface ListPrefetchSchedulesCommandInput extends ListPrefetchSchedulesRequest {}
/**
 * @public
 *
 * The output of {@link ListPrefetchSchedulesCommand}.
 */
export interface ListPrefetchSchedulesCommandOutput extends ListPrefetchSchedulesResponse, __MetadataBearer {}

/**
 * <p>Lists the prefetch schedules for a playback configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, ListPrefetchSchedulesCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, ListPrefetchSchedulesCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * // import type { MediaTailorClientConfig } from "@aws-sdk/client-mediatailor";
 * const config = {}; // type is MediaTailorClientConfig
 * const client = new MediaTailorClient(config);
 * const input = { // ListPrefetchSchedulesRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   PlaybackConfigurationName: "STRING_VALUE", // required
 *   ScheduleType: "SINGLE" || "RECURRING" || "ALL",
 *   StreamId: "STRING_VALUE",
 * };
 * const command = new ListPrefetchSchedulesCommand(input);
 * const response = await client.send(command);
 * // { // ListPrefetchSchedulesResponse
 * //   Items: [ // __listOfPrefetchSchedule
 * //     { // PrefetchSchedule
 * //       Arn: "STRING_VALUE", // required
 * //       Consumption: { // PrefetchConsumption
 * //         AvailMatchingCriteria: [ // __listOfAvailMatchingCriteria
 * //           { // AvailMatchingCriteria
 * //             DynamicVariable: "STRING_VALUE", // required
 * //             Operator: "EQUALS", // required
 * //           },
 * //         ],
 * //         EndTime: new Date("TIMESTAMP"), // required
 * //         StartTime: new Date("TIMESTAMP"),
 * //       },
 * //       Name: "STRING_VALUE", // required
 * //       PlaybackConfigurationName: "STRING_VALUE", // required
 * //       Retrieval: { // PrefetchRetrieval
 * //         DynamicVariables: { // __mapOf__string
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         EndTime: new Date("TIMESTAMP"), // required
 * //         StartTime: new Date("TIMESTAMP"),
 * //         TrafficShapingType: "RETRIEVAL_WINDOW" || "TPS",
 * //         TrafficShapingRetrievalWindow: { // TrafficShapingRetrievalWindow
 * //           RetrievalWindowDurationSeconds: Number("int"),
 * //         },
 * //         TrafficShapingTpsConfiguration: { // TrafficShapingTpsConfiguration
 * //           PeakTps: Number("int"),
 * //           PeakConcurrentUsers: Number("int"),
 * //         },
 * //       },
 * //       ScheduleType: "SINGLE" || "RECURRING",
 * //       RecurringPrefetchConfiguration: { // RecurringPrefetchConfiguration
 * //         StartTime: new Date("TIMESTAMP"),
 * //         EndTime: new Date("TIMESTAMP"), // required
 * //         RecurringConsumption: { // RecurringConsumption
 * //           RetrievedAdExpirationSeconds: Number("int"),
 * //           AvailMatchingCriteria: [
 * //             {
 * //               DynamicVariable: "STRING_VALUE", // required
 * //               Operator: "EQUALS", // required
 * //             },
 * //           ],
 * //         },
 * //         RecurringRetrieval: { // RecurringRetrieval
 * //           DynamicVariables: {
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //           DelayAfterAvailEndSeconds: Number("int"),
 * //           TrafficShapingType: "RETRIEVAL_WINDOW" || "TPS",
 * //           TrafficShapingRetrievalWindow: {
 * //             RetrievalWindowDurationSeconds: Number("int"),
 * //           },
 * //           TrafficShapingTpsConfiguration: {
 * //             PeakTps: Number("int"),
 * //             PeakConcurrentUsers: Number("int"),
 * //           },
 * //         },
 * //       },
 * //       StreamId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPrefetchSchedulesCommandInput - {@link ListPrefetchSchedulesCommandInput}
 * @returns {@link ListPrefetchSchedulesCommandOutput}
 * @see {@link ListPrefetchSchedulesCommandInput} for command's `input` shape.
 * @see {@link ListPrefetchSchedulesCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for MediaTailorClient's `config` shape.
 *
 * @throws {@link MediaTailorServiceException}
 * <p>Base exception class for all service exceptions from MediaTailor service.</p>
 *
 *
 * @public
 */
export class ListPrefetchSchedulesCommand extends $Command
  .classBuilder<
    ListPrefetchSchedulesCommandInput,
    ListPrefetchSchedulesCommandOutput,
    MediaTailorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaTailorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MediaTailor", "ListPrefetchSchedules", {})
  .n("MediaTailorClient", "ListPrefetchSchedulesCommand")
  .sc(ListPrefetchSchedules)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPrefetchSchedulesRequest;
      output: ListPrefetchSchedulesResponse;
    };
    sdk: {
      input: ListPrefetchSchedulesCommandInput;
      output: ListPrefetchSchedulesCommandOutput;
    };
  };
}
