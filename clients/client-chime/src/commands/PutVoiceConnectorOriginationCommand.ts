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
  PutVoiceConnectorOriginationRequest,
  PutVoiceConnectorOriginationRequestFilterSensitiveLog,
  PutVoiceConnectorOriginationResponse,
  PutVoiceConnectorOriginationResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restJson1PutVoiceConnectorOriginationCommand,
  serializeAws_restJson1PutVoiceConnectorOriginationCommand,
} from "../protocols/Aws_restJson1";

export interface PutVoiceConnectorOriginationCommandInput extends PutVoiceConnectorOriginationRequest {}
export interface PutVoiceConnectorOriginationCommandOutput
  extends PutVoiceConnectorOriginationResponse,
    __MetadataBearer {}

/**
 * <p>Adds origination settings for the specified Amazon Chime Voice Connector.</p>
 *
 *          <note>
 *             <p>If emergency calling is configured for the Amazon Chime Voice Connector, it must be deleted prior to turning off origination settings.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, PutVoiceConnectorOriginationCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, PutVoiceConnectorOriginationCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new PutVoiceConnectorOriginationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutVoiceConnectorOriginationCommandInput} for command's `input` shape.
 * @see {@link PutVoiceConnectorOriginationCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 */
export class PutVoiceConnectorOriginationCommand extends $Command<
  PutVoiceConnectorOriginationCommandInput,
  PutVoiceConnectorOriginationCommandOutput,
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

  constructor(readonly input: PutVoiceConnectorOriginationCommandInput) {
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
  ): Handler<PutVoiceConnectorOriginationCommandInput, PutVoiceConnectorOriginationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutVoiceConnectorOriginationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "PutVoiceConnectorOriginationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutVoiceConnectorOriginationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: PutVoiceConnectorOriginationResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutVoiceConnectorOriginationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1PutVoiceConnectorOriginationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutVoiceConnectorOriginationCommandOutput> {
    return deserializeAws_restJson1PutVoiceConnectorOriginationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
