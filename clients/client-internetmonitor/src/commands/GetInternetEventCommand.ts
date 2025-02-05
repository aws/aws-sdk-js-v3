// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { InternetMonitorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InternetMonitorClient";
import { GetInternetEventInput, GetInternetEventOutput } from "../models/models_0";
import { de_GetInternetEventCommand, se_GetInternetEventCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Gets information that Amazon CloudWatch Internet Monitor has generated about an internet event. Internet Monitor displays information about
 * 			recent global health events, called internet events, on a global outages map that is available to all Amazon Web Services
 * 			customers. </p>
 *          <p>The information returned here includes the impacted location,
 * 			when the event started and (if the event is over) ended, the type of event (<code>PERFORMANCE</code> or <code>AVAILABILITY</code>),
 * 			and the status (<code>ACTIVE</code> or <code>RESOLVED</code>).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InternetMonitorClient, GetInternetEventCommand } from "@aws-sdk/client-internetmonitor"; // ES Modules import
 * // const { InternetMonitorClient, GetInternetEventCommand } = require("@aws-sdk/client-internetmonitor"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
export class GetInternetEventCommand extends $Command
  .classBuilder<
    GetInternetEventCommandInput,
    GetInternetEventCommandOutput,
    InternetMonitorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: InternetMonitorClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("InternetMonitor20210603", "GetInternetEvent", {})
  .n("InternetMonitorClient", "GetInternetEventCommand")
  .f(void 0, void 0)
  .ser(se_GetInternetEventCommand)
  .de(de_GetInternetEventCommand)
  .build() {
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
