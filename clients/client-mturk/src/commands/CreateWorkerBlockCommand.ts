// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateWorkerBlockRequest, CreateWorkerBlockResponse } from "../models/models_0";
import { CreateWorkerBlock$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateWorkerBlockCommand}.
 */
export interface CreateWorkerBlockCommandInput extends CreateWorkerBlockRequest {}
/**
 * @public
 *
 * The output of {@link CreateWorkerBlockCommand}.
 */
export interface CreateWorkerBlockCommandOutput extends CreateWorkerBlockResponse, __MetadataBearer {}

/**
 * <p>The <code>CreateWorkerBlock</code> operation allows you to prevent a Worker from working on your HITs. For example, you can block a Worker who is producing poor quality work. You can block up to 100,000 Workers.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, CreateWorkerBlockCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, CreateWorkerBlockCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * // import type { MTurkClientConfig } from "@aws-sdk/client-mturk";
 * const config = {}; // type is MTurkClientConfig
 * const client = new MTurkClient(config);
 * const input = { // CreateWorkerBlockRequest
 *   WorkerId: "STRING_VALUE", // required
 *   Reason: "STRING_VALUE", // required
 * };
 * const command = new CreateWorkerBlockCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateWorkerBlockCommandInput - {@link CreateWorkerBlockCommandInput}
 * @returns {@link CreateWorkerBlockCommandOutput}
 * @see {@link CreateWorkerBlockCommandInput} for command's `input` shape.
 * @see {@link CreateWorkerBlockCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for MTurkClient's `config` shape.
 *
 * @throws {@link RequestError} (client fault)
 *  <p>Your request is invalid.</p>
 *
 * @throws {@link ServiceFault} (server fault)
 *  <p>Amazon Mechanical Turk is temporarily unable to process your request. Try your call again.</p>
 *
 * @throws {@link MTurkServiceException}
 * <p>Base exception class for all service exceptions from MTurk service.</p>
 *
 *
 * @public
 */
export class CreateWorkerBlockCommand extends command<CreateWorkerBlockCommandInput, CreateWorkerBlockCommandOutput>(
  _ep0,
  _mw0,
  "CreateWorkerBlock",
  CreateWorkerBlock$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateWorkerBlockRequest;
      output: {};
    };
    sdk: {
      input: CreateWorkerBlockCommandInput;
      output: CreateWorkerBlockCommandOutput;
    };
  };
}
