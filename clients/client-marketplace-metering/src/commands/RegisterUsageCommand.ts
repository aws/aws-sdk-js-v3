// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  MarketplaceMeteringClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MarketplaceMeteringClient";
import {
  RegisterUsageRequest,
  RegisterUsageRequestFilterSensitiveLog,
  RegisterUsageResult,
  RegisterUsageResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1RegisterUsageCommand,
  serializeAws_json1_1RegisterUsageCommand,
} from "../protocols/Aws_json1_1";

export interface RegisterUsageCommandInput extends RegisterUsageRequest {}
export interface RegisterUsageCommandOutput extends RegisterUsageResult, __MetadataBearer {}

/**
 * <p>Paid container software products sold through AWS Marketplace must integrate with the
 *             AWS Marketplace Metering Service and call the <code>RegisterUsage</code> operation for
 *             software entitlement and metering. Free and BYOL products for Amazon ECS or Amazon EKS
 *             aren't required to call <code>RegisterUsage</code>, but you may choose to do so if you
 *             would like to receive usage data in your seller reports. The sections below explain the
 *             behavior of <code>RegisterUsage</code>. <code>RegisterUsage</code> performs two primary
 *             functions: metering and entitlement.</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                     <i>Entitlement</i>: <code>RegisterUsage</code> allows you to
 *                     verify that the customer running your paid software is subscribed to your
 *                     product on AWS Marketplace, enabling you to guard against unauthorized use. Your
 *                     container image that integrates with <code>RegisterUsage</code> is only required
 *                     to guard against unauthorized use at container startup, as such a
 *                         <code>CustomerNotSubscribedException</code> or
 *                         <code>PlatformNotSupportedException</code> will only be thrown on the
 *                     initial call to <code>RegisterUsage</code>. Subsequent calls from the same
 *                     Amazon ECS task instance (e.g. task-id) or Amazon EKS pod will not throw a
 *                         <code>CustomerNotSubscribedException</code>, even if the customer
 *                     unsubscribes while the Amazon ECS task or Amazon EKS pod is still
 *                     running.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <i>Metering</i>: <code>RegisterUsage</code> meters software use
 *                     per ECS task, per hour, or per pod for Amazon EKS with usage prorated to the
 *                     second. A minimum of 1 minute of usage applies to tasks that are short lived.
 *                     For example, if a customer has a 10 node Amazon ECS or Amazon EKS cluster and a
 *                     service configured as a Daemon Set, then Amazon ECS or Amazon EKS will launch a
 *                     task on all 10 cluster nodes and the customer will be charged: (10 *
 *                     hourly_rate). Metering for software use is automatically handled by the AWS
 *                     Marketplace Metering Control Plane -- your software is not required to perform
 *                     any metering specific actions, other than call <code>RegisterUsage</code> once
 *                     for metering of software use to commence. The AWS Marketplace Metering Control
 *                     Plane will also continue to bill customers for running ECS tasks and Amazon EKS
 *                     pods, regardless of the customers subscription state, removing the need for your
 *                     software to perform entitlement checks at runtime.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceMeteringClient, RegisterUsageCommand } from "@aws-sdk/client-marketplace-metering"; // ES Modules import
 * // const { MarketplaceMeteringClient, RegisterUsageCommand } = require("@aws-sdk/client-marketplace-metering"); // CommonJS import
 * const client = new MarketplaceMeteringClient(config);
 * const command = new RegisterUsageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterUsageCommandInput} for command's `input` shape.
 * @see {@link RegisterUsageCommandOutput} for command's `response` shape.
 * @see {@link MarketplaceMeteringClientResolvedConfig | config} for MarketplaceMeteringClient's `config` shape.
 *
 */
export class RegisterUsageCommand extends $Command<
  RegisterUsageCommandInput,
  RegisterUsageCommandOutput,
  MarketplaceMeteringClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

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
    this.middlewareStack.use(getEndpointPlugin(configuration, RegisterUsageCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MarketplaceMeteringClient";
    const commandName = "RegisterUsageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RegisterUsageRequestFilterSensitiveLog,
      outputFilterSensitiveLog: RegisterUsageResultFilterSensitiveLog,
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
