// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { UpdateInAppTemplateRequest, UpdateInAppTemplateResponse } from "../models/models_1";
import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import {
  deserializeAws_restJson1UpdateInAppTemplateCommand,
  serializeAws_restJson1UpdateInAppTemplateCommand,
} from "../protocols/Aws_restJson1";

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
 * @public
 * <p>Updates an existing message template for messages sent through the in-app message channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, UpdateInAppTemplateCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, UpdateInAppTemplateCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const input = { // UpdateInAppTemplateRequest
 *   CreateNewVersion: true || false,
 *   InAppTemplateRequest: { // InAppTemplateRequest
 *     Content: [ // ListOfInAppMessageContent
 *       { // InAppMessageContent
 *         BackgroundColor: "STRING_VALUE",
 *         BodyConfig: { // InAppMessageBodyConfig
 *           Alignment: "STRING_VALUE", // required
 *           Body: "STRING_VALUE", // required
 *           TextColor: "STRING_VALUE", // required
 *         },
 *         HeaderConfig: { // InAppMessageHeaderConfig
 *           Alignment: "STRING_VALUE", // required
 *           Header: "STRING_VALUE", // required
 *           TextColor: "STRING_VALUE", // required
 *         },
 *         ImageUrl: "STRING_VALUE",
 *         PrimaryBtn: { // InAppMessageButton
 *           Android: { // OverrideButtonConfiguration
 *             ButtonAction: "STRING_VALUE", // required
 *             Link: "STRING_VALUE",
 *           },
 *           DefaultConfig: { // DefaultButtonConfiguration
 *             BackgroundColor: "STRING_VALUE",
 *             BorderRadius: Number("int"),
 *             ButtonAction: "STRING_VALUE", // required
 *             Link: "STRING_VALUE",
 *             Text: "STRING_VALUE", // required
 *             TextColor: "STRING_VALUE",
 *           },
 *           IOS: {
 *             ButtonAction: "STRING_VALUE", // required
 *             Link: "STRING_VALUE",
 *           },
 *           Web: {
 *             ButtonAction: "STRING_VALUE", // required
 *             Link: "STRING_VALUE",
 *           },
 *         },
 *         SecondaryBtn: {
 *           Android: {
 *             ButtonAction: "STRING_VALUE", // required
 *             Link: "STRING_VALUE",
 *           },
 *           DefaultConfig: {
 *             BackgroundColor: "STRING_VALUE",
 *             BorderRadius: Number("int"),
 *             ButtonAction: "STRING_VALUE", // required
 *             Link: "STRING_VALUE",
 *             Text: "STRING_VALUE", // required
 *             TextColor: "STRING_VALUE",
 *           },
 *           IOS: {
 *             ButtonAction: "STRING_VALUE", // required
 *             Link: "STRING_VALUE",
 *           },
 *           Web: "<OverrideButtonConfiguration>",
 *         },
 *       },
 *     ],
 *     CustomConfig: { // MapOf__string
 *       "<keys>": "STRING_VALUE",
 *     },
 *     Layout: "STRING_VALUE",
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
 *
 */
export class UpdateInAppTemplateCommand extends $Command<
  UpdateInAppTemplateCommandInput,
  UpdateInAppTemplateCommandOutput,
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
  constructor(readonly input: UpdateInAppTemplateCommandInput) {
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
  ): Handler<UpdateInAppTemplateCommandInput, UpdateInAppTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateInAppTemplateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointClient";
    const commandName = "UpdateInAppTemplateCommand";
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
  private serialize(input: UpdateInAppTemplateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateInAppTemplateCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateInAppTemplateCommandOutput> {
    return deserializeAws_restJson1UpdateInAppTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
