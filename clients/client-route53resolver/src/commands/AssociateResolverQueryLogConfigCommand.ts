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
  AssociateResolverQueryLogConfigRequest,
  AssociateResolverQueryLogConfigRequestFilterSensitiveLog,
  AssociateResolverQueryLogConfigResponse,
  AssociateResolverQueryLogConfigResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1AssociateResolverQueryLogConfigCommand,
  serializeAws_json1_1AssociateResolverQueryLogConfigCommand,
} from "../protocols/Aws_json1_1";
import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";

export interface AssociateResolverQueryLogConfigCommandInput extends AssociateResolverQueryLogConfigRequest {}
export interface AssociateResolverQueryLogConfigCommandOutput
  extends AssociateResolverQueryLogConfigResponse,
    __MetadataBearer {}

/**
 * <p>Associates an Amazon VPC with a specified query logging configuration. Route 53 Resolver logs DNS queries that originate in all of the Amazon VPCs
 * 			that are associated with a specified query logging configuration. To associate more than one VPC with a configuration, submit one <code>AssociateResolverQueryLogConfig</code>
 * 			request for each VPC.</p>
 *
 * 		       <note>
 *             <p>The VPCs that you associate with a query logging configuration must be in the same Region as the configuration.</p>
 *          </note>
 *
 * 		       <p>To remove a VPC from a query logging configuration, see
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverQueryLogConfig.html">DisassociateResolverQueryLogConfig</a>.
 * 			</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, AssociateResolverQueryLogConfigCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, AssociateResolverQueryLogConfigCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new AssociateResolverQueryLogConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateResolverQueryLogConfigCommandInput} for command's `input` shape.
 * @see {@link AssociateResolverQueryLogConfigCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for Route53ResolverClient's `config` shape.
 *
 */
export class AssociateResolverQueryLogConfigCommand extends $Command<
  AssociateResolverQueryLogConfigCommandInput,
  AssociateResolverQueryLogConfigCommandOutput,
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

  constructor(readonly input: AssociateResolverQueryLogConfigCommandInput) {
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
  ): Handler<AssociateResolverQueryLogConfigCommandInput, AssociateResolverQueryLogConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AssociateResolverQueryLogConfigCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53ResolverClient";
    const commandName = "AssociateResolverQueryLogConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateResolverQueryLogConfigRequestFilterSensitiveLog,
      outputFilterSensitiveLog: AssociateResolverQueryLogConfigResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: AssociateResolverQueryLogConfigCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1AssociateResolverQueryLogConfigCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AssociateResolverQueryLogConfigCommandOutput> {
    return deserializeAws_json1_1AssociateResolverQueryLogConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
