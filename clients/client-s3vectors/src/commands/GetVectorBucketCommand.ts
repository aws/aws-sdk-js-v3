// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetVectorBucketInput, GetVectorBucketOutput } from "../models/models_0";
import type { S3VectorsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3VectorsClient";
import { GetVectorBucket } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetVectorBucketCommand}.
 */
export interface GetVectorBucketCommandInput extends GetVectorBucketInput {}
/**
 * @public
 *
 * The output of {@link GetVectorBucketCommand}.
 */
export interface GetVectorBucketCommandOutput extends GetVectorBucketOutput, __MetadataBearer {}

/**
 * <p>Returns vector bucket attributes. To specify the bucket, you must use either the vector bucket name or the vector bucket Amazon Resource Name (ARN). </p> <dl> <dt>Permissions</dt> <dd> <p>You must have the <code>s3vectors:GetVectorBucket</code> permission to use this operation. </p> </dd> </dl>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3VectorsClient, GetVectorBucketCommand } from "@aws-sdk/client-s3vectors"; // ES Modules import
 * // const { S3VectorsClient, GetVectorBucketCommand } = require("@aws-sdk/client-s3vectors"); // CommonJS import
 * // import type { S3VectorsClientConfig } from "@aws-sdk/client-s3vectors";
 * const config = {}; // type is S3VectorsClientConfig
 * const client = new S3VectorsClient(config);
 * const input = { // GetVectorBucketInput
 *   vectorBucketName: "STRING_VALUE",
 *   vectorBucketArn: "STRING_VALUE",
 * };
 * const command = new GetVectorBucketCommand(input);
 * const response = await client.send(command);
 * // { // GetVectorBucketOutput
 * //   vectorBucket: { // VectorBucket
 * //     vectorBucketName: "STRING_VALUE", // required
 * //     vectorBucketArn: "STRING_VALUE", // required
 * //     creationTime: new Date("TIMESTAMP"), // required
 * //     encryptionConfiguration: { // EncryptionConfiguration
 * //       sseType: "AES256" || "aws:kms",
 * //       kmsKeyArn: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetVectorBucketCommandInput - {@link GetVectorBucketCommandInput}
 * @returns {@link GetVectorBucketCommandOutput}
 * @see {@link GetVectorBucketCommandInput} for command's `input` shape.
 * @see {@link GetVectorBucketCommandOutput} for command's `response` shape.
 * @see {@link S3VectorsClientResolvedConfig | config} for S3VectorsClient's `config` shape.
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
 * @throws {@link RequestTimeoutException} (client fault)
 *  <p>The request timed out. Retry your request.</p>
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
export class GetVectorBucketCommand extends $Command
  .classBuilder<
    GetVectorBucketCommandInput,
    GetVectorBucketCommandOutput,
    S3VectorsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: S3VectorsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("S3Vectors", "GetVectorBucket", {})
  .n("S3VectorsClient", "GetVectorBucketCommand")
  .sc(GetVectorBucket)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetVectorBucketInput;
      output: GetVectorBucketOutput;
    };
    sdk: {
      input: GetVectorBucketCommandInput;
      output: GetVectorBucketCommandOutput;
    };
  };
}
