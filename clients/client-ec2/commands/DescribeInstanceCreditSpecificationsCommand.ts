import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  DescribeInstanceCreditSpecificationsRequest,
  DescribeInstanceCreditSpecificationsResult,
} from "../models/models_2";
import {
  deserializeAws_ec2DescribeInstanceCreditSpecificationsCommand,
  serializeAws_ec2DescribeInstanceCreditSpecificationsCommand,
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

export type DescribeInstanceCreditSpecificationsCommandInput = DescribeInstanceCreditSpecificationsRequest;
export type DescribeInstanceCreditSpecificationsCommandOutput = DescribeInstanceCreditSpecificationsResult &
  __MetadataBearer;

/**
 * <p>Describes the credit option for CPU usage of the specified burstable performance
 *             instances. The credit options are <code>standard</code> and
 *             <code>unlimited</code>.</p>
 *         <p>If you do not specify an instance ID, Amazon EC2 returns burstable performance
 *             instances with the <code>unlimited</code> credit option, as well as instances that were
 *             previously configured as T2, T3, and T3a with the <code>unlimited</code> credit option.
 *             For example, if you resize a T2 instance, while it is configured as
 *                 <code>unlimited</code>, to an M4 instance, Amazon EC2 returns the M4
 *             instance.</p>
 *         <p>If you specify one or more instance IDs, Amazon EC2 returns the credit option
 *                 (<code>standard</code> or <code>unlimited</code>) of those instances. If you specify
 *             an instance ID that is not valid, such as an instance that is not a burstable
 *             performance instance, an error is returned.</p>
 *         <p>Recently terminated instances might appear in the returned results. This interval is
 *             usually less than one hour.</p>
 *         <p>If an Availability Zone is experiencing a service disruption and you specify instance
 *             IDs in the affected zone, or do not specify any instance IDs at all, the call fails. If
 *             you specify only instance IDs in an unaffected zone, the call works normally.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-performance-instances.html">Burstable
 *                 performance instances</a> in the <i>Amazon Elastic Compute Cloud User
 *                 Guide</i>.</p>
 */
export class DescribeInstanceCreditSpecificationsCommand extends $Command<
  DescribeInstanceCreditSpecificationsCommandInput,
  DescribeInstanceCreditSpecificationsCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeInstanceCreditSpecificationsCommandInput) {
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
  ): Handler<DescribeInstanceCreditSpecificationsCommandInput, DescribeInstanceCreditSpecificationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeInstanceCreditSpecificationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeInstanceCreditSpecificationsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeInstanceCreditSpecificationsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeInstanceCreditSpecificationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeInstanceCreditSpecificationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeInstanceCreditSpecificationsCommandOutput> {
    return deserializeAws_ec2DescribeInstanceCreditSpecificationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
