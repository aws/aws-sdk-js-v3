// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteScalingPlanRequest, DeleteScalingPlanResponse } from "../models/models_0";
import { DeleteScalingPlan$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Deletes the specified scaling plan.
 *
 * Deleting a scaling plan deletes the underlying ScalingInstruction for all of the scalable resources that are covered by the plan.
 *
 * If the plan has launched resources or has scaling activities in progress, you must delete those resources separately.
 *
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
 *
 * Concurrent updates caused an exception, for example, if you request an update to a scaling plan that already has a pending update.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * The service encountered an internal error.
 *
 * @throws {@link ObjectNotFoundException} (client fault)
 *
 * The specified object could not be found.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * An exception was thrown for a validation issue. Review the parameters provided.
 *
 * @throws {@link AutoScalingPlansServiceException}
 *
 * Base exception class for all service exceptions from AutoScalingPlans service.
 *
 * @public
 */
export class DeleteScalingPlanCommand extends command<DeleteScalingPlanCommandInput, DeleteScalingPlanCommandOutput>(
  _ep0,
  _mw0,
  "DeleteScalingPlan",
  DeleteScalingPlan$
) {
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
