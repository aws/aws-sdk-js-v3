// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetTableStorageClassRequest, GetTableStorageClassResponse } from "../models/models_0";
import { GetTableStorageClass$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Retrieves the storage class configuration for a specific table. This allows you to view the storage class settings that apply to an individual table, which may differ from the table bucket's default configuration.
 *
 * - **Permissions**
 *
 *   You must have the `s3tables:GetTableStorageClass` permission to use this operation.
 *
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
export class GetTableStorageClassCommand extends command<GetTableStorageClassCommandInput, GetTableStorageClassCommandOutput>(
  _ep0,
  _mw0,
  "GetTableStorageClass",
  GetTableStorageClass$
) {
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
