// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreatePrefetchScheduleRequest, CreatePrefetchScheduleResponse } from "../models/models_0";
import { CreatePrefetchSchedule$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreatePrefetchScheduleCommand}.
 */
export interface CreatePrefetchScheduleCommandInput extends CreatePrefetchScheduleRequest {}
/**
 * @public
 *
 * The output of {@link CreatePrefetchScheduleCommand}.
 */
export interface CreatePrefetchScheduleCommandOutput extends CreatePrefetchScheduleResponse, __MetadataBearer {}

/**
 * <p>Creates a prefetch schedule for a playback configuration. A prefetch schedule allows you to tell MediaTailor to fetch and prepare certain ads before an ad break happens. For more information about ad prefetching, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/prefetching-ads.html">Using ad prefetching</a> in the <i>MediaTailor User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, CreatePrefetchScheduleCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, CreatePrefetchScheduleCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * // import type { MediaTailorClientConfig } from "@aws-sdk/client-mediatailor";
 * const config = {}; // type is MediaTailorClientConfig
 * const client = new MediaTailorClient(config);
 * const input = { // CreatePrefetchScheduleRequest
 *   Consumption: { // PrefetchConsumption
 *     AvailMatchingCriteria: [ // __listOfAvailMatchingCriteria
 *       { // AvailMatchingCriteria
 *         DynamicVariable: "STRING_VALUE", // required
 *         Operator: "EQUALS", // required
 *       },
 *     ],
 *     EndTime: new Date("TIMESTAMP"), // required
 *     StartTime: new Date("TIMESTAMP"),
 *   },
 *   Name: "STRING_VALUE", // required
 *   PlaybackConfigurationName: "STRING_VALUE", // required
 *   Retrieval: { // PrefetchRetrieval
 *     DynamicVariables: { // __mapOf__string
 *       "<keys>": "STRING_VALUE",
 *     },
 *     EndTime: new Date("TIMESTAMP"), // required
 *     StartTime: new Date("TIMESTAMP"),
 *     TrafficShapingType: "RETRIEVAL_WINDOW" || "TPS",
 *     TrafficShapingRetrievalWindow: { // TrafficShapingRetrievalWindow
 *       RetrievalWindowDurationSeconds: Number("int"),
 *     },
 *     TrafficShapingTpsConfiguration: { // TrafficShapingTpsConfiguration
 *       PeakTps: Number("int"),
 *       PeakConcurrentUsers: Number("int"),
 *     },
 *   },
 *   RecurringPrefetchConfiguration: { // RecurringPrefetchConfiguration
 *     StartTime: new Date("TIMESTAMP"),
 *     EndTime: new Date("TIMESTAMP"), // required
 *     RecurringConsumption: { // RecurringConsumption
 *       RetrievedAdExpirationSeconds: Number("int"),
 *       AvailMatchingCriteria: [
 *         {
 *           DynamicVariable: "STRING_VALUE", // required
 *           Operator: "EQUALS", // required
 *         },
 *       ],
 *     },
 *     RecurringRetrieval: { // RecurringRetrieval
 *       DynamicVariables: {
 *         "<keys>": "STRING_VALUE",
 *       },
 *       DelayAfterAvailEndSeconds: Number("int"),
 *       TrafficShapingType: "RETRIEVAL_WINDOW" || "TPS",
 *       TrafficShapingRetrievalWindow: {
 *         RetrievalWindowDurationSeconds: Number("int"),
 *       },
 *       TrafficShapingTpsConfiguration: {
 *         PeakTps: Number("int"),
 *         PeakConcurrentUsers: Number("int"),
 *       },
 *     },
 *   },
 *   ScheduleType: "SINGLE" || "RECURRING",
 *   StreamId: "STRING_VALUE",
 *   Tags: "<__mapOf__string>",
 * };
 * const command = new CreatePrefetchScheduleCommand(input);
 * const response = await client.send(command);
 * // { // CreatePrefetchScheduleResponse
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
 * //     TrafficShapingType: "RETRIEVAL_WINDOW" || "TPS",
 * //     TrafficShapingRetrievalWindow: { // TrafficShapingRetrievalWindow
 * //       RetrievalWindowDurationSeconds: Number("int"),
 * //     },
 * //     TrafficShapingTpsConfiguration: { // TrafficShapingTpsConfiguration
 * //       PeakTps: Number("int"),
 * //       PeakConcurrentUsers: Number("int"),
 * //     },
 * //   },
 * //   RecurringPrefetchConfiguration: { // RecurringPrefetchConfiguration
 * //     StartTime: new Date("TIMESTAMP"),
 * //     EndTime: new Date("TIMESTAMP"), // required
 * //     RecurringConsumption: { // RecurringConsumption
 * //       RetrievedAdExpirationSeconds: Number("int"),
 * //       AvailMatchingCriteria: [
 * //         {
 * //           DynamicVariable: "STRING_VALUE", // required
 * //           Operator: "EQUALS", // required
 * //         },
 * //       ],
 * //     },
 * //     RecurringRetrieval: { // RecurringRetrieval
 * //       DynamicVariables: {
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       DelayAfterAvailEndSeconds: Number("int"),
 * //       TrafficShapingType: "RETRIEVAL_WINDOW" || "TPS",
 * //       TrafficShapingRetrievalWindow: {
 * //         RetrievalWindowDurationSeconds: Number("int"),
 * //       },
 * //       TrafficShapingTpsConfiguration: {
 * //         PeakTps: Number("int"),
 * //         PeakConcurrentUsers: Number("int"),
 * //       },
 * //     },
 * //   },
 * //   ScheduleType: "SINGLE" || "RECURRING",
 * //   StreamId: "STRING_VALUE",
 * //   Tags: "<__mapOf__string>",
 * // };
 *
 * ```
 *
 * @param CreatePrefetchScheduleCommandInput - {@link CreatePrefetchScheduleCommandInput}
 * @returns {@link CreatePrefetchScheduleCommandOutput}
 * @see {@link CreatePrefetchScheduleCommandInput} for command's `input` shape.
 * @see {@link CreatePrefetchScheduleCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for MediaTailorClient's `config` shape.
 *
 * @throws {@link MediaTailorServiceException}
 * <p>Base exception class for all service exceptions from MediaTailor service.</p>
 *
 *
 * @public
 */
export class CreatePrefetchScheduleCommand extends command<CreatePrefetchScheduleCommandInput, CreatePrefetchScheduleCommandOutput>(
  _ep0,
  _mw0,
  "CreatePrefetchSchedule",
  CreatePrefetchSchedule$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreatePrefetchScheduleRequest;
      output: CreatePrefetchScheduleResponse;
    };
    sdk: {
      input: CreatePrefetchScheduleCommandInput;
      output: CreatePrefetchScheduleCommandOutput;
    };
  };
}
