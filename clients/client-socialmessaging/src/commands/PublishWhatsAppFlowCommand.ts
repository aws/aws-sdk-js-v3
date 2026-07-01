// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PublishWhatsAppFlowInput, PublishWhatsAppFlowOutput } from "../models/models_0";
import { PublishWhatsAppFlow$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PublishWhatsAppFlowCommand}.
 */
export interface PublishWhatsAppFlowCommandInput extends PublishWhatsAppFlowInput {}
/**
 * @public
 *
 * The output of {@link PublishWhatsAppFlowCommand}.
 */
export interface PublishWhatsAppFlowCommandOutput extends PublishWhatsAppFlowOutput, __MetadataBearer {}

/**
 * <p>Publishes a WhatsApp Flow, making it available for use in template messages. The Flow must be in DRAFT status with valid Flow JSON that passes Meta's validation. This is an irreversible operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SocialMessagingClient, PublishWhatsAppFlowCommand } from "@aws-sdk/client-socialmessaging"; // ES Modules import
 * // const { SocialMessagingClient, PublishWhatsAppFlowCommand } = require("@aws-sdk/client-socialmessaging"); // CommonJS import
 * // import type { SocialMessagingClientConfig } from "@aws-sdk/client-socialmessaging";
 * const config = {}; // type is SocialMessagingClientConfig
 * const client = new SocialMessagingClient(config);
 * const input = { // PublishWhatsAppFlowInput
 *   id: "STRING_VALUE", // required
 *   flowId: "STRING_VALUE", // required
 * };
 * const command = new PublishWhatsAppFlowCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PublishWhatsAppFlowCommandInput - {@link PublishWhatsAppFlowCommandInput}
 * @returns {@link PublishWhatsAppFlowCommandOutput}
 * @see {@link PublishWhatsAppFlowCommandInput} for command's `input` shape.
 * @see {@link PublishWhatsAppFlowCommandOutput} for command's `response` shape.
 * @see {@link SocialMessagingClientResolvedConfig | config} for SocialMessagingClient's `config` shape.
 *
 * @throws {@link AccessDeniedByMetaException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link DependencyException} (server fault)
 *  <p>Thrown when performing an action because a dependency would be broken.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or
 *          failure.</p>
 *
 * @throws {@link InvalidParametersException} (client fault)
 *  <p>One or more parameters provided to the action are not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource was not found.</p>
 *
 * @throws {@link ThrottledRequestException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request contains an invalid parameter value. </p>
 *
 * @throws {@link SocialMessagingServiceException}
 * <p>Base exception class for all service exceptions from SocialMessaging service.</p>
 *
 *
 * @public
 */
export class PublishWhatsAppFlowCommand extends command<PublishWhatsAppFlowCommandInput, PublishWhatsAppFlowCommandOutput>(
  _ep0,
  _mw0,
  "PublishWhatsAppFlow",
  PublishWhatsAppFlow$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PublishWhatsAppFlowInput;
      output: {};
    };
    sdk: {
      input: PublishWhatsAppFlowCommandInput;
      output: PublishWhatsAppFlowCommandOutput;
    };
  };
}
