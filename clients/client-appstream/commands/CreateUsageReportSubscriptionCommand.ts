import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { CreateUsageReportSubscriptionRequest, CreateUsageReportSubscriptionResult } from "../models/models_0";
import {
  deserializeAws_json1_1CreateUsageReportSubscriptionCommand,
  serializeAws_json1_1CreateUsageReportSubscriptionCommand,
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

export type CreateUsageReportSubscriptionCommandInput = CreateUsageReportSubscriptionRequest;
export type CreateUsageReportSubscriptionCommandOutput = CreateUsageReportSubscriptionResult & __MetadataBearer;

/**
 * <p>Creates a usage report subscription. Usage reports are generated daily.</p>
 */
export class CreateUsageReportSubscriptionCommand extends $Command<
  CreateUsageReportSubscriptionCommandInput,
  CreateUsageReportSubscriptionCommandOutput,
  AppStreamClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateUsageReportSubscriptionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppStreamClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateUsageReportSubscriptionCommandInput, CreateUsageReportSubscriptionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppStreamClient";
    const commandName = "CreateUsageReportSubscriptionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateUsageReportSubscriptionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateUsageReportSubscriptionResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateUsageReportSubscriptionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateUsageReportSubscriptionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateUsageReportSubscriptionCommandOutput> {
    return deserializeAws_json1_1CreateUsageReportSubscriptionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
