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

import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { DescribeReservedCacheNodesOfferingsMessage, ReservedCacheNodesOfferingMessage } from "../models/models_0";
import {
  de_DescribeReservedCacheNodesOfferingsCommand,
  se_DescribeReservedCacheNodesOfferingsCommand,
} from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeReservedCacheNodesOfferingsCommand}.
 */
export interface DescribeReservedCacheNodesOfferingsCommandInput extends DescribeReservedCacheNodesOfferingsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeReservedCacheNodesOfferingsCommand}.
 */
export interface DescribeReservedCacheNodesOfferingsCommandOutput
  extends ReservedCacheNodesOfferingMessage,
    __MetadataBearer {}

/**
 * @public
 * <p>Lists available reserved cache node offerings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, DescribeReservedCacheNodesOfferingsCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, DescribeReservedCacheNodesOfferingsCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const input = { // DescribeReservedCacheNodesOfferingsMessage
 *   ReservedCacheNodesOfferingId: "STRING_VALUE",
 *   CacheNodeType: "STRING_VALUE",
 *   Duration: "STRING_VALUE",
 *   ProductDescription: "STRING_VALUE",
 *   OfferingType: "STRING_VALUE",
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new DescribeReservedCacheNodesOfferingsCommand(input);
 * const response = await client.send(command);
 * // { // ReservedCacheNodesOfferingMessage
 * //   Marker: "STRING_VALUE",
 * //   ReservedCacheNodesOfferings: [ // ReservedCacheNodesOfferingList
 * //     { // ReservedCacheNodesOffering
 * //       ReservedCacheNodesOfferingId: "STRING_VALUE",
 * //       CacheNodeType: "STRING_VALUE",
 * //       Duration: Number("int"),
 * //       FixedPrice: Number("double"),
 * //       UsagePrice: Number("double"),
 * //       ProductDescription: "STRING_VALUE",
 * //       OfferingType: "STRING_VALUE",
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
 * @param DescribeReservedCacheNodesOfferingsCommandInput - {@link DescribeReservedCacheNodesOfferingsCommandInput}
 * @returns {@link DescribeReservedCacheNodesOfferingsCommandOutput}
 * @see {@link DescribeReservedCacheNodesOfferingsCommandInput} for command's `input` shape.
 * @see {@link DescribeReservedCacheNodesOfferingsCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p>Two or more incompatible parameters were specified.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value for a parameter is invalid.</p>
 *
 * @throws {@link ReservedCacheNodesOfferingNotFoundFault} (client fault)
 *  <p>The requested cache node offering does not exist.</p>
 *
 * @throws {@link ElastiCacheServiceException}
 * <p>Base exception class for all service exceptions from ElastiCache service.</p>
 *
 * @example DescribeReseredCacheNodeOfferings
 * ```javascript
 * // Lists available reserved cache node offerings.
 * const input = {
 *   "MaxRecords": 20
 * };
 * const command = new DescribeReservedCacheNodesOfferingsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Marker": "1ef01f5b-433f-94ff-a530-61a56bfc8e7a",
 *   "ReservedCacheNodesOfferings": [
 *     {
 *       "CacheNodeType": "cache.m1.small",
 *       "Duration": 94608000,
 *       "FixedPrice": 157,
 *       "OfferingType": "Medium Utilization",
 *       "ProductDescription": "memcached",
 *       "RecurringCharges": [],
 *       "ReservedCacheNodesOfferingId": "0167633d-37f6-4222-b872-b1f22eb79ba4",
 *       "UsagePrice": 0.017
 *     },
 *     {
 *       "CacheNodeType": "cache.m4.xlarge",
 *       "Duration": 94608000,
 *       "FixedPrice": 1248,
 *       "OfferingType": "Heavy Utilization",
 *       "ProductDescription": "redis",
 *       "RecurringCharges": [
 *         {
 *           "RecurringChargeAmount": 0.077,
 *           "RecurringChargeFrequency": "Hourly"
 *         }
 *       ],
 *       "ReservedCacheNodesOfferingId": "02c04e13-baca-4e71-9ceb-620eed94827d",
 *       "UsagePrice": 0
 *     },
 *     {
 *       "CacheNodeType": "cache.m2.4xlarge",
 *       "Duration": 94608000,
 *       "FixedPrice": 2381,
 *       "OfferingType": "Medium Utilization",
 *       "ProductDescription": "memcached",
 *       "RecurringCharges": [],
 *       "ReservedCacheNodesOfferingId": "02e1755e-76e8-48e3-8d82-820a5726a458",
 *       "UsagePrice": 0.276
 *     },
 *     {
 *       "CacheNodeType": "cache.m1.small",
 *       "Duration": 94608000,
 *       "FixedPrice": 188,
 *       "OfferingType": "Heavy Utilization",
 *       "ProductDescription": "redis",
 *       "RecurringCharges": [
 *         {
 *           "RecurringChargeAmount": 0.013,
 *           "RecurringChargeFrequency": "Hourly"
 *         }
 *       ],
 *       "ReservedCacheNodesOfferingId": "03315215-7b87-421a-a3dd-785021e4113f",
 *       "UsagePrice": 0
 *     },
 *     {
 *       "CacheNodeType": "cache.m4.10xlarge",
 *       "Duration": 31536000,
 *       "FixedPrice": 6158,
 *       "OfferingType": "Heavy Utilization",
 *       "ProductDescription": "redis",
 *       "RecurringCharges": [
 *         {
 *           "RecurringChargeAmount": 1.125,
 *           "RecurringChargeFrequency": "Hourly"
 *         }
 *       ],
 *       "ReservedCacheNodesOfferingId": "05ffbb44-2ace-4476-a2a5-8ec99f866fb3",
 *       "UsagePrice": 0
 *     },
 *     {
 *       "CacheNodeType": "cache.m1.small",
 *       "Duration": 31536000,
 *       "FixedPrice": 101,
 *       "OfferingType": "Medium Utilization",
 *       "ProductDescription": "redis",
 *       "RecurringCharges": [],
 *       "ReservedCacheNodesOfferingId": "065c71ae-4a4e-4f1e-bebf-37525f4c6cb2",
 *       "UsagePrice": 0.023
 *     },
 *     {
 *       "CacheNodeType": "cache.m1.medium",
 *       "Duration": 94608000,
 *       "FixedPrice": 314,
 *       "OfferingType": "Medium Utilization",
 *       "ProductDescription": "memcached",
 *       "RecurringCharges": [],
 *       "ReservedCacheNodesOfferingId": "06774b12-7f5e-48c1-907a-f286c63f327d",
 *       "UsagePrice": 0.034
 *     },
 *     {
 *       "CacheNodeType": "cache.m2.xlarge",
 *       "Duration": 31536000,
 *       "FixedPrice": 163,
 *       "OfferingType": "Light Utilization",
 *       "ProductDescription": "memcached",
 *       "RecurringCharges": [],
 *       "ReservedCacheNodesOfferingId": "0924ac6b-847f-4761-ba6b-4290b2adf719",
 *       "UsagePrice": 0.137
 *     },
 *     {
 *       "CacheNodeType": "cache.m2.xlarge",
 *       "Duration": 94608000,
 *       "FixedPrice": 719,
 *       "OfferingType": "Heavy Utilization",
 *       "ProductDescription": "redis",
 *       "RecurringCharges": [
 *         {
 *           "RecurringChargeAmount": 0.049,
 *           "RecurringChargeFrequency": "Hourly"
 *         }
 *       ],
 *       "ReservedCacheNodesOfferingId": "09eeb126-69b6-4d3f-8f94-ca3510629f53",
 *       "UsagePrice": 0
 *     },
 *     {
 *       "CacheNodeType": "cache.r3.2xlarge",
 *       "Duration": 94608000,
 *       "FixedPrice": 4132,
 *       "OfferingType": "Heavy Utilization",
 *       "ProductDescription": "redis",
 *       "RecurringCharges": [
 *         {
 *           "RecurringChargeAmount": 0.182,
 *           "RecurringChargeFrequency": "Hourly"
 *         }
 *       ],
 *       "ReservedCacheNodesOfferingId": "0a516ad8-557f-4310-9dd0-2448c2ff4d62",
 *       "UsagePrice": 0
 *     },
 *     {
 *       "CacheNodeType": "cache.c1.xlarge",
 *       "Duration": 94608000,
 *       "FixedPrice": 875,
 *       "OfferingType": "Light Utilization",
 *       "ProductDescription": "memcached",
 *       "RecurringCharges": [],
 *       "ReservedCacheNodesOfferingId": "0b0c1cc5-2177-4150-95d7-c67ec34dcb19",
 *       "UsagePrice": 0.363
 *     },
 *     {
 *       "CacheNodeType": "cache.m4.10xlarge",
 *       "Duration": 94608000,
 *       "FixedPrice": 12483,
 *       "OfferingType": "Heavy Utilization",
 *       "ProductDescription": "memcached",
 *       "RecurringCharges": [
 *         {
 *           "RecurringChargeAmount": 0.76,
 *           "RecurringChargeFrequency": "Hourly"
 *         }
 *       ],
 *       "ReservedCacheNodesOfferingId": "0c2b139b-1cff-43d0-8fba-0c753f9b1950",
 *       "UsagePrice": 0
 *     },
 *     {
 *       "CacheNodeType": "cache.c1.xlarge",
 *       "Duration": 31536000,
 *       "FixedPrice": 1620,
 *       "OfferingType": "Heavy Utilization",
 *       "ProductDescription": "memcached",
 *       "RecurringCharges": [
 *         {
 *           "RecurringChargeAmount": 0.207,
 *           "RecurringChargeFrequency": "Hourly"
 *         }
 *       ],
 *       "ReservedCacheNodesOfferingId": "0c52115b-38cb-47a2-8dbc-e02e40b6a13f",
 *       "UsagePrice": 0
 *     },
 *     {
 *       "CacheNodeType": "cache.m2.4xlarge",
 *       "Duration": 94608000,
 *       "FixedPrice": 2381,
 *       "OfferingType": "Medium Utilization",
 *       "ProductDescription": "redis",
 *       "RecurringCharges": [],
 *       "ReservedCacheNodesOfferingId": "12fcb19c-5416-4e1d-934f-28f1e2cb8599",
 *       "UsagePrice": 0.276
 *     },
 *     {
 *       "CacheNodeType": "cache.m4.xlarge",
 *       "Duration": 31536000,
 *       "FixedPrice": 616,
 *       "OfferingType": "Heavy Utilization",
 *       "ProductDescription": "memcached",
 *       "RecurringCharges": [
 *         {
 *           "RecurringChargeAmount": 0.112,
 *           "RecurringChargeFrequency": "Hourly"
 *         }
 *       ],
 *       "ReservedCacheNodesOfferingId": "13af20ad-914d-4d8b-9763-fa2e565f3549",
 *       "UsagePrice": 0
 *     },
 *     {
 *       "CacheNodeType": "cache.r3.8xlarge",
 *       "Duration": 94608000,
 *       "FixedPrice": 16528,
 *       "OfferingType": "Heavy Utilization",
 *       "ProductDescription": "memcached",
 *       "RecurringCharges": [
 *         {
 *           "RecurringChargeAmount": 0.729,
 *           "RecurringChargeFrequency": "Hourly"
 *         }
 *       ],
 *       "ReservedCacheNodesOfferingId": "14da3d3f-b526-4dbf-b09b-355578b2a576",
 *       "UsagePrice": 0
 *     },
 *     {
 *       "CacheNodeType": "cache.m1.medium",
 *       "Duration": 94608000,
 *       "FixedPrice": 140,
 *       "OfferingType": "Light Utilization",
 *       "ProductDescription": "redis",
 *       "RecurringCharges": [],
 *       "ReservedCacheNodesOfferingId": "15d7018c-71fb-4717-8409-4bdcdca18da7",
 *       "UsagePrice": 0.052
 *     },
 *     {
 *       "CacheNodeType": "cache.m4.4xlarge",
 *       "Duration": 94608000,
 *       "FixedPrice": 4993,
 *       "OfferingType": "Heavy Utilization",
 *       "ProductDescription": "memcached",
 *       "RecurringCharges": [
 *         {
 *           "RecurringChargeAmount": 0.304,
 *           "RecurringChargeFrequency": "Hourly"
 *         }
 *       ],
 *       "ReservedCacheNodesOfferingId": "1ae7ec5f-a76e-49b6-822b-629b1768a13a",
 *       "UsagePrice": 0
 *     },
 *     {
 *       "CacheNodeType": "cache.m3.2xlarge",
 *       "Duration": 31536000,
 *       "FixedPrice": 1772,
 *       "OfferingType": "Heavy Utilization",
 *       "ProductDescription": "redis",
 *       "RecurringCharges": [
 *         {
 *           "RecurringChargeAmount": 0.25,
 *           "RecurringChargeFrequency": "Hourly"
 *         }
 *       ],
 *       "ReservedCacheNodesOfferingId": "1d31242b-3925-48d1-b882-ce03204e6013",
 *       "UsagePrice": 0
 *     },
 *     {
 *       "CacheNodeType": "cache.t1.micro",
 *       "Duration": 31536000,
 *       "FixedPrice": 54,
 *       "OfferingType": "Medium Utilization",
 *       "ProductDescription": "memcached",
 *       "RecurringCharges": [],
 *       "ReservedCacheNodesOfferingId": "1ef01f5b-94ff-433f-a530-61a56bfc8e7a",
 *       "UsagePrice": 0.008
 *     }
 *   ]
 * }
 * *\/
 * // example id: describereseredcachenodeofferings-1481742869998
 * ```
 *
 */
export class DescribeReservedCacheNodesOfferingsCommand extends $Command<
  DescribeReservedCacheNodesOfferingsCommandInput,
  DescribeReservedCacheNodesOfferingsCommandOutput,
  ElastiCacheClientResolvedConfig
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
  constructor(readonly input: DescribeReservedCacheNodesOfferingsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElastiCacheClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeReservedCacheNodesOfferingsCommandInput, DescribeReservedCacheNodesOfferingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeReservedCacheNodesOfferingsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "DescribeReservedCacheNodesOfferingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonElastiCacheV9",
        operation: "DescribeReservedCacheNodesOfferings",
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
  private serialize(
    input: DescribeReservedCacheNodesOfferingsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeReservedCacheNodesOfferingsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeReservedCacheNodesOfferingsCommandOutput> {
    return de_DescribeReservedCacheNodesOfferingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
