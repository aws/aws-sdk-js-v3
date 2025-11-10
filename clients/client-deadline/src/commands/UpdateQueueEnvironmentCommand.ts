// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeadlineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeadlineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateQueueEnvironmentRequest, UpdateQueueEnvironmentResponse } from "../models/models_1";
import { UpdateQueueEnvironment } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateQueueEnvironmentCommand}.
 */
export interface UpdateQueueEnvironmentCommandInput extends UpdateQueueEnvironmentRequest {}
/**
 * @public
 *
 * The output of {@link UpdateQueueEnvironmentCommand}.
 */
export interface UpdateQueueEnvironmentCommandOutput extends UpdateQueueEnvironmentResponse, __MetadataBearer {}

/**
 * <p>Updates the queue environment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, UpdateQueueEnvironmentCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, UpdateQueueEnvironmentCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * // import type { DeadlineClientConfig } from "@aws-sdk/client-deadline";
 * const config = {}; // type is DeadlineClientConfig
 * const client = new DeadlineClient(config);
 * const input = { // UpdateQueueEnvironmentRequest
 *   clientToken: "STRING_VALUE",
 *   farmId: "STRING_VALUE", // required
 *   queueId: "STRING_VALUE", // required
 *   queueEnvironmentId: "STRING_VALUE", // required
 *   priority: Number("int"),
 *   templateType: "JSON" || "YAML",
 *   template: "STRING_VALUE",
 * };
 * const command = new UpdateQueueEnvironmentCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateQueueEnvironmentCommandInput - {@link UpdateQueueEnvironmentCommandInput}
 * @returns {@link UpdateQueueEnvironmentCommandOutput}
 * @see {@link UpdateQueueEnvironmentCommandInput} for command's `input` shape.
 * @see {@link UpdateQueueEnvironmentCommandOutput} for command's `response` shape.
 * @see {@link DeadlineClientResolvedConfig | config} for DeadlineClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform the action.</p>
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
export class UpdateQueueEnvironmentCommand extends $Command
  .classBuilder<
    UpdateQueueEnvironmentCommandInput,
    UpdateQueueEnvironmentCommandOutput,
    DeadlineClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DeadlineClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Deadline", "UpdateQueueEnvironment", {})
  .n("DeadlineClient", "UpdateQueueEnvironmentCommand")
  .sc(UpdateQueueEnvironment)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateQueueEnvironmentRequest;
      output: {};
    };
    sdk: {
      input: UpdateQueueEnvironmentCommandInput;
      output: UpdateQueueEnvironmentCommandOutput;
    };
  };
}
