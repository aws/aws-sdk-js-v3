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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { SearchInput, SearchInputFilterSensitiveLog, SearchOutput } from "../models/models_0";
import { de_SearchCommand, se_SearchCommand } from "../protocols/Aws_restJson1";
import {
  ResourceExplorer2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ResourceExplorer2Client";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SearchCommand}.
 */
export interface SearchCommandInput extends SearchInput {}
/**
 * @public
 *
 * The output of {@link SearchCommand}.
 */
export interface SearchCommandOutput extends SearchOutput, __MetadataBearer {}

/**
 * @public
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
 * const input = { // SearchInput
 *   QueryString: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   ViewArn: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new SearchCommand(input);
 * const response = await client.send(command);
 * // { // SearchOutput
 * //   Resources: [ // ResourceList
 * //     { // Resource
 * //       Arn: "STRING_VALUE",
 * //       OwningAccountId: "STRING_VALUE",
 * //       Region: "STRING_VALUE",
 * //       ResourceType: "STRING_VALUE",
 * //       Service: "STRING_VALUE",
 * //       LastReportedAt: new Date("TIMESTAMP"),
 * //       Properties: [ // ResourcePropertyList
 * //         { // ResourceProperty
 * //           Name: "STRING_VALUE",
 * //           LastReportedAt: new Date("TIMESTAMP"),
 * //           Data: "DOCUMENT_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   ViewArn: "STRING_VALUE",
 * //   Count: { // ResourceCount
 * //     TotalResources: Number("long"),
 * //     Complete: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param SearchCommandInput - {@link SearchCommandInput}
 * @returns {@link SearchCommandOutput}
 * @see {@link SearchCommandInput} for command's `input` shape.
 * @see {@link SearchCommandOutput} for command's `response` shape.
 * @see {@link ResourceExplorer2ClientResolvedConfig | config} for ResourceExplorer2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The credentials that you used to call this operation don't have the minimum required
 *             permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request failed because of internal service error. Try your request again
 *             later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>You specified a resource that doesn't exist. Check the ID or ARN that you used to
 *             identity the resource, and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request failed because you exceeded a rate limit for this operation. For more
 *             information, see <a href="https://docs.aws.amazon.com/arexug/mainline/quotas.html">Quotas
 *                 for Resource Explorer</a>.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>The principal making the request isn't permitted to perform the operation.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>You provided an invalid value for one of the operation's parameters. Check the syntax
 *             for the operation, and try again.</p>
 *
 * @throws {@link ResourceExplorer2ServiceException}
 * <p>Base exception class for all service exceptions from ResourceExplorer2 service.</p>
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

  /**
   * @public
   */
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
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "ResourceExplorer",
        operation: "Search",
      },
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
  private serialize(input: SearchCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_SearchCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SearchCommandOutput> {
    return de_SearchCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
