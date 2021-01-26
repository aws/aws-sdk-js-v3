import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";
import { DeleteResolverRuleRequest, DeleteResolverRuleResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteResolverRuleCommand,
  serializeAws_json1_1DeleteResolverRuleCommand,
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

export type DeleteResolverRuleCommandInput = DeleteResolverRuleRequest;
export type DeleteResolverRuleCommandOutput = DeleteResolverRuleResponse & __MetadataBearer;

/**
 * <p>Deletes a Resolver rule. Before you can delete a Resolver rule, you must disassociate it from all the VPCs that you
 * 			associated the Resolver rule with. For more information, see
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverRule.html">DisassociateResolverRule</a>.</p>
 */
export class DeleteResolverRuleCommand extends $Command<
  DeleteResolverRuleCommandInput,
  DeleteResolverRuleCommandOutput,
  Route53ResolverClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteResolverRuleCommandInput) {
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
  ): Handler<DeleteResolverRuleCommandInput, DeleteResolverRuleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53ResolverClient";
    const commandName = "DeleteResolverRuleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteResolverRuleRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteResolverRuleResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteResolverRuleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteResolverRuleCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteResolverRuleCommandOutput> {
    return deserializeAws_json1_1DeleteResolverRuleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
