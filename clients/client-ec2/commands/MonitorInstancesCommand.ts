import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { MonitorInstancesRequest, MonitorInstancesResult } from "../models/models_4";
import {
  deserializeAws_ec2MonitorInstancesCommand,
  serializeAws_ec2MonitorInstancesCommand,
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

export type MonitorInstancesCommandInput = MonitorInstancesRequest;
export type MonitorInstancesCommandOutput = MonitorInstancesResult & __MetadataBearer;

/**
 * <p>Enables detailed monitoring for a running instance. Otherwise, basic monitoring is
 *             enabled. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-cloudwatch.html">Monitoring your instances and
 *                 volumes</a> in the <i>Amazon Elastic Compute Cloud User
 *             Guide</i>.</p>
 *         <p>To disable detailed monitoring, see .</p>
 */
export class MonitorInstancesCommand extends $Command<
  MonitorInstancesCommandInput,
  MonitorInstancesCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: MonitorInstancesCommandInput) {
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
  ): Handler<MonitorInstancesCommandInput, MonitorInstancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "MonitorInstancesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: MonitorInstancesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: MonitorInstancesResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: MonitorInstancesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2MonitorInstancesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<MonitorInstancesCommandOutput> {
    return deserializeAws_ec2MonitorInstancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
