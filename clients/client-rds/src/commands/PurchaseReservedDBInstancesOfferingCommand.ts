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
