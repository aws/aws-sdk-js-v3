// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeadlineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeadlineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteQueueRequest, DeleteQueueResponse } from "../models/models_0";
import { DeleteQueue } from "../schemas/schemas_34_DeleteQueue";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteQueueCommand}.
 */
export interface DeleteQueueCommandInput extends DeleteQueueRequest {}
/**
 * @public
 *
 * The output of {@link DeleteQueueCommand}.
 */
export interface DeleteQueueCommandOutput extends DeleteQueueResponse, __MetadataBearer {}

/**
 * <p>Deletes a queue.</p>
 *          <important>
 *             <p>You can't recover the jobs in a queue if you delete the queue. Deleting the queue
 *             also deletes the jobs in that queue.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, DeleteQueueCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, DeleteQueueCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * // import type { DeadlineClientConfig } from "@aws-sdk/client-deadline";
 * const config = {}; // type is DeadlineClientConfig
 * const client = new DeadlineClient(config);
 * const input = { // DeleteQueueRequest
 *   farmId: "STRING_VALUE", // required
 *   queueId: "STRING_VALUE", // required
 * };
 * const command = new DeleteQueueCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteQueueCommandInput - {@link DeleteQueueCommandInput}
 * @returns {@link DeleteQueueCommandOutput}
 * @see {@link DeleteQueueCommandInput} for command's `input` shape.
 * @see {@link DeleteQueueCommandOutput} for command's `response` shape.
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
export class DeleteQueueCommand extends $Command
  .classBuilder<
    DeleteQueueCommandInput,
    DeleteQueueCommandOutput,
    DeadlineClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DeadlineClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Deadline", "DeleteQueue", {})
  .n("DeadlineClient", "DeleteQueueCommand")
  .sc(DeleteQueue)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteQueueRequest;
      output: {};
    };
    sdk: {
      input: DeleteQueueCommandInput;
      output: DeleteQueueCommandOutput;
    };
  };
}
