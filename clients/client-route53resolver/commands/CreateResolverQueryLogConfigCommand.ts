import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";
import { CreateResolverQueryLogConfigRequest, CreateResolverQueryLogConfigResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateResolverQueryLogConfigCommand,
  serializeAws_json1_1CreateResolverQueryLogConfigCommand,
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

export type CreateResolverQueryLogConfigCommandInput = CreateResolverQueryLogConfigRequest;
export type CreateResolverQueryLogConfigCommandOutput = CreateResolverQueryLogConfigResponse & __MetadataBearer;

/**
 * <p>Creates a Resolver query logging configuration, which defines where you want Resolver to save DNS query logs that originate in your VPCs.
 * 			Resolver can log queries only for VPCs that are in the same Region as the query logging configuration.</p>
 *
 * 		       <p>To specify which VPCs you want to log queries for, you use <code>AssociateResolverQueryLogConfig</code>. For more information, see
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateResolverQueryLogConfig.html">AssociateResolverQueryLogConfig</a>. </p>
 *
 * 		       <p>You can optionally use AWS Resource Access Manager (AWS RAM) to share a query logging configuration with other AWS accounts. The other accounts
 * 			can then associate VPCs with the configuration. The query logs that Resolver creates for a configuration include all DNS queries that originate in all
 * 			VPCs that are associated with the configuration.</p>
 */
export class CreateResolverQueryLogConfigCommand extends $Command<
  CreateResolverQueryLogConfigCommandInput,
  CreateResolverQueryLogConfigCommandOutput,
  Route53ResolverClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53ResolverClient";
    const commandName = "CreateResolverQueryLogConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateResolverQueryLogConfigRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateResolverQueryLogConfigResponse.filterSensitiveLog,
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
