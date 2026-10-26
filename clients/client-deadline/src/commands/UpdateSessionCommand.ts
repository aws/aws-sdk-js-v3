// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateSessionRequest, UpdateSessionResponse } from "../models/models_1";
import { UpdateSession$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateSessionCommand}.
 */
export interface UpdateSessionCommandInput extends UpdateSessionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateSessionCommand}.
 */
export interface UpdateSessionCommandOutput extends UpdateSessionResponse, __MetadataBearer {}

/**
 * Updates a session.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, UpdateSessionCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, UpdateSessionCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * // import type { DeadlineClientConfig } from "@aws-sdk/client-deadline";
 * const config = {}; // type is DeadlineClientConfig
 * const client = new DeadlineClient(config);
 * const input = { // UpdateSessionRequest
 *   farmId: "STRING_VALUE", // required
 *   queueId: "STRING_VALUE", // required
 *   jobId: "STRING_VALUE", // required
 *   sessionId: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 *   targetLifecycleStatus: "ENDED", // required
 * };
 * const command = new UpdateSessionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateSessionCommandInput - {@link UpdateSessionCommandInput}
 * @returns {@link UpdateSessionCommandOutput}
 * @see {@link UpdateSessionCommandInput} for command's `input` shape.
 * @see {@link UpdateSessionCommandOutput} for command's `response` shape.
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
export class UpdateSessionCommand extends command<UpdateSessionCommandInput, UpdateSessionCommandOutput>(
  _ep0,
  _mw0,
  "UpdateSession",
  UpdateSession$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateSessionRequest;
      output: {};
    };
    sdk: {
      input: UpdateSessionCommandInput;
      output: UpdateSessionCommandOutput;
    };
  };
}
