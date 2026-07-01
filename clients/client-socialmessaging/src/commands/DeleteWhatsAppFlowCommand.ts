// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteWhatsAppFlowInput, DeleteWhatsAppFlowOutput } from "../models/models_0";
import { DeleteWhatsAppFlow$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteWhatsAppFlowCommand}.
 */
export interface DeleteWhatsAppFlowCommandInput extends DeleteWhatsAppFlowInput {}
/**
 * @public
 *
 * The output of {@link DeleteWhatsAppFlowCommand}.
 */
export interface DeleteWhatsAppFlowCommandOutput extends DeleteWhatsAppFlowOutput, __MetadataBearer {}

/**
 * <p>Deletes a WhatsApp Flow permanently. Only Flows in DRAFT status can be deleted. Published or deprecated Flows cannot be deleted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SocialMessagingClient, DeleteWhatsAppFlowCommand } from "@aws-sdk/client-socialmessaging"; // ES Modules import
 * // const { SocialMessagingClient, DeleteWhatsAppFlowCommand } = require("@aws-sdk/client-socialmessaging"); // CommonJS import
 * // import type { SocialMessagingClientConfig } from "@aws-sdk/client-socialmessaging";
 * const config = {}; // type is SocialMessagingClientConfig
 * const client = new SocialMessagingClient(config);
 * const input = { // DeleteWhatsAppFlowInput
 *   id: "STRING_VALUE", // required
 *   flowId: "STRING_VALUE", // required
 * };
 * const command = new DeleteWhatsAppFlowCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteWhatsAppFlowCommandInput - {@link DeleteWhatsAppFlowCommandInput}
 * @returns {@link DeleteWhatsAppFlowCommandOutput}
 * @see {@link DeleteWhatsAppFlowCommandInput} for command's `input` shape.
 * @see {@link DeleteWhatsAppFlowCommandOutput} for command's `response` shape.
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
export class DeleteWhatsAppFlowCommand extends command<DeleteWhatsAppFlowCommandInput, DeleteWhatsAppFlowCommandOutput>(
  _ep0,
  _mw0,
  "DeleteWhatsAppFlow",
  DeleteWhatsAppFlow$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteWhatsAppFlowInput;
      output: {};
    };
    sdk: {
      input: DeleteWhatsAppFlowCommandInput;
      output: DeleteWhatsAppFlowCommandOutput;
    };
  };
}
