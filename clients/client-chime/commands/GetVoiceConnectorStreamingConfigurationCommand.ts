import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { GetVoiceConnectorStreamingConfigurationRequest } from "../models/models_0";
import { GetVoiceConnectorStreamingConfigurationResponse } from "../models/models_1";
import {
  deserializeAws_restJson1GetVoiceConnectorStreamingConfigurationCommand,
  serializeAws_restJson1GetVoiceConnectorStreamingConfigurationCommand,
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

export interface GetVoiceConnectorStreamingConfigurationCommandInput
  extends GetVoiceConnectorStreamingConfigurationRequest {}
export interface GetVoiceConnectorStreamingConfigurationCommandOutput
  extends GetVoiceConnectorStreamingConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves the streaming configuration details for the specified Amazon Chime Voice Connector.
 *             Shows whether media streaming is enabled for sending to Amazon Kinesis. It also shows
 *             the retention period, in hours, for the Amazon Kinesis data.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, GetVoiceConnectorStreamingConfigurationCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, GetVoiceConnectorStreamingConfigurationCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new GetVoiceConnectorStreamingConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetVoiceConnectorStreamingConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetVoiceConnectorStreamingConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetVoiceConnectorStreamingConfigurationCommand extends $Command<
  GetVoiceConnectorStreamingConfigurationCommandInput,
  GetVoiceConnectorStreamingConfigurationCommandOutput,
  ChimeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetVoiceConnectorStreamingConfigurationCommandInput) {
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
    GetVoiceConnectorStreamingConfigurationCommandInput,
    GetVoiceConnectorStreamingConfigurationCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "GetVoiceConnectorStreamingConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetVoiceConnectorStreamingConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetVoiceConnectorStreamingConfigurationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetVoiceConnectorStreamingConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1GetVoiceConnectorStreamingConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetVoiceConnectorStreamingConfigurationCommandOutput> {
    return deserializeAws_restJson1GetVoiceConnectorStreamingConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
