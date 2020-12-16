import { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient";
import { CreateAnomalySubscriptionRequest, CreateAnomalySubscriptionResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateAnomalySubscriptionCommand,
  serializeAws_json1_1CreateAnomalySubscriptionCommand,
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

export type CreateAnomalySubscriptionCommandInput = CreateAnomalySubscriptionRequest;
export type CreateAnomalySubscriptionCommandOutput = CreateAnomalySubscriptionResponse & __MetadataBearer;

/**
 * <p>Adds a subscription to a cost anomaly detection monitor. You can use each subscription to
 *       define subscribers with email or SNS notifications. Email subscribers can set a dollar
 *       threshold and a time frequency for receiving notifications. </p>
 */
export class CreateAnomalySubscriptionCommand extends $Command<
  CreateAnomalySubscriptionCommandInput,
  CreateAnomalySubscriptionCommandOutput,
  CostExplorerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateAnomalySubscriptionCommandInput) {
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
  ): Handler<CreateAnomalySubscriptionCommandInput, CreateAnomalySubscriptionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CostExplorerClient";
    const commandName = "CreateAnomalySubscriptionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateAnomalySubscriptionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateAnomalySubscriptionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateAnomalySubscriptionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateAnomalySubscriptionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateAnomalySubscriptionCommandOutput> {
    return deserializeAws_json1_1CreateAnomalySubscriptionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
