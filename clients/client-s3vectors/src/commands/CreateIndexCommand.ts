// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateIndexInput, CreateIndexOutput } from "../models/models_0";
import type { S3VectorsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3VectorsClient";
import { CreateIndex } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateIndexCommand}.
 */
export interface CreateIndexCommandInput extends CreateIndexInput {}
/**
 * @public
 *
 * The output of {@link CreateIndexCommand}.
 */
export interface CreateIndexCommandOutput extends CreateIndexOutput, __MetadataBearer {}

/**
 * <p>Creates a vector index within a vector bucket. To specify the vector bucket, you must use either the vector bucket name or the vector bucket Amazon Resource Name (ARN).</p> <dl> <dt>Permissions</dt> <dd> <p>You must have the <code>s3vectors:CreateIndex</code> permission to use this operation.</p> <p>You must have the <code>s3vectors:TagResource</code> permission in addition to <code>s3vectors:CreateIndex</code> permission to create a vector index with tags.</p> </dd> </dl>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3VectorsClient, CreateIndexCommand } from "@aws-sdk/client-s3vectors"; // ES Modules import
 * // const { S3VectorsClient, CreateIndexCommand } = require("@aws-sdk/client-s3vectors"); // CommonJS import
 * // import type { S3VectorsClientConfig } from "@aws-sdk/client-s3vectors";
 * const config = {}; // type is S3VectorsClientConfig
 * const client = new S3VectorsClient(config);
 * const input = { // CreateIndexInput
 *   vectorBucketName: "STRING_VALUE",
 *   vectorBucketArn: "STRING_VALUE",
 *   indexName: "STRING_VALUE", // required
 *   dataType: "float32", // required
 *   dimension: Number("int"), // required
 *   distanceMetric: "euclidean" || "cosine", // required
 *   metadataConfiguration: { // MetadataConfiguration
 *     nonFilterableMetadataKeys: [ // NonFilterableMetadataKeys // required
 *       "STRING_VALUE",
 *     ],
 *   },
 *   encryptionConfiguration: { // EncryptionConfiguration
 *     sseType: "AES256" || "aws:kms",
 *     kmsKeyArn: "STRING_VALUE",
 *   },
 *   tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateIndexCommand(input);
 * const response = await client.send(command);
 * // { // CreateIndexOutput
 * //   indexArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateIndexCommandInput - {@link CreateIndexCommandInput}
 * @returns {@link CreateIndexCommandOutput}
 * @see {@link CreateIndexCommandInput} for command's `input` shape.
 * @see {@link CreateIndexCommandOutput} for command's `response` shape.
 * @see {@link S3VectorsClientResolvedConfig | config} for S3VectorsClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request failed because a vector bucket name or a vector index name already exists. Vector bucket names must be unique within your Amazon Web Services account for each Amazon Web Services Region. Vector index names must be unique within your vector bucket. Choose a different vector bucket name or vector index name, and try again.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The request was rejected because the specified resource can't be found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Your request exceeds a service quota. </p>
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
export class CreateIndexCommand extends $Command
  .classBuilder<
    CreateIndexCommandInput,
    CreateIndexCommandOutput,
    S3VectorsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: S3VectorsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("S3Vectors", "CreateIndex", {})
  .n("S3VectorsClient", "CreateIndexCommand")
  .sc(CreateIndex)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateIndexInput;
      output: CreateIndexOutput;
    };
    sdk: {
      input: CreateIndexCommandInput;
      output: CreateIndexCommandOutput;
    };
  };
}
