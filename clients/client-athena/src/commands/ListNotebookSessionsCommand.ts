// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListNotebookSessionsRequest, ListNotebookSessionsResponse } from "../models/models_0";
import { ListNotebookSessions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListNotebookSessionsCommand}.
 */
export interface ListNotebookSessionsCommandInput extends ListNotebookSessionsRequest {}
/**
 * @public
 *
 * The output of {@link ListNotebookSessionsCommand}.
 */
export interface ListNotebookSessionsCommandOutput extends ListNotebookSessionsResponse, __MetadataBearer {}

/**
 * Lists, in descending order, the sessions that have been created in a notebook that are in an active state like `CREATING`, `CREATED`, `IDLE` or `BUSY`. Newer sessions are listed first; older sessions are listed later.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, ListNotebookSessionsCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, ListNotebookSessionsCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * // import type { AthenaClientConfig } from "@aws-sdk/client-athena";
 * const config = {}; // type is AthenaClientConfig
 * const client = new AthenaClient(config);
 * const input = { // ListNotebookSessionsRequest
 *   NotebookId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListNotebookSessionsCommand(input);
 * const response = await client.send(command);
 * // { // ListNotebookSessionsResponse
 * //   NotebookSessionsList: [ // NotebookSessionsList // required
 * //     { // NotebookSessionSummary
 * //       SessionId: "STRING_VALUE",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListNotebookSessionsCommandInput - {@link ListNotebookSessionsCommandInput}
 * @returns {@link ListNotebookSessionsCommandOutput}
 * @see {@link ListNotebookSessionsCommandInput} for command's `input` shape.
 * @see {@link ListNotebookSessionsCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * A resource, such as a workgroup, was not found.
 *
 * @throws {@link AthenaServiceException}
 *
 * Base exception class for all service exceptions from Athena service.
 *
 * @public
 */
export class ListNotebookSessionsCommand extends command<ListNotebookSessionsCommandInput, ListNotebookSessionsCommandOutput>(
  _ep0,
  _mw0,
  "ListNotebookSessions",
  ListNotebookSessions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListNotebookSessionsRequest;
      output: ListNotebookSessionsResponse;
    };
    sdk: {
      input: ListNotebookSessionsCommandInput;
      output: ListNotebookSessionsCommandOutput;
    };
  };
}
