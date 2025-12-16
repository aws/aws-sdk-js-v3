// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  CloudWatchLogsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudWatchLogsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeImportTaskBatchesRequest, DescribeImportTaskBatchesResponse } from "../models/models_0";
import { DescribeImportTaskBatches$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Gets detailed information about the individual batches within an import task, including their status and any error messages.
 *       For CloudTrail Event Data Store sources, a batch refers to a subset of stored events grouped by their eventTime. </p>
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
 *  <p>You don't have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InvalidOperationException} (client fault)
 *  <p>The operation is not valid on the specified resource.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter is specified incorrectly.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled because of quota limits.</p>
 *
 * @throws {@link CloudWatchLogsServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchLogs service.</p>
 *
 *
 * @public
 */
export class DescribeImportTaskBatchesCommand extends $Command
  .classBuilder<
    DescribeImportTaskBatchesCommandInput,
    DescribeImportTaskBatchesCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchLogsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Logs_20140328", "DescribeImportTaskBatches", {})
  .n("CloudWatchLogsClient", "DescribeImportTaskBatchesCommand")
  .sc(DescribeImportTaskBatches$)
  .build() {
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
