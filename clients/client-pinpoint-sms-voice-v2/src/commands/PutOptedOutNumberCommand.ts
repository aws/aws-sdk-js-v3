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
  PutOptedOutNumberRequest,
  PutOptedOutNumberRequestFilterSensitiveLog,
  PutOptedOutNumberResult,
  PutOptedOutNumberResultFilterSensitiveLog,
} from "../models/models_0";
import {
  PinpointSMSVoiceV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PinpointSMSVoiceV2Client";
import {
  deserializeAws_json1_0PutOptedOutNumberCommand,
  serializeAws_json1_0PutOptedOutNumberCommand,
} from "../protocols/Aws_json1_0";

export interface PutOptedOutNumberCommandInput extends PutOptedOutNumberRequest {}
export interface PutOptedOutNumberCommandOutput extends PutOptedOutNumberResult, __MetadataBearer {}

/**
 * <p>Creates an opted out destination phone number in the opt-out list.</p>
 *         <p>If the destination phone number isn't valid or if the specified opt-out list doesn't
 *             exist, an Error is returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, PutOptedOutNumberCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, PutOptedOutNumberCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * const client = new PinpointSMSVoiceV2Client(config);
 * const command = new PutOptedOutNumberCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutOptedOutNumberCommandInput} for command's `input` shape.
 * @see {@link PutOptedOutNumberCommandOutput} for command's `response` shape.
 * @see {@link PinpointSMSVoiceV2ClientResolvedConfig | config} for PinpointSMSVoiceV2Client's `config` shape.
 *
 */
export class PutOptedOutNumberCommand extends $Command<
  PutOptedOutNumberCommandInput,
  PutOptedOutNumberCommandOutput,
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

  constructor(readonly input: PutOptedOutNumberCommandInput) {
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
  ): Handler<PutOptedOutNumberCommandInput, PutOptedOutNumberCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutOptedOutNumberCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointSMSVoiceV2Client";
    const commandName = "PutOptedOutNumberCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutOptedOutNumberRequestFilterSensitiveLog,
      outputFilterSensitiveLog: PutOptedOutNumberResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutOptedOutNumberCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0PutOptedOutNumberCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutOptedOutNumberCommandOutput> {
    return deserializeAws_json1_0PutOptedOutNumberCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
