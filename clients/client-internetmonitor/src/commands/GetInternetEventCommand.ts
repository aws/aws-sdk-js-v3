// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetInternetEventInput, GetInternetEventOutput } from "../models/models_0";
import { GetInternetEvent$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetInternetEventCommand}.
 */
export interface GetInternetEventCommandInput extends GetInternetEventInput {}
/**
 * @public
 *
 * The output of {@link GetInternetEventCommand}.
 */
export interface GetInternetEventCommandOutput extends GetInternetEventOutput, __MetadataBearer {}

/**
 * Gets information that Amazon CloudWatch Internet Monitor has generated about an internet event. Internet Monitor displays information about recent global health events, called internet events, on a global outages map that is available to all Amazon Web Services customers.
 *
 * The information returned here includes the impacted location, when the event started and (if the event is over) ended, the type of event (`PERFORMANCE` or `AVAILABILITY`), and the status (`ACTIVE` or `RESOLVED`).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InternetMonitorClient, GetInternetEventCommand } from "@aws-sdk/client-internetmonitor"; // ES Modules import
 * // const { InternetMonitorClient, GetInternetEventCommand } = require("@aws-sdk/client-internetmonitor"); // CommonJS import
 * // import type { InternetMonitorClientConfig } from "@aws-sdk/client-internetmonitor";
 * const config = {}; // type is InternetMonitorClientConfig
 * const client = new InternetMonitorClient(config);
 * const input = { // GetInternetEventInput
 *   EventId: "STRING_VALUE", // required
 * };
 * const command = new GetInternetEventCommand(input);
 * const response = await client.send(command);
 * // { // GetInternetEventOutput
 * //   EventId: "STRING_VALUE", // required
 * //   EventArn: "STRING_VALUE", // required
 * //   StartedAt: new Date("TIMESTAMP"), // required
 * //   EndedAt: new Date("TIMESTAMP"),
 * //   ClientLocation: { // ClientLocation
 * //     ASName: "STRING_VALUE", // required
 * //     ASNumber: Number("long"), // required
 * //     Country: "STRING_VALUE", // required
 * //     Subdivision: "STRING_VALUE",
 * //     Metro: "STRING_VALUE",
 * //     City: "STRING_VALUE", // required
 * //     Latitude: Number("double"), // required
 * //     Longitude: Number("double"), // required
 * //   },
 * //   EventType: "STRING_VALUE", // required
 * //   EventStatus: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param GetInternetEventCommandInput - {@link GetInternetEventCommandInput}
 * @returns {@link GetInternetEventCommandOutput}
 * @see {@link GetInternetEventCommandInput} for command's `input` shape.
 * @see {@link GetInternetEventCommandOutput} for command's `response` shape.
 * @see {@link InternetMonitorClientResolvedConfig | config} for InternetMonitorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have sufficient permission to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal error occurred.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Invalid request.
 *
 * @throws {@link InternetMonitorServiceException}
 *
 * Base exception class for all service exceptions from InternetMonitor service.
 *
 * @public
 */
export class GetInternetEventCommand extends command<GetInternetEventCommandInput, GetInternetEventCommandOutput>(
  _ep0,
  _mw0,
  "GetInternetEvent",
  GetInternetEvent$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetInternetEventInput;
      output: GetInternetEventOutput;
    };
    sdk: {
      input: GetInternetEventCommandInput;
      output: GetInternetEventCommandOutput;
    };
  };
}
