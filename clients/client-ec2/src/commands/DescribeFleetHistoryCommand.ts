import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeFleetHistoryRequest, DescribeFleetHistoryResult } from "../models/models_2";
import {
  deserializeAws_ec2DescribeFleetHistoryCommand,
  serializeAws_ec2DescribeFleetHistoryCommand,
} from "../protocols/Aws_ec2";
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

export interface DescribeFleetHistoryCommandInput extends DescribeFleetHistoryRequest {}
export interface DescribeFleetHistoryCommandOutput extends DescribeFleetHistoryResult, __MetadataBearer {}

/**
 * <p>Describes the events for the specified EC2 Fleet during the specified time.</p>
 *          <p>EC2 Fleet events are delayed by up to 30 seconds before they can be described. This ensures
 *          that you can query by the last evaluated time and not miss a recorded event. EC2 Fleet events
 *          are available for 48 hours.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-fleet.html#monitor-ec2-fleet">Monitoring your EC2 Fleet</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeFleetHistoryCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeFleetHistoryCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeFleetHistoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeFleetHistoryCommandInput} for command's `input` shape.
 * @see {@link DescribeFleetHistoryCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeFleetHistoryCommand extends $Command<
  DescribeFleetHistoryCommandInput,
  DescribeFleetHistoryCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeFleetHistoryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeFleetHistoryCommandInput, DescribeFleetHistoryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeFleetHistoryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeFleetHistoryRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeFleetHistoryResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeFleetHistoryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeFleetHistoryCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeFleetHistoryCommandOutput> {
    return deserializeAws_ec2DescribeFleetHistoryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
