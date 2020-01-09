import {
  AppStreamClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../AppStreamClient";
import {
  DescribeStacksRequest,
  DescribeStacksResult,
} from "../models/index";
import {
  deserializeAws_json1_1DescribeStacksCommand,
  serializeAws_json1_1DescribeStacksCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
} from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  SerdeContext,
  HttpHandlerOptions as __HttpHandlerOptions,
} from "@aws-sdk/types";

export type DescribeStacksCommandInput = DescribeStacksRequest;
export type DescribeStacksCommandOutput = DescribeStacksResult;

export class DescribeStacksCommand extends $Command<DescribeStacksCommandInput, DescribeStacksCommandOutput, AppStreamClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeStacksCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppStreamClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeStacksCommandInput, DescribeStacksCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any,
    }
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeStacksCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeStacksCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<DescribeStacksCommandOutput> {
    return deserializeAws_json1_1DescribeStacksCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
