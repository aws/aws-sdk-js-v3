import { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient";
import { DeleteAnomalySubscriptionRequest, DeleteAnomalySubscriptionResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteAnomalySubscriptionCommand,
  serializeAws_json1_1DeleteAnomalySubscriptionCommand,
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

export type DeleteAnomalySubscriptionCommandInput = DeleteAnomalySubscriptionRequest;
export type DeleteAnomalySubscriptionCommandOutput = DeleteAnomalySubscriptionResponse & __MetadataBearer;

/**
 * <p>Deletes a cost anomaly subscription. </p>
 */
export class DeleteAnomalySubscriptionCommand extends $Command<
  DeleteAnomalySubscriptionCommandInput,
  DeleteAnomalySubscriptionCommandOutput,
  CostExplorerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteAnomalySubscriptionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CostExplorerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteAnomalySubscriptionCommandInput, DeleteAnomalySubscriptionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CostExplorerClient";
    const commandName = "DeleteAnomalySubscriptionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteAnomalySubscriptionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteAnomalySubscriptionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteAnomalySubscriptionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteAnomalySubscriptionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteAnomalySubscriptionCommandOutput> {
    return deserializeAws_json1_1DeleteAnomalySubscriptionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
