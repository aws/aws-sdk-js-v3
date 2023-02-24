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

import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import {
  GetLoadBalancerTlsPoliciesRequest,
  GetLoadBalancerTlsPoliciesRequestFilterSensitiveLog,
  GetLoadBalancerTlsPoliciesResult,
  GetLoadBalancerTlsPoliciesResultFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_json1_1GetLoadBalancerTlsPoliciesCommand,
  serializeAws_json1_1GetLoadBalancerTlsPoliciesCommand,
} from "../protocols/Aws_json1_1";

export interface GetLoadBalancerTlsPoliciesCommandInput extends GetLoadBalancerTlsPoliciesRequest {}
export interface GetLoadBalancerTlsPoliciesCommandOutput extends GetLoadBalancerTlsPoliciesResult, __MetadataBearer {}

/**
 * <p>Returns a list of TLS security policies that you can apply to Lightsail load
 *       balancers.</p>
 *          <p>For more information about load balancer TLS security policies, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configure-load-balancer-tls-security-policy">Configuring TLS security policies on your Amazon Lightsail load
 *         balancers</a> in the <i>Amazon Lightsail Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetLoadBalancerTlsPoliciesCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetLoadBalancerTlsPoliciesCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetLoadBalancerTlsPoliciesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetLoadBalancerTlsPoliciesCommandInput} for command's `input` shape.
 * @see {@link GetLoadBalancerTlsPoliciesCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 */
export class GetLoadBalancerTlsPoliciesCommand extends $Command<
  GetLoadBalancerTlsPoliciesCommandInput,
  GetLoadBalancerTlsPoliciesCommandOutput,
  LightsailClientResolvedConfig
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

  constructor(readonly input: GetLoadBalancerTlsPoliciesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LightsailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetLoadBalancerTlsPoliciesCommandInput, GetLoadBalancerTlsPoliciesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetLoadBalancerTlsPoliciesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "GetLoadBalancerTlsPoliciesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetLoadBalancerTlsPoliciesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetLoadBalancerTlsPoliciesResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetLoadBalancerTlsPoliciesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetLoadBalancerTlsPoliciesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetLoadBalancerTlsPoliciesCommandOutput> {
    return deserializeAws_json1_1GetLoadBalancerTlsPoliciesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
