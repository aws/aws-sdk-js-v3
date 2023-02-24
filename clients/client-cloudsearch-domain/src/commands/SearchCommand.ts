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
  CloudSearchDomainClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudSearchDomainClient";
import {
  SearchRequest,
  SearchRequestFilterSensitiveLog,
  SearchResponse,
  SearchResponseFilterSensitiveLog,
} from "../models/models_0";
import { deserializeAws_restJson1SearchCommand, serializeAws_restJson1SearchCommand } from "../protocols/Aws_restJson1";

export interface SearchCommandInput extends SearchRequest {}
export interface SearchCommandOutput extends SearchResponse, __MetadataBearer {}

/**
 * <p>Retrieves a list of documents that match the specified search criteria. How you specify the search criteria depends on which query parser you use. Amazon CloudSearch supports four query parsers:</p>
 *       <ul>
 *          <li><code>simple</code>: search all <code>text</code> and <code>text-array</code> fields for the specified string. Search for phrases, individual terms, and prefixes. </li>
 *          <li><code>structured</code>: search specific fields, construct compound queries using Boolean operators, and use advanced features such as term boosting and proximity searching.</li>
 *          <li><code>lucene</code>: specify search criteria using the Apache Lucene query parser syntax.</li>
 *          <li><code>dismax</code>: specify search criteria using the simplified subset of the Apache Lucene query parser syntax defined by the DisMax query parser.</li>
 *       </ul>
 *       <p>For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/searching.html">Searching Your Data</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
 *       <p>The endpoint for submitting <code>Search</code> requests is domain-specific. You submit search requests to a domain's search endpoint. To get the search endpoint for your domain, use the Amazon CloudSearch configuration service <code>DescribeDomains</code> action. A domain's endpoints are also displayed on the domain dashboard in the Amazon CloudSearch console. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudSearchDomainClient, SearchCommand } from "@aws-sdk/client-cloudsearch-domain"; // ES Modules import
 * // const { CloudSearchDomainClient, SearchCommand } = require("@aws-sdk/client-cloudsearch-domain"); // CommonJS import
 * const client = new CloudSearchDomainClient(config);
 * const command = new SearchCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SearchCommandInput} for command's `input` shape.
 * @see {@link SearchCommandOutput} for command's `response` shape.
 * @see {@link CloudSearchDomainClientResolvedConfig | config} for CloudSearchDomainClient's `config` shape.
 *
 */
export class SearchCommand extends $Command<
  SearchCommandInput,
  SearchCommandOutput,
  CloudSearchDomainClientResolvedConfig
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
    configuration: CloudSearchDomainClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SearchCommandInput, SearchCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, SearchCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudSearchDomainClient";
    const commandName = "SearchCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SearchRequestFilterSensitiveLog,
      outputFilterSensitiveLog: SearchResponseFilterSensitiveLog,
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
