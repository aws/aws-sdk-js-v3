// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeadlineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeadlineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteQueueEnvironmentRequest, DeleteQueueEnvironmentResponse } from "../models/models_0";
import { de_DeleteQueueEnvironmentCommand, se_DeleteQueueEnvironmentCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteQueueEnvironmentCommand}.
 */
export interface DeleteQueueEnvironmentCommandInput extends DeleteQueueEnvironmentRequest {}
/**
 * @public
 *
 * The output of {@link DeleteQueueEnvironmentCommand}.
 */
export interface DeleteQueueEnvironmentCommandOutput extends DeleteQueueEnvironmentResponse, __MetadataBearer {}

/**
 * <p>Deletes a queue environment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, DeleteQueueEnvironmentCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, DeleteQueueEnvironmentCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * const client = new DeadlineClient(config);
 * const input = { // DeleteQueueEnvironmentRequest
 *   farmId: "STRING_VALUE", // required
 *   queueId: "STRING_VALUE", // required
 *   queueEnvironmentId: "STRING_VALUE", // required
 * };
 * const command = new DeleteQueueEnvironmentCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteQueueEnvironmentCommandInput - {@link DeleteQueueEnvironmentCommandInput}
 * @returns {@link DeleteQueueEnvironmentCommandOutput}
 * @see {@link DeleteQueueEnvironmentCommandInput} for command's `input` shape.
 * @see {@link DeleteQueueEnvironmentCommandOutput} for command's `response` shape.
 * @see {@link DeadlineClientResolvedConfig | config} for DeadlineClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform the action.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Deadline Cloud can't process your request right now. Try again later.</p>
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
export class DeleteQueueEnvironmentCommand extends $Command
  .classBuilder<
    DeleteQueueEnvironmentCommandInput,
    DeleteQueueEnvironmentCommandOutput,
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
  .s("Deadline", "DeleteQueueEnvironment", {})
  .n("DeadlineClient", "DeleteQueueEnvironmentCommand")
  .f(void 0, void 0)
  .ser(se_DeleteQueueEnvironmentCommand)
  .de(de_DeleteQueueEnvironmentCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteQueueEnvironmentRequest;
      output: {};
    };
    sdk: {
      input: DeleteQueueEnvironmentCommandInput;
      output: DeleteQueueEnvironmentCommandOutput;
    };
  };
}
