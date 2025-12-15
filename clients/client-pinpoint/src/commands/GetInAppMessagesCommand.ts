// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetInAppMessagesRequest, GetInAppMessagesResponse } from "../models/models_0";
import type { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { GetInAppMessages$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetInAppMessagesCommand}.
 */
export interface GetInAppMessagesCommandInput extends GetInAppMessagesRequest {}
/**
 * @public
 *
 * The output of {@link GetInAppMessagesCommand}.
 */
export interface GetInAppMessagesCommandOutput extends GetInAppMessagesResponse, __MetadataBearer {}

/**
 * <p>Retrieves the in-app messages targeted for the provided endpoint ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetInAppMessagesCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetInAppMessagesCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * // import type { PinpointClientConfig } from "@aws-sdk/client-pinpoint";
 * const config = {}; // type is PinpointClientConfig
 * const client = new PinpointClient(config);
 * const input = { // GetInAppMessagesRequest
 *   ApplicationId: "STRING_VALUE", // required
 *   EndpointId: "STRING_VALUE", // required
 * };
 * const command = new GetInAppMessagesCommand(input);
 * const response = await client.send(command);
 * // { // GetInAppMessagesResponse
 * //   InAppMessagesResponse: { // InAppMessagesResponse
 * //     InAppMessageCampaigns: [ // ListOfInAppMessageCampaign
 * //       { // InAppMessageCampaign
 * //         CampaignId: "STRING_VALUE",
 * //         DailyCap: Number("int"),
 * //         InAppMessage: { // InAppMessage
 * //           Content: [ // ListOfInAppMessageContent
 * //             { // InAppMessageContent
 * //               BackgroundColor: "STRING_VALUE",
 * //               BodyConfig: { // InAppMessageBodyConfig
 * //                 Alignment: "LEFT" || "CENTER" || "RIGHT", // required
 * //                 Body: "STRING_VALUE", // required
 * //                 TextColor: "STRING_VALUE", // required
 * //               },
 * //               HeaderConfig: { // InAppMessageHeaderConfig
 * //                 Alignment: "LEFT" || "CENTER" || "RIGHT", // required
 * //                 Header: "STRING_VALUE", // required
 * //                 TextColor: "STRING_VALUE", // required
 * //               },
 * //               ImageUrl: "STRING_VALUE",
 * //               PrimaryBtn: { // InAppMessageButton
 * //                 Android: { // OverrideButtonConfiguration
 * //                   ButtonAction: "LINK" || "DEEP_LINK" || "CLOSE", // required
 * //                   Link: "STRING_VALUE",
 * //                 },
 * //                 DefaultConfig: { // DefaultButtonConfiguration
 * //                   BackgroundColor: "STRING_VALUE",
 * //                   BorderRadius: Number("int"),
 * //                   ButtonAction: "LINK" || "DEEP_LINK" || "CLOSE", // required
 * //                   Link: "STRING_VALUE",
 * //                   Text: "STRING_VALUE", // required
 * //                   TextColor: "STRING_VALUE",
 * //                 },
 * //                 IOS: {
 * //                   ButtonAction: "LINK" || "DEEP_LINK" || "CLOSE", // required
 * //                   Link: "STRING_VALUE",
 * //                 },
 * //                 Web: {
 * //                   ButtonAction: "LINK" || "DEEP_LINK" || "CLOSE", // required
 * //                   Link: "STRING_VALUE",
 * //                 },
 * //               },
 * //               SecondaryBtn: {
 * //                 Android: {
 * //                   ButtonAction: "LINK" || "DEEP_LINK" || "CLOSE", // required
 * //                   Link: "STRING_VALUE",
 * //                 },
 * //                 DefaultConfig: {
 * //                   BackgroundColor: "STRING_VALUE",
 * //                   BorderRadius: Number("int"),
 * //                   ButtonAction: "LINK" || "DEEP_LINK" || "CLOSE", // required
 * //                   Link: "STRING_VALUE",
 * //                   Text: "STRING_VALUE", // required
 * //                   TextColor: "STRING_VALUE",
 * //                 },
 * //                 IOS: {
 * //                   ButtonAction: "LINK" || "DEEP_LINK" || "CLOSE", // required
 * //                   Link: "STRING_VALUE",
 * //                 },
 * //                 Web: "<OverrideButtonConfiguration>",
 * //               },
 * //             },
 * //           ],
 * //           CustomConfig: { // MapOf__string
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //           Layout: "BOTTOM_BANNER" || "TOP_BANNER" || "OVERLAYS" || "MOBILE_FEED" || "MIDDLE_BANNER" || "CAROUSEL",
 * //         },
 * //         Priority: Number("int"),
 * //         Schedule: { // InAppCampaignSchedule
 * //           EndDate: "STRING_VALUE",
 * //           EventFilter: { // CampaignEventFilter
 * //             Dimensions: { // EventDimensions
 * //               Attributes: { // MapOfAttributeDimension
 * //                 "<keys>": { // AttributeDimension
 * //                   AttributeType: "INCLUSIVE" || "EXCLUSIVE" || "CONTAINS" || "BEFORE" || "AFTER" || "ON" || "BETWEEN",
 * //                   Values: [ // ListOf__string // required
 * //                     "STRING_VALUE",
 * //                   ],
 * //                 },
 * //               },
 * //               EventType: { // SetDimension
 * //                 DimensionType: "INCLUSIVE" || "EXCLUSIVE",
 * //                 Values: [ // required
 * //                   "STRING_VALUE",
 * //                 ],
 * //               },
 * //               Metrics: { // MapOfMetricDimension
 * //                 "<keys>": { // MetricDimension
 * //                   ComparisonOperator: "STRING_VALUE", // required
 * //                   Value: Number("double"), // required
 * //                 },
 * //               },
 * //             },
 * //             FilterType: "SYSTEM" || "ENDPOINT", // required
 * //           },
 * //           QuietTime: { // QuietTime
 * //             End: "STRING_VALUE",
 * //             Start: "STRING_VALUE",
 * //           },
 * //         },
 * //         SessionCap: Number("int"),
 * //         TotalCap: Number("int"),
 * //         TreatmentId: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetInAppMessagesCommandInput - {@link GetInAppMessagesCommandInput}
 * @returns {@link GetInAppMessagesCommandOutput}
 * @see {@link GetInAppMessagesCommandInput} for command's `input` shape.
 * @see {@link GetInAppMessagesCommandOutput} for command's `response` shape.
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
export class GetInAppMessagesCommand extends $Command
  .classBuilder<
    GetInAppMessagesCommandInput,
    GetInAppMessagesCommandOutput,
    PinpointClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Pinpoint", "GetInAppMessages", {})
  .n("PinpointClient", "GetInAppMessagesCommand")
  .sc(GetInAppMessages$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetInAppMessagesRequest;
      output: GetInAppMessagesResponse;
    };
    sdk: {
      input: GetInAppMessagesCommandInput;
      output: GetInAppMessagesCommandOutput;
    };
  };
}
