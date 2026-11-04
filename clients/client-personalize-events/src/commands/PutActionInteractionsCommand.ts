// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutActionInteractionsRequest } from "../models/models_0";
import { PutActionInteractions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Records action interaction event data. An *action interaction* event is an interaction between a user and an *action*. For example, a user taking an action, such a enrolling in a membership program or downloading your app.
 *
 * For more information about recording action interactions, see [Recording action interaction events](https://docs.aws.amazon.com/personalize/latest/dg/recording-action-interaction-events.html). For more information about actions in an Actions dataset, see [Actions dataset](https://docs.aws.amazon.com/personalize/latest/dg/actions-datasets.html).
 *
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
 *
 * Provide a valid value for the field or parameter.
 *
 * @throws {@link ResourceInUseException} (client fault)
 *
 * The specified resource is in use.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Could not find the specified resource.
 *
 * @throws {@link PersonalizeEventsServiceException}
 *
 * Base exception class for all service exceptions from PersonalizeEvents service.
 *
 * @public
 */
export class PutActionInteractionsCommand extends command<PutActionInteractionsCommandInput, PutActionInteractionsCommandOutput>(
  _ep0,
  _mw0,
  "PutActionInteractions",
  PutActionInteractions$
) {
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
