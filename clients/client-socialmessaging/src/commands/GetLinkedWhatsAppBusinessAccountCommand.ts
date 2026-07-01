// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetLinkedWhatsAppBusinessAccountInput, GetLinkedWhatsAppBusinessAccountOutput } from "../models/models_0";
import { GetLinkedWhatsAppBusinessAccount$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetLinkedWhatsAppBusinessAccountCommand}.
 */
export interface GetLinkedWhatsAppBusinessAccountCommandInput extends GetLinkedWhatsAppBusinessAccountInput {}
/**
 * @public
 *
 * The output of {@link GetLinkedWhatsAppBusinessAccountCommand}.
 */
export interface GetLinkedWhatsAppBusinessAccountCommandOutput extends GetLinkedWhatsAppBusinessAccountOutput, __MetadataBearer {}

/**
 * <p>Get the details of your linked WhatsApp Business Account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SocialMessagingClient, GetLinkedWhatsAppBusinessAccountCommand } from "@aws-sdk/client-socialmessaging"; // ES Modules import
 * // const { SocialMessagingClient, GetLinkedWhatsAppBusinessAccountCommand } = require("@aws-sdk/client-socialmessaging"); // CommonJS import
 * // import type { SocialMessagingClientConfig } from "@aws-sdk/client-socialmessaging";
 * const config = {}; // type is SocialMessagingClientConfig
 * const client = new SocialMessagingClient(config);
 * const input = { // GetLinkedWhatsAppBusinessAccountInput
 *   id: "STRING_VALUE", // required
 * };
 * const command = new GetLinkedWhatsAppBusinessAccountCommand(input);
 * const response = await client.send(command);
 * // { // GetLinkedWhatsAppBusinessAccountOutput
 * //   account: { // LinkedWhatsAppBusinessAccount
 * //     arn: "STRING_VALUE", // required
 * //     id: "STRING_VALUE", // required
 * //     wabaId: "STRING_VALUE", // required
 * //     registrationStatus: "COMPLETE" || "INCOMPLETE", // required
 * //     linkDate: new Date("TIMESTAMP"), // required
 * //     wabaName: "STRING_VALUE", // required
 * //     eventDestinations: [ // WhatsAppBusinessAccountEventDestinations // required
 * //       { // WhatsAppBusinessAccountEventDestination
 * //         eventDestinationArn: "STRING_VALUE", // required
 * //         roleArn: "STRING_VALUE",
 * //       },
 * //     ],
 * //     marketingMessagesOnboardingStatus: "STRING_VALUE",
 * //     phoneNumbers: [ // WhatsAppPhoneNumberSummaryList // required
 * //       { // WhatsAppPhoneNumberSummary
 * //         arn: "STRING_VALUE", // required
 * //         phoneNumber: "STRING_VALUE", // required
 * //         phoneNumberId: "STRING_VALUE", // required
 * //         metaPhoneNumberId: "STRING_VALUE", // required
 * //         displayPhoneNumberName: "STRING_VALUE", // required
 * //         displayPhoneNumber: "STRING_VALUE", // required
 * //         qualityRating: "STRING_VALUE", // required
 * //         dataLocalizationRegion: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetLinkedWhatsAppBusinessAccountCommandInput - {@link GetLinkedWhatsAppBusinessAccountCommandInput}
 * @returns {@link GetLinkedWhatsAppBusinessAccountCommandOutput}
 * @see {@link GetLinkedWhatsAppBusinessAccountCommandInput} for command's `input` shape.
 * @see {@link GetLinkedWhatsAppBusinessAccountCommandOutput} for command's `response` shape.
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
export class GetLinkedWhatsAppBusinessAccountCommand extends command<GetLinkedWhatsAppBusinessAccountCommandInput, GetLinkedWhatsAppBusinessAccountCommandOutput>(
  _ep0,
  _mw0,
  "GetLinkedWhatsAppBusinessAccount",
  GetLinkedWhatsAppBusinessAccount$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetLinkedWhatsAppBusinessAccountInput;
      output: GetLinkedWhatsAppBusinessAccountOutput;
    };
    sdk: {
      input: GetLinkedWhatsAppBusinessAccountCommandInput;
      output: GetLinkedWhatsAppBusinessAccountCommandOutput;
    };
  };
}
