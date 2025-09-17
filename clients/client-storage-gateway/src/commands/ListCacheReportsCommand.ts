// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListCacheReportsInput, ListCacheReportsOutput } from "../models/models_0";
import { de_ListCacheReportsCommand, se_ListCacheReportsCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCacheReportsCommand}.
 */
export interface ListCacheReportsCommandInput extends ListCacheReportsInput {}
/**
 * @public
 *
 * The output of {@link ListCacheReportsCommand}.
 */
export interface ListCacheReportsCommandOutput extends ListCacheReportsOutput, __MetadataBearer {}

/**
 * <p>Returns a list of existing cache reports for all file shares associated with your
 *             Amazon Web Services account. This list includes all information provided by the
 *             <code>DescribeCacheReport</code> action, such as report name, status, completion
 *          progress, start time, end time, filters, and tags.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, ListCacheReportsCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, ListCacheReportsCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * // import type { StorageGatewayClientConfig } from "@aws-sdk/client-storage-gateway";
 * const config = {}; // type is StorageGatewayClientConfig
 * const client = new StorageGatewayClient(config);
 * const input = { // ListCacheReportsInput
 *   Marker: "STRING_VALUE",
 * };
 * const command = new ListCacheReportsCommand(input);
 * const response = await client.send(command);
 * // { // ListCacheReportsOutput
 * //   CacheReportList: [ // CacheReportList
 * //     { // CacheReportInfo
 * //       CacheReportARN: "STRING_VALUE",
 * //       CacheReportStatus: "IN_PROGRESS" || "COMPLETED" || "CANCELED" || "FAILED" || "ERROR",
 * //       ReportCompletionPercent: Number("int"),
 * //       EndTime: new Date("TIMESTAMP"),
 * //       Role: "STRING_VALUE",
 * //       FileShareARN: "STRING_VALUE",
 * //       LocationARN: "STRING_VALUE",
 * //       StartTime: new Date("TIMESTAMP"),
 * //       InclusionFilters: [ // CacheReportFilterList
 * //         { // CacheReportFilter
 * //           Name: "UploadState" || "UploadFailureReason", // required
 * //           Values: [ // CacheReportFilterValues // required
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       ],
 * //       ExclusionFilters: [
 * //         {
 * //           Name: "UploadState" || "UploadFailureReason", // required
 * //           Values: [ // required
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       ],
 * //       ReportName: "STRING_VALUE",
 * //       Tags: [ // Tags
 * //         { // Tag
 * //           Key: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCacheReportsCommandInput - {@link ListCacheReportsCommandInput}
 * @returns {@link ListCacheReportsCommandOutput}
 * @see {@link ListCacheReportsCommandInput} for command's `input` shape.
 * @see {@link ListCacheReportsCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for StorageGatewayClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An internal server error has occurred during the request. For more information, see the
 *          error and message fields.</p>
 *
 * @throws {@link InvalidGatewayRequestException} (client fault)
 *  <p>An exception occurred because an invalid gateway request was issued to the service. For
 *          more information, see the error and message fields.</p>
 *
 * @throws {@link StorageGatewayServiceException}
 * <p>Base exception class for all service exceptions from StorageGateway service.</p>
 *
 *
 * @public
 */
export class ListCacheReportsCommand extends $Command
  .classBuilder<
    ListCacheReportsCommandInput,
    ListCacheReportsCommandOutput,
    StorageGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: StorageGatewayClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("StorageGateway_20130630", "ListCacheReports", {})
  .n("StorageGatewayClient", "ListCacheReportsCommand")
  .f(void 0, void 0)
  .ser(se_ListCacheReportsCommand)
  .de(de_ListCacheReportsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCacheReportsInput;
      output: ListCacheReportsOutput;
    };
    sdk: {
      input: ListCacheReportsCommandInput;
      output: ListCacheReportsCommandOutput;
    };
  };
}
