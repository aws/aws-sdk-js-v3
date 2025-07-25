// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateWhatsAppMessageTemplateMediaInput,
  CreateWhatsAppMessageTemplateMediaInputFilterSensitiveLog,
  CreateWhatsAppMessageTemplateMediaOutput,
} from "../models/models_0";
import {
  de_CreateWhatsAppMessageTemplateMediaCommand,
  se_CreateWhatsAppMessageTemplateMediaCommand,
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SocialMessaging", "CreateWhatsAppMessageTemplateMedia", {})
  .n("SocialMessagingClient", "CreateWhatsAppMessageTemplateMediaCommand")
  .f(CreateWhatsAppMessageTemplateMediaInputFilterSensitiveLog, void 0)
  .ser(se_CreateWhatsAppMessageTemplateMediaCommand)
  .de(de_CreateWhatsAppMessageTemplateMediaCommand)
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
