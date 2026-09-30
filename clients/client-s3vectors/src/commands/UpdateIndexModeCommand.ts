// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateIndexModeInput, UpdateIndexModeOutput } from "../models/models_0";
import { UpdateIndexMode$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateIndexModeCommand}.
 */
export interface UpdateIndexModeCommandInput extends UpdateIndexModeInput {}
/**
 * @public
 *
 * The output of {@link UpdateIndexModeCommand}.
 */
export interface UpdateIndexModeCommandOutput extends UpdateIndexModeOutput, __MetadataBearer {}

/**
 * <p>Updates the mode for an existing vector index. You can set the mode to <code>ENHANCED</code> for any vector index. You can set the mode to <code>CLASSIC</code> only for a vector index in a vector bucket created before September 30, 2026. This operation doesn't change the default index mode of the vector bucket or the mode of other vector indexes. Specify the vector index by using its Amazon Resource Name (ARN) or both the vector bucket name and vector index name.</p> <dl> <dt>Permissions</dt> <dd> <p>You must have the <code>s3vectors:UpdateIndexMode</code> permission to use this operation.</p> </dd> </dl>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3VectorsClient, UpdateIndexModeCommand } from "@aws-sdk/client-s3vectors"; // ES Modules import
 * // const { S3VectorsClient, UpdateIndexModeCommand } = require("@aws-sdk/client-s3vectors"); // CommonJS import
 * // import type { S3VectorsClientConfig } from "@aws-sdk/client-s3vectors";
 * const config = {}; // type is S3VectorsClientConfig
 * const client = new S3VectorsClient(config);
 * const input = { // UpdateIndexModeInput
 *   vectorBucketName: "STRING_VALUE",
 *   indexName: "STRING_VALUE",
 *   indexArn: "STRING_VALUE",
 *   indexMode: "CLASSIC" || "ENHANCED", // required
 * };
 * const command = new UpdateIndexModeCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateIndexModeCommandInput - {@link UpdateIndexModeCommandInput}
 * @returns {@link UpdateIndexModeCommandOutput}
 * @see {@link UpdateIndexModeCommandInput} for command's `input` shape.
 * @see {@link UpdateIndexModeCommandOutput} for command's `response` shape.
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
export class UpdateIndexModeCommand extends command<UpdateIndexModeCommandInput, UpdateIndexModeCommandOutput>(
  _ep0,
  _mw0,
  "UpdateIndexMode",
  UpdateIndexMode$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateIndexModeInput;
      output: {};
    };
    sdk: {
      input: UpdateIndexModeCommandInput;
      output: UpdateIndexModeCommandOutput;
    };
  };
}
