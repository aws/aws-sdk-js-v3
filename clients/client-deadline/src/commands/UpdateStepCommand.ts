// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeadlineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeadlineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateStepRequest, UpdateStepResponse } from "../models/models_1";
import { de_UpdateStepCommand, se_UpdateStepCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateStepCommand}.
 */
export interface UpdateStepCommandInput extends UpdateStepRequest {}
/**
 * @public
 *
 * The output of {@link UpdateStepCommand}.
 */
export interface UpdateStepCommandOutput extends UpdateStepResponse, __MetadataBearer {}

/**
 * <p>Updates a step.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, UpdateStepCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, UpdateStepCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * const client = new DeadlineClient(config);
 * const input = { // UpdateStepRequest
 *   targetTaskRunStatus: "READY" || "FAILED" || "SUCCEEDED" || "CANCELED" || "SUSPENDED" || "PENDING", // required
 *   clientToken: "STRING_VALUE",
 *   farmId: "STRING_VALUE", // required
 *   queueId: "STRING_VALUE", // required
 *   jobId: "STRING_VALUE", // required
 *   stepId: "STRING_VALUE", // required
 * };
 * const command = new UpdateStepCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateStepCommandInput - {@link UpdateStepCommandInput}
 * @returns {@link UpdateStepCommandOutput}
 * @see {@link UpdateStepCommandInput} for command's `input` shape.
 * @see {@link UpdateStepCommandOutput} for command's `response` shape.
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
 * @public
 */
export class UpdateStepCommand extends $Command
  .classBuilder<
    UpdateStepCommandInput,
    UpdateStepCommandOutput,
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
  .s("Deadline", "UpdateStep", {})
  .n("DeadlineClient", "UpdateStepCommand")
  .f(void 0, void 0)
  .ser(se_UpdateStepCommand)
  .de(de_UpdateStepCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateStepRequest;
      output: {};
    };
    sdk: {
      input: UpdateStepCommandInput;
      output: UpdateStepCommandOutput;
    };
  };
}
