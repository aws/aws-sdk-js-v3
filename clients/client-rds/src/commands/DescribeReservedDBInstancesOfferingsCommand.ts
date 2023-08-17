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

import { DescribeReservedDBInstancesOfferingsMessage, ReservedDBInstancesOfferingMessage } from "../models/models_1";
import {
  de_DescribeReservedDBInstancesOfferingsCommand,
  se_DescribeReservedDBInstancesOfferingsCommand,
} from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeReservedDBInstancesOfferingsCommand}.
 */
export interface DescribeReservedDBInstancesOfferingsCommandInput extends DescribeReservedDBInstancesOfferingsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeReservedDBInstancesOfferingsCommand}.
 */
export interface DescribeReservedDBInstancesOfferingsCommandOutput
  extends ReservedDBInstancesOfferingMessage,
    __MetadataBearer {}

/**
 * @public
 * <p>Lists available reserved DB instance offerings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeReservedDBInstancesOfferingsCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeReservedDBInstancesOfferingsCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // DescribeReservedDBInstancesOfferingsMessage
 *   ReservedDBInstancesOfferingId: "STRING_VALUE",
 *   DBInstanceClass: "STRING_VALUE",
 *   Duration: "STRING_VALUE",
 *   ProductDescription: "STRING_VALUE",
 *   OfferingType: "STRING_VALUE",
 *   MultiAZ: true || false,
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE", // required
 *       Values: [ // FilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new DescribeReservedDBInstancesOfferingsCommand(input);
 * const response = await client.send(command);
 * // { // ReservedDBInstancesOfferingMessage
 * //   Marker: "STRING_VALUE",
 * //   ReservedDBInstancesOfferings: [ // ReservedDBInstancesOfferingList
 * //     { // ReservedDBInstancesOffering
 * //       ReservedDBInstancesOfferingId: "STRING_VALUE",
 * //       DBInstanceClass: "STRING_VALUE",
 * //       Duration: Number("int"),
 * //       FixedPrice: Number("double"),
 * //       UsagePrice: Number("double"),
 * //       CurrencyCode: "STRING_VALUE",
 * //       ProductDescription: "STRING_VALUE",
 * //       OfferingType: "STRING_VALUE",
 * //       MultiAZ: true || false,
 * //       RecurringCharges: [ // RecurringChargeList
 * //         { // RecurringCharge
 * //           RecurringChargeAmount: Number("double"),
 * //           RecurringChargeFrequency: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeReservedDBInstancesOfferingsCommandInput - {@link DescribeReservedDBInstancesOfferingsCommandInput}
 * @returns {@link DescribeReservedDBInstancesOfferingsCommandOutput}
 * @see {@link DescribeReservedDBInstancesOfferingsCommandInput} for command's `input` shape.
 * @see {@link DescribeReservedDBInstancesOfferingsCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link ReservedDBInstancesOfferingNotFoundFault} (client fault)
 *  <p>Specified offering does not exist.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 * @example To describe reserved DB instance offerings
 * ```javascript
 * // The following example retrieves details about reserved DB instance options for RDS for Oracle.
 * const input = {
 *   "ProductDescription": "oracle"
 * };
 * const command = new DescribeReservedDBInstancesOfferingsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ReservedDBInstancesOfferings": [
 *     {
 *       "CurrencyCode": "USD",
 *       "DBInstanceClass": "db.m4.xlarge",
 *       "Duration": 31536000,
 *       "FixedPrice": 4089,
 *       "MultiAZ": true,
 *       "OfferingType": "Partial Upfront",
 *       "ProductDescription": "oracle-se2(li)",
 *       "RecurringCharges": [
 *         {
 *           "RecurringChargeAmount": 0.594,
 *           "RecurringChargeFrequency": "Hourly"
 *         }
 *       ],
 *       "ReservedDBInstancesOfferingId": "005bdee3-9ef4-4182-aa0c-58ef7cb6c2f8",
 *       "UsagePrice": 0
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-describe-reserved-db-instance-offerings-1680283755054
 * ```
 *
 */
export class DescribeReservedDBInstancesOfferingsCommand extends $Command<
  DescribeReservedDBInstancesOfferingsCommandInput,
  DescribeReservedDBInstancesOfferingsCommandOutput,
  RDSClientResolvedConfig
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
  constructor(readonly input: DescribeReservedDBInstancesOfferingsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeReservedDBInstancesOfferingsCommandInput, DescribeReservedDBInstancesOfferingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeReservedDBInstancesOfferingsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "DescribeReservedDBInstancesOfferingsCommand";
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
  private serialize(
    input: DescribeReservedDBInstancesOfferingsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeReservedDBInstancesOfferingsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeReservedDBInstancesOfferingsCommandOutput> {
    return de_DescribeReservedDBInstancesOfferingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
