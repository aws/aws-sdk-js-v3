// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  DescribeReservedDBInstancesOfferingsMessage,
  ReservedDBInstancesOfferingMessage,
} from "../models/models_0";
import type { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DescribeReservedDBInstancesOfferings } from "../schemas/schemas_0";

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
 * // import type { RDSClientConfig } from "@aws-sdk/client-rds";
 * const config = {}; // type is RDSClientConfig
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
 *
 * @example To describe reserved DB instance offerings
 * ```javascript
 * // The following example retrieves details about reserved DB instance options for RDS for Oracle.
 * const input = {
 *   ProductDescription: "oracle"
 * };
 * const command = new DescribeReservedDBInstancesOfferingsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ReservedDBInstancesOfferings: [
 *     {
 *       CurrencyCode: "USD",
 *       DBInstanceClass: "db.m4.xlarge",
 *       Duration: 31536000,
 *       FixedPrice: 4089,
 *       MultiAZ: true,
 *       OfferingType: "Partial Upfront",
 *       ProductDescription: "oracle-se2(li)",
 *       RecurringCharges: [
 *         {
 *           RecurringChargeAmount: 0.594,
 *           RecurringChargeFrequency: "Hourly"
 *         }
 *       ],
 *       ReservedDBInstancesOfferingId: "005bdee3-9ef4-4182-aa0c-58ef7cb6c2f8",
 *       UsagePrice: 0
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeReservedDBInstancesOfferingsCommand extends $Command
  .classBuilder<
    DescribeReservedDBInstancesOfferingsCommandInput,
    DescribeReservedDBInstancesOfferingsCommandOutput,
    RDSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RDSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonRDSv19", "DescribeReservedDBInstancesOfferings", {})
  .n("RDSClient", "DescribeReservedDBInstancesOfferingsCommand")
  .sc(DescribeReservedDBInstancesOfferings)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeReservedDBInstancesOfferingsMessage;
      output: ReservedDBInstancesOfferingMessage;
    };
    sdk: {
      input: DescribeReservedDBInstancesOfferingsCommandInput;
      output: DescribeReservedDBInstancesOfferingsCommandOutput;
    };
  };
}
