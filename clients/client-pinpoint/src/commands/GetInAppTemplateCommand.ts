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

import { GetInAppTemplateRequest, GetInAppTemplateResponse } from "../models/models_1";
import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { de_GetInAppTemplateCommand, se_GetInAppTemplateCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * @public
 * <p>Retrieves the content and settings of a message template for messages sent through the in-app channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetInAppTemplateCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetInAppTemplateCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
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
export class GetInAppTemplateCommand extends $Command<
  GetInAppTemplateCommandInput,
  GetInAppTemplateCommandOutput,
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
  constructor(readonly input: GetInAppTemplateCommandInput) {
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
  ): Handler<GetInAppTemplateCommandInput, GetInAppTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetInAppTemplateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointClient";
    const commandName = "GetInAppTemplateCommand";
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
  private serialize(input: GetInAppTemplateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetInAppTemplateCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetInAppTemplateCommandOutput> {
    return de_GetInAppTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
