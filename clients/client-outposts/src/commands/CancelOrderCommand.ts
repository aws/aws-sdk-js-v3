// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CancelOrderInput, CancelOrderOutput } from "../models/models_0";
import { CancelOrder$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CancelOrderCommand}.
 */
export interface CancelOrderCommandInput extends CancelOrderInput {}
/**
 * @public
 *
 * The output of {@link CancelOrderCommand}.
 */
export interface CancelOrderCommandOutput extends CancelOrderOutput, __MetadataBearer {}

/**
 * Cancels the specified order for an Outpost.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OutpostsClient, CancelOrderCommand } from "@aws-sdk/client-outposts"; // ES Modules import
 * // const { OutpostsClient, CancelOrderCommand } = require("@aws-sdk/client-outposts"); // CommonJS import
 * // import type { OutpostsClientConfig } from "@aws-sdk/client-outposts";
 * const config = {}; // type is OutpostsClientConfig
 * const client = new OutpostsClient(config);
 * const input = { // CancelOrderInput
 *   OrderId: "STRING_VALUE", // required
 * };
 * const command = new CancelOrderCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CancelOrderCommandInput - {@link CancelOrderCommandInput}
 * @returns {@link CancelOrderCommandOutput}
 * @see {@link CancelOrderCommandInput} for command's `input` shape.
 * @see {@link CancelOrderCommandOutput} for command's `response` shape.
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
export class CancelOrderCommand extends command<CancelOrderCommandInput, CancelOrderCommandOutput>(
  _ep0,
  _mw0,
  "CancelOrder",
  CancelOrder$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelOrderInput;
      output: {};
    };
    sdk: {
      input: CancelOrderCommandInput;
      output: CancelOrderCommandOutput;
    };
  };
}
