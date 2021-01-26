import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";
import { DescribeSimulationJobBatchRequest, DescribeSimulationJobBatchResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeSimulationJobBatchCommand,
  serializeAws_restJson1DescribeSimulationJobBatchCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type DescribeSimulationJobBatchCommandInput = DescribeSimulationJobBatchRequest;
export type DescribeSimulationJobBatchCommandOutput = DescribeSimulationJobBatchResponse & __MetadataBearer;

/**
 * <p>Describes a simulation job batch.</p>
 */
export class DescribeSimulationJobBatchCommand extends $Command<
  DescribeSimulationJobBatchCommandInput,
  DescribeSimulationJobBatchCommandOutput,
  RoboMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeSimulationJobBatchCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RoboMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeSimulationJobBatchCommandInput, DescribeSimulationJobBatchCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RoboMakerClient";
    const commandName = "DescribeSimulationJobBatchCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeSimulationJobBatchRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeSimulationJobBatchResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeSimulationJobBatchCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeSimulationJobBatchCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeSimulationJobBatchCommandOutput> {
    return deserializeAws_restJson1DescribeSimulationJobBatchCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
