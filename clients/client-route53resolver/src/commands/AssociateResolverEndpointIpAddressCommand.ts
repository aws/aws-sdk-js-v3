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
  AssociateResolverEndpointIpAddressRequest,
  AssociateResolverEndpointIpAddressRequestFilterSensitiveLog,
  AssociateResolverEndpointIpAddressResponse,
  AssociateResolverEndpointIpAddressResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1AssociateResolverEndpointIpAddressCommand,
  serializeAws_json1_1AssociateResolverEndpointIpAddressCommand,
} from "../protocols/Aws_json1_1";
import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";

export interface AssociateResolverEndpointIpAddressCommandInput extends AssociateResolverEndpointIpAddressRequest {}
export interface AssociateResolverEndpointIpAddressCommandOutput
  extends AssociateResolverEndpointIpAddressResponse,
    __MetadataBearer {}

/**
 * <p>Adds IP addresses to an inbound or an outbound Resolver endpoint. If you want to add more than one IP address,
 * 			submit one <code>AssociateResolverEndpointIpAddress</code> request for each IP address.</p>
 * 		       <p>To remove an IP address from an endpoint, see
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverEndpointIpAddress.html">DisassociateResolverEndpointIpAddress</a>.
 * 		</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, AssociateResolverEndpointIpAddressCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, AssociateResolverEndpointIpAddressCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new AssociateResolverEndpointIpAddressCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateResolverEndpointIpAddressCommandInput} for command's `input` shape.
 * @see {@link AssociateResolverEndpointIpAddressCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for Route53ResolverClient's `config` shape.
 *
 */
export class AssociateResolverEndpointIpAddressCommand extends $Command<
  AssociateResolverEndpointIpAddressCommandInput,
  AssociateResolverEndpointIpAddressCommandOutput,
  Route53ResolverClientResolvedConfig
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

  constructor(readonly input: AssociateResolverEndpointIpAddressCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53ResolverClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AssociateResolverEndpointIpAddressCommandInput, AssociateResolverEndpointIpAddressCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AssociateResolverEndpointIpAddressCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53ResolverClient";
    const commandName = "AssociateResolverEndpointIpAddressCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateResolverEndpointIpAddressRequestFilterSensitiveLog,
      outputFilterSensitiveLog: AssociateResolverEndpointIpAddressResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: AssociateResolverEndpointIpAddressCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1AssociateResolverEndpointIpAddressCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AssociateResolverEndpointIpAddressCommandOutput> {
    return deserializeAws_json1_1AssociateResolverEndpointIpAddressCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
