import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { PutAnomalyDetectorInput, PutAnomalyDetectorOutput } from "../models/models_0";
import {
  deserializeAws_queryPutAnomalyDetectorCommand,
  serializeAws_queryPutAnomalyDetectorCommand,
} from "../protocols/Aws_query";
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

export type PutAnomalyDetectorCommandInput = PutAnomalyDetectorInput;
export type PutAnomalyDetectorCommandOutput = PutAnomalyDetectorOutput & __MetadataBearer;

/**
 * <p>Creates an anomaly detection model for a CloudWatch metric. You can use the model
 * 			to display a band of expected normal values when the metric is graphed.</p>
 * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Anomaly_Detection.html">CloudWatch Anomaly Detection</a>.</p>
 */
export class PutAnomalyDetectorCommand extends $Command<
  PutAnomalyDetectorCommandInput,
  PutAnomalyDetectorCommandOutput,
  CloudWatchClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutAnomalyDetectorCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutAnomalyDetectorCommandInput, PutAnomalyDetectorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchClient";
    const commandName = "PutAnomalyDetectorCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutAnomalyDetectorInput.filterSensitiveLog,
      outputFilterSensitiveLog: PutAnomalyDetectorOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutAnomalyDetectorCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryPutAnomalyDetectorCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutAnomalyDetectorCommandOutput> {
    return deserializeAws_queryPutAnomalyDetectorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
