// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ImportNotebookInput, ImportNotebookOutput } from "../models/models_0";
import { ImportNotebook$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ImportNotebookCommand}.
 */
export interface ImportNotebookCommandInput extends ImportNotebookInput {}
/**
 * @public
 *
 * The output of {@link ImportNotebookCommand}.
 */
export interface ImportNotebookCommandOutput extends ImportNotebookOutput, __MetadataBearer {}

/**
 * Imports a single `ipynb` file to a Spark enabled workgroup. To import the notebook, the request must specify a value for either `Payload` or `NoteBookS3LocationUri`. If neither is specified or both are specified, an `InvalidRequestException` occurs. The maximum file size that can be imported is 10 megabytes. If an `ipynb` file with the same name already exists in the workgroup, throws an error.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, ImportNotebookCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, ImportNotebookCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * // import type { AthenaClientConfig } from "@aws-sdk/client-athena";
 * const config = {}; // type is AthenaClientConfig
 * const client = new AthenaClient(config);
 * const input = { // ImportNotebookInput
 *   WorkGroup: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   Payload: "STRING_VALUE",
 *   Type: "IPYNB", // required
 *   NotebookS3LocationUri: "STRING_VALUE",
 *   ClientRequestToken: "STRING_VALUE",
 * };
 * const command = new ImportNotebookCommand(input);
 * const response = await client.send(command);
 * // { // ImportNotebookOutput
 * //   NotebookId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ImportNotebookCommandInput - {@link ImportNotebookCommandInput}
 * @returns {@link ImportNotebookCommandOutput}
 * @see {@link ImportNotebookCommandInput} for command's `input` shape.
 * @see {@link ImportNotebookCommandOutput} for command's `response` shape.
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
export class ImportNotebookCommand extends command<ImportNotebookCommandInput, ImportNotebookCommandOutput>(
  _ep0,
  _mw0,
  "ImportNotebook",
  ImportNotebook$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ImportNotebookInput;
      output: ImportNotebookOutput;
    };
    sdk: {
      input: ImportNotebookCommandInput;
      output: ImportNotebookCommandOutput;
    };
  };
}
