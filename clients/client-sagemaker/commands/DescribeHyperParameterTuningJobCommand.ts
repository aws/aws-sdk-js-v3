import {
  SageMakerClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../SageMakerClient";
import {
  DescribeHyperParameterTuningJobRequest,
  DescribeHyperParameterTuningJobResponse,
} from "../models/index";
import {
  deserializeAws_json1_1DescribeHyperParameterTuningJobCommand,
  serializeAws_json1_1DescribeHyperParameterTuningJobCommand,
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

export type DescribeHyperParameterTuningJobCommandInput = DescribeHyperParameterTuningJobRequest;
export type DescribeHyperParameterTuningJobCommandOutput = DescribeHyperParameterTuningJobResponse;

export class DescribeHyperParameterTuningJobCommand extends $Command<DescribeHyperParameterTuningJobCommandInput, DescribeHyperParameterTuningJobCommandOutput, SageMakerClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeHyperParameterTuningJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeHyperParameterTuningJobCommandInput, DescribeHyperParameterTuningJobCommandOutput> {
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
    input: DescribeHyperParameterTuningJobCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeHyperParameterTuningJobCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<DescribeHyperParameterTuningJobCommandOutput> {
    return deserializeAws_json1_1DescribeHyperParameterTuningJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
