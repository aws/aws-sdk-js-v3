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
 * Starts an export of the Apache Spark logs for a protected query to an Amazon S3 bucket that you own. Use the exported logs to diagnose a query that failed or that ran more slowly than you expected.
 *
 * Clean Rooms exports a redacted copy of the Spark logs instead of the raw logs. Analyze the exported logs with the tooling of your choice, such as Spark History Server. For details about what the exported logs contain, see [https://docs.aws.amazon.com/clean-rooms/latest/userguide/export-analysis-logs-contents.html](https://docs.aws.amazon.com/clean-rooms/latest/userguide/export-analysis-logs-contents.html).
 *
 * The export runs asynchronously and returns with a `status` of `IN_PROGRESS`. Call `GetAnalysisLogExport` to poll for the final status.
 *
 * > **Important:**
 * >
 * > To use this operation, you must have the `CAN_EXPORT_QUERY_ANALYSIS_LOG` ability for your membership. You must also be the query runner or the query payer. Having the ability alone is not sufficient.
 * >
 * > The query must have reached a terminal state, and it must have reached the execution stage. A query that failed validation or that was canceled before it started produces no Spark logs.
 * >
 * > Log export isn't supported for queries that use differential privacy, and isn't supported for PySpark jobs.
 * >
 * > The destination bucket must be in the same Amazon Web Services Region as the collaboration. Cross-Region export isn't supported.
 *
 * For more information, see [https://docs.aws.amazon.com/clean-rooms/latest/userguide/export-analysis-logs.html](https://docs.aws.amazon.com/clean-rooms/latest/userguide/export-analysis-logs.html).
 *
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
 *
 * Caller does not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Unexpected error during processing of request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Request references a resource which does not exist.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * Request denied because service quota has been exceeded.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the specified constraints.
 *
 * @throws {@link CleanRoomsServiceException}
 *
 * Base exception class for all service exceptions from CleanRooms service.
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
