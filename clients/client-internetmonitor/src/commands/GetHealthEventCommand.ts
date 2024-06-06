// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { InternetMonitorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InternetMonitorClient";
import { GetHealthEventInput, GetHealthEventOutput } from "../models/models_0";
import { de_GetHealthEventCommand, se_GetHealthEventCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetHealthEventCommand}.
 */
export interface GetHealthEventCommandInput extends GetHealthEventInput {}
/**
 * @public
 *
 * The output of {@link GetHealthEventCommand}.
 */
export interface GetHealthEventCommandOutput extends GetHealthEventOutput, __MetadataBearer {}

/**
 * <p>Gets information that Amazon CloudWatch Internet Monitor has created and stored about a health event for a specified monitor. This information includes the impacted locations,
 * 			and all the information related to the event, by location.</p>
 *          <p>The information returned includes the impact on performance, availability, and round-trip time, information about the network providers (ASNs),
 * 			the event type, and so on.</p>
 *          <p>Information rolled up at the global traffic level is also returned, including the impact type and total traffic impact.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InternetMonitorClient, GetHealthEventCommand } from "@aws-sdk/client-internetmonitor"; // ES Modules import
 * // const { InternetMonitorClient, GetHealthEventCommand } = require("@aws-sdk/client-internetmonitor"); // CommonJS import
 * const client = new InternetMonitorClient(config);
 * const input = { // GetHealthEventInput
 *   MonitorName: "STRING_VALUE", // required
 *   EventId: "STRING_VALUE", // required
 *   LinkedAccountId: "STRING_VALUE",
 * };
 * const command = new GetHealthEventCommand(input);
 * const response = await client.send(command);
 * // { // GetHealthEventOutput
 * //   EventArn: "STRING_VALUE", // required
 * //   EventId: "STRING_VALUE", // required
 * //   StartedAt: new Date("TIMESTAMP"), // required
 * //   EndedAt: new Date("TIMESTAMP"),
 * //   CreatedAt: new Date("TIMESTAMP"),
 * //   LastUpdatedAt: new Date("TIMESTAMP"), // required
 * //   ImpactedLocations: [ // ImpactedLocationsList // required
 * //     { // ImpactedLocation
 * //       ASName: "STRING_VALUE", // required
 * //       ASNumber: Number("long"), // required
 * //       Country: "STRING_VALUE", // required
 * //       Subdivision: "STRING_VALUE",
 * //       Metro: "STRING_VALUE",
 * //       City: "STRING_VALUE",
 * //       Latitude: Number("double"),
 * //       Longitude: Number("double"),
 * //       CountryCode: "STRING_VALUE",
 * //       SubdivisionCode: "STRING_VALUE",
 * //       ServiceLocation: "STRING_VALUE",
 * //       Status: "STRING_VALUE", // required
 * //       CausedBy: { // NetworkImpairment
 * //         Networks: [ // NetworkList // required
 * //           { // Network
 * //             ASName: "STRING_VALUE", // required
 * //             ASNumber: Number("long"), // required
 * //           },
 * //         ],
 * //         AsPath: [ // required
 * //           {
 * //             ASName: "STRING_VALUE", // required
 * //             ASNumber: Number("long"), // required
 * //           },
 * //         ],
 * //         NetworkEventType: "STRING_VALUE", // required
 * //       },
 * //       InternetHealth: { // InternetHealth
 * //         Availability: { // AvailabilityMeasurement
 * //           ExperienceScore: Number("double"),
 * //           PercentOfTotalTrafficImpacted: Number("double"),
 * //           PercentOfClientLocationImpacted: Number("double"),
 * //         },
 * //         Performance: { // PerformanceMeasurement
 * //           ExperienceScore: Number("double"),
 * //           PercentOfTotalTrafficImpacted: Number("double"),
 * //           PercentOfClientLocationImpacted: Number("double"),
 * //           RoundTripTime: { // RoundTripTime
 * //             P50: Number("double"),
 * //             P90: Number("double"),
 * //             P95: Number("double"),
 * //           },
 * //         },
 * //       },
 * //       Ipv4Prefixes: [ // Ipv4PrefixList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   Status: "STRING_VALUE", // required
 * //   PercentOfTotalTrafficImpacted: Number("double"),
 * //   ImpactType: "STRING_VALUE", // required
 * //   HealthScoreThreshold: Number("double"),
 * // };
 *
 * ```
 *
 * @param GetHealthEventCommandInput - {@link GetHealthEventCommandInput}
 * @returns {@link GetHealthEventCommandOutput}
 * @see {@link GetHealthEventCommandInput} for command's `input` shape.
 * @see {@link GetHealthEventCommandOutput} for command's `response` shape.
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
 * @public
 */
export class GetHealthEventCommand extends $Command
  .classBuilder<
    GetHealthEventCommandInput,
    GetHealthEventCommandOutput,
    InternetMonitorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: InternetMonitorClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("InternetMonitor20210603", "GetHealthEvent", {})
  .n("InternetMonitorClient", "GetHealthEventCommand")
  .f(void 0, void 0)
  .ser(se_GetHealthEventCommand)
  .de(de_GetHealthEventCommand)
  .build() {}
