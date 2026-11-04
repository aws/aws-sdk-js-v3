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
 * Creates a new WhatsApp Flow. Flows enable businesses to create rich, interactive forms and experiences that users can complete without leaving WhatsApp. The Flow is created in DRAFT status. If `publish` is set to `true` and a valid `flowJson` is provided, the Flow is published immediately.
 *
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
 *   endpointUri: "STRING_VALUE",
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
