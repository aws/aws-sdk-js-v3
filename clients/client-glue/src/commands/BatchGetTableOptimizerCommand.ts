// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { BatchGetTableOptimizerRequest, BatchGetTableOptimizerResponse } from "../models/models_0";
import { de_BatchGetTableOptimizerCommand, se_BatchGetTableOptimizerCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchGetTableOptimizerCommand}.
 */
export interface BatchGetTableOptimizerCommandInput extends BatchGetTableOptimizerRequest {}
/**
 * @public
 *
 * The output of {@link BatchGetTableOptimizerCommand}.
 */
export interface BatchGetTableOptimizerCommandOutput extends BatchGetTableOptimizerResponse, __MetadataBearer {}

/**
 * <p>Returns the configuration for the specified table optimizers.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, BatchGetTableOptimizerCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, BatchGetTableOptimizerCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // BatchGetTableOptimizerRequest
 *   Entries: [ // BatchGetTableOptimizerEntries // required
 *     { // BatchGetTableOptimizerEntry
 *       catalogId: "STRING_VALUE",
 *       databaseName: "STRING_VALUE",
 *       tableName: "STRING_VALUE",
 *       type: "compaction",
 *     },
 *   ],
 * };
 * const command = new BatchGetTableOptimizerCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetTableOptimizerResponse
 * //   TableOptimizers: [ // BatchTableOptimizers
 * //     { // BatchTableOptimizer
 * //       catalogId: "STRING_VALUE",
 * //       databaseName: "STRING_VALUE",
 * //       tableName: "STRING_VALUE",
 * //       tableOptimizer: { // TableOptimizer
 * //         type: "compaction",
 * //         configuration: { // TableOptimizerConfiguration
 * //           roleArn: "STRING_VALUE",
 * //           enabled: true || false,
 * //         },
 * //         lastRun: { // TableOptimizerRun
 * //           eventType: "starting" || "completed" || "failed" || "in_progress",
 * //           startTimestamp: new Date("TIMESTAMP"),
 * //           endTimestamp: new Date("TIMESTAMP"),
 * //           metrics: { // RunMetrics
 * //             NumberOfBytesCompacted: "STRING_VALUE",
 * //             NumberOfFilesCompacted: "STRING_VALUE",
 * //             NumberOfDpus: "STRING_VALUE",
 * //             JobDurationInHour: "STRING_VALUE",
 * //           },
 * //           error: "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   Failures: [ // BatchGetTableOptimizerErrors
 * //     { // BatchGetTableOptimizerError
 * //       error: { // ErrorDetail
 * //         ErrorCode: "STRING_VALUE",
 * //         ErrorMessage: "STRING_VALUE",
 * //       },
 * //       catalogId: "STRING_VALUE",
 * //       databaseName: "STRING_VALUE",
 * //       tableName: "STRING_VALUE",
 * //       type: "compaction",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetTableOptimizerCommandInput - {@link BatchGetTableOptimizerCommandInput}
 * @returns {@link BatchGetTableOptimizerCommandOutput}
 * @see {@link BatchGetTableOptimizerCommandInput} for command's `input` shape.
 * @see {@link BatchGetTableOptimizerCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 * @public
 */
export class BatchGetTableOptimizerCommand extends $Command
  .classBuilder<
    BatchGetTableOptimizerCommandInput,
    BatchGetTableOptimizerCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGlue", "BatchGetTableOptimizer", {})
  .n("GlueClient", "BatchGetTableOptimizerCommand")
  .f(void 0, void 0)
  .ser(se_BatchGetTableOptimizerCommand)
  .de(de_BatchGetTableOptimizerCommand)
  .build() {}
