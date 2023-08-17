// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { ListCrawlsRequest, ListCrawlsResponse } from "../models/models_2";
import { de_ListCrawlsCommand, se_ListCrawlsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListCrawlsCommand}.
 */
export interface ListCrawlsCommandInput extends ListCrawlsRequest {}
/**
 * @public
 *
 * The output of {@link ListCrawlsCommand}.
 */
export interface ListCrawlsCommandOutput extends ListCrawlsResponse, __MetadataBearer {}

/**
 * @public
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
 * const input = { // ListCrawlsRequest
 *   CrawlerName: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   Filters: [ // CrawlsFilterList
 *     { // CrawlsFilter
 *       FieldName: "CRAWL_ID" || "STATE" || "START_TIME" || "END_TIME" || "DPU_HOUR",
 *       FilterOperator: "GT" || "GE" || "LT" || "LE" || "EQ" || "NE",
 *       FieldValue: "STRING_VALUE",
 *     },
 *   ],
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListCrawlsCommand(input);
 * const response = await client.send(command);
 * // { // ListCrawlsResponse
 * //   Crawls: [ // CrawlerHistoryList
 * //     { // CrawlerHistory
 * //       CrawlId: "STRING_VALUE",
 * //       State: "RUNNING" || "COMPLETED" || "FAILED" || "STOPPED",
 * //       StartTime: new Date("TIMESTAMP"),
 * //       EndTime: new Date("TIMESTAMP"),
 * //       Summary: "STRING_VALUE",
 * //       ErrorMessage: "STRING_VALUE",
 * //       LogGroup: "STRING_VALUE",
 * //       LogStream: "STRING_VALUE",
 * //       MessagePrefix: "STRING_VALUE",
 * //       DPUHour: Number("double"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCrawlsCommandInput - {@link ListCrawlsCommandInput}
 * @returns {@link ListCrawlsCommandOutput}
 * @see {@link ListCrawlsCommandInput} for command's `input` shape.
 * @see {@link ListCrawlsCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
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

  /**
   * @public
   */
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
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: ListCrawlsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListCrawlsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListCrawlsCommandOutput> {
    return de_ListCrawlsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
