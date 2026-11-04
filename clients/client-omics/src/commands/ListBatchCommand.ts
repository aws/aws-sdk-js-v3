// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListBatchRequest, ListBatchResponse } from "../models/models_0";
import { ListBatch$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListBatchCommand}.
 */
export interface ListBatchCommandInput extends ListBatchRequest {}
/**
 * @public
 *
 * The output of {@link ListBatchCommand}.
 */
export interface ListBatchCommandOutput extends ListBatchResponse, __MetadataBearer {}

/**
 * Returns a list of run batches in your account, with optional filtering by status, name, or run group. Results are paginated. Only one filter per call is supported.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, ListBatchCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, ListBatchCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * // import type { OmicsClientConfig } from "@aws-sdk/client-omics";
 * const config = {}; // type is OmicsClientConfig
 * const client = new OmicsClient(config);
 * const input = { // ListBatchRequest
 *   maxItems: Number("int"),
 *   startingToken: "STRING_VALUE",
 *   status: "STRING_VALUE",
 *   name: "STRING_VALUE",
 *   runGroupId: "STRING_VALUE",
 * };
 * const command = new ListBatchCommand(input);
 * const response = await client.send(command);
 * // { // ListBatchResponse
 * //   items: [ // BatchList
 * //     { // BatchListItem
 * //       id: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       status: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       totalRuns: Number("int"),
 * //       workflowId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListBatchCommandInput - {@link ListBatchCommandInput}
 * @returns {@link ListBatchCommandOutput}
 * @see {@link ListBatchCommandInput} for command's `input` shape.
 * @see {@link ListBatchCommandOutput} for command's `response` shape.
 * @see {@link OmicsClientResolvedConfig | config} for OmicsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected error occurred. Try the request again.
 *
 * @throws {@link RequestTimeoutException} (client fault)
 *
 * The request timed out.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link OmicsServiceException}
 *
 * Base exception class for all service exceptions from Omics service.
 *
 * @public
 */
export class ListBatchCommand extends command<ListBatchCommandInput, ListBatchCommandOutput>(
  _ep0,
  _mw0,
  "ListBatch",
  ListBatch$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListBatchRequest;
      output: ListBatchResponse;
    };
    sdk: {
      input: ListBatchCommandInput;
      output: ListBatchCommandOutput;
    };
  };
}
