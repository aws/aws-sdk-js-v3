// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateWhatsAppFlowAssetsInput, UpdateWhatsAppFlowAssetsOutput } from "../models/models_0";
import { UpdateWhatsAppFlowAssets$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateWhatsAppFlowAssetsCommand}.
 */
export interface UpdateWhatsAppFlowAssetsCommandInput extends UpdateWhatsAppFlowAssetsInput {}
/**
 * @public
 *
 * The output of {@link UpdateWhatsAppFlowAssetsCommand}.
 */
export interface UpdateWhatsAppFlowAssetsCommandOutput extends UpdateWhatsAppFlowAssetsOutput, __MetadataBearer {}

/**
 * Updates the Flow JSON definition (assets) of a WhatsApp Flow. Updating a published Flow's assets reverts it to DRAFT status, requiring re-publishing.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SocialMessagingClient, UpdateWhatsAppFlowAssetsCommand } from "@aws-sdk/client-socialmessaging"; // ES Modules import
 * // const { SocialMessagingClient, UpdateWhatsAppFlowAssetsCommand } = require("@aws-sdk/client-socialmessaging"); // CommonJS import
 * // import type { SocialMessagingClientConfig } from "@aws-sdk/client-socialmessaging";
 * const config = {}; // type is SocialMessagingClientConfig
 * const client = new SocialMessagingClient(config);
 * const input = { // UpdateWhatsAppFlowAssetsInput
 *   id: "STRING_VALUE", // required
 *   flowId: "STRING_VALUE", // required
 *   flowJson: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")   // required
 * };
 * const command = new UpdateWhatsAppFlowAssetsCommand(input);
 * const response = await client.send(command);
 * // { // UpdateWhatsAppFlowAssetsOutput
 * //   validationErrors: [ // ValidationErrorList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param UpdateWhatsAppFlowAssetsCommandInput - {@link UpdateWhatsAppFlowAssetsCommandInput}
 * @returns {@link UpdateWhatsAppFlowAssetsCommandOutput}
 * @see {@link UpdateWhatsAppFlowAssetsCommandInput} for command's `input` shape.
 * @see {@link UpdateWhatsAppFlowAssetsCommandOutput} for command's `response` shape.
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
export class UpdateWhatsAppFlowAssetsCommand extends command<UpdateWhatsAppFlowAssetsCommandInput, UpdateWhatsAppFlowAssetsCommandOutput>(
  _ep0,
  _mw0,
  "UpdateWhatsAppFlowAssets",
  UpdateWhatsAppFlowAssets$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateWhatsAppFlowAssetsInput;
      output: UpdateWhatsAppFlowAssetsOutput;
    };
    sdk: {
      input: UpdateWhatsAppFlowAssetsCommandInput;
      output: UpdateWhatsAppFlowAssetsCommandOutput;
    };
  };
}
