// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { InternetMonitorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InternetMonitorClient";
import { ListHealthEventsInput, ListHealthEventsOutput } from "../models/models_0";
import { ListHealthEvents } from "../schemas/schemas_2_Monitor";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListHealthEventsCommand}.
 */
export interface ListHealthEventsCommandInput extends ListHealthEventsInput {}
/**
 * @public
 *
 * The output of {@link ListHealthEventsCommand}.
 */
export interface ListHealthEventsCommandOutput extends ListHealthEventsOutput, __MetadataBearer {}

/**
 * <p>Lists all health events for a monitor in Amazon CloudWatch Internet Monitor. Returns information for health events including the event start and end times, and
 * 			the status.</p>
 *          <note>
 *             <p>Health events that have start times during the time frame that is requested are not included in the list of health events.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InternetMonitorClient, ListHealthEventsCommand } from "@aws-sdk/client-internetmonitor"; // ES Modules import
 * // const { InternetMonitorClient, ListHealthEventsCommand } = require("@aws-sdk/client-internetmonitor"); // CommonJS import
 * // import type { InternetMonitorClientConfig } from "@aws-sdk/client-internetmonitor";
 * const config = {}; // type is InternetMonitorClientConfig
 * const client = new InternetMonitorClient(config);
 * const input = { // ListHealthEventsInput
 *   MonitorName: "STRING_VALUE", // required
 *   StartTime: new Date("TIMESTAMP"),
 *   EndTime: new Date("TIMESTAMP"),
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   EventStatus: "STRING_VALUE",
 *   LinkedAccountId: "STRING_VALUE",
 * };
 * const command = new ListHealthEventsCommand(input);
 * const response = await client.send(command);
 * // { // ListHealthEventsOutput
 * //   HealthEvents: [ // HealthEventList // required
 * //     { // HealthEvent
 * //       EventArn: "STRING_VALUE", // required
 * //       EventId: "STRING_VALUE", // required
 * //       StartedAt: new Date("TIMESTAMP"), // required
 * //       EndedAt: new Date("TIMESTAMP"),
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       LastUpdatedAt: new Date("TIMESTAMP"), // required
 * //       ImpactedLocations: [ // ImpactedLocationsList // required
 * //         { // ImpactedLocation
 * //           ASName: "STRING_VALUE", // required
 * //           ASNumber: Number("long"), // required
 * //           Country: "STRING_VALUE", // required
 * //           Subdivision: "STRING_VALUE",
 * //           Metro: "STRING_VALUE",
 * //           City: "STRING_VALUE",
 * //           Latitude: Number("double"),
 * //           Longitude: Number("double"),
 * //           CountryCode: "STRING_VALUE",
 * //           SubdivisionCode: "STRING_VALUE",
 * //           ServiceLocation: "STRING_VALUE",
 * //           Status: "STRING_VALUE", // required
 * //           CausedBy: { // NetworkImpairment
 * //             Networks: [ // NetworkList // required
 * //               { // Network
 * //                 ASName: "STRING_VALUE", // required
 * //                 ASNumber: Number("long"), // required
 * //               },
 * //             ],
 * //             AsPath: [ // required
 * //               {
 * //                 ASName: "STRING_VALUE", // required
 * //                 ASNumber: Number("long"), // required
 * //               },
 * //             ],
 * //             NetworkEventType: "STRING_VALUE", // required
 * //           },
 * //           InternetHealth: { // InternetHealth
 * //             Availability: { // AvailabilityMeasurement
 * //               ExperienceScore: Number("double"),
 * //               PercentOfTotalTrafficImpacted: Number("double"),
 * //               PercentOfClientLocationImpacted: Number("double"),
 * //             },
 * //             Performance: { // PerformanceMeasurement
 * //               ExperienceScore: Number("double"),
 * //               PercentOfTotalTrafficImpacted: Number("double"),
 * //               PercentOfClientLocationImpacted: Number("double"),
 * //               RoundTripTime: { // RoundTripTime
 * //                 P50: Number("double"),
 * //                 P90: Number("double"),
 * //                 P95: Number("double"),
 * //               },
 * //             },
 * //           },
 * //           Ipv4Prefixes: [ // Ipv4PrefixList
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       ],
 * //       Status: "STRING_VALUE", // required
 * //       PercentOfTotalTrafficImpacted: Number("double"),
 * //       ImpactType: "STRING_VALUE", // required
 * //       HealthScoreThreshold: Number("double"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListHealthEventsCommandInput - {@link ListHealthEventsCommandInput}
 * @returns {@link ListHealthEventsCommandOutput}
 * @see {@link ListHealthEventsCommandInput} for command's `input` shape.
 * @see {@link ListHealthEventsCommandOutput} for command's `response` shape.
 * @see {@link InternetMonitorClientResolvedConfig | config} for InternetMonitorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permission to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error occurred.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Invalid request.</p>
 *
 * @throws {@link InternetMonitorServiceException}
 * <p>Base exception class for all service exceptions from InternetMonitor service.</p>
 *
 *
 * @public
 */
export class ListHealthEventsCommand extends $Command
  .classBuilder<
    ListHealthEventsCommandInput,
    ListHealthEventsCommandOutput,
    InternetMonitorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: InternetMonitorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("InternetMonitor20210603", "ListHealthEvents", {})
  .n("InternetMonitorClient", "ListHealthEventsCommand")
  .sc(ListHealthEvents)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListHealthEventsInput;
      output: ListHealthEventsOutput;
    };
    sdk: {
      input: ListHealthEventsCommandInput;
      output: ListHealthEventsCommandOutput;
    };
  };
}
