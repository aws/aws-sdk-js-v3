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

import { ListPriceListsRequest, ListPriceListsResponse } from "../models/models_0";
import { PricingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PricingClient";
import { de_ListPriceListsCommand, se_ListPriceListsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListPriceListsCommand}.
 */
export interface ListPriceListsCommandInput extends ListPriceListsRequest {}
/**
 * @public
 *
 * The output of {@link ListPriceListsCommand}.
 */
export interface ListPriceListsCommandOutput extends ListPriceListsResponse, __MetadataBearer {}

/**
 * @public
 * <p>
 *             <i>
 *                <b>This feature is in preview release and is subject to change. Your use of Amazon Web Services Price List API is subject to the Beta Service Participation terms of the <a href="https://aws.amazon.com/service-terms/">Amazon Web Services Service Terms</a> (Section 1.10).</b>
 *             </i>
 *          </p>
 *          <p>This returns a list of Price List references that the requester if authorized to view,
 *          given a <code>ServiceCode</code>, <code>CurrencyCode</code>, and an
 *             <code>EffectiveDate</code>. Use without a <code>RegionCode</code> filter to list Price
 *          List references from all available Amazon Web Services Regions. Use with a
 *             <code>RegionCode</code> filter to get the Price List reference that's specific to a
 *          specific Amazon Web Services Region. You can use the <code>PriceListArn</code> from the
 *          response to get your preferred Price List files through the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_pricing_GetPriceListFileUrl.html">GetPriceListFileUrl</a> API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PricingClient, ListPriceListsCommand } from "@aws-sdk/client-pricing"; // ES Modules import
 * // const { PricingClient, ListPriceListsCommand } = require("@aws-sdk/client-pricing"); // CommonJS import
 * const client = new PricingClient(config);
 * const input = { // ListPriceListsRequest
 *   ServiceCode: "STRING_VALUE", // required
 *   EffectiveDate: new Date("TIMESTAMP"), // required
 *   RegionCode: "STRING_VALUE",
 *   CurrencyCode: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListPriceListsCommand(input);
 * const response = await client.send(command);
 * // { // ListPriceListsResponse
 * //   PriceLists: [ // PriceLists
 * //     { // PriceList
 * //       PriceListArn: "STRING_VALUE",
 * //       RegionCode: "STRING_VALUE",
 * //       CurrencyCode: "STRING_VALUE",
 * //       FileFormats: [ // FileFormats
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPriceListsCommandInput - {@link ListPriceListsCommandInput}
 * @returns {@link ListPriceListsCommandOutput}
 * @see {@link ListPriceListsCommandInput} for command's `input` shape.
 * @see {@link ListPriceListsCommandOutput} for command's `response` shape.
 * @see {@link PricingClientResolvedConfig | config} for PricingClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>General authentication failure. The request wasn't signed correctly.</p>
 *
 * @throws {@link ExpiredNextTokenException} (client fault)
 *  <p>The pagination token expired. Try again without a pagination token.</p>
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>An error on the server occurred during the processing of your request. Try again later.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The pagination token is invalid. Try again without a pagination token.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters had an invalid value.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The requested resource can't be found.</p>
 *
 * @throws {@link PricingServiceException}
 * <p>Base exception class for all service exceptions from Pricing service.</p>
 *
 */
export class ListPriceListsCommand extends $Command<
  ListPriceListsCommandInput,
  ListPriceListsCommandOutput,
  PricingClientResolvedConfig
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
  constructor(readonly input: ListPriceListsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PricingClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListPriceListsCommandInput, ListPriceListsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListPriceListsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PricingClient";
    const commandName = "ListPriceListsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSPriceListService",
        operation: "ListPriceLists",
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
  private serialize(input: ListPriceListsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListPriceListsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListPriceListsCommandOutput> {
    return de_ListPriceListsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
