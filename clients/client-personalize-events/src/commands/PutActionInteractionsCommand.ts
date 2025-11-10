// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { PutActionInteractionsRequest } from "../models/models_0";
import {
  PersonalizeEventsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PersonalizeEventsClient";
import { PutActionInteractions } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutActionInteractionsCommand}.
 */
export interface PutActionInteractionsCommandInput extends PutActionInteractionsRequest {}
/**
 * @public
 *
 * The output of {@link PutActionInteractionsCommand}.
 */
export interface PutActionInteractionsCommandOutput extends __MetadataBearer {}

/**
 * <p>Records action interaction event data. An <i>action interaction</i> event is an interaction between a user and an <i>action</i>.
 *       For example, a user taking an action, such a enrolling in a membership program or downloading your app.</p>
 *          <p>
 *       For more information about recording action interactions, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/recording-action-interaction-events.html">Recording action interaction events</a>.
 *       For more information about actions in an Actions dataset, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/actions-datasets.html">Actions dataset</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeEventsClient, PutActionInteractionsCommand } from "@aws-sdk/client-personalize-events"; // ES Modules import
 * // const { PersonalizeEventsClient, PutActionInteractionsCommand } = require("@aws-sdk/client-personalize-events"); // CommonJS import
 * // import type { PersonalizeEventsClientConfig } from "@aws-sdk/client-personalize-events";
 * const config = {}; // type is PersonalizeEventsClientConfig
 * const client = new PersonalizeEventsClient(config);
 * const input = { // PutActionInteractionsRequest
 *   trackingId: "STRING_VALUE", // required
 *   actionInteractions: [ // ActionInteractionsList // required
 *     { // ActionInteraction
 *       actionId: "STRING_VALUE", // required
 *       userId: "STRING_VALUE",
 *       sessionId: "STRING_VALUE", // required
 *       timestamp: new Date("TIMESTAMP"), // required
 *       eventType: "STRING_VALUE", // required
 *       eventId: "STRING_VALUE",
 *       recommendationId: "STRING_VALUE",
 *       impression: [ // ActionImpression
 *         "STRING_VALUE",
 *       ],
 *       properties: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new PutActionInteractionsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutActionInteractionsCommandInput - {@link PutActionInteractionsCommandInput}
 * @returns {@link PutActionInteractionsCommandOutput}
 * @see {@link PutActionInteractionsCommandInput} for command's `input` shape.
 * @see {@link PutActionInteractionsCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeEventsClientResolvedConfig | config} for PersonalizeEventsClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>Provide a valid value for the field or parameter.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The specified resource is in use.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Could not find the specified resource.</p>
 *
 * @throws {@link PersonalizeEventsServiceException}
 * <p>Base exception class for all service exceptions from PersonalizeEvents service.</p>
 *
 *
 * @public
 */
export class PutActionInteractionsCommand extends $Command
  .classBuilder<
    PutActionInteractionsCommandInput,
    PutActionInteractionsCommandOutput,
    PersonalizeEventsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PersonalizeEventsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonPersonalizeEvents", "PutActionInteractions", {})
  .n("PersonalizeEventsClient", "PutActionInteractionsCommand")
  .sc(PutActionInteractions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutActionInteractionsRequest;
      output: {};
    };
    sdk: {
      input: PutActionInteractionsCommandInput;
      output: PutActionInteractionsCommandOutput;
    };
  };
}
