import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { DeleteLabelRequest, DeleteLabelResult } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteLabelCommand,
  serializeAws_json1_1DeleteLabelCommand,
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

export type DeleteLabelCommandInput = DeleteLabelRequest;
export type DeleteLabelCommandOutput = DeleteLabelResult & __MetadataBearer;

/**
 * <p>Deletes a label.</p>
 * 	        <p>You cannot delete labels that are included in an event type in Amazon Fraud Detector.</p>
 *          <p>You cannot delete a label assigned to an event ID. You must first delete the relevant event ID.</p>
 *
 *          <p>When you delete a label, Amazon Fraud Detector permanently deletes that label from the evaluation history, and the data is no longer stored in Amazon Fraud Detector.</p>
 */
export class DeleteLabelCommand extends $Command<
  DeleteLabelCommandInput,
  DeleteLabelCommandOutput,
  FraudDetectorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteLabelCommandInput) {
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
  ): Handler<DeleteLabelCommandInput, DeleteLabelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FraudDetectorClient";
    const commandName = "DeleteLabelCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteLabelRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteLabelResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteLabelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteLabelCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteLabelCommandOutput> {
    return deserializeAws_json1_1DeleteLabelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
