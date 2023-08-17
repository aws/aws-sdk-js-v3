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

import { ListPrincipalsForPortfolioInput, ListPrincipalsForPortfolioOutput } from "../models/models_0";
import { de_ListPrincipalsForPortfolioCommand, se_ListPrincipalsForPortfolioCommand } from "../protocols/Aws_json1_1";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListPrincipalsForPortfolioCommand}.
 */
export interface ListPrincipalsForPortfolioCommandInput extends ListPrincipalsForPortfolioInput {}
/**
 * @public
 *
 * The output of {@link ListPrincipalsForPortfolioCommand}.
 */
export interface ListPrincipalsForPortfolioCommandOutput extends ListPrincipalsForPortfolioOutput, __MetadataBearer {}

/**
 * @public
 * <p>Lists all <code>PrincipalARN</code>s and corresponding <code>PrincipalType</code>s associated with the specified portfolio.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, ListPrincipalsForPortfolioCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, ListPrincipalsForPortfolioCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const input = { // ListPrincipalsForPortfolioInput
 *   AcceptLanguage: "STRING_VALUE",
 *   PortfolioId: "STRING_VALUE", // required
 *   PageSize: Number("int"),
 *   PageToken: "STRING_VALUE",
 * };
 * const command = new ListPrincipalsForPortfolioCommand(input);
 * const response = await client.send(command);
 * // { // ListPrincipalsForPortfolioOutput
 * //   Principals: [ // Principals
 * //     { // Principal
 * //       PrincipalARN: "STRING_VALUE",
 * //       PrincipalType: "IAM" || "IAM_PATTERN",
 * //     },
 * //   ],
 * //   NextPageToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPrincipalsForPortfolioCommandInput - {@link ListPrincipalsForPortfolioCommandInput}
 * @returns {@link ListPrincipalsForPortfolioCommandOutput}
 * @see {@link ListPrincipalsForPortfolioCommandInput} for command's `input` shape.
 * @see {@link ListPrincipalsForPortfolioCommandOutput} for command's `response` shape.
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
export class ListPrincipalsForPortfolioCommand extends $Command<
  ListPrincipalsForPortfolioCommandInput,
  ListPrincipalsForPortfolioCommandOutput,
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
  constructor(readonly input: ListPrincipalsForPortfolioCommandInput) {
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
  ): Handler<ListPrincipalsForPortfolioCommandInput, ListPrincipalsForPortfolioCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListPrincipalsForPortfolioCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "ListPrincipalsForPortfolioCommand";
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
  private serialize(input: ListPrincipalsForPortfolioCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListPrincipalsForPortfolioCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListPrincipalsForPortfolioCommandOutput> {
    return de_ListPrincipalsForPortfolioCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
