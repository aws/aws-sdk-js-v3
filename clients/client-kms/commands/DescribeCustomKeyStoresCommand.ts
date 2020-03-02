import {
  KMSClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../KMSClient";
import {
  DescribeCustomKeyStoresRequest,
  DescribeCustomKeyStoresResponse
} from "../models/index";
import {
  deserializeAws_json1_1DescribeCustomKeyStoresCommand,
  serializeAws_json1_1DescribeCustomKeyStoresCommand
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

export type DescribeCustomKeyStoresCommandInput = DescribeCustomKeyStoresRequest;
export type DescribeCustomKeyStoresCommandOutput = DescribeCustomKeyStoresResponse &
  __MetadataBearer;

export class DescribeCustomKeyStoresCommand extends $Command<
  DescribeCustomKeyStoresCommandInput,
  DescribeCustomKeyStoresCommandOutput,
  KMSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeCustomKeyStoresCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KMSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribeCustomKeyStoresCommandInput,
    DescribeCustomKeyStoresCommandOutput
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
    input: DescribeCustomKeyStoresCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeCustomKeyStoresCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeCustomKeyStoresCommandOutput> {
    return deserializeAws_json1_1DescribeCustomKeyStoresCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
