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
  DescribeSenderIdsRequest,
  DescribeSenderIdsRequestFilterSensitiveLog,
  DescribeSenderIdsResult,
  DescribeSenderIdsResultFilterSensitiveLog,
} from "../models/models_0";
import {
  PinpointSMSVoiceV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PinpointSMSVoiceV2Client";
import {
  deserializeAws_json1_0DescribeSenderIdsCommand,
  serializeAws_json1_0DescribeSenderIdsCommand,
} from "../protocols/Aws_json1_0";

export interface DescribeSenderIdsCommandInput extends DescribeSenderIdsRequest {}
export interface DescribeSenderIdsCommandOutput extends DescribeSenderIdsResult, __MetadataBearer {}

/**
 * <p>Describes the specified SenderIds or all SenderIds associated with your Amazon Web Services account.</p>
 *         <p>If you specify SenderIds, the output includes information for only the specified
 *             SenderIds. If you specify filters, the output includes information for only those
 *             SenderIds that meet the filter criteria. If you don't specify SenderIds or filters, the
 *             output includes information for all SenderIds.</p>
 *         <p>f you specify a sender ID that isn't valid, an Error is returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, DescribeSenderIdsCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, DescribeSenderIdsCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * const client = new PinpointSMSVoiceV2Client(config);
 * const command = new DescribeSenderIdsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeSenderIdsCommandInput} for command's `input` shape.
 * @see {@link DescribeSenderIdsCommandOutput} for command's `response` shape.
 * @see {@link PinpointSMSVoiceV2ClientResolvedConfig | config} for PinpointSMSVoiceV2Client's `config` shape.
 *
 */
export class DescribeSenderIdsCommand extends $Command<
  DescribeSenderIdsCommandInput,
  DescribeSenderIdsCommandOutput,
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

  constructor(readonly input: DescribeSenderIdsCommandInput) {
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
  ): Handler<DescribeSenderIdsCommandInput, DescribeSenderIdsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeSenderIdsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointSMSVoiceV2Client";
    const commandName = "DescribeSenderIdsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeSenderIdsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeSenderIdsResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeSenderIdsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0DescribeSenderIdsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeSenderIdsCommandOutput> {
    return deserializeAws_json1_0DescribeSenderIdsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
