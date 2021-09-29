import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import {
  PutSipMediaApplicationLoggingConfigurationRequest,
  PutSipMediaApplicationLoggingConfigurationResponse,
} from "../models/models_1";
import {
  deserializeAws_restJson1PutSipMediaApplicationLoggingConfigurationCommand,
  serializeAws_restJson1PutSipMediaApplicationLoggingConfigurationCommand,
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

export interface PutSipMediaApplicationLoggingConfigurationCommandInput
  extends PutSipMediaApplicationLoggingConfigurationRequest {}
export interface PutSipMediaApplicationLoggingConfigurationCommandOutput
  extends PutSipMediaApplicationLoggingConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Updates the logging configuration for the specified SIP media application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, PutSipMediaApplicationLoggingConfigurationCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, PutSipMediaApplicationLoggingConfigurationCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new PutSipMediaApplicationLoggingConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutSipMediaApplicationLoggingConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutSipMediaApplicationLoggingConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class PutSipMediaApplicationLoggingConfigurationCommand extends $Command<
  PutSipMediaApplicationLoggingConfigurationCommandInput,
  PutSipMediaApplicationLoggingConfigurationCommandOutput,
  ChimeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutSipMediaApplicationLoggingConfigurationCommandInput) {
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
    PutSipMediaApplicationLoggingConfigurationCommandInput,
    PutSipMediaApplicationLoggingConfigurationCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "PutSipMediaApplicationLoggingConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutSipMediaApplicationLoggingConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutSipMediaApplicationLoggingConfigurationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: PutSipMediaApplicationLoggingConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1PutSipMediaApplicationLoggingConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutSipMediaApplicationLoggingConfigurationCommandOutput> {
    return deserializeAws_restJson1PutSipMediaApplicationLoggingConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
