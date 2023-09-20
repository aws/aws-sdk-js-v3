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

import {
  MarketplaceCatalogClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MarketplaceCatalogClient";
import { ListEntitiesRequest, ListEntitiesResponse } from "../models/models_0";
import { de_ListEntitiesCommand, se_ListEntitiesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListEntitiesCommand}.
 */
export interface ListEntitiesCommandInput extends ListEntitiesRequest {}
/**
 * @public
 *
 * The output of {@link ListEntitiesCommand}.
 */
export interface ListEntitiesCommandOutput extends ListEntitiesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Provides the list of entities of a given type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceCatalogClient, ListEntitiesCommand } from "@aws-sdk/client-marketplace-catalog"; // ES Modules import
 * // const { MarketplaceCatalogClient, ListEntitiesCommand } = require("@aws-sdk/client-marketplace-catalog"); // CommonJS import
 * const client = new MarketplaceCatalogClient(config);
 * const input = { // ListEntitiesRequest
 *   Catalog: "STRING_VALUE", // required
 *   EntityType: "STRING_VALUE", // required
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
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   OwnershipType: "SELF" || "SHARED",
 * };
 * const command = new ListEntitiesCommand(input);
 * const response = await client.send(command);
 * // { // ListEntitiesResponse
 * //   EntitySummaryList: [ // EntitySummaryList
 * //     { // EntitySummary
 * //       Name: "STRING_VALUE",
 * //       EntityType: "STRING_VALUE",
 * //       EntityId: "STRING_VALUE",
 * //       EntityArn: "STRING_VALUE",
 * //       LastModifiedDate: "STRING_VALUE",
 * //       Visibility: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListEntitiesCommandInput - {@link ListEntitiesCommandInput}
 * @returns {@link ListEntitiesCommandOutput}
 * @see {@link ListEntitiesCommandInput} for command's `input` shape.
 * @see {@link ListEntitiesCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource wasn't found.</p>
 *          <p>HTTP status code: 404</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Too many requests.</p>
 *          <p>HTTP status code: 429</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An error occurred during validation.</p>
 *          <p>HTTP status code: 422</p>
 *
 * @throws {@link MarketplaceCatalogServiceException}
 * <p>Base exception class for all service exceptions from MarketplaceCatalog service.</p>
 *
 */
export class ListEntitiesCommand extends $Command<
  ListEntitiesCommandInput,
  ListEntitiesCommandOutput,
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
  constructor(readonly input: ListEntitiesCommandInput) {
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
  ): Handler<ListEntitiesCommandInput, ListEntitiesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListEntitiesCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MarketplaceCatalogClient";
    const commandName = "ListEntitiesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSMPSeymour",
        operation: "ListEntities",
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
  private serialize(input: ListEntitiesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListEntitiesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListEntitiesCommandOutput> {
    return de_ListEntitiesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
