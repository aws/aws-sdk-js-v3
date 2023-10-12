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

import { GetPriceListFileUrlRequest, GetPriceListFileUrlResponse } from "../models/models_0";
import { PricingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PricingClient";
import { de_GetPriceListFileUrlCommand, se_GetPriceListFileUrlCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetPriceListFileUrlCommand}.
 */
export interface GetPriceListFileUrlCommandInput extends GetPriceListFileUrlRequest {}
/**
 * @public
 *
 * The output of {@link GetPriceListFileUrlCommand}.
 */
export interface GetPriceListFileUrlCommandOutput extends GetPriceListFileUrlResponse, __MetadataBearer {}

/**
 * @public
 * <p>
 *             <i>
 *                <b>This feature is in preview release and is subject to change. Your use of Amazon Web Services Price List API is subject to the Beta Service Participation terms of the <a href="https://aws.amazon.com/service-terms/">Amazon Web Services Service Terms</a> (Section 1.10).</b>
 *             </i>
 *          </p>
 *          <p>This returns the URL that you can retrieve your Price List file from. This URL is based
 *          on the <code>PriceListArn</code> and <code>FileFormat</code> that you retrieve from the
 *             <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_pricing_ListPriceLists.html">ListPriceLists</a> response. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PricingClient, GetPriceListFileUrlCommand } from "@aws-sdk/client-pricing"; // ES Modules import
 * // const { PricingClient, GetPriceListFileUrlCommand } = require("@aws-sdk/client-pricing"); // CommonJS import
 * const client = new PricingClient(config);
 * const input = { // GetPriceListFileUrlRequest
 *   PriceListArn: "STRING_VALUE", // required
 *   FileFormat: "STRING_VALUE", // required
 * };
 * const command = new GetPriceListFileUrlCommand(input);
 * const response = await client.send(command);
 * // { // GetPriceListFileUrlResponse
 * //   Url: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetPriceListFileUrlCommandInput - {@link GetPriceListFileUrlCommandInput}
 * @returns {@link GetPriceListFileUrlCommandOutput}
 * @see {@link GetPriceListFileUrlCommandInput} for command's `input` shape.
 * @see {@link GetPriceListFileUrlCommandOutput} for command's `response` shape.
 * @see {@link PricingClientResolvedConfig | config} for PricingClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>General authentication failure. The request wasn't signed correctly.</p>
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>An error on the server occurred during the processing of your request. Try again later.</p>
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
export class GetPriceListFileUrlCommand extends $Command<
  GetPriceListFileUrlCommandInput,
  GetPriceListFileUrlCommandOutput,
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
  constructor(readonly input: GetPriceListFileUrlCommandInput) {
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
  ): Handler<GetPriceListFileUrlCommandInput, GetPriceListFileUrlCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetPriceListFileUrlCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PricingClient";
    const commandName = "GetPriceListFileUrlCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSPriceListService",
        operation: "GetPriceListFileUrl",
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
  private serialize(input: GetPriceListFileUrlCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetPriceListFileUrlCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetPriceListFileUrlCommandOutput> {
    return de_GetPriceListFileUrlCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
