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

import { ListPortfoliosInput, ListPortfoliosOutput } from "../models/models_0";
import { de_ListPortfoliosCommand, se_ListPortfoliosCommand } from "../protocols/Aws_json1_1";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListPortfoliosCommand}.
 */
export interface ListPortfoliosCommandInput extends ListPortfoliosInput {}
/**
 * @public
 *
 * The output of {@link ListPortfoliosCommand}.
 */
export interface ListPortfoliosCommandOutput extends ListPortfoliosOutput, __MetadataBearer {}

/**
 * @public
 * <p>Lists all portfolios in the catalog.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, ListPortfoliosCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, ListPortfoliosCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const input = { // ListPortfoliosInput
 *   AcceptLanguage: "STRING_VALUE",
 *   PageToken: "STRING_VALUE",
 *   PageSize: Number("int"),
 * };
 * const command = new ListPortfoliosCommand(input);
 * const response = await client.send(command);
 * // { // ListPortfoliosOutput
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
 * @param ListPortfoliosCommandInput - {@link ListPortfoliosCommandInput}
 * @returns {@link ListPortfoliosCommandOutput}
 * @see {@link ListPortfoliosCommandInput} for command's `input` shape.
 * @see {@link ListPortfoliosCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for ServiceCatalogClient's `config` shape.
 *
 * @throws {@link InvalidParametersException} (client fault)
 *  <p>One or more parameters provided to the operation are not valid.</p>
 *
 * @throws {@link ServiceCatalogServiceException}
 * <p>Base exception class for all service exceptions from ServiceCatalog service.</p>
 *
 */
export class ListPortfoliosCommand extends $Command<
  ListPortfoliosCommandInput,
  ListPortfoliosCommandOutput,
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
  constructor(readonly input: ListPortfoliosCommandInput) {
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
  ): Handler<ListPortfoliosCommandInput, ListPortfoliosCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListPortfoliosCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "ListPortfoliosCommand";
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
  private serialize(input: ListPortfoliosCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListPortfoliosCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListPortfoliosCommandOutput> {
    return de_ListPortfoliosCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
