import {
  RoboMakerClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../RoboMakerClient";
import {
  BatchDescribeSimulationJobRequest,
  BatchDescribeSimulationJobResponse
} from "../models/index";
import {
  deserializeAws_restJson1BatchDescribeSimulationJobCommand,
  serializeAws_restJson1BatchDescribeSimulationJobCommand
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

export type BatchDescribeSimulationJobCommandInput = BatchDescribeSimulationJobRequest;
export type BatchDescribeSimulationJobCommandOutput = BatchDescribeSimulationJobResponse &
  __MetadataBearer;

export class BatchDescribeSimulationJobCommand extends $Command<
  BatchDescribeSimulationJobCommandInput,
  BatchDescribeSimulationJobCommandOutput,
  RoboMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BatchDescribeSimulationJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RoboMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    BatchDescribeSimulationJobCommandInput,
    BatchDescribeSimulationJobCommandOutput
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
    input: BatchDescribeSimulationJobCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1BatchDescribeSimulationJobCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchDescribeSimulationJobCommandOutput> {
    return deserializeAws_restJson1BatchDescribeSimulationJobCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
