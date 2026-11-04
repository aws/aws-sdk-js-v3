// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateTemplateRequest, CreateTemplateResponse } from "../models/models_0";
import { CreateTemplate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateTemplateCommand}.
 */
export interface CreateTemplateCommandInput extends CreateTemplateRequest {}
/**
 * @public
 *
 * The output of {@link CreateTemplateCommand}.
 */
export interface CreateTemplateCommandOutput extends CreateTemplateResponse, __MetadataBearer {}

/**
 * Creates an email template. Email templates enable you to send personalized email to one or more destinations in a single operation. For more information, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/send-personalized-email-api.html).
 *
 * You can execute this operation no more than once per second.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, CreateTemplateCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, CreateTemplateCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * // import type { SESClientConfig } from "@aws-sdk/client-ses";
 * const config = {}; // type is SESClientConfig
 * const client = new SESClient(config);
 * const input = { // CreateTemplateRequest
 *   Template: { // Template
 *     TemplateName: "STRING_VALUE", // required
 *     SubjectPart: "STRING_VALUE",
 *     TextPart: "STRING_VALUE",
 *     HtmlPart: "STRING_VALUE",
 *   },
 * };
 * const command = new CreateTemplateCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateTemplateCommandInput - {@link CreateTemplateCommandInput}
 * @returns {@link CreateTemplateCommandOutput}
 * @see {@link CreateTemplateCommandInput} for command's `input` shape.
 * @see {@link CreateTemplateCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *
 * Indicates that a resource could not be created because of a naming conflict.
 *
 * @throws {@link InvalidTemplateException} (client fault)
 *
 * Indicates that the template that you specified could not be rendered. This issue may occur when a template refers to a partial that does not exist.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * Indicates that a resource could not be created because of service limits. For a list of Amazon SES limits, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/limits.html).
 *
 * @throws {@link SESServiceException}
 *
 * Base exception class for all service exceptions from SES service.
 *
 * @public
 */
export class CreateTemplateCommand extends command<CreateTemplateCommandInput, CreateTemplateCommandOutput>(
  _ep0,
  _mw0,
  "CreateTemplate",
  CreateTemplate$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateTemplateRequest;
      output: {};
    };
    sdk: {
      input: CreateTemplateCommandInput;
      output: CreateTemplateCommandOutput;
    };
  };
}
