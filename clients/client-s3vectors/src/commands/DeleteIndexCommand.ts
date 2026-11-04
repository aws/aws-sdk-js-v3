// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteIndexInput, DeleteIndexOutput } from "../models/models_0";
import { DeleteIndex$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteIndexCommand}.
 */
export interface DeleteIndexCommandInput extends DeleteIndexInput {}
/**
 * @public
 *
 * The output of {@link DeleteIndexCommand}.
 */
export interface DeleteIndexCommandOutput extends DeleteIndexOutput, __MetadataBearer {}

/**
 * Deletes a vector index. To specify the vector index, you can either use both the vector bucket name and vector index name, or use the vector index Amazon Resource Name (ARN).
 *
 * - **Permissions**
 *
 *   You must have the `s3vectors:DeleteIndex` permission to use this operation.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3VectorsClient, DeleteIndexCommand } from "@aws-sdk/client-s3vectors"; // ES Modules import
 * // const { S3VectorsClient, DeleteIndexCommand } = require("@aws-sdk/client-s3vectors"); // CommonJS import
 * // import type { S3VectorsClientConfig } from "@aws-sdk/client-s3vectors";
 * const config = {}; // type is S3VectorsClientConfig
 * const client = new S3VectorsClient(config);
 * const input = { // DeleteIndexInput
 *   vectorBucketName: "STRING_VALUE",
 *   indexName: "STRING_VALUE",
 *   indexArn: "STRING_VALUE",
 * };
 * const command = new DeleteIndexCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteIndexCommandInput - {@link DeleteIndexCommandInput}
 * @returns {@link DeleteIndexCommandOutput}
 * @see {@link DeleteIndexCommandInput} for command's `input` shape.
 * @see {@link DeleteIndexCommandOutput} for command's `response` shape.
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
export class DeleteIndexCommand extends command<DeleteIndexCommandInput, DeleteIndexCommandOutput>(
  _ep0,
  _mw0,
  "DeleteIndex",
  DeleteIndex$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteIndexInput;
      output: {};
    };
    sdk: {
      input: DeleteIndexCommandInput;
      output: DeleteIndexCommandOutput;
    };
  };
}
