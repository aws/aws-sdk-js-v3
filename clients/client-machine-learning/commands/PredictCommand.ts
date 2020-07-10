import { MachineLearningClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MachineLearningClient";
import { PredictInput, PredictOutput } from "../models/index";
import { deserializeAws_json1_1PredictCommand, serializeAws_json1_1PredictCommand } from "../protocols/Aws_json1_1";
import { getPredictEndpointPlugin } from "@aws-sdk/middleware-sdk-machinelearning";
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

export type PredictCommandInput = PredictInput;
export type PredictCommandOutput = PredictOutput & __MetadataBearer;

export class PredictCommand extends $Command<
  PredictCommandInput,
  PredictCommandOutput,
  MachineLearningClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PredictCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MachineLearningClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PredictCommandInput, PredictCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getPredictEndpointPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PredictCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PredictCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PredictCommandOutput> {
    return deserializeAws_json1_1PredictCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
