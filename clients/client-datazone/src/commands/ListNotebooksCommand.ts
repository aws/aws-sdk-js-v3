// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListNotebooksInput, ListNotebooksOutput } from "../models/models_1";
import { ListNotebooks$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListNotebooksCommand}.
 */
export interface ListNotebooksCommandInput extends ListNotebooksInput {}
/**
 * @public
 *
 * The output of {@link ListNotebooksCommand}.
 */
export interface ListNotebooksCommandOutput extends ListNotebooksOutput, __MetadataBearer {}

/**
 * <p>Lists <a href="https://docs.aws.amazon.com/sagemaker-unified-studio/latest/userguide/notebooks.html">notebooks</a> in Amazon SageMaker Unified Studio.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, ListNotebooksCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, ListNotebooksCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // ListNotebooksInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   owningProjectIdentifier: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   sortOrder: "ASCENDING" || "DESCENDING",
 *   sortBy: "CREATED_AT" || "UPDATED_AT",
 *   status: "ACTIVE" || "ARCHIVED",
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListNotebooksCommand(input);
 * const response = await client.send(command);
 * // { // ListNotebooksOutput
 * //   items: [ // NotebookSummaryList
 * //     { // NotebookSummary
 * //       id: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       owningProjectId: "STRING_VALUE", // required
 * //       domainId: "STRING_VALUE", // required
 * //       status: "ACTIVE" || "ARCHIVED", // required
 * //       description: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       createdBy: "STRING_VALUE",
 * //       updatedAt: new Date("TIMESTAMP"),
 * //       updatedBy: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListNotebooksCommandInput - {@link ListNotebooksCommandInput}
 * @returns {@link ListNotebooksCommandOutput}
 * @see {@link ListNotebooksCommandInput} for command's `input` shape.
 * @see {@link ListNotebooksCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the Amazon Web Services service.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You do not have permission to perform this action.</p>
 *
 * @throws {@link DataZoneServiceException}
 * <p>Base exception class for all service exceptions from DataZone service.</p>
 *
 *
 * @public
 */
export class ListNotebooksCommand extends command<ListNotebooksCommandInput, ListNotebooksCommandOutput>(
  _ep0,
  _mw0,
  "ListNotebooks",
  ListNotebooks$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListNotebooksInput;
      output: ListNotebooksOutput;
    };
    sdk: {
      input: ListNotebooksCommandInput;
      output: ListNotebooksCommandOutput;
    };
  };
}
