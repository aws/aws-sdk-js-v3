// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetTableBucketStorageClassRequest, GetTableBucketStorageClassResponse } from "../models/models_0";
import { GetTableBucketStorageClass$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetTableBucketStorageClassCommand}.
 */
export interface GetTableBucketStorageClassCommandInput extends GetTableBucketStorageClassRequest {}
/**
 * @public
 *
 * The output of {@link GetTableBucketStorageClassCommand}.
 */
export interface GetTableBucketStorageClassCommandOutput extends GetTableBucketStorageClassResponse, __MetadataBearer {}

/**
 * Retrieves the storage class configuration for a specific table. This allows you to view the storage class settings that apply to an individual table, which may differ from the table bucket's default configuration.
 *
 * - **Permissions**
 *
 *   You must have the `s3tables:GetTableBucketStorageClass` permission to use this operation.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3TablesClient, GetTableBucketStorageClassCommand } from "@aws-sdk/client-s3tables"; // ES Modules import
 * // const { S3TablesClient, GetTableBucketStorageClassCommand } = require("@aws-sdk/client-s3tables"); // CommonJS import
 * // import type { S3TablesClientConfig } from "@aws-sdk/client-s3tables";
 * const config = {}; // type is S3TablesClientConfig
 * const client = new S3TablesClient(config);
 * const input = { // GetTableBucketStorageClassRequest
 *   tableBucketARN: "STRING_VALUE", // required
 * };
 * const command = new GetTableBucketStorageClassCommand(input);
 * const response = await client.send(command);
 * // { // GetTableBucketStorageClassResponse
 * //   storageClassConfiguration: { // StorageClassConfiguration
 * //     storageClass: "STANDARD" || "INTELLIGENT_TIERING", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetTableBucketStorageClassCommandInput - {@link GetTableBucketStorageClassCommandInput}
 * @returns {@link GetTableBucketStorageClassCommandOutput}
 * @see {@link GetTableBucketStorageClassCommandInput} for command's `input` shape.
 * @see {@link GetTableBucketStorageClassCommandOutput} for command's `response` shape.
 * @see {@link S3TablesClientResolvedConfig | config} for S3TablesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The action cannot be performed because you do not have the required permission.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The request is invalid or malformed.
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
export class GetTableBucketStorageClassCommand extends command<GetTableBucketStorageClassCommandInput, GetTableBucketStorageClassCommandOutput>(
  _ep0,
  _mw0,
  "GetTableBucketStorageClass",
  GetTableBucketStorageClass$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTableBucketStorageClassRequest;
      output: GetTableBucketStorageClassResponse;
    };
    sdk: {
      input: GetTableBucketStorageClassCommandInput;
      output: GetTableBucketStorageClassCommandOutput;
    };
  };
}
