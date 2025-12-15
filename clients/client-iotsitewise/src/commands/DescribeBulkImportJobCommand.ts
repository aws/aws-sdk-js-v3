// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import type { DescribeBulkImportJobRequest, DescribeBulkImportJobResponse } from "../models/models_0";
import { DescribeBulkImportJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeBulkImportJobCommand}.
 */
export interface DescribeBulkImportJobCommandInput extends DescribeBulkImportJobRequest {}
/**
 * @public
 *
 * The output of {@link DescribeBulkImportJobCommand}.
 */
export interface DescribeBulkImportJobCommandOutput extends DescribeBulkImportJobResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about a bulk import job request. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/DescribeBulkImportJob.html">Describe
 *         a bulk import job (CLI)</a> in the <i>Amazon Simple Storage Service User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, DescribeBulkImportJobCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, DescribeBulkImportJobCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * // import type { IoTSiteWiseClientConfig } from "@aws-sdk/client-iotsitewise";
 * const config = {}; // type is IoTSiteWiseClientConfig
 * const client = new IoTSiteWiseClient(config);
 * const input = { // DescribeBulkImportJobRequest
 *   jobId: "STRING_VALUE", // required
 * };
 * const command = new DescribeBulkImportJobCommand(input);
 * const response = await client.send(command);
 * // { // DescribeBulkImportJobResponse
 * //   jobId: "STRING_VALUE", // required
 * //   jobName: "STRING_VALUE", // required
 * //   jobStatus: "PENDING" || "CANCELLED" || "RUNNING" || "COMPLETED" || "FAILED" || "COMPLETED_WITH_FAILURES", // required
 * //   jobRoleArn: "STRING_VALUE", // required
 * //   files: [ // Files // required
 * //     { // File
 * //       bucket: "STRING_VALUE", // required
 * //       key: "STRING_VALUE", // required
 * //       versionId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   errorReportLocation: { // ErrorReportLocation
 * //     bucket: "STRING_VALUE", // required
 * //     prefix: "STRING_VALUE", // required
 * //   },
 * //   jobConfiguration: { // JobConfiguration
 * //     fileFormat: { // FileFormat
 * //       csv: { // Csv
 * //         columnNames: [ // ColumnNames // required
 * //           "ALIAS" || "ASSET_ID" || "PROPERTY_ID" || "DATA_TYPE" || "TIMESTAMP_SECONDS" || "TIMESTAMP_NANO_OFFSET" || "QUALITY" || "VALUE",
 * //         ],
 * //       },
 * //       parquet: {},
 * //     },
 * //   },
 * //   jobCreationDate: new Date("TIMESTAMP"), // required
 * //   jobLastUpdateDate: new Date("TIMESTAMP"), // required
 * //   adaptiveIngestion: true || false,
 * //   deleteFilesAfterImport: true || false,
 * // };
 *
 * ```
 *
 * @param DescribeBulkImportJobCommandInput - {@link DescribeBulkImportJobCommandInput}
 * @returns {@link DescribeBulkImportJobCommandOutput}
 * @see {@link DescribeBulkImportJobCommandInput} for command's `input` shape.
 * @see {@link DescribeBulkImportJobCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for IoTSiteWiseClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>IoT SiteWise can't process your request right now. Try again later.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or
 *       unsupported characters. Check your request and try again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request exceeded a rate limit. For example, you might have exceeded the number of
 *       IoT SiteWise assets that can be created per second, the allowed number of messages per second, and so
 *       on.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p>
 *
 * @throws {@link IoTSiteWiseServiceException}
 * <p>Base exception class for all service exceptions from IoTSiteWise service.</p>
 *
 *
 * @public
 */
export class DescribeBulkImportJobCommand extends $Command
  .classBuilder<
    DescribeBulkImportJobCommandInput,
    DescribeBulkImportJobCommandOutput,
    IoTSiteWiseClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTSiteWiseClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIoTSiteWise", "DescribeBulkImportJob", {})
  .n("IoTSiteWiseClient", "DescribeBulkImportJobCommand")
  .sc(DescribeBulkImportJob$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeBulkImportJobRequest;
      output: DescribeBulkImportJobResponse;
    };
    sdk: {
      input: DescribeBulkImportJobCommandInput;
      output: DescribeBulkImportJobCommandOutput;
    };
  };
}
