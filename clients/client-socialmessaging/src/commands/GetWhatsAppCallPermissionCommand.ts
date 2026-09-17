// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetWhatsAppCallPermissionInput, GetWhatsAppCallPermissionOutput } from "../models/models_0";
import { GetWhatsAppCallPermission$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetWhatsAppCallPermissionCommand}.
 */
export interface GetWhatsAppCallPermissionCommandInput extends GetWhatsAppCallPermissionInput {}
/**
 * @public
 *
 * The output of {@link GetWhatsAppCallPermissionCommand}.
 */
export interface GetWhatsAppCallPermissionCommandOutput extends GetWhatsAppCallPermissionOutput, __MetadataBearer {}

/**
 * <p>Retrieves the current calling permission for a WhatsApp end user, along with the calling actions the business is allowed to take with that user. Provide the destination phone number or the business-scoped user ID to identify the end user.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SocialMessagingClient, GetWhatsAppCallPermissionCommand } from "@aws-sdk/client-socialmessaging"; // ES Modules import
 * // const { SocialMessagingClient, GetWhatsAppCallPermissionCommand } = require("@aws-sdk/client-socialmessaging"); // CommonJS import
 * // import type { SocialMessagingClientConfig } from "@aws-sdk/client-socialmessaging";
 * const config = {}; // type is SocialMessagingClientConfig
 * const client = new SocialMessagingClient(config);
 * const input = { // GetWhatsAppCallPermissionInput
 *   originationPhoneNumberId: "STRING_VALUE", // required
 *   destinationPhoneNumber: "STRING_VALUE",
 *   endUserBsuid: "STRING_VALUE",
 * };
 * const command = new GetWhatsAppCallPermissionCommand(input);
 * const response = await client.send(command);
 * // { // GetWhatsAppCallPermissionOutput
 * //   permission: { // WhatsAppCallPermission
 * //     status: "STRING_VALUE", // required
 * //     expirationTime: new Date("TIMESTAMP"),
 * //   },
 * //   actions: [ // WhatsAppCallPermissionActionList // required
 * //     { // WhatsAppCallPermissionAction
 * //       actionName: "STRING_VALUE", // required
 * //       canPerformAction: true || false, // required
 * //       limits: [ // WhatsAppCallPermissionLimitList // required
 * //         { // WhatsAppCallPermissionLimit
 * //           timePeriod: "STRING_VALUE", // required
 * //           maxAllowed: Number("int"), // required
 * //           currentUsage: Number("int"), // required
 * //           limitExpirationTime: new Date("TIMESTAMP"),
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetWhatsAppCallPermissionCommandInput - {@link GetWhatsAppCallPermissionCommandInput}
 * @returns {@link GetWhatsAppCallPermissionCommandOutput}
 * @see {@link GetWhatsAppCallPermissionCommandInput} for command's `input` shape.
 * @see {@link GetWhatsAppCallPermissionCommandOutput} for command's `response` shape.
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
export class GetWhatsAppCallPermissionCommand extends command<GetWhatsAppCallPermissionCommandInput, GetWhatsAppCallPermissionCommandOutput>(
  _ep0,
  _mw0,
  "GetWhatsAppCallPermission",
  GetWhatsAppCallPermission$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetWhatsAppCallPermissionInput;
      output: GetWhatsAppCallPermissionOutput;
    };
    sdk: {
      input: GetWhatsAppCallPermissionCommandInput;
      output: GetWhatsAppCallPermissionCommandOutput;
    };
  };
}
