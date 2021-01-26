import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { PutEvaluationsRequest, PutEvaluationsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1PutEvaluationsCommand,
  serializeAws_json1_1PutEvaluationsCommand,
} from "../protocols/Aws_json1_1";
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

export type PutEvaluationsCommandInput = PutEvaluationsRequest;
export type PutEvaluationsCommandOutput = PutEvaluationsResponse & __MetadataBearer;

/**
 * <p>Used by an AWS Lambda function to deliver evaluation results to
 * 			AWS Config. This action is required in every AWS Lambda function
 * 			that is invoked by an AWS Config rule.</p>
 */
export class PutEvaluationsCommand extends $Command<
  PutEvaluationsCommandInput,
  PutEvaluationsCommandOutput,
  ConfigServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutEvaluationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConfigServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutEvaluationsCommandInput, PutEvaluationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "PutEvaluationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutEvaluationsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutEvaluationsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutEvaluationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutEvaluationsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutEvaluationsCommandOutput> {
    return deserializeAws_json1_1PutEvaluationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
