// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { HoneycodeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HoneycodeClient";
import {
  StartTableDataImportJobRequest,
  StartTableDataImportJobRequestFilterSensitiveLog,
  StartTableDataImportJobResult,
} from "../models/models_0";
import { de_StartTableDataImportJobCommand, se_StartTableDataImportJobCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartTableDataImportJobCommand}.
 */
export interface StartTableDataImportJobCommandInput extends StartTableDataImportJobRequest {}
/**
 * @public
 *
 * The output of {@link StartTableDataImportJobCommand}.
 */
export interface StartTableDataImportJobCommandOutput extends StartTableDataImportJobResult, __MetadataBearer {}

/**
 * <p>
 *             The StartTableDataImportJob API allows you to start an import job on a table. This API will only return
 *             the id of the job that was started. To find out the status of the import request, you need to call the
 *             DescribeTableDataImportJob API.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HoneycodeClient, StartTableDataImportJobCommand } from "@aws-sdk/client-honeycode"; // ES Modules import
 * // const { HoneycodeClient, StartTableDataImportJobCommand } = require("@aws-sdk/client-honeycode"); // CommonJS import
 * const client = new HoneycodeClient(config);
 * const input = { // StartTableDataImportJobRequest
 *   workbookId: "STRING_VALUE", // required
 *   dataSource: { // ImportDataSource
 *     dataSourceConfig: { // ImportDataSourceConfig
 *       dataSourceUrl: "STRING_VALUE",
 *     },
 *   },
 *   dataFormat: "DELIMITED_TEXT", // required
 *   destinationTableId: "STRING_VALUE", // required
 *   importOptions: { // ImportOptions
 *     destinationOptions: { // DestinationOptions
 *       columnMap: { // ImportColumnMap
 *         "<keys>": { // SourceDataColumnProperties
 *           columnIndex: Number("int"),
 *         },
 *       },
 *     },
 *     delimitedTextOptions: { // DelimitedTextImportOptions
 *       delimiter: "STRING_VALUE", // required
 *       hasHeaderRow: true || false,
 *       ignoreEmptyRows: true || false,
 *       dataCharacterEncoding: "UTF-8" || "US-ASCII" || "ISO-8859-1" || "UTF-16BE" || "UTF-16LE" || "UTF-16",
 *     },
 *   },
 *   clientRequestToken: "STRING_VALUE", // required
 * };
 * const command = new StartTableDataImportJobCommand(input);
 * const response = await client.send(command);
 * // { // StartTableDataImportJobResult
 * //   jobId: "STRING_VALUE", // required
 * //   jobStatus: "SUBMITTED" || "IN_PROGRESS" || "COMPLETED" || "FAILED", // required
 * // };
 *
 * ```
 *
 * @param StartTableDataImportJobCommandInput - {@link StartTableDataImportJobCommandInput}
 * @returns {@link StartTableDataImportJobCommandOutput}
 * @see {@link StartTableDataImportJobCommandInput} for command's `input` shape.
 * @see {@link StartTableDataImportJobCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>
 *             The request caused service quota to be breached.
 *         </p>
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
export class StartTableDataImportJobCommand extends $Command
  .classBuilder<
    StartTableDataImportJobCommandInput,
    StartTableDataImportJobCommandOutput,
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
  .s("SheetsPublicApiService", "StartTableDataImportJob", {})
  .n("HoneycodeClient", "StartTableDataImportJobCommand")
  .f(StartTableDataImportJobRequestFilterSensitiveLog, void 0)
  .ser(se_StartTableDataImportJobCommand)
  .de(de_StartTableDataImportJobCommand)
  .build() {}
