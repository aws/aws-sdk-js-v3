import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { DescribeUsageReportSubscriptionsRequest, DescribeUsageReportSubscriptionsResult } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeUsageReportSubscriptionsCommand,
  serializeAws_json1_1DescribeUsageReportSubscriptionsCommand,
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

export type DescribeUsageReportSubscriptionsCommandInput = DescribeUsageReportSubscriptionsRequest;
export type DescribeUsageReportSubscriptionsCommandOutput = DescribeUsageReportSubscriptionsResult & __MetadataBearer;

/**
 * <p>Retrieves a list that describes one or more usage report subscriptions.</p>
 */
export class DescribeUsageReportSubscriptionsCommand extends $Command<
  DescribeUsageReportSubscriptionsCommandInput,
  DescribeUsageReportSubscriptionsCommandOutput,
  AppStreamClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeUsageReportSubscriptionsCommandInput) {
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
  ): Handler<DescribeUsageReportSubscriptionsCommandInput, DescribeUsageReportSubscriptionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppStreamClient";
    const commandName = "DescribeUsageReportSubscriptionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeUsageReportSubscriptionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeUsageReportSubscriptionsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeUsageReportSubscriptionsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeUsageReportSubscriptionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeUsageReportSubscriptionsCommandOutput> {
    return deserializeAws_json1_1DescribeUsageReportSubscriptionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
