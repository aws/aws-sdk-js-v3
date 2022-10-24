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
  CreateResolverQueryLogConfigRequest,
  CreateResolverQueryLogConfigRequestFilterSensitiveLog,
  CreateResolverQueryLogConfigResponse,
  CreateResolverQueryLogConfigResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateResolverQueryLogConfigCommand,
  serializeAws_json1_1CreateResolverQueryLogConfigCommand,
} from "../protocols/Aws_json1_1";
import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";

export interface CreateResolverQueryLogConfigCommandInput extends CreateResolverQueryLogConfigRequest {}
export interface CreateResolverQueryLogConfigCommandOutput
  extends CreateResolverQueryLogConfigResponse,
    __MetadataBearer {}

/**
 * <p>Creates a Resolver query logging configuration, which defines where you want Resolver to save DNS query logs that originate in your VPCs.
 * 			Resolver can log queries only for VPCs that are in the same Region as the query logging configuration.</p>
 *
 * 		       <p>To specify which VPCs you want to log queries for, you use <code>AssociateResolverQueryLogConfig</code>. For more information, see
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateResolverQueryLogConfig.html">AssociateResolverQueryLogConfig</a>. </p>
 *
 * 		       <p>You can optionally use Resource Access Manager (RAM) to share a query logging configuration with other Amazon Web Services accounts. The other accounts
 * 			can then associate VPCs with the configuration. The query logs that Resolver creates for a configuration include all DNS queries that originate in all
 * 			VPCs that are associated with the configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, CreateResolverQueryLogConfigCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, CreateResolverQueryLogConfigCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new CreateResolverQueryLogConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateResolverQueryLogConfigCommandInput} for command's `input` shape.
 * @see {@link CreateResolverQueryLogConfigCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for Route53ResolverClient's `config` shape.
 *
 */
export class CreateResolverQueryLogConfigCommand extends $Command<
  CreateResolverQueryLogConfigCommandInput,
  CreateResolverQueryLogConfigCommandOutput,
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

  constructor(readonly input: CreateResolverQueryLogConfigCommandInput) {
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
  ): Handler<CreateResolverQueryLogConfigCommandInput, CreateResolverQueryLogConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateResolverQueryLogConfigCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53ResolverClient";
    const commandName = "CreateResolverQueryLogConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateResolverQueryLogConfigRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateResolverQueryLogConfigResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateResolverQueryLogConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateResolverQueryLogConfigCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateResolverQueryLogConfigCommandOutput> {
    return deserializeAws_json1_1CreateResolverQueryLogConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
