// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DownloadDBLogFilePortionDetails, DownloadDBLogFilePortionMessage } from "../models/models_1";
import { de_DownloadDBLogFilePortionCommand, se_DownloadDBLogFilePortionCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Downloads all or a portion of the specified log file, up to 1 MB in size.</p>
 *          <p>This command doesn't apply to RDS Custom.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DownloadDBLogFilePortionCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DownloadDBLogFilePortionCommand } = require("@aws-sdk/client-rds"); // CommonJS import
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
 *  <p>
 *             <code>DBInstanceIdentifier</code> doesn't refer to an existing DB instance.</p>
 *
 * @throws {@link DBInstanceNotReadyFault} (server fault)
 *  <p>An attempt to download or examine log files didn't succeed because an Aurora Serverless v2 instance was paused.</p>
 *
 * @throws {@link DBLogFileNotFoundFault} (client fault)
 *  <p>
 *             <code>LogFileName</code> doesn't refer to an existing DB log file.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
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
export class DownloadDBLogFilePortionCommand extends $Command
  .classBuilder<
    DownloadDBLogFilePortionCommandInput,
    DownloadDBLogFilePortionCommandOutput,
    RDSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RDSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonRDSv19", "DownloadDBLogFilePortion", {})
  .n("RDSClient", "DownloadDBLogFilePortionCommand")
  .f(void 0, void 0)
  .ser(se_DownloadDBLogFilePortionCommand)
  .de(de_DownloadDBLogFilePortionCommand)
  .build() {
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
