// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  AssociateWhatsAppBusinessAccountInput,
  AssociateWhatsAppBusinessAccountInputFilterSensitiveLog,
  AssociateWhatsAppBusinessAccountOutput,
  AssociateWhatsAppBusinessAccountOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  de_AssociateWhatsAppBusinessAccountCommand,
  se_AssociateWhatsAppBusinessAccountCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SocialMessagingClientResolvedConfig } from "../SocialMessagingClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface AssociateWhatsAppBusinessAccountCommandOutput
  extends AssociateWhatsAppBusinessAccountOutput,
    __MetadataBearer {}

/**
 * <p>This is only used through the Amazon Web Services console during sign-up to associate your WhatsApp Business Account to your Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SocialMessagingClient, AssociateWhatsAppBusinessAccountCommand } from "@aws-sdk/client-socialmessaging"; // ES Modules import
 * // const { SocialMessagingClient, AssociateWhatsAppBusinessAccountCommand } = require("@aws-sdk/client-socialmessaging"); // CommonJS import
 * const client = new SocialMessagingClient(config);
 * const input = { // AssociateWhatsAppBusinessAccountInput
 *   signupCallback: { // WhatsAppSignupCallback
 *     accessToken: "STRING_VALUE", // required
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
 * //           },
 * //         ],
 * //         wabaId: "STRING_VALUE",
 * //       },
 * //     },
 * //   },
 * //   statusCode: Number("int"),
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
 *  <p>Thrown when performing an action because a dependency would be broken.</p>
 *
 * @throws {@link InvalidParametersException} (client fault)
 *  <p>One or more parameters provided to the action are not valid.</p>
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
 * @public
 */
export class AssociateWhatsAppBusinessAccountCommand extends $Command
  .classBuilder<
    AssociateWhatsAppBusinessAccountCommandInput,
    AssociateWhatsAppBusinessAccountCommandOutput,
    SocialMessagingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SocialMessagingClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SocialMessaging", "AssociateWhatsAppBusinessAccount", {})
  .n("SocialMessagingClient", "AssociateWhatsAppBusinessAccountCommand")
  .f(AssociateWhatsAppBusinessAccountInputFilterSensitiveLog, AssociateWhatsAppBusinessAccountOutputFilterSensitiveLog)
  .ser(se_AssociateWhatsAppBusinessAccountCommand)
  .de(de_AssociateWhatsAppBusinessAccountCommand)
  .build() {
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
