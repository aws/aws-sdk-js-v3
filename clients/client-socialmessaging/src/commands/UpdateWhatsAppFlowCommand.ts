// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateWhatsAppFlowInput, UpdateWhatsAppFlowOutput } from "../models/models_0";
import { UpdateWhatsAppFlow$ } from "../schemas/schemas_0";
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
 * The input for {@link UpdateWhatsAppFlowCommand}.
 */
export interface UpdateWhatsAppFlowCommandInput extends UpdateWhatsAppFlowInput {}
/**
 * @public
 *
 * The output of {@link UpdateWhatsAppFlowCommand}.
 */
export interface UpdateWhatsAppFlowCommandOutput extends UpdateWhatsAppFlowOutput, __MetadataBearer {}

/**
 * <p>Updates the metadata of a WhatsApp Flow, such as its name or categories. This does not update the Flow JSON definition. Use <a href="https://docs.aws.amazon.com/social-messaging/latest/APIReference/API_UpdateWhatsAppFlowAssets.html">UpdateWhatsAppFlowAssets</a> to update the Flow JSON.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SocialMessagingClient, UpdateWhatsAppFlowCommand } from "@aws-sdk/client-socialmessaging"; // ES Modules import
 * // const { SocialMessagingClient, UpdateWhatsAppFlowCommand } = require("@aws-sdk/client-socialmessaging"); // CommonJS import
 * // import type { SocialMessagingClientConfig } from "@aws-sdk/client-socialmessaging";
 * const config = {}; // type is SocialMessagingClientConfig
 * const client = new SocialMessagingClient(config);
 * const input = { // UpdateWhatsAppFlowInput
 *   id: "STRING_VALUE", // required
 *   flowId: "STRING_VALUE", // required
 *   flowName: "STRING_VALUE",
 *   categories: [ // MetaFlowCategoryList
 *     "SIGN_UP" || "SIGN_IN" || "APPOINTMENT_BOOKING" || "LEAD_GENERATION" || "SHOPPING" || "CONTACT_US" || "CUSTOMER_SUPPORT" || "SURVEY" || "OTHER",
 *   ],
 * };
 * const command = new UpdateWhatsAppFlowCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateWhatsAppFlowCommandInput - {@link UpdateWhatsAppFlowCommandInput}
 * @returns {@link UpdateWhatsAppFlowCommandOutput}
 * @see {@link UpdateWhatsAppFlowCommandInput} for command's `input` shape.
 * @see {@link UpdateWhatsAppFlowCommandOutput} for command's `response` shape.
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
export class UpdateWhatsAppFlowCommand extends $Command
  .classBuilder<
    UpdateWhatsAppFlowCommandInput,
    UpdateWhatsAppFlowCommandOutput,
    SocialMessagingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SocialMessagingClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SocialMessaging", "UpdateWhatsAppFlow", {})
  .n("SocialMessagingClient", "UpdateWhatsAppFlowCommand")
  .sc(UpdateWhatsAppFlow$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateWhatsAppFlowInput;
      output: {};
    };
    sdk: {
      input: UpdateWhatsAppFlowCommandInput;
      output: UpdateWhatsAppFlowCommandOutput;
    };
  };
}
