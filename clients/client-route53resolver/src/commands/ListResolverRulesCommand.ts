import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";
import { ListResolverRulesRequest, ListResolverRulesResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListResolverRulesCommand,
  serializeAws_json1_1ListResolverRulesCommand,
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

export interface ListResolverRulesCommandInput extends ListResolverRulesRequest {}
export interface ListResolverRulesCommandOutput extends ListResolverRulesResponse, __MetadataBearer {}

/**
 * <p>Lists the Resolver rules that were created using the current Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, ListResolverRulesCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, ListResolverRulesCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new ListResolverRulesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListResolverRulesCommandInput} for command's `input` shape.
 * @see {@link ListResolverRulesCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListResolverRulesCommand extends $Command<
  ListResolverRulesCommandInput,
  ListResolverRulesCommandOutput,
  Route53ResolverClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListResolverRulesCommandInput) {
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
  ): Handler<ListResolverRulesCommandInput, ListResolverRulesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53ResolverClient";
    const commandName = "ListResolverRulesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListResolverRulesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListResolverRulesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListResolverRulesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListResolverRulesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListResolverRulesCommandOutput> {
    return deserializeAws_json1_1ListResolverRulesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
