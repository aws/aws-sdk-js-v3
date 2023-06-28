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

import { ListPricesRequest, ListPricesResponse } from "../models/models_0";
import { de_ListPricesCommand, se_ListPricesCommand } from "../protocols/Aws_json1_1";
import { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53DomainsClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListPricesCommand}.
 */
export interface ListPricesCommandInput extends ListPricesRequest {}
/**
 * @public
 *
 * The output of {@link ListPricesCommand}.
 */
export interface ListPricesCommandOutput extends ListPricesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists the following prices for either all the TLDs supported by Route 53, or
 * 			the specified TLD:</p>
 *          <ul>
 *             <li>
 *                <p>Registration</p>
 *             </li>
 *             <li>
 *                <p>Transfer</p>
 *             </li>
 *             <li>
 *                <p>Owner change</p>
 *             </li>
 *             <li>
 *                <p>Domain renewal</p>
 *             </li>
 *             <li>
 *                <p>Domain restoration</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53DomainsClient, ListPricesCommand } from "@aws-sdk/client-route-53-domains"; // ES Modules import
 * // const { Route53DomainsClient, ListPricesCommand } = require("@aws-sdk/client-route-53-domains"); // CommonJS import
 * const client = new Route53DomainsClient(config);
 * const input = { // ListPricesRequest
 *   Tld: "STRING_VALUE",
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListPricesCommand(input);
 * const response = await client.send(command);
 * // { // ListPricesResponse
 * //   Prices: [ // DomainPriceList
 * //     { // DomainPrice
 * //       Name: "STRING_VALUE",
 * //       RegistrationPrice: { // PriceWithCurrency
 * //         Price: Number("double"), // required
 * //         Currency: "STRING_VALUE", // required
 * //       },
 * //       TransferPrice: {
 * //         Price: Number("double"), // required
 * //         Currency: "STRING_VALUE", // required
 * //       },
 * //       RenewalPrice: {
 * //         Price: Number("double"), // required
 * //         Currency: "STRING_VALUE", // required
 * //       },
 * //       ChangeOwnershipPrice: {
 * //         Price: Number("double"), // required
 * //         Currency: "STRING_VALUE", // required
 * //       },
 * //       RestorationPrice: {
 * //         Price: Number("double"), // required
 * //         Currency: "STRING_VALUE", // required
 * //       },
 * //     },
 * //   ],
 * //   NextPageMarker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPricesCommandInput - {@link ListPricesCommandInput}
 * @returns {@link ListPricesCommandOutput}
 * @see {@link ListPricesCommandInput} for command's `input` shape.
 * @see {@link ListPricesCommandOutput} for command's `response` shape.
 * @see {@link Route53DomainsClientResolvedConfig | config} for Route53DomainsClient's `config` shape.
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>The requested item is not acceptable. For example, for APIs that accept a domain name,
 * 			the request might specify a domain name that doesn't belong to the account that
 * 			submitted the request. For <code>AcceptDomainTransferFromAnotherAwsAccount</code>, the
 * 			password might be invalid.</p>
 *
 * @throws {@link UnsupportedTLD} (client fault)
 *  <p>Amazon Route 53 does not support this top-level domain (TLD).</p>
 *
 * @throws {@link Route53DomainsServiceException}
 * <p>Base exception class for all service exceptions from Route53Domains service.</p>
 *
 */
export class ListPricesCommand extends $Command<
  ListPricesCommandInput,
  ListPricesCommandOutput,
  Route53DomainsClientResolvedConfig
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
  constructor(readonly input: ListPricesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53DomainsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListPricesCommandInput, ListPricesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListPricesCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53DomainsClient";
    const commandName = "ListPricesCommand";
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
  private serialize(input: ListPricesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListPricesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListPricesCommandOutput> {
    return de_ListPricesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
