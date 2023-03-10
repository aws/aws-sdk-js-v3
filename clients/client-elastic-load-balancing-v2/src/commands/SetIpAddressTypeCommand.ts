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
  ElasticLoadBalancingV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticLoadBalancingV2Client";
import {
  SetIpAddressTypeInput,
  SetIpAddressTypeInputFilterSensitiveLog,
  SetIpAddressTypeOutput,
  SetIpAddressTypeOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_querySetIpAddressTypeCommand,
  serializeAws_querySetIpAddressTypeCommand,
} from "../protocols/Aws_query";

/**
 * The input for {@link SetIpAddressTypeCommand}.
 */
export interface SetIpAddressTypeCommandInput extends SetIpAddressTypeInput {}
/**
 * The output of {@link SetIpAddressTypeCommand}.
 */
export interface SetIpAddressTypeCommandOutput extends SetIpAddressTypeOutput, __MetadataBearer {}

/**
 * <p>Sets the type of IP addresses used by the subnets of the specified load balancer.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, SetIpAddressTypeCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, SetIpAddressTypeCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * const client = new ElasticLoadBalancingV2Client(config);
 * const command = new SetIpAddressTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetIpAddressTypeCommandInput} for command's `input` shape.
 * @see {@link SetIpAddressTypeCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingV2ClientResolvedConfig | config} for ElasticLoadBalancingV2Client's `config` shape.
 *
 * @throws {@link InvalidConfigurationRequestException} (client fault)
 *  <p>The requested configuration is not valid.</p>
 *
 * @throws {@link InvalidSubnetException} (client fault)
 *  <p>The specified subnet is out of available addresses.</p>
 *
 * @throws {@link LoadBalancerNotFoundException} (client fault)
 *  <p>The specified load balancer does not exist.</p>
 *
 *
 */
export class SetIpAddressTypeCommand extends $Command<
  SetIpAddressTypeCommandInput,
  SetIpAddressTypeCommandOutput,
  ElasticLoadBalancingV2ClientResolvedConfig
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

  constructor(readonly input: SetIpAddressTypeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticLoadBalancingV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SetIpAddressTypeCommandInput, SetIpAddressTypeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SetIpAddressTypeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticLoadBalancingV2Client";
    const commandName = "SetIpAddressTypeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SetIpAddressTypeInputFilterSensitiveLog,
      outputFilterSensitiveLog: SetIpAddressTypeOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SetIpAddressTypeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_querySetIpAddressTypeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SetIpAddressTypeCommandOutput> {
    return deserializeAws_querySetIpAddressTypeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
