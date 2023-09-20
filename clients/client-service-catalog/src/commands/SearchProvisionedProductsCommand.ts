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

import { SearchProvisionedProductsInput, SearchProvisionedProductsOutput } from "../models/models_0";
import { de_SearchProvisionedProductsCommand, se_SearchProvisionedProductsCommand } from "../protocols/Aws_json1_1";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SearchProvisionedProductsCommand}.
 */
export interface SearchProvisionedProductsCommandInput extends SearchProvisionedProductsInput {}
/**
 * @public
 *
 * The output of {@link SearchProvisionedProductsCommand}.
 */
export interface SearchProvisionedProductsCommandOutput extends SearchProvisionedProductsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Gets information about the provisioned products that meet the specified criteria.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, SearchProvisionedProductsCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, SearchProvisionedProductsCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const input = { // SearchProvisionedProductsInput
 *   AcceptLanguage: "STRING_VALUE",
 *   AccessLevelFilter: { // AccessLevelFilter
 *     Key: "Account" || "Role" || "User",
 *     Value: "STRING_VALUE",
 *   },
 *   Filters: { // ProvisionedProductFilters
 *     "<keys>": [ // ProvisionedProductViewFilterValues
 *       "STRING_VALUE",
 *     ],
 *   },
 *   SortBy: "STRING_VALUE",
 *   SortOrder: "ASCENDING" || "DESCENDING",
 *   PageSize: Number("int"),
 *   PageToken: "STRING_VALUE",
 * };
 * const command = new SearchProvisionedProductsCommand(input);
 * const response = await client.send(command);
 * // { // SearchProvisionedProductsOutput
 * //   ProvisionedProducts: [ // ProvisionedProductAttributes
 * //     { // ProvisionedProductAttribute
 * //       Name: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //       Type: "STRING_VALUE",
 * //       Id: "STRING_VALUE",
 * //       Status: "AVAILABLE" || "UNDER_CHANGE" || "TAINTED" || "ERROR" || "PLAN_IN_PROGRESS",
 * //       StatusMessage: "STRING_VALUE",
 * //       CreatedTime: new Date("TIMESTAMP"),
 * //       IdempotencyToken: "STRING_VALUE",
 * //       LastRecordId: "STRING_VALUE",
 * //       LastProvisioningRecordId: "STRING_VALUE",
 * //       LastSuccessfulProvisioningRecordId: "STRING_VALUE",
 * //       Tags: [ // Tags
 * //         { // Tag
 * //           Key: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       PhysicalId: "STRING_VALUE",
 * //       ProductId: "STRING_VALUE",
 * //       ProductName: "STRING_VALUE",
 * //       ProvisioningArtifactId: "STRING_VALUE",
 * //       ProvisioningArtifactName: "STRING_VALUE",
 * //       UserArn: "STRING_VALUE",
 * //       UserArnSession: "STRING_VALUE",
 * //     },
 * //   ],
 * //   TotalResultsCount: Number("int"),
 * //   NextPageToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SearchProvisionedProductsCommandInput - {@link SearchProvisionedProductsCommandInput}
 * @returns {@link SearchProvisionedProductsCommandOutput}
 * @see {@link SearchProvisionedProductsCommandInput} for command's `input` shape.
 * @see {@link SearchProvisionedProductsCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for ServiceCatalogClient's `config` shape.
 *
 * @throws {@link InvalidParametersException} (client fault)
 *  <p>One or more parameters provided to the operation are not valid.</p>
 *
 * @throws {@link ServiceCatalogServiceException}
 * <p>Base exception class for all service exceptions from ServiceCatalog service.</p>
 *
 */
export class SearchProvisionedProductsCommand extends $Command<
  SearchProvisionedProductsCommandInput,
  SearchProvisionedProductsCommandOutput,
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
  constructor(readonly input: SearchProvisionedProductsCommandInput) {
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
  ): Handler<SearchProvisionedProductsCommandInput, SearchProvisionedProductsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SearchProvisionedProductsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "SearchProvisionedProductsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWS242ServiceCatalogService",
        operation: "SearchProvisionedProducts",
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
  private serialize(input: SearchProvisionedProductsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_SearchProvisionedProductsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<SearchProvisionedProductsCommandOutput> {
    return de_SearchProvisionedProductsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
