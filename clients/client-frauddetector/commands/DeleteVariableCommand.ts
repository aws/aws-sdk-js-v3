import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { DeleteVariableRequest, DeleteVariableResult } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteVariableCommand,
  serializeAws_json1_1DeleteVariableCommand,
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

export type DeleteVariableCommandInput = DeleteVariableRequest;
export type DeleteVariableCommandOutput = DeleteVariableResult & __MetadataBearer;

/**
 * <p>Deletes a variable.</p>
 * 	        <p>You can't delete variables that are included in an event type in Amazon Fraud Detector.</p>
 * 	        <p>Amazon Fraud Detector automatically deletes model output variables and SageMaker model output variables when you delete the model. You can't delete these variables manually.</p>
 * 	        <p>When you delete a variable, Amazon Fraud Detector permanently deletes that variable from the evaluation history, and the data is no longer stored in Amazon Fraud Detector.</p>
 */
export class DeleteVariableCommand extends $Command<
  DeleteVariableCommandInput,
  DeleteVariableCommandOutput,
  FraudDetectorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteVariableCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FraudDetectorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteVariableCommandInput, DeleteVariableCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FraudDetectorClient";
    const commandName = "DeleteVariableCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteVariableRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteVariableResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteVariableCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteVariableCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteVariableCommandOutput> {
    return deserializeAws_json1_1DeleteVariableCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
