// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DownloadDBLogFilePortionDetails, DownloadDBLogFilePortionMessage } from "../models/models_1";
import { DownloadDBLogFilePortion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DownloadDBLogFilePortionCommand}.
 */
export interface DownloadDBLogFilePortionCommandInput extends DownloadDBLogFilePortionMessage {}
/**
 * @public
 *
 * The output of {@link DownloadDBLogFilePortionCommand}.
 */
export interface DownloadDBLogFilePortionCommandOutput extends DownloadDBLogFilePortionDetails, __MetadataBearer {}

/**
 * Downloads all or a portion of the specified log file, up to 1 MB in size.
 *
 * This command doesn't apply to RDS Custom.
 *
 * > **Note:** This operation uses resources on database instances. Because of this, we recommend publishing database logs to CloudWatch and then using the GetLogEvents operation. For more information, see [GetLogEvents](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetLogEvents.html) in the *Amazon CloudWatch Logs API Reference*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DownloadDBLogFilePortionCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DownloadDBLogFilePortionCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // import type { RDSClientConfig } from "@aws-sdk/client-rds";
 * const config = {}; // type is RDSClientConfig
 * const client = new RDSClient(config);
 * const input = { // DownloadDBLogFilePortionMessage
 *   DBInstanceIdentifier: "STRING_VALUE", // required
 *   LogFileName: "STRING_VALUE", // required
 *   Marker: "STRING_VALUE",
 *   NumberOfLines: Number("int"),
 * };
 * const command = new DownloadDBLogFilePortionCommand(input);
 * const response = await client.send(command);
 * // { // DownloadDBLogFilePortionDetails
 * //   LogFileData: "STRING_VALUE",
 * //   Marker: "STRING_VALUE",
 * //   AdditionalDataPending: true || false,
 * // };
 *
 * ```
 *
 * @param DownloadDBLogFilePortionCommandInput - {@link DownloadDBLogFilePortionCommandInput}
 * @returns {@link DownloadDBLogFilePortionCommandOutput}
 * @see {@link DownloadDBLogFilePortionCommandInput} for command's `input` shape.
 * @see {@link DownloadDBLogFilePortionCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBInstanceNotFoundFault} (client fault)
 *
 * `DBInstanceIdentifier` doesn't refer to an existing DB instance.
 *
 * @throws {@link DBInstanceNotReadyFault} (client fault)
 *
 * An attempt to download or examine log files didn't succeed because an Aurora Serverless v2 instance was paused.
 *
 * @throws {@link DBLogFileNotFoundFault} (client fault)
 *
 * `LogFileName` doesn't refer to an existing DB log file.
 *
 * @throws {@link RDSServiceException}
 *
 * Base exception class for all service exceptions from RDS service.
 *
 * @example To download a DB log file
 * ```javascript
 * // The following example downloads only the latest part of your log file.
 * const input = {
 *   DBInstanceIdentifier: "test-instance",
 *   LogFileName: "log.txt"
 * };
 * const command = new DownloadDBLogFilePortionCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DownloadDBLogFilePortionCommand extends command<DownloadDBLogFilePortionCommandInput, DownloadDBLogFilePortionCommandOutput>(
  _ep0,
  _mw0,
  "DownloadDBLogFilePortion",
  DownloadDBLogFilePortion$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DownloadDBLogFilePortionMessage;
      output: DownloadDBLogFilePortionDetails;
    };
    sdk: {
      input: DownloadDBLogFilePortionCommandInput;
      output: DownloadDBLogFilePortionCommandOutput;
    };
  };
}
