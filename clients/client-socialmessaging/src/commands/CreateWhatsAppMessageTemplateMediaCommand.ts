// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  CreateWhatsAppMessageTemplateMediaInput,
  CreateWhatsAppMessageTemplateMediaOutput,
} from "../models/models_0";
import { CreateWhatsAppMessageTemplateMedia$ } from "../schemas/schemas_0";
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
 * The input for {@link CreateWhatsAppMessageTemplateMediaCommand}.
 */
export interface CreateWhatsAppMessageTemplateMediaCommandInput extends CreateWhatsAppMessageTemplateMediaInput {}
/**
 * @public
 *
 * The output of {@link CreateWhatsAppMessageTemplateMediaCommand}.
 */
export interface CreateWhatsAppMessageTemplateMediaCommandOutput
  extends CreateWhatsAppMessageTemplateMediaOutput,
    __MetadataBearer {}

/**
 * <p>Uploads media for use in a WhatsApp message template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SocialMessagingClient, CreateWhatsAppMessageTemplateMediaCommand } from "@aws-sdk/client-socialmessaging"; // ES Modules import
 * // const { SocialMessagingClient, CreateWhatsAppMessageTemplateMediaCommand } = require("@aws-sdk/client-socialmessaging"); // CommonJS import
 * // import type { SocialMessagingClientConfig } from "@aws-sdk/client-socialmessaging";
 * const config = {}; // type is SocialMessagingClientConfig
 * const client = new SocialMessagingClient(config);
 * const input = { // CreateWhatsAppMessageTemplateMediaInput
 *   id: "STRING_VALUE", // required
 *   sourceS3File: { // S3File
 *     bucketName: "STRING_VALUE", // required
 *     key: "STRING_VALUE", // required
 *   },
 * };
 * const command = new CreateWhatsAppMessageTemplateMediaCommand(input);
 * const response = await client.send(command);
 * // { // CreateWhatsAppMessageTemplateMediaOutput
 * //   metaHeaderHandle: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateWhatsAppMessageTemplateMediaCommandInput - {@link CreateWhatsAppMessageTemplateMediaCommandInput}
 * @returns {@link CreateWhatsAppMessageTemplateMediaCommandOutput}
 * @see {@link CreateWhatsAppMessageTemplateMediaCommandInput} for command's `input` shape.
 * @see {@link CreateWhatsAppMessageTemplateMediaCommandOutput} for command's `response` shape.
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
export class CreateWhatsAppMessageTemplateMediaCommand extends $Command
  .classBuilder<
    CreateWhatsAppMessageTemplateMediaCommandInput,
    CreateWhatsAppMessageTemplateMediaCommandOutput,
    SocialMessagingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SocialMessagingClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SocialMessaging", "CreateWhatsAppMessageTemplateMedia", {})
  .n("SocialMessagingClient", "CreateWhatsAppMessageTemplateMediaCommand")
  .sc(CreateWhatsAppMessageTemplateMedia$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateWhatsAppMessageTemplateMediaInput;
      output: CreateWhatsAppMessageTemplateMediaOutput;
    };
    sdk: {
      input: CreateWhatsAppMessageTemplateMediaCommandInput;
      output: CreateWhatsAppMessageTemplateMediaCommandOutput;
    };
  };
}
