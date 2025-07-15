// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetVectorsInput, GetVectorsOutput } from "../models/models_0";
import { de_GetVectorsCommand, se_GetVectorsCommand } from "../protocols/Aws_restJson1";
import { S3VectorsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3VectorsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetVectorsCommand}.
 */
export interface GetVectorsCommandInput extends GetVectorsInput {}
/**
 * @public
 *
 * The output of {@link GetVectorsCommand}.
 */
export interface GetVectorsCommandOutput extends GetVectorsOutput, __MetadataBearer {}

/**
 * <note> <p>Amazon S3 Vectors is in preview release for Amazon S3 and is subject to change.</p> </note> <p>Returns vector attributes. To specify the vector index, you can either use both the vector bucket name and the vector index name, or use the vector index Amazon Resource Name (ARN). </p> <dl> <dt>Permissions</dt> <dd> <p>You must have the <code>s3vectors:GetVectors</code> permission to use this operation. </p> </dd> </dl>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3VectorsClient, GetVectorsCommand } from "@aws-sdk/client-s3vectors"; // ES Modules import
 * // const { S3VectorsClient, GetVectorsCommand } = require("@aws-sdk/client-s3vectors"); // CommonJS import
 * const client = new S3VectorsClient(config);
 * const input = { // GetVectorsInput
 *   vectorBucketName: "STRING_VALUE",
 *   indexName: "STRING_VALUE",
 *   indexArn: "STRING_VALUE",
 *   keys: [ // GetVectorsInputList // required
 *     "STRING_VALUE",
 *   ],
 *   returnData: true || false,
 *   returnMetadata: true || false,
 * };
 * const command = new GetVectorsCommand(input);
 * const response = await client.send(command);
 * // { // GetVectorsOutput
 * //   vectors: [ // GetVectorsOutputList // required
 * //     { // GetOutputVector
 * //       key: "STRING_VALUE", // required
 * //       data: { // VectorData Union: only one key present
 * //         float32: [ // Float32VectorData
 * //           Number("float"),
 * //         ],
 * //       },
 * //       metadata: "DOCUMENT_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetVectorsCommandInput - {@link GetVectorsCommandInput}
 * @returns {@link GetVectorsCommandOutput}
 * @see {@link GetVectorsCommandInput} for command's `input` shape.
 * @see {@link GetVectorsCommandOutput} for command's `response` shape.
 * @see {@link S3VectorsClientResolvedConfig | config} for S3VectorsClient's `config` shape.
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
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access denied.</p>
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
export class GetVectorsCommand extends $Command
  .classBuilder<
    GetVectorsCommandInput,
    GetVectorsCommandOutput,
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
  .s("S3Vectors", "GetVectors", {})
  .n("S3VectorsClient", "GetVectorsCommand")
  .f(void 0, void 0)
  .ser(se_GetVectorsCommand)
  .de(de_GetVectorsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetVectorsInput;
      output: GetVectorsOutput;
    };
    sdk: {
      input: GetVectorsCommandInput;
      output: GetVectorsCommandOutput;
    };
  };
}
