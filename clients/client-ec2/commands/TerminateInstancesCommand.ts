import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { TerminateInstancesRequest, TerminateInstancesResult } from "../models/models_5";
import {
  deserializeAws_ec2TerminateInstancesCommand,
  serializeAws_ec2TerminateInstancesCommand,
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

export type TerminateInstancesCommandInput = TerminateInstancesRequest;
export type TerminateInstancesCommandOutput = TerminateInstancesResult & __MetadataBearer;

/**
 * <p>Shuts down the specified instances. This operation is idempotent; if you terminate an
 *             instance more than once, each call succeeds. </p>
 *         <p>If you specify multiple instances and the request fails (for example, because of a
 *             single incorrect instance ID), none of the instances are terminated.</p>
 *         <p>Terminated instances remain visible after termination (for approximately one
 *             hour).</p>
 *         <p>By default, Amazon EC2 deletes all EBS volumes that were attached when the instance
 *             launched. Volumes attached after instance launch continue running.</p>
 *         <p>You can stop, start, and terminate EBS-backed instances. You can only terminate
 *             instance store-backed instances. What happens to an instance differs if you stop it or
 *             terminate it. For example, when you stop an instance, the root device and any other
 *             devices attached to the instance persist. When you terminate an instance, any attached
 *             EBS volumes with the <code>DeleteOnTermination</code> block device mapping parameter set
 *             to <code>true</code> are automatically deleted. For more information about the
 *             differences between stopping and terminating instances, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-lifecycle.html">Instance lifecycle</a>
 *             in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 *         <p>For more information about troubleshooting, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/TroubleshootingInstancesShuttingDown.html">Troubleshooting terminating your instance</a> in the <i>Amazon Elastic
 *                 Compute Cloud User Guide</i>.</p>
 */
export class TerminateInstancesCommand extends $Command<
  TerminateInstancesCommandInput,
  TerminateInstancesCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: TerminateInstancesCommandInput) {
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
  ): Handler<TerminateInstancesCommandInput, TerminateInstancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "TerminateInstancesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: TerminateInstancesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: TerminateInstancesResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: TerminateInstancesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2TerminateInstancesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<TerminateInstancesCommandOutput> {
    return deserializeAws_ec2TerminateInstancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
