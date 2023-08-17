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

import { ListAcceptedPortfolioSharesInput, ListAcceptedPortfolioSharesOutput } from "../models/models_0";
import { de_ListAcceptedPortfolioSharesCommand, se_ListAcceptedPortfolioSharesCommand } from "../protocols/Aws_json1_1";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListAcceptedPortfolioSharesCommand}.
 */
export interface ListAcceptedPortfolioSharesCommandInput extends ListAcceptedPortfolioSharesInput {}
/**
 * @public
 *
 * The output of {@link ListAcceptedPortfolioSharesCommand}.
 */
export interface ListAcceptedPortfolioSharesCommandOutput extends ListAcceptedPortfolioSharesOutput, __MetadataBearer {}

/**
 * @public
 * <p>Lists all imported portfolios for which account-to-account shares were accepted by
 *          this account. By specifying the <code>PortfolioShareType</code>, you can list portfolios for which
 *          organizational shares were accepted by this account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, ListAcceptedPortfolioSharesCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, ListAcceptedPortfolioSharesCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const input = { // ListAcceptedPortfolioSharesInput
 *   AcceptLanguage: "STRING_VALUE",
 *   PageToken: "STRING_VALUE",
 *   PageSize: Number("int"),
 *   PortfolioShareType: "IMPORTED" || "AWS_SERVICECATALOG" || "AWS_ORGANIZATIONS",
 * };
 * const command = new ListAcceptedPortfolioSharesCommand(input);
 * const response = await client.send(command);
 * // { // ListAcceptedPortfolioSharesOutput
 * //   PortfolioDetails: [ // PortfolioDetails
 * //     { // PortfolioDetail
 * //       Id: "STRING_VALUE",
 * //       ARN: "STRING_VALUE",
 * //       DisplayName: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       CreatedTime: new Date("TIMESTAMP"),
 * //       ProviderName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextPageToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAcceptedPortfolioSharesCommandInput - {@link ListAcceptedPortfolioSharesCommandInput}
 * @returns {@link ListAcceptedPortfolioSharesCommandOutput}
 * @see {@link ListAcceptedPortfolioSharesCommandInput} for command's `input` shape.
 * @see {@link ListAcceptedPortfolioSharesCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for ServiceCatalogClient's `config` shape.
 *
 * @throws {@link InvalidParametersException} (client fault)
 *  <p>One or more parameters provided to the operation are not valid.</p>
 *
 * @throws {@link OperationNotSupportedException} (client fault)
 *  <p>The operation is not supported.</p>
 *
 * @throws {@link ServiceCatalogServiceException}
 * <p>Base exception class for all service exceptions from ServiceCatalog service.</p>
 *
 */
export class ListAcceptedPortfolioSharesCommand extends $Command<
  ListAcceptedPortfolioSharesCommandInput,
  ListAcceptedPortfolioSharesCommandOutput,
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
  constructor(readonly input: ListAcceptedPortfolioSharesCommandInput) {
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
  ): Handler<ListAcceptedPortfolioSharesCommandInput, ListAcceptedPortfolioSharesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListAcceptedPortfolioSharesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "ListAcceptedPortfolioSharesCommand";
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
  private serialize(input: ListAcceptedPortfolioSharesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListAcceptedPortfolioSharesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListAcceptedPortfolioSharesCommandOutput> {
    return de_ListAcceptedPortfolioSharesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
