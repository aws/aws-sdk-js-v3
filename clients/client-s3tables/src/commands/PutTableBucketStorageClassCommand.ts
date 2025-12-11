// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { PutTableBucketStorageClassRequest } from "../models/models_0";
import type { S3TablesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3TablesClient";
import { PutTableBucketStorageClass } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutTableBucketStorageClassCommand}.
 */
export interface PutTableBucketStorageClassCommandInput extends PutTableBucketStorageClassRequest {}
/**
 * @public
 *
 * The output of {@link PutTableBucketStorageClassCommand}.
 */
export interface PutTableBucketStorageClassCommandOutput extends __MetadataBearer {}

/**
 * <p>Sets or updates the storage class configuration for a table bucket. This configuration serves as the default storage class for all new tables created in the bucket, allowing you to optimize storage costs at the bucket level.</p> <dl> <dt>Permissions</dt> <dd> <p>You must have the <code>s3tables:PutTableBucketStorageClass</code> permission to use this operation.</p> </dd> </dl>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3TablesClient, PutTableBucketStorageClassCommand } from "@aws-sdk/client-s3tables"; // ES Modules import
 * // const { S3TablesClient, PutTableBucketStorageClassCommand } = require("@aws-sdk/client-s3tables"); // CommonJS import
 * // import type { S3TablesClientConfig } from "@aws-sdk/client-s3tables";
 * const config = {}; // type is S3TablesClientConfig
 * const client = new S3TablesClient(config);
 * const input = { // PutTableBucketStorageClassRequest
 *   tableBucketARN: "STRING_VALUE", // required
 *   storageClassConfiguration: { // StorageClassConfiguration
 *     storageClass: "STANDARD" || "INTELLIGENT_TIERING", // required
 *   },
 * };
 * const command = new PutTableBucketStorageClassCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutTableBucketStorageClassCommandInput - {@link PutTableBucketStorageClassCommandInput}
 * @returns {@link PutTableBucketStorageClassCommandOutput}
 * @see {@link PutTableBucketStorageClassCommandInput} for command's `input` shape.
 * @see {@link PutTableBucketStorageClassCommandOutput} for command's `response` shape.
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
export class PutTableBucketStorageClassCommand extends $Command
  .classBuilder<
    PutTableBucketStorageClassCommandInput,
    PutTableBucketStorageClassCommandOutput,
    S3TablesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: S3TablesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("S3TableBuckets", "PutTableBucketStorageClass", {})
  .n("S3TablesClient", "PutTableBucketStorageClassCommand")
  .sc(PutTableBucketStorageClass)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutTableBucketStorageClassRequest;
      output: {};
    };
    sdk: {
      input: PutTableBucketStorageClassCommandInput;
      output: PutTableBucketStorageClassCommandOutput;
    };
  };
}
