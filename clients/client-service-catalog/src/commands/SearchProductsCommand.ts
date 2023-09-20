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

import { SearchProductsInput, SearchProductsOutput } from "../models/models_0";
import { de_SearchProductsCommand, se_SearchProductsCommand } from "../protocols/Aws_json1_1";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SearchProductsCommand}.
 */
export interface SearchProductsCommandInput extends SearchProductsInput {}
/**
 * @public
 *
 * The output of {@link SearchProductsCommand}.
 */
export interface SearchProductsCommandOutput extends SearchProductsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Gets information about the products to which the caller has access.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, SearchProductsCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, SearchProductsCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const input = { // SearchProductsInput
 *   AcceptLanguage: "STRING_VALUE",
 *   Filters: { // ProductViewFilters
 *     "<keys>": [ // ProductViewFilterValues
 *       "STRING_VALUE",
 *     ],
 *   },
 *   PageSize: Number("int"),
 *   SortBy: "Title" || "VersionCount" || "CreationDate",
 *   SortOrder: "ASCENDING" || "DESCENDING",
 *   PageToken: "STRING_VALUE",
 * };
 * const command = new SearchProductsCommand(input);
 * const response = await client.send(command);
 * // { // SearchProductsOutput
 * //   ProductViewSummaries: [ // ProductViewSummaries
 * //     { // ProductViewSummary
 * //       Id: "STRING_VALUE",
 * //       ProductId: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Owner: "STRING_VALUE",
 * //       ShortDescription: "STRING_VALUE",
 * //       Type: "CLOUD_FORMATION_TEMPLATE" || "MARKETPLACE" || "TERRAFORM_OPEN_SOURCE" || "TERRAFORM_CLOUD",
 * //       Distributor: "STRING_VALUE",
 * //       HasDefaultPath: true || false,
 * //       SupportEmail: "STRING_VALUE",
 * //       SupportDescription: "STRING_VALUE",
 * //       SupportUrl: "STRING_VALUE",
 * //     },
 * //   ],
 * //   ProductViewAggregations: { // ProductViewAggregations
 * //     "<keys>": [ // ProductViewAggregationValues
 * //       { // ProductViewAggregationValue
 * //         Value: "STRING_VALUE",
 * //         ApproximateCount: Number("int"),
 * //       },
 * //     ],
 * //   },
 * //   NextPageToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SearchProductsCommandInput - {@link SearchProductsCommandInput}
 * @returns {@link SearchProductsCommandOutput}
 * @see {@link SearchProductsCommandInput} for command's `input` shape.
 * @see {@link SearchProductsCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for ServiceCatalogClient's `config` shape.
 *
 * @throws {@link InvalidParametersException} (client fault)
 *  <p>One or more parameters provided to the operation are not valid.</p>
 *
 * @throws {@link ServiceCatalogServiceException}
 * <p>Base exception class for all service exceptions from ServiceCatalog service.</p>
 *
 */
export class SearchProductsCommand extends $Command<
  SearchProductsCommandInput,
  SearchProductsCommandOutput,
  ServiceCatalogClientResolvedConfig
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
  constructor(readonly input: SearchProductsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ServiceCatalogClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SearchProductsCommandInput, SearchProductsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SearchProductsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "SearchProductsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWS242ServiceCatalogService",
        operation: "SearchProducts",
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
  private serialize(input: SearchProductsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_SearchProductsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SearchProductsCommandOutput> {
    return de_SearchProductsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
