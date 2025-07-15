// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteVectorBucketInput, DeleteVectorBucketOutput } from "../models/models_0";
import { de_DeleteVectorBucketCommand, se_DeleteVectorBucketCommand } from "../protocols/Aws_restJson1";
import { S3VectorsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3VectorsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteVectorBucketCommand}.
 */
export interface DeleteVectorBucketCommandInput extends DeleteVectorBucketInput {}
/**
 * @public
 *
 * The output of {@link DeleteVectorBucketCommand}.
 */
export interface DeleteVectorBucketCommandOutput extends DeleteVectorBucketOutput, __MetadataBearer {}

/**
 * <note> <p>Amazon S3 Vectors is in preview release for Amazon S3 and is subject to change.</p> </note> <p>Deletes a vector bucket. All vector indexes in the vector bucket must be deleted before the vector bucket can be deleted. To perform this operation, you must use either the vector bucket name or the vector bucket Amazon Resource Name (ARN). </p> <dl> <dt>Permissions</dt> <dd> <p>You must have the <code>s3vectors:DeleteVectorBucket</code> permission to use this operation. </p> </dd> </dl>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3VectorsClient, DeleteVectorBucketCommand } from "@aws-sdk/client-s3vectors"; // ES Modules import
 * // const { S3VectorsClient, DeleteVectorBucketCommand } = require("@aws-sdk/client-s3vectors"); // CommonJS import
 * const client = new S3VectorsClient(config);
 * const input = { // DeleteVectorBucketInput
 *   vectorBucketName: "STRING_VALUE",
 *   vectorBucketArn: "STRING_VALUE",
 * };
 * const command = new DeleteVectorBucketCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteVectorBucketCommandInput - {@link DeleteVectorBucketCommandInput}
 * @returns {@link DeleteVectorBucketCommandOutput}
 * @see {@link DeleteVectorBucketCommandInput} for command's `input` shape.
 * @see {@link DeleteVectorBucketCommandOutput} for command's `response` shape.
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
export class DeleteVectorBucketCommand extends $Command
  .classBuilder<
    DeleteVectorBucketCommandInput,
    DeleteVectorBucketCommandOutput,
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
  .s("S3Vectors", "DeleteVectorBucket", {})
  .n("S3VectorsClient", "DeleteVectorBucketCommand")
  .f(void 0, void 0)
  .ser(se_DeleteVectorBucketCommand)
  .de(de_DeleteVectorBucketCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteVectorBucketInput;
      output: {};
    };
    sdk: {
      input: DeleteVectorBucketCommandInput;
      output: DeleteVectorBucketCommandOutput;
    };
  };
}
