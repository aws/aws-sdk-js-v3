import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";
import { DisassociateResolverRuleRequest, DisassociateResolverRuleResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DisassociateResolverRuleCommand,
  serializeAws_json1_1DisassociateResolverRuleCommand,
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

export type DisassociateResolverRuleCommandInput = DisassociateResolverRuleRequest;
export type DisassociateResolverRuleCommandOutput = DisassociateResolverRuleResponse & __MetadataBearer;

/**
 * <p>Removes the association between a specified Resolver rule and a specified VPC.</p>
 * 		       <important>
 * 			         <p>If you disassociate a Resolver rule from a VPC, Resolver stops forwarding DNS queries for the
 * 				domain name that you specified in the Resolver rule. </p>
 * 		       </important>
 */
export class DisassociateResolverRuleCommand extends $Command<
  DisassociateResolverRuleCommandInput,
  DisassociateResolverRuleCommandOutput,
  Route53ResolverClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisassociateResolverRuleCommandInput) {
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
  ): Handler<DisassociateResolverRuleCommandInput, DisassociateResolverRuleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53ResolverClient";
    const commandName = "DisassociateResolverRuleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateResolverRuleRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DisassociateResolverRuleResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DisassociateResolverRuleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DisassociateResolverRuleCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DisassociateResolverRuleCommandOutput> {
    return deserializeAws_json1_1DisassociateResolverRuleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
