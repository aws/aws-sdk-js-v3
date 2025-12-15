// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  DisassociateWhatsAppBusinessAccountInput,
  DisassociateWhatsAppBusinessAccountOutput,
} from "../models/models_0";
import { DisassociateWhatsAppBusinessAccount$ } from "../schemas/schemas_0";
import type {
  ServiceInputTypes,
  ServiceOutputTypes,
  SocialMessagingClientResolvedConfig,
} from "../SocialMessagingClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface DisassociateWhatsAppBusinessAccountCommandOutput
  extends DisassociateWhatsAppBusinessAccountOutput,
    __MetadataBearer {}

/**
 * <p>Disassociate a WhatsApp Business Account (WABA) from your Amazon Web Services account.</p>
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
 *  <p>Thrown when performing an action because a dependency would be broken.</p>
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
export class DisassociateWhatsAppBusinessAccountCommand extends $Command
  .classBuilder<
    DisassociateWhatsAppBusinessAccountCommandInput,
    DisassociateWhatsAppBusinessAccountCommandOutput,
    SocialMessagingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SocialMessagingClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SocialMessaging", "DisassociateWhatsAppBusinessAccount", {})
  .n("SocialMessagingClient", "DisassociateWhatsAppBusinessAccountCommand")
  .sc(DisassociateWhatsAppBusinessAccount$)
  .build() {
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
