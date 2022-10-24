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

import {
  PutKeywordRequest,
  PutKeywordRequestFilterSensitiveLog,
  PutKeywordResult,
  PutKeywordResultFilterSensitiveLog,
} from "../models/models_0";
import {
  PinpointSMSVoiceV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PinpointSMSVoiceV2Client";
import {
  deserializeAws_json1_0PutKeywordCommand,
  serializeAws_json1_0PutKeywordCommand,
} from "../protocols/Aws_json1_0";

export interface PutKeywordCommandInput extends PutKeywordRequest {}
export interface PutKeywordCommandOutput extends PutKeywordResult, __MetadataBearer {}

/**
 * <p>Creates or updates a keyword configuration on an origination phone number or
 *             pool.</p>
 *         <p> A keyword is a word that you can search for on a particular phone number or pool. It
 *             is also a specific word or phrase that an end user can send to your number to elicit a
 *             response, such as an informational message or a special offer. When your number receives
 *             a message that begins with a keyword, Amazon Pinpoint responds with a customizable
 *             message.</p>
 *         <p>If you specify a keyword that isn't valid, an Error is returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, PutKeywordCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, PutKeywordCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * const client = new PinpointSMSVoiceV2Client(config);
 * const command = new PutKeywordCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutKeywordCommandInput} for command's `input` shape.
 * @see {@link PutKeywordCommandOutput} for command's `response` shape.
 * @see {@link PinpointSMSVoiceV2ClientResolvedConfig | config} for PinpointSMSVoiceV2Client's `config` shape.
 *
 */
export class PutKeywordCommand extends $Command<
  PutKeywordCommandInput,
  PutKeywordCommandOutput,
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

  constructor(readonly input: PutKeywordCommandInput) {
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
  ): Handler<PutKeywordCommandInput, PutKeywordCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, PutKeywordCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointSMSVoiceV2Client";
    const commandName = "PutKeywordCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutKeywordRequestFilterSensitiveLog,
      outputFilterSensitiveLog: PutKeywordResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutKeywordCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0PutKeywordCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutKeywordCommandOutput> {
    return deserializeAws_json1_0PutKeywordCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
