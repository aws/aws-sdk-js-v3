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

import { SendVoiceMessageRequest, SendVoiceMessageResult } from "../models/models_0";
import {
  PinpointSMSVoiceV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PinpointSMSVoiceV2Client";
import {
  deserializeAws_json1_0SendVoiceMessageCommand,
  serializeAws_json1_0SendVoiceMessageCommand,
} from "../protocols/Aws_json1_0";

/**
 * @public
 *
 * The input for {@link SendVoiceMessageCommand}.
 */
export interface SendVoiceMessageCommandInput extends SendVoiceMessageRequest {}
/**
 * @public
 *
 * The output of {@link SendVoiceMessageCommand}.
 */
export interface SendVoiceMessageCommandOutput extends SendVoiceMessageResult, __MetadataBearer {}

/**
 * @public
 * <p>Allows you to send a request that sends a text message through Amazon Pinpoint.
 *             This operation uses <a href="http://aws.amazon.com/polly/">Amazon Polly</a> to
 *             convert a text script into a voice message.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, SendVoiceMessageCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, SendVoiceMessageCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = {
 *   DestinationPhoneNumber: "STRING_VALUE", // required
 *   OriginationIdentity: "STRING_VALUE", // required
 *   MessageBody: "STRING_VALUE",
 *   MessageBodyTextType: "STRING_VALUE",
 *   VoiceId: "STRING_VALUE",
 *   ConfigurationSetName: "STRING_VALUE",
 *   MaxPricePerMinute: "STRING_VALUE",
 *   TimeToLive: Number("int"),
 *   Context: {
 *     "<keys>": "STRING_VALUE",
 *   },
 *   DryRun: true || false,
 * };
 * const command = new SendVoiceMessageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param SendVoiceMessageCommandInput - {@link SendVoiceMessageCommandInput}
 * @returns {@link SendVoiceMessageCommandOutput}
 * @see {@link SendVoiceMessageCommandInput} for command's `input` shape.
 * @see {@link SendVoiceMessageCommandOutput} for command's `response` shape.
 * @see {@link PinpointSMSVoiceV2ClientResolvedConfig | config} for PinpointSMSVoiceV2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied because you don't have sufficient permissions to access the
 *             resource.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Your request has conflicting operations. This can occur if you're trying to perform
 *             more than one operation on the same resource at the same time or it could be that the
 *             requested action isn't valid for the current state or configuration of the
 *             resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The API encountered an unexpected error and couldn't complete the request. You might
 *             be able to successfully issue the request again in the future.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A requested resource couldn't be found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would cause a service quota to be exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>An error that occurred because too many requests were sent during a certain amount of
 *             time.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A validation exception for a field.</p>
 *
 *
 */
export class SendVoiceMessageCommand extends $Command<
  SendVoiceMessageCommandInput,
  SendVoiceMessageCommandOutput,
  PinpointSMSVoiceV2ClientResolvedConfig
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
  constructor(readonly input: SendVoiceMessageCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PinpointSMSVoiceV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SendVoiceMessageCommandInput, SendVoiceMessageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SendVoiceMessageCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointSMSVoiceV2Client";
    const commandName = "SendVoiceMessageCommand";
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
  private serialize(input: SendVoiceMessageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0SendVoiceMessageCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SendVoiceMessageCommandOutput> {
    return deserializeAws_json1_0SendVoiceMessageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
