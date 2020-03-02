import {
  LightsailClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../LightsailClient";
import {
  GetInstanceMetricDataRequest,
  GetInstanceMetricDataResult
} from "../models/index";
import {
  deserializeAws_json1_1GetInstanceMetricDataCommand,
  serializeAws_json1_1GetInstanceMetricDataCommand
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

export type GetInstanceMetricDataCommandInput = GetInstanceMetricDataRequest;
export type GetInstanceMetricDataCommandOutput = GetInstanceMetricDataResult &
  __MetadataBearer;

export class GetInstanceMetricDataCommand extends $Command<
  GetInstanceMetricDataCommandInput,
  GetInstanceMetricDataCommandOutput,
  LightsailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetInstanceMetricDataCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LightsailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    GetInstanceMetricDataCommandInput,
    GetInstanceMetricDataCommandOutput
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
    input: GetInstanceMetricDataCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1GetInstanceMetricDataCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetInstanceMetricDataCommandOutput> {
    return deserializeAws_json1_1GetInstanceMetricDataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
