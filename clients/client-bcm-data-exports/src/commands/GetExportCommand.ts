// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BCMDataExportsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BCMDataExportsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetExportRequest, GetExportResponse } from "../models/models_0";
import { GetExport } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetExportCommand}.
 */
export interface GetExportCommandInput extends GetExportRequest {}
/**
 * @public
 *
 * The output of {@link GetExportCommand}.
 */
export interface GetExportCommandOutput extends GetExportResponse, __MetadataBearer {}

/**
 * <p>Views the definition of an existing data export.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BCMDataExportsClient, GetExportCommand } from "@aws-sdk/client-bcm-data-exports"; // ES Modules import
 * // const { BCMDataExportsClient, GetExportCommand } = require("@aws-sdk/client-bcm-data-exports"); // CommonJS import
 * // import type { BCMDataExportsClientConfig } from "@aws-sdk/client-bcm-data-exports";
 * const config = {}; // type is BCMDataExportsClientConfig
 * const client = new BCMDataExportsClient(config);
 * const input = { // GetExportRequest
 *   ExportArn: "STRING_VALUE", // required
 * };
 * const command = new GetExportCommand(input);
 * const response = await client.send(command);
 * // { // GetExportResponse
 * //   Export: { // Export
 * //     ExportArn: "STRING_VALUE",
 * //     Name: "STRING_VALUE", // required
 * //     Description: "STRING_VALUE",
 * //     DataQuery: { // DataQuery
 * //       QueryStatement: "STRING_VALUE", // required
 * //       TableConfigurations: { // TableConfigurations
 * //         "<keys>": { // TableProperties
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //     DestinationConfigurations: { // DestinationConfigurations
 * //       S3Destination: { // S3Destination
 * //         S3Bucket: "STRING_VALUE", // required
 * //         S3Prefix: "STRING_VALUE", // required
 * //         S3Region: "STRING_VALUE", // required
 * //         S3OutputConfigurations: { // S3OutputConfigurations
 * //           OutputType: "CUSTOM", // required
 * //           Format: "TEXT_OR_CSV" || "PARQUET", // required
 * //           Compression: "GZIP" || "PARQUET", // required
 * //           Overwrite: "CREATE_NEW_REPORT" || "OVERWRITE_REPORT", // required
 * //         },
 * //       },
 * //     },
 * //     RefreshCadence: { // RefreshCadence
 * //       Frequency: "SYNCHRONOUS", // required
 * //     },
 * //   },
 * //   ExportStatus: { // ExportStatus
 * //     StatusCode: "HEALTHY" || "UNHEALTHY",
 * //     StatusReason: "INSUFFICIENT_PERMISSION" || "BILL_OWNER_CHANGED" || "INTERNAL_FAILURE",
 * //     CreatedAt: new Date("TIMESTAMP"),
 * //     LastUpdatedAt: new Date("TIMESTAMP"),
 * //     LastRefreshedAt: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetExportCommandInput - {@link GetExportCommandInput}
 * @returns {@link GetExportCommandOutput}
 * @see {@link GetExportCommandInput} for command's `input` shape.
 * @see {@link GetExportCommandOutput} for command's `response` shape.
 * @see {@link BCMDataExportsClientResolvedConfig | config} for BCMDataExportsClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An error on the server occurred during the processing of your request. Try again
 *       later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified Amazon Resource Name (ARN) in the request doesn't exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services
 *       service.</p>
 *
 * @throws {@link BCMDataExportsServiceException}
 * <p>Base exception class for all service exceptions from BCMDataExports service.</p>
 *
 *
 * @public
 */
export class GetExportCommand extends $Command
  .classBuilder<
    GetExportCommandInput,
    GetExportCommandOutput,
    BCMDataExportsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BCMDataExportsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSBillingAndCostManagementDataExports", "GetExport", {})
  .n("BCMDataExportsClient", "GetExportCommand")
  .sc(GetExport)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetExportRequest;
      output: GetExportResponse;
    };
    sdk: {
      input: GetExportCommandInput;
      output: GetExportCommandOutput;
    };
  };
}
