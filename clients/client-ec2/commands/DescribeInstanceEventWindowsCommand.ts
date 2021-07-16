import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeInstanceEventWindowsRequest, DescribeInstanceEventWindowsResult } from "../models/models_2";
import {
  deserializeAws_ec2DescribeInstanceEventWindowsCommand,
  serializeAws_ec2DescribeInstanceEventWindowsCommand,
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

export interface DescribeInstanceEventWindowsCommandInput extends DescribeInstanceEventWindowsRequest {}
export interface DescribeInstanceEventWindowsCommandOutput
  extends DescribeInstanceEventWindowsResult,
    __MetadataBearer {}

/**
 * <p>Describes the specified event windows or all event windows.</p>
 *          <p>If you specify event window IDs, the output includes information for only the specified
 *          event windows. If you specify filters, the output includes information for only those event
 *          windows that meet the filter criteria. If you do not specify event windows IDs or filters,
 *          the output includes information for all event windows, which can affect performance. We
 *          recommend that you use pagination to ensure that the operation returns quickly and
 *          successfully. </p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/monitoring-instances-status-check_sched.html#event-windows">Define event windows
 *             for scheduled events</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeInstanceEventWindowsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeInstanceEventWindowsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeInstanceEventWindowsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeInstanceEventWindowsCommandInput} for command's `input` shape.
 * @see {@link DescribeInstanceEventWindowsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeInstanceEventWindowsCommand extends $Command<
  DescribeInstanceEventWindowsCommandInput,
  DescribeInstanceEventWindowsCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeInstanceEventWindowsCommandInput) {
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
  ): Handler<DescribeInstanceEventWindowsCommandInput, DescribeInstanceEventWindowsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeInstanceEventWindowsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeInstanceEventWindowsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeInstanceEventWindowsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeInstanceEventWindowsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeInstanceEventWindowsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeInstanceEventWindowsCommandOutput> {
    return deserializeAws_ec2DescribeInstanceEventWindowsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
