import {
  BackupClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../BackupClient";
import {
  DescribeRecoveryPointInput,
  DescribeRecoveryPointOutput
} from "../models/index";
import {
  deserializeAws_restJson1_1DescribeRecoveryPointCommand,
  serializeAws_restJson1_1DescribeRecoveryPointCommand
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

export type DescribeRecoveryPointCommandInput = DescribeRecoveryPointInput;
export type DescribeRecoveryPointCommandOutput = DescribeRecoveryPointOutput;

export class DescribeRecoveryPointCommand extends $Command<
  DescribeRecoveryPointCommandInput,
  DescribeRecoveryPointCommandOutput,
  BackupClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeRecoveryPointCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BackupClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribeRecoveryPointCommandInput,
    DescribeRecoveryPointCommandOutput
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
    input: DescribeRecoveryPointCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1_1DescribeRecoveryPointCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<DescribeRecoveryPointCommandOutput> {
    return deserializeAws_restJson1_1DescribeRecoveryPointCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
