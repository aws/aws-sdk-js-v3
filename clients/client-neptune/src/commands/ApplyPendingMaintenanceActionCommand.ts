// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ApplyPendingMaintenanceActionMessage, ApplyPendingMaintenanceActionResult } from "../models/models_0";
import { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import {
  de_ApplyPendingMaintenanceActionCommand,
  se_ApplyPendingMaintenanceActionCommand,
} from "../protocols/Aws_query";

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
 * import { NeptuneClient, ApplyPendingMaintenanceActionCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, ApplyPendingMaintenanceActionCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * const client = new NeptuneClient(config);
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
 * @see {@link NeptuneClientResolvedConfig | config} for NeptuneClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundFault} (client fault)
 *  <p>The specified resource ID was not found.</p>
 *
 * @throws {@link NeptuneServiceException}
 * <p>Base exception class for all service exceptions from Neptune service.</p>
 *
 * @public
 */
export class ApplyPendingMaintenanceActionCommand extends $Command
  .classBuilder<
    ApplyPendingMaintenanceActionCommandInput,
    ApplyPendingMaintenanceActionCommandOutput,
    NeptuneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: NeptuneClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonRDSv19", "ApplyPendingMaintenanceAction", {})
  .n("NeptuneClient", "ApplyPendingMaintenanceActionCommand")
  .f(void 0, void 0)
  .ser(se_ApplyPendingMaintenanceActionCommand)
  .de(de_ApplyPendingMaintenanceActionCommand)
  .build() {}
