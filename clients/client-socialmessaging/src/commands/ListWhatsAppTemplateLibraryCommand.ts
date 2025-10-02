// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListWhatsAppTemplateLibraryInput, ListWhatsAppTemplateLibraryOutput } from "../models/models_0";
import {
  de_ListWhatsAppTemplateLibraryCommand,
  se_ListWhatsAppTemplateLibraryCommand,
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
 * The input for {@link ListWhatsAppTemplateLibraryCommand}.
 */
export interface ListWhatsAppTemplateLibraryCommandInput extends ListWhatsAppTemplateLibraryInput {}
/**
 * @public
 *
 * The output of {@link ListWhatsAppTemplateLibraryCommand}.
 */
export interface ListWhatsAppTemplateLibraryCommandOutput extends ListWhatsAppTemplateLibraryOutput, __MetadataBearer {}

/**
 * <p>Lists templates available in Meta's template library for WhatsApp messaging.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SocialMessagingClient, ListWhatsAppTemplateLibraryCommand } from "@aws-sdk/client-socialmessaging"; // ES Modules import
 * // const { SocialMessagingClient, ListWhatsAppTemplateLibraryCommand } = require("@aws-sdk/client-socialmessaging"); // CommonJS import
 * // import type { SocialMessagingClientConfig } from "@aws-sdk/client-socialmessaging";
 * const config = {}; // type is SocialMessagingClientConfig
 * const client = new SocialMessagingClient(config);
 * const input = { // ListWhatsAppTemplateLibraryInput
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   id: "STRING_VALUE", // required
 *   filters: { // Filter
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new ListWhatsAppTemplateLibraryCommand(input);
 * const response = await client.send(command);
 * // { // ListWhatsAppTemplateLibraryOutput
 * //   metaLibraryTemplates: [ // MetaLibraryTemplatesList
 * //     { // MetaLibraryTemplateDefinition
 * //       templateName: "STRING_VALUE",
 * //       templateLanguage: "STRING_VALUE",
 * //       templateCategory: "STRING_VALUE",
 * //       templateTopic: "STRING_VALUE",
 * //       templateUseCase: "STRING_VALUE",
 * //       templateIndustry: [ // MetaIndustries
 * //         "STRING_VALUE",
 * //       ],
 * //       templateHeader: "STRING_VALUE",
 * //       templateBody: "STRING_VALUE",
 * //       templateButtons: [ // MetaLibraryTemplateButtonList
 * //         { // LibraryTemplateButtonList
 * //           type: "STRING_VALUE",
 * //           text: "STRING_VALUE",
 * //           phoneNumber: "STRING_VALUE",
 * //           url: "STRING_VALUE",
 * //           otpType: "STRING_VALUE",
 * //           zeroTapTermsAccepted: true || false,
 * //           supportedApps: [ // SupportedApps
 * //             { // SupportedApp
 * //               "<keys>": "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //       templateId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListWhatsAppTemplateLibraryCommandInput - {@link ListWhatsAppTemplateLibraryCommandInput}
 * @returns {@link ListWhatsAppTemplateLibraryCommandOutput}
 * @see {@link ListWhatsAppTemplateLibraryCommandInput} for command's `input` shape.
 * @see {@link ListWhatsAppTemplateLibraryCommandOutput} for command's `response` shape.
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
export class ListWhatsAppTemplateLibraryCommand extends $Command
  .classBuilder<
    ListWhatsAppTemplateLibraryCommandInput,
    ListWhatsAppTemplateLibraryCommandOutput,
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
  .s("SocialMessaging", "ListWhatsAppTemplateLibrary", {})
  .n("SocialMessagingClient", "ListWhatsAppTemplateLibraryCommand")
  .f(void 0, void 0)
  .ser(se_ListWhatsAppTemplateLibraryCommand)
  .de(de_ListWhatsAppTemplateLibraryCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListWhatsAppTemplateLibraryInput;
      output: ListWhatsAppTemplateLibraryOutput;
    };
    sdk: {
      input: ListWhatsAppTemplateLibraryCommandInput;
      output: ListWhatsAppTemplateLibraryCommandOutput;
    };
  };
}
