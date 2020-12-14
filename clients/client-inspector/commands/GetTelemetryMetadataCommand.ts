import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { GetTelemetryMetadataRequest, GetTelemetryMetadataResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetTelemetryMetadataCommand,
  serializeAws_json1_1GetTelemetryMetadataCommand,
} from "../protocols/Aws_json1_1";
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

export type GetTelemetryMetadataCommandInput = GetTelemetryMetadataRequest;
export type GetTelemetryMetadataCommandOutput = GetTelemetryMetadataResponse & __MetadataBearer;

/**
 * <p>Information about the data that is collected for the specified assessment
 *          run.</p>
 */
export class GetTelemetryMetadataCommand extends $Command<
  GetTelemetryMetadataCommandInput,
  GetTelemetryMetadataCommandOutput,
  InspectorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetTelemetryMetadataCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: InspectorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetTelemetryMetadataCommandInput, GetTelemetryMetadataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "InspectorClient";
    const commandName = "GetTelemetryMetadataCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetTelemetryMetadataRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetTelemetryMetadataResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetTelemetryMetadataCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetTelemetryMetadataCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetTelemetryMetadataCommandOutput> {
    return deserializeAws_json1_1GetTelemetryMetadataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
