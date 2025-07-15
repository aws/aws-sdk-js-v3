// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteVectorsInput, DeleteVectorsOutput } from "../models/models_0";
import { de_DeleteVectorsCommand, se_DeleteVectorsCommand } from "../protocols/Aws_restJson1";
import { S3VectorsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3VectorsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <note> <p>Amazon S3 Vectors is in preview release for Amazon S3 and is subject to change.</p> </note> <p>Deletes one or more vectors in a vector index. To specify the vector index, you can either use both the vector bucket name and vector index name, or use the vector index Amazon Resource Name (ARN). </p> <dl> <dt>Permissions</dt> <dd> <p>You must have the <code>s3vectors:DeleteVectors</code> permission to use this operation. </p> </dd> </dl>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3VectorsClient, DeleteVectorsCommand } from "@aws-sdk/client-s3vectors"; // ES Modules import
 * // const { S3VectorsClient, DeleteVectorsCommand } = require("@aws-sdk/client-s3vectors"); // CommonJS import
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
 *  <p>Access denied.</p>
 *
 * @throws {@link KmsDisabledException} (client fault)
 *  <p>The specified Amazon Web Services KMS key isn't enabled.</p>
 *
 * @throws {@link KmsInvalidKeyUsageException} (client fault)
 *  <p>The request was rejected for one of the following reasons: </p> <ul> <li> <p>The <code>KeyUsage</code> value of the KMS key is incompatible with the API operation.</p> </li> <li> <p>The encryption algorithm or signing algorithm specified for the operation is incompatible with the type of key material in the KMS key (<code>KeySpec</code>).</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_Encrypt.html#API_Encrypt_Errors">InvalidKeyUsageException</a> in the <i>Amazon Web Services Key Management Service API Reference</i>.</p>
 *
 * @throws {@link KmsInvalidStateException} (client fault)
 *  <p>The key state of the KMS key isn't compatible with the operation.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_Encrypt.html#API_Encrypt_Errors">KMSInvalidStateException</a> in the <i>Amazon Web Services Key Management Service API Reference</i>.</p>
 *
 * @throws {@link KmsNotFoundException} (client fault)
 *  <p>The KMS key can't be found.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The request was rejected because the specified resource can't be found.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is unavailable. Wait briefly and retry your request. If it continues to fail, increase your waiting time between retries.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request failed due to an internal server error.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Your request exceeds a service quota. </p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The requested action isn't valid.</p>
 *
 * @throws {@link S3VectorsServiceException}
 * <p>Base exception class for all service exceptions from S3Vectors service.</p>
 *
 *
 * @public
 */
export class DeleteVectorsCommand extends $Command
  .classBuilder<
    DeleteVectorsCommandInput,
    DeleteVectorsCommandOutput,
    S3VectorsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: S3VectorsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("S3Vectors", "DeleteVectors", {})
  .n("S3VectorsClient", "DeleteVectorsCommand")
  .f(void 0, void 0)
  .ser(se_DeleteVectorsCommand)
  .de(de_DeleteVectorsCommand)
  .build() {
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
