import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";
import { ListResolverRuleAssociationsRequest, ListResolverRuleAssociationsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListResolverRuleAssociationsCommand,
  serializeAws_json1_1ListResolverRuleAssociationsCommand,
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

export type ListResolverRuleAssociationsCommandInput = ListResolverRuleAssociationsRequest;
export type ListResolverRuleAssociationsCommandOutput = ListResolverRuleAssociationsResponse & __MetadataBearer;

/**
 * <p>Lists the associations that were created between Resolver rules and VPCs using the current AWS account.</p>
 */
export class ListResolverRuleAssociationsCommand extends $Command<
  ListResolverRuleAssociationsCommandInput,
  ListResolverRuleAssociationsCommandOutput,
  Route53ResolverClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListResolverRuleAssociationsCommandInput) {
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
  ): Handler<ListResolverRuleAssociationsCommandInput, ListResolverRuleAssociationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53ResolverClient";
    const commandName = "ListResolverRuleAssociationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListResolverRuleAssociationsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListResolverRuleAssociationsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListResolverRuleAssociationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListResolverRuleAssociationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListResolverRuleAssociationsCommandOutput> {
    return deserializeAws_json1_1ListResolverRuleAssociationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
