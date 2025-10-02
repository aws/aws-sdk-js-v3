// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ARCRegionSwitchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ARCRegionSwitchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeletePlanRequest, DeletePlanResponse } from "../models/models_0";
import { de_DeletePlanCommand, se_DeletePlanCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeletePlanCommand}.
 */
export interface DeletePlanCommandInput extends DeletePlanRequest {}
/**
 * @public
 *
 * The output of {@link DeletePlanCommand}.
 */
export interface DeletePlanCommandOutput extends DeletePlanResponse, __MetadataBearer {}

/**
 * <p>Deletes a Region switch plan. You must specify the ARN of the plan to delete.</p> <p>You cannot delete a plan that has an active execution in progress.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ARCRegionSwitchClient, DeletePlanCommand } from "@aws-sdk/client-arc-region-switch"; // ES Modules import
 * // const { ARCRegionSwitchClient, DeletePlanCommand } = require("@aws-sdk/client-arc-region-switch"); // CommonJS import
 * // import type { ARCRegionSwitchClientConfig } from "@aws-sdk/client-arc-region-switch";
 * const config = {}; // type is ARCRegionSwitchClientConfig
 * const client = new ARCRegionSwitchClient(config);
 * const input = { // DeletePlanRequest
 *   arn: "STRING_VALUE", // required
 * };
 * const command = new DeletePlanCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeletePlanCommandInput - {@link DeletePlanCommandInput}
 * @returns {@link DeletePlanCommandOutput}
 * @see {@link DeletePlanCommandInput} for command's `input` shape.
 * @see {@link DeletePlanCommandOutput} for command's `response` shape.
 * @see {@link ARCRegionSwitchClientResolvedConfig | config} for ARCRegionSwitchClient's `config` shape.
 *
 * @throws {@link IllegalStateException} (client fault)
 *  <p>The operation failed because the current state of the resource doesn't allow the operation to proceed.</p> <p>HTTP Status Code: 400</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p> <p>HTTP Status Code: 404</p>
 *
 * @throws {@link ARCRegionSwitchServiceException}
 * <p>Base exception class for all service exceptions from ARCRegionSwitch service.</p>
 *
 *
 * @public
 */
export class DeletePlanCommand extends $Command
  .classBuilder<
    DeletePlanCommandInput,
    DeletePlanCommandOutput,
    ARCRegionSwitchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
    UseControlPlaneEndpoint: { type: "staticContextParams", value: true },
  })
  .m(function (this: any, Command: any, cs: any, config: ARCRegionSwitchClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ArcRegionSwitch", "DeletePlan", {})
  .n("ARCRegionSwitchClient", "DeletePlanCommand")
  .f(void 0, void 0)
  .ser(se_DeletePlanCommand)
  .de(de_DeletePlanCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeletePlanRequest;
      output: {};
    };
    sdk: {
      input: DeletePlanCommandInput;
      output: DeletePlanCommandOutput;
    };
  };
}
