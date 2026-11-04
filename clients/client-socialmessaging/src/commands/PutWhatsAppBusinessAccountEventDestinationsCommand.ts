// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  PutWhatsAppBusinessAccountEventDestinationsInput,
  PutWhatsAppBusinessAccountEventDestinationsOutput,
} from "../models/models_0";
import { PutWhatsAppBusinessAccountEventDestinations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutWhatsAppBusinessAccountEventDestinationsCommand}.
 */
export interface PutWhatsAppBusinessAccountEventDestinationsCommandInput extends PutWhatsAppBusinessAccountEventDestinationsInput {}
/**
 * @public
 *
 * The output of {@link PutWhatsAppBusinessAccountEventDestinationsCommand}.
 */
export interface PutWhatsAppBusinessAccountEventDestinationsCommandOutput extends PutWhatsAppBusinessAccountEventDestinationsOutput, __MetadataBearer {}

/**
 * Add an event destination to log event data from WhatsApp for a WhatsApp Business Account (WABA). A WABA can only have one event destination at a time. All resources associated with the WABA use the same event destination.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SocialMessagingClient, PutWhatsAppBusinessAccountEventDestinationsCommand } from "@aws-sdk/client-socialmessaging"; // ES Modules import
 * // const { SocialMessagingClient, PutWhatsAppBusinessAccountEventDestinationsCommand } = require("@aws-sdk/client-socialmessaging"); // CommonJS import
 * // import type { SocialMessagingClientConfig } from "@aws-sdk/client-socialmessaging";
 * const config = {}; // type is SocialMessagingClientConfig
 * const client = new SocialMessagingClient(config);
 * const input = { // PutWhatsAppBusinessAccountEventDestinationsInput
 *   id: "STRING_VALUE", // required
 *   eventDestinations: [ // WhatsAppBusinessAccountEventDestinations // required
 *     { // WhatsAppBusinessAccountEventDestination
 *       eventDestinationArn: "STRING_VALUE", // required
 *       roleArn: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new PutWhatsAppBusinessAccountEventDestinationsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutWhatsAppBusinessAccountEventDestinationsCommandInput - {@link PutWhatsAppBusinessAccountEventDestinationsCommandInput}
 * @returns {@link PutWhatsAppBusinessAccountEventDestinationsCommandOutput}
 * @see {@link PutWhatsAppBusinessAccountEventDestinationsCommandInput} for command's `input` shape.
 * @see {@link PutWhatsAppBusinessAccountEventDestinationsCommandOutput} for command's `response` shape.
 * @see {@link SocialMessagingClientResolvedConfig | config} for SocialMessagingClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception, or failure.
 *
 * @throws {@link InvalidParametersException} (client fault)
 *
 * One or more parameters provided to the action are not valid.
 *
 * @throws {@link ThrottledRequestException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request contains an invalid parameter value.
 *
 * @throws {@link SocialMessagingServiceException}
 *
 * Base exception class for all service exceptions from SocialMessaging service.
 *
 * @public
 */
export class PutWhatsAppBusinessAccountEventDestinationsCommand extends command<PutWhatsAppBusinessAccountEventDestinationsCommandInput, PutWhatsAppBusinessAccountEventDestinationsCommandOutput>(
  _ep0,
  _mw0,
  "PutWhatsAppBusinessAccountEventDestinations",
  PutWhatsAppBusinessAccountEventDestinations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutWhatsAppBusinessAccountEventDestinationsInput;
      output: {};
    };
    sdk: {
      input: PutWhatsAppBusinessAccountEventDestinationsCommandInput;
      output: PutWhatsAppBusinessAccountEventDestinationsCommandOutput;
    };
  };
}
