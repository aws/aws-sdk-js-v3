// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteQueueEnvironmentRequest, DeleteQueueEnvironmentResponse } from "../models/models_0";
import { DeleteQueueEnvironment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Deletes a queue environment.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, DeleteQueueEnvironmentCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, DeleteQueueEnvironmentCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * // import type { DeadlineClientConfig } from "@aws-sdk/client-deadline";
 * const config = {}; // type is DeadlineClientConfig
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
 *  You don't have permission to perform the action.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  Deadline Cloud can't process your request right now. Try again later.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  Your request exceeded a request rate quota.
 *
 * @throws {@link ValidationException} (client fault)
 *  The request isn't valid. This can occur if your request contains malformed JSON or unsupported characters.
 *
 * @throws {@link DeadlineServiceException}
 * <p>Base exception class for all service exceptions from Deadline service.</p>
 *
 *
 * @public
 */
export class DeleteQueueEnvironmentCommand extends command<DeleteQueueEnvironmentCommandInput, DeleteQueueEnvironmentCommandOutput>(
  _ep0,
  _mw0,
  "DeleteQueueEnvironment",
  DeleteQueueEnvironment$
) {
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
