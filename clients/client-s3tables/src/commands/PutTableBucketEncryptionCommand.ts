// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutTableBucketEncryptionRequest } from "../models/models_0";
import { PutTableBucketEncryption$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutTableBucketEncryptionCommand}.
 */
export interface PutTableBucketEncryptionCommandInput extends PutTableBucketEncryptionRequest {}
/**
 * @public
 *
 * The output of {@link PutTableBucketEncryptionCommand}.
 */
export interface PutTableBucketEncryptionCommandOutput extends __MetadataBearer {}

/**
 * Sets the encryption configuration for a table bucket.
 *
 * - **Permissions**
 *
 *   You must have the `s3tables:PutTableBucketEncryption` permission to use this operation.
 *
 *   > **Note:** If you choose SSE-KMS encryption you must grant the S3 Tables maintenance principal access to your KMS key. For more information, see [Permissions requirements for S3 Tables SSE-KMS encryption](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-tables-kms-permissions.html) in the *Amazon Simple Storage Service User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3TablesClient, PutTableBucketEncryptionCommand } from "@aws-sdk/client-s3tables"; // ES Modules import
 * // const { S3TablesClient, PutTableBucketEncryptionCommand } = require("@aws-sdk/client-s3tables"); // CommonJS import
 * // import type { S3TablesClientConfig } from "@aws-sdk/client-s3tables";
 * const config = {}; // type is S3TablesClientConfig
 * const client = new S3TablesClient(config);
 * const input = { // PutTableBucketEncryptionRequest
 *   tableBucketARN: "STRING_VALUE", // required
 *   encryptionConfiguration: { // EncryptionConfiguration
 *     sseAlgorithm: "AES256" || "aws:kms", // required
 *     kmsKeyArn: "STRING_VALUE",
 *   },
 * };
 * const command = new PutTableBucketEncryptionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutTableBucketEncryptionCommandInput - {@link PutTableBucketEncryptionCommandInput}
 * @returns {@link PutTableBucketEncryptionCommandOutput}
 * @see {@link PutTableBucketEncryptionCommandInput} for command's `input` shape.
 * @see {@link PutTableBucketEncryptionCommandOutput} for command's `response` shape.
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
export class PutTableBucketEncryptionCommand extends command<PutTableBucketEncryptionCommandInput, PutTableBucketEncryptionCommandOutput>(
  _ep0,
  _mw0,
  "PutTableBucketEncryption",
  PutTableBucketEncryption$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutTableBucketEncryptionRequest;
      output: {};
    };
    sdk: {
      input: PutTableBucketEncryptionCommandInput;
      output: PutTableBucketEncryptionCommandOutput;
    };
  };
}
