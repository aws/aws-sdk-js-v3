// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DisassociateWhatsAppBusinessAccountInput,
  DisassociateWhatsAppBusinessAccountOutput,
} from "../models/models_0";
import { DisassociateWhatsAppBusinessAccount$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DisassociateWhatsAppBusinessAccountCommand}.
 */
export interface DisassociateWhatsAppBusinessAccountCommandInput extends DisassociateWhatsAppBusinessAccountInput {}
/**
 * @public
 *
 * The output of {@link DisassociateWhatsAppBusinessAccountCommand}.
 */
export interface DisassociateWhatsAppBusinessAccountCommandOutput extends DisassociateWhatsAppBusinessAccountOutput, __MetadataBearer {}

/**
 * Disassociate a WhatsApp Business Account (WABA) from your Amazon Web Services account.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SocialMessagingClient, DisassociateWhatsAppBusinessAccountCommand } from "@aws-sdk/client-socialmessaging"; // ES Modules import
 * // const { SocialMessagingClient, DisassociateWhatsAppBusinessAccountCommand } = require("@aws-sdk/client-socialmessaging"); // CommonJS import
 * // import type { SocialMessagingClientConfig } from "@aws-sdk/client-socialmessaging";
 * const config = {}; // type is SocialMessagingClientConfig
 * const client = new SocialMessagingClient(config);
 * const input = { // DisassociateWhatsAppBusinessAccountInput
 *   id: "STRING_VALUE", // required
 * };
 * const command = new DisassociateWhatsAppBusinessAccountCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateWhatsAppBusinessAccountCommandInput - {@link DisassociateWhatsAppBusinessAccountCommandInput}
 * @returns {@link DisassociateWhatsAppBusinessAccountCommandOutput}
 * @see {@link DisassociateWhatsAppBusinessAccountCommandInput} for command's `input` shape.
 * @see {@link DisassociateWhatsAppBusinessAccountCommandOutput} for command's `response` shape.
 * @see {@link SocialMessagingClientResolvedConfig | config} for SocialMessagingClient's `config` shape.
 *
 * @throws {@link DependencyException} (server fault)
 *
 * Thrown when performing an action because a dependency would be broken.
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
export class DisassociateWhatsAppBusinessAccountCommand extends command<DisassociateWhatsAppBusinessAccountCommandInput, DisassociateWhatsAppBusinessAccountCommandOutput>(
  _ep0,
  _mw0,
  "DisassociateWhatsAppBusinessAccount",
  DisassociateWhatsAppBusinessAccount$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateWhatsAppBusinessAccountInput;
      output: {};
    };
    sdk: {
      input: DisassociateWhatsAppBusinessAccountCommandInput;
      output: DisassociateWhatsAppBusinessAccountCommandOutput;
    };
  };
}
