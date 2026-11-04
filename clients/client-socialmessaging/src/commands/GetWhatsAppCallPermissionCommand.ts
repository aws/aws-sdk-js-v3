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
 * Retrieves the current calling permission for a WhatsApp end user, along with the calling actions the business is allowed to take with that user. Provide the destination phone number or the business-scoped user ID to identify the end user.
 *
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
