import {
  ServiceInputTypes,
  ServiceOutputTypes,
  forecastClientResolvedConfig
} from "../forecastClient";
import {
  CreateForecastExportJobRequest,
  CreateForecastExportJobResponse
} from "../models/index";
import {
  deserializeAws_json1_1CreateForecastExportJobCommand,
  serializeAws_json1_1CreateForecastExportJobCommand
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export type CreateForecastExportJobCommandInput = CreateForecastExportJobRequest;
export type CreateForecastExportJobCommandOutput = CreateForecastExportJobResponse &
  __MetadataBearer;

export class CreateForecastExportJobCommand extends $Command<
  CreateForecastExportJobCommandInput,
  CreateForecastExportJobCommandOutput,
  forecastClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateForecastExportJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: forecastClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    CreateForecastExportJobCommandInput,
    CreateForecastExportJobCommandOutput
  > {
    this.middlewareStack.use(
      getSerdePlugin(configuration, this.serialize, this.deserialize)
    );

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CreateForecastExportJobCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateForecastExportJobCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateForecastExportJobCommandOutput> {
    return deserializeAws_json1_1CreateForecastExportJobCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
