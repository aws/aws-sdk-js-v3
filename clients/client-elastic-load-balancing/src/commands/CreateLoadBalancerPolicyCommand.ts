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
  CreateLoadBalancerPolicyInput,
  CreateLoadBalancerPolicyInputFilterSensitiveLog,
  CreateLoadBalancerPolicyOutput,
  CreateLoadBalancerPolicyOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryCreateLoadBalancerPolicyCommand,
  serializeAws_queryCreateLoadBalancerPolicyCommand,
} from "../protocols/Aws_query";

export interface CreateLoadBalancerPolicyCommandInput extends CreateLoadBalancerPolicyInput {}
export interface CreateLoadBalancerPolicyCommandOutput extends CreateLoadBalancerPolicyOutput, __MetadataBearer {}

/**
 * <p>Creates a policy with the specified attributes for the specified load balancer.</p>
 *          <p>Policies are settings that are saved for your load balancer and that can be applied to the listener or the application server, depending on the policy type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingClient, CreateLoadBalancerPolicyCommand } from "@aws-sdk/client-elastic-load-balancing"; // ES Modules import
 * // const { ElasticLoadBalancingClient, CreateLoadBalancerPolicyCommand } = require("@aws-sdk/client-elastic-load-balancing"); // CommonJS import
 * const client = new ElasticLoadBalancingClient(config);
 * const command = new CreateLoadBalancerPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateLoadBalancerPolicyCommandInput} for command's `input` shape.
 * @see {@link CreateLoadBalancerPolicyCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingClientResolvedConfig | config} for ElasticLoadBalancingClient's `config` shape.
 *
 */
export class CreateLoadBalancerPolicyCommand extends $Command<
  CreateLoadBalancerPolicyCommandInput,
  CreateLoadBalancerPolicyCommandOutput,
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

  constructor(readonly input: CreateLoadBalancerPolicyCommandInput) {
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
  ): Handler<CreateLoadBalancerPolicyCommandInput, CreateLoadBalancerPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateLoadBalancerPolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticLoadBalancingClient";
    const commandName = "CreateLoadBalancerPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateLoadBalancerPolicyInputFilterSensitiveLog,
      outputFilterSensitiveLog: CreateLoadBalancerPolicyOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateLoadBalancerPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCreateLoadBalancerPolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateLoadBalancerPolicyCommandOutput> {
    return deserializeAws_queryCreateLoadBalancerPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
