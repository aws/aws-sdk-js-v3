// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteQuoteInput, DeleteQuoteOutput } from "../models/models_0";
import { DeleteQuote$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteQuoteCommand}.
 */
export interface DeleteQuoteCommandInput extends DeleteQuoteInput {}
/**
 * @public
 *
 * The output of {@link DeleteQuoteCommand}.
 */
export interface DeleteQuoteCommandOutput extends DeleteQuoteOutput, __MetadataBearer {}

/**
 * <p>Deletes the specified quote.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OutpostsClient, DeleteQuoteCommand } from "@aws-sdk/client-outposts"; // ES Modules import
 * // const { OutpostsClient, DeleteQuoteCommand } = require("@aws-sdk/client-outposts"); // CommonJS import
 * // import type { OutpostsClientConfig } from "@aws-sdk/client-outposts";
 * const config = {}; // type is OutpostsClientConfig
 * const client = new OutpostsClient(config);
 * const input = { // DeleteQuoteInput
 *   QuoteIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteQuoteCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteQuoteCommandInput - {@link DeleteQuoteCommandInput}
 * @returns {@link DeleteQuoteCommandOutput}
 * @see {@link DeleteQuoteCommandInput} for command's `input` shape.
 * @see {@link DeleteQuoteCommandOutput} for command's `response` shape.
 * @see {@link OutpostsClientResolvedConfig | config} for OutpostsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have permission to perform this operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error has occurred.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The specified request is not valid.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A parameter is not valid.</p>
 *
 * @throws {@link OutpostsServiceException}
 * <p>Base exception class for all service exceptions from Outposts service.</p>
 *
 *
 * @public
 */
export class DeleteQuoteCommand extends command<DeleteQuoteCommandInput, DeleteQuoteCommandOutput>(
  _ep0,
  _mw0,
  "DeleteQuote",
  DeleteQuote$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteQuoteInput;
      output: {};
    };
    sdk: {
      input: DeleteQuoteCommandInput;
      output: DeleteQuoteCommandOutput;
    };
  };
}
