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

import { GetPushTemplateRequest, GetPushTemplateResponse } from "../models/models_1";
import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { de_GetPushTemplateCommand, se_GetPushTemplateCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetPushTemplateCommand}.
 */
export interface GetPushTemplateCommandInput extends GetPushTemplateRequest {}
/**
 * @public
 *
 * The output of {@link GetPushTemplateCommand}.
 */
export interface GetPushTemplateCommandOutput extends GetPushTemplateResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves the content and settings of a message template for messages that are sent through a push notification channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetPushTemplateCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetPushTemplateCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const input = { // GetPushTemplateRequest
 *   TemplateName: "STRING_VALUE", // required
 *   Version: "STRING_VALUE",
 * };
 * const command = new GetPushTemplateCommand(input);
 * const response = await client.send(command);
 * // { // GetPushTemplateResponse
 * //   PushNotificationTemplateResponse: { // PushNotificationTemplateResponse
 * //     ADM: { // AndroidPushNotificationTemplate
 * //       Action: "OPEN_APP" || "DEEP_LINK" || "URL",
 * //       Body: "STRING_VALUE",
 * //       ImageIconUrl: "STRING_VALUE",
 * //       ImageUrl: "STRING_VALUE",
 * //       RawContent: "STRING_VALUE",
 * //       SmallImageIconUrl: "STRING_VALUE",
 * //       Sound: "STRING_VALUE",
 * //       Title: "STRING_VALUE",
 * //       Url: "STRING_VALUE",
 * //     },
 * //     APNS: { // APNSPushNotificationTemplate
 * //       Action: "OPEN_APP" || "DEEP_LINK" || "URL",
 * //       Body: "STRING_VALUE",
 * //       MediaUrl: "STRING_VALUE",
 * //       RawContent: "STRING_VALUE",
 * //       Sound: "STRING_VALUE",
 * //       Title: "STRING_VALUE",
 * //       Url: "STRING_VALUE",
 * //     },
 * //     Arn: "STRING_VALUE",
 * //     Baidu: {
 * //       Action: "OPEN_APP" || "DEEP_LINK" || "URL",
 * //       Body: "STRING_VALUE",
 * //       ImageIconUrl: "STRING_VALUE",
 * //       ImageUrl: "STRING_VALUE",
 * //       RawContent: "STRING_VALUE",
 * //       SmallImageIconUrl: "STRING_VALUE",
 * //       Sound: "STRING_VALUE",
 * //       Title: "STRING_VALUE",
 * //       Url: "STRING_VALUE",
 * //     },
 * //     CreationDate: "STRING_VALUE", // required
 * //     Default: { // DefaultPushNotificationTemplate
 * //       Action: "OPEN_APP" || "DEEP_LINK" || "URL",
 * //       Body: "STRING_VALUE",
 * //       Sound: "STRING_VALUE",
 * //       Title: "STRING_VALUE",
 * //       Url: "STRING_VALUE",
 * //     },
 * //     DefaultSubstitutions: "STRING_VALUE",
 * //     GCM: {
 * //       Action: "OPEN_APP" || "DEEP_LINK" || "URL",
 * //       Body: "STRING_VALUE",
 * //       ImageIconUrl: "STRING_VALUE",
 * //       ImageUrl: "STRING_VALUE",
 * //       RawContent: "STRING_VALUE",
 * //       SmallImageIconUrl: "STRING_VALUE",
 * //       Sound: "STRING_VALUE",
 * //       Title: "STRING_VALUE",
 * //       Url: "STRING_VALUE",
 * //     },
 * //     LastModifiedDate: "STRING_VALUE", // required
 * //     RecommenderId: "STRING_VALUE",
 * //     tags: { // MapOf__string
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
 * @param GetPushTemplateCommandInput - {@link GetPushTemplateCommandInput}
 * @returns {@link GetPushTemplateCommandOutput}
 * @see {@link GetPushTemplateCommandInput} for command's `input` shape.
 * @see {@link GetPushTemplateCommandOutput} for command's `response` shape.
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
export class GetPushTemplateCommand extends $Command<
  GetPushTemplateCommandInput,
  GetPushTemplateCommandOutput,
  PinpointClientResolvedConfig
> {
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
  constructor(readonly input: GetPushTemplateCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PinpointClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetPushTemplateCommandInput, GetPushTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetPushTemplateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointClient";
    const commandName = "GetPushTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Pinpoint",
        operation: "GetPushTemplate",
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
  private serialize(input: GetPushTemplateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetPushTemplateCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetPushTemplateCommandOutput> {
    return de_GetPushTemplateCommand(output, context);
  }
}
