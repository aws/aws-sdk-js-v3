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
 * Get the details of your linked WhatsApp Business Account.
 *
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
 * //     directSendEnforcementStatus: "STRING_VALUE",
 * //     directSendEnforcementStatusExpiresAt: new Date("TIMESTAMP"),
 * //     datasetId: "STRING_VALUE",
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
