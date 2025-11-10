// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { PutEventsRequest } from "../models/models_0";
import {
  PersonalizeEventsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PersonalizeEventsClient";
import { PutEvents } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutEventsCommand}.
 */
export interface PutEventsCommandInput extends PutEventsRequest {}
/**
 * @public
 *
 * The output of {@link PutEventsCommand}.
 */
export interface PutEventsCommandOutput extends __MetadataBearer {}

/**
 * <p>Records item interaction event data. For more information see
 *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/recording-item-interaction-events.html">Recording item interaction events</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeEventsClient, PutEventsCommand } from "@aws-sdk/client-personalize-events"; // ES Modules import
 * // const { PersonalizeEventsClient, PutEventsCommand } = require("@aws-sdk/client-personalize-events"); // CommonJS import
 * // import type { PersonalizeEventsClientConfig } from "@aws-sdk/client-personalize-events";
 * const config = {}; // type is PersonalizeEventsClientConfig
 * const client = new PersonalizeEventsClient(config);
 * const input = { // PutEventsRequest
 *   trackingId: "STRING_VALUE", // required
 *   userId: "STRING_VALUE",
 *   sessionId: "STRING_VALUE", // required
 *   eventList: [ // EventList // required
 *     { // Event
 *       eventId: "STRING_VALUE",
 *       eventType: "STRING_VALUE", // required
 *       eventValue: Number("float"),
 *       itemId: "STRING_VALUE",
 *       properties: "STRING_VALUE",
 *       sentAt: new Date("TIMESTAMP"), // required
 *       recommendationId: "STRING_VALUE",
 *       impression: [ // Impression
 *         "STRING_VALUE",
 *       ],
 *       metricAttribution: { // MetricAttribution
 *         eventAttributionSource: "STRING_VALUE", // required
 *       },
 *     },
 *   ],
 * };
 * const command = new PutEventsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutEventsCommandInput - {@link PutEventsCommandInput}
 * @returns {@link PutEventsCommandOutput}
 * @see {@link PutEventsCommandInput} for command's `input` shape.
 * @see {@link PutEventsCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeEventsClientResolvedConfig | config} for PersonalizeEventsClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>Provide a valid value for the field or parameter.</p>
 *
 * @throws {@link PersonalizeEventsServiceException}
 * <p>Base exception class for all service exceptions from PersonalizeEvents service.</p>
 *
 *
 * @public
 */
export class PutEventsCommand extends $Command
  .classBuilder<
    PutEventsCommandInput,
    PutEventsCommandOutput,
    PersonalizeEventsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PersonalizeEventsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonPersonalizeEvents", "PutEvents", {})
  .n("PersonalizeEventsClient", "PutEventsCommand")
  .sc(PutEvents)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutEventsRequest;
      output: {};
    };
    sdk: {
      input: PutEventsCommandInput;
      output: PutEventsCommandOutput;
    };
  };
}
