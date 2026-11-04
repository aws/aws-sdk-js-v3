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
 * Updates the mode for an existing vector index. You can set the mode to `ENHANCED` for any vector index. You can set the mode to `CLASSIC` only for a vector index in a vector bucket created before September 30, 2026. This operation doesn't change the default index mode of the vector bucket or the mode of other vector indexes. Specify the vector index by using its Amazon Resource Name (ARN) or both the vector bucket name and vector index name.
 *
 * - **Permissions**
 *
 *   You must have the `s3vectors:UpdateIndexMode` permission to use this operation.
 *
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
