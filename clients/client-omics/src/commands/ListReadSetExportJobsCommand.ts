// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListReadSetExportJobsRequest, ListReadSetExportJobsResponse } from "../models/models_0";
import { ListReadSetExportJobs$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListReadSetExportJobsCommand}.
 */
export interface ListReadSetExportJobsCommandInput extends ListReadSetExportJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListReadSetExportJobsCommand}.
 */
export interface ListReadSetExportJobsCommandOutput extends ListReadSetExportJobsResponse, __MetadataBearer {}

/**
 * Retrieves a list of read set export jobs in a JSON formatted response. This API operation is used to check the status of a read set export job initiated by the `StartReadSetExportJob` API operation.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, ListReadSetExportJobsCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, ListReadSetExportJobsCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * // import type { OmicsClientConfig } from "@aws-sdk/client-omics";
 * const config = {}; // type is OmicsClientConfig
 * const client = new OmicsClient(config);
 * const input = { // ListReadSetExportJobsRequest
 *   sequenceStoreId: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   filter: { // ExportReadSetFilter
 *     status: "STRING_VALUE",
 *     createdAfter: new Date("TIMESTAMP"),
 *     createdBefore: new Date("TIMESTAMP"),
 *   },
 * };
 * const command = new ListReadSetExportJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListReadSetExportJobsResponse
 * //   nextToken: "STRING_VALUE",
 * //   exportJobs: [ // ExportReadSetJobDetailList
 * //     { // ExportReadSetJobDetail
 * //       id: "STRING_VALUE", // required
 * //       sequenceStoreId: "STRING_VALUE", // required
 * //       destination: "STRING_VALUE", // required
 * //       status: "STRING_VALUE", // required
 * //       creationTime: new Date("TIMESTAMP"), // required
 * //       completionTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListReadSetExportJobsCommandInput - {@link ListReadSetExportJobsCommandInput}
 * @returns {@link ListReadSetExportJobsCommandOutput}
 * @see {@link ListReadSetExportJobsCommandInput} for command's `input` shape.
 * @see {@link ListReadSetExportJobsCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The target resource was not found in the current Region.
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
export class ListReadSetExportJobsCommand extends command<ListReadSetExportJobsCommandInput, ListReadSetExportJobsCommandOutput>(
  _ep0,
  _mw0,
  "ListReadSetExportJobs",
  ListReadSetExportJobs$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListReadSetExportJobsRequest;
      output: ListReadSetExportJobsResponse;
    };
    sdk: {
      input: ListReadSetExportJobsCommandInput;
      output: ListReadSetExportJobsCommandOutput;
    };
  };
}
