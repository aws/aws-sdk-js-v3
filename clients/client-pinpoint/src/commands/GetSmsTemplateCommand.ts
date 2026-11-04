// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetSmsTemplateRequest, GetSmsTemplateResponse } from "../models/models_1";
import { GetSmsTemplate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetSmsTemplateCommand}.
 */
export interface GetSmsTemplateCommandInput extends GetSmsTemplateRequest {}
/**
 * @public
 *
 * The output of {@link GetSmsTemplateCommand}.
 */
export interface GetSmsTemplateCommandOutput extends GetSmsTemplateResponse, __MetadataBearer {}

/**
 * Retrieves the content and settings of a message template for messages that are sent through the SMS channel.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetSmsTemplateCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetSmsTemplateCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * // import type { PinpointClientConfig } from "@aws-sdk/client-pinpoint";
 * const config = {}; // type is PinpointClientConfig
 * const client = new PinpointClient(config);
 * const input = { // GetSmsTemplateRequest
 *   TemplateName: "STRING_VALUE", // required
 *   Version: "STRING_VALUE",
 * };
 * const command = new GetSmsTemplateCommand(input);
 * const response = await client.send(command);
 * // { // GetSmsTemplateResponse
 * //   SMSTemplateResponse: { // SMSTemplateResponse
 * //     Arn: "STRING_VALUE",
 * //     Body: "STRING_VALUE",
 * //     CreationDate: "STRING_VALUE", // required
 * //     DefaultSubstitutions: "STRING_VALUE",
 * //     LastModifiedDate: "STRING_VALUE", // required
 * //     RecommenderId: "STRING_VALUE",
 * //     tags: { // MapOf__string
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     TemplateDescription: "STRING_VALUE",
 * //     TemplateName: "STRING_VALUE", // required
 * //     TemplateType: "EMAIL" || "SMS" || "VOICE" || "PUSH" || "INAPP", // required
 * //     Version: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetSmsTemplateCommandInput - {@link GetSmsTemplateCommandInput}
 * @returns {@link GetSmsTemplateCommandOutput}
 * @see {@link GetSmsTemplateCommandInput} for command's `input` shape.
 * @see {@link GetSmsTemplateCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for PinpointClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * Provides information about an API request or response.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * Provides information about an API request or response.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *
 * Provides information about an API request or response.
 *
 * @throws {@link MethodNotAllowedException} (client fault)
 *
 * Provides information about an API request or response.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * Provides information about an API request or response.
 *
 * @throws {@link PayloadTooLargeException} (client fault)
 *
 * Provides information about an API request or response.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * Provides information about an API request or response.
 *
 * @throws {@link PinpointServiceException}
 *
 * Base exception class for all service exceptions from Pinpoint service.
 *
 * @public
 */
export class GetSmsTemplateCommand extends command<GetSmsTemplateCommandInput, GetSmsTemplateCommandOutput>(
  _ep0,
  _mw0,
  "GetSmsTemplate",
  GetSmsTemplate$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSmsTemplateRequest;
      output: GetSmsTemplateResponse;
    };
    sdk: {
      input: GetSmsTemplateCommandInput;
      output: GetSmsTemplateCommandOutput;
    };
  };
}
