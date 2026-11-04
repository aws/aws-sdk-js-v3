// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateWhatsAppFlowInput, UpdateWhatsAppFlowOutput } from "../models/models_0";
import { UpdateWhatsAppFlow$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Updates the metadata of a WhatsApp Flow, such as its name or categories. This does not update the Flow JSON definition. Use [UpdateWhatsAppFlowAssets](https://docs.aws.amazon.com/social-messaging/latest/APIReference/API_UpdateWhatsAppFlowAssets.html) to update the Flow JSON.
 *
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
 *   endpointUri: "STRING_VALUE",
 *   metaAppId: "STRING_VALUE",
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
export class UpdateWhatsAppFlowCommand extends command<UpdateWhatsAppFlowCommandInput, UpdateWhatsAppFlowCommandOutput>(
  _ep0,
  _mw0,
  "UpdateWhatsAppFlow",
  UpdateWhatsAppFlow$
) {
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
