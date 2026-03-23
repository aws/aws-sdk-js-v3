// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListRunsInBatchRequest, ListRunsInBatchResponse } from "../models/models_0";
import type { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import { ListRunsInBatch$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Returns a paginated list of individual workflow runs within a specific batch. Use this operation to map each <code>runSettingId</code> to its HealthOmics-generated <code>runId</code>, and to check the submission status of each run. Only one filter per call is supported.</p>
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
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request cannot be applied to the target resource in its current state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred. Try the request again.</p>
 *
 * @throws {@link RequestTimeoutException} (client fault)
 *  <p>The request timed out.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The target resource was not found in the current Region.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request exceeds a service quota.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link OmicsServiceException}
 * <p>Base exception class for all service exceptions from Omics service.</p>
 *
 *
 * @public
 */
export class ListRunsInBatchCommand extends $Command
  .classBuilder<
    ListRunsInBatchCommandInput,
    ListRunsInBatchCommandOutput,
    OmicsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OmicsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Omics", "ListRunsInBatch", {})
  .n("OmicsClient", "ListRunsInBatchCommand")
  .sc(ListRunsInBatch$)
  .build() {
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
