// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { GetInAppMessagesRequest, GetInAppMessagesResponse } from "../models/models_1";
import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { de_GetInAppMessagesCommand, se_GetInAppMessagesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * @public
 * <p>Retrieves the in-app messages targeted for the provided endpoint ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetInAppMessagesCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetInAppMessagesCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
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
 */
export class GetInAppMessagesCommand extends $Command<
  GetInAppMessagesCommandInput,
  GetInAppMessagesCommandOutput,
  PinpointClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: GetInAppMessagesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PinpointClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetInAppMessagesCommandInput, GetInAppMessagesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetInAppMessagesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointClient";
    const commandName = "GetInAppMessagesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: GetInAppMessagesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetInAppMessagesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetInAppMessagesCommandOutput> {
    return de_GetInAppMessagesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
