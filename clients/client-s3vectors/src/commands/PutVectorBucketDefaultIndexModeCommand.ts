// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutVectorBucketDefaultIndexModeInput, PutVectorBucketDefaultIndexModeOutput } from "../models/models_0";
import { PutVectorBucketDefaultIndexMode$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutVectorBucketDefaultIndexModeCommand}.
 */
export interface PutVectorBucketDefaultIndexModeCommandInput extends PutVectorBucketDefaultIndexModeInput {}
/**
 * @public
 *
 * The output of {@link PutVectorBucketDefaultIndexModeCommand}.
 */
export interface PutVectorBucketDefaultIndexModeCommandOutput extends PutVectorBucketDefaultIndexModeOutput, __MetadataBearer {}

/**
 * Updates the default index mode for a vector bucket. The updated default applies to vector indexes that you create after the request succeeds. The operation doesn't change existing vector indexes. To specify the vector bucket, you must use either the vector bucket name or the vector bucket Amazon Resource Name (ARN).
 *
 * - **Permissions**
 *
 *   You must have the `s3vectors:PutVectorBucketDefaultIndexMode` permission to use this operation.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3VectorsClient, PutVectorBucketDefaultIndexModeCommand } from "@aws-sdk/client-s3vectors"; // ES Modules import
 * // const { S3VectorsClient, PutVectorBucketDefaultIndexModeCommand } = require("@aws-sdk/client-s3vectors"); // CommonJS import
 * // import type { S3VectorsClientConfig } from "@aws-sdk/client-s3vectors";
 * const config = {}; // type is S3VectorsClientConfig
 * const client = new S3VectorsClient(config);
 * const input = { // PutVectorBucketDefaultIndexModeInput
 *   vectorBucketName: "STRING_VALUE",
 *   vectorBucketArn: "STRING_VALUE",
 *   defaultIndexMode: "CLASSIC" || "ENHANCED", // required
 * };
 * const command = new PutVectorBucketDefaultIndexModeCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutVectorBucketDefaultIndexModeCommandInput - {@link PutVectorBucketDefaultIndexModeCommandInput}
 * @returns {@link PutVectorBucketDefaultIndexModeCommandOutput}
 * @see {@link PutVectorBucketDefaultIndexModeCommandInput} for command's `input` shape.
 * @see {@link PutVectorBucketDefaultIndexModeCommandOutput} for command's `response` shape.
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
export class PutVectorBucketDefaultIndexModeCommand extends command<PutVectorBucketDefaultIndexModeCommandInput, PutVectorBucketDefaultIndexModeCommandOutput>(
  _ep0,
  _mw0,
  "PutVectorBucketDefaultIndexMode",
  PutVectorBucketDefaultIndexMode$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutVectorBucketDefaultIndexModeInput;
      output: {};
    };
    sdk: {
      input: PutVectorBucketDefaultIndexModeCommandInput;
      output: PutVectorBucketDefaultIndexModeCommandOutput;
    };
  };
}
