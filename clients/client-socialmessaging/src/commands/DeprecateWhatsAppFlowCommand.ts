// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeprecateWhatsAppFlowInput, DeprecateWhatsAppFlowOutput } from "../models/models_0";
import { DeprecateWhatsAppFlow$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeprecateWhatsAppFlowCommand}.
 */
export interface DeprecateWhatsAppFlowCommandInput extends DeprecateWhatsAppFlowInput {}
/**
 * @public
 *
 * The output of {@link DeprecateWhatsAppFlowCommand}.
 */
export interface DeprecateWhatsAppFlowCommandOutput extends DeprecateWhatsAppFlowOutput, __MetadataBearer {}

/**
 * <p>Deprecates a published WhatsApp Flow, marking it as no longer recommended for use. The Flow must be in PUBLISHED status. This is an irreversible operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SocialMessagingClient, DeprecateWhatsAppFlowCommand } from "@aws-sdk/client-socialmessaging"; // ES Modules import
 * // const { SocialMessagingClient, DeprecateWhatsAppFlowCommand } = require("@aws-sdk/client-socialmessaging"); // CommonJS import
 * // import type { SocialMessagingClientConfig } from "@aws-sdk/client-socialmessaging";
 * const config = {}; // type is SocialMessagingClientConfig
 * const client = new SocialMessagingClient(config);
 * const input = { // DeprecateWhatsAppFlowInput
 *   id: "STRING_VALUE", // required
 *   flowId: "STRING_VALUE", // required
 * };
 * const command = new DeprecateWhatsAppFlowCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeprecateWhatsAppFlowCommandInput - {@link DeprecateWhatsAppFlowCommandInput}
 * @returns {@link DeprecateWhatsAppFlowCommandOutput}
 * @see {@link DeprecateWhatsAppFlowCommandInput} for command's `input` shape.
 * @see {@link DeprecateWhatsAppFlowCommandOutput} for command's `response` shape.
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
export class DeprecateWhatsAppFlowCommand extends command<DeprecateWhatsAppFlowCommandInput, DeprecateWhatsAppFlowCommandOutput>(
  _ep0,
  _mw0,
  "DeprecateWhatsAppFlow",
  DeprecateWhatsAppFlow$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeprecateWhatsAppFlowInput;
      output: {};
    };
    sdk: {
      input: DeprecateWhatsAppFlowCommandInput;
      output: DeprecateWhatsAppFlowCommandOutput;
    };
  };
}
