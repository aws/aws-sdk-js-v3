import {
  ComputeOptimizerClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../ComputeOptimizerClient";
import {
  GetEnrollmentStatusRequest,
  GetEnrollmentStatusResponse
} from "../models/index";
import {
  deserializeAws_json1_0GetEnrollmentStatusCommand,
  serializeAws_json1_0GetEnrollmentStatusCommand
} from "../protocols/Aws_json1_0";
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

export type GetEnrollmentStatusCommandInput = GetEnrollmentStatusRequest;
export type GetEnrollmentStatusCommandOutput = GetEnrollmentStatusResponse &
  __MetadataBearer;

export class GetEnrollmentStatusCommand extends $Command<
  GetEnrollmentStatusCommandInput,
  GetEnrollmentStatusCommandOutput,
  ComputeOptimizerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetEnrollmentStatusCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ComputeOptimizerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    GetEnrollmentStatusCommandInput,
    GetEnrollmentStatusCommandOutput
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
    input: GetEnrollmentStatusCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_0GetEnrollmentStatusCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetEnrollmentStatusCommandOutput> {
    return deserializeAws_json1_0GetEnrollmentStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
