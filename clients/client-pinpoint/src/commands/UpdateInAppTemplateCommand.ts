// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateInAppTemplateRequest, UpdateInAppTemplateResponse } from "../models/models_1";
import type { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { UpdateInAppTemplate } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateInAppTemplateCommand}.
 */
export interface UpdateInAppTemplateCommandInput extends UpdateInAppTemplateRequest {}
/**
 * @public
 *
 * The output of {@link UpdateInAppTemplateCommand}.
 */
export interface UpdateInAppTemplateCommandOutput extends UpdateInAppTemplateResponse, __MetadataBearer {}

/**
 * <p>Updates an existing message template for messages sent through the in-app message channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, UpdateInAppTemplateCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, UpdateInAppTemplateCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * // import type { PinpointClientConfig } from "@aws-sdk/client-pinpoint";
 * const config = {}; // type is PinpointClientConfig
 * const client = new PinpointClient(config);
 * const input = { // UpdateInAppTemplateRequest
 *   CreateNewVersion: true || false,
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
 *   Version: "STRING_VALUE",
 * };
 * const command = new UpdateInAppTemplateCommand(input);
 * const response = await client.send(command);
 * // { // UpdateInAppTemplateResponse
 * //   MessageBody: { // MessageBody
 * //     Message: "STRING_VALUE",
 * //     RequestID: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateInAppTemplateCommandInput - {@link UpdateInAppTemplateCommandInput}
 * @returns {@link UpdateInAppTemplateCommandOutput}
 * @see {@link UpdateInAppTemplateCommandInput} for command's `input` shape.
 * @see {@link UpdateInAppTemplateCommandOutput} for command's `response` shape.
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
export class UpdateInAppTemplateCommand extends $Command
  .classBuilder<
    UpdateInAppTemplateCommandInput,
    UpdateInAppTemplateCommandOutput,
    PinpointClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Pinpoint", "UpdateInAppTemplate", {})
  .n("PinpointClient", "UpdateInAppTemplateCommand")
  .sc(UpdateInAppTemplate)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateInAppTemplateRequest;
      output: UpdateInAppTemplateResponse;
    };
    sdk: {
      input: UpdateInAppTemplateCommandInput;
      output: UpdateInAppTemplateCommandOutput;
    };
  };
}
