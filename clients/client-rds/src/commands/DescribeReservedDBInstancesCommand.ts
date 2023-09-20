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

import { DescribeReservedDBInstancesMessage, ReservedDBInstanceMessage } from "../models/models_1";
import { de_DescribeReservedDBInstancesCommand, se_DescribeReservedDBInstancesCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeReservedDBInstancesCommand}.
 */
export interface DescribeReservedDBInstancesCommandInput extends DescribeReservedDBInstancesMessage {}
/**
 * @public
 *
 * The output of {@link DescribeReservedDBInstancesCommand}.
 */
export interface DescribeReservedDBInstancesCommandOutput extends ReservedDBInstanceMessage, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about reserved DB instances for this account, or about a specified reserved DB instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeReservedDBInstancesCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeReservedDBInstancesCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // DescribeReservedDBInstancesMessage
 *   ReservedDBInstanceId: "STRING_VALUE",
 *   ReservedDBInstancesOfferingId: "STRING_VALUE",
 *   DBInstanceClass: "STRING_VALUE",
 *   Duration: "STRING_VALUE",
 *   ProductDescription: "STRING_VALUE",
 *   OfferingType: "STRING_VALUE",
 *   MultiAZ: true || false,
 *   LeaseId: "STRING_VALUE",
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
 * const command = new DescribeReservedDBInstancesCommand(input);
 * const response = await client.send(command);
 * // { // ReservedDBInstanceMessage
 * //   Marker: "STRING_VALUE",
 * //   ReservedDBInstances: [ // ReservedDBInstanceList
 * //     { // ReservedDBInstance
 * //       ReservedDBInstanceId: "STRING_VALUE",
 * //       ReservedDBInstancesOfferingId: "STRING_VALUE",
 * //       DBInstanceClass: "STRING_VALUE",
 * //       StartTime: new Date("TIMESTAMP"),
 * //       Duration: Number("int"),
 * //       FixedPrice: Number("double"),
 * //       UsagePrice: Number("double"),
 * //       CurrencyCode: "STRING_VALUE",
 * //       DBInstanceCount: Number("int"),
 * //       ProductDescription: "STRING_VALUE",
 * //       OfferingType: "STRING_VALUE",
 * //       MultiAZ: true || false,
 * //       State: "STRING_VALUE",
 * //       RecurringCharges: [ // RecurringChargeList
 * //         { // RecurringCharge
 * //           RecurringChargeAmount: Number("double"),
 * //           RecurringChargeFrequency: "STRING_VALUE",
 * //         },
 * //       ],
 * //       ReservedDBInstanceArn: "STRING_VALUE",
 * //       LeaseId: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeReservedDBInstancesCommandInput - {@link DescribeReservedDBInstancesCommandInput}
 * @returns {@link DescribeReservedDBInstancesCommandOutput}
 * @see {@link DescribeReservedDBInstancesCommandInput} for command's `input` shape.
 * @see {@link DescribeReservedDBInstancesCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link ReservedDBInstanceNotFoundFault} (client fault)
 *  <p>The specified reserved DB Instance not found.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 * @example To describe reserved DB instances
 * ```javascript
 * // The following example retrieves details about any reserved DB instances in the current AWS account.
 * const input = {};
 * const command = new DescribeReservedDBInstancesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ReservedDBInstances": [
 *     {
 *       "CurrencyCode": "USD",
 *       "DBInstanceClass": "db.t3.micro",
 *       "DBInstanceCount": 1,
 *       "Duration": 31536000,
 *       "FixedPrice": 0,
 *       "LeaseId": "a1b2c3d4-6b69-4a59-be89-5e11aa446666",
 *       "MultiAZ": false,
 *       "OfferingType": "No Upfront",
 *       "ProductDescription": "sqlserver-ex(li)",
 *       "RecurringCharges": [
 *         {
 *           "RecurringChargeAmount": 0.014,
 *           "RecurringChargeFrequency": "Hourly"
 *         }
 *       ],
 *       "ReservedDBInstanceArn": "arn:aws:rds:us-west-2:123456789012:ri:myreservedinstance",
 *       "ReservedDBInstanceId": "myreservedinstance",
 *       "ReservedDBInstancesOfferingId": "12ab34cd-59af-4b2c-a660-1abcdef23456",
 *       "StartTime": "2020-06-01T13:44:21.436Z",
 *       "State": "payment-pending",
 *       "UsagePrice": 0
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-describe-reserved-db-instances-1680283668105
 * ```
 *
 */
export class DescribeReservedDBInstancesCommand extends $Command<
  DescribeReservedDBInstancesCommandInput,
  DescribeReservedDBInstancesCommandOutput,
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
  constructor(readonly input: DescribeReservedDBInstancesCommandInput) {
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
  ): Handler<DescribeReservedDBInstancesCommandInput, DescribeReservedDBInstancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeReservedDBInstancesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "DescribeReservedDBInstancesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonRDSv19",
        operation: "DescribeReservedDBInstances",
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
  private serialize(input: DescribeReservedDBInstancesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeReservedDBInstancesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeReservedDBInstancesCommandOutput> {
    return de_DescribeReservedDBInstancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
