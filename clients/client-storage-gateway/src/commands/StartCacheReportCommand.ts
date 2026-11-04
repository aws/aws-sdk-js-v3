// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartCacheReportInput, StartCacheReportOutput } from "../models/models_0";
import { StartCacheReport$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartCacheReportCommand}.
 */
export interface StartCacheReportCommandInput extends StartCacheReportInput {}
/**
 * @public
 *
 * The output of {@link StartCacheReportCommand}.
 */
export interface StartCacheReportCommandOutput extends StartCacheReportOutput, __MetadataBearer {}

/**
 * Starts generating a report of the file metadata currently cached by an S3 File Gateway for a specific file share. You can use this report to identify and resolve issues if you have files failing upload from your gateway to Amazon S3. The report is a CSV file containing a list of files which match the set of filter parameters you specify in the request.
 *
 * > **Note:** The **Files Failing Upload** flag is reset every 24 hours and during gateway reboot. If this report captures the files after the reset, but before they become flagged again, they will not be reported as **Files Failing Upload**.
 *
 * The following requirements must be met to successfully generate a cache report:
 *
 * - You must have `s3:PutObject` and `s3:AbortMultipartUpload` permissions for the Amazon S3 bucket where you want to store the cache report.
 * - No other cache reports can currently be in-progress for the specified file share.
 * - There must be fewer than 10 existing cache reports for the specified file share.
 * - The gateway must be online and connected to Amazon Web Services.
 * - The root disk must have at least 20GB of free space when report generation starts.
 * - You must specify at least one value for `InclusionFilters` or `ExclusionFilters` in the request.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, StartCacheReportCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, StartCacheReportCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * // import type { StorageGatewayClientConfig } from "@aws-sdk/client-storage-gateway";
 * const config = {}; // type is StorageGatewayClientConfig
 * const client = new StorageGatewayClient(config);
 * const input = { // StartCacheReportInput
 *   FileShareARN: "STRING_VALUE", // required
 *   Role: "STRING_VALUE", // required
 *   LocationARN: "STRING_VALUE", // required
 *   BucketRegion: "STRING_VALUE", // required
 *   VPCEndpointDNSName: "STRING_VALUE",
 *   InclusionFilters: [ // CacheReportFilterList
 *     { // CacheReportFilter
 *       Name: "UploadState" || "UploadFailureReason", // required
 *       Values: [ // CacheReportFilterValues // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   ExclusionFilters: [
 *     {
 *       Name: "UploadState" || "UploadFailureReason", // required
 *       Values: [ // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   ClientToken: "STRING_VALUE", // required
 *   Tags: [ // Tags
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new StartCacheReportCommand(input);
 * const response = await client.send(command);
 * // { // StartCacheReportOutput
 * //   CacheReportARN: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartCacheReportCommandInput - {@link StartCacheReportCommandInput}
 * @returns {@link StartCacheReportCommandOutput}
 * @see {@link StartCacheReportCommandInput} for command's `input` shape.
 * @see {@link StartCacheReportCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for StorageGatewayClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *
 * An internal server error has occurred during the request. For more information, see the error and message fields.
 *
 * @throws {@link InvalidGatewayRequestException} (client fault)
 *
 * An exception occurred because an invalid gateway request was issued to the service. For more information, see the error and message fields.
 *
 * @throws {@link StorageGatewayServiceException}
 *
 * Base exception class for all service exceptions from StorageGateway service.
 *
 * @public
 */
export class StartCacheReportCommand extends command<StartCacheReportCommandInput, StartCacheReportCommandOutput>(
  _ep0,
  _mw0,
  "StartCacheReport",
  StartCacheReport$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartCacheReportInput;
      output: StartCacheReportOutput;
    };
    sdk: {
      input: StartCacheReportCommandInput;
      output: StartCacheReportCommandOutput;
    };
  };
}
