// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeadlineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeadlineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateJobRequest, UpdateJobResponse } from "../models/models_1";
import { de_UpdateJobCommand, se_UpdateJobCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateJobCommand}.
 */
export interface UpdateJobCommandInput extends UpdateJobRequest {}
/**
 * @public
 *
 * The output of {@link UpdateJobCommand}.
 */
export interface UpdateJobCommandOutput extends UpdateJobResponse, __MetadataBearer {}

/**
 * <p>Updates a job. </p>
 *          <p>When you change the status of the job to <code>ARCHIVED</code>, the job can't be
 *          scheduled or archived.</p>
 *          <important>
 *             <p>An archived jobs and its steps and tasks are deleted after 120 days. The job can't be
 *             recovered.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, UpdateJobCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, UpdateJobCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * const client = new DeadlineClient(config);
 * const input = { // UpdateJobRequest
 *   clientToken: "STRING_VALUE",
 *   targetTaskRunStatus: "READY" || "FAILED" || "SUCCEEDED" || "CANCELED" || "SUSPENDED" || "PENDING",
 *   priority: Number("int"),
 *   maxFailedTasksCount: Number("int"),
 *   maxRetriesPerTask: Number("int"),
 *   lifecycleStatus: "ARCHIVED",
 *   maxWorkerCount: Number("int"),
 *   farmId: "STRING_VALUE", // required
 *   queueId: "STRING_VALUE", // required
 *   jobId: "STRING_VALUE", // required
 * };
 * const command = new UpdateJobCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateJobCommandInput - {@link UpdateJobCommandInput}
 * @returns {@link UpdateJobCommandOutput}
 * @see {@link UpdateJobCommandInput} for command's `input` shape.
 * @see {@link UpdateJobCommandOutput} for command's `response` shape.
 * @see {@link DeadlineClientResolvedConfig | config} for DeadlineClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform the action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Your request has conflicting operations. This can occur if you're trying to perform more
 *          than one operation on the same resource at the same time.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Deadline Cloud can't process your request right now. Try again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request exceeded a request rate quota.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or
 *          unsupported characters.</p>
 *
 * @throws {@link DeadlineServiceException}
 * <p>Base exception class for all service exceptions from Deadline service.</p>
 *
 *
 * @public
 */
export class UpdateJobCommand extends $Command
  .classBuilder<
    UpdateJobCommandInput,
    UpdateJobCommandOutput,
    DeadlineClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DeadlineClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Deadline", "UpdateJob", {})
  .n("DeadlineClient", "UpdateJobCommand")
  .f(void 0, void 0)
  .ser(se_UpdateJobCommand)
  .de(de_UpdateJobCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateJobRequest;
      output: {};
    };
    sdk: {
      input: UpdateJobCommandInput;
      output: UpdateJobCommandOutput;
    };
  };
}
