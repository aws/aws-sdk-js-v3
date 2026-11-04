// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutTableBucketMaintenanceConfigurationRequest } from "../models/models_0";
import { PutTableBucketMaintenanceConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutTableBucketMaintenanceConfigurationCommand}.
 */
export interface PutTableBucketMaintenanceConfigurationCommandInput extends PutTableBucketMaintenanceConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link PutTableBucketMaintenanceConfigurationCommand}.
 */
export interface PutTableBucketMaintenanceConfigurationCommandOutput extends __MetadataBearer {}

/**
 * Creates a new maintenance configuration or replaces an existing maintenance configuration for a table bucket. For more information, see [Amazon S3 table bucket maintenance](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-table-buckets-maintenance.html) in the *Amazon Simple Storage Service User Guide*.
 *
 * - **Permissions**
 *
 *   You must have the `s3tables:PutTableBucketMaintenanceConfiguration` permission to use this operation.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3TablesClient, PutTableBucketMaintenanceConfigurationCommand } from "@aws-sdk/client-s3tables"; // ES Modules import
 * // const { S3TablesClient, PutTableBucketMaintenanceConfigurationCommand } = require("@aws-sdk/client-s3tables"); // CommonJS import
 * // import type { S3TablesClientConfig } from "@aws-sdk/client-s3tables";
 * const config = {}; // type is S3TablesClientConfig
 * const client = new S3TablesClient(config);
 * const input = { // PutTableBucketMaintenanceConfigurationRequest
 *   tableBucketARN: "STRING_VALUE", // required
 *   type: "icebergUnreferencedFileRemoval", // required
 *   value: { // TableBucketMaintenanceConfigurationValue
 *     status: "enabled" || "disabled",
 *     settings: { // TableBucketMaintenanceSettings Union: only one key present
 *       icebergUnreferencedFileRemoval: { // IcebergUnreferencedFileRemovalSettings
 *         unreferencedDays: Number("int"),
 *         nonCurrentDays: Number("int"),
 *       },
 *     },
 *   },
 * };
 * const command = new PutTableBucketMaintenanceConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutTableBucketMaintenanceConfigurationCommandInput - {@link PutTableBucketMaintenanceConfigurationCommandInput}
 * @returns {@link PutTableBucketMaintenanceConfigurationCommandOutput}
 * @see {@link PutTableBucketMaintenanceConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutTableBucketMaintenanceConfigurationCommandOutput} for command's `response` shape.
 * @see {@link S3TablesClientResolvedConfig | config} for S3TablesClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The request is invalid or malformed.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request failed because there is a conflict with a previous write. You can retry the request.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * The caller isn't authorized to make the request.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *
 * The request failed due to an internal server error.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * The request was rejected because the specified resource could not be found.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * The limit on the number of requests per second was exceeded.
 *
 * @throws {@link S3TablesServiceException}
 *
 * Base exception class for all service exceptions from S3Tables service.
 *
 * @public
 */
export class PutTableBucketMaintenanceConfigurationCommand extends command<PutTableBucketMaintenanceConfigurationCommandInput, PutTableBucketMaintenanceConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "PutTableBucketMaintenanceConfiguration",
  PutTableBucketMaintenanceConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutTableBucketMaintenanceConfigurationRequest;
      output: {};
    };
    sdk: {
      input: PutTableBucketMaintenanceConfigurationCommandInput;
      output: PutTableBucketMaintenanceConfigurationCommandOutput;
    };
  };
}
