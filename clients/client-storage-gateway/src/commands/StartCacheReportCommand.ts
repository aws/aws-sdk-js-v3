// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { StartCacheReportInput, StartCacheReportOutput } from "../models/models_0";
import { StartCacheReport } from "../schemas/schemas_28_File";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Starts generating a report of the file metadata currently cached by an S3 File Gateway for a specific file share. You can use this report to identify and resolve
 *          issues if you have files failing upload from your gateway to Amazon S3. The report
 *          is a CSV file containing a list of files which match the set of filter parameters you
 *          specify in the request.</p>
 *          <note>
 *             <p>The <b>Files Failing Upload</b> flag is reset every 24
 *             hours and during gateway reboot. If this report captures the files after the reset, but
 *             before they become flagged again, they will not be reported as <b>Files Failing Upload</b>.</p>
 *          </note>
 *          <p>The following requirements must be met to successfully generate a cache report:</p>
 *          <ul>
 *             <li>
 *                <p>You must have <code>s3:PutObject</code> and <code>s3:AbortMultipartUpload</code>
 *                permissions for the Amazon S3 bucket where you want to store the cache
 *                report.</p>
 *             </li>
 *             <li>
 *                <p>No other cache reports can currently be in-progress for the specified file
 *                share.</p>
 *             </li>
 *             <li>
 *                <p>There must be fewer than 10 existing cache reports for the specified file
 *                share.</p>
 *             </li>
 *             <li>
 *                <p>The gateway must be online and connected to Amazon Web Services.</p>
 *             </li>
 *             <li>
 *                <p>The root disk must have at least 20GB of free space when report generation
 *                starts.</p>
 *             </li>
 *             <li>
 *                <p>You must specify at least one value for <code>InclusionFilters</code> or
 *                   <code>ExclusionFilters</code> in the request.</p>
 *             </li>
 *          </ul>
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
export class StartCacheReportCommand extends $Command
  .classBuilder<
    StartCacheReportCommandInput,
    StartCacheReportCommandOutput,
    StorageGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: StorageGatewayClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("StorageGateway_20130630", "StartCacheReport", {})
  .n("StorageGatewayClient", "StartCacheReportCommand")
  .sc(StartCacheReport)
  .build() {
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
