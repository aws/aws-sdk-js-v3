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

import { CreateInAppTemplateRequest, CreateInAppTemplateResponse } from "../models/models_0";
import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { de_CreateInAppTemplateCommand, se_CreateInAppTemplateCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * @public
 * <p>Creates a new message template for messages using the in-app message channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, CreateInAppTemplateCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, CreateInAppTemplateCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
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
 */
export class CreateInAppTemplateCommand extends $Command<
  CreateInAppTemplateCommandInput,
  CreateInAppTemplateCommandOutput,
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
  constructor(readonly input: CreateInAppTemplateCommandInput) {
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
  ): Handler<CreateInAppTemplateCommandInput, CreateInAppTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateInAppTemplateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointClient";
    const commandName = "CreateInAppTemplateCommand";
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
  private serialize(input: CreateInAppTemplateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateInAppTemplateCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateInAppTemplateCommandOutput> {
    return de_CreateInAppTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
