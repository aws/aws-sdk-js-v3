// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeReservedDBInstancesOfferingsMessage, ReservedDBInstancesOfferingMessage } from "../models/models_1";
import {
  de_DescribeReservedDBInstancesOfferingsCommand,
  se_DescribeReservedDBInstancesOfferingsCommand,
} from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * @public
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
export class DescribeReservedDBInstancesOfferingsCommand extends $Command
  .classBuilder<
    DescribeReservedDBInstancesOfferingsCommandInput,
    DescribeReservedDBInstancesOfferingsCommandOutput,
    RDSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: RDSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonRDSv19", "DescribeReservedDBInstancesOfferings", {})
  .n("RDSClient", "DescribeReservedDBInstancesOfferingsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeReservedDBInstancesOfferingsCommand)
  .de(de_DescribeReservedDBInstancesOfferingsCommand)
  .build() {}
