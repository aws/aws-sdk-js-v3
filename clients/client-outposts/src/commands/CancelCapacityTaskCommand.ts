// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CancelCapacityTaskInput, CancelCapacityTaskOutput } from "../models/models_0";
import { CancelCapacityTask$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CancelCapacityTaskCommand}.
 */
export interface CancelCapacityTaskCommandInput extends CancelCapacityTaskInput {}
/**
 * @public
 *
 * The output of {@link CancelCapacityTaskCommand}.
 */
export interface CancelCapacityTaskCommandOutput extends CancelCapacityTaskOutput, __MetadataBearer {}

/**
 * Cancels the capacity task.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OutpostsClient, CancelCapacityTaskCommand } from "@aws-sdk/client-outposts"; // ES Modules import
 * // const { OutpostsClient, CancelCapacityTaskCommand } = require("@aws-sdk/client-outposts"); // CommonJS import
 * // import type { OutpostsClientConfig } from "@aws-sdk/client-outposts";
 * const config = {}; // type is OutpostsClientConfig
 * const client = new OutpostsClient(config);
 * const input = { // CancelCapacityTaskInput
 *   CapacityTaskId: "STRING_VALUE", // required
 *   OutpostIdentifier: "STRING_VALUE", // required
 * };
 * const command = new CancelCapacityTaskCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CancelCapacityTaskCommandInput - {@link CancelCapacityTaskCommandInput}
 * @returns {@link CancelCapacityTaskCommandOutput}
 * @see {@link CancelCapacityTaskCommandInput} for command's `input` shape.
 * @see {@link CancelCapacityTaskCommandOutput} for command's `response` shape.
 * @see {@link OutpostsClientResolvedConfig | config} for OutpostsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have permission to perform this operation.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Updating or deleting this resource can cause an inconsistent state.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal error has occurred.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * The specified request is not valid.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * A parameter is not valid.
 *
 * @throws {@link OutpostsServiceException}
 *
 * Base exception class for all service exceptions from Outposts service.
 *
 * @public
 */
export class CancelCapacityTaskCommand extends command<CancelCapacityTaskCommandInput, CancelCapacityTaskCommandOutput>(
  _ep0,
  _mw0,
  "CancelCapacityTask",
  CancelCapacityTask$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelCapacityTaskInput;
      output: {};
    };
    sdk: {
      input: CancelCapacityTaskCommandInput;
      output: CancelCapacityTaskCommandOutput;
    };
  };
}
