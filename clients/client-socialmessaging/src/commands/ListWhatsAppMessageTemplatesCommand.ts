// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListWhatsAppMessageTemplatesInput, ListWhatsAppMessageTemplatesOutput } from "../models/models_0";
import { ListWhatsAppMessageTemplates } from "../schemas/schemas_0";
import type {
  ServiceInputTypes,
  ServiceOutputTypes,
  SocialMessagingClientResolvedConfig,
} from "../SocialMessagingClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListWhatsAppMessageTemplatesCommand}.
 */
export interface ListWhatsAppMessageTemplatesCommandInput extends ListWhatsAppMessageTemplatesInput {}
/**
 * @public
 *
 * The output of {@link ListWhatsAppMessageTemplatesCommand}.
 */
export interface ListWhatsAppMessageTemplatesCommandOutput
  extends ListWhatsAppMessageTemplatesOutput,
    __MetadataBearer {}

/**
 * <p>Lists WhatsApp message templates for a specific WhatsApp Business Account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SocialMessagingClient, ListWhatsAppMessageTemplatesCommand } from "@aws-sdk/client-socialmessaging"; // ES Modules import
 * // const { SocialMessagingClient, ListWhatsAppMessageTemplatesCommand } = require("@aws-sdk/client-socialmessaging"); // CommonJS import
 * // import type { SocialMessagingClientConfig } from "@aws-sdk/client-socialmessaging";
 * const config = {}; // type is SocialMessagingClientConfig
 * const client = new SocialMessagingClient(config);
 * const input = { // ListWhatsAppMessageTemplatesInput
 *   id: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListWhatsAppMessageTemplatesCommand(input);
 * const response = await client.send(command);
 * // { // ListWhatsAppMessageTemplatesOutput
 * //   templates: [ // TemplateSummaryList
 * //     { // TemplateSummary
 * //       templateName: "STRING_VALUE",
 * //       metaTemplateId: "STRING_VALUE",
 * //       templateStatus: "STRING_VALUE",
 * //       templateQualityScore: "STRING_VALUE",
 * //       templateLanguage: "STRING_VALUE",
 * //       templateCategory: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListWhatsAppMessageTemplatesCommandInput - {@link ListWhatsAppMessageTemplatesCommandInput}
 * @returns {@link ListWhatsAppMessageTemplatesCommandOutput}
 * @see {@link ListWhatsAppMessageTemplatesCommandInput} for command's `input` shape.
 * @see {@link ListWhatsAppMessageTemplatesCommandOutput} for command's `response` shape.
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
export class ListWhatsAppMessageTemplatesCommand extends $Command
  .classBuilder<
    ListWhatsAppMessageTemplatesCommandInput,
    ListWhatsAppMessageTemplatesCommandOutput,
    SocialMessagingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SocialMessagingClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SocialMessaging", "ListWhatsAppMessageTemplates", {})
  .n("SocialMessagingClient", "ListWhatsAppMessageTemplatesCommand")
  .sc(ListWhatsAppMessageTemplates)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListWhatsAppMessageTemplatesInput;
      output: ListWhatsAppMessageTemplatesOutput;
    };
    sdk: {
      input: ListWhatsAppMessageTemplatesCommandInput;
      output: ListWhatsAppMessageTemplatesCommandOutput;
    };
  };
}
