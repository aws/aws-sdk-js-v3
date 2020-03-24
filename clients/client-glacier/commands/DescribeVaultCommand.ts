import {
  GlacierClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../GlacierClient";
import { DescribeVaultInput, DescribeVaultOutput } from "../models/index";
import {
  deserializeAws_restJson1_1DescribeVaultCommand,
  serializeAws_restJson1_1DescribeVaultCommand
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

export type DescribeVaultCommandInput = DescribeVaultInput;
export type DescribeVaultCommandOutput = DescribeVaultOutput;

export class DescribeVaultCommand extends $Command<
  DescribeVaultCommandInput,
  DescribeVaultCommandOutput,
  GlacierClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeVaultCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlacierClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeVaultCommandInput, DescribeVaultCommandOutput> {
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
    input: DescribeVaultCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1_1DescribeVaultCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<DescribeVaultCommandOutput> {
    return deserializeAws_restJson1_1DescribeVaultCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
