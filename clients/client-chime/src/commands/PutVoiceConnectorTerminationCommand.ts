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

import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import {
  PutVoiceConnectorTerminationRequest,
  PutVoiceConnectorTerminationRequestFilterSensitiveLog,
  PutVoiceConnectorTerminationResponse,
  PutVoiceConnectorTerminationResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restJson1PutVoiceConnectorTerminationCommand,
  serializeAws_restJson1PutVoiceConnectorTerminationCommand,
} from "../protocols/Aws_restJson1";

export interface PutVoiceConnectorTerminationCommandInput extends PutVoiceConnectorTerminationRequest {}
export interface PutVoiceConnectorTerminationCommandOutput
  extends PutVoiceConnectorTerminationResponse,
    __MetadataBearer {}

/**
 * <p>Adds termination settings for the specified Amazon Chime Voice Connector.</p>
 *
 *          <note>
 *             <p>If emergency calling is configured for the Amazon Chime Voice Connector, it must be deleted prior to turning off termination settings.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, PutVoiceConnectorTerminationCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, PutVoiceConnectorTerminationCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new PutVoiceConnectorTerminationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutVoiceConnectorTerminationCommandInput} for command's `input` shape.
 * @see {@link PutVoiceConnectorTerminationCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 */
export class PutVoiceConnectorTerminationCommand extends $Command<
  PutVoiceConnectorTerminationCommandInput,
  PutVoiceConnectorTerminationCommandOutput,
  ChimeClientResolvedConfig
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

  constructor(readonly input: PutVoiceConnectorTerminationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutVoiceConnectorTerminationCommandInput, PutVoiceConnectorTerminationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutVoiceConnectorTerminationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "PutVoiceConnectorTerminationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutVoiceConnectorTerminationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: PutVoiceConnectorTerminationResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutVoiceConnectorTerminationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1PutVoiceConnectorTerminationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutVoiceConnectorTerminationCommandOutput> {
    return deserializeAws_restJson1PutVoiceConnectorTerminationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
