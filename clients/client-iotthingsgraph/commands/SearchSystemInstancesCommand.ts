import {
  IoTThingsGraphClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../IoTThingsGraphClient";
import {
  SearchSystemInstancesRequest,
  SearchSystemInstancesResponse
} from "../models/index";
import {
  deserializeAws_json1_1SearchSystemInstancesCommand,
  serializeAws_json1_1SearchSystemInstancesCommand
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
  SerdeContext,
  HttpHandlerOptions as __HttpHandlerOptions
} from "@aws-sdk/types";

export type SearchSystemInstancesCommandInput = SearchSystemInstancesRequest;
export type SearchSystemInstancesCommandOutput = SearchSystemInstancesResponse;

export class SearchSystemInstancesCommand extends $Command<
  SearchSystemInstancesCommandInput,
  SearchSystemInstancesCommandOutput,
  IoTThingsGraphClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SearchSystemInstancesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTThingsGraphClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    SearchSystemInstancesCommandInput,
    SearchSystemInstancesCommandOutput
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
    input: SearchSystemInstancesCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1SearchSystemInstancesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<SearchSystemInstancesCommandOutput> {
    return deserializeAws_json1_1SearchSystemInstancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
