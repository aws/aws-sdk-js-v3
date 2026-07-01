// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateWhatsAppFlowInput, CreateWhatsAppFlowOutput } from "../models/models_0";
import { CreateWhatsAppFlow$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateWhatsAppFlowCommand}.
 */
export interface CreateWhatsAppFlowCommandInput extends CreateWhatsAppFlowInput {}
/**
 * @public
 *
 * The output of {@link CreateWhatsAppFlowCommand}.
 */
export interface CreateWhatsAppFlowCommandOutput extends CreateWhatsAppFlowOutput, __MetadataBearer {}

/**
 * <p>Creates a new WhatsApp Flow. Flows enable businesses to create rich, interactive forms and experiences
 *          that users can complete without leaving WhatsApp. The Flow is created in DRAFT status. If <code>publish</code>
 *          is set to <code>true</code> and a valid <code>flowJson</code> is provided, the Flow is published immediately.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SocialMessagingClient, CreateWhatsAppFlowCommand } from "@aws-sdk/client-socialmessaging"; // ES Modules import
 * // const { SocialMessagingClient, CreateWhatsAppFlowCommand } = require("@aws-sdk/client-socialmessaging"); // CommonJS import
 * // import type { SocialMessagingClientConfig } from "@aws-sdk/client-socialmessaging";
 * const config = {}; // type is SocialMessagingClientConfig
 * const client = new SocialMessagingClient(config);
 * const input = { // CreateWhatsAppFlowInput
 *   id: "STRING_VALUE", // required
 *   flowName: "STRING_VALUE", // required
 *   categories: [ // MetaFlowCategoryList // required
 *     "SIGN_UP" || "SIGN_IN" || "APPOINTMENT_BOOKING" || "LEAD_GENERATION" || "SHOPPING" || "CONTACT_US" || "CUSTOMER_SUPPORT" || "SURVEY" || "OTHER",
 *   ],
 *   flowJson: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *   publish: true || false,
 *   cloneFlowId: "STRING_VALUE",
 * };
 * const command = new CreateWhatsAppFlowCommand(input);
 * const response = await client.send(command);
 * // { // CreateWhatsAppFlowOutput
 * //   flowId: "STRING_VALUE",
 * //   validationErrors: [ // ValidationErrorList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param CreateWhatsAppFlowCommandInput - {@link CreateWhatsAppFlowCommandInput}
 * @returns {@link CreateWhatsAppFlowCommandOutput}
 * @see {@link CreateWhatsAppFlowCommandInput} for command's `input` shape.
 * @see {@link CreateWhatsAppFlowCommandOutput} for command's `response` shape.
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
export class CreateWhatsAppFlowCommand extends command<CreateWhatsAppFlowCommandInput, CreateWhatsAppFlowCommandOutput>(
  _ep0,
  _mw0,
  "CreateWhatsAppFlow",
  CreateWhatsAppFlow$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateWhatsAppFlowInput;
      output: CreateWhatsAppFlowOutput;
    };
    sdk: {
      input: CreateWhatsAppFlowCommandInput;
      output: CreateWhatsAppFlowCommandOutput;
    };
  };
}
