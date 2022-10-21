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
  ElasticLoadBalancingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticLoadBalancingClient";
import {
  ApplySecurityGroupsToLoadBalancerInput,
  ApplySecurityGroupsToLoadBalancerInputFilterSensitiveLog,
  ApplySecurityGroupsToLoadBalancerOutput,
  ApplySecurityGroupsToLoadBalancerOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryApplySecurityGroupsToLoadBalancerCommand,
  serializeAws_queryApplySecurityGroupsToLoadBalancerCommand,
} from "../protocols/Aws_query";

export interface ApplySecurityGroupsToLoadBalancerCommandInput extends ApplySecurityGroupsToLoadBalancerInput {}
export interface ApplySecurityGroupsToLoadBalancerCommandOutput
  extends ApplySecurityGroupsToLoadBalancerOutput,
    __MetadataBearer {}

/**
 * <p>Associates one or more security groups with your load balancer in a virtual private cloud (VPC). The specified security groups override the previously associated security groups.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-security-groups.html#elb-vpc-security-groups">Security Groups for Load Balancers in a VPC</a>
 *             in the <i>Classic Load Balancers Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingClient, ApplySecurityGroupsToLoadBalancerCommand } from "@aws-sdk/client-elastic-load-balancing"; // ES Modules import
 * // const { ElasticLoadBalancingClient, ApplySecurityGroupsToLoadBalancerCommand } = require("@aws-sdk/client-elastic-load-balancing"); // CommonJS import
 * const client = new ElasticLoadBalancingClient(config);
 * const command = new ApplySecurityGroupsToLoadBalancerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ApplySecurityGroupsToLoadBalancerCommandInput} for command's `input` shape.
 * @see {@link ApplySecurityGroupsToLoadBalancerCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingClientResolvedConfig | config} for ElasticLoadBalancingClient's `config` shape.
 *
 */
export class ApplySecurityGroupsToLoadBalancerCommand extends $Command<
  ApplySecurityGroupsToLoadBalancerCommandInput,
  ApplySecurityGroupsToLoadBalancerCommandOutput,
  ElasticLoadBalancingClientResolvedConfig
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

  constructor(readonly input: ApplySecurityGroupsToLoadBalancerCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticLoadBalancingClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ApplySecurityGroupsToLoadBalancerCommandInput, ApplySecurityGroupsToLoadBalancerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ApplySecurityGroupsToLoadBalancerCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticLoadBalancingClient";
    const commandName = "ApplySecurityGroupsToLoadBalancerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ApplySecurityGroupsToLoadBalancerInputFilterSensitiveLog,
      outputFilterSensitiveLog: ApplySecurityGroupsToLoadBalancerOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ApplySecurityGroupsToLoadBalancerCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryApplySecurityGroupsToLoadBalancerCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ApplySecurityGroupsToLoadBalancerCommandOutput> {
    return deserializeAws_queryApplySecurityGroupsToLoadBalancerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
