// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartAnalysisLogExportInput, StartAnalysisLogExportOutput } from "../models/models_1";
import { StartAnalysisLogExport$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartAnalysisLogExportCommand}.
 */
export interface StartAnalysisLogExportCommandInput extends StartAnalysisLogExportInput {}
/**
 * @public
 *
 * The output of {@link StartAnalysisLogExportCommand}.
 */
export interface StartAnalysisLogExportCommandOutput extends StartAnalysisLogExportOutput, __MetadataBearer {}

/**
 * <p>Starts an export of the Apache Spark logs for a protected query to an Amazon S3 bucket that you own. Use the exported logs to diagnose a query that failed or that ran more slowly than you expected.</p> <p>Clean Rooms exports a redacted copy of the Spark logs instead of the raw logs. Analyze the exported logs with the tooling of your choice, such as Spark History Server. For details about what the exported logs contain, see <a href="https://docs.aws.amazon.com/clean-rooms/latest/userguide/export-analysis-logs-contents.html">https://docs.aws.amazon.com/clean-rooms/latest/userguide/export-analysis-logs-contents.html</a>.</p> <p>The export runs asynchronously and returns with a <code>status</code> of <code>IN_PROGRESS</code>. Call <code>GetAnalysisLogExport</code> to poll for the final status.</p> <important> <p>To use this operation, you must have the <code>CAN_EXPORT_QUERY_ANALYSIS_LOG</code> ability for your membership. You must also be the query runner or the query payer. Having the ability alone is not sufficient.</p> <p>The query must have reached a terminal state, and it must have reached the execution stage. A query that failed validation or that was canceled before it started produces no Spark logs.</p> <p>Log export isn't supported for queries that use differential privacy, and isn't supported for PySpark jobs.</p> <p>The destination bucket must be in the same Amazon Web Services Region as the collaboration. Cross-Region export isn't supported.</p> </important> <p>For more information, see <a href="https://docs.aws.amazon.com/clean-rooms/latest/userguide/export-analysis-logs.html">https://docs.aws.amazon.com/clean-rooms/latest/userguide/export-analysis-logs.html</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, StartAnalysisLogExportCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, StartAnalysisLogExportCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * // import type { CleanRoomsClientConfig } from "@aws-sdk/client-cleanrooms";
 * const config = {}; // type is CleanRoomsClientConfig
 * const client = new CleanRoomsClient(config);
 * const input = { // StartAnalysisLogExportInput
 *   membershipIdentifier: "STRING_VALUE", // required
 *   analysisId: "STRING_VALUE", // required
 *   analysisType: "PROTECTED_QUERY", // required
 *   resultConfiguration: { // AnalysisLogExportResultConfiguration
 *     outputConfiguration: { // AnalysisLogExportOutputConfiguration
 *       s3: { // AnalysisLogExportS3OutputConfiguration
 *         bucket: "STRING_VALUE", // required
 *         keyPrefix: "STRING_VALUE",
 *       },
 *     },
 *   },
 * };
 * const command = new StartAnalysisLogExportCommand(input);
 * const response = await client.send(command);
 * // { // StartAnalysisLogExportOutput
 * //   analysisLogExport: { // AnalysisLogExport
 * //     analysisLogExportId: "STRING_VALUE", // required
 * //     analysisId: "STRING_VALUE", // required
 * //     analysisType: "PROTECTED_QUERY", // required
 * //     membershipId: "STRING_VALUE", // required
 * //     status: "IN_PROGRESS" || "SUCCESS" || "FAILED", // required
 * //     resultConfiguration: { // AnalysisLogExportResultConfiguration
 * //       outputConfiguration: { // AnalysisLogExportOutputConfiguration
 * //         s3: { // AnalysisLogExportS3OutputConfiguration
 * //           bucket: "STRING_VALUE", // required
 * //           keyPrefix: "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //     createTime: new Date("TIMESTAMP"), // required
 * //     updateTime: new Date("TIMESTAMP"), // required
 * //     error: { // AnalysisLogExportError
 * //       code: "STRING_VALUE", // required
 * //       message: "STRING_VALUE", // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param StartAnalysisLogExportCommandInput - {@link StartAnalysisLogExportCommandInput}
 * @returns {@link StartAnalysisLogExportCommandOutput}
 * @see {@link StartAnalysisLogExportCommandInput} for command's `input` shape.
 * @see {@link StartAnalysisLogExportCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsClientResolvedConfig | config} for CleanRoomsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Caller does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource which does not exist.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Request denied because service quota has been exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the specified constraints.</p>
 *
 * @throws {@link CleanRoomsServiceException}
 * <p>Base exception class for all service exceptions from CleanRooms service.</p>
 *
 *
 * @public
 */
export class StartAnalysisLogExportCommand extends command<StartAnalysisLogExportCommandInput, StartAnalysisLogExportCommandOutput>(
  _ep0,
  _mw0,
  "StartAnalysisLogExport",
  StartAnalysisLogExport$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartAnalysisLogExportInput;
      output: StartAnalysisLogExportOutput;
    };
    sdk: {
      input: StartAnalysisLogExportCommandInput;
      output: StartAnalysisLogExportCommandOutput;
    };
  };
}
