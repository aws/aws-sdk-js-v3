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
  PutEmailIdentityFeedbackAttributesRequest,
  PutEmailIdentityFeedbackAttributesRequestFilterSensitiveLog,
  PutEmailIdentityFeedbackAttributesResponse,
  PutEmailIdentityFeedbackAttributesResponseFilterSensitiveLog,
} from "../models/models_0";
import { PinpointEmailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointEmailClient";
import {
  deserializeAws_restJson1PutEmailIdentityFeedbackAttributesCommand,
  serializeAws_restJson1PutEmailIdentityFeedbackAttributesCommand,
} from "../protocols/Aws_restJson1";

export interface PutEmailIdentityFeedbackAttributesCommandInput extends PutEmailIdentityFeedbackAttributesRequest {}
export interface PutEmailIdentityFeedbackAttributesCommandOutput
  extends PutEmailIdentityFeedbackAttributesResponse,
    __MetadataBearer {}

/**
 * <p>Used to enable or disable feedback forwarding for an identity. This setting determines
 *             what happens when an identity is used to send an email that results in a bounce or
 *             complaint event.</p>
 *         <p>When you enable feedback forwarding, Amazon Pinpoint sends you email notifications when bounce
 *             or complaint events occur. Amazon Pinpoint sends this notification to the address that you
 *             specified in the Return-Path header of the original email.</p>
 *         <p>When you disable feedback forwarding, Amazon Pinpoint sends notifications through other
 *             mechanisms, such as by notifying an Amazon SNS topic. You're required to have a method of
 *             tracking bounces and complaints. If you haven't set up another mechanism for receiving
 *             bounce or complaint notifications, Amazon Pinpoint sends an email notification when these events
 *             occur (even if this setting is disabled).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointEmailClient, PutEmailIdentityFeedbackAttributesCommand } from "@aws-sdk/client-pinpoint-email"; // ES Modules import
 * // const { PinpointEmailClient, PutEmailIdentityFeedbackAttributesCommand } = require("@aws-sdk/client-pinpoint-email"); // CommonJS import
 * const client = new PinpointEmailClient(config);
 * const command = new PutEmailIdentityFeedbackAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutEmailIdentityFeedbackAttributesCommandInput} for command's `input` shape.
 * @see {@link PutEmailIdentityFeedbackAttributesCommandOutput} for command's `response` shape.
 * @see {@link PinpointEmailClientResolvedConfig | config} for PinpointEmailClient's `config` shape.
 *
 */
export class PutEmailIdentityFeedbackAttributesCommand extends $Command<
  PutEmailIdentityFeedbackAttributesCommandInput,
  PutEmailIdentityFeedbackAttributesCommandOutput,
  PinpointEmailClientResolvedConfig
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

  constructor(readonly input: PutEmailIdentityFeedbackAttributesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PinpointEmailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutEmailIdentityFeedbackAttributesCommandInput, PutEmailIdentityFeedbackAttributesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutEmailIdentityFeedbackAttributesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointEmailClient";
    const commandName = "PutEmailIdentityFeedbackAttributesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutEmailIdentityFeedbackAttributesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: PutEmailIdentityFeedbackAttributesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: PutEmailIdentityFeedbackAttributesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1PutEmailIdentityFeedbackAttributesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutEmailIdentityFeedbackAttributesCommandOutput> {
    return deserializeAws_restJson1PutEmailIdentityFeedbackAttributesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
