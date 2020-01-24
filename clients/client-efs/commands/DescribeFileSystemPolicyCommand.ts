import {
  EFSClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../EFSClient";
import {
  DescribeFileSystemPolicyRequest,
  FileSystemPolicyDescription
} from "../models/index";
import {
  deserializeAws_restJson1_1DescribeFileSystemPolicyCommand,
  serializeAws_restJson1_1DescribeFileSystemPolicyCommand
} from "../protocols/Aws_restJson1_1";
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

export type DescribeFileSystemPolicyCommandInput = DescribeFileSystemPolicyRequest;
export type DescribeFileSystemPolicyCommandOutput = FileSystemPolicyDescription;

export class DescribeFileSystemPolicyCommand extends $Command<
  DescribeFileSystemPolicyCommandInput,
  DescribeFileSystemPolicyCommandOutput,
  EFSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeFileSystemPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EFSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribeFileSystemPolicyCommandInput,
    DescribeFileSystemPolicyCommandOutput
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
    input: DescribeFileSystemPolicyCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1_1DescribeFileSystemPolicyCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<DescribeFileSystemPolicyCommandOutput> {
    return deserializeAws_restJson1_1DescribeFileSystemPolicyCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
