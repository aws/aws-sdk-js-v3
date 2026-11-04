// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeBulkImportJobRequest, DescribeBulkImportJobResponse } from "../models/models_0";
import { DescribeBulkImportJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Retrieves information about a bulk import job request. For more information, see [Describe a bulk import job (CLI)](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/DescribeBulkImportJob.html) in the *Amazon Simple Storage Service User Guide*.
 *
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
 *   workspaceName: "STRING_VALUE",
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
 * //       alias: "STRING_VALUE",
 * //       startTime: { // TimeInNanos
 * //         timeInSeconds: Number("long"), // required
 * //         offsetInNanos: Number("int"),
 * //       },
 * //       fileFormat: { // FileFormat
 * //         csv: { // Csv
 * //           columnNames: [ // ColumnNames // required
 * //             "ALIAS" || "ASSET_ID" || "PROPERTY_ID" || "DATA_TYPE" || "TIMESTAMP_SECONDS" || "TIMESTAMP_NANO_OFFSET" || "QUALITY" || "VALUE",
 * //           ],
 * //         },
 * //         parquet: {},
 * //         mp4: {},
 * //         annotation: {},
 * //       },
 * //     },
 * //   ],
 * //   errorReportLocation: { // ErrorReportLocation
 * //     bucket: "STRING_VALUE", // required
 * //     prefix: "STRING_VALUE", // required
 * //   },
 * //   jobConfiguration: { // JobConfiguration
 * //     fileFormat: {
 * //       csv: {
 * //         columnNames: [ // required
 * //           "ALIAS" || "ASSET_ID" || "PROPERTY_ID" || "DATA_TYPE" || "TIMESTAMP_SECONDS" || "TIMESTAMP_NANO_OFFSET" || "QUALITY" || "VALUE",
 * //         ],
 * //       },
 * //       parquet: {},
 * //       mp4: {},
 * //       annotation: {},
 * //     },
 * //   },
 * //   jobCreationDate: new Date("TIMESTAMP"), // required
 * //   jobLastUpdateDate: new Date("TIMESTAMP"), // required
 * //   adaptiveIngestion: true || false,
 * //   deleteFilesAfterImport: true || false,
 * //   datasetId: "STRING_VALUE",
 * //   workspaceName: "STRING_VALUE",
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
 *
 * IoT SiteWise can't process your request right now. Try again later.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request isn't valid. This can occur if your request contains malformed JSON or unsupported characters. Check your request and try again.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource can't be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Your request exceeded a rate limit. For example, you might have exceeded the number of IoT SiteWise assets that can be created per second, the allowed number of messages per second, and so on.
 *
 * For more information, see [Quotas](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html) in the *IoT SiteWise User Guide*.
 *
 * @throws {@link IoTSiteWiseServiceException}
 *
 * Base exception class for all service exceptions from IoTSiteWise service.
 *
 * @public
 */
export class DescribeBulkImportJobCommand extends command<DescribeBulkImportJobCommandInput, DescribeBulkImportJobCommandOutput>(
  _ep0,
  _mw0,
  "DescribeBulkImportJob",
  DescribeBulkImportJob$
) {
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
