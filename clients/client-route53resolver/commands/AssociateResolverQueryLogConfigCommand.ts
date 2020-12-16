import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";
import { AssociateResolverQueryLogConfigRequest, AssociateResolverQueryLogConfigResponse } from "../models/models_0";
import {
  deserializeAws_json1_1AssociateResolverQueryLogConfigCommand,
  serializeAws_json1_1AssociateResolverQueryLogConfigCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type AssociateResolverQueryLogConfigCommandInput = AssociateResolverQueryLogConfigRequest;
export type AssociateResolverQueryLogConfigCommandOutput = AssociateResolverQueryLogConfigResponse & __MetadataBearer;

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
 */
export class AssociateResolverQueryLogConfigCommand extends $Command<
  AssociateResolverQueryLogConfigCommandInput,
  AssociateResolverQueryLogConfigCommandOutput,
  Route53ResolverClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53ResolverClient";
    const commandName = "AssociateResolverQueryLogConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateResolverQueryLogConfigRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AssociateResolverQueryLogConfigResponse.filterSensitiveLog,
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
