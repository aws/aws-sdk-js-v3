// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AssociateWhatsAppBusinessAccountInput, AssociateWhatsAppBusinessAccountOutput } from "../models/models_0";
import { AssociateWhatsAppBusinessAccount$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AssociateWhatsAppBusinessAccountCommand}.
 */
export interface AssociateWhatsAppBusinessAccountCommandInput extends AssociateWhatsAppBusinessAccountInput {}
/**
 * @public
 *
 * The output of {@link AssociateWhatsAppBusinessAccountCommand}.
 */
export interface AssociateWhatsAppBusinessAccountCommandOutput extends AssociateWhatsAppBusinessAccountOutput, __MetadataBearer {}

/**
 * This is only used through the Amazon Web Services console during sign-up to associate your WhatsApp Business Account to your Amazon Web Services account.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SocialMessagingClient, AssociateWhatsAppBusinessAccountCommand } from "@aws-sdk/client-socialmessaging"; // ES Modules import
 * // const { SocialMessagingClient, AssociateWhatsAppBusinessAccountCommand } = require("@aws-sdk/client-socialmessaging"); // CommonJS import
 * // import type { SocialMessagingClientConfig } from "@aws-sdk/client-socialmessaging";
 * const config = {}; // type is SocialMessagingClientConfig
 * const client = new SocialMessagingClient(config);
 * const input = { // AssociateWhatsAppBusinessAccountInput
 *   signupCallback: { // WhatsAppSignupCallback
 *     accessToken: "STRING_VALUE", // required
 *     callbackUrl: "STRING_VALUE",
 *   },
 *   setupFinalization: { // WhatsAppSetupFinalization
 *     associateInProgressToken: "STRING_VALUE", // required
 *     phoneNumbers: [ // WabaPhoneNumberSetupFinalizationList // required
 *       { // WabaPhoneNumberSetupFinalization
 *         id: "STRING_VALUE", // required
 *         twoFactorPin: "STRING_VALUE", // required
 *         dataLocalizationRegion: "STRING_VALUE",
 *         tags: [ // TagList
 *           { // Tag
 *             key: "STRING_VALUE", // required
 *             value: "STRING_VALUE",
 *           },
 *         ],
 *       },
 *     ],
 *     phoneNumberParent: "STRING_VALUE",
 *     waba: { // WabaSetupFinalization
 *       id: "STRING_VALUE",
 *       eventDestinations: [ // WhatsAppBusinessAccountEventDestinations
 *         { // WhatsAppBusinessAccountEventDestination
 *           eventDestinationArn: "STRING_VALUE", // required
 *           roleArn: "STRING_VALUE",
 *         },
 *       ],
 *       tags: [
 *         {
 *           key: "STRING_VALUE", // required
 *           value: "STRING_VALUE",
 *         },
 *       ],
 *     },
 *   },
 * };
 * const command = new AssociateWhatsAppBusinessAccountCommand(input);
 * const response = await client.send(command);
 * // { // AssociateWhatsAppBusinessAccountOutput
 * //   signupCallbackResult: { // WhatsAppSignupCallbackResult
 * //     associateInProgressToken: "STRING_VALUE",
 * //     linkedAccountsWithIncompleteSetup: { // LinkedAccountWithIncompleteSetup
 * //       "<keys>": { // LinkedWhatsAppBusinessAccountIdMetaData
 * //         accountName: "STRING_VALUE",
 * //         registrationStatus: "COMPLETE" || "INCOMPLETE",
 * //         unregisteredWhatsAppPhoneNumbers: [ // WhatsAppPhoneNumberDetailList
 * //           { // WhatsAppPhoneNumberDetail
 * //             arn: "STRING_VALUE", // required
 * //             phoneNumber: "STRING_VALUE", // required
 * //             phoneNumberId: "STRING_VALUE", // required
 * //             metaPhoneNumberId: "STRING_VALUE", // required
 * //             displayPhoneNumberName: "STRING_VALUE", // required
 * //             displayPhoneNumber: "STRING_VALUE", // required
 * //             qualityRating: "STRING_VALUE", // required
 * //             dataLocalizationRegion: "STRING_VALUE",
 * //           },
 * //         ],
 * //         wabaId: "STRING_VALUE",
 * //       },
 * //     },
 * //   },
 * //   statusCode: Number("int"),
 * //   linkedWhatsAppBusinessAccountId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AssociateWhatsAppBusinessAccountCommandInput - {@link AssociateWhatsAppBusinessAccountCommandInput}
 * @returns {@link AssociateWhatsAppBusinessAccountCommandOutput}
 * @see {@link AssociateWhatsAppBusinessAccountCommandInput} for command's `input` shape.
 * @see {@link AssociateWhatsAppBusinessAccountCommandOutput} for command's `response` shape.
 * @see {@link SocialMessagingClientResolvedConfig | config} for SocialMessagingClient's `config` shape.
 *
 * @throws {@link DependencyException} (server fault)
 *
 * Thrown when performing an action because a dependency would be broken.
 *
 * @throws {@link InvalidParametersException} (client fault)
 *
 * One or more parameters provided to the action are not valid.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The request was denied because it would exceed one or more service quotas or limits.
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
export class AssociateWhatsAppBusinessAccountCommand extends command<AssociateWhatsAppBusinessAccountCommandInput, AssociateWhatsAppBusinessAccountCommandOutput>(
  _ep0,
  _mw0,
  "AssociateWhatsAppBusinessAccount",
  AssociateWhatsAppBusinessAccount$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateWhatsAppBusinessAccountInput;
      output: AssociateWhatsAppBusinessAccountOutput;
    };
    sdk: {
      input: AssociateWhatsAppBusinessAccountCommandInput;
      output: AssociateWhatsAppBusinessAccountCommandOutput;
    };
  };
}
