// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeReservedDBInstancesMessage, ReservedDBInstanceMessage } from "../models/models_1";
import { de_DescribeReservedDBInstancesCommand, se_DescribeReservedDBInstancesCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 *
 * @example To describe reserved DB instances
 * ```javascript
 * // The following example retrieves details about any reserved DB instances in the current AWS account.
 * const input = { /* empty *\/ };
 * const command = new DescribeReservedDBInstancesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ReservedDBInstances: [
 *     {
 *       CurrencyCode: "USD",
 *       DBInstanceClass: "db.t3.micro",
 *       DBInstanceCount: 1,
 *       Duration: 31536000,
 *       FixedPrice: 0,
 *       LeaseId: "a1b2c3d4-6b69-4a59-be89-5e11aa446666",
 *       MultiAZ: false,
 *       OfferingType: "No Upfront",
 *       ProductDescription: "sqlserver-ex(li)",
 *       RecurringCharges: [
 *         {
 *           RecurringChargeAmount: 0.014,
 *           RecurringChargeFrequency: "Hourly"
 *         }
 *       ],
 *       ReservedDBInstanceArn: "arn:aws:rds:us-west-2:123456789012:ri:myreservedinstance",
 *       ReservedDBInstanceId: "myreservedinstance",
 *       ReservedDBInstancesOfferingId: "12ab34cd-59af-4b2c-a660-1abcdef23456",
 *       StartTime: "2020-06-01T13:44:21.436Z",
 *       State: "payment-pending",
 *       UsagePrice: 0
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeReservedDBInstancesCommand extends $Command
  .classBuilder<
    DescribeReservedDBInstancesCommandInput,
    DescribeReservedDBInstancesCommandOutput,
    RDSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RDSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonRDSv19", "DescribeReservedDBInstances", {})
  .n("RDSClient", "DescribeReservedDBInstancesCommand")
  .f(void 0, void 0)
  .ser(se_DescribeReservedDBInstancesCommand)
  .de(de_DescribeReservedDBInstancesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeReservedDBInstancesMessage;
      output: ReservedDBInstanceMessage;
    };
    sdk: {
      input: DescribeReservedDBInstancesCommandInput;
      output: DescribeReservedDBInstancesCommandOutput;
    };
  };
}
