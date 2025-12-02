// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetTableBucketStorageClassRequest, GetTableBucketStorageClassResponse } from "../models/models_0";
import { S3TablesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3TablesClient";
import { GetTableBucketStorageClass } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Retrieves the storage class configuration for a specific table. This allows you to view the storage class settings that apply to an individual table, which may differ from the table bucket's default configuration.</p> <dl> <dt>Permissions</dt> <dd> <p>You must have the <code>s3tables:GetTableBucketStorageClass</code> permission to use this operation.</p> </dd> </dl>
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
 *  <p>The action cannot be performed because you do not have the required permission.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is invalid or malformed.</p>
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
export class GetTableBucketStorageClassCommand extends $Command
  .classBuilder<
    GetTableBucketStorageClassCommandInput,
    GetTableBucketStorageClassCommandOutput,
    S3TablesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: S3TablesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("S3TableBuckets", "GetTableBucketStorageClass", {})
  .n("S3TablesClient", "GetTableBucketStorageClassCommand")
  .sc(GetTableBucketStorageClass)
  .build() {
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
