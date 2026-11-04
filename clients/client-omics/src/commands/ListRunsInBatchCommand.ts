// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListRunsInBatchRequest, ListRunsInBatchResponse } from "../models/models_0";
import { ListRunsInBatch$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListRunsInBatchCommand}.
 */
export interface ListRunsInBatchCommandInput extends ListRunsInBatchRequest {}
/**
 * @public
 *
 * The output of {@link ListRunsInBatchCommand}.
 */
export interface ListRunsInBatchCommandOutput extends ListRunsInBatchResponse, __MetadataBearer {}

/**
 * Returns a paginated list of individual workflow runs within a specific batch. Use this operation to map each `runSettingId` to its HealthOmics-generated `runId`, and to check the submission status of each run. Only one filter per call is supported.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, ListRunsInBatchCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, ListRunsInBatchCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * // import type { OmicsClientConfig } from "@aws-sdk/client-omics";
 * const config = {}; // type is OmicsClientConfig
 * const client = new OmicsClient(config);
 * const input = { // ListRunsInBatchRequest
 *   batchId: "STRING_VALUE", // required
 *   maxItems: Number("int"),
 *   startingToken: "STRING_VALUE",
 *   submissionStatus: "STRING_VALUE",
 *   runSettingId: "STRING_VALUE",
 *   runId: "STRING_VALUE",
 * };
 * const command = new ListRunsInBatchCommand(input);
 * const response = await client.send(command);
 * // { // ListRunsInBatchResponse
 * //   runs: [ // RunBatchList
 * //     { // RunBatchListItem
 * //       runSettingId: "STRING_VALUE",
 * //       runId: "STRING_VALUE",
 * //       runInternalUuid: "STRING_VALUE",
 * //       runArn: "STRING_VALUE",
 * //       submissionStatus: "STRING_VALUE",
 * //       submissionFailureReason: "STRING_VALUE",
 * //       submissionFailureMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRunsInBatchCommandInput - {@link ListRunsInBatchCommandInput}
 * @returns {@link ListRunsInBatchCommandOutput}
 * @see {@link ListRunsInBatchCommandInput} for command's `input` shape.
 * @see {@link ListRunsInBatchCommandOutput} for command's `response` shape.
 * @see {@link OmicsClientResolvedConfig | config} for OmicsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request cannot be applied to the target resource in its current state.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request exceeds a service quota.
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
export class ListRunsInBatchCommand extends command<ListRunsInBatchCommandInput, ListRunsInBatchCommandOutput>(
  _ep0,
  _mw0,
  "ListRunsInBatch",
  ListRunsInBatch$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRunsInBatchRequest;
      output: ListRunsInBatchResponse;
    };
    sdk: {
      input: ListRunsInBatchCommandInput;
      output: ListRunsInBatchCommandOutput;
    };
  };
}
