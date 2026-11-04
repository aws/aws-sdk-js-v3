// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeImportTaskBatchesRequest, DescribeImportTaskBatchesResponse } from "../models/models_0";
import { DescribeImportTaskBatches$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeImportTaskBatchesCommand}.
 */
export interface DescribeImportTaskBatchesCommandInput extends DescribeImportTaskBatchesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeImportTaskBatchesCommand}.
 */
export interface DescribeImportTaskBatchesCommandOutput extends DescribeImportTaskBatchesResponse, __MetadataBearer {}

/**
 * Gets detailed information about the individual batches within an import task, including their status and any error messages. For CloudTrail Event Data Store sources, a batch refers to a subset of stored events grouped by their eventTime.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, DescribeImportTaskBatchesCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, DescribeImportTaskBatchesCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * // import type { CloudWatchLogsClientConfig } from "@aws-sdk/client-cloudwatch-logs";
 * const config = {}; // type is CloudWatchLogsClientConfig
 * const client = new CloudWatchLogsClient(config);
 * const input = { // DescribeImportTaskBatchesRequest
 *   importId: "STRING_VALUE", // required
 *   batchImportStatus: [ // ImportStatusList
 *     "IN_PROGRESS" || "CANCELLED" || "COMPLETED" || "FAILED",
 *   ],
 *   limit: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new DescribeImportTaskBatchesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeImportTaskBatchesResponse
 * //   importSourceArn: "STRING_VALUE",
 * //   importId: "STRING_VALUE",
 * //   importBatches: [ // ImportBatchList
 * //     { // ImportBatch
 * //       batchId: "STRING_VALUE", // required
 * //       status: "IN_PROGRESS" || "CANCELLED" || "COMPLETED" || "FAILED", // required
 * //       errorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeImportTaskBatchesCommandInput - {@link DescribeImportTaskBatchesCommandInput}
 * @returns {@link DescribeImportTaskBatchesCommandOutput}
 * @see {@link DescribeImportTaskBatchesCommandInput} for command's `input` shape.
 * @see {@link DescribeImportTaskBatchesCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have sufficient permissions to perform this action.
 *
 * @throws {@link InvalidOperationException} (client fault)
 *
 * The operation is not valid on the specified resource.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * A parameter is specified incorrectly.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was throttled because of quota limits.
 *
 * @throws {@link CloudWatchLogsServiceException}
 *
 * Base exception class for all service exceptions from CloudWatchLogs service.
 *
 * @public
 */
export class DescribeImportTaskBatchesCommand extends command<DescribeImportTaskBatchesCommandInput, DescribeImportTaskBatchesCommandOutput>(
  _ep0,
  _mw0,
  "DescribeImportTaskBatches",
  DescribeImportTaskBatches$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeImportTaskBatchesRequest;
      output: DescribeImportTaskBatchesResponse;
    };
    sdk: {
      input: DescribeImportTaskBatchesCommandInput;
      output: DescribeImportTaskBatchesCommandOutput;
    };
  };
}
