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
  CreateConfigurationSetEventDestinationRequest,
  CreateConfigurationSetEventDestinationRequestFilterSensitiveLog,
  CreateConfigurationSetEventDestinationResponse,
  CreateConfigurationSetEventDestinationResponseFilterSensitiveLog,
} from "../models/models_0";
import { PinpointSMSVoiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointSMSVoiceClient";
import {
  deserializeAws_restJson1CreateConfigurationSetEventDestinationCommand,
  serializeAws_restJson1CreateConfigurationSetEventDestinationCommand,
} from "../protocols/Aws_restJson1";

export interface CreateConfigurationSetEventDestinationCommandInput
  extends CreateConfigurationSetEventDestinationRequest {}
export interface CreateConfigurationSetEventDestinationCommandOutput
  extends CreateConfigurationSetEventDestinationResponse,
    __MetadataBearer {}

/**
 * Create a new event destination in a configuration set.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceClient, CreateConfigurationSetEventDestinationCommand } from "@aws-sdk/client-pinpoint-sms-voice"; // ES Modules import
 * // const { PinpointSMSVoiceClient, CreateConfigurationSetEventDestinationCommand } = require("@aws-sdk/client-pinpoint-sms-voice"); // CommonJS import
 * const client = new PinpointSMSVoiceClient(config);
 * const command = new CreateConfigurationSetEventDestinationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateConfigurationSetEventDestinationCommandInput} for command's `input` shape.
 * @see {@link CreateConfigurationSetEventDestinationCommandOutput} for command's `response` shape.
 * @see {@link PinpointSMSVoiceClientResolvedConfig | config} for PinpointSMSVoiceClient's `config` shape.
 *
 */
export class CreateConfigurationSetEventDestinationCommand extends $Command<
  CreateConfigurationSetEventDestinationCommandInput,
  CreateConfigurationSetEventDestinationCommandOutput,
  PinpointSMSVoiceClientResolvedConfig
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

  constructor(readonly input: CreateConfigurationSetEventDestinationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PinpointSMSVoiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateConfigurationSetEventDestinationCommandInput, CreateConfigurationSetEventDestinationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateConfigurationSetEventDestinationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointSMSVoiceClient";
    const commandName = "CreateConfigurationSetEventDestinationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateConfigurationSetEventDestinationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateConfigurationSetEventDestinationResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CreateConfigurationSetEventDestinationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateConfigurationSetEventDestinationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateConfigurationSetEventDestinationCommandOutput> {
    return deserializeAws_restJson1CreateConfigurationSetEventDestinationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
