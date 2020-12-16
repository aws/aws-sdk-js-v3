import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { DeleteModelVersionRequest, DeleteModelVersionResult } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteModelVersionCommand,
  serializeAws_json1_1DeleteModelVersionCommand,
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

export type DeleteModelVersionCommandInput = DeleteModelVersionRequest;
export type DeleteModelVersionCommandOutput = DeleteModelVersionResult & __MetadataBearer;

/**
 * <p>Deletes a model version.</p>
 * 	        <p>You can delete models and model versions in Amazon Fraud Detector, provided that they are not associated with a detector version.</p>
 * 	        <p> When you delete a model version, Amazon Fraud Detector permanently deletes that model version from the evaluation history, and the data is no longer stored in Amazon Fraud Detector.</p>
 */
export class DeleteModelVersionCommand extends $Command<
  DeleteModelVersionCommandInput,
  DeleteModelVersionCommandOutput,
  FraudDetectorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteModelVersionCommandInput) {
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
  ): Handler<DeleteModelVersionCommandInput, DeleteModelVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FraudDetectorClient";
    const commandName = "DeleteModelVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteModelVersionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteModelVersionResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteModelVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteModelVersionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteModelVersionCommandOutput> {
    return deserializeAws_json1_1DeleteModelVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
