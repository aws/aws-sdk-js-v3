// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AutoScalingPlansClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingPlansClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteScalingPlanRequest, DeleteScalingPlanResponse } from "../models/models_0";
import { DeleteScalingPlan } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteScalingPlanCommand}.
 */
export interface DeleteScalingPlanCommandInput extends DeleteScalingPlanRequest {}
/**
 * @public
 *
 * The output of {@link DeleteScalingPlanCommand}.
 */
export interface DeleteScalingPlanCommandOutput extends DeleteScalingPlanResponse, __MetadataBearer {}

/**
 * <p>Deletes the specified scaling plan.</p>
 *          <p>Deleting a scaling plan deletes the underlying <a>ScalingInstruction</a> for
 *          all of the scalable resources that are covered by the plan.</p>
 *          <p>If the plan has launched resources or has scaling activities in progress, you must
 *          delete those resources separately.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingPlansClient, DeleteScalingPlanCommand } from "@aws-sdk/client-auto-scaling-plans"; // ES Modules import
 * // const { AutoScalingPlansClient, DeleteScalingPlanCommand } = require("@aws-sdk/client-auto-scaling-plans"); // CommonJS import
 * // import type { AutoScalingPlansClientConfig } from "@aws-sdk/client-auto-scaling-plans";
 * const config = {}; // type is AutoScalingPlansClientConfig
 * const client = new AutoScalingPlansClient(config);
 * const input = { // DeleteScalingPlanRequest
 *   ScalingPlanName: "STRING_VALUE", // required
 *   ScalingPlanVersion: Number("long"), // required
 * };
 * const command = new DeleteScalingPlanCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteScalingPlanCommandInput - {@link DeleteScalingPlanCommandInput}
 * @returns {@link DeleteScalingPlanCommandOutput}
 * @see {@link DeleteScalingPlanCommandInput} for command's `input` shape.
 * @see {@link DeleteScalingPlanCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingPlansClientResolvedConfig | config} for AutoScalingPlansClient's `config` shape.
 *
 * @throws {@link ConcurrentUpdateException} (server fault)
 *  <p>Concurrent updates caused an exception, for example, if you request an update to a
 *          scaling plan that already has a pending update.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>The service encountered an internal error.</p>
 *
 * @throws {@link ObjectNotFoundException} (client fault)
 *  <p>The specified object could not be found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception was thrown for a validation issue. Review the parameters provided.</p>
 *
 * @throws {@link AutoScalingPlansServiceException}
 * <p>Base exception class for all service exceptions from AutoScalingPlans service.</p>
 *
 *
 * @public
 */
export class DeleteScalingPlanCommand extends $Command
  .classBuilder<
    DeleteScalingPlanCommandInput,
    DeleteScalingPlanCommandOutput,
    AutoScalingPlansClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AutoScalingPlansClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AnyScaleScalingPlannerFrontendService", "DeleteScalingPlan", {})
  .n("AutoScalingPlansClient", "DeleteScalingPlanCommand")
  .sc(DeleteScalingPlan)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteScalingPlanRequest;
      output: {};
    };
    sdk: {
      input: DeleteScalingPlanCommandInput;
      output: DeleteScalingPlanCommandOutput;
    };
  };
}
