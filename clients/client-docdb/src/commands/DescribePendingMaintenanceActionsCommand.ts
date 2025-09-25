// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DocDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DocDBClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribePendingMaintenanceActionsMessage, PendingMaintenanceActionsMessage } from "../models/models_0";
import { DescribePendingMaintenanceActions } from "../schemas/schemas_6_PendingMaintenance";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribePendingMaintenanceActionsCommand}.
 */
export interface DescribePendingMaintenanceActionsCommandInput extends DescribePendingMaintenanceActionsMessage {}
/**
 * @public
 *
 * The output of {@link DescribePendingMaintenanceActionsCommand}.
 */
export interface DescribePendingMaintenanceActionsCommandOutput
  extends PendingMaintenanceActionsMessage,
    __MetadataBearer {}

/**
 * <p>Returns a list of resources (for example, instances) that have at least one pending
 *             maintenance action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DocDBClient, DescribePendingMaintenanceActionsCommand } from "@aws-sdk/client-docdb"; // ES Modules import
 * // const { DocDBClient, DescribePendingMaintenanceActionsCommand } = require("@aws-sdk/client-docdb"); // CommonJS import
 * // import type { DocDBClientConfig } from "@aws-sdk/client-docdb";
 * const config = {}; // type is DocDBClientConfig
 * const client = new DocDBClient(config);
 * const input = { // DescribePendingMaintenanceActionsMessage
 *   ResourceIdentifier: "STRING_VALUE",
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE", // required
 *       Values: [ // FilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   Marker: "STRING_VALUE",
 *   MaxRecords: Number("int"),
 * };
 * const command = new DescribePendingMaintenanceActionsCommand(input);
 * const response = await client.send(command);
 * // { // PendingMaintenanceActionsMessage
 * //   PendingMaintenanceActions: [ // PendingMaintenanceActions
 * //     { // ResourcePendingMaintenanceActions
 * //       ResourceIdentifier: "STRING_VALUE",
 * //       PendingMaintenanceActionDetails: [ // PendingMaintenanceActionDetails
 * //         { // PendingMaintenanceAction
 * //           Action: "STRING_VALUE",
 * //           AutoAppliedAfterDate: new Date("TIMESTAMP"),
 * //           ForcedApplyDate: new Date("TIMESTAMP"),
 * //           OptInStatus: "STRING_VALUE",
 * //           CurrentApplyDate: new Date("TIMESTAMP"),
 * //           Description: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribePendingMaintenanceActionsCommandInput - {@link DescribePendingMaintenanceActionsCommandInput}
 * @returns {@link DescribePendingMaintenanceActionsCommandOutput}
 * @see {@link DescribePendingMaintenanceActionsCommandInput} for command's `input` shape.
 * @see {@link DescribePendingMaintenanceActionsCommandOutput} for command's `response` shape.
 * @see {@link DocDBClientResolvedConfig | config} for DocDBClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundFault} (client fault)
 *  <p>The specified resource ID was not found.</p>
 *
 * @throws {@link DocDBServiceException}
 * <p>Base exception class for all service exceptions from DocDB service.</p>
 *
 *
 * @public
 */
export class DescribePendingMaintenanceActionsCommand extends $Command
  .classBuilder<
    DescribePendingMaintenanceActionsCommandInput,
    DescribePendingMaintenanceActionsCommandOutput,
    DocDBClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DocDBClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonRDSv19", "DescribePendingMaintenanceActions", {})
  .n("DocDBClient", "DescribePendingMaintenanceActionsCommand")
  .sc(DescribePendingMaintenanceActions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribePendingMaintenanceActionsMessage;
      output: PendingMaintenanceActionsMessage;
    };
    sdk: {
      input: DescribePendingMaintenanceActionsCommandInput;
      output: DescribePendingMaintenanceActionsCommandOutput;
    };
  };
}
