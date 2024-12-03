// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  PutWhatsAppBusinessAccountEventDestinationsInput,
  PutWhatsAppBusinessAccountEventDestinationsOutput,
} from "../models/models_0";
import {
  de_PutWhatsAppBusinessAccountEventDestinationsCommand,
  se_PutWhatsAppBusinessAccountEventDestinationsCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SocialMessagingClientResolvedConfig } from "../SocialMessagingClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutWhatsAppBusinessAccountEventDestinationsCommand}.
 */
export interface PutWhatsAppBusinessAccountEventDestinationsCommandInput
  extends PutWhatsAppBusinessAccountEventDestinationsInput {}
/**
 * @public
 *
 * The output of {@link PutWhatsAppBusinessAccountEventDestinationsCommand}.
 */
export interface PutWhatsAppBusinessAccountEventDestinationsCommandOutput
  extends PutWhatsAppBusinessAccountEventDestinationsOutput,
    __MetadataBearer {}

/**
 * <p>Add an event destination to log event data from WhatsApp for a WhatsApp Business Account (WABA). A WABA can only have one event destination at a time. All resources associated with the WABA use the same event destination.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SocialMessagingClient, PutWhatsAppBusinessAccountEventDestinationsCommand } from "@aws-sdk/client-socialmessaging"; // ES Modules import
 * // const { SocialMessagingClient, PutWhatsAppBusinessAccountEventDestinationsCommand } = require("@aws-sdk/client-socialmessaging"); // CommonJS import
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
 *  <p>The request processing has failed because of an unknown error, exception, or
 *          failure.</p>
 *
 * @throws {@link InvalidParametersException} (client fault)
 *  <p>One or more parameters provided to the action are not valid.</p>
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
 * @public
 */
export class PutWhatsAppBusinessAccountEventDestinationsCommand extends $Command
  .classBuilder<
    PutWhatsAppBusinessAccountEventDestinationsCommandInput,
    PutWhatsAppBusinessAccountEventDestinationsCommandOutput,
    SocialMessagingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SocialMessagingClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SocialMessaging", "PutWhatsAppBusinessAccountEventDestinations", {})
  .n("SocialMessagingClient", "PutWhatsAppBusinessAccountEventDestinationsCommand")
  .f(void 0, void 0)
  .ser(se_PutWhatsAppBusinessAccountEventDestinationsCommand)
  .de(de_PutWhatsAppBusinessAccountEventDestinationsCommand)
  .build() {
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
