import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { DeleteEventTypeRequest, DeleteEventTypeResult } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteEventTypeCommand,
  serializeAws_json1_1DeleteEventTypeCommand,
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

export type DeleteEventTypeCommandInput = DeleteEventTypeRequest;
export type DeleteEventTypeCommandOutput = DeleteEventTypeResult & __MetadataBearer;

/**
 * <p>Deletes an event type.</p>
 * 	        <p>You cannot delete an event type that is used in a detector or a model.</p>
 * 	        <p>When you delete an entity type, Amazon Fraud Detector permanently deletes that entity type from the evaluation history, and the data is no longer stored in Amazon Fraud Detector.</p>
 */
export class DeleteEventTypeCommand extends $Command<
  DeleteEventTypeCommandInput,
  DeleteEventTypeCommandOutput,
  FraudDetectorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteEventTypeCommandInput) {
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
  ): Handler<DeleteEventTypeCommandInput, DeleteEventTypeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FraudDetectorClient";
    const commandName = "DeleteEventTypeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteEventTypeRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteEventTypeResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteEventTypeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteEventTypeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteEventTypeCommandOutput> {
    return deserializeAws_json1_1DeleteEventTypeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
