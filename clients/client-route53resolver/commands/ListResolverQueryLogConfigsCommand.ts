import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";
import { ListResolverQueryLogConfigsRequest, ListResolverQueryLogConfigsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListResolverQueryLogConfigsCommand,
  serializeAws_json1_1ListResolverQueryLogConfigsCommand,
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

export type ListResolverQueryLogConfigsCommandInput = ListResolverQueryLogConfigsRequest;
export type ListResolverQueryLogConfigsCommandOutput = ListResolverQueryLogConfigsResponse & __MetadataBearer;

/**
 * <p>Lists information about the specified query logging configurations. Each configuration defines where you want Resolver to save
 * 			DNS query logs and specifies the VPCs that you want to log queries for.</p>
 */
export class ListResolverQueryLogConfigsCommand extends $Command<
  ListResolverQueryLogConfigsCommandInput,
  ListResolverQueryLogConfigsCommandOutput,
  Route53ResolverClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListResolverQueryLogConfigsCommandInput) {
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
  ): Handler<ListResolverQueryLogConfigsCommandInput, ListResolverQueryLogConfigsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53ResolverClient";
    const commandName = "ListResolverQueryLogConfigsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListResolverQueryLogConfigsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListResolverQueryLogConfigsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListResolverQueryLogConfigsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListResolverQueryLogConfigsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListResolverQueryLogConfigsCommandOutput> {
    return deserializeAws_json1_1ListResolverQueryLogConfigsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
