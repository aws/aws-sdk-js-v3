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
  DeleteLoadBalancerPolicyInput,
  DeleteLoadBalancerPolicyInputFilterSensitiveLog,
  DeleteLoadBalancerPolicyOutput,
  DeleteLoadBalancerPolicyOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryDeleteLoadBalancerPolicyCommand,
  serializeAws_queryDeleteLoadBalancerPolicyCommand,
} from "../protocols/Aws_query";

export interface DeleteLoadBalancerPolicyCommandInput extends DeleteLoadBalancerPolicyInput {}
export interface DeleteLoadBalancerPolicyCommandOutput extends DeleteLoadBalancerPolicyOutput, __MetadataBearer {}

/**
 * <p>Deletes the specified policy from the specified load balancer. This policy must not be enabled for any listeners.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingClient, DeleteLoadBalancerPolicyCommand } from "@aws-sdk/client-elastic-load-balancing"; // ES Modules import
 * // const { ElasticLoadBalancingClient, DeleteLoadBalancerPolicyCommand } = require("@aws-sdk/client-elastic-load-balancing"); // CommonJS import
 * const client = new ElasticLoadBalancingClient(config);
 * const command = new DeleteLoadBalancerPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteLoadBalancerPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteLoadBalancerPolicyCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingClientResolvedConfig | config} for ElasticLoadBalancingClient's `config` shape.
 *
 */
export class DeleteLoadBalancerPolicyCommand extends $Command<
  DeleteLoadBalancerPolicyCommandInput,
  DeleteLoadBalancerPolicyCommandOutput,
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

  constructor(readonly input: DeleteLoadBalancerPolicyCommandInput) {
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
  ): Handler<DeleteLoadBalancerPolicyCommandInput, DeleteLoadBalancerPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteLoadBalancerPolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticLoadBalancingClient";
    const commandName = "DeleteLoadBalancerPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteLoadBalancerPolicyInputFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteLoadBalancerPolicyOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteLoadBalancerPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDeleteLoadBalancerPolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteLoadBalancerPolicyCommandOutput> {
    return deserializeAws_queryDeleteLoadBalancerPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
