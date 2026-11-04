// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetInAppTemplateRequest, GetInAppTemplateResponse } from "../models/models_0";
import { GetInAppTemplate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetInAppTemplateCommand}.
 */
export interface GetInAppTemplateCommandInput extends GetInAppTemplateRequest {}
/**
 * @public
 *
 * The output of {@link GetInAppTemplateCommand}.
 */
export interface GetInAppTemplateCommandOutput extends GetInAppTemplateResponse, __MetadataBearer {}

/**
 * Retrieves the content and settings of a message template for messages sent through the in-app channel.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetInAppTemplateCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetInAppTemplateCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * // import type { PinpointClientConfig } from "@aws-sdk/client-pinpoint";
 * const config = {}; // type is PinpointClientConfig
 * const client = new PinpointClient(config);
 * const input = { // GetInAppTemplateRequest
 *   TemplateName: "STRING_VALUE", // required
 *   Version: "STRING_VALUE",
 * };
 * const command = new GetInAppTemplateCommand(input);
 * const response = await client.send(command);
 * // { // GetInAppTemplateResponse
 * //   InAppTemplateResponse: { // InAppTemplateResponse
 * //     Arn: "STRING_VALUE",
 * //     Content: [ // ListOfInAppMessageContent
 * //       { // InAppMessageContent
 * //         BackgroundColor: "STRING_VALUE",
 * //         BodyConfig: { // InAppMessageBodyConfig
 * //           Alignment: "LEFT" || "CENTER" || "RIGHT", // required
 * //           Body: "STRING_VALUE", // required
 * //           TextColor: "STRING_VALUE", // required
 * //         },
 * //         HeaderConfig: { // InAppMessageHeaderConfig
 * //           Alignment: "LEFT" || "CENTER" || "RIGHT", // required
 * //           Header: "STRING_VALUE", // required
 * //           TextColor: "STRING_VALUE", // required
 * //         },
 * //         ImageUrl: "STRING_VALUE",
 * //         PrimaryBtn: { // InAppMessageButton
 * //           Android: { // OverrideButtonConfiguration
 * //             ButtonAction: "LINK" || "DEEP_LINK" || "CLOSE", // required
 * //             Link: "STRING_VALUE",
 * //           },
 * //           DefaultConfig: { // DefaultButtonConfiguration
 * //             BackgroundColor: "STRING_VALUE",
 * //             BorderRadius: Number("int"),
 * //             ButtonAction: "LINK" || "DEEP_LINK" || "CLOSE", // required
 * //             Link: "STRING_VALUE",
 * //             Text: "STRING_VALUE", // required
 * //             TextColor: "STRING_VALUE",
 * //           },
 * //           IOS: {
 * //             ButtonAction: "LINK" || "DEEP_LINK" || "CLOSE", // required
 * //             Link: "STRING_VALUE",
 * //           },
 * //           Web: {
 * //             ButtonAction: "LINK" || "DEEP_LINK" || "CLOSE", // required
 * //             Link: "STRING_VALUE",
 * //           },
 * //         },
 * //         SecondaryBtn: {
 * //           Android: {
 * //             ButtonAction: "LINK" || "DEEP_LINK" || "CLOSE", // required
 * //             Link: "STRING_VALUE",
 * //           },
 * //           DefaultConfig: {
 * //             BackgroundColor: "STRING_VALUE",
 * //             BorderRadius: Number("int"),
 * //             ButtonAction: "LINK" || "DEEP_LINK" || "CLOSE", // required
 * //             Link: "STRING_VALUE",
 * //             Text: "STRING_VALUE", // required
 * //             TextColor: "STRING_VALUE",
 * //           },
 * //           IOS: {
 * //             ButtonAction: "LINK" || "DEEP_LINK" || "CLOSE", // required
 * //             Link: "STRING_VALUE",
 * //           },
 * //           Web: "<OverrideButtonConfiguration>",
 * //         },
 * //       },
 * //     ],
 * //     CreationDate: "STRING_VALUE", // required
 * //     CustomConfig: { // MapOf__string
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     LastModifiedDate: "STRING_VALUE", // required
 * //     Layout: "BOTTOM_BANNER" || "TOP_BANNER" || "OVERLAYS" || "MOBILE_FEED" || "MIDDLE_BANNER" || "CAROUSEL",
 * //     tags: {
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
 * @param GetInAppTemplateCommandInput - {@link GetInAppTemplateCommandInput}
 * @returns {@link GetInAppTemplateCommandOutput}
 * @see {@link GetInAppTemplateCommandInput} for command's `input` shape.
 * @see {@link GetInAppTemplateCommandOutput} for command's `response` shape.
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
export class GetInAppTemplateCommand extends command<GetInAppTemplateCommandInput, GetInAppTemplateCommandOutput>(
  _ep0,
  _mw0,
  "GetInAppTemplate",
  GetInAppTemplate$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetInAppTemplateRequest;
      output: GetInAppTemplateResponse;
    };
    sdk: {
      input: GetInAppTemplateCommandInput;
      output: GetInAppTemplateCommandOutput;
    };
  };
}
