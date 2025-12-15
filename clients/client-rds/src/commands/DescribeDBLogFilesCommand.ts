// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeDBLogFilesMessage, DescribeDBLogFilesResponse } from "../models/models_0";
import type { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DescribeDBLogFiles$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeDBLogFilesCommand}.
 */
export interface DescribeDBLogFilesCommandInput extends DescribeDBLogFilesMessage {}
/**
 * @public
 *
 * The output of {@link DescribeDBLogFilesCommand}.
 */
export interface DescribeDBLogFilesCommandOutput extends DescribeDBLogFilesResponse, __MetadataBearer {}

/**
 * <p>Returns a list of DB log files for the DB instance.</p>
 *          <p>This command doesn't apply to RDS Custom.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeDBLogFilesCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeDBLogFilesCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // import type { RDSClientConfig } from "@aws-sdk/client-rds";
 * const config = {}; // type is RDSClientConfig
 * const client = new RDSClient(config);
 * const input = { // DescribeDBLogFilesMessage
 *   DBInstanceIdentifier: "STRING_VALUE", // required
 *   FilenameContains: "STRING_VALUE",
 *   FileLastWritten: Number("long"),
 *   FileSize: Number("long"),
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE", // required
 *       Values: [ // FilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new DescribeDBLogFilesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDBLogFilesResponse
 * //   DescribeDBLogFiles: [ // DescribeDBLogFilesList
 * //     { // DescribeDBLogFilesDetails
 * //       LogFileName: "STRING_VALUE",
 * //       LastWritten: Number("long"),
 * //       Size: Number("long"),
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeDBLogFilesCommandInput - {@link DescribeDBLogFilesCommandInput}
 * @returns {@link DescribeDBLogFilesCommandOutput}
 * @see {@link DescribeDBLogFilesCommandInput} for command's `input` shape.
 * @see {@link DescribeDBLogFilesCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBInstanceNotFoundFault} (client fault)
 *  <p>
 *             <code>DBInstanceIdentifier</code> doesn't refer to an existing DB instance.</p>
 *
 * @throws {@link DBInstanceNotReadyFault} (client fault)
 *  <p>An attempt to download or examine log files didn't succeed because an Aurora Serverless v2 instance was paused.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 *
 * @example To describe the log files for a DB instance
 * ```javascript
 * // The following example retrieves details about the log files for the specified DB instance.
 * const input = {
 *   DBInstanceIdentifier: "test-instance"
 * };
 * const command = new DescribeDBLogFilesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   DescribeDBLogFiles: [
 *     {
 *       LastWritten: 1533060000000,
 *       LogFileName: "error/mysql-error-running.log",
 *       Size: 0
 *     },
 *     {
 *       LastWritten: 1532994300000,
 *       LogFileName: "error/mysql-error-running.log.0",
 *       Size: 2683
 *     },
 *     {
 *       LastWritten: 1533057300000,
 *       LogFileName: "error/mysql-error-running.log.18",
 *       Size: 107
 *     },
 *     {
 *       LastWritten: 1532991000000,
 *       LogFileName: "error/mysql-error-running.log.23",
 *       Size: 13105
 *     },
 *     {
 *       LastWritten: 1533061200000,
 *       LogFileName: "error/mysql-error.log",
 *       Size: 0
 *     },
 *     {
 *       LastWritten: 1532989252000,
 *       LogFileName: "mysqlUpgrade",
 *       Size: 3519
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeDBLogFilesCommand extends $Command
  .classBuilder<
    DescribeDBLogFilesCommandInput,
    DescribeDBLogFilesCommandOutput,
    RDSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RDSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonRDSv19", "DescribeDBLogFiles", {})
  .n("RDSClient", "DescribeDBLogFilesCommand")
  .sc(DescribeDBLogFiles$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeDBLogFilesMessage;
      output: DescribeDBLogFilesResponse;
    };
    sdk: {
      input: DescribeDBLogFilesCommandInput;
      output: DescribeDBLogFilesCommandOutput;
    };
  };
}
