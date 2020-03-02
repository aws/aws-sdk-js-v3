import {
  PIClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../PIClient";
import {
  GetResourceMetricsRequest,
  GetResourceMetricsResponse
} from "../models/index";
import {
  deserializeAws_json1_1GetResourceMetricsCommand,
  serializeAws_json1_1GetResourceMetricsCommand
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

export type GetResourceMetricsCommandInput = GetResourceMetricsRequest;
export type GetResourceMetricsCommandOutput = GetResourceMetricsResponse &
  __MetadataBearer;

export class GetResourceMetricsCommand extends $Command<
  GetResourceMetricsCommandInput,
  GetResourceMetricsCommandOutput,
  PIClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetResourceMetricsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PIClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetResourceMetricsCommandInput, GetResourceMetricsCommandOutput> {
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
    input: GetResourceMetricsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1GetResourceMetricsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetResourceMetricsCommandOutput> {
    return deserializeAws_json1_1GetResourceMetricsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
