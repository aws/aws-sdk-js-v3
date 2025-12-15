// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdatePushTemplateRequest, UpdatePushTemplateResponse } from "../models/models_1";
import type { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { UpdatePushTemplate$ } from "../schemas/schemas_0";

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
 * // import type { PinpointClientConfig } from "@aws-sdk/client-pinpoint";
 * const config = {}; // type is PinpointClientConfig
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Pinpoint", "UpdatePushTemplate", {})
  .n("PinpointClient", "UpdatePushTemplateCommand")
  .sc(UpdatePushTemplate$)
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
