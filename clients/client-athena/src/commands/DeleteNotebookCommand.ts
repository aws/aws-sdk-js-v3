// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteNotebookInput, DeleteNotebookOutput } from "../models/models_0";
import { DeleteNotebook$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteNotebookCommand}.
 */
export interface DeleteNotebookCommandInput extends DeleteNotebookInput {}
/**
 * @public
 *
 * The output of {@link DeleteNotebookCommand}.
 */
export interface DeleteNotebookCommandOutput extends DeleteNotebookOutput, __MetadataBearer {}

/**
 * Deletes the specified notebook.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, DeleteNotebookCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, DeleteNotebookCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * // import type { AthenaClientConfig } from "@aws-sdk/client-athena";
 * const config = {}; // type is AthenaClientConfig
 * const client = new AthenaClient(config);
 * const input = { // DeleteNotebookInput
 *   NotebookId: "STRING_VALUE", // required
 * };
 * const command = new DeleteNotebookCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteNotebookCommandInput - {@link DeleteNotebookCommandInput}
 * @returns {@link DeleteNotebookCommandOutput}
 * @see {@link DeleteNotebookCommandInput} for command's `input` shape.
 * @see {@link DeleteNotebookCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for AthenaClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Indicates a platform issue, which may be due to a transient condition or outage.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * Indicates that something is wrong with the input to the request. For example, a required parameter may be missing or out of range.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * Indicates that the request was throttled.
 *
 * @throws {@link AthenaServiceException}
 *
 * Base exception class for all service exceptions from Athena service.
 *
 * @public
 */
export class DeleteNotebookCommand extends command<DeleteNotebookCommandInput, DeleteNotebookCommandOutput>(
  _ep0,
  _mw0,
  "DeleteNotebook",
  DeleteNotebook$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteNotebookInput;
      output: {};
    };
    sdk: {
      input: DeleteNotebookCommandInput;
      output: DeleteNotebookCommandOutput;
    };
  };
}
