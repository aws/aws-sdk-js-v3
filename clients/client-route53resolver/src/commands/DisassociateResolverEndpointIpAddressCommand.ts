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
  DisassociateResolverEndpointIpAddressRequest,
  DisassociateResolverEndpointIpAddressRequestFilterSensitiveLog,
  DisassociateResolverEndpointIpAddressResponse,
  DisassociateResolverEndpointIpAddressResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DisassociateResolverEndpointIpAddressCommand,
  serializeAws_json1_1DisassociateResolverEndpointIpAddressCommand,
} from "../protocols/Aws_json1_1";
import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";

export interface DisassociateResolverEndpointIpAddressCommandInput
  extends DisassociateResolverEndpointIpAddressRequest {}
export interface DisassociateResolverEndpointIpAddressCommandOutput
  extends DisassociateResolverEndpointIpAddressResponse,
    __MetadataBearer {}

/**
 * <p>Removes IP addresses from an inbound or an outbound Resolver endpoint. If you want to remove more than one IP address,
 * 			submit one <code>DisassociateResolverEndpointIpAddress</code> request for each IP address.</p>
 * 		       <p>To add an IP address to an endpoint, see
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateResolverEndpointIpAddress.html">AssociateResolverEndpointIpAddress</a>.
 * 		</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, DisassociateResolverEndpointIpAddressCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, DisassociateResolverEndpointIpAddressCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new DisassociateResolverEndpointIpAddressCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateResolverEndpointIpAddressCommandInput} for command's `input` shape.
 * @see {@link DisassociateResolverEndpointIpAddressCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for Route53ResolverClient's `config` shape.
 *
 */
export class DisassociateResolverEndpointIpAddressCommand extends $Command<
  DisassociateResolverEndpointIpAddressCommandInput,
  DisassociateResolverEndpointIpAddressCommandOutput,
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

  constructor(readonly input: DisassociateResolverEndpointIpAddressCommandInput) {
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
  ): Handler<DisassociateResolverEndpointIpAddressCommandInput, DisassociateResolverEndpointIpAddressCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DisassociateResolverEndpointIpAddressCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53ResolverClient";
    const commandName = "DisassociateResolverEndpointIpAddressCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateResolverEndpointIpAddressRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DisassociateResolverEndpointIpAddressResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DisassociateResolverEndpointIpAddressCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DisassociateResolverEndpointIpAddressCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociateResolverEndpointIpAddressCommandOutput> {
    return deserializeAws_json1_1DisassociateResolverEndpointIpAddressCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
