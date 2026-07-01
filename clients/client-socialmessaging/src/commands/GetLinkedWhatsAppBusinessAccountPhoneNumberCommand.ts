// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GetLinkedWhatsAppBusinessAccountPhoneNumberInput,
  GetLinkedWhatsAppBusinessAccountPhoneNumberOutput,
} from "../models/models_0";
import { GetLinkedWhatsAppBusinessAccountPhoneNumber$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetLinkedWhatsAppBusinessAccountPhoneNumberCommand}.
 */
export interface GetLinkedWhatsAppBusinessAccountPhoneNumberCommandInput extends GetLinkedWhatsAppBusinessAccountPhoneNumberInput {}
/**
 * @public
 *
 * The output of {@link GetLinkedWhatsAppBusinessAccountPhoneNumberCommand}.
 */
export interface GetLinkedWhatsAppBusinessAccountPhoneNumberCommandOutput extends GetLinkedWhatsAppBusinessAccountPhoneNumberOutput, __MetadataBearer {}

/**
 * <p>Retrieve the WABA account id and phone number details of a WhatsApp business account phone number.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SocialMessagingClient, GetLinkedWhatsAppBusinessAccountPhoneNumberCommand } from "@aws-sdk/client-socialmessaging"; // ES Modules import
 * // const { SocialMessagingClient, GetLinkedWhatsAppBusinessAccountPhoneNumberCommand } = require("@aws-sdk/client-socialmessaging"); // CommonJS import
 * // import type { SocialMessagingClientConfig } from "@aws-sdk/client-socialmessaging";
 * const config = {}; // type is SocialMessagingClientConfig
 * const client = new SocialMessagingClient(config);
 * const input = { // GetLinkedWhatsAppBusinessAccountPhoneNumberInput
 *   id: "STRING_VALUE", // required
 * };
 * const command = new GetLinkedWhatsAppBusinessAccountPhoneNumberCommand(input);
 * const response = await client.send(command);
 * // { // GetLinkedWhatsAppBusinessAccountPhoneNumberOutput
 * //   phoneNumber: { // WhatsAppPhoneNumberDetail
 * //     arn: "STRING_VALUE", // required
 * //     phoneNumber: "STRING_VALUE", // required
 * //     phoneNumberId: "STRING_VALUE", // required
 * //     metaPhoneNumberId: "STRING_VALUE", // required
 * //     displayPhoneNumberName: "STRING_VALUE", // required
 * //     displayPhoneNumber: "STRING_VALUE", // required
 * //     qualityRating: "STRING_VALUE", // required
 * //     dataLocalizationRegion: "STRING_VALUE",
 * //   },
 * //   linkedWhatsAppBusinessAccountId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetLinkedWhatsAppBusinessAccountPhoneNumberCommandInput - {@link GetLinkedWhatsAppBusinessAccountPhoneNumberCommandInput}
 * @returns {@link GetLinkedWhatsAppBusinessAccountPhoneNumberCommandOutput}
 * @see {@link GetLinkedWhatsAppBusinessAccountPhoneNumberCommandInput} for command's `input` shape.
 * @see {@link GetLinkedWhatsAppBusinessAccountPhoneNumberCommandOutput} for command's `response` shape.
 * @see {@link SocialMessagingClientResolvedConfig | config} for SocialMessagingClient's `config` shape.
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
export class GetLinkedWhatsAppBusinessAccountPhoneNumberCommand extends command<GetLinkedWhatsAppBusinessAccountPhoneNumberCommandInput, GetLinkedWhatsAppBusinessAccountPhoneNumberCommandOutput>(
  _ep0,
  _mw0,
  "GetLinkedWhatsAppBusinessAccountPhoneNumber",
  GetLinkedWhatsAppBusinessAccountPhoneNumber$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetLinkedWhatsAppBusinessAccountPhoneNumberInput;
      output: GetLinkedWhatsAppBusinessAccountPhoneNumberOutput;
    };
    sdk: {
      input: GetLinkedWhatsAppBusinessAccountPhoneNumberCommandInput;
      output: GetLinkedWhatsAppBusinessAccountPhoneNumberCommandOutput;
    };
  };
}
