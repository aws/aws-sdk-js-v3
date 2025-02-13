// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeCacheReportInput, DescribeCacheReportOutput } from "../models/models_0";
import { de_DescribeCacheReportCommand, se_DescribeCacheReportCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeCacheReportCommand}.
 */
export interface DescribeCacheReportCommandInput extends DescribeCacheReportInput {}
/**
 * @public
 *
 * The output of {@link DescribeCacheReportCommand}.
 */
export interface DescribeCacheReportCommandOutput extends DescribeCacheReportOutput, __MetadataBearer {}

/**
 * <p>Returns information about the specified cache report, including completion status and
 *          generation progress.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DescribeCacheReportCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DescribeCacheReportCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const input = { // DescribeCacheReportInput
 *   CacheReportARN: "STRING_VALUE", // required
 * };
 * const command = new DescribeCacheReportCommand(input);
 * const response = await client.send(command);
 * // { // DescribeCacheReportOutput
 * //   CacheReportInfo: { // CacheReportInfo
 * //     CacheReportARN: "STRING_VALUE",
 * //     CacheReportStatus: "IN_PROGRESS" || "COMPLETED" || "CANCELED" || "FAILED" || "ERROR",
 * //     ReportCompletionPercent: Number("int"),
 * //     EndTime: new Date("TIMESTAMP"),
 * //     Role: "STRING_VALUE",
 * //     FileShareARN: "STRING_VALUE",
 * //     LocationARN: "STRING_VALUE",
 * //     StartTime: new Date("TIMESTAMP"),
 * //     InclusionFilters: [ // CacheReportFilterList
 * //       { // CacheReportFilter
 * //         Name: "UploadState" || "UploadFailureReason", // required
 * //         Values: [ // CacheReportFilterValues // required
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     ],
 * //     ExclusionFilters: [
 * //       {
 * //         Name: "UploadState" || "UploadFailureReason", // required
 * //         Values: [ // required
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     ],
 * //     ReportName: "STRING_VALUE",
 * //     Tags: [ // Tags
 * //       { // Tag
 * //         Key: "STRING_VALUE", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeCacheReportCommandInput - {@link DescribeCacheReportCommandInput}
 * @returns {@link DescribeCacheReportCommandOutput}
 * @see {@link DescribeCacheReportCommandInput} for command's `input` shape.
 * @see {@link DescribeCacheReportCommandOutput} for command's `response` shape.
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
 * @public
 */
export class DescribeCacheReportCommand extends $Command
  .classBuilder<
    DescribeCacheReportCommandInput,
    DescribeCacheReportCommandOutput,
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
  .s("StorageGateway_20130630", "DescribeCacheReport", {})
  .n("StorageGatewayClient", "DescribeCacheReportCommand")
  .f(void 0, void 0)
  .ser(se_DescribeCacheReportCommand)
  .de(de_DescribeCacheReportCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeCacheReportInput;
      output: DescribeCacheReportOutput;
    };
    sdk: {
      input: DescribeCacheReportCommandInput;
      output: DescribeCacheReportCommandOutput;
    };
  };
}
