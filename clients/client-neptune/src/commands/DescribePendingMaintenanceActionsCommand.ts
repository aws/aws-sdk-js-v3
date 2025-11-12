// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribePendingMaintenanceActionsMessage, PendingMaintenanceActionsMessage } from "../models/models_0";
import { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import { DescribePendingMaintenanceActions } from "../schemas/schemas_0";

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
 * <p>Returns a list of resources (for example, DB instances) that have at least one pending
 *       maintenance action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, DescribePendingMaintenanceActionsCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, DescribePendingMaintenanceActionsCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * // import type { NeptuneClientConfig } from "@aws-sdk/client-neptune";
 * const config = {}; // type is NeptuneClientConfig
 * const client = new NeptuneClient(config);
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
 * @see {@link NeptuneClientResolvedConfig | config} for NeptuneClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundFault} (client fault)
 *  <p>The specified resource ID was not found.</p>
 *
 * @throws {@link NeptuneServiceException}
 * <p>Base exception class for all service exceptions from Neptune service.</p>
 *
 *
 * @public
 */
export class DescribePendingMaintenanceActionsCommand extends $Command
  .classBuilder<
    DescribePendingMaintenanceActionsCommandInput,
    DescribePendingMaintenanceActionsCommandOutput,
    NeptuneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NeptuneClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonRDSv19", "DescribePendingMaintenanceActions", {})
  .n("NeptuneClient", "DescribePendingMaintenanceActionsCommand")
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
