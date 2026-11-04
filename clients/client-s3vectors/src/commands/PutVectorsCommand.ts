// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutVectorsInput, PutVectorsOutput } from "../models/models_0";
import { PutVectors$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutVectorsCommand}.
 */
export interface PutVectorsCommandInput extends PutVectorsInput {}
/**
 * @public
 *
 * The output of {@link PutVectorsCommand}.
 */
export interface PutVectorsCommandOutput extends PutVectorsOutput, __MetadataBearer {}

/**
 * Adds one or more vectors to a vector index. To specify the vector index, you can either use both the vector bucket name and the vector index name, or use the vector index Amazon Resource Name (ARN).
 *
 * For more information about limits, see [Limitations and restrictions](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-vectors-limitations.html) in the *Amazon S3 User Guide*.
 *
 * > **Note:** When inserting vector data into your vector index, you must provide the vector data as `float32` (32-bit floating point) values. If you pass higher-precision values to an Amazon Web Services SDK, S3 Vectors converts the values to 32-bit floating point before storing them, and `GetVectors`, `ListVectors`, and `QueryVectors` operations return the float32 values. Different Amazon Web Services SDKs may have different default numeric types, so ensure your vectors are properly formatted as `float32` values regardless of which SDK you're using. For example, in Python, use `numpy.float32` or explicitly cast your values.
 *
 * - **Permissions**
 *
 *   You must have the `s3vectors:PutVectors` permission to use this operation.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3VectorsClient, PutVectorsCommand } from "@aws-sdk/client-s3vectors"; // ES Modules import
 * // const { S3VectorsClient, PutVectorsCommand } = require("@aws-sdk/client-s3vectors"); // CommonJS import
 * // import type { S3VectorsClientConfig } from "@aws-sdk/client-s3vectors";
 * const config = {}; // type is S3VectorsClientConfig
 * const client = new S3VectorsClient(config);
 * const input = { // PutVectorsInput
 *   vectorBucketName: "STRING_VALUE",
 *   indexName: "STRING_VALUE",
 *   indexArn: "STRING_VALUE",
 *   vectors: [ // PutVectorsInputList // required
 *     { // PutInputVector
 *       key: "STRING_VALUE", // required
 *       data: { // VectorData Union: only one key present
 *         float32: [ // Float32VectorData
 *           Number("float"),
 *         ],
 *       },
 *       metadata: "DOCUMENT_VALUE",
 *     },
 *   ],
 * };
 * const command = new PutVectorsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutVectorsCommandInput - {@link PutVectorsCommandInput}
 * @returns {@link PutVectorsCommandOutput}
 * @see {@link PutVectorsCommandInput} for command's `input` shape.
 * @see {@link PutVectorsCommandOutput} for command's `response` shape.
 * @see {@link S3VectorsClientResolvedConfig | config} for S3VectorsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access denied.
 *
 * @throws {@link KmsDisabledException} (client fault)
 *
 * The specified Amazon Web Services KMS key isn't enabled.
 *
 * @throws {@link KmsInvalidKeyUsageException} (client fault)
 *
 * The request was rejected for one of the following reasons:
 *
 * - The `KeyUsage` value of the KMS key is incompatible with the API operation.
 * - The encryption algorithm or signing algorithm specified for the operation is incompatible with the type of key material in the KMS key (`KeySpec`).
 *
 * For more information, see [InvalidKeyUsageException](https://docs.aws.amazon.com/kms/latest/APIReference/API_Encrypt.html#API_Encrypt_Errors) in the *Amazon Web Services Key Management Service API Reference*.
 *
 * @throws {@link KmsInvalidStateException} (client fault)
 *
 * The key state of the KMS key isn't compatible with the operation.
 *
 * For more information, see [KMSInvalidStateException](https://docs.aws.amazon.com/kms/latest/APIReference/API_Encrypt.html#API_Encrypt_Errors) in the *Amazon Web Services Key Management Service API Reference*.
 *
 * @throws {@link KmsNotFoundException} (client fault)
 *
 * The KMS key can't be found.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * The request was rejected because the specified resource can't be found.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * Your request exceeds a service quota.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service is unavailable. Wait briefly and retry your request. If it continues to fail, increase your waiting time between retries.
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
export class PutVectorsCommand extends command<PutVectorsCommandInput, PutVectorsCommandOutput>(
  _ep0,
  _mw0,
  "PutVectors",
  PutVectors$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutVectorsInput;
      output: {};
    };
    sdk: {
      input: PutVectorsCommandInput;
      output: PutVectorsCommandOutput;
    };
  };
}
