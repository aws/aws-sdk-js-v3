// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateInAppTemplateRequest, CreateInAppTemplateResponse } from "../models/models_0";
import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { CreateInAppTemplate } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateInAppTemplateCommand}.
 */
export interface CreateInAppTemplateCommandInput extends CreateInAppTemplateRequest {}
/**
 * @public
 *
 * The output of {@link CreateInAppTemplateCommand}.
 */
export interface CreateInAppTemplateCommandOutput extends CreateInAppTemplateResponse, __MetadataBearer {}

/**
 * <p>Creates a new message template for messages using the in-app message channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, CreateInAppTemplateCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, CreateInAppTemplateCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * // import type { PinpointClientConfig } from "@aws-sdk/client-pinpoint";
 * const config = {}; // type is PinpointClientConfig
 * const client = new PinpointClient(config);
 * const input = { // CreateInAppTemplateRequest
 *   InAppTemplateRequest: { // InAppTemplateRequest
 *     Content: [ // ListOfInAppMessageContent
 *       { // InAppMessageContent
 *         BackgroundColor: "STRING_VALUE",
 *         BodyConfig: { // InAppMessageBodyConfig
 *           Alignment: "LEFT" || "CENTER" || "RIGHT", // required
 *           Body: "STRING_VALUE", // required
 *           TextColor: "STRING_VALUE", // required
 *         },
 *         HeaderConfig: { // InAppMessageHeaderConfig
 *           Alignment: "LEFT" || "CENTER" || "RIGHT", // required
 *           Header: "STRING_VALUE", // required
 *           TextColor: "STRING_VALUE", // required
 *         },
 *         ImageUrl: "STRING_VALUE",
 *         PrimaryBtn: { // InAppMessageButton
 *           Android: { // OverrideButtonConfiguration
 *             ButtonAction: "LINK" || "DEEP_LINK" || "CLOSE", // required
 *             Link: "STRING_VALUE",
 *           },
 *           DefaultConfig: { // DefaultButtonConfiguration
 *             BackgroundColor: "STRING_VALUE",
 *             BorderRadius: Number("int"),
 *             ButtonAction: "LINK" || "DEEP_LINK" || "CLOSE", // required
 *             Link: "STRING_VALUE",
 *             Text: "STRING_VALUE", // required
 *             TextColor: "STRING_VALUE",
 *           },
 *           IOS: {
 *             ButtonAction: "LINK" || "DEEP_LINK" || "CLOSE", // required
 *             Link: "STRING_VALUE",
 *           },
 *           Web: {
 *             ButtonAction: "LINK" || "DEEP_LINK" || "CLOSE", // required
 *             Link: "STRING_VALUE",
 *           },
 *         },
 *         SecondaryBtn: {
 *           Android: {
 *             ButtonAction: "LINK" || "DEEP_LINK" || "CLOSE", // required
 *             Link: "STRING_VALUE",
 *           },
 *           DefaultConfig: {
 *             BackgroundColor: "STRING_VALUE",
 *             BorderRadius: Number("int"),
 *             ButtonAction: "LINK" || "DEEP_LINK" || "CLOSE", // required
 *             Link: "STRING_VALUE",
 *             Text: "STRING_VALUE", // required
 *             TextColor: "STRING_VALUE",
 *           },
 *           IOS: {
 *             ButtonAction: "LINK" || "DEEP_LINK" || "CLOSE", // required
 *             Link: "STRING_VALUE",
 *           },
 *           Web: "<OverrideButtonConfiguration>",
 *         },
 *       },
 *     ],
 *     CustomConfig: { // MapOf__string
 *       "<keys>": "STRING_VALUE",
 *     },
 *     Layout: "BOTTOM_BANNER" || "TOP_BANNER" || "OVERLAYS" || "MOBILE_FEED" || "MIDDLE_BANNER" || "CAROUSEL",
 *     tags: {
 *       "<keys>": "STRING_VALUE",
 *     },
 *     TemplateDescription: "STRING_VALUE",
 *   },
 *   TemplateName: "STRING_VALUE", // required
 * };
 * const command = new CreateInAppTemplateCommand(input);
 * const response = await client.send(command);
 * // { // CreateInAppTemplateResponse
 * //   TemplateCreateMessageBody: { // TemplateCreateMessageBody
 * //     Arn: "STRING_VALUE",
 * //     Message: "STRING_VALUE",
 * //     RequestID: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateInAppTemplateCommandInput - {@link CreateInAppTemplateCommandInput}
 * @returns {@link CreateInAppTemplateCommandOutput}
 * @see {@link CreateInAppTemplateCommandInput} for command's `input` shape.
 * @see {@link CreateInAppTemplateCommandOutput} for command's `response` shape.
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
export class CreateInAppTemplateCommand extends $Command
  .classBuilder<
    CreateInAppTemplateCommandInput,
    CreateInAppTemplateCommandOutput,
    PinpointClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Pinpoint", "CreateInAppTemplate", {})
  .n("PinpointClient", "CreateInAppTemplateCommand")
  .sc(CreateInAppTemplate)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateInAppTemplateRequest;
      output: CreateInAppTemplateResponse;
    };
    sdk: {
      input: CreateInAppTemplateCommandInput;
      output: CreateInAppTemplateCommandOutput;
    };
  };
}
