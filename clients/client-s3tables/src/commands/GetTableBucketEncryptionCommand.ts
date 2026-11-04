// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetTableBucketEncryptionRequest, GetTableBucketEncryptionResponse } from "../models/models_0";
import { GetTableBucketEncryption$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetTableBucketEncryptionCommand}.
 */
export interface GetTableBucketEncryptionCommandInput extends GetTableBucketEncryptionRequest {}
/**
 * @public
 *
 * The output of {@link GetTableBucketEncryptionCommand}.
 */
export interface GetTableBucketEncryptionCommandOutput extends GetTableBucketEncryptionResponse, __MetadataBearer {}

/**
 * Gets the encryption configuration for a table bucket.
 *
 * - **Permissions**
 *
 *   You must have the `s3tables:GetTableBucketEncryption` permission to use this operation.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3TablesClient, GetTableBucketEncryptionCommand } from "@aws-sdk/client-s3tables"; // ES Modules import
 * // const { S3TablesClient, GetTableBucketEncryptionCommand } = require("@aws-sdk/client-s3tables"); // CommonJS import
 * // import type { S3TablesClientConfig } from "@aws-sdk/client-s3tables";
 * const config = {}; // type is S3TablesClientConfig
 * const client = new S3TablesClient(config);
 * const input = { // GetTableBucketEncryptionRequest
 *   tableBucketARN: "STRING_VALUE", // required
 * };
 * const command = new GetTableBucketEncryptionCommand(input);
 * const response = await client.send(command);
 * // { // GetTableBucketEncryptionResponse
 * //   encryptionConfiguration: { // EncryptionConfiguration
 * //     sseAlgorithm: "AES256" || "aws:kms", // required
 * //     kmsKeyArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetTableBucketEncryptionCommandInput - {@link GetTableBucketEncryptionCommandInput}
 * @returns {@link GetTableBucketEncryptionCommandOutput}
 * @see {@link GetTableBucketEncryptionCommandInput} for command's `input` shape.
 * @see {@link GetTableBucketEncryptionCommandOutput} for command's `response` shape.
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
export class GetTableBucketEncryptionCommand extends command<GetTableBucketEncryptionCommandInput, GetTableBucketEncryptionCommandOutput>(
  _ep0,
  _mw0,
  "GetTableBucketEncryption",
  GetTableBucketEncryption$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTableBucketEncryptionRequest;
      output: GetTableBucketEncryptionResponse;
    };
    sdk: {
      input: GetTableBucketEncryptionCommandInput;
      output: GetTableBucketEncryptionCommandOutput;
    };
  };
}
