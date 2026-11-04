// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GetReservedNodeExchangeConfigurationOptionsInputMessage,
  GetReservedNodeExchangeConfigurationOptionsOutputMessage,
} from "../models/models_0";
import { GetReservedNodeExchangeConfigurationOptions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetReservedNodeExchangeConfigurationOptionsCommand}.
 */
export interface GetReservedNodeExchangeConfigurationOptionsCommandInput extends GetReservedNodeExchangeConfigurationOptionsInputMessage {}
/**
 * @public
 *
 * The output of {@link GetReservedNodeExchangeConfigurationOptionsCommand}.
 */
export interface GetReservedNodeExchangeConfigurationOptionsCommandOutput extends GetReservedNodeExchangeConfigurationOptionsOutputMessage, __MetadataBearer {}

/**
 * Gets the configuration options for the reserved-node exchange. These options include information about the source reserved node and target reserved node offering. Details include the node type, the price, the node count, and the offering type.
 *
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
 *
 * The `ClusterIdentifier` parameter does not refer to an existing cluster.
 *
 * @throws {@link ClusterSnapshotNotFoundFault} (client fault)
 *
 * The snapshot identifier does not refer to an existing cluster snapshot.
 *
 * @throws {@link DependentServiceUnavailableFault} (client fault)
 *
 * Your request cannot be completed because a dependent internal service is temporarily unavailable. Wait 30 to 60 seconds and try again.
 *
 * @throws {@link InvalidReservedNodeStateFault} (client fault)
 *
 * Indicates that the Reserved Node being exchanged is not in an active state.
 *
 * @throws {@link ReservedNodeAlreadyMigratedFault} (client fault)
 *
 * Indicates that the reserved node has already been exchanged.
 *
 * @throws {@link ReservedNodeNotFoundFault} (client fault)
 *
 * The specified reserved compute node not found.
 *
 * @throws {@link ReservedNodeOfferingNotFoundFault} (client fault)
 *
 * Specified offering does not exist.
 *
 * @throws {@link UnsupportedOperationFault} (client fault)
 *
 * The requested operation isn't supported.
 *
 * @throws {@link RedshiftServiceException}
 *
 * Base exception class for all service exceptions from Redshift service.
 *
 * @public
 */
export class GetReservedNodeExchangeConfigurationOptionsCommand extends command<GetReservedNodeExchangeConfigurationOptionsCommandInput, GetReservedNodeExchangeConfigurationOptionsCommandOutput>(
  _ep0,
  _mw0,
  "GetReservedNodeExchangeConfigurationOptions",
  GetReservedNodeExchangeConfigurationOptions$
) {
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
