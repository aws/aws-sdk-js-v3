// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteMonitorRequest, DeleteMonitorResponse } from "../models/models_1";
import { DeleteMonitor$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteMonitorCommand}.
 */
export interface DeleteMonitorCommandInput extends DeleteMonitorRequest {}
/**
 * @public
 *
 * The output of {@link DeleteMonitorCommand}.
 */
export interface DeleteMonitorCommandOutput extends DeleteMonitorResponse, __MetadataBearer {}

/**
 * Removes a Deadline Cloud monitor. After you delete a monitor, you can create a new one and attach farms to the monitor.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, DeleteMonitorCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, DeleteMonitorCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * // import type { DeadlineClientConfig } from "@aws-sdk/client-deadline";
 * const config = {}; // type is DeadlineClientConfig
 * const client = new DeadlineClient(config);
 * const input = { // DeleteMonitorRequest
 *   monitorId: "STRING_VALUE", // required
 * };
 * const command = new DeleteMonitorCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteMonitorCommandInput - {@link DeleteMonitorCommandInput}
 * @returns {@link DeleteMonitorCommandOutput}
 * @see {@link DeleteMonitorCommandInput} for command's `input` shape.
 * @see {@link DeleteMonitorCommandOutput} for command's `response` shape.
 * @see {@link DeadlineClientResolvedConfig | config} for DeadlineClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  You don't have permission to perform the action.
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
export class DeleteMonitorCommand extends command<DeleteMonitorCommandInput, DeleteMonitorCommandOutput>(
  _ep0,
  _mw0,
  "DeleteMonitor",
  DeleteMonitor$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteMonitorRequest;
      output: {};
    };
    sdk: {
      input: DeleteMonitorCommandInput;
      output: DeleteMonitorCommandOutput;
    };
  };
}
