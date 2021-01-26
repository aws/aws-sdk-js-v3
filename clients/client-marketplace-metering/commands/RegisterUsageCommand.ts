import {
  MarketplaceMeteringClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MarketplaceMeteringClient";
import { RegisterUsageRequest, RegisterUsageResult } from "../models/models_0";
import {
  deserializeAws_json1_1RegisterUsageCommand,
  serializeAws_json1_1RegisterUsageCommand,
} from "../protocols/Aws_json1_1";
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

export type RegisterUsageCommandInput = RegisterUsageRequest;
export type RegisterUsageCommandOutput = RegisterUsageResult & __MetadataBearer;

/**
 * <p>Paid container software products sold through AWS Marketplace must integrate with
 *             the AWS Marketplace Metering Service and call the RegisterUsage operation for software
 *             entitlement and metering. Free and BYOL products for Amazon ECS or Amazon EKS aren't
 *             required to call RegisterUsage, but you may choose to do so if you would like to receive
 *             usage data in your seller reports. The sections below explain the behavior of
 *             RegisterUsage. RegisterUsage performs two primary functions: metering and
 *             entitlement.</p>
 *
 *         <ul>
 *             <li>
 *                 <p>
 *                     <i>Entitlement</i>: RegisterUsage allows you to verify that the
 *                     customer running your paid software is subscribed to your product on AWS
 *                     Marketplace, enabling you to guard against unauthorized use. Your container
 *                     image that integrates with RegisterUsage is only required to guard against
 *                     unauthorized use at container startup, as such a
 *                     CustomerNotSubscribedException/PlatformNotSupportedException will only be thrown
 *                     on the initial call to RegisterUsage. Subsequent calls from the same Amazon ECS
 *                     task instance (e.g. task-id) or Amazon EKS pod will not throw a
 *                     CustomerNotSubscribedException, even if the customer unsubscribes while the
 *                     Amazon ECS task or Amazon EKS pod is still running.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <i>Metering</i>: RegisterUsage meters software use per ECS task,
 *                     per hour, or per pod for Amazon EKS with usage prorated to the second. A minimum
 *                     of 1 minute of usage applies to tasks that are short lived. For example, if a
 *                     customer has a 10 node Amazon ECS or Amazon EKS cluster and a service configured
 *                     as a Daemon Set, then Amazon ECS or Amazon EKS will launch a task on all 10
 *                     cluster nodes and the customer will be charged: (10 * hourly_rate). Metering for
 *                     software use is automatically handled by the AWS Marketplace Metering Control
 *                     Plane -- your software is not required to perform any metering specific actions,
 *                     other than call RegisterUsage once for metering of software use to commence. The
 *                     AWS Marketplace Metering Control Plane will also continue to bill customers for
 *                     running ECS tasks and Amazon EKS pods, regardless of the customers subscription
 *                     state, removing the need for your software to perform entitlement checks at
 *                     runtime.</p>
 *             </li>
 *          </ul>
 */
export class RegisterUsageCommand extends $Command<
  RegisterUsageCommandInput,
  RegisterUsageCommandOutput,
  MarketplaceMeteringClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RegisterUsageCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MarketplaceMeteringClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RegisterUsageCommandInput, RegisterUsageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MarketplaceMeteringClient";
    const commandName = "RegisterUsageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RegisterUsageRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RegisterUsageResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RegisterUsageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1RegisterUsageCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RegisterUsageCommandOutput> {
    return deserializeAws_json1_1RegisterUsageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
