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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { UpdatePushTemplateRequest, UpdatePushTemplateResponse } from "../models/models_1";
import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { de_UpdatePushTemplateCommand, se_UpdatePushTemplateCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * @public
 * <p>Updates an existing message template for messages that are sent through a push notification channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, UpdatePushTemplateCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, UpdatePushTemplateCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
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
 */
export class UpdatePushTemplateCommand extends $Command<
  UpdatePushTemplateCommandInput,
  UpdatePushTemplateCommandOutput,
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
  constructor(readonly input: UpdatePushTemplateCommandInput) {
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
  ): Handler<UpdatePushTemplateCommandInput, UpdatePushTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdatePushTemplateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointClient";
    const commandName = "UpdatePushTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Pinpoint",
        operation: "UpdatePushTemplate",
      },
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
  private serialize(input: UpdatePushTemplateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdatePushTemplateCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdatePushTemplateCommandOutput> {
    return de_UpdatePushTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
