// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ApplyPendingMaintenanceActionMessage, ApplyPendingMaintenanceActionResult } from "../models/models_0";
import {
  de_ApplyPendingMaintenanceActionCommand,
  se_ApplyPendingMaintenanceActionCommand,
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
 * The input for {@link ApplyPendingMaintenanceActionCommand}.
 */
export interface ApplyPendingMaintenanceActionCommandInput extends ApplyPendingMaintenanceActionMessage {}
/**
 * @public
 *
 * The output of {@link ApplyPendingMaintenanceActionCommand}.
 */
export interface ApplyPendingMaintenanceActionCommandOutput
  extends ApplyPendingMaintenanceActionResult,
    __MetadataBearer {}

/**
 * <p>Applies a pending maintenance action to a resource (for example, to a DB instance).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, ApplyPendingMaintenanceActionCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, ApplyPendingMaintenanceActionCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // ApplyPendingMaintenanceActionMessage
 *   ResourceIdentifier: "STRING_VALUE", // required
 *   ApplyAction: "STRING_VALUE", // required
 *   OptInType: "STRING_VALUE", // required
 * };
 * const command = new ApplyPendingMaintenanceActionCommand(input);
 * const response = await client.send(command);
 * // { // ApplyPendingMaintenanceActionResult
 * //   ResourcePendingMaintenanceActions: { // ResourcePendingMaintenanceActions
 * //     ResourceIdentifier: "STRING_VALUE",
 * //     PendingMaintenanceActionDetails: [ // PendingMaintenanceActionDetails
 * //       { // PendingMaintenanceAction
 * //         Action: "STRING_VALUE",
 * //         AutoAppliedAfterDate: new Date("TIMESTAMP"),
 * //         ForcedApplyDate: new Date("TIMESTAMP"),
 * //         OptInStatus: "STRING_VALUE",
 * //         CurrentApplyDate: new Date("TIMESTAMP"),
 * //         Description: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param ApplyPendingMaintenanceActionCommandInput - {@link ApplyPendingMaintenanceActionCommandInput}
 * @returns {@link ApplyPendingMaintenanceActionCommandOutput}
 * @see {@link ApplyPendingMaintenanceActionCommandInput} for command's `input` shape.
 * @see {@link ApplyPendingMaintenanceActionCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link InvalidDBClusterStateFault} (client fault)
 *  <p>The requested operation can't be performed while the cluster is in this state.</p>
 *
 * @throws {@link InvalidDBInstanceStateFault} (client fault)
 *  <p>The DB instance isn't in a valid state.</p>
 *
 * @throws {@link ResourceNotFoundFault} (client fault)
 *  <p>The specified resource ID was not found.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 *
 * @example To apply pending maintenance actions
 * ```javascript
 * // The following example applies the pending maintenance actions for a DB cluster.
 * const input = {
 *   ApplyAction: "system-update",
 *   OptInType: "immediate",
 *   ResourceIdentifier: "arn:aws:rds:us-east-1:123456789012:cluster:my-db-cluster"
 * };
 * const command = new ApplyPendingMaintenanceActionCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ResourcePendingMaintenanceActions: {
 *     PendingMaintenanceActionDetails: [
 *       {
 *         Action: "system-update",
 *         CurrentApplyDate: "2021-01-23T01:07:36.100Z",
 *         Description: "Upgrade to Aurora PostgreSQL 3.3.2",
 *         OptInStatus: "immediate"
 *       }
 *     ],
 *     ResourceIdentifier: "arn:aws:rds:us-east-1:123456789012:cluster:my-db-cluster"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ApplyPendingMaintenanceActionCommand extends $Command
  .classBuilder<
    ApplyPendingMaintenanceActionCommandInput,
    ApplyPendingMaintenanceActionCommandOutput,
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
  .s("AmazonRDSv19", "ApplyPendingMaintenanceAction", {})
  .n("RDSClient", "ApplyPendingMaintenanceActionCommand")
  .f(void 0, void 0)
  .ser(se_ApplyPendingMaintenanceActionCommand)
  .de(de_ApplyPendingMaintenanceActionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ApplyPendingMaintenanceActionMessage;
      output: ApplyPendingMaintenanceActionResult;
    };
    sdk: {
      input: ApplyPendingMaintenanceActionCommandInput;
      output: ApplyPendingMaintenanceActionCommandOutput;
    };
  };
}
