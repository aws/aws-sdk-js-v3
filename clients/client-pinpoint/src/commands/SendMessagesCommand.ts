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

import { SendMessagesRequest, SendMessagesResponse } from "../models/models_1";
import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import {
  deserializeAws_restJson1SendMessagesCommand,
  serializeAws_restJson1SendMessagesCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link SendMessagesCommand}.
 */
export interface SendMessagesCommandInput extends SendMessagesRequest {}
/**
 * @public
 *
 * The output of {@link SendMessagesCommand}.
 */
export interface SendMessagesCommandOutput extends SendMessagesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates and sends a direct message.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, SendMessagesCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, SendMessagesCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const input = {
 *   ApplicationId: "STRING_VALUE", // required
 *   MessageRequest: {
 *     Addresses: {
 *       "<keys>": {
 *         BodyOverride: "STRING_VALUE",
 *         ChannelType: "STRING_VALUE",
 *         Context: {
 *           "<keys>": "STRING_VALUE",
 *         },
 *         RawContent: "STRING_VALUE",
 *         Substitutions: {
 *           "<keys>": [
 *             "STRING_VALUE",
 *           ],
 *         },
 *         TitleOverride: "STRING_VALUE",
 *       },
 *     },
 *     Context: {
 *       "<keys>": "STRING_VALUE",
 *     },
 *     Endpoints: {
 *       "<keys>": {
 *         BodyOverride: "STRING_VALUE",
 *         Context: {
 *           "<keys>": "STRING_VALUE",
 *         },
 *         RawContent: "STRING_VALUE",
 *         Substitutions: {
 *           "<keys>": [
 *             "STRING_VALUE",
 *           ],
 *         },
 *         TitleOverride: "STRING_VALUE",
 *       },
 *     },
 *     MessageConfiguration: {
 *       ADMMessage: {
 *         Action: "STRING_VALUE",
 *         Body: "STRING_VALUE",
 *         ConsolidationKey: "STRING_VALUE",
 *         Data: {
 *           "<keys>": "STRING_VALUE",
 *         },
 *         ExpiresAfter: "STRING_VALUE",
 *         IconReference: "STRING_VALUE",
 *         ImageIconUrl: "STRING_VALUE",
 *         ImageUrl: "STRING_VALUE",
 *         MD5: "STRING_VALUE",
 *         RawContent: "STRING_VALUE",
 *         SilentPush: true || false,
 *         SmallImageIconUrl: "STRING_VALUE",
 *         Sound: "STRING_VALUE",
 *         Substitutions: {
 *           "<keys>": [
 *             "STRING_VALUE",
 *           ],
 *         },
 *         Title: "STRING_VALUE",
 *         Url: "STRING_VALUE",
 *       },
 *       APNSMessage: {
 *         APNSPushType: "STRING_VALUE",
 *         Action: "STRING_VALUE",
 *         Badge: Number("int"),
 *         Body: "STRING_VALUE",
 *         Category: "STRING_VALUE",
 *         CollapseId: "STRING_VALUE",
 *         Data: {
 *           "<keys>": "STRING_VALUE",
 *         },
 *         MediaUrl: "STRING_VALUE",
 *         PreferredAuthenticationMethod: "STRING_VALUE",
 *         Priority: "STRING_VALUE",
 *         RawContent: "STRING_VALUE",
 *         SilentPush: true || false,
 *         Sound: "STRING_VALUE",
 *         Substitutions: {
 *           "<keys>": [
 *             "STRING_VALUE",
 *           ],
 *         },
 *         ThreadId: "STRING_VALUE",
 *         TimeToLive: Number("int"),
 *         Title: "STRING_VALUE",
 *         Url: "STRING_VALUE",
 *       },
 *       BaiduMessage: {
 *         Action: "STRING_VALUE",
 *         Body: "STRING_VALUE",
 *         Data: {
 *           "<keys>": "STRING_VALUE",
 *         },
 *         IconReference: "STRING_VALUE",
 *         ImageIconUrl: "STRING_VALUE",
 *         ImageUrl: "STRING_VALUE",
 *         RawContent: "STRING_VALUE",
 *         SilentPush: true || false,
 *         SmallImageIconUrl: "STRING_VALUE",
 *         Sound: "STRING_VALUE",
 *         Substitutions: {
 *           "<keys>": [
 *             "STRING_VALUE",
 *           ],
 *         },
 *         TimeToLive: Number("int"),
 *         Title: "STRING_VALUE",
 *         Url: "STRING_VALUE",
 *       },
 *       DefaultMessage: {
 *         Body: "STRING_VALUE",
 *         Substitutions: {
 *           "<keys>": [
 *             "STRING_VALUE",
 *           ],
 *         },
 *       },
 *       DefaultPushNotificationMessage: {
 *         Action: "STRING_VALUE",
 *         Body: "STRING_VALUE",
 *         Data: {
 *           "<keys>": "STRING_VALUE",
 *         },
 *         SilentPush: true || false,
 *         Substitutions: {
 *           "<keys>": [
 *             "STRING_VALUE",
 *           ],
 *         },
 *         Title: "STRING_VALUE",
 *         Url: "STRING_VALUE",
 *       },
 *       EmailMessage: {
 *         Body: "STRING_VALUE",
 *         FeedbackForwardingAddress: "STRING_VALUE",
 *         FromAddress: "STRING_VALUE",
 *         RawEmail: {
 *           Data: "BLOB_VALUE",
 *         },
 *         ReplyToAddresses: [
 *           "STRING_VALUE",
 *         ],
 *         SimpleEmail: {
 *           HtmlPart: {
 *             Charset: "STRING_VALUE",
 *             Data: "STRING_VALUE",
 *           },
 *           Subject: {
 *             Charset: "STRING_VALUE",
 *             Data: "STRING_VALUE",
 *           },
 *           TextPart: {
 *             Charset: "STRING_VALUE",
 *             Data: "STRING_VALUE",
 *           },
 *         },
 *         Substitutions: {
 *           "<keys>": [
 *             "STRING_VALUE",
 *           ],
 *         },
 *       },
 *       GCMMessage: {
 *         Action: "STRING_VALUE",
 *         Body: "STRING_VALUE",
 *         CollapseKey: "STRING_VALUE",
 *         Data: {
 *           "<keys>": "STRING_VALUE",
 *         },
 *         IconReference: "STRING_VALUE",
 *         ImageIconUrl: "STRING_VALUE",
 *         ImageUrl: "STRING_VALUE",
 *         Priority: "STRING_VALUE",
 *         RawContent: "STRING_VALUE",
 *         RestrictedPackageName: "STRING_VALUE",
 *         SilentPush: true || false,
 *         SmallImageIconUrl: "STRING_VALUE",
 *         Sound: "STRING_VALUE",
 *         Substitutions: {
 *           "<keys>": [
 *             "STRING_VALUE",
 *           ],
 *         },
 *         TimeToLive: Number("int"),
 *         Title: "STRING_VALUE",
 *         Url: "STRING_VALUE",
 *       },
 *       SMSMessage: {
 *         Body: "STRING_VALUE",
 *         Keyword: "STRING_VALUE",
 *         MediaUrl: "STRING_VALUE",
 *         MessageType: "STRING_VALUE",
 *         OriginationNumber: "STRING_VALUE",
 *         SenderId: "STRING_VALUE",
 *         Substitutions: {
 *           "<keys>": [
 *             "STRING_VALUE",
 *           ],
 *         },
 *         EntityId: "STRING_VALUE",
 *         TemplateId: "STRING_VALUE",
 *       },
 *       VoiceMessage: {
 *         Body: "STRING_VALUE",
 *         LanguageCode: "STRING_VALUE",
 *         OriginationNumber: "STRING_VALUE",
 *         Substitutions: {
 *           "<keys>": [
 *             "STRING_VALUE",
 *           ],
 *         },
 *         VoiceId: "STRING_VALUE",
 *       },
 *     },
 *     TemplateConfiguration: {
 *       EmailTemplate: {
 *         Name: "STRING_VALUE",
 *         Version: "STRING_VALUE",
 *       },
 *       PushTemplate: {
 *         Name: "STRING_VALUE",
 *         Version: "STRING_VALUE",
 *       },
 *       SMSTemplate: {
 *         Name: "STRING_VALUE",
 *         Version: "STRING_VALUE",
 *       },
 *       VoiceTemplate: {
 *         Name: "STRING_VALUE",
 *         Version: "STRING_VALUE",
 *       },
 *     },
 *     TraceId: "STRING_VALUE",
 *   },
 * };
 * const command = new SendMessagesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param SendMessagesCommandInput - {@link SendMessagesCommandInput}
 * @returns {@link SendMessagesCommandOutput}
 * @see {@link SendMessagesCommandInput} for command's `input` shape.
 * @see {@link SendMessagesCommandOutput} for command's `response` shape.
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
export class SendMessagesCommand extends $Command<
  SendMessagesCommandInput,
  SendMessagesCommandOutput,
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
  constructor(readonly input: SendMessagesCommandInput) {
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
  ): Handler<SendMessagesCommandInput, SendMessagesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, SendMessagesCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointClient";
    const commandName = "SendMessagesCommand";
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
  private serialize(input: SendMessagesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1SendMessagesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SendMessagesCommandOutput> {
    return deserializeAws_restJson1SendMessagesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
