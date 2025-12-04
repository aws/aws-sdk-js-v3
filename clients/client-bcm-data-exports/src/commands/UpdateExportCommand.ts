// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  BCMDataExportsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../BCMDataExportsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateExportRequest, UpdateExportResponse } from "../models/models_0";
import { UpdateExport } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateExportCommand}.
 */
export interface UpdateExportCommandInput extends UpdateExportRequest {}
/**
 * @public
 *
 * The output of {@link UpdateExportCommand}.
 */
export interface UpdateExportCommandOutput extends UpdateExportResponse, __MetadataBearer {}

/**
 * <p>Updates an existing data export by overwriting all export parameters. All export
 *       parameters must be provided in the UpdateExport request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BCMDataExportsClient, UpdateExportCommand } from "@aws-sdk/client-bcm-data-exports"; // ES Modules import
 * // const { BCMDataExportsClient, UpdateExportCommand } = require("@aws-sdk/client-bcm-data-exports"); // CommonJS import
 * // import type { BCMDataExportsClientConfig } from "@aws-sdk/client-bcm-data-exports";
 * const config = {}; // type is BCMDataExportsClientConfig
 * const client = new BCMDataExportsClient(config);
 * const input = { // UpdateExportRequest
 *   ExportArn: "STRING_VALUE", // required
 *   Export: { // Export
 *     ExportArn: "STRING_VALUE",
 *     Name: "STRING_VALUE", // required
 *     Description: "STRING_VALUE",
 *     DataQuery: { // DataQuery
 *       QueryStatement: "STRING_VALUE", // required
 *       TableConfigurations: { // TableConfigurations
 *         "<keys>": { // TableProperties
 *           "<keys>": "STRING_VALUE",
 *         },
 *       },
 *     },
 *     DestinationConfigurations: { // DestinationConfigurations
 *       S3Destination: { // S3Destination
 *         S3Bucket: "STRING_VALUE", // required
 *         S3Prefix: "STRING_VALUE", // required
 *         S3Region: "STRING_VALUE", // required
 *         S3OutputConfigurations: { // S3OutputConfigurations
 *           OutputType: "CUSTOM", // required
 *           Format: "TEXT_OR_CSV" || "PARQUET", // required
 *           Compression: "GZIP" || "PARQUET", // required
 *           Overwrite: "CREATE_NEW_REPORT" || "OVERWRITE_REPORT", // required
 *         },
 *       },
 *     },
 *     RefreshCadence: { // RefreshCadence
 *       Frequency: "SYNCHRONOUS", // required
 *     },
 *   },
 * };
 * const command = new UpdateExportCommand(input);
 * const response = await client.send(command);
 * // { // UpdateExportResponse
 * //   ExportArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateExportCommandInput - {@link UpdateExportCommandInput}
 * @returns {@link UpdateExportCommandOutput}
 * @see {@link UpdateExportCommandInput} for command's `input` shape.
 * @see {@link UpdateExportCommandOutput} for command's `response` shape.
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
export class UpdateExportCommand extends $Command
  .classBuilder<
    UpdateExportCommandInput,
    UpdateExportCommandOutput,
    BCMDataExportsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BCMDataExportsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSBillingAndCostManagementDataExports", "UpdateExport", {})
  .n("BCMDataExportsClient", "UpdateExportCommand")
  .sc(UpdateExport)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateExportRequest;
      output: UpdateExportResponse;
    };
    sdk: {
      input: UpdateExportCommandInput;
      output: UpdateExportCommandOutput;
    };
  };
}
