import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import {
  GetAppInstanceStreamingConfigurationsRequest,
  GetAppInstanceStreamingConfigurationsResponse,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetAppInstanceStreamingConfigurationsCommand,
  serializeAws_restJson1GetAppInstanceStreamingConfigurationsCommand,
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

export type GetAppInstanceStreamingConfigurationsCommandInput = GetAppInstanceStreamingConfigurationsRequest;
export type GetAppInstanceStreamingConfigurationsCommandOutput = GetAppInstanceStreamingConfigurationsResponse &
  __MetadataBearer;

/**
 * <p>Gets the streaming settings for an app instance.</p>
 */
export class GetAppInstanceStreamingConfigurationsCommand extends $Command<
  GetAppInstanceStreamingConfigurationsCommandInput,
  GetAppInstanceStreamingConfigurationsCommandOutput,
  ChimeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetAppInstanceStreamingConfigurationsCommandInput) {
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
  ): Handler<GetAppInstanceStreamingConfigurationsCommandInput, GetAppInstanceStreamingConfigurationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "GetAppInstanceStreamingConfigurationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetAppInstanceStreamingConfigurationsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetAppInstanceStreamingConfigurationsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetAppInstanceStreamingConfigurationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1GetAppInstanceStreamingConfigurationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetAppInstanceStreamingConfigurationsCommandOutput> {
    return deserializeAws_restJson1GetAppInstanceStreamingConfigurationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
