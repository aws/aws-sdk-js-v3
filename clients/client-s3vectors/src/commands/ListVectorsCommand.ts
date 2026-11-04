// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListVectorsInput, ListVectorsOutput } from "../models/models_0";
import { ListVectors$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListVectorsCommand}.
 */
export interface ListVectorsCommandInput extends ListVectorsInput {}
/**
 * @public
 *
 * The output of {@link ListVectorsCommand}.
 */
export interface ListVectorsCommandOutput extends ListVectorsOutput, __MetadataBearer {}

/**
 * List vectors in the specified vector index. To specify the vector index, you can either use both the vector bucket name and the vector index name, or use the vector index Amazon Resource Name (ARN).
 *
 * `ListVectors` operations proceed sequentially; however, for faster performance on a large number of vectors in a vector index, applications can request a parallel `ListVectors` operation by providing the `segmentCount` and `segmentIndex` parameters.
 *
 * - **Permissions**
 *
 *   You must have the `s3vectors:ListVectors` permission to use this operation. Additional permissions are required based on the request parameters you specify:
 *
 *   - With only `s3vectors:ListVectors` permission, you can list vector keys when `returnData` and `returnMetadata` are both set to false or not specified..
 *   - If you set `returnData` or `returnMetadata` to true, you must have both `s3vectors:ListVectors` and `s3vectors:GetVectors` permissions. The request fails with a `403 Forbidden` error if you request vector data or metadata without the `s3vectors:GetVectors` permission.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3VectorsClient, ListVectorsCommand } from "@aws-sdk/client-s3vectors"; // ES Modules import
 * // const { S3VectorsClient, ListVectorsCommand } = require("@aws-sdk/client-s3vectors"); // CommonJS import
 * // import type { S3VectorsClientConfig } from "@aws-sdk/client-s3vectors";
 * const config = {}; // type is S3VectorsClientConfig
 * const client = new S3VectorsClient(config);
 * const input = { // ListVectorsInput
 *   vectorBucketName: "STRING_VALUE",
 *   indexName: "STRING_VALUE",
 *   indexArn: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   segmentCount: Number("int"),
 *   segmentIndex: Number("int"),
 *   returnData: true || false,
 *   returnMetadata: true || false,
 * };
 * const command = new ListVectorsCommand(input);
 * const response = await client.send(command);
 * // { // ListVectorsOutput
 * //   nextToken: "STRING_VALUE",
 * //   vectors: [ // ListVectorsOutputList // required
 * //     { // ListOutputVector
 * //       key: "STRING_VALUE", // required
 * //       data: { // VectorData Union: only one key present
 * //         float32: [ // Float32VectorData
 * //           Number("float"),
 * //         ],
 * //       },
 * //       metadata: "DOCUMENT_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListVectorsCommandInput - {@link ListVectorsCommandInput}
 * @returns {@link ListVectorsCommandOutput}
 * @see {@link ListVectorsCommandInput} for command's `input` shape.
 * @see {@link ListVectorsCommandOutput} for command's `response` shape.
 * @see {@link S3VectorsClientResolvedConfig | config} for S3VectorsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access denied.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * The request was rejected because the specified resource can't be found.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service is unavailable. Wait briefly and retry your request. If it continues to fail, increase your waiting time between retries.
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
export class ListVectorsCommand extends command<ListVectorsCommandInput, ListVectorsCommandOutput>(
  _ep0,
  _mw0,
  "ListVectors",
  ListVectors$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListVectorsInput;
      output: ListVectorsOutput;
    };
    sdk: {
      input: ListVectorsCommandInput;
      output: ListVectorsCommandOutput;
    };
  };
}
