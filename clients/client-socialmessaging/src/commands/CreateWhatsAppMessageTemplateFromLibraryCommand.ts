// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  CreateWhatsAppMessageTemplateFromLibraryInput,
  CreateWhatsAppMessageTemplateFromLibraryOutput,
} from "../models/models_0";
import { CreateWhatsAppMessageTemplateFromLibrary$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateWhatsAppMessageTemplateFromLibraryCommand}.
 */
export interface CreateWhatsAppMessageTemplateFromLibraryCommandInput extends CreateWhatsAppMessageTemplateFromLibraryInput {}
/**
 * @public
 *
 * The output of {@link CreateWhatsAppMessageTemplateFromLibraryCommand}.
 */
export interface CreateWhatsAppMessageTemplateFromLibraryCommandOutput extends CreateWhatsAppMessageTemplateFromLibraryOutput, __MetadataBearer {}

/**
 * Creates a new WhatsApp message template using a template from Meta's template library.
 *
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
export class CreateWhatsAppMessageTemplateFromLibraryCommand extends command<CreateWhatsAppMessageTemplateFromLibraryCommandInput, CreateWhatsAppMessageTemplateFromLibraryCommandOutput>(
  _ep0,
  _mw0,
  "CreateWhatsAppMessageTemplateFromLibrary",
  CreateWhatsAppMessageTemplateFromLibrary$
) {
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
