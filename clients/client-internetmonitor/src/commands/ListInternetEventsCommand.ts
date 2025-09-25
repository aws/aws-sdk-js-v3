// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { InternetMonitorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InternetMonitorClient";
import { ListInternetEventsInput, ListInternetEventsOutput } from "../models/models_0";
import { ListInternetEvents } from "../schemas/schemas_1_Monitor";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListInternetEventsCommand}.
 */
export interface ListInternetEventsCommandInput extends ListInternetEventsInput {}
/**
 * @public
 *
 * The output of {@link ListInternetEventsCommand}.
 */
export interface ListInternetEventsCommandOutput extends ListInternetEventsOutput, __MetadataBearer {}

/**
 * <p>Lists internet events that cause performance or availability issues for client locations. Amazon CloudWatch Internet Monitor displays information about
 * 			recent global health events, called internet events, on a global outages map that is available to all Amazon Web Services
 * 			customers. </p>
 *          <p>You can constrain the list of internet events returned by providing a start time and end time to define a total
 * 			time frame for events you want to list. Both start time and end time specify the time when an event started. End time
 * 			is optional. If you don't include it, the default end time is the current time.</p>
 *          <p>You can also limit the events returned to a specific status
 * 			(<code>ACTIVE</code> or <code>RESOLVED</code>) or type (<code>PERFORMANCE</code> or <code>AVAILABILITY</code>).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InternetMonitorClient, ListInternetEventsCommand } from "@aws-sdk/client-internetmonitor"; // ES Modules import
 * // const { InternetMonitorClient, ListInternetEventsCommand } = require("@aws-sdk/client-internetmonitor"); // CommonJS import
 * // import type { InternetMonitorClientConfig } from "@aws-sdk/client-internetmonitor";
 * const config = {}; // type is InternetMonitorClientConfig
 * const client = new InternetMonitorClient(config);
 * const input = { // ListInternetEventsInput
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   StartTime: new Date("TIMESTAMP"),
 *   EndTime: new Date("TIMESTAMP"),
 *   EventStatus: "STRING_VALUE",
 *   EventType: "STRING_VALUE",
 * };
 * const command = new ListInternetEventsCommand(input);
 * const response = await client.send(command);
 * // { // ListInternetEventsOutput
 * //   InternetEvents: [ // InternetEventsList // required
 * //     { // InternetEventSummary
 * //       EventId: "STRING_VALUE", // required
 * //       EventArn: "STRING_VALUE", // required
 * //       StartedAt: new Date("TIMESTAMP"), // required
 * //       EndedAt: new Date("TIMESTAMP"),
 * //       ClientLocation: { // ClientLocation
 * //         ASName: "STRING_VALUE", // required
 * //         ASNumber: Number("long"), // required
 * //         Country: "STRING_VALUE", // required
 * //         Subdivision: "STRING_VALUE",
 * //         Metro: "STRING_VALUE",
 * //         City: "STRING_VALUE", // required
 * //         Latitude: Number("double"), // required
 * //         Longitude: Number("double"), // required
 * //       },
 * //       EventType: "STRING_VALUE", // required
 * //       EventStatus: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListInternetEventsCommandInput - {@link ListInternetEventsCommandInput}
 * @returns {@link ListInternetEventsCommandOutput}
 * @see {@link ListInternetEventsCommandInput} for command's `input` shape.
 * @see {@link ListInternetEventsCommandOutput} for command's `response` shape.
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
export class ListInternetEventsCommand extends $Command
  .classBuilder<
    ListInternetEventsCommandInput,
    ListInternetEventsCommandOutput,
    InternetMonitorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: InternetMonitorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("InternetMonitor20210603", "ListInternetEvents", {})
  .n("InternetMonitorClient", "ListInternetEventsCommand")
  .sc(ListInternetEvents)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListInternetEventsInput;
      output: ListInternetEventsOutput;
    };
    sdk: {
      input: ListInternetEventsCommandInput;
      output: ListInternetEventsCommandOutput;
    };
  };
}
