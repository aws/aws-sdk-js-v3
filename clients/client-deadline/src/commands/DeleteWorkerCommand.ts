// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteWorkerRequest, DeleteWorkerResponse } from "../models/models_0";
import { DeleteWorker$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteWorkerCommand}.
 */
export interface DeleteWorkerCommandInput extends DeleteWorkerRequest {}
/**
 * @public
 *
 * The output of {@link DeleteWorkerCommand}.
 */
export interface DeleteWorkerCommandOutput extends DeleteWorkerResponse, __MetadataBearer {}

/**
 * Deletes a worker.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, DeleteWorkerCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, DeleteWorkerCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * // import type { DeadlineClientConfig } from "@aws-sdk/client-deadline";
 * const config = {}; // type is DeadlineClientConfig
 * const client = new DeadlineClient(config);
 * const input = { // DeleteWorkerRequest
 *   farmId: "STRING_VALUE", // required
 *   fleetId: "STRING_VALUE", // required
 *   workerId: "STRING_VALUE", // required
 * };
 * const command = new DeleteWorkerCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteWorkerCommandInput - {@link DeleteWorkerCommandInput}
 * @returns {@link DeleteWorkerCommandOutput}
 * @see {@link DeleteWorkerCommandInput} for command's `input` shape.
 * @see {@link DeleteWorkerCommandOutput} for command's `response` shape.
 * @see {@link DeadlineClientResolvedConfig | config} for DeadlineClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  You don't have permission to perform the action.
 *
 * @throws {@link ConflictException} (client fault)
 *  Your request has conflicting operations. This can occur if you're trying to perform more than one operation on the same resource at the same time.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  Deadline Cloud can't process your request right now. Try again later.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The requested resource can't be found.
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
export class DeleteWorkerCommand extends command<DeleteWorkerCommandInput, DeleteWorkerCommandOutput>(
  _ep0,
  _mw0,
  "DeleteWorker",
  DeleteWorker$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteWorkerRequest;
      output: {};
    };
    sdk: {
      input: DeleteWorkerCommandInput;
      output: DeleteWorkerCommandOutput;
    };
  };
}
