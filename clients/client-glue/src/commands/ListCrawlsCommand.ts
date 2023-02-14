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

import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { ListCrawlsRequest, ListCrawlsRequestFilterSensitiveLog } from "../models/models_1";
import { ListCrawlsResponse, ListCrawlsResponseFilterSensitiveLog } from "../models/models_2";
import {
  deserializeAws_json1_1ListCrawlsCommand,
  serializeAws_json1_1ListCrawlsCommand,
} from "../protocols/Aws_json1_1";

export interface ListCrawlsCommandInput extends ListCrawlsRequest {}
export interface ListCrawlsCommandOutput extends ListCrawlsResponse, __MetadataBearer {}

/**
 * <p>Returns all the crawls of a specified crawler. Returns only the crawls that have occurred since the launch date of the crawler history feature, and only retains up to 12 months of crawls. Older crawls will not be returned.</p>
 *          <p>You may use this API to:</p>
 *          <ul>
 *             <li>
 *                <p>Retrive all the crawls of a specified crawler.</p>
 *             </li>
 *             <li>
 *                <p>Retrieve all the crawls of a specified crawler within a limited count.</p>
 *             </li>
 *             <li>
 *                <p>Retrieve all the crawls of a specified crawler in a specific time range.</p>
 *             </li>
 *             <li>
 *                <p>Retrieve all the crawls of a specified crawler with a particular state, crawl ID, or DPU hour value.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, ListCrawlsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, ListCrawlsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new ListCrawlsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListCrawlsCommandInput} for command's `input` shape.
 * @see {@link ListCrawlsCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 */
export class ListCrawlsCommand extends $Command<
  ListCrawlsCommandInput,
  ListCrawlsCommandOutput,
  GlueClientResolvedConfig
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

  constructor(readonly input: ListCrawlsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlueClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListCrawlsCommandInput, ListCrawlsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListCrawlsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "ListCrawlsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListCrawlsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListCrawlsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListCrawlsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListCrawlsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListCrawlsCommandOutput> {
    return deserializeAws_json1_1ListCrawlsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
