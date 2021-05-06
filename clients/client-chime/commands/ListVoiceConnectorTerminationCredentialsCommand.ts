import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import {
  ListVoiceConnectorTerminationCredentialsRequest,
  ListVoiceConnectorTerminationCredentialsResponse,
} from "../models/models_1";
import {
  deserializeAws_restJson1ListVoiceConnectorTerminationCredentialsCommand,
  serializeAws_restJson1ListVoiceConnectorTerminationCredentialsCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface ListVoiceConnectorTerminationCredentialsCommandInput
  extends ListVoiceConnectorTerminationCredentialsRequest {}
export interface ListVoiceConnectorTerminationCredentialsCommandOutput
  extends ListVoiceConnectorTerminationCredentialsResponse,
    __MetadataBearer {}

/**
 * <p>Lists the SIP credentials for the specified Amazon Chime Voice Connector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, ListVoiceConnectorTerminationCredentialsCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, ListVoiceConnectorTerminationCredentialsCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new ListVoiceConnectorTerminationCredentialsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListVoiceConnectorTerminationCredentialsCommandInput} for command's `input` shape.
 * @see {@link ListVoiceConnectorTerminationCredentialsCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListVoiceConnectorTerminationCredentialsCommand extends $Command<
  ListVoiceConnectorTerminationCredentialsCommandInput,
  ListVoiceConnectorTerminationCredentialsCommandOutput,
  ChimeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListVoiceConnectorTerminationCredentialsCommandInput) {
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
  ): Handler<
    ListVoiceConnectorTerminationCredentialsCommandInput,
    ListVoiceConnectorTerminationCredentialsCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "ListVoiceConnectorTerminationCredentialsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListVoiceConnectorTerminationCredentialsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListVoiceConnectorTerminationCredentialsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListVoiceConnectorTerminationCredentialsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1ListVoiceConnectorTerminationCredentialsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListVoiceConnectorTerminationCredentialsCommandOutput> {
    return deserializeAws_restJson1ListVoiceConnectorTerminationCredentialsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
