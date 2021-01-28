import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateFlowLogsRequest, CreateFlowLogsResult } from "../models/models_0";
import { deserializeAws_ec2CreateFlowLogsCommand, serializeAws_ec2CreateFlowLogsCommand } from "../protocols/Aws_ec2";
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

export type CreateFlowLogsCommandInput = CreateFlowLogsRequest;
export type CreateFlowLogsCommandOutput = CreateFlowLogsResult & __MetadataBearer;

/**
 * <p>Creates one or more flow logs to capture information about IP traffic for a specific network interface,
 *             subnet, or VPC. </p>
 *
 *         <p>Flow log data for a monitored network interface is recorded as flow log records, which are log events
 *             consisting of fields that describe the traffic flow. For more information, see
 *             <a href="https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs.html#flow-log-records">Flow Log Records</a>
 *             in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
 *
 *         <p>When publishing to CloudWatch Logs, flow log records are published to a log group, and each network
 *             interface has a unique log stream in the log group. When publishing to Amazon S3, flow log records for all
 *             of the monitored network interfaces are published to a single log file object that is stored in the specified
 *             bucket.</p>
 *
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs.html">VPC Flow Logs</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
 */
export class CreateFlowLogsCommand extends $Command<
  CreateFlowLogsCommandInput,
  CreateFlowLogsCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateFlowLogsCommandInput) {
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
  ): Handler<CreateFlowLogsCommandInput, CreateFlowLogsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CreateFlowLogsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateFlowLogsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateFlowLogsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateFlowLogsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2CreateFlowLogsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateFlowLogsCommandOutput> {
    return deserializeAws_ec2CreateFlowLogsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
