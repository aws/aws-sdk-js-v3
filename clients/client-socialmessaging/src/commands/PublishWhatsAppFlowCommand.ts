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
 * Publishes a WhatsApp Flow, making it available for use in template messages. The Flow must be in DRAFT status with valid Flow JSON that passes Meta's validation. This is an irreversible operation.
 *
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
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link DependencyException} (server fault)
 *
 * Thrown when performing an action because a dependency would be broken.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception, or failure.
 *
 * @throws {@link InvalidParametersException} (client fault)
 *
 * One or more parameters provided to the action are not valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource was not found.
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
