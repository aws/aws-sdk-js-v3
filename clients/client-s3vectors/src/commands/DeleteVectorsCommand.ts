// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteVectorsInput, DeleteVectorsOutput } from "../models/models_0";
import { DeleteVectors$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteVectorsCommand}.
 */
export interface DeleteVectorsCommandInput extends DeleteVectorsInput {}
/**
 * @public
 *
 * The output of {@link DeleteVectorsCommand}.
 */
export interface DeleteVectorsCommandOutput extends DeleteVectorsOutput, __MetadataBearer {}

/**
 * Deletes one or more vectors in a vector index. To specify the vector index, you can either use both the vector bucket name and vector index name, or use the vector index Amazon Resource Name (ARN).
 *
 * - **Permissions**
 *
 *   You must have the `s3vectors:DeleteVectors` permission to use this operation.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3VectorsClient, DeleteVectorsCommand } from "@aws-sdk/client-s3vectors"; // ES Modules import
 * // const { S3VectorsClient, DeleteVectorsCommand } = require("@aws-sdk/client-s3vectors"); // CommonJS import
 * // import type { S3VectorsClientConfig } from "@aws-sdk/client-s3vectors";
 * const config = {}; // type is S3VectorsClientConfig
 * const client = new S3VectorsClient(config);
 * const input = { // DeleteVectorsInput
 *   vectorBucketName: "STRING_VALUE",
 *   indexName: "STRING_VALUE",
 *   indexArn: "STRING_VALUE",
 *   keys: [ // DeleteVectorsInputList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DeleteVectorsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteVectorsCommandInput - {@link DeleteVectorsCommandInput}
 * @returns {@link DeleteVectorsCommandOutput}
 * @see {@link DeleteVectorsCommandInput} for command's `input` shape.
 * @see {@link DeleteVectorsCommandOutput} for command's `response` shape.
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
export class DeleteVectorsCommand extends command<DeleteVectorsCommandInput, DeleteVectorsCommandOutput>(
  _ep0,
  _mw0,
  "DeleteVectors",
  DeleteVectors$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteVectorsInput;
      output: {};
    };
    sdk: {
      input: DeleteVectorsCommandInput;
      output: DeleteVectorsCommandOutput;
    };
  };
}
