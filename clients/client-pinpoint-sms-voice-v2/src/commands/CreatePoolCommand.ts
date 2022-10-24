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
  CreatePoolRequest,
  CreatePoolRequestFilterSensitiveLog,
  CreatePoolResult,
  CreatePoolResultFilterSensitiveLog,
} from "../models/models_0";
import {
  PinpointSMSVoiceV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PinpointSMSVoiceV2Client";
import {
  deserializeAws_json1_0CreatePoolCommand,
  serializeAws_json1_0CreatePoolCommand,
} from "../protocols/Aws_json1_0";

export interface CreatePoolCommandInput extends CreatePoolRequest {}
export interface CreatePoolCommandOutput extends CreatePoolResult, __MetadataBearer {}

/**
 * <p>Creates a new pool and associates the specified origination identity to the pool. A
 *             pool can include one or more phone numbers and SenderIds that are associated with your
 *                 Amazon Web Services account.</p>
 *         <p>The new pool inherits its configuration from the specified origination identity. This
 *             includes keywords, message type, opt-out list, two-way configuration, and self-managed
 *             opt-out configuration. Deletion protection isn't inherited from the origination identity
 *             and defaults to false.</p>
 *         <p>If the origination identity is a phone number and is already associated with another
 *             pool, an Error is returned. A sender ID can be associated with multiple pools.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, CreatePoolCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, CreatePoolCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * const client = new PinpointSMSVoiceV2Client(config);
 * const command = new CreatePoolCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreatePoolCommandInput} for command's `input` shape.
 * @see {@link CreatePoolCommandOutput} for command's `response` shape.
 * @see {@link PinpointSMSVoiceV2ClientResolvedConfig | config} for PinpointSMSVoiceV2Client's `config` shape.
 *
 */
export class CreatePoolCommand extends $Command<
  CreatePoolCommandInput,
  CreatePoolCommandOutput,
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

  constructor(readonly input: CreatePoolCommandInput) {
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
  ): Handler<CreatePoolCommandInput, CreatePoolCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreatePoolCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointSMSVoiceV2Client";
    const commandName = "CreatePoolCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreatePoolRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreatePoolResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreatePoolCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0CreatePoolCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreatePoolCommandOutput> {
    return deserializeAws_json1_0CreatePoolCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
