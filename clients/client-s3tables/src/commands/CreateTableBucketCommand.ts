// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateTableBucketRequest, CreateTableBucketResponse } from "../models/models_0";
import { CreateTableBucket$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateTableBucketCommand}.
 */
export interface CreateTableBucketCommandInput extends CreateTableBucketRequest {}
/**
 * @public
 *
 * The output of {@link CreateTableBucketCommand}.
 */
export interface CreateTableBucketCommandOutput extends CreateTableBucketResponse, __MetadataBearer {}

/**
 * Creates a table bucket. For more information, see [Creating a table bucket](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-tables-buckets-create.html) in the *Amazon Simple Storage Service User Guide*.
 *
 * - **Permissions**
 *
 *   - You must have the `s3tables:CreateTableBucket` permission to use this operation.
 *   - If you use this operation with the optional `encryptionConfiguration` parameter you must have the `s3tables:PutTableBucketEncryption` permission.
 *   - If you use this operation with the `storageClassConfiguration` request parameter, you must have the `s3tables:PutTableBucketStorageClass` permission.
 *   - To create a table bucket with tags, you must have the `s3tables:TagResource` permission in addition to `s3tables:CreateTableBucket` permission.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3TablesClient, CreateTableBucketCommand } from "@aws-sdk/client-s3tables"; // ES Modules import
 * // const { S3TablesClient, CreateTableBucketCommand } = require("@aws-sdk/client-s3tables"); // CommonJS import
 * // import type { S3TablesClientConfig } from "@aws-sdk/client-s3tables";
 * const config = {}; // type is S3TablesClientConfig
 * const client = new S3TablesClient(config);
 * const input = { // CreateTableBucketRequest
 *   name: "STRING_VALUE", // required
 *   encryptionConfiguration: { // EncryptionConfiguration
 *     sseAlgorithm: "AES256" || "aws:kms", // required
 *     kmsKeyArn: "STRING_VALUE",
 *   },
 *   storageClassConfiguration: { // StorageClassConfiguration
 *     storageClass: "STANDARD" || "INTELLIGENT_TIERING", // required
 *   },
 *   tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateTableBucketCommand(input);
 * const response = await client.send(command);
 * // { // CreateTableBucketResponse
 * //   arn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateTableBucketCommandInput - {@link CreateTableBucketCommandInput}
 * @returns {@link CreateTableBucketCommandOutput}
 * @see {@link CreateTableBucketCommandInput} for command's `input` shape.
 * @see {@link CreateTableBucketCommandOutput} for command's `response` shape.
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
export class CreateTableBucketCommand extends command<CreateTableBucketCommandInput, CreateTableBucketCommandOutput>(
  _ep0,
  _mw0,
  "CreateTableBucket",
  CreateTableBucket$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateTableBucketRequest;
      output: CreateTableBucketResponse;
    };
    sdk: {
      input: CreateTableBucketCommandInput;
      output: CreateTableBucketCommandOutput;
    };
  };
}
