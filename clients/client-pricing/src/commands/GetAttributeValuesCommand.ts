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

import {
  GetAttributeValuesRequest,
  GetAttributeValuesRequestFilterSensitiveLog,
  GetAttributeValuesResponse,
  GetAttributeValuesResponseFilterSensitiveLog,
} from "../models/models_0";
import { PricingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PricingClient";
import {
  deserializeAws_json1_1GetAttributeValuesCommand,
  serializeAws_json1_1GetAttributeValuesCommand,
} from "../protocols/Aws_json1_1";

/**
 * The input for {@link GetAttributeValuesCommand}.
 */
export interface GetAttributeValuesCommandInput extends GetAttributeValuesRequest {}
/**
 * The output of {@link GetAttributeValuesCommand}.
 */
export interface GetAttributeValuesCommandOutput extends GetAttributeValuesResponse, __MetadataBearer {}

/**
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
 * const command = new GetAttributeValuesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAttributeValuesCommandInput} for command's `input` shape.
 * @see {@link GetAttributeValuesCommandOutput} for command's `response` shape.
 * @see {@link PricingClientResolvedConfig | config} for PricingClient's `config` shape.
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
      inputFilterSensitiveLog: GetAttributeValuesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetAttributeValuesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetAttributeValuesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetAttributeValuesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetAttributeValuesCommandOutput> {
    return deserializeAws_json1_1GetAttributeValuesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
