// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateVectorBucketInput, CreateVectorBucketOutput } from "../models/models_0";
import { de_CreateVectorBucketCommand, se_CreateVectorBucketCommand } from "../protocols/Aws_restJson1";
import { S3VectorsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3VectorsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <note> <p>Amazon S3 Vectors is in preview release for Amazon S3 and is subject to change.</p> </note> <p>Creates a vector bucket in the Amazon Web Services Region that you want your bucket to be in. </p> <dl> <dt>Permissions</dt> <dd> <p>You must have the <code>s3vectors:CreateVectorBucket</code> permission to use this operation. </p> </dd> </dl>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3VectorsClient, CreateVectorBucketCommand } from "@aws-sdk/client-s3vectors"; // ES Modules import
 * // const { S3VectorsClient, CreateVectorBucketCommand } = require("@aws-sdk/client-s3vectors"); // CommonJS import
 * const client = new S3VectorsClient(config);
 * const input = { // CreateVectorBucketInput
 *   vectorBucketName: "STRING_VALUE", // required
 *   encryptionConfiguration: { // EncryptionConfiguration
 *     sseType: "AES256" || "aws:kms",
 *     kmsKeyArn: "STRING_VALUE",
 *   },
 * };
 * const command = new CreateVectorBucketCommand(input);
 * const response = await client.send(command);
 * // {};
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
 *  <p>The request failed because a vector bucket name or a vector index name already exists. Vector bucket names must be unique within your Amazon Web Services account for each Amazon Web Services Region. Vector index names must be unique within your vector bucket. Choose a different vector bucket name or vector index name, and try again.</p>
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
export class CreateVectorBucketCommand extends $Command
  .classBuilder<
    CreateVectorBucketCommandInput,
    CreateVectorBucketCommandOutput,
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
  .s("S3Vectors", "CreateVectorBucket", {})
  .n("S3VectorsClient", "CreateVectorBucketCommand")
  .f(void 0, void 0)
  .ser(se_CreateVectorBucketCommand)
  .de(de_CreateVectorBucketCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateVectorBucketInput;
      output: {};
    };
    sdk: {
      input: CreateVectorBucketCommandInput;
      output: CreateVectorBucketCommandOutput;
    };
  };
}
