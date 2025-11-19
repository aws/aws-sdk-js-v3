// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetReservedNodeExchangeConfigurationOptionsInputMessage,
  GetReservedNodeExchangeConfigurationOptionsOutputMessage,
} from "../models/models_0";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { GetReservedNodeExchangeConfigurationOptions } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetReservedNodeExchangeConfigurationOptionsCommand}.
 */
export interface GetReservedNodeExchangeConfigurationOptionsCommandInput
  extends GetReservedNodeExchangeConfigurationOptionsInputMessage {}
/**
 * @public
 *
 * The output of {@link GetReservedNodeExchangeConfigurationOptionsCommand}.
 */
export interface GetReservedNodeExchangeConfigurationOptionsCommandOutput
  extends GetReservedNodeExchangeConfigurationOptionsOutputMessage,
    __MetadataBearer {}

/**
 * <p>Gets the configuration options for the reserved-node exchange. These options
 *             include information about the source reserved node and target reserved node offering.
 *             Details include the node type, the price, the node count, and the offering type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, GetReservedNodeExchangeConfigurationOptionsCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, GetReservedNodeExchangeConfigurationOptionsCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * // import type { RedshiftClientConfig } from "@aws-sdk/client-redshift";
 * const config = {}; // type is RedshiftClientConfig
 * const client = new RedshiftClient(config);
 * const input = { // GetReservedNodeExchangeConfigurationOptionsInputMessage
 *   ActionType: "restore-cluster" || "resize-cluster", // required
 *   ClusterIdentifier: "STRING_VALUE",
 *   SnapshotIdentifier: "STRING_VALUE",
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new GetReservedNodeExchangeConfigurationOptionsCommand(input);
 * const response = await client.send(command);
 * // { // GetReservedNodeExchangeConfigurationOptionsOutputMessage
 * //   Marker: "STRING_VALUE",
 * //   ReservedNodeConfigurationOptionList: [ // ReservedNodeConfigurationOptionList
 * //     { // ReservedNodeConfigurationOption
 * //       SourceReservedNode: { // ReservedNode
 * //         ReservedNodeId: "STRING_VALUE",
 * //         ReservedNodeOfferingId: "STRING_VALUE",
 * //         NodeType: "STRING_VALUE",
 * //         StartTime: new Date("TIMESTAMP"),
 * //         Duration: Number("int"),
 * //         FixedPrice: Number("double"),
 * //         UsagePrice: Number("double"),
 * //         CurrencyCode: "STRING_VALUE",
 * //         NodeCount: Number("int"),
 * //         State: "STRING_VALUE",
 * //         OfferingType: "STRING_VALUE",
 * //         RecurringCharges: [ // RecurringChargeList
 * //           { // RecurringCharge
 * //             RecurringChargeAmount: Number("double"),
 * //             RecurringChargeFrequency: "STRING_VALUE",
 * //           },
 * //         ],
 * //         ReservedNodeOfferingType: "Regular" || "Upgradable",
 * //       },
 * //       TargetReservedNodeCount: Number("int"),
 * //       TargetReservedNodeOffering: { // ReservedNodeOffering
 * //         ReservedNodeOfferingId: "STRING_VALUE",
 * //         NodeType: "STRING_VALUE",
 * //         Duration: Number("int"),
 * //         FixedPrice: Number("double"),
 * //         UsagePrice: Number("double"),
 * //         CurrencyCode: "STRING_VALUE",
 * //         OfferingType: "STRING_VALUE",
 * //         RecurringCharges: [
 * //           {
 * //             RecurringChargeAmount: Number("double"),
 * //             RecurringChargeFrequency: "STRING_VALUE",
 * //           },
 * //         ],
 * //         ReservedNodeOfferingType: "Regular" || "Upgradable",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetReservedNodeExchangeConfigurationOptionsCommandInput - {@link GetReservedNodeExchangeConfigurationOptionsCommandInput}
 * @returns {@link GetReservedNodeExchangeConfigurationOptionsCommandOutput}
 * @see {@link GetReservedNodeExchangeConfigurationOptionsCommandInput} for command's `input` shape.
 * @see {@link GetReservedNodeExchangeConfigurationOptionsCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link ClusterNotFoundFault} (client fault)
 *  <p>The <code>ClusterIdentifier</code> parameter does not refer to an existing cluster.
 *         </p>
 *
 * @throws {@link ClusterSnapshotNotFoundFault} (client fault)
 *  <p>The snapshot identifier does not refer to an existing cluster snapshot.</p>
 *
 * @throws {@link DependentServiceUnavailableFault} (client fault)
 *  <p>Your request cannot be completed because a dependent internal service is
 *             temporarily unavailable. Wait 30 to 60 seconds and try again.</p>
 *
 * @throws {@link InvalidReservedNodeStateFault} (client fault)
 *  <p>Indicates that the Reserved Node being exchanged is not in an active state.</p>
 *
 * @throws {@link ReservedNodeAlreadyMigratedFault} (client fault)
 *  <p>Indicates that the reserved node has already been exchanged.</p>
 *
 * @throws {@link ReservedNodeNotFoundFault} (client fault)
 *  <p>The specified reserved compute node not found.</p>
 *
 * @throws {@link ReservedNodeOfferingNotFoundFault} (client fault)
 *  <p>Specified offering does not exist.</p>
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
export class GetReservedNodeExchangeConfigurationOptionsCommand extends $Command
  .classBuilder<
    GetReservedNodeExchangeConfigurationOptionsCommandInput,
    GetReservedNodeExchangeConfigurationOptionsCommandOutput,
    RedshiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RedshiftServiceVersion20121201", "GetReservedNodeExchangeConfigurationOptions", {})
  .n("RedshiftClient", "GetReservedNodeExchangeConfigurationOptionsCommand")
  .sc(GetReservedNodeExchangeConfigurationOptions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetReservedNodeExchangeConfigurationOptionsInputMessage;
      output: GetReservedNodeExchangeConfigurationOptionsOutputMessage;
    };
    sdk: {
      input: GetReservedNodeExchangeConfigurationOptionsCommandInput;
      output: GetReservedNodeExchangeConfigurationOptionsCommandOutput;
    };
  };
}
