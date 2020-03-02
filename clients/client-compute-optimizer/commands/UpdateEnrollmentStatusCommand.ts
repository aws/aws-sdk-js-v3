import {
  ComputeOptimizerClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../ComputeOptimizerClient";
import {
  UpdateEnrollmentStatusRequest,
  UpdateEnrollmentStatusResponse
} from "../models/index";
import {
  deserializeAws_json1_0UpdateEnrollmentStatusCommand,
  serializeAws_json1_0UpdateEnrollmentStatusCommand
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

export type UpdateEnrollmentStatusCommandInput = UpdateEnrollmentStatusRequest;
export type UpdateEnrollmentStatusCommandOutput = UpdateEnrollmentStatusResponse &
  __MetadataBearer;

export class UpdateEnrollmentStatusCommand extends $Command<
  UpdateEnrollmentStatusCommandInput,
  UpdateEnrollmentStatusCommandOutput,
  ComputeOptimizerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateEnrollmentStatusCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ComputeOptimizerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    UpdateEnrollmentStatusCommandInput,
    UpdateEnrollmentStatusCommandOutput
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
    input: UpdateEnrollmentStatusCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_0UpdateEnrollmentStatusCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateEnrollmentStatusCommandOutput> {
    return deserializeAws_json1_0UpdateEnrollmentStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
