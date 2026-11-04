// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetVectorBucketPolicyInput, GetVectorBucketPolicyOutput } from "../models/models_0";
import { GetVectorBucketPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetVectorBucketPolicyCommand}.
 */
export interface GetVectorBucketPolicyCommandInput extends GetVectorBucketPolicyInput {}
/**
 * @public
 *
 * The output of {@link GetVectorBucketPolicyCommand}.
 */
export interface GetVectorBucketPolicyCommandOutput extends GetVectorBucketPolicyOutput, __MetadataBearer {}

/**
 * Gets details about a vector bucket policy. To specify the bucket, you must use either the vector bucket name or the vector bucket Amazon Resource Name (ARN).
 *
 * - **Permissions**
 *
 *   You must have the `s3vectors:GetVectorBucketPolicy` permission to use this operation.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3VectorsClient, GetVectorBucketPolicyCommand } from "@aws-sdk/client-s3vectors"; // ES Modules import
 * // const { S3VectorsClient, GetVectorBucketPolicyCommand } = require("@aws-sdk/client-s3vectors"); // CommonJS import
 * // import type { S3VectorsClientConfig } from "@aws-sdk/client-s3vectors";
 * const config = {}; // type is S3VectorsClientConfig
 * const client = new S3VectorsClient(config);
 * const input = { // GetVectorBucketPolicyInput
 *   vectorBucketName: "STRING_VALUE",
 *   vectorBucketArn: "STRING_VALUE",
 * };
 * const command = new GetVectorBucketPolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetVectorBucketPolicyOutput
 * //   policy: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetVectorBucketPolicyCommandInput - {@link GetVectorBucketPolicyCommandInput}
 * @returns {@link GetVectorBucketPolicyCommandOutput}
 * @see {@link GetVectorBucketPolicyCommandInput} for command's `input` shape.
 * @see {@link GetVectorBucketPolicyCommandOutput} for command's `response` shape.
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
export class GetVectorBucketPolicyCommand extends command<GetVectorBucketPolicyCommandInput, GetVectorBucketPolicyCommandOutput>(
  _ep0,
  _mw0,
  "GetVectorBucketPolicy",
  GetVectorBucketPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetVectorBucketPolicyInput;
      output: GetVectorBucketPolicyOutput;
    };
    sdk: {
      input: GetVectorBucketPolicyCommandInput;
      output: GetVectorBucketPolicyCommandOutput;
    };
  };
}
