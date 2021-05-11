import { LookoutMetricsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutMetricsClient";
import { DescribeAlertRequest, DescribeAlertResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeAlertCommand,
  serializeAws_restJson1DescribeAlertCommand,
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

export interface DescribeAlertCommandInput extends DescribeAlertRequest {}
export interface DescribeAlertCommandOutput extends DescribeAlertResponse, __MetadataBearer {}

/**
 * <p>Describes an alert.</p>
 *          <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource
 *       immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutMetricsClient, DescribeAlertCommand } from "@aws-sdk/client-lookoutmetrics"; // ES Modules import
 * // const { LookoutMetricsClient, DescribeAlertCommand } = require("@aws-sdk/client-lookoutmetrics"); // CommonJS import
 * const client = new LookoutMetricsClient(config);
 * const command = new DescribeAlertCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAlertCommandInput} for command's `input` shape.
 * @see {@link DescribeAlertCommandOutput} for command's `response` shape.
 * @see {@link LookoutMetricsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeAlertCommand extends $Command<
  DescribeAlertCommandInput,
  DescribeAlertCommandOutput,
  LookoutMetricsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeAlertCommandInput) {
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
  ): Handler<DescribeAlertCommandInput, DescribeAlertCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LookoutMetricsClient";
    const commandName = "DescribeAlertCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeAlertRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeAlertResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeAlertCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeAlertCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeAlertCommandOutput> {
    return deserializeAws_restJson1DescribeAlertCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
