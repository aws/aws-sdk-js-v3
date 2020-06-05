import {
  IoTJobsDataPlaneClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../IoTJobsDataPlaneClient";
import {
  StartNextPendingJobExecutionRequest,
  StartNextPendingJobExecutionResponse
} from "../models/index";
import {
  deserializeAws_restJson1StartNextPendingJobExecutionCommand,
  serializeAws_restJson1StartNextPendingJobExecutionCommand
} from "../protocols/Aws_restJson1";
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

export type StartNextPendingJobExecutionCommandInput = StartNextPendingJobExecutionRequest;
export type StartNextPendingJobExecutionCommandOutput = StartNextPendingJobExecutionResponse &
  __MetadataBearer;

export class StartNextPendingJobExecutionCommand extends $Command<
  StartNextPendingJobExecutionCommandInput,
  StartNextPendingJobExecutionCommandOutput,
  IoTJobsDataPlaneClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartNextPendingJobExecutionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTJobsDataPlaneClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    StartNextPendingJobExecutionCommandInput,
    StartNextPendingJobExecutionCommandOutput
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
    input: StartNextPendingJobExecutionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1StartNextPendingJobExecutionCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StartNextPendingJobExecutionCommandOutput> {
    return deserializeAws_restJson1StartNextPendingJobExecutionCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
