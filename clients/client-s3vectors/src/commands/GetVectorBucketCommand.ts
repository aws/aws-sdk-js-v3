// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetVectorBucketInput, GetVectorBucketOutput } from "../models/models_0";
import { GetVectorBucket$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Returns vector bucket attributes. To specify the bucket, you must use either the vector bucket name or the vector bucket Amazon Resource Name (ARN).
 *
 * - **Permissions**
 *
 *   You must have the `s3vectors:GetVectorBucket` permission to use this operation.
 *
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
 * //     defaultIndexMode: "CLASSIC" || "ENHANCED",
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
export class GetVectorBucketCommand extends command<GetVectorBucketCommandInput, GetVectorBucketCommandOutput>(
  _ep0,
  _mw0,
  "GetVectorBucket",
  GetVectorBucket$
) {
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
