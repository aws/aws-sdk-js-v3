// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { QueryVectorsInput, QueryVectorsOutput } from "../models/models_0";
import { QueryVectors$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link QueryVectorsCommand}.
 */
export interface QueryVectorsCommandInput extends QueryVectorsInput {}
/**
 * @public
 *
 * The output of {@link QueryVectorsCommand}.
 */
export interface QueryVectorsCommandOutput extends QueryVectorsOutput, __MetadataBearer {}

/**
 * Performs an approximate nearest neighbor search query in a vector index using a query vector. By default, it returns the keys of approximate nearest neighbors. You can optionally include the computed distance (between the query vector and each vector in the response) and metadata of each vector in the response.
 *
 * To specify the vector index, you can either use both the vector bucket name and the vector index name, or use the vector index Amazon Resource Name (ARN).
 *
 * - **Permissions**
 *
 *   You must have the `s3vectors:QueryVectors` permission to use this operation. Additional permissions are required based on the request parameters you specify:
 *
 *   - With only `s3vectors:QueryVectors` permission, you can retrieve vector keys of approximate nearest neighbors and computed distances between these vectors. This permission is sufficient only when you don't set any metadata filters and don't request metadata (by keeping the `returnMetadata` parameter set to `false` or not specified).
 *   - If you specify a metadata filter or set `returnMetadata` to true, you must have both `s3vectors:QueryVectors` and `s3vectors:GetVectors` permissions. The request fails with a `403 Forbidden error` if you request metadata filtering or metadata without the `s3vectors:GetVectors` permission.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3VectorsClient, QueryVectorsCommand } from "@aws-sdk/client-s3vectors"; // ES Modules import
 * // const { S3VectorsClient, QueryVectorsCommand } = require("@aws-sdk/client-s3vectors"); // CommonJS import
 * // import type { S3VectorsClientConfig } from "@aws-sdk/client-s3vectors";
 * const config = {}; // type is S3VectorsClientConfig
 * const client = new S3VectorsClient(config);
 * const input = { // QueryVectorsInput
 *   vectorBucketName: "STRING_VALUE",
 *   indexName: "STRING_VALUE",
 *   indexArn: "STRING_VALUE",
 *   topK: Number("int"), // required
 *   queryVector: { // VectorData Union: only one key present
 *     float32: [ // Float32VectorData
 *       Number("float"),
 *     ],
 *   },
 *   filter: "DOCUMENT_VALUE",
 *   queryMode: "CLASSIC" || "ENHANCED",
 *   returnMetadata: true || false,
 *   returnDistance: true || false,
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new QueryVectorsCommand(input);
 * const response = await client.send(command);
 * // { // QueryVectorsOutput
 * //   vectors: [ // QueryVectorsOutputList // required
 * //     { // QueryOutputVector
 * //       distance: Number("float"),
 * //       key: "STRING_VALUE", // required
 * //       metadata: "DOCUMENT_VALUE",
 * //     },
 * //   ],
 * //   distanceMetric: "euclidean" || "cosine", // required
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param QueryVectorsCommandInput - {@link QueryVectorsCommandInput}
 * @returns {@link QueryVectorsCommandOutput}
 * @see {@link QueryVectorsCommandInput} for command's `input` shape.
 * @see {@link QueryVectorsCommandOutput} for command's `response` shape.
 * @see {@link S3VectorsClientResolvedConfig | config} for S3VectorsClient's `config` shape.
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
export class QueryVectorsCommand extends command<QueryVectorsCommandInput, QueryVectorsCommandOutput>(
  _ep0,
  _mw0,
  "QueryVectors",
  QueryVectors$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: QueryVectorsInput;
      output: QueryVectorsOutput;
    };
    sdk: {
      input: QueryVectorsCommandInput;
      output: QueryVectorsCommandOutput;
    };
  };
}
