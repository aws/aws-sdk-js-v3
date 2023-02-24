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
  SearchInput,
  SearchInputFilterSensitiveLog,
  SearchOutput,
  SearchOutputFilterSensitiveLog,
} from "../models/models_0";
import { deserializeAws_restJson1SearchCommand, serializeAws_restJson1SearchCommand } from "../protocols/Aws_restJson1";
import {
  ResourceExplorer2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ResourceExplorer2Client";

export interface SearchCommandInput extends SearchInput {}
export interface SearchCommandOutput extends SearchOutput, __MetadataBearer {}

/**
 * <p>Searches for resources and displays details about all resources that match the
 *             specified criteria. You must specify a query string.</p>
 *          <p>All search queries must use a view. If you don't explicitly specify a view, then
 *             Amazon Web Services Resource Explorer uses the default view for the Amazon Web Services Region in which you call this operation.
 *             The results are the logical intersection of the results that match both the
 *                 <code>QueryString</code> parameter supplied to this operation and the
 *                 <code>SearchFilter</code> parameter attached to the view.</p>
 *          <p>For the complete syntax supported by the <code>QueryString</code> parameter, see
 *                 <a href="https://docs.aws.amazon.com/resource-explorer/latest/APIReference/about-query-syntax.html">Search
 *                 query syntax reference for Resource Explorer</a>.</p>
 *          <p>If your search results are empty, or are missing results that you think should be
 *             there, see <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/troubleshooting_search.html">Troubleshooting Resource Explorer
 *                 search</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResourceExplorer2Client, SearchCommand } from "@aws-sdk/client-resource-explorer-2"; // ES Modules import
 * // const { ResourceExplorer2Client, SearchCommand } = require("@aws-sdk/client-resource-explorer-2"); // CommonJS import
 * const client = new ResourceExplorer2Client(config);
 * const command = new SearchCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SearchCommandInput} for command's `input` shape.
 * @see {@link SearchCommandOutput} for command's `response` shape.
 * @see {@link ResourceExplorer2ClientResolvedConfig | config} for ResourceExplorer2Client's `config` shape.
 *
 */
export class SearchCommand extends $Command<
  SearchCommandInput,
  SearchCommandOutput,
  ResourceExplorer2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
    };
  }

  constructor(readonly input: SearchCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ResourceExplorer2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SearchCommandInput, SearchCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, SearchCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ResourceExplorer2Client";
    const commandName = "SearchCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SearchInputFilterSensitiveLog,
      outputFilterSensitiveLog: SearchOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SearchCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1SearchCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SearchCommandOutput> {
    return deserializeAws_restJson1SearchCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
