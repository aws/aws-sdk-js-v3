import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { StartInstancesRequest, StartInstancesResult } from "../models/models_5";
import { deserializeAws_ec2StartInstancesCommand, serializeAws_ec2StartInstancesCommand } from "../protocols/Aws_ec2";
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

export type StartInstancesCommandInput = StartInstancesRequest;
export type StartInstancesCommandOutput = StartInstancesResult & __MetadataBearer;

/**
 * <p>Starts an Amazon EBS-backed instance that you've previously stopped.</p>
 *         <p>Instances that use Amazon EBS volumes as their root devices can be quickly stopped and
 *             started. When an instance is stopped, the compute resources are released and you are not
 *             billed for instance usage. However, your root partition Amazon EBS volume remains and
 *             continues to persist your data, and you are charged for Amazon EBS volume usage. You can
 *             restart your instance at any time. Every time you start your Windows instance, Amazon
 *             EC2 charges you for a full instance hour. If you stop and restart your Windows instance,
 *             a new instance hour begins and Amazon EC2 charges you for another full instance hour
 *             even if you are still within the same 60-minute period when it was stopped. Every time
 *             you start your Linux instance, Amazon EC2 charges a one-minute minimum for instance
 *             usage, and thereafter charges per second for instance usage.</p>
 *         <p>Before stopping an instance, make sure it is in a state from which it can be
 *             restarted. Stopping an instance does not preserve data stored in RAM.</p>
 *         <p>Performing this operation on an instance that uses an instance store as its root
 *             device returns an error.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Stop_Start.html">Stopping instances</a> in the
 *                 <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 */
export class StartInstancesCommand extends $Command<
  StartInstancesCommandInput,
  StartInstancesCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartInstancesCommandInput) {
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
  ): Handler<StartInstancesCommandInput, StartInstancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "StartInstancesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartInstancesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StartInstancesResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartInstancesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2StartInstancesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartInstancesCommandOutput> {
    return deserializeAws_ec2StartInstancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
