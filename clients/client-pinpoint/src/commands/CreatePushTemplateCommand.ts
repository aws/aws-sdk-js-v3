// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreatePushTemplateRequest, CreatePushTemplateResponse } from "../models/models_0";
import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { CreatePushTemplate } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreatePushTemplateCommand}.
 */
export interface CreatePushTemplateCommandInput extends CreatePushTemplateRequest {}
/**
 * @public
 *
 * The output of {@link CreatePushTemplateCommand}.
 */
export interface CreatePushTemplateCommandOutput extends CreatePushTemplateResponse, __MetadataBearer {}

/**
 * <p>Creates a message template for messages that are sent through a push notification channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, CreatePushTemplateCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, CreatePushTemplateCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * // import type { PinpointClientConfig } from "@aws-sdk/client-pinpoint";
 * const config = {}; // type is PinpointClientConfig
 * const client = new PinpointClient(config);
 * const input = { // CreatePushTemplateRequest
 *   PushNotificationTemplateRequest: { // PushNotificationTemplateRequest
 *     ADM: { // AndroidPushNotificationTemplate
 *       Action: "OPEN_APP" || "DEEP_LINK" || "URL",
 *       Body: "STRING_VALUE",
 *       ImageIconUrl: "STRING_VALUE",
 *       ImageUrl: "STRING_VALUE",
 *       RawContent: "STRING_VALUE",
 *       SmallImageIconUrl: "STRING_VALUE",
 *       Sound: "STRING_VALUE",
 *       Title: "STRING_VALUE",
 *       Url: "STRING_VALUE",
 *     },
 *     APNS: { // APNSPushNotificationTemplate
 *       Action: "OPEN_APP" || "DEEP_LINK" || "URL",
 *       Body: "STRING_VALUE",
 *       MediaUrl: "STRING_VALUE",
 *       RawContent: "STRING_VALUE",
 *       Sound: "STRING_VALUE",
 *       Title: "STRING_VALUE",
 *       Url: "STRING_VALUE",
 *     },
 *     Baidu: {
 *       Action: "OPEN_APP" || "DEEP_LINK" || "URL",
 *       Body: "STRING_VALUE",
 *       ImageIconUrl: "STRING_VALUE",
 *       ImageUrl: "STRING_VALUE",
 *       RawContent: "STRING_VALUE",
 *       SmallImageIconUrl: "STRING_VALUE",
 *       Sound: "STRING_VALUE",
 *       Title: "STRING_VALUE",
 *       Url: "STRING_VALUE",
 *     },
 *     Default: { // DefaultPushNotificationTemplate
 *       Action: "OPEN_APP" || "DEEP_LINK" || "URL",
 *       Body: "STRING_VALUE",
 *       Sound: "STRING_VALUE",
 *       Title: "STRING_VALUE",
 *       Url: "STRING_VALUE",
 *     },
 *     DefaultSubstitutions: "STRING_VALUE",
 *     GCM: {
 *       Action: "OPEN_APP" || "DEEP_LINK" || "URL",
 *       Body: "STRING_VALUE",
 *       ImageIconUrl: "STRING_VALUE",
 *       ImageUrl: "STRING_VALUE",
 *       RawContent: "STRING_VALUE",
 *       SmallImageIconUrl: "STRING_VALUE",
 *       Sound: "STRING_VALUE",
 *       Title: "STRING_VALUE",
 *       Url: "STRING_VALUE",
 *     },
 *     RecommenderId: "STRING_VALUE",
 *     tags: { // MapOf__string
 *       "<keys>": "STRING_VALUE",
 *     },
 *     TemplateDescription: "STRING_VALUE",
 *   },
 *   TemplateName: "STRING_VALUE", // required
 * };
 * const command = new CreatePushTemplateCommand(input);
 * const response = await client.send(command);
 * // { // CreatePushTemplateResponse
 * //   CreateTemplateMessageBody: { // CreateTemplateMessageBody
 * //     Arn: "STRING_VALUE",
 * //     Message: "STRING_VALUE",
 * //     RequestID: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreatePushTemplateCommandInput - {@link CreatePushTemplateCommandInput}
 * @returns {@link CreatePushTemplateCommandOutput}
 * @see {@link CreatePushTemplateCommandInput} for command's `input` shape.
 * @see {@link CreatePushTemplateCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for PinpointClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link MethodNotAllowedException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link PinpointServiceException}
 * <p>Base exception class for all service exceptions from Pinpoint service.</p>
 *
 *
 * @public
 */
export class CreatePushTemplateCommand extends $Command
  .classBuilder<
    CreatePushTemplateCommandInput,
    CreatePushTemplateCommandOutput,
    PinpointClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Pinpoint", "CreatePushTemplate", {})
  .n("PinpointClient", "CreatePushTemplateCommand")
  .sc(CreatePushTemplate)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreatePushTemplateRequest;
      output: CreatePushTemplateResponse;
    };
    sdk: {
      input: CreatePushTemplateCommandInput;
      output: CreatePushTemplateCommandOutput;
    };
  };
}
