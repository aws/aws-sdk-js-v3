// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { PurchaseReservedNodeOfferingMessage, PurchaseReservedNodeOfferingResult } from "../models/models_1";
import { de_PurchaseReservedNodeOfferingCommand, se_PurchaseReservedNodeOfferingCommand } from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PurchaseReservedNodeOfferingCommand}.
 */
export interface PurchaseReservedNodeOfferingCommandInput extends PurchaseReservedNodeOfferingMessage {}
/**
 * @public
 *
 * The output of {@link PurchaseReservedNodeOfferingCommand}.
 */
export interface PurchaseReservedNodeOfferingCommandOutput
  extends PurchaseReservedNodeOfferingResult,
    __MetadataBearer {}

/**
 * <p>Allows you to purchase reserved nodes. Amazon Redshift offers a predefined set of
 *             reserved node offerings. You can purchase one or more of the offerings. You can call the
 *                 <a>DescribeReservedNodeOfferings</a> API to obtain the available reserved
 *             node offerings. You can call this API by providing a specific reserved node offering and
 *             the number of nodes you want to reserve. </p>
 *          <p>
 * For more information about reserved node offerings, go to
 * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/purchase-reserved-node-instance.html">Purchasing Reserved Nodes</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, PurchaseReservedNodeOfferingCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, PurchaseReservedNodeOfferingCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * // import type { RedshiftClientConfig } from "@aws-sdk/client-redshift";
 * const config = {}; // type is RedshiftClientConfig
 * const client = new RedshiftClient(config);
 * const input = { // PurchaseReservedNodeOfferingMessage
 *   ReservedNodeOfferingId: "STRING_VALUE", // required
 *   NodeCount: Number("int"),
 * };
 * const command = new PurchaseReservedNodeOfferingCommand(input);
 * const response = await client.send(command);
 * // { // PurchaseReservedNodeOfferingResult
 * //   ReservedNode: { // ReservedNode
 * //     ReservedNodeId: "STRING_VALUE",
 * //     ReservedNodeOfferingId: "STRING_VALUE",
 * //     NodeType: "STRING_VALUE",
 * //     StartTime: new Date("TIMESTAMP"),
 * //     Duration: Number("int"),
 * //     FixedPrice: Number("double"),
 * //     UsagePrice: Number("double"),
 * //     CurrencyCode: "STRING_VALUE",
 * //     NodeCount: Number("int"),
 * //     State: "STRING_VALUE",
 * //     OfferingType: "STRING_VALUE",
 * //     RecurringCharges: [ // RecurringChargeList
 * //       { // RecurringCharge
 * //         RecurringChargeAmount: Number("double"),
 * //         RecurringChargeFrequency: "STRING_VALUE",
 * //       },
 * //     ],
 * //     ReservedNodeOfferingType: "Regular" || "Upgradable",
 * //   },
 * // };
 *
 * ```
 *
 * @param PurchaseReservedNodeOfferingCommandInput - {@link PurchaseReservedNodeOfferingCommandInput}
 * @returns {@link PurchaseReservedNodeOfferingCommandOutput}
 * @see {@link PurchaseReservedNodeOfferingCommandInput} for command's `input` shape.
 * @see {@link PurchaseReservedNodeOfferingCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link ReservedNodeAlreadyExistsFault} (client fault)
 *  <p>User already has a reservation with the given identifier.</p>
 *
 * @throws {@link ReservedNodeOfferingNotFoundFault} (client fault)
 *  <p>Specified offering does not exist.</p>
 *
 * @throws {@link ReservedNodeQuotaExceededFault} (client fault)
 *  <p>Request would exceed the user's compute node quota.
 * For information about increasing your quota, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html">Limits in Amazon Redshift</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.
 * </p>
 *
 * @throws {@link UnsupportedOperationFault} (client fault)
 *  <p>The requested operation isn't supported.</p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 *
 * @public
 */
export class PurchaseReservedNodeOfferingCommand extends $Command
  .classBuilder<
    PurchaseReservedNodeOfferingCommandInput,
    PurchaseReservedNodeOfferingCommandOutput,
    RedshiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("RedshiftServiceVersion20121201", "PurchaseReservedNodeOffering", {})
  .n("RedshiftClient", "PurchaseReservedNodeOfferingCommand")
  .f(void 0, void 0)
  .ser(se_PurchaseReservedNodeOfferingCommand)
  .de(de_PurchaseReservedNodeOfferingCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PurchaseReservedNodeOfferingMessage;
      output: PurchaseReservedNodeOfferingResult;
    };
    sdk: {
      input: PurchaseReservedNodeOfferingCommandInput;
      output: PurchaseReservedNodeOfferingCommandOutput;
    };
  };
}
