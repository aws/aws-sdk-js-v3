// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateWhatsAppMessageTemplateFromLibraryInput,
  CreateWhatsAppMessageTemplateFromLibraryOutput,
} from "../models/models_0";
import {
  de_CreateWhatsAppMessageTemplateFromLibraryCommand,
  se_CreateWhatsAppMessageTemplateFromLibraryCommand,
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
 * The input for {@link CreateWhatsAppMessageTemplateFromLibraryCommand}.
 */
export interface CreateWhatsAppMessageTemplateFromLibraryCommandInput
  extends CreateWhatsAppMessageTemplateFromLibraryInput {}
/**
 * @public
 *
 * The output of {@link CreateWhatsAppMessageTemplateFromLibraryCommand}.
 */
export interface CreateWhatsAppMessageTemplateFromLibraryCommandOutput
  extends CreateWhatsAppMessageTemplateFromLibraryOutput,
    __MetadataBearer {}

/**
 * <p>Creates a new WhatsApp message template using a template from Meta's template library.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SocialMessagingClient, CreateWhatsAppMessageTemplateFromLibraryCommand } from "@aws-sdk/client-socialmessaging"; // ES Modules import
 * // const { SocialMessagingClient, CreateWhatsAppMessageTemplateFromLibraryCommand } = require("@aws-sdk/client-socialmessaging"); // CommonJS import
 * // import type { SocialMessagingClientConfig } from "@aws-sdk/client-socialmessaging";
 * const config = {}; // type is SocialMessagingClientConfig
 * const client = new SocialMessagingClient(config);
 * const input = { // CreateWhatsAppMessageTemplateFromLibraryInput
 *   metaLibraryTemplate: { // MetaLibraryTemplate
 *     templateName: "STRING_VALUE", // required
 *     libraryTemplateName: "STRING_VALUE", // required
 *     templateCategory: "STRING_VALUE", // required
 *     templateLanguage: "STRING_VALUE", // required
 *     libraryTemplateButtonInputs: [ // MetaLibraryTemplateButtonInputs
 *       { // LibraryTemplateButtonInput
 *         type: "STRING_VALUE",
 *         phoneNumber: "STRING_VALUE",
 *         url: { // MetaUrlWithSuffixExample
 *           "<keys>": "STRING_VALUE",
 *         },
 *         otpType: "STRING_VALUE",
 *         zeroTapTermsAccepted: true || false,
 *         supportedApps: [ // SupportedApps
 *           { // SupportedApp
 *             "<keys>": "STRING_VALUE",
 *           },
 *         ],
 *       },
 *     ],
 *     libraryTemplateBodyInputs: { // LibraryTemplateBodyInputs
 *       addContactNumber: true || false,
 *       addLearnMoreLink: true || false,
 *       addSecurityRecommendation: true || false,
 *       addTrackPackageLink: true || false,
 *       codeExpirationMinutes: Number("int"),
 *     },
 *   },
 *   id: "STRING_VALUE", // required
 * };
 * const command = new CreateWhatsAppMessageTemplateFromLibraryCommand(input);
 * const response = await client.send(command);
 * // { // CreateWhatsAppMessageTemplateFromLibraryOutput
 * //   metaTemplateId: "STRING_VALUE",
 * //   templateStatus: "STRING_VALUE",
 * //   category: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateWhatsAppMessageTemplateFromLibraryCommandInput - {@link CreateWhatsAppMessageTemplateFromLibraryCommandInput}
 * @returns {@link CreateWhatsAppMessageTemplateFromLibraryCommandOutput}
 * @see {@link CreateWhatsAppMessageTemplateFromLibraryCommandInput} for command's `input` shape.
 * @see {@link CreateWhatsAppMessageTemplateFromLibraryCommandOutput} for command's `response` shape.
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
export class CreateWhatsAppMessageTemplateFromLibraryCommand extends $Command
  .classBuilder<
    CreateWhatsAppMessageTemplateFromLibraryCommandInput,
    CreateWhatsAppMessageTemplateFromLibraryCommandOutput,
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
  .s("SocialMessaging", "CreateWhatsAppMessageTemplateFromLibrary", {})
  .n("SocialMessagingClient", "CreateWhatsAppMessageTemplateFromLibraryCommand")
  .f(void 0, void 0)
  .ser(se_CreateWhatsAppMessageTemplateFromLibraryCommand)
  .de(de_CreateWhatsAppMessageTemplateFromLibraryCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateWhatsAppMessageTemplateFromLibraryInput;
      output: CreateWhatsAppMessageTemplateFromLibraryOutput;
    };
    sdk: {
      input: CreateWhatsAppMessageTemplateFromLibraryCommandInput;
      output: CreateWhatsAppMessageTemplateFromLibraryCommandOutput;
    };
  };
}
