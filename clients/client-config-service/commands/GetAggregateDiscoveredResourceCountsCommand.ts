import {
  ConfigServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../ConfigServiceClient";
import {
  GetAggregateDiscoveredResourceCountsRequest,
  GetAggregateDiscoveredResourceCountsResponse
} from "../models/index";
import {
  deserializeAws_json1_1GetAggregateDiscoveredResourceCountsCommand,
  serializeAws_json1_1GetAggregateDiscoveredResourceCountsCommand
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

export type GetAggregateDiscoveredResourceCountsCommandInput = GetAggregateDiscoveredResourceCountsRequest;
export type GetAggregateDiscoveredResourceCountsCommandOutput = GetAggregateDiscoveredResourceCountsResponse &
  __MetadataBearer;

export class GetAggregateDiscoveredResourceCountsCommand extends $Command<
  GetAggregateDiscoveredResourceCountsCommandInput,
  GetAggregateDiscoveredResourceCountsCommandOutput,
  ConfigServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(
    readonly input: GetAggregateDiscoveredResourceCountsCommandInput
  ) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConfigServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    GetAggregateDiscoveredResourceCountsCommandInput,
    GetAggregateDiscoveredResourceCountsCommandOutput
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
    input: GetAggregateDiscoveredResourceCountsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1GetAggregateDiscoveredResourceCountsCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetAggregateDiscoveredResourceCountsCommandOutput> {
    return deserializeAws_json1_1GetAggregateDiscoveredResourceCountsCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
