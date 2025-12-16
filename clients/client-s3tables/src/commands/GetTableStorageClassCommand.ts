// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetTableStorageClassRequest, GetTableStorageClassResponse } from "../models/models_0";
import type { S3TablesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3TablesClient";
import { GetTableStorageClass$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetTableStorageClassCommand}.
 */
export interface GetTableStorageClassCommandInput extends GetTableStorageClassRequest {}
/**
 * @public
 *
 * The output of {@link GetTableStorageClassCommand}.
 */
export interface GetTableStorageClassCommandOutput extends GetTableStorageClassResponse, __MetadataBearer {}

/**
 * <p>Retrieves the storage class configuration for a specific table. This allows you to view the storage class settings that apply to an individual table, which may differ from the table bucket's default configuration.</p> <dl> <dt>Permissions</dt> <dd> <p>You must have the <code>s3tables:GetTableStorageClass</code> permission to use this operation.</p> </dd> </dl>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3TablesClient, GetTableStorageClassCommand } from "@aws-sdk/client-s3tables"; // ES Modules import
 * // const { S3TablesClient, GetTableStorageClassCommand } = require("@aws-sdk/client-s3tables"); // CommonJS import
 * // import type { S3TablesClientConfig } from "@aws-sdk/client-s3tables";
 * const config = {}; // type is S3TablesClientConfig
 * const client = new S3TablesClient(config);
 * const input = { // GetTableStorageClassRequest
 *   tableBucketARN: "STRING_VALUE", // required
 *   namespace: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 * };
 * const command = new GetTableStorageClassCommand(input);
 * const response = await client.send(command);
 * // { // GetTableStorageClassResponse
 * //   storageClassConfiguration: { // StorageClassConfiguration
 * //     storageClass: "STANDARD" || "INTELLIGENT_TIERING", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetTableStorageClassCommandInput - {@link GetTableStorageClassCommandInput}
 * @returns {@link GetTableStorageClassCommandOutput}
 * @see {@link GetTableStorageClassCommandInput} for command's `input` shape.
 * @see {@link GetTableStorageClassCommandOutput} for command's `response` shape.
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
export class GetTableStorageClassCommand extends $Command
  .classBuilder<
    GetTableStorageClassCommandInput,
    GetTableStorageClassCommandOutput,
    S3TablesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: S3TablesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("S3TableBuckets", "GetTableStorageClass", {})
  .n("S3TablesClient", "GetTableStorageClassCommand")
  .sc(GetTableStorageClass$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTableStorageClassRequest;
      output: GetTableStorageClassResponse;
    };
    sdk: {
      input: GetTableStorageClassCommandInput;
      output: GetTableStorageClassCommandOutput;
    };
  };
}
