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
  DeleteVoiceConnectorTerminationRequest,
  DeleteVoiceConnectorTerminationRequestFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DeleteVoiceConnectorTerminationCommand,
  serializeAws_restJson1DeleteVoiceConnectorTerminationCommand,
} from "../protocols/Aws_restJson1";

export interface DeleteVoiceConnectorTerminationCommandInput extends DeleteVoiceConnectorTerminationRequest {}
export interface DeleteVoiceConnectorTerminationCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the termination settings for the specified Amazon Chime Voice Connector.</p>
 *
 *          <note>
 *             <p>If emergency calling is configured for the Amazon Chime Voice Connector, it must be deleted prior to deleting the termination settings.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, DeleteVoiceConnectorTerminationCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, DeleteVoiceConnectorTerminationCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new DeleteVoiceConnectorTerminationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteVoiceConnectorTerminationCommandInput} for command's `input` shape.
 * @see {@link DeleteVoiceConnectorTerminationCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 */
export class DeleteVoiceConnectorTerminationCommand extends $Command<
  DeleteVoiceConnectorTerminationCommandInput,
  DeleteVoiceConnectorTerminationCommandOutput,
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

  constructor(readonly input: DeleteVoiceConnectorTerminationCommandInput) {
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
  ): Handler<DeleteVoiceConnectorTerminationCommandInput, DeleteVoiceConnectorTerminationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteVoiceConnectorTerminationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "DeleteVoiceConnectorTerminationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteVoiceConnectorTerminationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeleteVoiceConnectorTerminationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteVoiceConnectorTerminationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteVoiceConnectorTerminationCommandOutput> {
    return deserializeAws_restJson1DeleteVoiceConnectorTerminationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
