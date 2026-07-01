// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateNotebookInput, CreateNotebookOutput } from "../models/models_0";
import { CreateNotebook$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateNotebookCommand}.
 */
export interface CreateNotebookCommandInput extends CreateNotebookInput {}
/**
 * @public
 *
 * The output of {@link CreateNotebookCommand}.
 */
export interface CreateNotebookCommandOutput extends CreateNotebookOutput, __MetadataBearer {}

/**
 * <p>Creates an empty <code>ipynb</code> file in the specified Apache Spark enabled
 *             workgroup. Throws an error if a file in the workgroup with the same name already
 *             exists.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, CreateNotebookCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, CreateNotebookCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * // import type { AthenaClientConfig } from "@aws-sdk/client-athena";
 * const config = {}; // type is AthenaClientConfig
 * const client = new AthenaClient(config);
 * const input = { // CreateNotebookInput
 *   WorkGroup: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   ClientRequestToken: "STRING_VALUE",
 * };
 * const command = new CreateNotebookCommand(input);
 * const response = await client.send(command);
 * // { // CreateNotebookOutput
 * //   NotebookId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateNotebookCommandInput - {@link CreateNotebookCommandInput}
 * @returns {@link CreateNotebookCommandOutput}
 * @see {@link CreateNotebookCommandInput} for command's `input` shape.
 * @see {@link CreateNotebookCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for AthenaClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Indicates a platform issue, which may be due to a transient condition or
 *             outage.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Indicates that something is wrong with the input to the request. For example, a
 *             required parameter may be missing or out of range.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Indicates that the request was throttled.</p>
 *
 * @throws {@link AthenaServiceException}
 * <p>Base exception class for all service exceptions from Athena service.</p>
 *
 *
 * @public
 */
export class CreateNotebookCommand extends command<CreateNotebookCommandInput, CreateNotebookCommandOutput>(
  _ep0,
  _mw0,
  "CreateNotebook",
  CreateNotebook$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateNotebookInput;
      output: CreateNotebookOutput;
    };
    sdk: {
      input: CreateNotebookCommandInput;
      output: CreateNotebookCommandOutput;
    };
  };
}
