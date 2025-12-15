// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribePendingMaintenanceActionsMessage, PendingMaintenanceActionsMessage } from "../models/models_0";
import type { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DescribePendingMaintenanceActions$ } from "../schemas/schemas_0";

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
 * <p>Returns a list of resources (for example, DB instances) that have at least one pending maintenance action.</p>
 *          <p>This API follows an eventual consistency model. This means that the result of the
 *                 <code>DescribePendingMaintenanceActions</code> command might not be immediately
 *             visible to all subsequent RDS commands. Keep this in mind when you use
 *                 <code>DescribePendingMaintenanceActions</code> immediately after using a previous
 *             API command such as <code>ApplyPendingMaintenanceActions</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribePendingMaintenanceActionsCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribePendingMaintenanceActionsCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // import type { RDSClientConfig } from "@aws-sdk/client-rds";
 * const config = {}; // type is RDSClientConfig
 * const client = new RDSClient(config);
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
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundFault} (client fault)
 *  <p>The specified resource ID was not found.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 *
 * @example To list resources with at least one pending maintenance action
 * ```javascript
 * // The following example lists the pending maintenace action for a DB instance.
 * const input = { /* empty *\/ };
 * const command = new DescribePendingMaintenanceActionsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   PendingMaintenanceActions: [
 *     {
 *       PendingMaintenanceActionDetails: [
 *         {
 *           Action: "system-update",
 *           Description: "Upgrade to Aurora PostgreSQL 2.4.2"
 *         }
 *       ],
 *       ResourceIdentifier: "arn:aws:rds:us-west-2:123456789012:cluster:global-db1-cl1"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribePendingMaintenanceActionsCommand extends $Command
  .classBuilder<
    DescribePendingMaintenanceActionsCommandInput,
    DescribePendingMaintenanceActionsCommandOutput,
    RDSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RDSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonRDSv19", "DescribePendingMaintenanceActions", {})
  .n("RDSClient", "DescribePendingMaintenanceActionsCommand")
  .sc(DescribePendingMaintenanceActions$)
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
