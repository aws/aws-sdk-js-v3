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

import { SearchProductsAsAdminInput, SearchProductsAsAdminOutput } from "../models/models_0";
import { de_SearchProductsAsAdminCommand, se_SearchProductsAsAdminCommand } from "../protocols/Aws_json1_1";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SearchProductsAsAdminCommand}.
 */
export interface SearchProductsAsAdminCommandInput extends SearchProductsAsAdminInput {}
/**
 * @public
 *
 * The output of {@link SearchProductsAsAdminCommand}.
 */
export interface SearchProductsAsAdminCommandOutput extends SearchProductsAsAdminOutput, __MetadataBearer {}

/**
 * @public
 * <p>Gets information about the products for the specified portfolio or all products.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, SearchProductsAsAdminCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, SearchProductsAsAdminCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const input = { // SearchProductsAsAdminInput
 *   AcceptLanguage: "STRING_VALUE",
 *   PortfolioId: "STRING_VALUE",
 *   Filters: { // ProductViewFilters
 *     "<keys>": [ // ProductViewFilterValues
 *       "STRING_VALUE",
 *     ],
 *   },
 *   SortBy: "Title" || "VersionCount" || "CreationDate",
 *   SortOrder: "ASCENDING" || "DESCENDING",
 *   PageToken: "STRING_VALUE",
 *   PageSize: Number("int"),
 *   ProductSource: "ACCOUNT",
 * };
 * const command = new SearchProductsAsAdminCommand(input);
 * const response = await client.send(command);
 * // { // SearchProductsAsAdminOutput
 * //   ProductViewDetails: [ // ProductViewDetails
 * //     { // ProductViewDetail
 * //       ProductViewSummary: { // ProductViewSummary
 * //         Id: "STRING_VALUE",
 * //         ProductId: "STRING_VALUE",
 * //         Name: "STRING_VALUE",
 * //         Owner: "STRING_VALUE",
 * //         ShortDescription: "STRING_VALUE",
 * //         Type: "CLOUD_FORMATION_TEMPLATE" || "MARKETPLACE" || "TERRAFORM_OPEN_SOURCE" || "TERRAFORM_CLOUD",
 * //         Distributor: "STRING_VALUE",
 * //         HasDefaultPath: true || false,
 * //         SupportEmail: "STRING_VALUE",
 * //         SupportDescription: "STRING_VALUE",
 * //         SupportUrl: "STRING_VALUE",
 * //       },
 * //       Status: "AVAILABLE" || "CREATING" || "FAILED",
 * //       ProductARN: "STRING_VALUE",
 * //       CreatedTime: new Date("TIMESTAMP"),
 * //       SourceConnection: { // SourceConnectionDetail
 * //         Type: "CODESTAR",
 * //         ConnectionParameters: { // SourceConnectionParameters
 * //           CodeStar: { // CodeStarParameters
 * //             ConnectionArn: "STRING_VALUE", // required
 * //             Repository: "STRING_VALUE", // required
 * //             Branch: "STRING_VALUE", // required
 * //             ArtifactPath: "STRING_VALUE", // required
 * //           },
 * //         },
 * //         LastSync: { // LastSync
 * //           LastSyncTime: new Date("TIMESTAMP"),
 * //           LastSyncStatus: "SUCCEEDED" || "FAILED",
 * //           LastSyncStatusMessage: "STRING_VALUE",
 * //           LastSuccessfulSyncTime: new Date("TIMESTAMP"),
 * //           LastSuccessfulSyncProvisioningArtifactId: "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   NextPageToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SearchProductsAsAdminCommandInput - {@link SearchProductsAsAdminCommandInput}
 * @returns {@link SearchProductsAsAdminCommandOutput}
 * @see {@link SearchProductsAsAdminCommandInput} for command's `input` shape.
 * @see {@link SearchProductsAsAdminCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for ServiceCatalogClient's `config` shape.
 *
 * @throws {@link InvalidParametersException} (client fault)
 *  <p>One or more parameters provided to the operation are not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ServiceCatalogServiceException}
 * <p>Base exception class for all service exceptions from ServiceCatalog service.</p>
 *
 */
export class SearchProductsAsAdminCommand extends $Command<
  SearchProductsAsAdminCommandInput,
  SearchProductsAsAdminCommandOutput,
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
  constructor(readonly input: SearchProductsAsAdminCommandInput) {
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
  ): Handler<SearchProductsAsAdminCommandInput, SearchProductsAsAdminCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SearchProductsAsAdminCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "SearchProductsAsAdminCommand";
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
  private serialize(input: SearchProductsAsAdminCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_SearchProductsAsAdminCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SearchProductsAsAdminCommandOutput> {
    return de_SearchProductsAsAdminCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
