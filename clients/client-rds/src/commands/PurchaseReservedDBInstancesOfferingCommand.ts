// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  PurchaseReservedDBInstancesOfferingMessage,
  PurchaseReservedDBInstancesOfferingResult,
} from "../models/models_1";
import {
  de_PurchaseReservedDBInstancesOfferingCommand,
  se_PurchaseReservedDBInstancesOfferingCommand,
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
 * The input for {@link PurchaseReservedDBInstancesOfferingCommand}.
 */
export interface PurchaseReservedDBInstancesOfferingCommandInput extends PurchaseReservedDBInstancesOfferingMessage {}
/**
 * @public
 *
 * The output of {@link PurchaseReservedDBInstancesOfferingCommand}.
 */
export interface PurchaseReservedDBInstancesOfferingCommandOutput
  extends PurchaseReservedDBInstancesOfferingResult,
    __MetadataBearer {}

/**
 * <p>Purchases a reserved DB instance offering.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, PurchaseReservedDBInstancesOfferingCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, PurchaseReservedDBInstancesOfferingCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // PurchaseReservedDBInstancesOfferingMessage
 *   ReservedDBInstancesOfferingId: "STRING_VALUE", // required
 *   ReservedDBInstanceId: "STRING_VALUE",
 *   DBInstanceCount: Number("int"),
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new PurchaseReservedDBInstancesOfferingCommand(input);
 * const response = await client.send(command);
 * // { // PurchaseReservedDBInstancesOfferingResult
 * //   ReservedDBInstance: { // ReservedDBInstance
 * //     ReservedDBInstanceId: "STRING_VALUE",
 * //     ReservedDBInstancesOfferingId: "STRING_VALUE",
 * //     DBInstanceClass: "STRING_VALUE",
 * //     StartTime: new Date("TIMESTAMP"),
 * //     Duration: Number("int"),
 * //     FixedPrice: Number("double"),
 * //     UsagePrice: Number("double"),
 * //     CurrencyCode: "STRING_VALUE",
 * //     DBInstanceCount: Number("int"),
 * //     ProductDescription: "STRING_VALUE",
 * //     OfferingType: "STRING_VALUE",
 * //     MultiAZ: true || false,
 * //     State: "STRING_VALUE",
 * //     RecurringCharges: [ // RecurringChargeList
 * //       { // RecurringCharge
 * //         RecurringChargeAmount: Number("double"),
 * //         RecurringChargeFrequency: "STRING_VALUE",
 * //       },
 * //     ],
 * //     ReservedDBInstanceArn: "STRING_VALUE",
 * //     LeaseId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param PurchaseReservedDBInstancesOfferingCommandInput - {@link PurchaseReservedDBInstancesOfferingCommandInput}
 * @returns {@link PurchaseReservedDBInstancesOfferingCommandOutput}
 * @see {@link PurchaseReservedDBInstancesOfferingCommandInput} for command's `input` shape.
 * @see {@link PurchaseReservedDBInstancesOfferingCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link ReservedDBInstanceAlreadyExistsFault} (client fault)
 *  <p>User already has a reservation with the given identifier.</p>
 *
 * @throws {@link ReservedDBInstanceQuotaExceededFault} (client fault)
 *  <p>Request would exceed the user's DB Instance quota.</p>
 *
 * @throws {@link ReservedDBInstancesOfferingNotFoundFault} (client fault)
 *  <p>Specified offering does not exist.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 * @public
 * @example To purchase a reserved DB instance
 * ```javascript
 * // The following example shows how to buy the reserved DB instance offering from the previous example.
 * const input = {
 *   "ReservedDBInstanceId": "8ba30be1-b9ec-447f-8f23-6114e3f4c7b4",
 *   "ReservedDBInstancesOfferingId": ""
 * };
 * const command = new PurchaseReservedDBInstancesOfferingCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ReservedDBInstance": {
 *     "CurrencyCode": "USD",
 *     "DBInstanceClass": "db.t2.micro",
 *     "DBInstanceCount": 1,
 *     "Duration": 31536000,
 *     "FixedPrice": 51,
 *     "MultiAZ": false,
 *     "OfferingType": "Partial Upfront",
 *     "ProductDescription": "mysql",
 *     "RecurringCharges": [
 *       {
 *         "RecurringChargeAmount": 0.006,
 *         "RecurringChargeFrequency": "Hourly"
 *       }
 *     ],
 *     "ReservedDBInstanceArn": "arn:aws:rds:us-west-2:123456789012:ri:ri-2020-06-29-16-54-57-670",
 *     "ReservedDBInstanceId": "ri-2020-06-29-16-54-57-670",
 *     "ReservedDBInstancesOfferingId": "8ba30be1-b9ec-447f-8f23-6114e3f4c7b4",
 *     "StartTime": "2020-06-29T16:54:57.670Z",
 *     "State": "payment-pending",
 *     "UsagePrice": 0
 *   }
 * }
 * *\/
 * // example id: to-purchase-a-reserved-db-instance-1680263732858
 * ```
 *
 */
export class PurchaseReservedDBInstancesOfferingCommand extends $Command
  .classBuilder<
    PurchaseReservedDBInstancesOfferingCommandInput,
    PurchaseReservedDBInstancesOfferingCommandOutput,
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
  .s("AmazonRDSv19", "PurchaseReservedDBInstancesOffering", {})
  .n("RDSClient", "PurchaseReservedDBInstancesOfferingCommand")
  .f(void 0, void 0)
  .ser(se_PurchaseReservedDBInstancesOfferingCommand)
  .de(de_PurchaseReservedDBInstancesOfferingCommand)
  .build() {}
