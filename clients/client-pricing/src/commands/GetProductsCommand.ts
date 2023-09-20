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

import { GetProductsRequest, GetProductsResponse } from "../models/models_0";
import { PricingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PricingClient";
import { de_GetProductsCommand, se_GetProductsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetProductsCommand}.
 */
export interface GetProductsCommandInput extends GetProductsRequest {}
/**
 * @public
 *
 * The output of {@link GetProductsCommand}.
 */
export interface GetProductsCommandOutput extends GetProductsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of all products that match the filter criteria.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PricingClient, GetProductsCommand } from "@aws-sdk/client-pricing"; // ES Modules import
 * // const { PricingClient, GetProductsCommand } = require("@aws-sdk/client-pricing"); // CommonJS import
 * const client = new PricingClient(config);
 * const input = { // GetProductsRequest
 *   ServiceCode: "STRING_VALUE", // required
 *   Filters: [ // Filters
 *     { // Filter
 *       Type: "TERM_MATCH", // required
 *       Field: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   FormatVersion: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new GetProductsCommand(input);
 * const response = await client.send(command);
 * // { // GetProductsResponse
 * //   FormatVersion: "STRING_VALUE",
 * //   PriceList: [ // PriceListJsonItems
 * //     "STRING_VALUE",
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetProductsCommandInput - {@link GetProductsCommandInput}
 * @returns {@link GetProductsCommandOutput}
 * @see {@link GetProductsCommandInput} for command's `input` shape.
 * @see {@link GetProductsCommandOutput} for command's `response` shape.
 * @see {@link PricingClientResolvedConfig | config} for PricingClient's `config` shape.
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
export class GetProductsCommand extends $Command<
  GetProductsCommandInput,
  GetProductsCommandOutput,
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
  constructor(readonly input: GetProductsCommandInput) {
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
  ): Handler<GetProductsCommandInput, GetProductsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetProductsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PricingClient";
    const commandName = "GetProductsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSPriceListService",
        operation: "GetProducts",
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
  private serialize(input: GetProductsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetProductsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetProductsCommandOutput> {
    return de_GetProductsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
