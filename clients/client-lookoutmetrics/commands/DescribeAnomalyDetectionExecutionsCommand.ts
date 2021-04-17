import { LookoutMetricsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutMetricsClient";
import {
  DescribeAnomalyDetectionExecutionsRequest,
  DescribeAnomalyDetectionExecutionsResponse,
} from "../models/models_0";
import {
  deserializeAws_restJson1DescribeAnomalyDetectionExecutionsCommand,
  serializeAws_restJson1DescribeAnomalyDetectionExecutionsCommand,
} from "../protocols/Aws_restJson1";
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

export interface DescribeAnomalyDetectionExecutionsCommandInput extends DescribeAnomalyDetectionExecutionsRequest {}
export interface DescribeAnomalyDetectionExecutionsCommandOutput
  extends DescribeAnomalyDetectionExecutionsResponse,
    __MetadataBearer {}

/**
 * <p>Returns information about the status of the specified anomaly detection jobs.</p>
 */
export class DescribeAnomalyDetectionExecutionsCommand extends $Command<
  DescribeAnomalyDetectionExecutionsCommandInput,
  DescribeAnomalyDetectionExecutionsCommandOutput,
  LookoutMetricsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeAnomalyDetectionExecutionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LookoutMetricsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeAnomalyDetectionExecutionsCommandInput, DescribeAnomalyDetectionExecutionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LookoutMetricsClient";
    const commandName = "DescribeAnomalyDetectionExecutionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeAnomalyDetectionExecutionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeAnomalyDetectionExecutionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeAnomalyDetectionExecutionsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeAnomalyDetectionExecutionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeAnomalyDetectionExecutionsCommandOutput> {
    return deserializeAws_restJson1DescribeAnomalyDetectionExecutionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
