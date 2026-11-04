// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutVectorBucketPolicyInput, PutVectorBucketPolicyOutput } from "../models/models_0";
import { PutVectorBucketPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutVectorBucketPolicyCommand}.
 */
export interface PutVectorBucketPolicyCommandInput extends PutVectorBucketPolicyInput {}
/**
 * @public
 *
 * The output of {@link PutVectorBucketPolicyCommand}.
 */
export interface PutVectorBucketPolicyCommandOutput extends PutVectorBucketPolicyOutput, __MetadataBearer {}

/**
 * Creates a bucket policy for a vector bucket. To specify the bucket, you must use either the vector bucket name or the vector bucket Amazon Resource Name (ARN).
 *
 * - **Permissions**
 *
 *   You must have the `s3vectors:PutVectorBucketPolicy` permission to use this operation.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3VectorsClient, PutVectorBucketPolicyCommand } from "@aws-sdk/client-s3vectors"; // ES Modules import
 * // const { S3VectorsClient, PutVectorBucketPolicyCommand } = require("@aws-sdk/client-s3vectors"); // CommonJS import
 * // import type { S3VectorsClientConfig } from "@aws-sdk/client-s3vectors";
 * const config = {}; // type is S3VectorsClientConfig
 * const client = new S3VectorsClient(config);
 * const input = { // PutVectorBucketPolicyInput
 *   vectorBucketName: "STRING_VALUE",
 *   vectorBucketArn: "STRING_VALUE",
 *   policy: "STRING_VALUE", // required
 * };
 * const command = new PutVectorBucketPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutVectorBucketPolicyCommandInput - {@link PutVectorBucketPolicyCommandInput}
 * @returns {@link PutVectorBucketPolicyCommandOutput}
 * @see {@link PutVectorBucketPolicyCommandInput} for command's `input` shape.
 * @see {@link PutVectorBucketPolicyCommandOutput} for command's `response` shape.
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
export class PutVectorBucketPolicyCommand extends command<PutVectorBucketPolicyCommandInput, PutVectorBucketPolicyCommandOutput>(
  _ep0,
  _mw0,
  "PutVectorBucketPolicy",
  PutVectorBucketPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutVectorBucketPolicyInput;
      output: {};
    };
    sdk: {
      input: PutVectorBucketPolicyCommandInput;
      output: PutVectorBucketPolicyCommandOutput;
    };
  };
}
