// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdatePushTemplateRequest, UpdatePushTemplateResponse } from "../models/models_1";
import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { de_UpdatePushTemplateCommand, se_UpdatePushTemplateCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdatePushTemplateCommand}.
 */
export interface UpdatePushTemplateCommandInput extends UpdatePushTemplateRequest {}
/**
 * @public
 *
 * The output of {@link UpdatePushTemplateCommand}.
 */
export interface UpdatePushTemplateCommandOutput extends UpdatePushTemplateResponse, __MetadataBearer {}

/**
 * <p>Updates an existing message template for messages that are sent through a push notification channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, UpdatePushTemplateCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, UpdatePushTemplateCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new PinpointClient(config);
 * const input = { // UpdatePushTemplateRequest
 *   CreateNewVersion: true || false,
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
 *   Version: "STRING_VALUE",
 * };
 * const command = new UpdatePushTemplateCommand(input);
 * const response = await client.send(command);
 * // { // UpdatePushTemplateResponse
 * //   MessageBody: { // MessageBody
 * //     Message: "STRING_VALUE",
 * //     RequestID: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdatePushTemplateCommandInput - {@link UpdatePushTemplateCommandInput}
 * @returns {@link UpdatePushTemplateCommandOutput}
 * @see {@link UpdatePushTemplateCommandInput} for command's `input` shape.
 * @see {@link UpdatePushTemplateCommandOutput} for command's `response` shape.
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
export class UpdatePushTemplateCommand extends $Command
  .classBuilder<
    UpdatePushTemplateCommandInput,
    UpdatePushTemplateCommandOutput,
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
  .s("Pinpoint", "UpdatePushTemplate", {})
  .n("PinpointClient", "UpdatePushTemplateCommand")
  .f(void 0, void 0)
  .ser(se_UpdatePushTemplateCommand)
  .de(de_UpdatePushTemplateCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdatePushTemplateRequest;
      output: UpdatePushTemplateResponse;
    };
    sdk: {
      input: UpdatePushTemplateCommandInput;
      output: UpdatePushTemplateCommandOutput;
    };
  };
}
