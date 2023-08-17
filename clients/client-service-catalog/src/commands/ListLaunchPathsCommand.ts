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

import { ListLaunchPathsInput, ListLaunchPathsOutput } from "../models/models_0";
import { de_ListLaunchPathsCommand, se_ListLaunchPathsCommand } from "../protocols/Aws_json1_1";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListLaunchPathsCommand}.
 */
export interface ListLaunchPathsCommandInput extends ListLaunchPathsInput {}
/**
 * @public
 *
 * The output of {@link ListLaunchPathsCommand}.
 */
export interface ListLaunchPathsCommandOutput extends ListLaunchPathsOutput, __MetadataBearer {}

/**
 * @public
 * <p>
 *          Lists the paths
 *          to the specified product.
 *          A path describes
 *          how the user
 *          gets access
 *          to a specified product
 *          and is necessary
 *          when provisioning a product.
 *          A path also determines the constraints
 *          that are put on a product.
 *          A path is dependent
 *          on a specific product, porfolio, and principal.
 *       </p>
 *          <note>
 *             <p>
 *             When provisioning a product
 *             that's been added
 *             to a portfolio,
 *             you must grant your user, group, or role access
 *             to the portfolio.
 *             For more information,
 *             see <a href="https://docs.aws.amazon.com/servicecatalog/latest/adminguide/catalogs_portfolios_users.html">Granting users access</a>
 *             in the <i>Service Catalog User Guide</i>.
 *          </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, ListLaunchPathsCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, ListLaunchPathsCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const input = { // ListLaunchPathsInput
 *   AcceptLanguage: "STRING_VALUE",
 *   ProductId: "STRING_VALUE", // required
 *   PageSize: Number("int"),
 *   PageToken: "STRING_VALUE",
 * };
 * const command = new ListLaunchPathsCommand(input);
 * const response = await client.send(command);
 * // { // ListLaunchPathsOutput
 * //   LaunchPathSummaries: [ // LaunchPathSummaries
 * //     { // LaunchPathSummary
 * //       Id: "STRING_VALUE",
 * //       ConstraintSummaries: [ // ConstraintSummaries
 * //         { // ConstraintSummary
 * //           Type: "STRING_VALUE",
 * //           Description: "STRING_VALUE",
 * //         },
 * //       ],
 * //       Tags: [ // Tags
 * //         { // Tag
 * //           Key: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       Name: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextPageToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListLaunchPathsCommandInput - {@link ListLaunchPathsCommandInput}
 * @returns {@link ListLaunchPathsCommandOutput}
 * @see {@link ListLaunchPathsCommandInput} for command's `input` shape.
 * @see {@link ListLaunchPathsCommandOutput} for command's `response` shape.
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
export class ListLaunchPathsCommand extends $Command<
  ListLaunchPathsCommandInput,
  ListLaunchPathsCommandOutput,
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
  constructor(readonly input: ListLaunchPathsCommandInput) {
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
  ): Handler<ListLaunchPathsCommandInput, ListLaunchPathsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListLaunchPathsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "ListLaunchPathsCommand";
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
  private serialize(input: ListLaunchPathsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListLaunchPathsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListLaunchPathsCommandOutput> {
    return de_ListLaunchPathsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
