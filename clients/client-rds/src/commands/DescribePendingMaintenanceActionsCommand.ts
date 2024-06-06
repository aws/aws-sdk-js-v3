// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribePendingMaintenanceActionsMessage, PendingMaintenanceActionsMessage } from "../models/models_1";
import {
  de_DescribePendingMaintenanceActionsCommand,
  se_DescribePendingMaintenanceActionsCommand,
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
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribePendingMaintenanceActionsCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribePendingMaintenanceActionsCommand } = require("@aws-sdk/client-rds"); // CommonJS import
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
 * @public
 * @example To list resources with at least one pending maintenance action
 * ```javascript
 * // The following example lists the pending maintenace action for a DB instance.
 * const input = {};
 * const command = new DescribePendingMaintenanceActionsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "PendingMaintenanceActions": [
 *     {
 *       "PendingMaintenanceActionDetails": [
 *         {
 *           "Action": "system-update",
 *           "Description": "Upgrade to Aurora PostgreSQL 2.4.2"
 *         }
 *       ],
 *       "ResourceIdentifier": "arn:aws:rds:us-west-2:123456789012:cluster:global-db1-cl1"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-list-resources-with-at-least-one-pending-maintenance-action-1680283544475
 * ```
 *
 */
export class DescribePendingMaintenanceActionsCommand extends $Command
  .classBuilder<
    DescribePendingMaintenanceActionsCommandInput,
    DescribePendingMaintenanceActionsCommandOutput,
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
  .s("AmazonRDSv19", "DescribePendingMaintenanceActions", {})
  .n("RDSClient", "DescribePendingMaintenanceActionsCommand")
  .f(void 0, void 0)
  .ser(se_DescribePendingMaintenanceActionsCommand)
  .de(de_DescribePendingMaintenanceActionsCommand)
  .build() {}
