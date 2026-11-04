// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListVectorBucketsInput, ListVectorBucketsOutput } from "../models/models_0";
import { ListVectorBuckets$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListVectorBucketsCommand}.
 */
export interface ListVectorBucketsCommandInput extends ListVectorBucketsInput {}
/**
 * @public
 *
 * The output of {@link ListVectorBucketsCommand}.
 */
export interface ListVectorBucketsCommandOutput extends ListVectorBucketsOutput, __MetadataBearer {}

/**
 * Returns a list of all the vector buckets that are owned by the authenticated sender of the request.
 *
 * - **Permissions**
 *
 *   You must have the `s3vectors:ListVectorBuckets` permission to use this operation.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3VectorsClient, ListVectorBucketsCommand } from "@aws-sdk/client-s3vectors"; // ES Modules import
 * // const { S3VectorsClient, ListVectorBucketsCommand } = require("@aws-sdk/client-s3vectors"); // CommonJS import
 * // import type { S3VectorsClientConfig } from "@aws-sdk/client-s3vectors";
 * const config = {}; // type is S3VectorsClientConfig
 * const client = new S3VectorsClient(config);
 * const input = { // ListVectorBucketsInput
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   prefix: "STRING_VALUE",
 * };
 * const command = new ListVectorBucketsCommand(input);
 * const response = await client.send(command);
 * // { // ListVectorBucketsOutput
 * //   nextToken: "STRING_VALUE",
 * //   vectorBuckets: [ // ListVectorBucketsOutputList // required
 * //     { // VectorBucketSummary
 * //       vectorBucketName: "STRING_VALUE", // required
 * //       vectorBucketArn: "STRING_VALUE", // required
 * //       creationTime: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListVectorBucketsCommandInput - {@link ListVectorBucketsCommandInput}
 * @returns {@link ListVectorBucketsCommandOutput}
 * @see {@link ListVectorBucketsCommandInput} for command's `input` shape.
 * @see {@link ListVectorBucketsCommandOutput} for command's `response` shape.
 * @see {@link S3VectorsClientResolvedConfig | config} for S3VectorsClient's `config` shape.
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
export class ListVectorBucketsCommand extends command<ListVectorBucketsCommandInput, ListVectorBucketsCommandOutput>(
  _ep0,
  _mw0,
  "ListVectorBuckets",
  ListVectorBuckets$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListVectorBucketsInput;
      output: ListVectorBucketsOutput;
    };
    sdk: {
      input: ListVectorBucketsCommandInput;
      output: ListVectorBucketsCommandOutput;
    };
  };
}
