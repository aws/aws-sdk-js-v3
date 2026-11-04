// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateVectorBucketInput, CreateVectorBucketOutput } from "../models/models_0";
import { CreateVectorBucket$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateVectorBucketCommand}.
 */
export interface CreateVectorBucketCommandInput extends CreateVectorBucketInput {}
/**
 * @public
 *
 * The output of {@link CreateVectorBucketCommand}.
 */
export interface CreateVectorBucketCommandOutput extends CreateVectorBucketOutput, __MetadataBearer {}

/**
 * Creates a vector bucket in the Amazon Web Services Region that you want your bucket to be in.
 *
 * - **Permissions**
 *
 *   You must have the `s3vectors:CreateVectorBucket` permission to use this operation.
 *
 *   You must have the `s3vectors:TagResource` permission in addition to `s3vectors:CreateVectorBucket` permission to create a vector bucket with tags.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3VectorsClient, CreateVectorBucketCommand } from "@aws-sdk/client-s3vectors"; // ES Modules import
 * // const { S3VectorsClient, CreateVectorBucketCommand } = require("@aws-sdk/client-s3vectors"); // CommonJS import
 * // import type { S3VectorsClientConfig } from "@aws-sdk/client-s3vectors";
 * const config = {}; // type is S3VectorsClientConfig
 * const client = new S3VectorsClient(config);
 * const input = { // CreateVectorBucketInput
 *   vectorBucketName: "STRING_VALUE", // required
 *   encryptionConfiguration: { // EncryptionConfiguration
 *     sseType: "AES256" || "aws:kms",
 *     kmsKeyArn: "STRING_VALUE",
 *   },
 *   tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateVectorBucketCommand(input);
 * const response = await client.send(command);
 * // { // CreateVectorBucketOutput
 * //   vectorBucketArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateVectorBucketCommandInput - {@link CreateVectorBucketCommandInput}
 * @returns {@link CreateVectorBucketCommandOutput}
 * @see {@link CreateVectorBucketCommandInput} for command's `input` shape.
 * @see {@link CreateVectorBucketCommandOutput} for command's `response` shape.
 * @see {@link S3VectorsClientResolvedConfig | config} for S3VectorsClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request failed because a vector bucket name or a vector index name already exists. Vector bucket names must be unique within your Amazon Web Services account for each Amazon Web Services Region. Vector index names must be unique within your vector bucket. Choose a different vector bucket name or vector index name, and try again.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * Your request exceeds a service quota.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service is unavailable. Wait briefly and retry your request. If it continues to fail, increase your waiting time between retries.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access denied.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request failed due to an internal server error.
 *
 * @throws {@link RequestTimeoutException} (client fault)
 *
 * The request timed out. Retry your request.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The requested action isn't valid.
 *
 * @throws {@link S3VectorsServiceException}
 *
 * Base exception class for all service exceptions from S3Vectors service.
 *
 * @public
 */
export class CreateVectorBucketCommand extends command<CreateVectorBucketCommandInput, CreateVectorBucketCommandOutput>(
  _ep0,
  _mw0,
  "CreateVectorBucket",
  CreateVectorBucket$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateVectorBucketInput;
      output: CreateVectorBucketOutput;
    };
    sdk: {
      input: CreateVectorBucketCommandInput;
      output: CreateVectorBucketCommandOutput;
    };
  };
}
