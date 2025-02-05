// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetPushTemplateRequest, GetPushTemplateResponse } from "../models/models_1";
import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { de_GetPushTemplateCommand, se_GetPushTemplateCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetPushTemplateCommand}.
 */
export interface GetPushTemplateCommandInput extends GetPushTemplateRequest {}
/**
 * @public
 *
 * The output of {@link GetPushTemplateCommand}.
 */
export interface GetPushTemplateCommandOutput extends GetPushTemplateResponse, __MetadataBearer {}

/**
 * <p>Retrieves the content and settings of a message template for messages that are sent through a push notification channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetPushTemplateCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetPushTemplateCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new PinpointClient(config);
 * const input = { // GetPushTemplateRequest
 *   TemplateName: "STRING_VALUE", // required
 *   Version: "STRING_VALUE",
 * };
 * const command = new GetPushTemplateCommand(input);
 * const response = await client.send(command);
 * // { // GetPushTemplateResponse
 * //   PushNotificationTemplateResponse: { // PushNotificationTemplateResponse
 * //     ADM: { // AndroidPushNotificationTemplate
 * //       Action: "OPEN_APP" || "DEEP_LINK" || "URL",
 * //       Body: "STRING_VALUE",
 * //       ImageIconUrl: "STRING_VALUE",
 * //       ImageUrl: "STRING_VALUE",
 * //       RawContent: "STRING_VALUE",
 * //       SmallImageIconUrl: "STRING_VALUE",
 * //       Sound: "STRING_VALUE",
 * //       Title: "STRING_VALUE",
 * //       Url: "STRING_VALUE",
 * //     },
 * //     APNS: { // APNSPushNotificationTemplate
 * //       Action: "OPEN_APP" || "DEEP_LINK" || "URL",
 * //       Body: "STRING_VALUE",
 * //       MediaUrl: "STRING_VALUE",
 * //       RawContent: "STRING_VALUE",
 * //       Sound: "STRING_VALUE",
 * //       Title: "STRING_VALUE",
 * //       Url: "STRING_VALUE",
 * //     },
 * //     Arn: "STRING_VALUE",
 * //     Baidu: {
 * //       Action: "OPEN_APP" || "DEEP_LINK" || "URL",
 * //       Body: "STRING_VALUE",
 * //       ImageIconUrl: "STRING_VALUE",
 * //       ImageUrl: "STRING_VALUE",
 * //       RawContent: "STRING_VALUE",
 * //       SmallImageIconUrl: "STRING_VALUE",
 * //       Sound: "STRING_VALUE",
 * //       Title: "STRING_VALUE",
 * //       Url: "STRING_VALUE",
 * //     },
 * //     CreationDate: "STRING_VALUE", // required
 * //     Default: { // DefaultPushNotificationTemplate
 * //       Action: "OPEN_APP" || "DEEP_LINK" || "URL",
 * //       Body: "STRING_VALUE",
 * //       Sound: "STRING_VALUE",
 * //       Title: "STRING_VALUE",
 * //       Url: "STRING_VALUE",
 * //     },
 * //     DefaultSubstitutions: "STRING_VALUE",
 * //     GCM: {
 * //       Action: "OPEN_APP" || "DEEP_LINK" || "URL",
 * //       Body: "STRING_VALUE",
 * //       ImageIconUrl: "STRING_VALUE",
 * //       ImageUrl: "STRING_VALUE",
 * //       RawContent: "STRING_VALUE",
 * //       SmallImageIconUrl: "STRING_VALUE",
 * //       Sound: "STRING_VALUE",
 * //       Title: "STRING_VALUE",
 * //       Url: "STRING_VALUE",
 * //     },
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
 * @param GetPushTemplateCommandInput - {@link GetPushTemplateCommandInput}
 * @returns {@link GetPushTemplateCommandOutput}
 * @see {@link GetPushTemplateCommandInput} for command's `input` shape.
 * @see {@link GetPushTemplateCommandOutput} for command's `response` shape.
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
 * @throws {@link NotFoundException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link PayloadTooLargeException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link PinpointServiceException}
 * <p>Base exception class for all service exceptions from Pinpoint service.</p>
 *
 * @public
 */
export class GetPushTemplateCommand extends $Command
  .classBuilder<
    GetPushTemplateCommandInput,
    GetPushTemplateCommandOutput,
    PinpointClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Pinpoint", "GetPushTemplate", {})
  .n("PinpointClient", "GetPushTemplateCommand")
  .f(void 0, void 0)
  .ser(se_GetPushTemplateCommand)
  .de(de_GetPushTemplateCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetPushTemplateRequest;
      output: GetPushTemplateResponse;
    };
    sdk: {
      input: GetPushTemplateCommandInput;
      output: GetPushTemplateCommandOutput;
    };
  };
}
