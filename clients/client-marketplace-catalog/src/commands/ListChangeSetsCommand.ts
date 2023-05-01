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
  MarketplaceCatalogClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MarketplaceCatalogClient";
import { ListChangeSetsRequest, ListChangeSetsResponse } from "../models/models_0";
import { de_ListChangeSetsCommand, se_ListChangeSetsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link ListChangeSetsCommand}.
 */
export interface ListChangeSetsCommandInput extends ListChangeSetsRequest {}
/**
 * @public
 *
 * The output of {@link ListChangeSetsCommand}.
 */
export interface ListChangeSetsCommandOutput extends ListChangeSetsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns the list of change sets owned by the account being used to make the call. You
 *             can filter this list by providing any combination of <code>entityId</code>,
 *                 <code>ChangeSetName</code>, and status. If you provide more than one filter, the API
 *             operation applies a logical AND between the filters.</p>
 *          <p>You can describe a change during the 60-day request history retention period for API
 *             calls.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceCatalogClient, ListChangeSetsCommand } from "@aws-sdk/client-marketplace-catalog"; // ES Modules import
 * // const { MarketplaceCatalogClient, ListChangeSetsCommand } = require("@aws-sdk/client-marketplace-catalog"); // CommonJS import
 * const client = new MarketplaceCatalogClient(config);
 * const input = { // ListChangeSetsRequest
 *   Catalog: "STRING_VALUE", // required
 *   FilterList: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       ValueList: [ // ValueList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   Sort: { // Sort
 *     SortBy: "STRING_VALUE",
 *     SortOrder: "ASCENDING" || "DESCENDING",
 *   },
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListChangeSetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param ListChangeSetsCommandInput - {@link ListChangeSetsCommandInput}
 * @returns {@link ListChangeSetsCommandOutput}
 * @see {@link ListChangeSetsCommandInput} for command's `input` shape.
 * @see {@link ListChangeSetsCommandOutput} for command's `response` shape.
 * @see {@link MarketplaceCatalogClientResolvedConfig | config} for MarketplaceCatalogClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access is denied.</p>
 *          <p>HTTP status code: 403</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>There was an internal service exception.</p>
 *          <p>HTTP status code: 500</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Too many requests.</p>
 *          <p>HTTP status code: 429</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An error occurred during validation.</p>
 *          <p>HTTP status code: 422</p>
 *
 *
 */
export class ListChangeSetsCommand extends $Command<
  ListChangeSetsCommandInput,
  ListChangeSetsCommandOutput,
  MarketplaceCatalogClientResolvedConfig
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
  constructor(readonly input: ListChangeSetsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MarketplaceCatalogClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListChangeSetsCommandInput, ListChangeSetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListChangeSetsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MarketplaceCatalogClient";
    const commandName = "ListChangeSetsCommand";
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
  private serialize(input: ListChangeSetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListChangeSetsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListChangeSetsCommandOutput> {
    return de_ListChangeSetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
