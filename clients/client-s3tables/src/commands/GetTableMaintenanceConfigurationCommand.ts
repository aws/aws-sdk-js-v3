// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  GetTableMaintenanceConfigurationRequest,
  GetTableMaintenanceConfigurationResponse,
} from "../models/models_0";
import type { S3TablesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3TablesClient";
import { GetTableMaintenanceConfiguration } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetTableMaintenanceConfigurationCommand}.
 */
export interface GetTableMaintenanceConfigurationCommandInput extends GetTableMaintenanceConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetTableMaintenanceConfigurationCommand}.
 */
export interface GetTableMaintenanceConfigurationCommandOutput
  extends GetTableMaintenanceConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Gets details about the maintenance configuration of a table. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-tables-maintenance.html">S3 Tables maintenance</a> in the <i>Amazon Simple Storage Service User Guide</i>.</p> <dl> <dt>Permissions</dt> <dd> <ul> <li> <p>You must have the <code>s3tables:GetTableMaintenanceConfiguration</code> permission to use this operation. </p> </li> <li> <p>You must have the <code>s3tables:GetTableData</code> permission to use set the compaction strategy to <code>sort</code> or <code>zorder</code>.</p> </li> </ul> </dd> </dl>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3TablesClient, GetTableMaintenanceConfigurationCommand } from "@aws-sdk/client-s3tables"; // ES Modules import
 * // const { S3TablesClient, GetTableMaintenanceConfigurationCommand } = require("@aws-sdk/client-s3tables"); // CommonJS import
 * // import type { S3TablesClientConfig } from "@aws-sdk/client-s3tables";
 * const config = {}; // type is S3TablesClientConfig
 * const client = new S3TablesClient(config);
 * const input = { // GetTableMaintenanceConfigurationRequest
 *   tableBucketARN: "STRING_VALUE", // required
 *   namespace: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 * };
 * const command = new GetTableMaintenanceConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetTableMaintenanceConfigurationResponse
 * //   tableARN: "STRING_VALUE", // required
 * //   configuration: { // TableMaintenanceConfiguration // required
 * //     "<keys>": { // TableMaintenanceConfigurationValue
 * //       status: "enabled" || "disabled",
 * //       settings: { // TableMaintenanceSettings Union: only one key present
 * //         icebergCompaction: { // IcebergCompactionSettings
 * //           targetFileSizeMB: Number("int"),
 * //           strategy: "auto" || "binpack" || "sort" || "z-order",
 * //         },
 * //         icebergSnapshotManagement: { // IcebergSnapshotManagementSettings
 * //           minSnapshotsToKeep: Number("int"),
 * //           maxSnapshotAgeHours: Number("int"),
 * //         },
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetTableMaintenanceConfigurationCommandInput - {@link GetTableMaintenanceConfigurationCommandInput}
 * @returns {@link GetTableMaintenanceConfigurationCommandOutput}
 * @see {@link GetTableMaintenanceConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetTableMaintenanceConfigurationCommandOutput} for command's `response` shape.
 * @see {@link S3TablesClientResolvedConfig | config} for S3TablesClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is invalid or malformed.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request failed because there is a conflict with a previous write. You can retry the request.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The caller isn't authorized to make the request.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>The request failed due to an internal server error.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The request was rejected because the specified resource could not be found.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded.</p>
 *
 * @throws {@link S3TablesServiceException}
 * <p>Base exception class for all service exceptions from S3Tables service.</p>
 *
 *
 * @public
 */
export class GetTableMaintenanceConfigurationCommand extends $Command
  .classBuilder<
    GetTableMaintenanceConfigurationCommandInput,
    GetTableMaintenanceConfigurationCommandOutput,
    S3TablesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: S3TablesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("S3TableBuckets", "GetTableMaintenanceConfiguration", {})
  .n("S3TablesClient", "GetTableMaintenanceConfigurationCommand")
  .sc(GetTableMaintenanceConfiguration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTableMaintenanceConfigurationRequest;
      output: GetTableMaintenanceConfigurationResponse;
    };
    sdk: {
      input: GetTableMaintenanceConfigurationCommandInput;
      output: GetTableMaintenanceConfigurationCommandOutput;
    };
  };
}
