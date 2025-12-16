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
import type { CancelImportTaskRequest, CancelImportTaskResponse } from "../models/models_0";
import { CancelImportTask } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CancelImportTaskCommand}.
 */
export interface CancelImportTaskCommandInput extends CancelImportTaskRequest {}
/**
 * @public
 *
 * The output of {@link CancelImportTaskCommand}.
 */
export interface CancelImportTaskCommandOutput extends CancelImportTaskResponse, __MetadataBearer {}

/**
 * <p>Cancels an active import task and stops importing data from the CloudTrail Lake Event Data Store.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, CancelImportTaskCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, CancelImportTaskCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * // import type { CloudWatchLogsClientConfig } from "@aws-sdk/client-cloudwatch-logs";
 * const config = {}; // type is CloudWatchLogsClientConfig
 * const client = new CloudWatchLogsClient(config);
 * const input = { // CancelImportTaskRequest
 *   importId: "STRING_VALUE", // required
 * };
 * const command = new CancelImportTaskCommand(input);
 * const response = await client.send(command);
 * // { // CancelImportTaskResponse
 * //   importId: "STRING_VALUE",
 * //   importStatistics: { // ImportStatistics
 * //     bytesImported: Number("long"),
 * //   },
 * //   importStatus: "IN_PROGRESS" || "CANCELLED" || "COMPLETED" || "FAILED",
 * //   creationTime: Number("long"),
 * //   lastUpdatedTime: Number("long"),
 * // };
 *
 * ```
 *
 * @param CancelImportTaskCommandInput - {@link CancelImportTaskCommandInput}
 * @returns {@link CancelImportTaskCommandOutput}
 * @see {@link CancelImportTaskCommandInput} for command's `input` shape.
 * @see {@link CancelImportTaskCommandOutput} for command's `response` shape.
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
export class CancelImportTaskCommand extends $Command
  .classBuilder<
    CancelImportTaskCommandInput,
    CancelImportTaskCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchLogsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Logs_20140328", "CancelImportTask", {})
  .n("CloudWatchLogsClient", "CancelImportTaskCommand")
  .sc(CancelImportTask)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelImportTaskRequest;
      output: CancelImportTaskResponse;
    };
    sdk: {
      input: CancelImportTaskCommandInput;
      output: CancelImportTaskCommandOutput;
    };
  };
}
