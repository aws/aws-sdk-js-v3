import { LookoutMetricsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutMetricsClient";
import { DescribeAnomalyDetectorRequest, DescribeAnomalyDetectorResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeAnomalyDetectorCommand,
  serializeAws_restJson1DescribeAnomalyDetectorCommand,
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

export interface DescribeAnomalyDetectorCommandInput extends DescribeAnomalyDetectorRequest {}
export interface DescribeAnomalyDetectorCommandOutput extends DescribeAnomalyDetectorResponse, __MetadataBearer {}

/**
 * <p>Describes a detector.</p>
 *          <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource
 *       immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutMetricsClient, DescribeAnomalyDetectorCommand } from "@aws-sdk/client-lookoutmetrics"; // ES Modules import
 * // const { LookoutMetricsClient, DescribeAnomalyDetectorCommand } = require("@aws-sdk/client-lookoutmetrics"); // CommonJS import
 * const client = new LookoutMetricsClient(config);
 * const command = new DescribeAnomalyDetectorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAnomalyDetectorCommandInput} for command's `input` shape.
 * @see {@link DescribeAnomalyDetectorCommandOutput} for command's `response` shape.
 * @see {@link LookoutMetricsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeAnomalyDetectorCommand extends $Command<
  DescribeAnomalyDetectorCommandInput,
  DescribeAnomalyDetectorCommandOutput,
  LookoutMetricsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeAnomalyDetectorCommandInput) {
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
  ): Handler<DescribeAnomalyDetectorCommandInput, DescribeAnomalyDetectorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LookoutMetricsClient";
    const commandName = "DescribeAnomalyDetectorCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeAnomalyDetectorRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeAnomalyDetectorResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeAnomalyDetectorCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeAnomalyDetectorCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeAnomalyDetectorCommandOutput> {
    return deserializeAws_restJson1DescribeAnomalyDetectorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
