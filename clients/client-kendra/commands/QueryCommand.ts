import { KendraClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KendraClient";
import { QueryRequest, QueryResult } from "../models/models_0";
import { deserializeAws_json1_1QueryCommand, serializeAws_json1_1QueryCommand } from "../protocols/Aws_json1_1";
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

export type QueryCommandInput = QueryRequest;
export type QueryCommandOutput = QueryResult & __MetadataBearer;

/**
 * <p>Searches an active index. Use this API to search your documents using query. The
 *             <code>Query</code> operation enables to do faceted search and to filter results based on
 *          document attributes.</p>
 *          <p>It also enables you to provide user context that Amazon Kendra uses to enforce document
 *          access control in the search results. </p>
 *          <p>Amazon Kendra searches your index for text content and question and answer (FAQ) content.
 *          By default the response contains three types of results.</p>
 *          <ul>
 *             <li>
 *                <p>Relevant passages</p>
 *             </li>
 *             <li>
 *                <p>Matching FAQs</p>
 *             </li>
 *             <li>
 *                <p>Relevant documents</p>
 *             </li>
 *          </ul>
 *          <p>You can specify that the query return only one type of result using the
 *             <code>QueryResultTypeConfig</code> parameter.</p>
 *          <p>Each query returns the 100 most relevant results. </p>
 */
export class QueryCommand extends $Command<QueryCommandInput, QueryCommandOutput, KendraClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: QueryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KendraClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<QueryCommandInput, QueryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KendraClient";
    const commandName = "QueryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: QueryRequest.filterSensitiveLog,
      outputFilterSensitiveLog: QueryResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: QueryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1QueryCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<QueryCommandOutput> {
    return deserializeAws_json1_1QueryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
