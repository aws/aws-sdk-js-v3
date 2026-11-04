// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  CreateWhatsAppMessageTemplateMediaInput,
  CreateWhatsAppMessageTemplateMediaOutput,
} from "../models/models_0";
import { CreateWhatsAppMessageTemplateMedia$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface CreateWhatsAppMessageTemplateMediaCommandOutput extends CreateWhatsAppMessageTemplateMediaOutput, __MetadataBearer {}

/**
 * Uploads media for use in a WhatsApp message template.
 *
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
export class CreateWhatsAppMessageTemplateMediaCommand extends command<CreateWhatsAppMessageTemplateMediaCommandInput, CreateWhatsAppMessageTemplateMediaCommandOutput>(
  _ep0,
  _mw0,
  "CreateWhatsAppMessageTemplateMedia",
  CreateWhatsAppMessageTemplateMedia$
) {
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
