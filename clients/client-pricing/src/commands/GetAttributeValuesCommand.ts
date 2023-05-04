// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { GetAttributeValuesRequest, GetAttributeValuesResponse } from "../models/models_0";
import { PricingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PricingClient";
import { de_GetAttributeValuesCommand, se_GetAttributeValuesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link GetAttributeValuesCommand}.
 */
export interface GetAttributeValuesCommandInput extends GetAttributeValuesRequest {}
/**
 * @public
 *
 * The output of {@link GetAttributeValuesCommand}.
 */
export interface GetAttributeValuesCommandOutput extends GetAttributeValuesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of attribute values. Attributes are similar to the details
 *           in a Price List API offer file. For a list of available attributes, see
 *          <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/reading-an-offer.html#pps-defs">Offer File Definitions</a>
 *          in the <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-what-is.html">Billing and Cost Management User Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PricingClient, GetAttributeValuesCommand } from "@aws-sdk/client-pricing"; // ES Modules import
 * // const { PricingClient, GetAttributeValuesCommand } = require("@aws-sdk/client-pricing"); // CommonJS import
 * const client = new PricingClient(config);
 * const input = { // GetAttributeValuesRequest
 *   ServiceCode: "STRING_VALUE", // required
 *   AttributeName: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new GetAttributeValuesCommand(input);
 * const response = await client.send(command);
 * // { // GetAttributeValuesResponse
 * //   AttributeValues: [ // AttributeValueList
 * //     { // AttributeValue
 * //       Value: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetAttributeValuesCommandInput - {@link GetAttributeValuesCommandInput}
 * @returns {@link GetAttributeValuesCommandOutput}
 * @see {@link GetAttributeValuesCommandInput} for command's `input` shape.
 * @see {@link GetAttributeValuesCommandOutput} for command's `response` shape.
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
 * @example To retrieve a list of attribute values
 * ```javascript
 * // This operation returns a list of values available for the given attribute.
 * const input = {
 *   "AttributeName": "volumeType",
 *   "MaxResults": 2,
 *   "ServiceCode": "AmazonEC2"
 * };
 * const command = new GetAttributeValuesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "AttributeValues": [
 *     {
 *       "Value": "Throughput Optimized HDD"
 *     },
 *     {
 *       "Value": "Provisioned IOPS"
 *     }
 *   ],
 *   "NextToken": "GpgauEXAMPLEezucl5LV0w==:7GzYJ0nw0DBTJ2J66EoTIIynE6O1uXwQtTRqioJzQadBnDVgHPzI1en4BUQnPCLpzeBk9RQQAWaFieA4+DapFAGLgk+Z/9/cTw9GldnPOHN98+FdmJP7wKU3QQpQ8MQr5KOeBkIsAqvAQYdL0DkL7tHwPtE5iCEByAmg9gcC/yBU1vAOsf7R3VaNN4M5jMDv3woSWqASSIlBVB6tgW78YL22KhssoItM/jWW+aP6Jqtq4mldxp/ct6DWAl+xLFwHU/CbketimPPXyqHF3/UXDw=="
 * }
 * *\/
 * // example id: to-retreive-attribute-values
 * ```
 *
 */
export class GetAttributeValuesCommand extends $Command<
  GetAttributeValuesCommandInput,
  GetAttributeValuesCommandOutput,
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
  constructor(readonly input: GetAttributeValuesCommandInput) {
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
  ): Handler<GetAttributeValuesCommandInput, GetAttributeValuesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetAttributeValuesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PricingClient";
    const commandName = "GetAttributeValuesCommand";
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
  private serialize(input: GetAttributeValuesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetAttributeValuesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetAttributeValuesCommandOutput> {
    return de_GetAttributeValuesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
