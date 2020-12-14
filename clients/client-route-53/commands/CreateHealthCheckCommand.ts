import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { CreateHealthCheckRequest, CreateHealthCheckResponse } from "../models/models_0";
import {
  deserializeAws_restXmlCreateHealthCheckCommand,
  serializeAws_restXmlCreateHealthCheckCommand,
} from "../protocols/Aws_restXml";
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

export type CreateHealthCheckCommandInput = CreateHealthCheckRequest;
export type CreateHealthCheckCommandOutput = CreateHealthCheckResponse & __MetadataBearer;

/**
 * <p>Creates a new health check.</p>
 * 		       <p>For information about adding health checks to resource record sets, see
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_ResourceRecordSet.html#Route53-Type-ResourceRecordSet-HealthCheckId">HealthCheckId</a>
 * 			in
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_ChangeResourceRecordSets.html">ChangeResourceRecordSets</a>. </p>
 *
 * 		       <p>
 *             <b>ELB Load Balancers</b>
 *          </p>
 * 		       <p>If you're registering EC2 instances with an Elastic Load Balancing (ELB) load balancer, do not create Amazon Route 53 health checks for the
 * 			EC2 instances. When you register an EC2 instance with a load balancer, you configure settings for an ELB health check, which performs a
 * 			similar function to a Route 53 health check.</p>
 *
 * 		       <p>
 *             <b>Private Hosted Zones</b>
 *          </p>
 * 		       <p>You can associate health checks with failover resource record sets in a private hosted zone. Note the following:</p>
 * 		       <ul>
 *             <li>
 * 				           <p>Route 53 health checkers are outside the VPC. To check the health of an endpoint within a VPC by IP address, you must
 * 					assign a public IP address to the instance in the VPC.</p>
 * 			         </li>
 *             <li>
 * 				           <p>You can configure a health checker to check the health of an external resource that the instance relies on, such as a
 * 					database server.</p>
 * 			         </li>
 *             <li>
 * 				           <p>You can create a CloudWatch metric, associate an alarm with the metric, and then create a health check that is based on the
 * 					state of the alarm. For example, you might create a CloudWatch metric that checks the status of the Amazon EC2 <code>StatusCheckFailed</code> metric,
 * 					add an alarm to the metric, and then create a health check that is based on the state of the alarm. For information about creating
 * 					CloudWatch metrics and alarms by using the CloudWatch console, see the
 * 					<a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/WhatIsCloudWatch.html">Amazon CloudWatch User Guide</a>.</p>
 * 			         </li>
 *          </ul>
 */
export class CreateHealthCheckCommand extends $Command<
  CreateHealthCheckCommandInput,
  CreateHealthCheckCommandOutput,
  Route53ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateHealthCheckCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateHealthCheckCommandInput, CreateHealthCheckCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "CreateHealthCheckCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateHealthCheckRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateHealthCheckResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateHealthCheckCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlCreateHealthCheckCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateHealthCheckCommandOutput> {
    return deserializeAws_restXmlCreateHealthCheckCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
