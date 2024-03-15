// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { HoneycodeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HoneycodeClient";
import {
  DescribeTableDataImportJobRequest,
  DescribeTableDataImportJobResult,
  DescribeTableDataImportJobResultFilterSensitiveLog,
} from "../models/models_0";
import { de_DescribeTableDataImportJobCommand, se_DescribeTableDataImportJobCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeTableDataImportJobCommand}.
 */
export interface DescribeTableDataImportJobCommandInput extends DescribeTableDataImportJobRequest {}
/**
 * @public
 *
 * The output of {@link DescribeTableDataImportJobCommand}.
 */
export interface DescribeTableDataImportJobCommandOutput extends DescribeTableDataImportJobResult, __MetadataBearer {}

/**
 * <p>
 *             The DescribeTableDataImportJob API allows you to retrieve the status and details of a table data import job.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HoneycodeClient, DescribeTableDataImportJobCommand } from "@aws-sdk/client-honeycode"; // ES Modules import
 * // const { HoneycodeClient, DescribeTableDataImportJobCommand } = require("@aws-sdk/client-honeycode"); // CommonJS import
 * const client = new HoneycodeClient(config);
 * const input = { // DescribeTableDataImportJobRequest
 *   workbookId: "STRING_VALUE", // required
 *   tableId: "STRING_VALUE", // required
 *   jobId: "STRING_VALUE", // required
 * };
 * const command = new DescribeTableDataImportJobCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTableDataImportJobResult
 * //   jobStatus: "SUBMITTED" || "IN_PROGRESS" || "COMPLETED" || "FAILED", // required
 * //   message: "STRING_VALUE", // required
 * //   jobMetadata: { // TableDataImportJobMetadata
 * //     submitter: { // ImportJobSubmitter
 * //       email: "STRING_VALUE",
 * //       userArn: "STRING_VALUE",
 * //     },
 * //     submitTime: new Date("TIMESTAMP"), // required
 * //     importOptions: { // ImportOptions
 * //       destinationOptions: { // DestinationOptions
 * //         columnMap: { // ImportColumnMap
 * //           "<keys>": { // SourceDataColumnProperties
 * //             columnIndex: Number("int"),
 * //           },
 * //         },
 * //       },
 * //       delimitedTextOptions: { // DelimitedTextImportOptions
 * //         delimiter: "STRING_VALUE", // required
 * //         hasHeaderRow: true || false,
 * //         ignoreEmptyRows: true || false,
 * //         dataCharacterEncoding: "UTF-8" || "US-ASCII" || "ISO-8859-1" || "UTF-16BE" || "UTF-16LE" || "UTF-16",
 * //       },
 * //     },
 * //     dataSource: { // ImportDataSource
 * //       dataSourceConfig: { // ImportDataSourceConfig
 * //         dataSourceUrl: "STRING_VALUE",
 * //       },
 * //     },
 * //   },
 * //   errorCode: "ACCESS_DENIED" || "INVALID_URL_ERROR" || "INVALID_IMPORT_OPTIONS_ERROR" || "INVALID_TABLE_ID_ERROR" || "INVALID_TABLE_COLUMN_ID_ERROR" || "TABLE_NOT_FOUND_ERROR" || "FILE_EMPTY_ERROR" || "INVALID_FILE_TYPE_ERROR" || "FILE_PARSING_ERROR" || "FILE_SIZE_LIMIT_ERROR" || "FILE_NOT_FOUND_ERROR" || "UNKNOWN_ERROR" || "RESOURCE_NOT_FOUND_ERROR" || "SYSTEM_LIMIT_ERROR",
 * // };
 *
 * ```
 *
 * @param DescribeTableDataImportJobCommandInput - {@link DescribeTableDataImportJobCommandInput}
 * @returns {@link DescribeTableDataImportJobCommandOutput}
 * @see {@link DescribeTableDataImportJobCommandInput} for command's `input` shape.
 * @see {@link DescribeTableDataImportJobCommandOutput} for command's `response` shape.
 * @see {@link HoneycodeClientResolvedConfig | config} for HoneycodeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>
 *             You do not have sufficient access to perform this action. Check that the workbook is owned by you and your
 *             IAM policy allows access to the resource in the request.
 *         </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There were unexpected errors from the server.</p>
 *
 * @throws {@link RequestTimeoutException} (server fault)
 *  <p>The request timed out.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A Workbook, Table, App, Screen or Screen Automation was not found with the given ID.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>Remote service is unreachable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Tps(transactions per second) rate reached.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>
 *             Request is invalid. The message in the response contains details on why the request is invalid.
 *         </p>
 *
 * @throws {@link HoneycodeServiceException}
 * <p>Base exception class for all service exceptions from Honeycode service.</p>
 *
 * @public
 */
export class DescribeTableDataImportJobCommand extends $Command
  .classBuilder<
    DescribeTableDataImportJobCommandInput,
    DescribeTableDataImportJobCommandOutput,
    HoneycodeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: HoneycodeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SheetsPublicApiService", "DescribeTableDataImportJob", {})
  .n("HoneycodeClient", "DescribeTableDataImportJobCommand")
  .f(void 0, DescribeTableDataImportJobResultFilterSensitiveLog)
  .ser(se_DescribeTableDataImportJobCommand)
  .de(de_DescribeTableDataImportJobCommand)
  .build() {}
